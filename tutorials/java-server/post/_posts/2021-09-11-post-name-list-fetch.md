---
layout: tutorial
title: Name List - Fetch
thumbnail: /tutorials/java-server/images/post-9.png
tagline: Use the fetch function to show a list of names.
sort-key: 430
meta-title: Name List - Fetch
meta-description: Use the fetch function to show a list of names.
meta-image: /tutorials/java-server/images/post-10.png
tags: [example, java, server, servlets, post, fetch]
previousPost: /tutorials/java-server/post
redirect_from: /examples/java-server/post-name-list-fetch
discourseEmbedUrl: /examples/java-server/post-name-list-fetch
---

This example uses [the fetch function](/tutorials/javascript/fetch) and [POST requests](/tutorials/java-server/post) to get the user's name, and to show a list of every entered name.

In other words, this is a [single-page web app](https://en.wikipedia.org/wiki/Single-page_application) that shows an editable list of names.

**index.html** contains JavaScript that uses the `fetch()` function to get the list of user names, and to send a new name:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Names</title>
    <script>
      async function fetchNames() {
        const response = await fetch('/post-name-list-fetch/names');
        const nameListHtml = await response.text();
        document.getElementById('name-list').innerHTML = nameListHtml;
      }

      async function postName() {
        const params = new URLSearchParams();
        params.append('name', document.getElementById('name').value);

        const fetchSettings = {method: 'POST', body: params};
        const response =
            await fetch('/post-name-list-fetch/names', fetchSettings);

        fetchNames();
      }
    </script>
  </head>
  <body onload="fetchNames();">
    <h1>What's your name?</h1>

    <input type="text" id="name" value="Ada">
    <br><br>
    <button onclick="postName();">Submit</button>

    <hr>

    <h1>Name List</h1>
    <div id="name-list">Loading...</div>
  </body>
</html>
```

**NamesServlet.java** handles the `GET` request by returning an HTML list of names, and it handles the `POST` request adding a new name to the list.

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

    response.getWriter().println("<ul>");
    for (String name : names) {
      response.getWriter().println("<li>" + name + "</li>");
    }
    response.getWriter().println("</ul>");
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String name = request.getParameter("name");

    names.add(name);
  }
}
```

![name input and list](/tutorials/java-server/images/post-11.png)

---

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/post-name-fetch)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/post-name-fetch)
