---
layout: tutorial
title: Jack-o'-Lantern
thumbnail: /examples/p5js/calling-functions/images/jack-o-lantern-1.png
tagline: 🎃🎃🎃
sort-key: 160
meta-title: p5.js Example - Jack-o'-Lantern
meta-description: 🎃🎃🎃
meta-image: /examples/p5js/calling-functions/images/jack-o-lantern-1.png
tags: [example, p5.js, javascript, calling-functions, 🎃]
includeP5jsWidget: true
previousPost: /tutorials/p5js/calling-functions
redirect_from: /examples/p5js/calling-functions/jack-o-lantern
discourseEmbedUrl: /examples/p5js/calling-functions/jack-o-lantern
---

{% include p5js-widget.html width=500 height=500 %}
// This sketch creates a Jack-o'-Lantern
// by drawing a pumpkin, and then drawing eyes and
// a mouth on top of the pumpkin. Try carving
// your own digital Jack-o'-Lantern!

function setup() {
  createCanvas(500, 500);
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

  fill(0);
  noStroke();

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
    radians(0), radians(180));
}
</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/sLpnHaBUw)

This sketch calls the `ellipse()` function to draw a pumpkin, and then calls the `triangle()` and `arc()` functions to draw a face on the pumpkin.

![Jack-o'-lantern](/examples/p5js/calling-functions/images/jack-o-lantern-2.png)

This is part of [p5 spooky sketches printout](http://tinyurl.com/p5-spooky-sketches) I made for [CC Fest](http://ccfest.rocks/) in 2019. That printout contains a bunch of Halloween-themed examples of drawing and image manipulation. Feel free to use it on your own or in a classroom!

# Remix Ideas

- Draw a different face on your pumpkin to make a Jack-o'-lantern!
- Make other Halloween decorations, like gourds or ghosts!
