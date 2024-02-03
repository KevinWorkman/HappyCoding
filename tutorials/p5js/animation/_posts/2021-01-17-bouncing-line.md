---
layout: post
title: Bouncing Line
thumbnail: /tutorials/p5js/animation/images/bouncing-line-4.png
tagline: Draw a line, pick a new color, move a bit.
sort-key: 550
meta-title: p5.js Example - Bouncing Line
meta-description: Draw a line, pick a new color, move a bit.
meta-image: /tutorials/p5js/animation/images/bouncing-line-3.png
tags: [example, p5.js, javascript, animation, random, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/animation
redirect_from: /examples/p5js/animation/bouncing-line
discourseEmbedUrl: /examples/p5js/animation/bouncing-line
---

{% include youtube-embed.html slug="P2BelKG-ghc" %}

---

{% include p5js-widget.html width=300 height=300 %}
let startX;
let startY;
let endX;
let endY;

let deltaStartX;
let deltaStartY;
let deltaEndX;
let deltaEndY;

let r;
let g;
let b;

function setup() {
  createCanvas(300, 300);

  startX = random(width);
  startY = random(height);
  endX = random(width);
  endY = random(height);

  const range = 5;
  deltaStartX = random(-range, range);
  deltaStartY = random(-range, range);
  deltaEndX = random(-range, range);
  deltaEndY = random(-range, range);

  r = random(255);
  g = random(255);
  b = random(255);

  noFill();
  background(32);
}

function draw() {

  // draw a line
  stroke(r, g, b, 100);
  line(startX, startY, endX, endY);
  // bezier(0, 0, startX, startY, endX, endY, width, height);

  // pick a new color
  r += random(-5, 5);
  g += random(-5, 5);
  b += random(-5, 5);

  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  // move a bit
  startX += deltaStartX;
  startY += deltaStartY;
  endX += deltaEndX;
  endY += deltaEndY;

  if(startX < 0 || startX > width){
    deltaStartX *= -1;
  }

  if(startY < 0 || startY > height){
    deltaStartY *= -1;
  }

  if(endX < 0 || endX > width){
    deltaEndX *= -1;
  }

  if(endY < 0 || endY > height){
    deltaEndY *= -1;
  }
}
</script>

This sketch draws a line between two points that bounce around, creating a colorful gradient. I created this for the 17th day of [Genuary](https://genuary2021.github.io/prompts#jan17) which had a prompt of "Draw a line, pick a new color, move a bit."

![bouncing line](/tutorials/p5js/animation/images/bouncing-line-1.png)
![bouncing line](/tutorials/p5js/animation/images/bouncing-line-2.png)
![bouncing curve](/tutorials/p5js/animation/images/bouncing-line-5.png)
![bouncing curve](/tutorials/p5js/animation/images/bouncing-line-6.png)
![bouncing line](/tutorials/p5js/animation/images/bouncing-line-7.png)
![bouncing line](/tutorials/p5js/animation/images/bouncing-line-8.png)

# Remix Ideas

- Try calling `bezier()` instead of `line()` to create a curve.
- Make it so each point bounces in a new random direction when it hits an edge.
- Create your own sketch from the prompt: "Draw a line, pick a new color, move a bit."
