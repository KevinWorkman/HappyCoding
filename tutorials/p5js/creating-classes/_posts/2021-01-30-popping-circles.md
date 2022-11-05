---
layout: tutorial
title: Popping Circles
thumbnail: /tutorials/p5js/creating-classes/images/popping-circles-1.png
tagline: Fill circles with your mouse that pop if they touch.
sort-key: 1070
meta-title: p5.js Example - Popping Circles
meta-description: Fill circles with your mouse that pop if they touch.
meta-image: /tutorials/p5js/creating-classes/images/popping-circles-1.png
tags: [example, p5.js, javascript, creating-classes, input, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/creating-classes
redirect_from: /tutorials/p5js/creating-classes/popping-circles
discourseEmbedUrl: /tutorials/p5js/creating-classes/popping-circles
---

{% include youtube-embed.html slug="AU5WdQOCPkI" %}

---

{% include p5js-widget.html width=400 height=400 %}
let circleFilling = false;
let circleSize = 0;
let circleColor;

const circles = [];

function setup() {
  createCanvas(400, 400);
  circleColor = color(random(255), random(255), random(255));
  strokeWeight(2);
}

function draw() {
  background(150);

  if (circleFilling) {
    circleSize += 2;

    const overlappingCircle = getOverlappingCircle();
    if(overlappingCircle){
      circleFilling = false;
      circles.splice(circles.indexOf(overlappingCircle), 1);
    }

    if (isOffScreen()) {
      circleFilling = false;
    }

    fill(circleColor);
    circle(mouseX, mouseY, circleSize);
  }


  for (const c of circles) {
    c.draw();
  }
}

function getOverlappingCircle() {
  for(const c of circles){
    if(dist(c.x, c.y, mouseX, mouseY) <
      circleSize / 2 + c.size / 2 + 2){
      return c;
    }
  }

  return undefined;
}

function isOffScreen(){
  return mouseX < circleSize / 2 ||
         mouseX > width - circleSize / 2 ||
         mouseY < circleSize / 2 ||
         mouseY > height - circleSize / 2;
}

function mousePressed() {
  circleSize = 0;
  circleColor = color(random(255), random(255), random(255));
  circleFilling = true;
}

function mouseReleased() {
  if (circleFilling) {
    circles.push(new Circle(mouseX, mouseY, circleSize, circleColor));
  }
  circleFilling = false;
}

class Circle {

  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
  }

  draw() {
    fill(this.color);
    circle(this.x, this.y, this.size);
  }
}
</script>

[Click here to view this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/yAiMP42Gs)

This sketch lets you fill the screen with circles by clicking your mouse. But if two circles touch, they pop!

I created this for the 29th day of [#genuary](https://genuary2021.github.io/) which had a prompt of "Any shape, none can touch."

![circles](/tutorials/p5js/creating-classes/images/popping-circles-2.png)

# Remix Ideas

- Add different shapes like squares and triangles.
- Make your circles change color as they grow.
- Make your circles grow or shrink over time.
