---
layout: tutorial
title: Uploading Files
thumbnail: /tutorials/java-server/images/uploading-files-1.png
tagline: Let users upload images and other files.
sort-key: 1050
meta-title: Uploading Files
meta-description: Learn how to handle file uploads in your server code.
meta-image: /tutorials/java-server/images/uploading-files-2.png
tags: [tutorial, java, server, file-upload]
---

{% include toc.md %}

Now we know how to get user input using HTML forms, and we know how to store that data in a database. We can then use that data to render HTML from a servlet or JSP file.

But so far, all of our user input has been text-based. We've seen stuff like text fields, text areas, dropdown boxes, and checkboxes. But we haven't seen file uploads yet.

That's because file uploading requires slightly more complicated code than handling basic text input. This tutorial goes through what we need to do to handle file uploads.

## HTML

Let's start with what the user interacts with: first, we have to create an HTML form that contains a file input.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>File Upload Example</title>
	</head>
	<body>
		<form action="/upload" method="POST" enctype="multipart/form-data">
			<p>What's your name?</p>
			<input type="text" name="name" value="Ada">
			<p>What file do you want to upload?</p>
			<input type="file" name="fileToUpload">
			<br/><br/>
			<input type="submit" value="Submit">
		</form>
	</body>
</html>
```

This HTML page contains a form. Notice the `enctype="multipart/form-data"` attribute and the `<input type="file" name="fileToUpload">` element. This allows a user to select a file for uploading. This won't do anything yet, becuase we haven't created the server part yet! Let's do that now:

```java
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

public class FileUploadServlet extends HttpServlet {

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		//get the file chosen by the user
		Part filePart = request.getPart("fileToUpload");
		
		//get the InputStream to store the file somewhere
	    InputStream fileInputStream = filePart.getInputStream();
	    
	    //for example, you can copy the uploaded file to the server
	    //note that you probably don't want to do this in real life!
	    //upload it to a file host like S3 or GCS instead
	    File fileToSave = new File("WebContent/uploaded-files/" + filePart.getSubmittedFileName());
		Files.copy(fileInputStream, fileToSave.toPath(), StandardCopyOption.REPLACE_EXISTING);
		
		//get the URL of the uploaded file
		String fileUrl = "http://localhost:8080/uploaded-files/" + filePart.getSubmittedFileName();
		
		//You can get other form data too
		String name = request.getParameter("name");
		
		//create output HTML that uses the 
		response.getOutputStream().println("<p>Thanks " + name + "! Here's a link to your uploaded file:</p>");
		response.getOutputStream().println("<p><a href=\"" + fileUrl + "\">" + fileUrl + "</a></p>");
		response.getOutputStream().println("<p>Upload another file <a href=\"http://localhost:8080/index.html\">here</a>.</p>");	
	}
}
```

This servlet class contains the `doPost()` that will fire when the HTML form is submitted. First it gets the uploaded file in a `Part` object, and then gets an `InputStream` from that `Part`. From here we could use the `InputStream` to store the file wherever we wanted, but for now we just store it to the `WebContent/uploaded-files` folder, inside our web app directory. That stores the file under the `WebContent` directory, which means we can use a URL to point to the file! The code uses that fact to output HTML that contains a link to the file that was just uploaded.

Finally, we need a `web.xml` file that maps the `/upload` URL to this servlet:

```xml
<web-app
	xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
		http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
	version="3.1">

	<servlet>
		<servlet-name>FileUploadServlet</servlet-name>
		<servlet-class>FileUploadServlet</servlet-class>
		<multipart-config />
	</servlet>

	<servlet-mapping>
		<servlet-name>FileUploadServlet</servlet-name>
		<url-pattern>/upload</url-pattern>
	</servlet-mapping>

</web-app>
```

The only new thing here is the `<multipart-config />` tag. This enables the default configuration for file uploads, but you can also use this to [customize](https://docs.oracle.com/javaee/7/tutorial/servlets011.htm) stuff like maximum file size and whether uploaded files are stored in memory or in a temporary file.

Run this web app and navigate to `http://localhost:8080/index.html` to see our upload page:

![upload page](/tutorials/java-server/images/uploading-files-3.png)

Then click the `Choose File` button to open up a dialog that allows you to select a file from your hard drive, and then click the `Submit` button to upload that file to the server. You should then see a link to the file in your server:

![uploaded file link](/tutorials/java-server/images/uploading-files-4.png)

Depending on the type of file your uploaded, clicking the link will either display the contents of the file in the browser, or download the file. You can also right-click the link to download it, just like any other link to a file on the internet.

## Restricting Files

One common thing you'll probably want to do is restrict what types of files a user can upload. For example, maybe you only want users to upload image files, but not `.zip` or `.exe` files.

