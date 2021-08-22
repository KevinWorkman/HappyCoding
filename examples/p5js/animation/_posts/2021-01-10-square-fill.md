---
layout: tutorial
title: Square Fill
thumbnail: /examples/p5js/animation/images/square-fill-2.png
tagline: Create a border of squares.
sort-key: 530
meta-title: p5.js Example - Square Fill
meta-description: Create a border of squares.
meta-image: /examples/p5js/animation/images/square-fill-3.png
tags: [example, p5.js, javascript, animation]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include p5js-widget.html width=300 height=300 %}
let squareSize = 0;
let maxSquareSize;

function setup() {
  createCanvas(300, 300);
  rectMode(CENTER);
  maxSquareSize = width;

  noStroke();
  fill(random(255), random(255), random(255));
  background(50);
}

function draw() {

  square(width/2, height/2, squareSize);

  squareSize += 5;

  // if the square gets too big, start a new square
  if(squareSize >= maxSquareSize){
    squareSize = 0;
    fill(random(255), random(255), random(255));

    // make the next square smaller
    maxSquareSize -= 10;

    // if the square gets too small, make the next one big again
    if(maxSquareSize <= 0){
      maxSquareSize = width;
    }
  }  
}
</script>

This sketch fills the screen with squares, creating a colorful border effect.

![squares filling the canvas](/examples/p5js/animation/images/square-fill-1.gif)

# Remix Ideas

- Change the speed of the squares, or the size of the border.
- Try different shapes like rectangles, triangles, and circles.
- Reverse the animation so the squares fill the screen from the outside instead of from the center.