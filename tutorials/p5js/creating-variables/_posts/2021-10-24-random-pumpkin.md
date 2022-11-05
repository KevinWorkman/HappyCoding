---
layout: tutorial
title: Random Pumpkin
thumbnail: /tutorials/p5js/creating-variables/images/random-pumpkin-1.png
tagline: Use the random() function to draw a random pumpkin.
sort-key: 320
meta-title: p5.js Example - Random Pumpkin
meta-description: Use the random() function to draw a random pumpkin.
meta-image: /tutorials/p5js/creating-variables/images/random-pumpkin-1.png
tags: [example, p5.js, javascript, random, 🎃]
includeP5jsWidget: true
previousPost: /tutorials/p5js/creating-variables
redirect_from: /examples/p5js/creating-variables/random-pumpkin
discourseEmbedUrl: /examples/p5js/creating-variables/random-pumpkin
---

{% include p5js-widget.html width=500 height=500 %}
// This sketch uses the random() function to generate a random pumpkin!

function setup() {
  createCanvas(500, 500);

  noLoop();
}

function draw() {

  const pumpkinCenterX = width / 2;
  const pumpkinCenterY = height / 2;
  // These lines make our pumpkin a random size!
  const pumpkinWidth = random(100, 400);
  const pumpkinHeight = random(50, 200);

  background(128);

  // stem
  stroke(0, 160, 0);
  strokeWeight(20);

  // The stem is based on the size of the pumpkin!
  // It starts at the top of the pumpkin
  // and goes up and to the left.
  // If this looks confusing, try changing the values
  // to see what happens!
  line(pumpkinCenterX,
       pumpkinCenterY - pumpkinHeight * .5,
       pumpkinCenterX - pumpkinWidth * .25,
       pumpkinCenterY - pumpkinHeight * .75);

  // random color
  fill(random(255), random(255), random(255));
  stroke(0, 100);
  strokeWeight(3);

  // pumpkin
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .75, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .5, pumpkinHeight);
  ellipse(pumpkinCenterX, pumpkinCenterY, pumpkinWidth * .25, pumpkinHeight);
}
</script>

This sketch uses the `random()` function to draw a random pumpkin.

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/zdDo5CTxj)

![random pumpkins](/tutorials/p5js/creating-variables/images/random-pumpkin-2.gif)

This is part of [p5 spooky sketches printout](http://tinyurl.com/p5-spooky-sketches) I made for [CC Fest](http://ccfest.rocks/) in 2019. That printout contains a bunch of Halloween-themed examples of drawing and image manipulation. Feel free to use it on your own or in a classroom!

# Remix Ideas

- Fill the screen with random pumpkins!
- Draw a random face on your pumpkin to make a Jack-o'-lantern!
- Make other Halloween decorations, like gourds or ghosts!
