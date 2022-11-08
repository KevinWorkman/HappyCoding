---
layout: tutorial
title: Name List
thumbnail: /tutorials/java-server/images/post-9.png
tagline: Use POST requests to show a list of names.
sort-key: 410
meta-title: Name List
meta-description: Use POST requests to show a list of names.
meta-image: /tutorials/java-server/images/post-10.png
tags: [example, java, server, servlets, post]
previousPost: /tutorials/java-server/post
redirect_from: /examples/java-server/post-name-list
discourseEmbedUrl: /examples/java-server/post-name-list
---

This example uses an HTML form to create a [POST request](/tutorials/java-server/post) containing the user's name, and then shows a list of all of the entered names.

**index.html** contains an HTML form:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Name Form</title>
  </head>
  <body>
    <h1>What's your name?</h1>

    <form action="/post-name-list/names" method="POST">
      <input type="text" name="name" value="Ada">
      <br><br>
      <input type="submit" value="Submit">
    </form>

    <hr>

    <p>Click <a href="/post-name-list/names">here</a> to see everybody's name.</p>
  </body>
</html>
```

**NamesServlet.java** handles the `POST` request by outputting the user's name to the response. You can also navigate to `/names` to see a list of all of the entered names.

```java
package io.happycoding.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/names")
public class NamesServlet extends HttpServlet {

  List<String> names = new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    response.getWriter().println("<h1>Names</h1>");

    response.getWriter().println("<ul>");
    for (String name : names) {
      response.getWriter().println("<li>" + name + "</li>");
    }

    response.getWriter().println("</ul>");
    response.getWriter().println(
        "Click <a href=\"/post-name-list/index.html\">here</a> to enter another name.");
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String name = request.getParameter("name");

    names.add(name);

    response.getWriter().println("<h1>Hello " + name + "!</h1>");
    response.getWriter().println(
        "Click <a href=\"/post-name-list/names\">here</a> to see everybody's name.");
  }
}
```

![name form](/tutorials/java-server/images/post-5.png)

![hello Ada](/tutorials/java-server/images/post-3.png)

![name list](/tutorials/java-server/images/post-4.png)

---

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/post-name-list)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/post-name-list)
