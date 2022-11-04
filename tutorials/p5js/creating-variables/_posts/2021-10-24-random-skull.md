---
layout: tutorial
title: Random Skull
thumbnail: /examples/p5js/creating-variables/images/random-skull-1.png
tagline: Use the random() function to draw a random skull.
sort-key: 330
meta-title: p5.js Example - Random Skull
meta-description: Use the random() function to draw a random skull.
meta-image: /examples/p5js/creating-variables/images/random-skull-1.png
tags: [example, p5.js, javascript, random, 🎃]
includeP5jsWidget: true
previousPost: /examples/p5js/
previousPost: /tutorials/p5js/creating-variables
redirect_from: /examples/p5js/creating-variables/random-skull
discourseEmbedUrl: /examples/p5js/creating-variables/random-skull
---

{% include p5js-widget.html width=500 height=500 %}
// This sketch draws a random skull!
// Try adding a random hat to the skull,
// or try generating a different random drawing!

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {

  // Draw a random background color.
  background(random(255), random(255), random(255));
  noStroke();

  // We'll draw our skull in the middle of the screen.
  var skullX = width / 2;
  var skullY = height / 2;

  // Give the skull a random width and height.
  var skullWidth = random(50, 400);
  var skullHeight = random(50, 300);

  // Change the fill color to a random color.
  fill(random(255), random(255), random(255));

  // Draw the top circle part of the skull.
  ellipse(skullX, skullY, skullWidth, skullHeight);

  // Draw the bottom rectangle part of the skull.
  rect(skullX - skullWidth / 4,
    skullY + skullHeight / 4,
    skullWidth / 2,
    skullHeight / 2);

  // Change the fill color to black.
  fill(0);

  // Below, we use the skullX, skullY, skullWidth, and skullHeight
  // variables to draw the eyes and teeth inside the skull.
  // If this is confusing, try drawing out a few examples
  // with a pencil on a piece of graph paper!

  // Draw the eyes.
  var eyeSpacing = skullWidth / 4;
  var eyeWidth = skullWidth / 6;
  var eyeHeight = skullHeight / 4;
  ellipse(skullX - eyeSpacing,
    skullY,
    eyeWidth,
    eyeHeight);
  ellipse(skullX + eyeSpacing,
    skullY,
    eyeWidth,
    eyeHeight);

  // Draw the teeth.
  var teethWidth = skullWidth / 30;
  var teethHeight = skullHeight / 4;
  var teethTop = skullY + skullHeight / 2;
  var teethSpacing = skullWidth / 6;
  rect(skullX - teethSpacing,
    teethTop,
    teethWidth,
    teethHeight);
  rect(skullX,
    teethTop,
    teethWidth,
    teethHeight);
  rect(skullX + teethSpacing,
    teethTop,
    teethWidth,
    teethHeight);
}
</script>

This sketch uses the `random()` function to draw a random skull.

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/KUQZggYc4)

![random pumpkins](/examples/p5js/creating-variables/images/random-skull-2.gif)

This is part of [p5 spooky sketches printout](http://tinyurl.com/p5-spooky-sketches) I made for [CC Fest](http://ccfest.rocks/) in 2019. That printout contains a bunch of Halloween-themed examples of drawing and image manipulation. Feel free to use it on your own or in a classroom!

# Remix Ideas

- Fill the screen with random skulls!
- Add a random hat to your skull.
- Make other Halloween decorations, like gourds or ghosts!
