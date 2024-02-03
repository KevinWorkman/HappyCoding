---
layout: post
title: Unsanitized User Input
thumbnail: /tutorials/java-server/images/post-9.png
tagline: See what happens when you don't sanitize user input.
sort-key: 499
meta-title: Unsanitized User Input
meta-description: See what happens when you don't sanitize user input.
meta-image: /tutorials/java-server/images/post-10.png
tags: [example, java, server, servlets, post]
previousPost: /tutorials/java-server/sanitizing-user-input
redirect_from: /examples/java-server/user-input-unsanitized
discourseEmbedUrl: /examples/java-server/user-input-unsanitized
---

This example uses an HTML form to create a [POST request](/tutorials/java-server/post) containing the user's name.

**index.html** contains an HTML form:

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

**FormServlet.java** handles the `POST` request by outputting the user's input directly to the response:

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

![input form](/tutorials/java-server/images/libraries-1.png)

Because the servlet does not sanitize the data, the HTML is rendered in the output:

![html output](/tutorials/java-server/images/libraries-2.png)

See the [server libraries tutorial](/tutorials/java-server/libraries) and the [sanitizing user input tutorial](/tutorials/java-server/sanitizing-user-input) for more information about why this is bad, and what to do about it.

---

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/java-server/java-server-example-projects/user-input-unsanitized)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/java-server/java-server-example-projects/user-input-unsanitized)
