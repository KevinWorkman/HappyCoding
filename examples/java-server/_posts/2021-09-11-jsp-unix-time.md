---
layout: tutorial
title: JSP Unix Time
thumbnail: /tutorials/java-server/images/jsp-7.png
tagline: Use JSP to show the current Unix time.
sort-key: 200
meta-title: JSP Unix Time
meta-description: Use Jakara Server Pages to show the current Unix time.
meta-image: /tutorials/java-server/images/jsp-8.png
tags: [example, java, server, jsp]
---

This example uses [JSP](/tutorials/java-server/jsp) to show the current Unix time.

```jsp
<!DOCTYPE html>
<html>
  <head>
    <title>Unix Time</title>
  </head>
  <body>
    <h1>Unix Time</h1>
    <p>The current Unix time is: <%= System.currentTimeMillis() %></p>
    <hr>
  <p>Click <a href="https://en.wikipedia.org/wiki/Unix_time">here</a> to learn more.</p>
  </body>
</html>
```

![unix time](/tutorials/java-server/images/jsp-3.png)

---

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/jsp-unix-time)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/jsp-unix-time)