---
layout: tutorial
title: Spooky Text
thumbnail: /tutorials/p5js/for-loops/images/spooky-text-1.png
tagline: Use `sin()` to make spooky text.
sort-key: 750
meta-title: p5.js Example - Sp00ky Text
meta-description: Use sin() to make spooky text.
meta-image: /tutorials/p5js/for-loops/images/spooky-text-1.png
tags: [example, p5.js, javascript, for-loops, 🎃]
includeP5jsWidget: true
previousPost: /tutorials/p5js/for-loops
redirect_from: /tutorials/p5js/for-loops/spooky-text
discourseEmbedUrl: /tutorials/p5js/for-loops/spooky-text
---

{% include youtube-embed.html slug="PEO4fhXMQ9s" %}

---

This sketch uses the `sin()` function to create spooky text!

```
let message = 'Spoooooky!';
let messageX;
const xSpeed = 2;
const ySpeed = 0.05;
const amplitude = 100;
const verticalLetterSpacing = 10;
let font;

function preload() {
  font = loadFont('PentagramExtended.ttf');
}

function setup() {
  createCanvas(400, 400);
  textFont(font);

  messageX = width;
}

function draw() {
  background(32);
  fill(255, 100, 25);

  textSize(100);

  for (let i = 0; i < message.length; i++) {
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY = height / 2 +
      sin((frameCount - letterOffset) * ySpeed) * amplitude;

    text(message[i], letterX, letterY);
  }

  messageX -= xSpeed;
  if (messageX < - textWidth(message)) {
    messageX = width + 50;
  }

  textSize(24);
  fill(200);
  text("Font by @somepx", 25, height - 25);
}

function mouseClicked(){
  window.open('https://somepx.itch.io/', '_blank');
}
```

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/wMHZ2LX16)

![spooky text](/tutorials/p5js/for-loops/images/spooky-text-2.gif)

# Remix Ideas

- Change the message, or change the variables at the top to change the animation.
- Use a different font.
- Make each letter a different color.
