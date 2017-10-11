---
layout: tutorial
title: Eclipse EE
thumbnail: /tutorials/java/images/eclipse-16.png
tagline: Use Eclipse to write server code.
sort-key: 400
meta-title: Eclipse EE
meta-description: Learn how to use Eclipse to write server code.
meta-image: /tutorials/java/images/eclipse-15.png
tags: [tutorial, java, server, eclipse]
---

So far we've been writing all of our code in a basic text editor, and compiling our servlet classes via the command prompt. It's important to understand the basics of how a web app works: stuff like running the server (in Jetty, that's the `start.jar` file), setting up `web.xml`, and writing and compiling servlet classes and copying them into the `WEB-INF/classes` directory.

But as our code gets more complicated, using an [IDE](https://en.wikipedia.org/wiki/Integrated_development_environment) like [Eclipse](https://eclipse.org/) will make our lives much easier.

This tutorial assumes you're already familiar with Eclipse from [the Eclipse tutorial](/tutorials/java/eclipse), so I won't spend a ton of time introducing ideas like workspaces and projects. Instead, this tutorial talks about using Eclipse to develop web apps.

## Enterprise Edition

You might have seen stuff referred to as EE, as in Java EE or Eclipse EE. That *EE* stands for Enterprise Edition, which is basically just versions of Java and Eclipse that include tools for server development.

I think the term is a little outdated, because it dates back to a time when the only interactive websites that existed were owned by businesses: stuff like online stores. That's where the term *enterprise* (which is just another word for *business*) comes from. Now interactive websites are all over the place, not just owned by businesses. But we've kept using the term EE to describe stuff used for developing interactive websites.

You've actually already been using Java EE. It's the tools and `.jar` files that come with your Jetty server. When you add `servlet-api-3.1.jar` to your classpath so you can use the `HttpServlet` class, you're using Java EE. When you use JSP, you're using Jave EE. Java EE isn't an alternative to regular old Java- it's built on top of it.

Simlarly, Eclipse EE is a version of Eclipse that comes with a bunch of tools that make it easier to write server code. Remember how Eclipse let you compile and run a Java file just by pressing the play button? Eclipse EE lets you compile and run a server just by pressing the play button!

## Do you already have Eclipse EE?

If you already have Eclipse, let's check whether you already have the EE version. Open Eclipse, and then go to `Help > About Eclipse`. The window that pops up tells you which version you have.

- `Eclipse IDE for Java Developers` means you have the standard edition, so you need to download Eclipse EE.
- `Eclipse Java EE IDE for Web Developers` means you have the EE version, so you can skip the next step.

## Download Eclipse EE

Go to the [Eclipse download page](https://www.eclipse.org/downloads/) and download the installer. When the installer launches, a dialog asks you which version to install. Choose `Eclipse IDE for Java EE Developers`:

![Eclipse installer](/tutorials/java-server/images/eclipse-ee-1.png)

Step through the installation process and then launch Eclipse EE. In the workspace chooser that pops up, I recommend creating a new workspace directory instead of reusing an existing workspace. If you see a welcome tab, you can close this it (and uncheck "Always show Welcome at startup" if you want). Finally, you should see something that looks like this:


![Eclipse EE](/tutorials/java-server/images/eclipse-ee-2.png)

This means that Eclipse EE is running. Now we can start creating servers and web apps!

## Eclipse Jetty

To use Jetty from Eclipse, we're going to install the [Eclipse Jetty plugin](http://eclipse-jetty.github.io/).

Open the Eclipse Marketplace by going to `Help > Eclipse Marketplace...`, and then type `Jetty` in the search box. You should see a plugin called Eclipse Jetty:

![Eclipse Jetty](/tutorials/java-server/images/eclipse-ee-4.png)

Install Eclipse Jetty. You'll have to accept its license and then click OK in a box warning you about installing software. You'll also be asked to restart Eclipse. When it comes back up, you're done!

## New Project

Go to `File > New > Project...` and in the dialog that pops up, go to `Web > Dynamic Web Project` and click `Next`.

![New Project dialog](/tutorials/java-server/images/eclipse-ee-5.png)

On the next screen, give your project a name. The default settings for everything else should be okay.

![New Project settings dialog](/tutorials/java-server/images/eclipse-ee-6.png)

You can click through the rest of the settings using the `Next` button, or you can just click the `Finish` button to accept the default changes.

You should now see your project in the `Project Explorer` tab.

![Eclipse EE project](/tutorials/java-server/images/eclipse-ee-7.png)

It's empty for now, but we can see how the project is organized:

- `Java Resources`: This is where servlets and other Java classes will go.
- `JavaScript Resources`: JavaScript files in your webpage will show up here so you can edit them.
- `WebContent`: This is the top-level publically available directory. This is where static files go.
- `WEB-INF`: Files in here are hidden from public access. This is where `web.xml` and other files you don't want users to access directly will go.

You can ignore the other stuff for now. Also note that your Java classes will go inside the `src` directory under the `JavaResources` - you don't have to compile them into the `classes` directory yourself anymore! We'll see that in action in a second.

## Servlet Classpath

One last thing we need to do is add the servlet API to our project's classpath. This will give us access to Java EE classes like `HttpServlet` and `HttpServletRequest`. We did this using the `-cp path/to/jetty/lib/servlet-api-3.1.jar` when we were using the console. In Eclipse, we need to add that `.jar` file to our Java build path.

To do that, right-click your project, then go to `Properties`, and in the dialog that pops up go to the `Java Build Path` section. You should see this:

![Java Build Path before](/tutorials/java-server/images/eclipse-ee-8.png)

This shows the list of libraries on your classpath. To add the servlet API to the classpath, click the `Add External JARs...` button, and then select the `servlet-3.1.jar` file in your Jetty directory. You should now see this:

![Java Build Path after](/tutorials/java-server/images/eclipse-ee-9.png)

Now we're ready to write some code!

## Writing Code

Let's start by creating a servlet. Right-click the `src` directory, then go to the `New` menu, and select the `Class` option. Name your class `HelloWorldServlet`, and click the `Finish` button.

That should open up the Java editor. Enter this code into it:

```java
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class HelloWorldServlet extends HttpServlet {

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		String message = "Happy Coding!";

		request.setAttribute("message", message);
		request.getRequestDispatcher("WEB-INF/HelloWorld.jsp").forward(request,response);
	}
}
```

This code creates a basic servlet that adds a message to the request and forwards it to a JSP file. Next, let's create that JSP file. Right-click the `WEB-INF` directory, expand the `New` menu, and then select the `JSP File` option. Name the file `HelloWorld.jsp` and click the `Finish` button.

That opens up a JSP editor. You can delete any template code that's automatically added, and enter this JSP code:

```jsp
<!DOCTYPE html>
<html>
	<head>
		<title>Hello World</title>
	</head>
	<body>
		<h1>Hello World</h1>
		<p>Message: ${message}</p>
	</body>
</html>
```

This JSP just displays the `message` using the EL `${}` syntax.

Finally, let's create a `web.xml` file that tells our server to map URLs to our servlet. Right-click the `WEB-INF` directory, expand the `New` menu, and then select the `Other` option. In the dialog that pops up, expand the `XML` directory and select the `XML File` option. Click `Next`, and then name your file `web.xml` and click `Finish`.

That opens up the XML editor. If the `Design` tab is selected, switch to the `Source` tab. Enter this XML:

```xml
<web-app
	xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
		http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
	version="3.1">

	<servlet>
		<servlet-name>HelloWorldServlet</servlet-name>
		<servlet-class>HelloWorldServlet</servlet-class>
	</servlet>

	<servlet-mapping>
		<servlet-name>HelloWorldServlet</servlet-name>
		<url-pattern>index.html</url-pattern>
	</servlet-mapping>

</web-app>
```

Your project should now look like this:

![project after setup](/tutorials/java-server/images/eclipse-ee-10.png)

## Running Jetty

Now that we have a web app project, we need to tell Eclipse to run it using Jetty. You only have to do this step once for each project you create.

With your project open, open the `Run` menu, and then click the `Run Configurations...` option. In the dialog that pops up, select the `Jetty Webapp` tab, and then click the `New` button (it looks like a piece of paper with a plus sign) in the upper-left corner.

That opens up a configuration panel where you can change a bunch of settings. Here are the ones we care about now:

- `Context Path` is the part of the URL after the domain. If you leave this as `/`, then your webapp will be at `http://localhost:8080`. If you change it to `HelloWorld`, your webapp will be at `http://localhost:8080/HelloWorld/`. Let's change it to `HelloWorld` for now.
- The `Options` tab allows you to specify which Jetty version to use. The default uses a Jetty server that comes with the Eclipse plugin, but let's use the version of Jetty we already have. Select the `Use Jetty at path` radio button, and then click the `External...` button and navigate to your Jetty directory.

Your run configuration should look like this:

![run configuration](/tutorials/java-server/images/eclipse-ee-11.png)

You're done! Click the `Run` button!

You should see some stuff print to the console in Eclipse. That means your server is running, and you can access your web app! Open a browser to [http://localhost:8080/HelloWorld/index.html](http://localhost:8080/HelloWorld/index.html), and you should see this:

![Hello World web app](/tutorials/java-server/images/eclipse-ee-12.png)

Try changing the value of `message` in the `HelloWorldServlet` class. Click the `Stop` button (it looks like a red square in the `Console` tab in Eclipse) to stop the server. Then click the `Run` button (it looks like a green play button towards the top of Eclipse) to run the server again. Refresh the page, and you should see the new message!

## Summary

Eclipse gives you a bunch of cool features: it tells you about compiler error directly in the editor, it offers autocomplete and auto-fixing of code, and it makes it easier to compile your code and run a server.

But you don't **have** to use Eclipse. You can stick with a basic text editor and the console if you want. And in fact, I think it's really important to understand the basics of what's going on behind the scenes (knowing how to run Jetty and how it's finding web apps and mapping them to URLs). You could also use another IDE designed for writing code instead of Eclipse if you want.

No matter how you write code, the process is the same: you create a `web.xml` file that maps a URL to a servlet class, you create a servlet class that contains your logic, and you create JSP files that render your view, which can use static files in the visible directory. You then run the server and visit your web app in a browser. Eclipse just makes stuff like compiling and running a little simpler. There's no magic!

# Next: [Post Requests](/tutorials/java-server/post)