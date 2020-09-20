---
layout: tutorial
title: Cloud Storage Hello World
thumbnail: /tutorials/google-cloud/images/blobstore-4.png
tagline: Let users upload images and other files.
sort-key: 200
meta-title: Google Cloud Storage Hello World Example
meta-description: Let users upload images and other files.
meta-image: /tutorials/google-cloud/images/blobstore-5.png
previousPost: /examples/google-cloud/
tags: [example, java, server, google-cloud, app-engine, cloud-storage]
---

This is a barebones example webapp that lets the user upload files to Google Cloud Storage.

View the code for this project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/cloud-storage-hello-world).

Download the code as a `.zip` from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/cloud-storage-hello-world).

![file input](/examples/google-cloud/images/cloud-storage-hello-world-1.png)

![image uploaded](/examples/google-cloud/images/cloud-storage-hello-world-2.png)

**pom.xml**

`pom.xml` is a Maven POM file that defines the project.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>cloud-storage-hello-world</artifactId>
  <version>1</version>

  <properties>
    <!-- App Engine currently supports Java 11 -->
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <jetty.version>9.4.31.v20200723</jetty.version>

    <!-- Project-specific properties -->
    <exec.mainClass>io.happycoding.ServerMain</exec.mainClass>
    <googleCloudProjectId>YOUR_PROJECT_ID_HERE</googleCloudProjectId>
  </properties>

  <dependencies>
    <!-- Java Servlets API -->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
    </dependency>
    
    <!-- Google Cloud Storage -->
    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>google-cloud-storage</artifactId>
      <version>1.113.0</version>
    </dependency>

    <!-- Jetty -->
    <dependency>
      <groupId>org.eclipse.jetty</groupId>
      <artifactId>jetty-server</artifactId>
      <version>${jetty.version}</version>
    </dependency>
    <dependency>
      <groupId>org.eclipse.jetty</groupId>
      <artifactId>jetty-annotations</artifactId>
      <version>${jetty.version}</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <!-- Copy static resources like html files into the output jar file. -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-resources-plugin</artifactId>
        <version>2.7</version>
        <executions>
          <execution>
            <id>copy-web-resources</id>
            <phase>compile</phase>
            <goals><goal>copy-resources</goal></goals>
            <configuration>
              <outputDirectory>
                ${project.build.directory}/classes/META-INF/resources
              </outputDirectory>
              <resources>
                <resource><directory>./src/main/webapp</directory></resource>
              </resources>
            </configuration>
          </execution>
        </executions>
      </plugin>

      <!-- Package everything into a single executable jar file. -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId>
        <version>3.2.4</version>
        <executions>
          <execution>
            <phase>package</phase>
            <goals><goal>shade</goal></goals>
            <configuration>
              <createDependencyReducedPom>false</createDependencyReducedPom>
              <transformers>
                <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                  <mainClass>${exec.mainClass}</mainClass>
                </transformer>
              </transformers>
            </configuration>
          </execution>
        </executions>
      </plugin>

      <!-- App Engine plugin for deploying to the live site. -->
      <plugin>
        <groupId>com.google.cloud.tools</groupId>
        <artifactId>appengine-maven-plugin</artifactId>
        <version>2.2.0</version>
        <configuration>
          <projectId>${googleCloudProjectId}</projectId>
          <version>1</version>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

**app.yaml**

