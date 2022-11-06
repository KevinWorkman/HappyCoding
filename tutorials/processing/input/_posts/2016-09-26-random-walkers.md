---
layout: tutorial
title: Random Walkers
slug: random-walkers
thumbnail: /tutorials/processing/input/images/random-walkers-2.gif
tagline: Randomly colored random walkers.
sort-key: 920
meta-title: Random Walkers
meta-description: This example detects user input to create scribble art!
meta-image: /tutorials/processing/arraylists/images/random-walkers-3.png
tags: [example, processing, generative-art, random-walker, emergence]
previousPost: /tutorials/processing/input
redirect_from: /examples/processing/input/random-walkers
discourseEmbedUrl: /examples/processing/input/random-walkers
---

Note: This example uses [parallel arrays](https://en.wikipedia.org/wiki/Parallel_array). In other words, we're storing our data across multiple arrays. This is a good way to learn about arrays, but in real life you should use classes instead of parrallel arrays. If you haven't learned about classes yet, don't worry about it too much.

This example takes [the previous Random Walker example](/examples/processing/arrays/random-walker.html) and uses the `mousePressed()` function to add a new random walker whenever the user clicks.

```java
float[] x = new float[0];
float[] y = new float[0];
float[] r = new float[0];
float[] g = new float[0];
float[] b = new float[0];

void setup() {
  size(200, 200);

  background(200);

  noSmooth();
  frameRate(1000);
}

void draw() {
  for (int i = 0; i < x.length; i++) {
    x[i] += random(-1, 1);
    y[i] += random(-1, 1);

    if (x[i] < 0) {
      x[i] = width;
    }
    if (x[i] > width) {
      x[i] = 0;
    }

    if (y[i] < 0) {
      y[i] = height;
    }
    if (y[i] > height) {
      y[i] = 0;
    }

    stroke(r[i], g[i], b[i]);
    point(x[i], y[i]);
  }
}

void mousePressed() {
  x = append(x, mouseX);
  y = append(y, mouseY);
  r = append(r, random(256));
  g = append(g, random(256));
  b = append(b, random(256));
}

```

This code uses the [`append()`](https://processing.org/reference/append_.html) function which takes an array and a new element, and returns a new array that contains everything the first array held, plus the new element. By setting our arrays equal to these new arrays, we're essentially adding new values to the arrays.

![random walkers](images/random-walkers-1.gif)

{% include codepen.html slug-hash="GjrvWd" height="275" %}

## Tweak Ideas

- What happens if you use the `mouseDragged()` function instead of the `mousePressed()` function?
- Instead of completely random colors, choose random colors from a range: orange and black, or different shades of red, etc.
- Base the movement direction of each random walker off the direction the mouse is moving when the user clicks.
