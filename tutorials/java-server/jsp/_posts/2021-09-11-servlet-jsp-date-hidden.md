---
layout: tutorial
title: Servlet JSP Date (Hidden JSP)
thumbnail: /tutorials/java-server/images/jsp-7.png
tagline: Use servlets and JSP to show today's date while hiding the JSP file.
sort-key: 360
meta-title: Servlet JSP Date (Hidden JSP)
meta-description: Use servlets and Jakara Server Pages to show today's date while hiding the JSP file.
meta-image: /tutorials/java-server/images/jsp-8.png
tags: [example, java, server, servlets, jsp]
previousPost: /tutorials/java-server/jsp
redirect_from: /examples/java-server/servlet-jsp-date-hidden
discourseEmbedUrl: /examples/java-server/servlet-jsp-date-hidden
---

This example uses [servlets](/tutorials/java-server/servlets) and [JSP](/tutorials/java-server/jsp) to show today's date.

**DateServlet.java** adds the formatted date to the request and then forwards the request to the JSP file:

```java
package io.happycoding.servlets;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.ServletException;

@WebServlet("/date")
public class DateServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException, ServletException {

    SimpleDateFormat dateFormat =
        new SimpleDateFormat("hh:mm aa 'on' EEEE, MMMM dd, yyyy");
    Date now = new Date();
    String formattedDate = dateFormat.format(now);

    request.setAttribute("date", formattedDate);
    request.getRequestDispatcher("/WEB-INF/date-view.jsp").forward(request,response);
  }
}
```

**date-view.jsp** uses expression language (EL) to get the formatted date from the request, and outputs it in HTML:

```jsp
<!DOCTYPE html>
<html>
  <head>
    <title>Current Time</title>
  </head>
  <body>
    <h1>Current Time</h1>
    <p>The current time is ${date}</p>
  </body>
</html>
```

**Note:** Because the `date-view.jsp` file is inside the `WEB-INF` directory, the user can't access it directly.

![today's date](/tutorials/java-server/images/jsp-9.png)

---

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/servlet-jsp-date-v2)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/servlet-jsp-date-v2)