`app.yaml` is a [config file](https://cloud.google.com/appengine/docs/standard/java11/config/appref) that sets up App Engine. This hello world project only uses a single property that sets the runtime to Java 11.

```yaml
runtime: java11
```

**ServerMain.java**

`ServerMain.java` is the main class that sets up the server.

```java
package io.happycoding;

import java.net.URL;
import org.eclipse.jetty.annotations.AnnotationConfiguration;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.webapp.Configuration;
import org.eclipse.jetty.webapp.WebAppContext;
import org.eclipse.jetty.webapp.WebInfConfiguration;

/**
 * Starts up the server, including a DefaultServlet that handles static files,
 * and any servlet classes annotated with the @WebServlet annotation.
 */
public class ServerMain {

  public static void main(String[] args) throws Exception {

    // Create a server that listens on port 8080.
    Server server = new Server(8080);
    WebAppContext webAppContext = new WebAppContext();
    server.setHandler(webAppContext);

    // Load static content from inside the jar file.
    URL webAppDir =
        ServerMain.class.getClassLoader().getResource("META-INF/resources");
    webAppContext.setResourceBase(webAppDir.toURI().toString());

    // Enable annotations so the server sees classes annotated with @WebServlet.
    webAppContext.setConfigurations(new Configuration[]{ 
      new AnnotationConfiguration(),
      new WebInfConfiguration(), 
    });

    // Look for annotations in the classes directory (dev server) and in the
    // jar file (live server)
    webAppContext.setAttribute(
        "org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern", 
        ".*/target/classes/|.*\\.jar");

    // Handle static resources, e.g. html files.
    webAppContext.addServlet(DefaultServlet.class, "/");

    // Start the server! 🚀
    server.start();
    System.out.println("Server started!");

    // Keep the main thread alive while the server is running.
    server.join();
  }
}
```

**UploadServlet.java**

`UploadServlet.java` is a Java servlet that handles the file upload and outputs some HTML content.

```java
package io.happycoding.servlets;

import com.google.cloud.storage.Blob;
import com.google.cloud.storage.BlobId;
import com.google.cloud.storage.BlobInfo;
import com.google.cloud.storage.Storage;
import com.google.cloud.storage.StorageOptions;
import java.io.IOException;
import java.io.InputStream;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;

@MultipartConfig
@WebServlet("/upload")
public class UploadServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {

    // Submissions can contain other types of data
    String message = request.getParameter("message");

    // Get the file chosen by the user
    Part filePart = request.getPart("image");
    String fileName = filePart.getSubmittedFileName();
    InputStream fileInputStream = filePart.getInputStream();

    // Upload the file and get its URL
    String uploadedFileUrl = uploadToCloudStorage(fileName, fileInputStream);

    // Use the URL to output some HTML
    response.setContentType("text/html;");
    response.getWriter().println("<p>Your message: " + message + "</p>");
    response.getWriter().println("<p>Your image:</p>");
    response.getWriter().println("<img src=\"" + uploadedFileUrl + "\"  />");
  }
  
  /** Uploads a file to Cloud Storage and returns the uploaded file's URL. */
  private static String uploadToCloudStorage(String fileName, InputStream fileInputStream) {
    String projectId = "happy-coding-gcloud";
    String bucketName = "happy-coding-gcloud.appspot.com";
    Storage storage =
        StorageOptions.newBuilder().setProjectId(projectId).build().getService();
    BlobId blobId = BlobId.of(bucketName, fileName);
    BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
    Blob blob = storage.create(blobInfo, fileInputStream);
    return blob.getMediaLink();
  }
}
```

**index.html**

 `index.html` is an HTML file that shows a form with a file input.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Google Cloud Storage Hello World</title>
  </head>
  <body>
    <h1>Google Cloud Storage Hello World</h1>
    <p>This form lets you upload a file to Google Cloud Storage.</p>
    
    <form method="POST" enctype="multipart/form-data" action="/upload">

      <p>Type some text:</p>
      <textarea name="message"></textarea>
      <br/>

      <p>Upload an image:</p>
      <input type="file" name="image">
      <br/><br/>

      <button>Submit</button>
    </form>

    <p>Learn more at
        <a href="https://happycoding.io/google-cloud/cloud-storage">HappyCoding.io</a>.</p>
  </body>
</html>
```

You can run this locally by executing this command:

```
mvn package exec:java
```

Then visit http://localhost:8080 in your web browser, and you should see this:

![file input](/examples/google-cloud/images/cloud-storage-hello-world-1.png)

![image uploaded](/examples/google-cloud/images/cloud-storage-hello-world-2.png)

Learn more in these tutorials:

{% include url-thumbnail.html url="/tutorials/google-cloud/cloud-storage" %}
{% include url-thumbnail.html url="/tutorials/java-server/post" %}
{% include url-thumbnail.html url="/tutorials/java-server/uploading-files" %}
{% include url-thumbnail.html url="/tutorials/html/html-tags" %}