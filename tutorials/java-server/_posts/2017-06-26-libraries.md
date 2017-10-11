---
layout: tutorial
title: Libraries
thumbnail: /tutorials/java-server/images/libraries-5.png
tagline: Use libraries in your server code.
sort-key: 900
meta-title: Sever Libraries
meta-description: Learn how to use libaries in your server code.
meta-image: /tutorials/java-server/images/libraries-6.png
tags: [tutorial, java, server, libraries]
---

At this point, we've learned how to write server code using servlets and JSP. This lets us run Java code on a server, perform logic based on user web requests, and formulate responses that are then rendered into HTML. But at its core, you're really just writing Java. And like we learned in [the Java libraries tutorial](/tutorials/java/libraries), you can use libraries to expand what your code can do. You should already be familiar with the basics of what a Java library is, and what the classpath is. This tutorial shows you how to use Java libraries in your server code.

## Example Web App

Let's start with an example web app that takes input from a user and then displays it. Here's our servlet class:

```java
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


public class HtmlEscapeServlet extends HttpServlet {
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.getOutputStream().println("<h1>Input</h1>");
		response.getOutputStream().println("<hr/>");
		response.getOutputStream().println("<form action=\"\" method=\"POST\">");
		response.getOutputStream().println("<span>Enter some text: </span>");
		response.getOutputStream().println("<input type=\"text\" name=\"text\">");
		response.getOutputStream().println("<input type=\"submit\" value=\"Submit\">");
		response.getOutputStream().println("</form>");
	}
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
	
		String text = request.getParameter("text");
		
		response.getOutputStream().println("<h1>Input</h1>");
		response.getOutputStream().println("<hr/>");
		response.getOutputStream().println("<p>Here's the text you entered: " + text + "</p>");
	}
}
```

In its `doGet()` function, this servlet renders a simple form with one text input. Its `doPost()` function gets the input from that form and renders it to the screen.

To compile this `.java` file, we execute this command in a console:

```
javac -cp C:/Users/kevin/Desktop/jetty/lib/servlet-api-3.1.jar HtmlEscapeServlet.java
```

That gives us a `.class` file, which we put into the `classes` directory of our web app. Now all we need is a `web.xml` file:

```xml
<web-app
	xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
		http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
	version="3.1">


	<servlet>
		<servlet-name>HtmlEscapeServlet</servlet-name>
		<servlet-class>HtmlEscapeServlet</servlet-class>
	</servlet>

	<servlet-mapping>
		<servlet-name>HtmlEscapeServlet</servlet-name>
		<url-pattern>/home</url-pattern>
	</servlet-mapping>

</web-app>
```

This maps the `/home` URL to our servlet. Putting it all together, our web app directory looks like this:

- `HtmlEscapeWebApp/`
  - `WEB-INF/`
    - `web.xml`
    - `classes/`
      - `HtmlEscapeServlet.class`

