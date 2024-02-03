---
layout: post
title: Pixel Swapper
thumbnail: /tutorials/p5js/images/images/pixel-swapper-1.png
tagline: Rearrange the pixels in an image.
sort-key: 1160
meta-title: Pixel Swapper - p5.js Example
meta-description: Rearrange the pixels in an image.
meta-image: /tutorials/p5js/images/images/pixel-swapper-1.png
tags: [example, p5.js, javascript, images]
includeP5jsWidget: false
previousPost: /tutorials/p5js/images
redirect_from: /examples/p5js/images/pixel-swapper
discourseEmbedUrl: /examples/p5js/images/pixel-swapper
---

This sketch rearranges the pixels in an image. Every frame, it chooses a random pixel, and swaps it with another random pixel.

---

{% include youtube-embed.html slug="-TFPNRH26wU" %}

---

```
let img;

function preload() {
  img = loadImage('images/bee.jpg');
}

function setup() {
  createCanvas(400, 400);
  noSmooth();
  img.resize(width, height);
}

function draw() {
  img.loadPixels();
  for (let i = 0; i < 100; i++) {
    swapPixels();
  }
  img.updatePixels();

  image(img, 0, 0, width, height);
}

function averagePixels() {
  const xOne = random(img.width);
  const yOne = random(img.height);
  const colorOne = img.get(xOne, yOne);

  // Uncomment to choose points closer together
  // const xTwo = constrain(xOne + random(-20, 20), 0, img.width-1);
  // const yTwo = constrain(yOne + random(-20, 20), 0, img.height-1);
  const xTwo = random(img.width);
  const yTwo = random(img.height);
  const colorTwo = img.get(xTwo, yTwo);

  const averageColor = color(
    (red(colorOne) + red(colorTwo)) / 2,
    (green(colorOne) + green(colorTwo)) / 2,
    (blue(colorOne) + blue(colorTwo)) / 2
  );

  img.set(xOne, yOne, averageColor);
  img.set(xTwo, yTwo, averageColor);
}

function swapPixels() {
  const xOne = random(img.width);
  const yOne = random(img.height);
  const colorOne = img.get(xOne, yOne);

  // Uncomment to choose points closer together
  // const xTwo = constrain(xOne + random(-20, 20), 0, img.width-1);
  // const yTwo = constrain(yOne + random(-20, 20), 0, img.height-1);
  const xTwo = random(img.width);
  const yTwo = random(img.height);
  const colorTwo = img.get(xTwo, yTwo);

  img.set(xOne, yOne, colorTwo);
  img.set(xTwo, yTwo, colorOne);
}

```

[Edit this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/jb5gai5AH)

The code contains options for swapping or averaging pixels, either close together or far apart. This creates different kinds of animations:

![swapping far away pixels](/tutorials/p5js/images/images/pixel-swapper-2-swap-global.gif)
![averaging far away pixels](/tutorials/p5js/images/images/pixel-swapper-3-avg-global.gif)
![swapping close pixels](/tutorials/p5js/images/images/pixel-swapper-4-avg-local.gif)
![averaging close pixels](/tutorials/p5js/images/images/pixel-swapper-5-swap-local.gif)

# Remix Ideas

- Rearrange the pixels in your own image, and post it on the [Happy Coding forum](https://forum.happycoding.io)!
- Use a [weighted average](https://en.wikipedia.org/wiki/Weighted_arithmetic_mean) to blend colors more gradually.
- Use [sum of squares](https://sighack.com/post/averaging-rgb-colors-the-right-way) to blend colors.
