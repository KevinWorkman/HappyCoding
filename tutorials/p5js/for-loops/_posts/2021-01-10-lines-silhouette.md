---
layout: tutorial
title: Lines Silhouette
thumbnail: /tutorials/p5js/for-loops/images/lines-silhouette-3.png
tagline: Use a for loop to create a silhouette of lines.
sort-key: 710
meta-title: p5.js Example - Lines Silhouette
meta-description: Use a for loop to create a silhouette of lines.
meta-image: /tutorials/p5js/for-loops/images/lines-silhouette-2.png
tags: [example, p5.js, javascript, for-loops]
includeP5jsWidget: true
previousPost: /tutorials/p5js/for-loops
redirect_from: /tutorials/p5js/for-loops/lines-silhouette
discourseEmbedUrl: /tutorials/p5js/for-loops/lines-silhouette
---

{% include p5js-widget.html width=300 height=300 %}
const minLineWidth = 0;
const maxLineWidth = 100;
let lineWidthChange = 10;

function setup() {
  createCanvas(300, 300);
  frameRate(1);
  strokeWeight(2);
  stroke(255);
}

function draw() {
  background(32);

  let lineWidth = random(minLineWidth, maxLineWidth);
  for(let lineY = 0; lineY < height; lineY++){
    lineWidth += random(-lineWidthChange, lineWidthChange);
    lineWidth = constrain(lineWidth, minLineWidth, maxLineWidth);

    line(width / 2 - lineWidth, lineY, width / 2 + lineWidth, lineY);
  }
}
</script>

This sketch uses a `for` loop to draw a bunch of lines with random lengths to create a silhouette effect.

![lines silhouette](/tutorials/p5js/for-loops/images/lines-silhouette-1.gif)

# Remix Ideas

- Change the `minLineWidth`, `maxLineWidth`, and `lineWidthChange` variables to create different effects.
- Give each line a different color.
- Make the lines pattern horizontal instead of vertical, so that it looks like an [audio waveform](https://duckduckgo.com/?q=audio+waveform&iax=images&ia=images).
