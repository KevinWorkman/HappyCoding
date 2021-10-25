---
layout: tutorial
title: Pumpkin Patch
thumbnail: /examples/p5js/animation/images/pumpkin-patch-1.png
tagline: Fill the screen with random pumpkins.
sort-key: 560
meta-title: p5.js Example - Pumpkin Patch
meta-description: Fill the screen with random pumpkins.
meta-image: /examples/p5js/animation/images/pumpkin-patch-1.png
tags: [example, p5.js, javascript, random, animation, 🎃]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include p5js-widget.html width=400 height=400 %}
// This sketch uses the random() function to make a random pumpkin patch!

function setup() {
  createCanvas(400, 400);

  // Slow down the frame rate a little so we can see our pumpkins better.
  // Deleting this line will make our sketch faster.
  frameRate(5);

  background(0, 32, 0);
}

function draw() {

  // Give our pumpkin a random location and size.
  const pumpkinCenterX = random(0, width);
  const pumpkinCenterY = random(0, height);
  const pumpkinWidth = random(100, 300);
  const pumpkinHeight = random(50, 200);

  // Give our pumpkin a random color. Try changing these numbers!
  const pumpkinRed = random(100, 255);
  const pumpkinGreen = random(0, 150);
  const pumpkinBlue = random(0, 100);

  // We don't redraw the background, so all our old pumpkins stick around!

  // stem
  stroke(0, 160, 0);
  strokeWeight(20);
  line(pumpkinCenterX,
       pumpkinCenterY - pumpkinHeight * .5,
       pumpkinCenterX - pumpkinWidth * .25,
       pumpkinCenterY - pumpkinHeight * .75);

  // Set the color of the pumpkin.
  fill(pumpkinRed, pumpkinGreen, pumpkinBlue);
  // This line makes the outline a little darker than the fill.
  stroke(pumpkinRed * .5, pumpkinGreen * .5, pumpkinBlue * .5);
  strokeWeight(3);

  // pumpkin
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .75, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .5, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .25, pumpkinHeight);
}
</script>

This sketch uses the `random()`` function to make fill the screen with a pumpkin patch!

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/n9UwhbcyO)

![pumpkin patch](/examples/p5js/animation/images/pumpkin-patch-2.png)

This is part of [p5 spooky sketches printout](http://tinyurl.com/p5-spooky-sketches) I made for [CC Fest](http://ccfest.rocks/) in 2019. That printout contains a bunch of Halloween-themed examples of drawing and image manipulation. Feel free to use it on your own or in a classroom!

# Remix Ideas

- Draw a pumpkin whenever the user clicks their mouse.
- Turn your pumpkins into Jack-o'-lanterns.
- Make other Halloween decorations, like gourds or ghosts.