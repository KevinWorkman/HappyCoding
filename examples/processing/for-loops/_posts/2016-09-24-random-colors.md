---
layout: tutorial
title: Random Colors
slug: random-colors
thumbnail: /examples/processing/for-loops/images/random-colors-1.png
tagline: Make every pixel a different color.
meta-title: Random Colors
meta-description: This example uses nested for loops to make every pixel a random color.
meta-image: /examples/processing/for-loops/images/random-colors-2.png
tags: [example, processing, for-loop]
sort-key: 710
---

```java
void setup() {
  size(200, 100);
  noSmooth();
}

void draw() {
  for(int y = 0; y < height; y++){
    for(int x = 0; x < width; x++){
      float r = random(256);
      float g = random(256);
      float b = random(256);
      stroke(r, g, b);
      point(x, y);
    }
  }
}
```

This code uses a nested `for` loop to loop over every pixel in the window. For each pixel, it creates a random color and draws a point with that color at that pixel.

![random colors](/examples/processing/for-loops/images/random-colors-1.png)

{% include codepen.html slug-hash="ALQopv" height="175" %}

## Tweak Ideas

- Instead of drawing a random color, use the [`noise()`](https://processing.org/reference/noise_.html) function to come up with a shade of gray for each pixel. Read more about [Perlin noise](https://en.wikipedia.org/wiki/Perlin_noise) for more info.
- Take a big number like [pi](http://www.piday.org/million/) or [Euler's number](https://en.wikipedia.org/wiki/E_(mathematical_constant)). Visualize that number by going through the first 100 (or 1000, or 1,000,000) digits. For each digit, draw a pixel with a color based on that digit. For example if the digit is 0 draw a red pixel, if it's 1 draw a green pixel, etc.
