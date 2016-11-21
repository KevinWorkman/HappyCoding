---
layout: tutorial
title: Bouncing Gradient
slug: bouncing-gradient
thumbnail: /examples/processing/for-loops/images/bouncing-gradient-1.png
tagline: Create a bouncing gradient.
meta-title: Bouncing Gradient
meta-description: This example uses nested for loops to create a bouncing gradient.
meta-image: /examples/processing/for-loops/images/bouncing-gradient-2.png
tags: [example, processing, for-loop]
sort-key:600
---

```java
float redX;
float redY;
float redXSpeed;
float redYSpeed;

float greenX;
float greenY;
float greenXSpeed;
float greenYSpeed;

float blueX;
float blueY;
float blueXSpeed;
float blueYSpeed;

void setup() {
  size(256, 256);
  noSmooth();

  redX = random(width);
  redY = random(height);
  redXSpeed = random(-1, 1);
  redYSpeed = random(-1, 1);

  greenX = random(width);
  greenY = random(height);
  greenXSpeed = random(-1, 1);
  greenYSpeed = random(-1, 1);

  blueX = random(width);
  blueY = random(height);
  blueXSpeed = random(-1, 1);
  blueYSpeed = random(-1, 1);
}

void draw() {

  redX += redXSpeed;
  redY += redYSpeed;
  if (redX < 0 || redX > width) {
    redXSpeed *= -1;
  }
  if (redY < 0 || redY > height) {
    redYSpeed *= -1;
  }

  greenX += greenXSpeed;
  greenY += greenYSpeed;
  if (greenX < 0 || greenX > width) {
    greenXSpeed *= -1;
  }
  if (greenY < 0 || greenY > height) {
    greenYSpeed *= -1;
  }

  blueX += blueXSpeed;
  blueY += blueYSpeed;
  if (blueX < 0 || blueX > width) {
    blueXSpeed *= -1;
  }
  if (blueY < 0 || blueY > height) {
    blueYSpeed *= -1;
  }

  for (int y = 0; y < height; y++) {
    for (int x = 0; x < width; x++) {
      float redDistance = dist(x, y, redX, redY);
      float greenDistance = dist(x, y, greenX, greenY);
      float blueDistance = dist(x, y, blueX, blueY);

      stroke(redDistance, greenDistance, blueDistance);
      point(x, y);
    }
  }
}
```

This code consists of two main parts: it has three points that bounce around the screen, and it uses nested `for` loops to loop over every pixel in the window. For each pixel, it creates a color based on that pixel's distance from the three bouncing points, and then draws the pixel in that color. This creates a gradient that transitions through different colors as the points bounce around.

![gradient](/examples/processing/for-loops/images/bouncing-gradient-3.png)

If this code seems complicated, focus on each part separately. The bouncing balls are covered [here](/tutorials/processing/animation), and the radial gradients are covered [here](/examples/processing/for-loops/radial-gradient).

![gradient](/examples/processing/for-loops/images/bouncing-gradient-4.png)

## Tweak Ideas
- Change how the points move around the screen. Make them move in random directions instead of straight lines, or make them turn in circles, or make them wrap around the screen instead of bouncing off the edges.
- Add two more points: a white light source and a black light source. They should feed into the existing parameters.