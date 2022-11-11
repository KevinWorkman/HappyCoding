---
title: Rainbow Divs
layout: tutorial
thumbnail: /tutorials/html/images/rainbow-divs-1.png
tagline: Use CSS to create colored divs.
sort-key: 130
meta-title: Rainbow Divs
meta-description: Use CSS to create colored divs.
meta-image: /tutorials/html/images/rainbow-divs-1.png
tags: [example, html, css]
previousPost: /tutorials/html/css
redirect_from: /examples/html/rainbow-divs
discourseEmbedUrl: /examples/html/rainbow-divs
---

{% include youtube-embed.html slug="7Ret6UaOj9U" %}

---

This example uses HTML and CSS to create a border of colored divs.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Rainbow Divs</title>
    <style>
      div {
        padding: 25px;
        font-size: 72px;
        text-align: center;
        border: thin solid black;
        color: white;
      }

      .red {
        background-color: red;
      }

      .orange {
        background-color: orange;
      }

      .yellow {
        background-color: yellow;
      }

      .green {
        background-color: #00ff00;
      }

      .blue {
        background-color: blue;
      }

      .violet {
        background-color: purple;
      }
    </style>
  </head>
  <body>
    <div class="red">
      <div class="orange">
        <div class="yellow">
          <div class="green">
            <div class="blue">
              <div class="violet">Happy Coding!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
```

![rainbow divs](/tutorials/html/images/rainbow-divs-2.png)

{% include codepen-new.html slug-hash="GRNZebK" height="350" %}

## Tweak Ideas

- Create a gradient from different shades of the same color.
- Add content to each layer of div.
