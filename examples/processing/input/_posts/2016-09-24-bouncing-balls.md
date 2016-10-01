---
layout: tutorial
title: "Bouncing Balls"
slug: bouncing-balls
thumbnail: /examples/processing/input/images/bouncing-balls-1.gif
tag: Make a random bouncing ball pit.
sort-key: 100
---

Note: This example uses [parallel arrays](https://en.wikipedia.org/wiki/Parallel_array). In other words, we're storing our data across multiple arrays. This is a good way to learn about arrays, but in real life you should use classes instead of parrallel arrays. If you haven't learned about classes yet, don't worry about it too much.

This program takes [the previous bouncing balls example](/examples/processing/arrays/bouncing-balls) and adds user input. Now a bouncing ball is added whenever the user clicks inside the window.

```java
float[] x = new float[0];
float[] y = new float[0];
float[] xSpeed = new float[0];
float[] ySpeed = new float[0];
float[] size = new float[0];
float[] r = new float[0];
float[] g = new float[0];
float[] b = new float[0];

void setup() {
  size(400, 200);
}

void draw() {

  background(200);

  for (int i = 0; i < x.length; i++) {

    x[i] += xSpeed[i];
    if (x[i] < 0 || x[i] > width) {
      xSpeed[i] *= -1;
    }

    y[i] += ySpeed[i];
    if (y[i] < 0 || y[i] > height) {
      ySpeed[i] *= -1;
    }

    fill(r[i], g[i], b[i]);
    ellipse(x[i], y[i], size[i], size[i]);
  }
}

void mousePressed() {
  x = append(x, mouseX);
  y = append(y, mouseY);
  xSpeed = append(xSpeed, random(-5, 5));
  ySpeed = append(ySpeed, random(-5, 5));
  size = append(size, random(5, 20));
  r = append(r, random(256));
  g = append(g, random(256));
  b = append(b, random(256));
}

```

This code uses the [`append()`](https://processing.org/reference/append_.html) function which takes an array and a new element, and returns a new array that contains everything the first array held, plus the new element. By setting our arrays equal to these new arrays, we're essentially adding new values to the arrays.

![bouncing balls](images/bouncing-balls-1.gif)

{% include codepen.html slug-hash="qaPXAA" height="275" %}

## Tweak Ideas

- What happens if you use the `mouseDragged()` function instead of the `mousePressed()` function?
- Make it so the direction of new balls is based on the direction the mouse is going when the user clicks.
