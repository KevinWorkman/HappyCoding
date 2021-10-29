---
layout: tutorial
title: Image Filter
thumbnail: /examples/p5js/images/images/image-filter-1.png
tagline: Make your own image filter.
sort-key: 1120
meta-title: p5.js Example - Image Filter
meta-description: Make your own image filter.
meta-image: /examples/p5js/images/images/image-filter-11.png
tags: [example, p5.js, javascript, images, 🎃]
includeP5jsWidget: false
previousPost: /examples/p5js/
---

This sketch loops over every pixel in an image, and for each pixel it calculates a new color based on the original color. This is one way image filters are made! To play around, try changing the `getFilterColor(r, g, b)` function below!

```
let img;

function preload() {
  img = loadImage('images/cat-3.jpg');

  // Click the > menu to the left and look in
  // the images directory for more images to try!
  // Or upload your own image!
  // URLs also work, like this:
  // img = loadImage('https://upload.wikimedia.org/wikipedia/commons/6/69/June_odd-eyed-cat_cropped.jpg');
}

function setup() {
  createCanvas(600, 600);

  // Resizes the image so it fits on the screen
  img.resize(width, height);

  noLoop();
  noSmooth();
}

function draw() {

  // This code looks at every pixel in the image,
  // gets the color of the pixel and
  // calculates the new color based on our filter logic.
  img.loadPixels();
  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {

      // Gets the original color
      const imgColor = img.get(x, y);

      // Gets the filter color
      const filterColor = getFilterColor(red(imgColor), green(imgColor), blue(imgColor));

      // Draws a pixel with the filter color
      stroke(filterColor);
      point(x, y);
    }
  }
}

// This function is where the magic happens!
// It takes the original r, g, b, color
// and uses that to calculate a "filter" color.
function getFilterColor(r, g, b) {

  // Try using the r, g, b values to make a new color!
  // Some things to try:
  // xFilter = 255; (increase or decrease a specific color)
  // xFilter = 255 - x; (bright becomes dark, dark becomes bright)
  // xFilter = r; (rearrange r, g, b into a different order)

  const rFilter = 255 - r;
  const gFilter = b
  const bFilter = g;

  return color(rFilter, gFilter, bFilter);
}

//noprotect
```

[Click here to edit this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/9rh8yRToQ)

![filtered image](/examples/p5js/images/images/image-filter-2.png)

This is part of [p5 spooky sketches printout](http://tinyurl.com/p5-spooky-sketches) I made for [CC Fest](http://ccfest.rocks/) in 2019. That printout contains a bunch of Halloween-themed examples of drawing and image manipulation. Feel free to use it on your own or in a classroom!

# Remix Ideas

- Apply this filter to different images.
- Change the logic in the `getFilterColor()` function to make your own filter.
- Can you convert a color image to black and white, or recolor a black and white image?
