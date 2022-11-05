---
layout: tutorial
title: Falling Line
thumbnail: /tutorials/p5js/animation/images/falling-line-2.png
tagline: Show a falling line that fills the screen.
sort-key: 510
meta-title: p5.js Example - Falling Line
meta-description: Show a falling line that fills the screen.
meta-image: /tutorials/p5js/animation/images/falling-line-2.png
tags: [example, p5.js, javascript, animation]
includeP5jsWidget: true
previousPost: /tutorials/p5js/animation
redirect_from: /examples/p5js/animation/falling-line
discourseEmbedUrl: /examples/p5js/animation/falling-line
---

{% include p5js-widget.html width=300 height=300 %}
let lineY = 0;
let lineHeight = 25;
let lineSpeed = 5;

let bottomRectangleHeight = 0;

let bgColor;
let fgColor;

function setup() {
  createCanvas(300, 300);
  bgColor = randomColor();
  fgColor = randomColor();
}

function draw() {
  background(bgColor);
  stroke(fgColor);
  fill(fgColor);

  // draw the falling line
  rect(0, lineY, width, lineHeight);

  // draw the bottom rectangle
  if (bottomRectangleHeight > 0) {
    rect(0, height - bottomRectangleHeight, width, bottomRectangleHeight);
  }

  lineY += lineSpeed;

  // if the line reaches the bottom rectangle,
  // make the bottom rectangle bigger
  if (lineY >= height - bottomRectangleHeight - lineHeight) {
    bottomRectangleHeight += lineHeight;
    lineY = 0;

    // if the bottom rectangle fills the screen, start over
    if (bottomRectangleHeight >= height) {
      bottomRectangleHeight = 0;
      bgColor = fgColor;
      fgColor = randomColor();
    }
  }
}

function randomColor() {
  return color(random(255), random(255), random(255));
}
</script>

This sketch shows a falling line that fills the screen, like paint filling up a bucket.

![falling line](/tutorials/p5js/animation/images/falling-line-1.gif)

# Remix Ideas

- Change the size and speed of the line.
- Make the line move horizontally instead of vertically.
- Show a more accurate simulation of paint (or sand) filling up a bucket. Instead of a line, show individual pixels that fill the bottom of the screen.
