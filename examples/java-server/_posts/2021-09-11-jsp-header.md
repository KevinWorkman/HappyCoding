---
layout: tutorial
title: JSP Header
thumbnail: /tutorials/java-server/images/jsp-7.png
tagline: Use JSP to show a header on every page.
sort-key: 340
meta-title: JSP Header
meta-description: Use Jakara Server Pages to show a header on every page.
meta-image: /tutorials/java-server/images/jsp-8.png
tags: [example, java, server, jsp]
---

This example uses [JSP](/tutorials/java-server/jsp) to show a header on every page.

It starts with a **header.html** file that contains the header:

```html
<div style="border: thin solid black; padding:5px;">
  <a href="index.jsp">Home</a>
  <a href="about.jsp">About</a>
  <a href="pictures.jsp">Pictures</a>
</div>
```

Then it contains a few JSP files that each include the header:

**index.jsp**

```jsp
<!DOCTYPE html>
<html>
  <head>
    <title>Home</title>
  </head>
  <body>
    <%@ include file = "header.html" %>
    <p>Welcome to my homepage!</p>
  </body>
</html>
```

**about.jsp**

```jsp
<!DOCTYPE html>
<html>
  <head>
    <title>About</title>
  </head>
  <body>
    <%@ include file = "header.html" %>
    <p>About me: I'm an example!</p>
  </body>
</html>
```

**pictures.jsp**

```jsp
<!DOCTYPE html>
<html>
  <head>
    <title>Pictures</title>
  </head>
  <body>
    <%@ include file = "header.html" %>
    <p>This page will contain pictures I've taken.</p>
  </body>
</html>
```

![webpage with header](http://localhost:4000/tutorials/java-server/images/jsp-5.png)

---

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/jsp-header)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/jsp-header)