---
layout: tutorial
title: Name List - JSP
thumbnail: /tutorials/java-server/images/post-9.png
tagline: Use POST requests and JSP to show a list of names.
sort-key: 420
meta-title: Name List - JSP
meta-description: Use POST requests and JSP to show a list of names.
meta-image: /tutorials/java-server/images/post-10.png
tags: [example, java, server, servlets, post, jsp]
previousPost: /tutorials/java-server/post
redirect_from: /examples/java-server/post-name-list-jsp
discourseEmbedUrl: /examples/java-server/post-name-list-jsp
---

This example uses an HTML form to create a [POST request](/tutorials/java-server/post) containing the user's name, and then uses [JSP](/tutorials/java-server/jsp) to show a list of all of the entered names.

**index.html** contains an HTML form:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Name Form</title>
  </head>
  <body>
    <h1>What's your name?</h1>

    <form action="/post-name-list-jsp/names" method="POST">
      <input type="text" name="name" value="Ada">
      <br><br>
      <input type="submit" value="Submit">
    </form>

    <hr>

    <p>Click <a href="/post-name-list-jsp/names">here</a> to see everybody's name.</p>
  </body>
</html>
```

**NamesServlet.java** handles the `POST` request by outputting the user's name to the response. The servlet also handles `GET` requests to the `/names` URL, which it handles by adding the list of names to the request and forwarding the request to `name-list.jsp`.

```java
package io.happycoding.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;

@WebServlet("/names")
public class NamesServlet extends HttpServlet {

  List<String> names = new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException, ServletException {

    request.setAttribute("names", names);
    request.getRequestDispatcher("/WEB-INF/name-list.jsp").forward(request,response);
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String name = request.getParameter("name");
    names.add(name);
    response.sendRedirect("/post-name-list-jsp/names");
  }
}
```

**name-list.jsp** renders an HTML page by iterating over every name in the list.

```jsp
<%@ page import="java.util.List" %>
<!DOCTYPE html>
<html>
  <head>
    <title>Name List</title>
  </head>
  <body>
    <h1>Name List</h1>

    <ul>
      <% List<String> names = (List<String>) request.getAttribute("names"); %>
      <% for (String name : names) { %>
        <li><%= name %></li>
      <% } %>
    </ul>

    <p>Click <a href="/post-name-list-jsp/index.html">here</a> to enter another name.</p>
  </body>
</html>
```

![name form](/tutorials/java-server/images/post-5.png)

![hello Ada](/tutorials/java-server/images/post-3.png)

![name list](/tutorials/java-server/images/post-4.png)

---

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/java-server/java-server-example-projects/post-name-list-jsp)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/java-server/java-server-example-projects/post-name-list-jsp)
