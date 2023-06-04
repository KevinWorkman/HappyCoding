---
layout: tutorial
title: Square Lines
thumbnail: /tutorials/p5js/animation/images/square-lines-1.png
tagline: Fill a square with lines.
sort-key: 580
meta-title: p5.js Example - Square Lines
meta-description: Fill a square with lines.
meta-image: /tutorials/p5js/animation/images/square-lines-1.png
tags: [example, p5.js, javascript, random, animation, geometric]
includeP5jsWidget: true
previousPost: /tutorials/p5js/animation
---

One of the things I love about p5.js is the concept of a _sketch_. Just like you doodle on paper without thinking about it, you can doodle with code without a real end goal in mind ahead of time.

I had some time to fill while waiting for a flight. So, inspired by the kind of doodle I absent-mindedly draw during boring meetings, this sketch starts with a point at the top edge, then draws a line to the right edge, then to the bottom, to the left, and finally back to the top. And just for fun I had to add some random colors.

The result is a slowly filling square of randomly colored lines. I'll let you decide whether it's art, but coding this sketch beat staring at my phone. 🛩️

{% include p5js-widget.html width=400 height=400 %}
let border = 25;

let x;
let y;

let deltaC = 20;
let r;
let g;
let b;

function setup() {
  createCanvas(400, 400);
  x = random(border, width - border);
  y = border;

  r = random(256);
  g = random(256);
  b = random(256);

  background(32);

  strokeWeight(2);
  noFill();

  frameRate(20);
}

function draw() {
  // background(32, 5);

  let nextX;
  let nextY;

  if (y == border) {
    // top, move to right
    nextX = width - border;
    nextY = random(border, height - border);
  } else if (x == width - border) {
    // right, move to bottom
    nextX = random(border, width - border);
    nextY = height - border;
  } else if (y == height - border) {
    // bottom, move to left
    nextX = border;
    nextY = random(border, height - border);
  } else if (x == border) {
    // left, move to top
    nextX = random(border, width - border);
    nextY = border;
  }

  r += random(-deltaC, deltaC);
  g += random(-deltaC, deltaC);
  b += random(-deltaC, deltaC);
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);
  line(x, y, nextX, nextY);

  x = nextX;
  y = nextY;
}
</script>

![square filled with yellow lines](/tutorials/p5js/animation/images/square-lines-2.png)
![square filled with grayscale lines](/tutorials/p5js/animation/images/square-lines-3.png)
![square filled with red and blue lines](/tutorials/p5js/animation/images/square-lines-4.png)
