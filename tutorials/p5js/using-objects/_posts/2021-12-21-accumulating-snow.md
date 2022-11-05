---
layout: tutorial
title: Accumulating Snow
thumbnail: /tutorials/p5js/using-objects/images/accumulating-snow-3.png
tagline: Draw snow that accumulates on the ground.
sort-key: 210
meta-title: Accumulating Snow - Using Objects in p5.js
meta-description: Draw snow that accumulates on the ground.
meta-image: /tutorials/p5js/using-objects/images/accumulating-snow-1.png
tags: [example, p5.js, javascript, objects]
includeP5jsWidget: true
previousPost: /tutorials/p5js/using-objects
redirect_from: /tutorials/p5js/using-objects/accumulating-snow
discourseEmbedUrl: /tutorials/p5js/using-objects/accumulating-snow
---

{% include youtube-embed.html slug="fQ_kcFRLIto" %}

---

This sketch uses the `p5.Vector` class to create an animation of snow that accumulates on the ground.

{% include p5js-widget.html width=400 height=400 %}
const snowflakes = [];
const ground = [];

const minSpeed = 1;
const maxSpeed = 5;

function setup() {
  createCanvas(400, 400);
  noSmooth();
  stroke(255);
  fill(255);

  for(let i = 0; i < 100; i++){
    snowflakes.push(createVector(
      random(width), random(height),
      random(minSpeed, maxSpeed)));
  }

  for(let x = 0; x < width; x++) {
    ground[x] = height;
  }
}

function draw() {
  background(0, 0, 32);

  for(const snowflake of snowflakes) {
    snowflake.y += snowflake.z;

    rect(snowflake.x, snowflake.y, 1, 1);

    if(snowflake.y >= ground[floor(snowflake.x)]) {
      ground[floor(snowflake.x)]--;

      snowflake.x = random(width);
      snowflake.y = 0;
    }
  }

  for(let x = 0; x < width; x++) {
    rect(x, ground[x], 1, height - ground[x]);
  }
}

function mousePressed() {
  snowflakes.push(createVector(mouseX, mouseY,
                               random(minSpeed, maxSpeed)));
}

function mouseDragged() {
  snowflakes.push(createVector(mouseX, mouseY,
                               random(minSpeed, maxSpeed)));
}
</script>

![accumulating snow](/tutorials/p5js/using-objects/images/accumulating-snow-2.gif)

[Edit this sketch in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/PvtHm8EIe)

# Remix Ideas

- Use a rolling average to smooth out the ground.
- Make your snow move horizontally rather than just falling straight down.
- Add trees, mountains, or a snowman!
