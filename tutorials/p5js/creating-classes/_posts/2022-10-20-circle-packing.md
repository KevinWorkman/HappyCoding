---
layout: tutorial
title: Circle Packing
thumbnail: /tutorials/p5js/creating-classes/images/circle-packing-1.png
tagline: Fill the screen with circles without overlapping.
sort-key: 1120
meta-title: Circle Packing - p5.js Example
meta-description: Fill the screen with circles without overlapping.
meta-image: /tutorials/p5js/creating-classes/images/circle-packing-1.png
tags: [example, p5.js, javascript, creating-classes]
includeP5jsWidget: true
previousPost: /tutorials/p5js/creating-classes
redirect_from: /examples/p5js/creating-classes/circle-packing
discourseEmbedUrl: /examples/p5js/creating-classes/circle-packing
---

Inspired by [Coding Train's circle packing video](https://thecodingtrain.com/challenges/50-animated-circle-packing), this sketch fills the screen with circles without any overlapping.

{% include youtube-embed.html slug="yh1zsmoFCKQ" %}

{% include p5js-widget.html width=400 height=400 %}
let circles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(64);

  for (let c of circles) {
    c.draw();
  }

  addCircles(1);

  stopExistingCircles();
}

function addCircles(amount) {
  for (let i = 0; i < amount; i++) {
    let newCircle = new Circle(random(width), random(height));
    if (!newCircleOverlaps(newCircle)) {
      circles.push(newCircle);
    }
  }
}

function newCircleOverlaps(newCircle) {
  for (let otherCircle of circles) {
    if (newCircle.overlaps(otherCircle)) {
      return true;
    }
  }
  return false;
}

function stopExistingCircles(){
  for (let i = 0; i < circles.length - 1; i++) {
    let circleOne = circles[i];
    for (let j = i + 1; j < circles.length; j++) {
      let circleTwo = circles[j];

      if(circleOne.overlaps(circleTwo)){
        circleOne.isGrowing = false;
        circleTwo.isGrowing = false;
      }
    }

  }
}

class Circle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 5;
    this.isGrowing = true;
    this.color = color(random(255), random(255), random(255));
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.r * 2);

    if(this.isGrowing){
      this.r += .1;
    }
  }

  overlaps(otherCircle){
    return dist(this.x, this.y, otherCircle.x, otherCircle.y)
      < this.r + otherCircle.r + 2;
  }
}
</script>

[Click here to view this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/5X6XxnAXuz)

![random colored circles](/tutorials/p5js/creating-classes/images/circle-packing-2.png)
![red and blue circles](/tutorials/p5js/creating-classes/images/circle-packing-3.png)
![green circles](/tutorials/p5js/creating-classes/images/circle-packing-4.png)
![black and white circles](/tutorials/p5js/creating-classes/images/circle-packing-5.png)

# Remix Ideas

- Make the circle appear near the mouse.
- Try other shapes like squares and triangles.
- Start by adding big circles, but add smaller and smaller circles over time.
