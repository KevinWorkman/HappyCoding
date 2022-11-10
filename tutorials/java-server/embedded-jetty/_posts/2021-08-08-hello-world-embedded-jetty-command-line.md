---
layout: tutorial
title: "Hello World: Embedded Jetty (Command Line)"
thumbnail: /tutorials/java-server/images/jetty-setup-4.png
tagline: Use the command line to run an embedded Jetty server.
sort-key: 130
meta-title: "Hello World Server Example: Embedded Jetty (Command Line)"
meta-description: Use the command line to run an embedded Jetty server.
meta-image: /tutorials/java-server/images/jetty-setup-4.png
tags: [example, java, server, jetty]
previousPost: /tutorials/java-server/embedded-jetty
redirect_from: /examples/java-server/hello-world-embedded-jetty-command-line
discourseEmbedUrl: /examples/java-server/hello-world-embedded-jetty-command-line
---

This example contains an HTML file and a servlet class, as well as a class with a `main()` method that runs an embedded Jetty server.

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Embedde Jetty Hello World</title>
  </head>
  <body>
    <h1>Embedded Jetty Hello World</h1>
    <p>Hello world!</p>
  </body>
</html>
```

**/io/happycoding/HelloWorldServlet.java**

```java
package io.happycoding;

import java.io.IOException;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("<h1>Hello world!</h1>");
  }
}
```

**/io/happycoding/ServerMain.java**

```java
package io.happycoding;

import java.net.URL;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.webapp.WebAppContext;

/**
 * Starts up a server that serves static files from the top-level directory and
 * automatically loads servlets annotated with the @WebServlet annotation.
 */
public class ServerMain {

  public static void main(String[] args) throws Exception {

    // Create a server that listens on port 8080.
    Server server = new Server(8080);
    WebAppContext webAppContext = new WebAppContext();
    server.setHandler(webAppContext);

    // Load static content from the top level directory.
    URL webAppDir = ServerMain.class.getClassLoader().getResource(".");
    webAppContext.setResourceBase(webAppDir.toURI().toString());

    // Look for annotations in classes and packages in the top level directory.
    webAppContext.setAttribute(
        "org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern", ".*/");

    // Start the server! 🚀
    server.start();
    System.out.println("Server started!");

    // Keep the main thread alive while the server is running.
    server.join();
  }
}
```

You can view the directory [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/java-server/java-server-example-projects/hello-world-embedded-jetty-command-line) or download it as a zip file [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/java-server/java-server-example-projects/hello-world-embedded-jetty-command-line).

See the [Embedded Jetty](/tutorials/java-server/embedded-jetty) tutorial for instructions on compiling and running this example.
