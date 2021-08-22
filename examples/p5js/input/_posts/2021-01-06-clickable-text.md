---
layout: tutorial
title: Clickable Text
thumbnail: /examples/p5js/input/images/clickable-text-2.png
tagline: Create text that opens a link when you click it.
sort-key: 610
meta-title: p5.js Example - Clickable Text
meta-description: Create text that opens a link when you click it.
meta-image: /examples/p5js/input/images/clickable-text-3.png
tags: [example, p5.js, javascript, input]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include p5js-widget.html width=300 height=300 %}
const message = '#BlackLivesMatter';
const messageX = 20;
const messageY = 150;

function setup() {
  createCanvas(300, 300);
  textSize(32);
}

function draw() {
  background(32);

  if (isMouseInsideText(message, messageX, messageY)) {
    cursor(HAND);
    fill(0, 200, 255);
    stroke(0, 200, 255);
  } else {
    cursor(ARROW);
    fill(255);
    stroke(255);
  }

  text(message, messageX, messageY);
}

function mouseClicked() {
  if (isMouseInsideText(message, messageX, messageY)) {
    window.open('https://blacklivesmatter.com/', '_blank');
  }
}

function isMouseInsideText(message, messageX, messageY) {
  const messageWidth = textWidth(message);
  const messageTop = messageY - textAscent();
  const messageBottom = messageY + textDescent();

  return mouseX > messageX && mouseX < messageX + messageWidth &&
    mouseY > messageTop && mouseY < messageBottom;
}
</script>

This sketch creates text that opens a link when you click it. The `textWidth()`, `textAscent()`, and `textDescent()` give you the width and height of a string, which you can use to calculate the [bounding box](https://en.wikipedia.org/wiki/Minimum_bounding_box) of the text. Then you can check whether the mouse is inside that box, which is what the `isMouseInsideText()` function does.

![Black Lives Matter](/examples/p5js/input/images/clickable-text-1.png)

# Remix Ideas

- Show the bounding box around the text.
- Try different fonts and styles.
- Add a link to your portfolio page in your sketches.

