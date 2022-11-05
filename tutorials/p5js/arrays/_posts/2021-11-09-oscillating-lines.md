---
layout: tutorial
title: Oscillating Lines
thumbnail: /examples/p5js/arrays/images/oscillating-lines-1.png
tagline: Show lines that oscillate up and down.
sort-key: 820
meta-title: Oscillating Lines - p5.js Arrays Example
meta-description: Use arrays to show lines that oscillate up and down.
meta-image: /examples/p5js/arrays/images/oscillating-lines-1.png
tags: [example, p5.js, javascript, arrays]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

This sketch uses an array to hold line height values, and then changes those values to show oscillating lines.

{% include youtube-embed.html slug="4ijQFzw8trw" %}

---

{% include p5js-widget.html width=300 height=300 %}
const lines = 100;
let lineHeights = [];
let lineSpeeds = [];

function setup() {
  createCanvas(400, 400);

  for(let x = 0; x < lines; x++){
    const lineHeight = random(height);
    lineHeights[x] = lineHeight;
    lineSpeeds[x] = random(-10, 10);
  }
}

function draw() {
  background(32);

  for(let i = 0; i < lines; i++){
    lineHeights[i] += lineSpeeds[i];

    if(lineHeights[i] < 0 || lineHeights[i] > height) {
      lineSpeeds[i] *= -1;
    }

    const x = width * (i / lines);
    const lineWidth = width / lines;

    fill(0, 100, 255);
    stroke(0, 100, 255);
    rect(x, height / 2 - lineHeights[i] / 2,
         lineWidth, lineHeights[i] / 2);

    fill(100, 0, 255);
    stroke(100, 0, 255);
    rect(x, height / 2,
         lineWidth, lineHeights[i] / 2);
  }
}
</script>

[Edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/ieWefdCXp)

![oscillating lines](/examples/p5js/arrays/images/oscillating-lines-2.gif)

# Remix Ideas

- Change the number of lines, or their colors.
- Give each line a random color.
- Make the animation look more like a mountain, or a city, or trees reflected in a pond.

