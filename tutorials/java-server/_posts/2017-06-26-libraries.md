---
layout: tutorial
title: Libraries
thumbnail: /tutorials/java-server/images/libraries-5.png
tagline: Use libraries in your server code.
sort-key: 550
meta-title: Sever Libraries
meta-description: Learn how to use libaries in your server code.
meta-image: /tutorials/java-server/images/libraries-6.png
tags: [tutorial, java, server, libraries]
updated: 2021-09-11
---

{% include toc.md %}

So far, you've learned how to write your own Java server code using servlets and JSP.

Remember from [the Java libraries tutorial](/tutorials/java/libraries) that you can use **libraries** to expand what your code can do. This tutorial shows you how to use Java libraries in your server code.

# Example Web App

Let's start with an example web app that takes input from a user and then displays it.

The `index.html` file contains a form that submits user data as a `POST` request.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form</title>
  </head>
  <body>
    <h1>Enter some input:</h1>
    <form action="/user-input-unsanitized/form" method="POST">
      <input type="text" name="data" value="<h1>oh no</h1>">
      <br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

The `FormServlet` class takes the user input and prints it as the response.

```java
package io.happycoding.servlets;

import java.io.IOException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/form")
public class FormServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String data = request.getParameter("data");

    response.setContentType("text/html");
    response.getWriter().println("You entered: " + data);
  }
}
```

You can view or download this project here:

{% include url-thumbnail.html url="/examples/java-server/user-input-unsanitized" %}

What happens if the user enters some HTML content?

![entering html](/tutorials/java-server/images/libraries-1.png)

Try entering something like `<h1>oh no</h1>` into the text input and clicking the `Submit` button. You'll see that that your HTML is rendered in the page:

![html rendered in page](/tutorials/java-server/images/libraries-2.png)

This happens because the servlet code outputs the text directly into the response on this line:

```java
response.getWriter().println("You entered: " + data);
```

So if `text` is `<h1>oh no</h1>`, then the response that gets sent to the client is `You entered: <h1>oh no</h1>`. When the browser renders that content, it parses the HTML and shows an `h1` heading.

That might not seem like a big deal, but letting users input arbitrary HTML can cause problems on your site. It can lead to bad formatting, or even worse, exploits like [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting).

One way to fix that is by replacing HTML characters in the text with [character entities](https://www.w3schools.com/html/html_entities.asp) so that it renders as text instead of HTML. This is called [escaping](https://en.wikipedia.org/wiki/Escape_character).

For this specific example, you could probably write some logic that encodes `<` as `&lt;` and `>` as `&gt;`, but let's use a library instead!

# Step 0: Find a Library

With so many libraries available, how do you know what's out there, or which one to choose?

Start by opening your favorite search engine and entering "Java library" plus the problem you're trying to solve. For example, "Java library escape html" returns quite a few suggestions you could try out.

If you have a few options, peruse each library's homepage and documentation. Is the library still being updated? Is its documentation readable?

Try writing small "hello world" programs that test out each library, and see which one you like the best!

## Commons Text

The [Apache Commons Text](https://commons.apache.org/proper/commons-text/) library provides a bunch of utility classes and functions, including a [`StringEscapeUtils`](https://commons.apache.org/proper/commons-text/javadocs/api-release/org/apache/commons/text/StringEscapeUtils.html) class that helps escape HTML text.

I'm using this library as an example, but the steps you follow to use this library apply to most libraries.

# Step 1: Add the Library to your Classpath

Your classpath is where Java looks for classes. By default, that includes [every Java class](https://docs.oracle.com/en/java/javase/11/docs/api/allclasses-index.html) that comes with the Java Runtime Environment, and because you're using Jakarta EE, your classpath also includes the [Jakarta EE classes](https://jakarta.ee/specifications/platform/9/apidocs/).

To use a library, the first thing you need to do is add it to your classpath.

## Maven Dependency

I highly recommend using Maven, because it means you don't have to deal with `.jar` files yourself.

Most Java libraries have a Maven dependency. To find the library's Maven dependency, read through the library's docs, or try typing the library's name followed by "Maven dependency" into your favorite search engine.

Here's the Maven dependency for the Apache Commons Text library:

```xml
<dependency>
   <groupId>org.apache.commons</groupId>
   <artifactId>commons-text</artifactId>
   <version>1.9</version>
</dependency>
```

Add this to your `pom.xml` file, which tells Maven to add the library to your classpath.

## Downloading Library Jars

I recommend using Maven as described above, but if for some reason you can't use Maven,  you can manually add the library to your classpath.

Go to the [library download page](https://commons.apache.org/proper/commons-text/download_text.cgi) and download the library. Unzip the file, and find the `common-text-1.9.jar` file inside.

Then you can add that file to the `-cp` argument if you're compiling via the command line, or to your Eclipse classpath if you're using Eclipse. If you're manually creating your web app directory, put the `.jar` file inside your web app directory's `WEB-INF/lib/` folder.

# Step 2: Use the Library in Your Code

Now that the Apache Commons Text library is on your classpath, you can use it in your code.

First, find the class you want to use- in this case, it's the [`StringEscapeUtils`](https://commons.apache.org/proper/commons-text/javadocs/api-release/org/apache/commons/text/StringEscapeUtils.html) class. Import it, and then use it!

```java
package io.happycoding.servlets;

import java.io.IOException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.text.StringEscapeUtils;

@WebServlet("/form")
public class FormServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String userInput = request.getParameter("data");
    String escapedUserInput = StringEscapeUtils.escapeHtml4(userInput);

    response.setContentType("text/html");
    response.getWriter().println("You entered: " + escapedUserInput);
    
  }
}
```

This servlet now calls the `StringEscapeUtils.escapeHtml4()` function to escape the user input.

# Step 3: Compile and Run Your Code

Compile and run your server using the approach you chose in [anatomy of a web app](/tutorials/java-server/web-app).

- If you're using Maven, execute `mvn package` and then move the `.war` file into your server's `webapps` directory.
- If you're using the command line without Maven, use `javac` to compile your classes, and use the `-cp` argument to provide the library's `.jar` file.
- If you're using Eclipse, add your project to your server and then run your server.

Navigate to `index.html` and enter some input. Now if you try to enter HTML into the text box, you'll see this:

![html escaped in page](/tutorials/java-server/images/libraries-3.png)

That's because the Commons Text library escapes the HTML, which renders it as text instead of HTML content.

You can view or download this example here:

{% include url-thumbnail.html url="/examples/java-server/user-input-escaped" %}

This example used a particular library, but all of the above will work for any library you want to use.

# Homework

- Use a library like [JSoup](https://jsoup.org/) to let users enter some HTML, but no harmful HTML.
- Use a JSON library to convert Java objects to JSON that you can use in JavaScript.
- Find a [machine learning](https://en.wikipedia.org/wiki/Machine_learning) library and [do something cool](https://www.quora.com/What-are-some-real-world-examples-of-applications-of-machine-learning-in-the-field)!

# Examples

{% include url-thumbnail.html url="/examples/java-server/user-input-unsanitized" %}
{% include url-thumbnail.html url="/examples/java-server/user-input-escaped" %}