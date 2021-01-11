---
layout: tutorial
title: Mouse Ripple
thumbnail: /examples/p5js/input/images/mouse-ripple-3.png
tagline: Show a ripple when you click the mouse.
sort-key: 200
meta-title: p5.js Example - Mouse Ripple
meta-description: Show a ripple when you click the mouse.
meta-image: /examples/p5js/input/images/mouse-ripple-2.png
tags: [example, p5.js, javascript, input]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include p5js-widget.html width=300 height=300 %}
let circleX;
let circleY;
let circleSize;

function setup() {
  createCanvas(300, 300);
  noFill();
  strokeWeight(5);
  circleX = width / 2;
  circleY = height / 2;
  circleSize = 0;
  
}

function draw() {
  background(0, 128, 255);

  circleSize += 10;

  stroke(0, 64, 128);
  circle(circleX, circleY, circleSize);
  circle(circleX, circleY, circleSize * .75);
  circle(circleX, circleY, circleSize * .5);
}

function mousePressed(){
  circleX = mouseX;
  circleY = mouseY;
  circleSize = 0;
}
</script>

This sketch shows a ripple effect when you click the mouse.

![mouse ripple](/examples/p5js/input/images/mouse-ripple-1.gif)

# Remix Ideas

- Give each new circle a random color.
- Make the ripple look more like a drop of water falling into a lake.
- Add support for multiple ripples at the same time.