We can drop the `HtmlEscapeWebApp` directory into the `webapps` directory of our Jetty server, run Jetty, and visit [http://localhost:8080/HtmlEscapeWebApp/home](http://localhost:8080/HtmlEscapeWebApp/home) to see our form. You can enter some text to make sure it works. But what happens if you enter html?

![entering html](/tutorials/java-server/images/libraries-1.png)

Try entering something like `<h1>oh no</h1>` into the text input and clicking the `Submit` button. You'll see that the html is rendered in the page:

![html rendered in page](/tutorials/java-server/images/libraries-2.png)

This is because our servlet code is just outputting the text directly into the HTML on this line:

```java
response.getOutputStream().println("<p>Here's the text you entered: " + text + "</p>");
```

So if `text` is `<h1>oh no</h1>`, then the HTML that gets rendered to the screen is `<p>Here's the text you entered: <h1>oh no</h1></p>`.

Allowing users to input arbitrary HTML can cause problems on your site. It can lead to bad formatting, or even worse, exploits like [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting). You can read more about that, but basically, we need to replace any problematic characters in the text with [character entities](https://www.w3schools.com/html/html_entities.asp) so that it renders as text instead of HTML. This is called [escaping](https://en.wikipedia.org/wiki/Escape_character).

We could probably write some logic that encodes `<` as `&lt;` and `>` as `&gt;`, but let's use a library instead!

## Commons Lang

Let's use a library called [Apache Commons Lang](https://commons.apache.org/proper/commons-lang/). It provides a bunch of utility classes and functions, but we're just using it as a simple example. The steps you follow to use this library apply to any library you want to use.

Go to [the Commons Lang download page](http://commons.apache.org/proper/commons-lang/download_lang.cgi) and download the **binary** zip file. Unzip that to wherever you want- putting it on your desktop for now is fine. 

## The `lib` Directory

To use a library, the first thing you need to do is copy its `.jar` file into the `WEB-INF/lib` folder inside your web app directory.

So to use Commons Lang, find the `commons-lang3-3.6.jar` file (the version number might be slightly different for you) inside the `commons-lang` directory you just unzipped, and copy that `.jar` file into a `/WEB-INF/lib` folder inside your web app directory. Your web app directory should look like this:

- `HtmlEscapeWebApp/`
  - `WEB-INF/`
    - `web.xml`
    - `classes/`
      - `HtmlEscapeServlet.class`
    - `lib/`
      - `commons-lang3-3.6.jar`

When the server runs your code, it automatically adds the `lib` directory to the classpath. So any library `.jar` files need to go inside it before you copy your code to a server directory.

## Using Library Code

Like we learned in [the Java libraries tutorial](/tutorials/java/libraries), you can use classes and functions in a Java library just like you can use regular Java classes- because that's exactly what they are. So we can consult the [Apache Commons API](http://commons.apache.org/proper/commons-lang/apidocs/) to find a class and function that's useful for escaping text. Eventually we'll find the `StringEscapeUtils.escapeHtml4()` function. We can use it in our servlet code like this:

```java
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringEscapeUtils;


public class HtmlEscapeServlet extends HttpServlet {
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.getOutputStream().println("<h1>Input</h1>");
		response.getOutputStream().println("<hr/>");
		response.getOutputStream().println("<form action=\"\" method=\"POST\">");
		response.getOutputStream().println("<span>Enter some text: </span>");
		response.getOutputStream().println("<input type=\"text\" name=\"text\">");
		response.getOutputStream().println("<input type=\"submit\" value=\"Submit\">");
		response.getOutputStream().println("</form>");
	}
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
	
		String badHtml = request.getParameter("text");
		String escapedHtml = StringEscapeUtils.escapeHtml4(badHtml);
		
		response.getOutputStream().println("<h1>Input</h1>");
		response.getOutputStream().println("<hr/>");
		response.getOutputStream().println("<p>Here's the text you entered: " + escapedHtml + "</p>");
	}
}
```

The only thing that changed is that we have an extra `import` statement, and our `doPost()` function now calls the `StringEscapeUtils.escapeHtml4()` function to get the escaped text. Hint: try printing out the value of `escapedHtml` to see what it looks like!

## Compiling

Now that our code uses a library, we need to add that library to our classpath when we compile it:

```
javac -cp "C:/Users/kevin/Desktop/jetty/lib/servlet-api-3.1.jar;C:/Users/kevin/Desktop/HtmlEscapeWebApp/WEB-INF/lib/commons-lang3-3.6.jar" HtmlEscapeServlet.java
```

Notice that we include both the servlet api and the Commons Lang library on the classpath. This creates the updated `.class` file that we want to copy into the `classes` folder in our web app directory.

## Running

We've already copied the library into the `lib` directory, so the server will handle the classpath at runtime. Just copy your `HtmlEscapeWebApp` directory into the `webapps` folder of your Jetty server and then start Jetty!

Now if we try to enter HTML into the text box, we'll see this:

![html escaped in page](/tutorials/java-server/images/libraries-3.png)

That's because we're using the Commons Lang library to escape the HTML, which renders it as text instead of HTML content. This is just a simple example, but all of the above will work for any library you want to use.

## Eclipse

If you're using Eclipse, you have to do basically the same thing.

- First, copy the library `.jar` file into the `lib` folder. 
- Then add the library `.jar` file to your classpath. See [the Eclipse tutorial](http://happycoding.io/tutorials/java/eclipse#classpath) for more details.

Your project should look like this:

![Eclipse project](/tutorials/java-server/images/libraries-4.png)

Now you can run this project from Eclipse, or you can export it as a `.war` file for hosting, and your library will be included in your server.

## Homework

- Use a library like [JSoup](https://jsoup.org/) to allow users to enter some HTML, but no harmful HTML.
- Use a JSON library to convert Java objects to JSON that you use in JavaScript.
- Find a [machine learning](https://en.wikipedia.org/wiki/Machine_learning) library and [do something cool](https://www.quora.com/What-are-some-real-world-examples-of-applications-of-machine-learning-in-the-field)!

# Next: [Sanitizing User Input](/tutorials/java-server/sanitizing-user-input)