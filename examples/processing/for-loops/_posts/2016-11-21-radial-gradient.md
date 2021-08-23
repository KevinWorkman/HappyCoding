---
layout: tutorial
title: Radial Gradient
slug: radial-gradient
thumbnail: /examples/processing/for-loops/images/radial-gradient-1.png
tagline: Create a radial gradient.
meta-title: Radial Gradient
meta-description: This example uses nested for loops to create a radial gradient.
meta-image: /examples/processing/for-loops/images/radial-gradient-2.png
tags: [example, processing, for-loop]
sort-key: 750
---

```java
void setup() {
  size(256, 256);
  noSmooth();
}

void draw() {
  for(int y = 0; y < height; y++){
    for(int x = 0; x < width; x++){
      float distanceFromCenter = dist(x, y, width/2, height/2);
      stroke(distanceFromCenter);
      point(x, y);
    }
  }
}
```

{% include codepen.html slug-hash="dOvKwq" height="331" %}

This code uses a nested `for` loop to loop over every pixel in the window. For each pixel, it creates a color based on that pixel's distance from the center, and draws the pixel in that color. This creates a [radial color gradient](https://en.wikipedia.org/wiki/Color_gradient#Radial_gradients).

![gradient](/examples/processing/for-loops/images/radial-gradient-3.png)

All of the magic happens on these two lines:

```java
float distanceFromCenter = dist(x, y, width/2, height/2);
stroke(distanceFromCenter);
```

This code uses the `dist()` function to get the distance between each pixel and the center of the window. It then passes that distance into the `stroke()` function, which sets a grayscale color. The center of the window will have a distance of `0`, which causes it to be drawn in black. The edges of the window have a higher distance, so they're drawn in lighter shades. Pixels between the center and the edges are drawn in a color that scales with the distance, which creates a radial gradient.

Try playing with the parameters passed into the `stroke()` function. Subtracting the distance from `255` will invert the colors:

```java
stroke(255-distanceFromCenter);
```

![gradient](/examples/processing/for-loops/images/radial-gradient-4.png)

And don't be afraid to experiment with colors by adding parameters and multiplying the distance by a scalar:

```java
stroke(255-2*distanceFromCenter, 0, 100);
```

![gradient](/examples/processing/for-loops/images/radial-gradient-5.png)

![gradient](/examples/processing/for-loops/images/radial-gradient-6.png) ![gradient](/examples/processing/for-loops/images/radial-gradient-7.png) ![gradient](/examples/processing/for-loops/images/radial-gradient-8.png)


## Tweak Ideas
- Another way to create a radial gradient is by drawing circles (from the outside in) with different colors. Try doing it that way.
- Radial gradients can be used to draw lights. Create a sketch that draws stars, or the sun, or a city skyline at night, or fireflies.
- Pass in a random number as one of the parameters to the `stroke()` function.
