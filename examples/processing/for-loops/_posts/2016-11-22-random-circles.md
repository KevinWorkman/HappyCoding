---
layout: tutorial
title: Random Circles
slug: random-circles
thumbnail: /examples/processing/for-loops/images/random-circles-1.png
tagline: Random circles fill up the screen.
meta-title: Random Circles
meta-description: This example uses a for loop to create cool-looking circles.
meta-image: /examples/processing/for-loops/images/random-circles-2.png
tags: [example, processing, for-loop, pretty]
sort-key: 760
---

```java
void setup() {
  size(500, 500); 
  background(64);
  noStroke();
}

void draw() {

  float size = random (25, 100);

  float x = random(width);
  float y = random(height);

  for (float ring = size; ring >= 0; ring -= random(2, 10)) {
    fill(random(256), random(256), random(256));
    ellipse(x, y, ring, ring);
  }
}

```

This code uses a `for` loop to create circles out of randomly colored rings. Every frame, a random size and location is generated, and then the `for` loop goes from `size` to `0`, decreasing by a random value between `2` and `10`. In other words, the loop starts at the outer-most ring, then decreases in size randomly until it's too small to see. This causes the circles to be drawn with randomly colored, randomly sized rings.

![random circles](/examples/processing/for-loops/images/random-circles-3.png)

Many `for` loops simply start at `0` and increase by `1` each loop iteration, but this example shows that you aren't limited to those values. You can start your loop at any value, stop at any value, and increase or decrease by any value. Just make sure your loop will eventually end!

![random circles](/examples/processing/for-loops/images/random-circles-4.png) ![random circles](/examples/processing/for-loops/images/random-circles-5.png) ![random circles](/examples/processing/for-loops/images/random-circles-6.png) ![random circles](/examples/processing/for-loops/images/random-circles-7.png) ![random circles](/examples/processing/for-loops/images/random-circles-8.png)

## Tweak Ideas
- Change the width and height of the sketch to match your screen resolution, then use the `saveFrame()` function to save a screenshot of your sketch. Use that image as your new background!
- Play around with the values passed into the `fill()` function to come up with cool-looking color combinations.
- You can use this type of `for` loop to create a radial gradient. Instead of randomly coloring the rings, make them fade to opaque.
