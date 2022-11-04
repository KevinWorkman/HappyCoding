---
layout: tutorial
title: Pixel Sorter
thumbnail: /examples/p5js/images/images/pixel-sorter-1.png
tagline: Sort the pixels in an image.
sort-key: 1160
meta-title: Pixel Sorter - p5.js Example
meta-description: Sort the pixels in an image.
meta-image: /examples/p5js/images/images/pixel-sorter-1.png
tags: [example, p5.js, javascript, images, 🎃]
includeP5jsWidget: false
previousPost: /tutorials/p5js/images
redirect_from: /examples/p5js/images/pixel-sorter
discourseEmbedUrl: /examples/p5js/images/pixel-sorter
---

This sketch sorts the pixels in an image, so that lighter pixels float to the top and darker pixels sink to the bottom.

```
let img;

function preload() {
  img = loadImage("images/bee.jpg");
}

function setup() {
  createCanvas(400, 400);

  // Resize the image so it fits on the screen.
  // We make it 100x100 so we can see individual pixels.
  img.resize(100, 100);

  noSmooth();
}

function draw() {
  img.loadPixels();

  // Loop 100 times to speed up the animation.
  for (let i = 0; i < 100; i++) {
    sortPixels();
  }

  img.updatePixels();

  image(img, 0, 0, width, height);
}

function sortPixels() {
  // Get a random pixel.
  const x = random(img.width);
  const y = random(img.height - 1);

  // Get the color of the pixel.
  const colorOne = img.get(x, y);

  // Get the color of the pixel below the first one.
  const colorTwo = img.get(x, y + 1);

  // Get the total R+G+B of both colors.
  const totalOne = red(colorOne) + green(colorOne) + blue(colorTwo);
  const totalTwo = red(colorTwo) + green(colorTwo) + blue(colorTwo);

  // If the first total is less than the second total, swap the pixels.
  // This causes darker colors to fall to the bottom,
  // and light pixels to rise to the top.
  if (totalOne < totalTwo) {
    img.set(x, y, colorTwo);
    img.set(x, y + 1, colorOne);
  }
}
```

[Click here to edit this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/lwn8I0r7J)

![pixel sorter](/examples/p5js/images/images/pixel-sorter-2.gif)

This is part of [p5 spooky sketches printout](http://tinyurl.com/p5-spooky-sketches) I made for [CC Fest](http://ccfest.rocks/) in 2019. That printout contains a bunch of Halloween-themed examples of drawing and image manipulation. Feel free to use it on your own or in a classroom!

# Remix Ideas

- Sort the pixels in your own image, and post it on the [Happy Coding forum](https://forum.happycoding.io)!
- Sort red pixels to the left, green pixels to the top, and blue pixels to the right.
- Try implementing different [sorting algorithms](https://en.wikipedia.org/wiki/Sorting_algorithm) and applying them to the pixels in your image.
