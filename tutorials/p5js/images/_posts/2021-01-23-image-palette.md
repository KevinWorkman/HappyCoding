---
layout: tutorial
title: Image Palette
thumbnail: /examples/p5js/images/images/image-palette-11.png
tagline: Replace the colors in an image.
sort-key: 1120
meta-title: p5.js Example - Image Palette
meta-description: Replace the colors in an image.
meta-image: /examples/p5js/images/images/image-palette-11.png
tags: [example, p5.js, javascript, images, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/images
redirect_from: /examples/p5js/images/image-palette
discourseEmbedUrl: /examples/p5js/images/image-palette
---

{% include youtube-embed.html slug="gDXynxUzyZo" %}

---

[Click here to view this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/mrAk5h1g2)

[Click here to view the result by itself.](https://editor.p5js.org/KevinWorkman/present/mrAk5h1g2)

```
let img;
let palette;
let y = 0;

function preload() {
  img = loadImage('images/horizons/horizon-7.jpg');
}

function setup() {
  createCanvas(600, 600);
  img.resize(width, height);

  // Genuary 23 palette
  palette = [
    '#264653', '#2a9d8f',
    '#e9c46a', '#f4a261',
    '#e76f51'
  ];

  image(img, 0, 0);
}

function draw() {
  for (let x = 0; x < width; x++) {
    const imgColor = img.get(x, y);
    const paletteColor = getPaletteColor(imgColor);
    stroke(paletteColor);
    point(x, y);
  }

  y++;
  if (y >= height) {
    noLoop();
  }
}

function getPaletteColor(imgColor) {
  const imgR = red(imgColor);
  const imgG = green(imgColor);
  const imgB = blue(imgColor);

  let minDistance = 999999;
  let targetColor;

  for (const c of palette) {
    const paletteR = red(c);
    const paletteG = green(c);
    const paletteB = blue(c);

    const colorDistance =
      dist(imgR, imgG, imgB,
           paletteR, paletteG, paletteB);

    if (colorDistance < minDistance) {
      targetColor = c;
      minDistance = colorDistance;
    }
  }

  return targetColor;
}
```

[Click here to view this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/mrAk5h1g2)

[Click here to view the result by itself.](https://editor.p5js.org/KevinWorkman/present/mrAk5h1g2)

This sketch replaces the colors in an image with colors from a chosen palette.

I created this for the 23rd day of [Genuary](https://genuary2021.github.io/) which had a prompt of 5 colors:
<span style="padding: 1px; color:white; background:#264653">#264653</span>,
<span style="padding: 1px; color:white; background:#2a9d8f">#2a9d8f</span>,
<span style="padding: 1px; color:white; background:#e9c46a">#e9c46a</span>,
<span style="padding: 1px; color:white; background:#f4a261">#f4a261</span>, and
<span style="padding: 1px; color:white; background:#e76f51">#e76f51</span>.

The colors reminded me of a sunset, so I applied the palette filter to a few pictures of horizons I've taken recently.

![palette image](/examples/p5js/images/images/image-palette-1.gif)
![palette image](/examples/p5js/images/images/image-palette-2.gif)
![palette image](/examples/p5js/images/images/image-palette-3.gif)
![palette image](/examples/p5js/images/images/image-palette-4.gif)
![palette image](/examples/p5js/images/images/image-palette-5.gif)
![palette image](/examples/p5js/images/images/image-palette-6.gif)
![palette image](/examples/p5js/images/images/image-palette-7.gif)
![palette image](/examples/p5js/images/images/image-palette-8.gif)
![palette image](/examples/p5js/images/images/image-palette-9.gif)
![palette image](/examples/p5js/images/images/image-palette-10.gif)

# Remix Ideas

- Apply this filter to different images.
- Change the colors in the palette.
- Instead of going row by row, choose a different random pixel each frame.