You can use the `accept` attribute on the HTML form to only allow images (more info on that approach [here](https://stackoverflow.com/questions/3828554/how-to-allow-input-type-file-to-accept-only-image-files)), but like we discussed before, hackers can easily get around client-side restrictions, so we have to do some server-side validation anyway.

Here's a simple modification to our servlet class that only allows users to upload files that end with `.jpg` or `.png`:

```java
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.StandardCopyOption;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

public class FileUploadServlet extends HttpServlet {

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		//get the file chosen by the user
		Part filePart = request.getPart("fileToUpload");
		
		if(filePart.getSubmittedFileName().endsWith(".jpg") || filePart.getSubmittedFileName().endsWith(".png")){

		    InputStream fileInputStream = filePart.getInputStream();
		    File fileToSave = new File("WebContent/uploaded-files/" + filePart.getSubmittedFileName());
			Files.copy(fileInputStream, fileToSave.toPath(), StandardCopyOption.REPLACE_EXISTING);
			
			String fileUrl = "http://localhost:8080/uploaded-files/" + filePart.getSubmittedFileName();			
			String name = request.getParameter("name");
			
			response.getOutputStream().println("<p>Thanks " + name + "! Here's the image you uploaded:</p>");
			response.getOutputStream().println("<img src=\"" + fileUrl + "\" />");
			response.getOutputStream().println("<p>Upload another image <a href=\"http://localhost:8080/index.html\">here</a>.</p>");	
		}
		else{
			//the file was not a JPG or PNG
			response.getOutputStream().println("<p>Please only upload JPG or PNG files.</p>");
			response.getOutputStream().println("<p>Upload another file <a href=\"http://localhost:8080/index.html\">here</a>.</p>");	
		}
	}
}
```

This code now checks whether the original name of the file ended with `.jpg` or `.png`, and if so, it goes through with the upload and creates HTML that contains an `<img>` tag that points to the URL of the uploaded image file:

![uploaded image file](/tutorials/java-server/images/uploading-files-5.png)

If the user tries to upload a file that ends with something other than `.jpg` or `.png`, then they get an error.

Note that this only checks the filename of the file, not its actual content. So we're still not stopping a user from, for example, creating a `.txt` file, renaming it to be a `.jpg` file, and then uploading that. If we want to prevent cases like that, then we have to examine the contents of the uploaded file to make sure it contains an allowed type. See [here](https://stackoverflow.com/questions/4169713/how-to-check-a-uploaded-file-whether-it-is-a-image-or-other-file) for a discussion on this approach, but basically: find a library that does this for you!

## File Hosting

The above examples store the uploaded file directly in the server directory, which is a bad idea for a few reasons. First, all of the files will be deleted whenever we make a change to our code and redeploy the server. And if we're using a server host like Elastic Beanstalk or App Engine, we might not even be allowed to store files on our server, which are usually supposed to be as lightweight as possible.

Instead of storing the files on the server or in the web app directory, in real life we probably want to use a file hosting provider. Using a file hosting provider allows us to store all of our files separately from the server running our code. When the user uploads a file, we get that file in memory on our server, and we then upload it to the file host. The file host then gives us a URL for the file that we can use in our HTML.

Note that it's also possible to store your files directly in a database, but that's generally not a great idea. Instead, the general approach is to store the file itself in a file hosting provider, and then store the URL of that file in a database.

## AWS S3

Amazon Simple Storage Service (aka [AWS S3](https://aws.amazon.com/s3/)) is a file hosting service offered by Amazon. It allows you to store your files in Amazon's cloud, and it offers a Java library that makes uploading to S3 pretty easy.

**Step 1:** Create an S3 bucket.

S3 uses the idea of **buckets**, which are a little bit like directories. You can organize your files into different buckets, and buckets can contain subdirectories that then contain files. Login to the [AWS S3 console](https://s3.console.aws.amazon.com) and then click the `Create bucket` button. Give your bucket whatever name you want (I'm calling mine `my-uploaded-files` for now.)

Click the `Next` button twice to set the permissions on the bucket. Under `Manage public permissions`, select `Grant public read access to this bucket`. You'll get a warning saying that this will allow anybody to view the files in this bucket, and that's exactly what we want! Note that you can also use S3 to create a private bucket for storing private files, but for now we're just going to create a public bucket that anybody on the internet can view. That way we can use URLs that point to these files!

Click `Next` again and then click `Create bucket` to create your bucket.

**Step 2:** Get your AWS credentials.

To interact with our S3 bucket through code, we need to get some credentials so we can prove it's us uploading files to our bucket. There are a bunch of ways to do this, but I'll walk through the simplest approach here. You might want to come back to this later and [read through your options](http://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html) and implement something a little bit more complicated, but for now let's just get something that works.

From the S3 console, click your name in the upper-right corner, and then click `My Security Credentials`. Click the `Access Keys` section, and then click the `Create New Access Key` button. In the dialog that pops up, click the `Show Access Key` link. This displays an `Access Key ID` and a `Secret Access Key`, which is basically a username and password for your AWS account. Copy these down, because you'll need them in a minute!

**Step 3:** Download the AWS S3 Java library.

We need this so we can write Java code that uploads files to our AWS S3 bucket. Go to the [AWS Java SDK page](https://aws.amazon.com/sdk-for-java/) and then click the `AWS SDK for Java` button in the `Downloads` section in the upper-right of this page. That downloads a `.zip` file, which you can unzip anywhere. (I'll put mine on my desktop for now.)

This directory contains a `aws-java-sdk.jar` file in the `lib` folder, and a bunch of other `.jar` files in the `third_party` folder.

**Step 4:** Copy those library jars into the `lib` folder of your web app directory.

The `aws-java-sdk.jar` file contains the main AWS Java library. But that library was built using a bunch of other libraries, so we need to copy them from the `third_party` folder. For the code we're going to write, we need these `.jar` files:

- `aws-java-sdk.jar`
- `commons-logging.jar`
- `httpclient.jar`
- `httpcore.jar`
- `jackson-annotations.jar`
- `jackson-core.jar`
- `jackson-databind.jar`
- `joda-time.jar`

If you're using Eclipse, you'll also want to add them to your project's build path. If you're using the command line, you'll have to add them to your classpath argument.

**Step 5:** Write code that uploads a file to S3.

Now that we have those library `.jar` files, we can write code using the classes in them. These classes allow us to write code that uploads a file to S3. Here's what our servlet class looks like using S3:

```java
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3ClientBuilder;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;

public class FileUploadServlet extends HttpServlet {

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		//get the file chosen by the user
		Part filePart = request.getPart("fileToUpload");
		String fileName = filePart.getSubmittedFileName();
		
		if(fileName.endsWith(".jpg") || fileName.endsWith(".png")){

		    InputStream fileInputStream = filePart.getInputStream();
		    
		    String accessKeyId = "YOUR_ACCESS_KEY_ID";
		    String secretAccessKey =  "YOUR_SECRET_ACCESS_KEY";
		    String region = "YOUR_BUCKET REGION";
		    String bucketName = "YOUR_BUCKET_NAME";
		    String subdirectory = "images/";
		    
		    //AWS Access Key ID and Secret Access Key
		    BasicAWSCredentials awsCreds = new BasicAWSCredentials(accessKeyId, secretAccessKey);
		   
		    //This class connects to AWS S3 for us
		    AmazonS3 s3client = AmazonS3ClientBuilder.standard().withRegion(region)
		    		.withCredentials(new AWSStaticCredentialsProvider(awsCreds)).build();
		    
		    //Specify the file's size
		    ObjectMetadata metadata = new ObjectMetadata();
		    metadata.setContentLength(filePart.getSize());

		    //Create the upload request, giving it a bucket name, subdirectory, filename, input stream, and metadata
		    PutObjectRequest uploadRequest = new PutObjectRequest(bucketName, subdirectory + fileName, fileInputStream, metadata);
		    //Make it public so we can use it as a public URL on the internet
		    uploadRequest.setCannedAcl(CannedAccessControlList.PublicRead);
		    
		    //Upload the file. This can take a while for big files!
		    s3client.putObject(uploadRequest);
		    
			//Create a URL using the bucket, subdirectory, and file name
			String fileUrl = "http://s3.amazonaws.com/" + bucketName + "/" + subdirectory + "/" + fileName;			
			
			//We can still get other data from the form
			String name = request.getParameter("name");
			
			response.getOutputStream().println("<p>Thanks " + name + "! Here's the image you uploaded:</p>");
			response.getOutputStream().println("<img src=\"" + fileUrl + "\" />");
			response.getOutputStream().println("<p>Upload another image <a href=\"http://localhost:8080/index.html\">here</a>.</p>");	
		}
		else{
			//the file was not a JPG or PNG
			response.getOutputStream().println("<p>Please only upload JPG or PNG files.</p>");
			response.getOutputStream().println("<p>Upload another file <a href=\"http://localhost:8080/index.html\">here</a>.</p>");	
		}
	}
}
```

This code uploads a file to our S3 bucket, and then creates a URL that points to the file we just uploaded. We can use that URL in our HTML, or we could store it in a database. But note that we're no longer storing the file on our server! Try running this web app, uploading a file, and then viewing your bucket in the S3 console. You'll see the file has been uploaded to your bucket.

This shows the basics of S3, but there are a ton of other things you can do. Here are a couple things worth checking out:

- Note that you should never save your credentials into a public repository! Instead, you can use a properties file to store your credentials, and then load that properties file from the code. As long as you don't store the properties file in your repo, you're okay. More info [here](http://docs.aws.amazon.com/sdk-for-java/v2/developer-guide/credentials.html).
- Uploads of large files can take a long time. You can get progress info and show something like a progress bar while the file uploads.
- You can use a custom URL for your S3 bucket by pointing a subdomain of your own domain (for example, `s3.example.com`) to your bucket's URL.

This tutorial is meant to show you the basics. You now know enough to start your own investigating! Check out the AWS Java SDK [developer guide](http://docs.aws.amazon.com/sdk-for-java/v2/developer-guide/welcome.html) for a ton more info.

## Homework

- Add the ability to upload profile pictures to your web app.