---
layout: tutorial
title: Blue Squares
thumbnail: /tutorials/p5js/calling-functions/images/blue-squares-2.png
tagline: A gradient of blue squares.
sort-key: 110
meta-title: p5.js Example - Blue Squares
meta-description: A gradient of blue squares.
meta-image: /tutorials/p5js/calling-functions/images/blue-squares-2.png
tags: [example, p5.js, javascript, calling-functions]
includeP5jsWidget: true
previousPost: /tutorials/p5js/calling-functions
redirect_from: /examples/p5js/calling-functions/blue-squares
discourseEmbedUrl: /examples/p5js/calling-functions/blue-squares
---

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0, 0, 255);

  fill(0, 64, 255);
  rect(50, 50, 250, 250);

  fill(0, 128, 255);
  rect(100, 100, 200, 200);

  fill(0, 192, 255);
  rect(150, 150, 150, 150);

  fill(0, 255, 255);
  rect(200, 200, 100, 100);
}
</script>

This sketch creates a gradient of blue squares.

![blue squares](/tutorials/p5js/calling-functions/images/blue-squares-1.png)

# Remix Ideas

- Show a gradient of red squares.
- Add more squares.
