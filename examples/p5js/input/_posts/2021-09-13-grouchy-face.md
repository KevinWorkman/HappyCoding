---
layout: tutorial
title: Grouchy Face
thumbnail: /examples/p5js/input/images/grouchy-face-1.png
tagline: Make your computer mad when you click the mouse.
sort-key: 630
meta-title: p5.js Example - Grouchy Face
meta-description: Make your computer mad when you click the mouse.
meta-image: /examples/p5js/input/images/grouchy-face-1.png
tags: [example, p5.js, javascript, input]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include p5js-widget.html width=300 height=300 %}
let isMad = false;

function setup() {
  createCanvas(300, 300);
  textAlign(CENTER, CENTER);
  textSize(144);
}

function draw() {
  if (isMad) {
    background(random(64, 255), 0, 0);
    text("😠", width / 2 + random(-10, 10), height / 2 + random(-10, 10));
  } else {
    background(64);
    text("🙂", width / 2, height / 2);
  }
}

function mousePressed() {
  isMad = !isMad;
}
</script>

This sketch shows shows an angry face when you click the mouse.

![grouchy face](/examples/p5js/input/images/grouchy-face-1.png)

# Remix Ideas

- Add other emojis. Make your computer laugh instead of getting mad!
- Switch between related emojis, like 🐵🙊🙉🙈🐒!