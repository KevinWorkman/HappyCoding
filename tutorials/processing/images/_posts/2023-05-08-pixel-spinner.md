---
layout: tutorial
title: Pixel Spinner
thumbnail: /tutorials/processing/images/images/pixel-spinner-1.png
tagline: Move pixels around the center.
meta-title: Pixel Spinner
meta-description: Use Processing to move pixels around the center of an image.
meta-image: /tutorials/processing/images/images/pixel-spinner-1.png
tags: [example, processing, images, glitch-art]
sort-key: 1340
previousPost: /tutorials/processing/images
---

{% include youtube-embed.html slug="9RaAckmYohE " %}

---

This code creates rectangular "lanes" around the center of an image, and then moves pixels around each lane. Lanes closer to the center are shorter than lanes on the outside of the image- think of how lanes in the center of a running track are shorter than lanes on the outside.

This means that even though every pixel travels at the same speed (one pixel per frame), pixels closer to the center revolve "faster", resulting in a cool spiral pattern.

```java

PImage image;

void setup() {
  size(1000, 750);
  noSmooth();
  image = loadImage("images/image-1.jpg");
  image.resize(image.width / 2, image.height / 2);
}

void draw() {
  image(image, 0, 0, width, height);

  rotateImage();
}

void rotateImage() {
  int layers = min(image.width, image.height) / 2;

  for (int layer = 0; layer < layers; layer++) {
    color prevColor = image.get(layer, layer);

    for (int column = layer + 1; column < image.width - layer; column++) {
      color nextColor = image.get(column, layer);
      image.set(column, layer, prevColor);
      prevColor = nextColor;
    }

    for (int row = layer + 1; row < image.height - layer; row++) {
      color nextColor = image.get(image.width - layer - 1, row);
      image.set(image.width - layer - 1, row, prevColor);
      prevColor = nextColor;
    }

    for (int column = image.width - layer - 2; column >= layer; column--) {
      color nextColor = image.get(column, image.height - layer - 1);
      image.set(column, image.height - layer - 1, prevColor);
      prevColor = nextColor;
    }

    for (int row = image.height - layer - 2; row >= layer; row--) {
      color nextColor = image.get(layer, row);
      image.set(layer, row, prevColor);
      prevColor = nextColor;
    }
  }
}
```

<video width="95%" controls muted loop>
  <source src="/tutorials/processing/images/images/pixel-spinner-2.mp4" type="video/mp4">
</video>

<video width="95%" controls muted loop>
  <source src="/tutorials/processing/images/images/pixel-spinner-3.mp4" type="video/mp4">
</video>

<video width="95%" controls muted loop>
  <source src="/tutorials/processing/images/images/pixel-spinner-4.mp4" type="video/mp4">
</video>

---

# Remix Ideas

- Use this code on your own images.
- Try resizing the image first for a pixelated effect.
- Spin each layer at a different speed- what would it look like if the outer lanes tried to keep up with the inner lanes?
- Reverse the direction of some of the lanes.
