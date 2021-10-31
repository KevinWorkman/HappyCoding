---
layout: tutorial
title: Typography
thumbnail: /examples/p5js/creating-variables/images/typography-1.png
tagline: Style your text with custom fonts.
sort-key: 340
meta-title: p5.js Example - Typography
meta-description: Style your text with custom fonts.
meta-image: /examples/p5js/creating-variables/images/typography-1.png
tags: [example, p5.js, javascript, random, typography]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

This sketch calls the `loadFont()` function to load a custom font, which you can use to style your text.

{% include p5js-widget.html width=400 height=400 %}
let happyCodingFont;

function preload() {
  happyCodingFont = loadFont('https://happycoding.io/fonts/happycoding/happycoding.ttf');
}

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  textSize(100);
  textFont(happyCodingFont);
}

function draw() {
  background(32);
  fill(255);

  text('Happy', width / 2, height / 2 - 50);
  text('Coding', width / 2, height / 2 + 50);
}
</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/go2uoHudQ)

**Note:** This code requires the `happycoding.ttf` file in your sketch directory, or you can use the full URL like `https://happycoding.io/fonts/happycoding/happycoding.ttf`.

![happy coding font](/examples/p5js/creating-variables/images/typography-2.png)

# Remix Ideas

- Find a font you like and use it to style your text.
- Make every letter a different color.
- Make every letter a different font!