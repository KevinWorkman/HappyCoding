---
layout: post
title: Random Skulls
thumbnail: /tutorials/p5js/animation/images/random-skulls-2.png
tagline: Fill the screen with random skulls.
sort-key: 570
meta-title: p5.js Example - Random Skulls
meta-description: Fill the screen with random skulls.
meta-image: /tutorials/p5js/animation/images/random-skulls-1.png
tags: [example, p5.js, javascript, random, animation, 🎃]
includeP5jsWidget: true
previousPost: /tutorials/p5js/animation
redirect_from: /examples/p5js/animation/random-skulls
discourseEmbedUrl: /examples/p5js/animation/random-skulls
---

This sketch draws a bunch of random skulls! Try changing the eye color, or adding a random hat to the skulls, or try generating a different random scene!

{% include p5js-widget.html width=400 height=400 %}
function setup() {
  createCanvas(400, 400);

  // Draw a random background color.
  // This is in setup() so old skulls stay on the screen.
  background(random(255), random(255), random(255));
}

function draw() {
  // Try passing in mouseX and mouseY!
  drawSkull(random(width), random(height), random(10, 100), random(10, 100));
}

function drawSkull(skullX, skullY, skullWidth, skullHeight) {

  // Change the fill color to a random color.
  fill(random(255), random(255), random(255));
  noStroke();

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

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/PNuKYYKmz)

![random skulls](/tutorials/p5js/animation/images/random-skulls-3.gif)

This is part of [p5 spooky sketches printout](http://tinyurl.com/p5-spooky-sketches) I made for [CC Fest](http://ccfest.rocks/) in 2019. That printout contains a bunch of Halloween-themed examples of drawing and image manipulation. Feel free to use it on your own or in a classroom!

# Remix Ideas

- Add hats to the skulls.
- Can you make the skulls look happy or scary?
- Draw a trail of skulls that follows the mouse.
