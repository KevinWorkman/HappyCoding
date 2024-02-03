---
layout: post
title: Random Walkers
slug: random-walkers
thumbnail: /tutorials/processing/arraylists/images/random-walkers-1.gif
tagline: Randomly colored random walkers.
sort-key: 1220
meta-title: Random Walkers
meta-description: This example uses random walkers to create scribble art!
meta-image: /tutorials/processing/arraylists/images/random-walkers-3.png
tags: [example, processing, animation, arraylist, random-walker, generative-art, emergence]
previousPost: /tutorials/processing/arraylists
redirect_from: /examples/processing/arraylists/random-walkers
discourseEmbedUrl: /examples/processing/arraylists/random-walkers
---

This example takes [the previous Random Walker example](/examples/processing/input/random-walker.html) and uses an `ArrayList` instead of an array.

```java
ArrayList<RandomWalker> randomWalkers = new ArrayList<RandomWalker>();

void setup() {
  size(200, 200);

  background(200);

  noSmooth();
  frameRate(1000);
}

void draw() {
  for (RandomWalker rw : randomWalkers) {
    rw.step();
    rw.draw();
  }
}

void mouseDragged() {
  randomWalkers.add(new RandomWalker());
}

class RandomWalker {
  float x = mouseX;
  float y = mouseY;
  float r = random(256);
  float g = random(256);
  float b = random(256);

  void step() {

    x += random(-1, 1);
    y += random(-1, 1);

    if (x < 0) {
      x = width;
    }
    if (x > width) {
      x = 0;
    }

    if (y < 0) {
      y = height;
    }
    if (y > height) {
      y = 0;
    }
  }

  void draw() {
    stroke(r, g, b);
    point(x, y);
  }
}
```

![random walkers](images/random-walkers-2.gif)

{% include codepen.html slug-hash="vXZxYJ" height="275" %}

## Tweak Ideas

- Make it so the random walkers die when they exit the screen by removing them from the `ArrayList`.
- Make it so the random walkers die after a certain number of steps.
- Base the movement direction of each random walker off the direction the mouse is moving when the user clicks.
