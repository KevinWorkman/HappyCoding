---
layout: tutorial
title: Random Walker
thumbnail: /examples/p5js/animation/images/random-walker-1.png
tagline: Show a scribble that randomly moves around.
sort-key: 200
meta-title: p5.js Example - Random Walker
meta-description: Show a scribble that randomly moves around.
meta-image: /examples/p5js/animation/images/random-walker-2.png
tags: [example, p5.js, javascript, animation]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include p5js-widget.html width=300 height=300 %}
let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(300, 300);
  x = width / 2;
  y = height / 2;
  
  r = random(255);
  g = random(255);
  b = random(255);
  
  background(50);
}

function draw() {
  for (let i = 0; i < 1000; i++) {
    step();
  }
}

function step() {
  x += random(-1, 1);
  y += random(-1, 1);
  
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  
  r += random(-1, 1);
  g += random(-1, 1);
  b += random(-1, 1);
  
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);
  
  stroke(r, g, b);
  point(x, y);
}
</script>

This sketch moves a point around the screen randomly, creating a colorful scribble effect.

![random walker](/examples/p5js/animation/images/random-walker-1.png)

# Remix Ideas

- Change what happens when the point goes off the edge of the screen.
- Instead of including every random color, make your point a random shade of red or gray.
- Reset the point after a certain number of steps.