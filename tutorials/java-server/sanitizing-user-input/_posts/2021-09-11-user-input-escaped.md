---
layout: post
title: Escaping User Input
thumbnail: /tutorials/java-server/images/libraries-5.png
tagline: Use Apache Commons Text to escape user input.
sort-key: 500
meta-title: Escaping User Input
meta-description: Use Apache Commons Text to escape user input.
meta-image: /tutorials/java-server/images/libraries-6.png
tags: [example, java, server, servlets, post, libraries]
previousPost: /tutorials/java-server/sanitizing-user-input
redirect_from: /examples/java-server/user-input-escaped
discourseEmbedUrl: /examples/java-server/user-input-escaped
---

This example uses an the Apache Commons Text library to escape user input. Learn more in the [java server libraries tutorial](/tutorials/java-server/libraries).

**index.html** contains an HTML form:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Form</title>
  </head>
  <body>
    <h1>Enter some input:</h1>
    <form action="/user-input-escaped/form" method="POST">
      <input type="text" name="data" value="<h1>oh no</h1>">
      <br><br>
      <input type="submit" value="Submit">
    </form>
  </body>
</html>
```

**FormServlet.java** handles the `POST` request by escaping the user's content and outputting it in the response:

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

![input form](/tutorials/java-server/images/libraries-1.png)

Because the servlet escapes the data, the HTML is rendered as text in the output:

![html output](/tutorials/java-server/images/libraries-3.png)

See the [server libraries tutorial](/tutorials/java-server/libraries) and the [sanitizing user input tutorial](/tutorials/java-server/sanitizing-user-input) for more information.

---

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/java-server/java-server-example-projects/user-input-escaped)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/java-server/java-server-example-projects/user-input-escaped)
