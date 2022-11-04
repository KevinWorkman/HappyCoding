---
layout: tutorial
title: Random Lines
thumbnail: /examples/p5js/animation/images/random-lines-2.png
tagline: Fill the screen with random lines.
sort-key: 520
meta-title: p5.js Example - Random Lines
meta-description: Fill the screen with random lines.
meta-image: /examples/p5js/animation/images/random-lines-3.png
tags: [example, p5.js, javascript, random, animation]
includeP5jsWidget: true
previousPost: /tutorials/p5js/animation
redirect_from: /examples/p5js/animation/random-lines
discourseEmbedUrl: /examples/p5js/animation/random-lines
---

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
  strokeWeight(5);
  background(50);
}

function draw() {
  stroke(random(255), random(255), random(255));
  line(random(width), random(height), random(width), random(height));
}
</script>

This sketch uses the `random()` function to fill the screen with random lines.

![random lines](/examples/p5js/animation/images/random-lines-1.png)

# Remix Ideas

- Make it so every line starts on one half of the canvas and ends on the other half.
- Instead of random colors, make every line a different shade of the same color.
- Make the lines fade over time. Hint: Try adding `background(50, 10);` to the top of the `draw()` function!
