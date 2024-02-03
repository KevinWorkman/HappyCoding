---
layout: post
title: Flickering Jack-o'-Lantern
thumbnail: /tutorials/p5js/animation/images/flickering-jack-o-lantern-1.png
tagline: Animate a flickering Jack-o'-lantern.
sort-key: 570
meta-title: p5.js Example - Flickering Jack-o'-Lantern
meta-description: Animate a flickering Jack-o'-lantern.
meta-image: /tutorials/p5js/animation/images/flickering-jack-o-lantern-1.png
tags: [example, p5.js, javascript, random, animation, 🎃]
includeP5jsWidget: true
previousPost: /tutorials/p5js/animation
redirect_from: /examples/p5js/animation/flickering-jack-o-lantern
discourseEmbedUrl: /examples/p5js/animation/flickering-jack-o-lantern
---

This sketch creates a flickering Jack-o'-lantern by drawing a pumpkin, and then filling in the eyes and mouth with a random red/yellow color each frame. Try changing the color of the flicker!

{% include p5js-widget.html width=400 height=400 %}
function setup() {
  createCanvas(500, 500);
  frameRate(10);
}

function draw() {

  // gray background
  background(100);

  // stem
  stroke(0, 160, 0);
  strokeWeight(20);
  line(250, 150, 225, 100);

  // orange
  fill(255, 100, 0);
  stroke(120, 60, 0);
  strokeWeight(3);

  // pumpkin is made up of circles
  ellipse(250, 250, 400, 200);
  ellipse(250, 250, 300, 200);
  ellipse(250, 250, 200, 200);
  ellipse(250, 250, 100, 200);

  // random red/yellow color
  var fireRed = random(255);
  var fireGreen = random(fireRed);
  var fireBlue = random(fireGreen);
  fill(fireRed, fireGreen, fireBlue);
  stroke(0);

  // eyes
  triangle(
    175, 200,
    150, 225,
    200, 225);
  triangle(
    325, 200,
    300, 225,
    350, 225);

  // mouth
  arc(
    250, 275,
    250, 75,
    radians(0), radians(180),
    CHORD);
}
</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/JyhofVcMA)

![flickering Jack-o'-lantern](/tutorials/p5js/animation/images/flickering-jack-o-lantern-2.gif)

This is part of [p5 spooky sketches printout](http://tinyurl.com/p5-spooky-sketches) I made for [CC Fest](http://ccfest.rocks/) in 2019. That printout contains a bunch of Halloween-themed examples of drawing and image manipulation. Feel free to use it on your own or in a classroom!

# Remix Ideas

- Change the color of the flicker.
- Add a flying bat to the background.
- Turn the flickering on and off when the user clicks.
