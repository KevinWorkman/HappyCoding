---
layout: tutorial
title: "Hello World: Command Line"
thumbnail: /tutorials/java-server/images/java-ee-1.png
tagline: Use the command line to run a server.
sort-key: 200
meta-title: "Hello World Server Example: Command Line"
meta-description: Use the command line to run a server.
meta-image: /tutorials/java-server/images/servlets-7.png
tags: [example, java, server]
---

This example contains an HTML file and a servlet class:

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Server Hello World: Command Line</title>
  </head>
  <body>
    <h1>Happy Coding</h1>
    <p>Hello world!</p>
  </body>
</html>
```

**/WEB-INF/classes/io/happycoding/servlets/HelloWorldServlet.java**

```java
package io.happycoding.servlets;

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

You can view the directory [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/hello-world-command-line) or download it as a zip file [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/hello-world-command-line).

See the [Anatomy of a Web App](/tutorials/java-server/web-app) tutorial for instructions on compiling and packaging this example.