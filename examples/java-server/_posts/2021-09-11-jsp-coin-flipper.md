---
layout: tutorial
title: JSP Coin Flipper
thumbnail: /tutorials/java-server/images/jsp-7.png
tagline: Use JSP to flip a coin.
sort-key: 200
meta-title: JSP Coin Flipper
meta-description: Use Jakara Server Pages to flip a coin.
meta-image: /tutorials/java-server/images/jsp-8.png
tags: [example, java, server, jsp]
---

This example uses [JSP](/tutorials/java-server/jsp) to flip a coin:

```jsp
<!DOCTYPE html>
<html>
  <head>
    <title>Coin Flipper</title>
  </head>
  <body>
    <h1>Coin Flipper</h1>
    <p>Flipping a coin...</p>
    <% if(Math.random() < .5){ %>
      <p>Heads!</p>
    <% } else{ %>
      <p>Tails!</p>
    <% } %>
    <hr>
    <p>Refresh to flip again.</p>
  </body>
</html>
```

![coin flipper webpage](/tutorials/java-server/images/jsp-2.png)

- [View this project on GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/jsp-coin-flipper)
- [Download this project from DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/jsp-coin-flipper)

