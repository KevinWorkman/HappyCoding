---
layout: tutorial
title: "Random Faces"
slug: random-faces
thumbnail: "/examples/processing/creating-functions/images/random-faces-1.gif"
tag: "Procedurally generate infinite smiley faces."
---

Working from [this simpler example](/examples/processing/creating-variables/random-face) that draws a single random face whenever the program runs, we can use functions to draw a new random face every second:

```java
void setup() {
  size(200, 200);
  frameRate(1);
}

void draw() {
  background(128);
  drawFace();
}

void drawFace() {
  //place face in middle of window
  float faceX = width/2;
  float faceY = height/2;

  //smallest face is half the window, biggest face is whole window
  float faceWidth = random(width/2, width);
  float faceHeight = random(height/2, height);

  //random face color
  fill(random(255), random(255), random(255));

  //draw the head
  ellipse(faceX, faceY, faceWidth, faceHeight);

  //random eye size
  float eyeWidth = random(faceWidth*.1, faceWidth*.25);
  float eyeHeight = random(faceHeight*.1, faceHeight*.25);

  //random eye position
  float spaceBetweenEyes = random(eyeWidth, eyeWidth*2);
  float leftEyeX = faceX - spaceBetweenEyes/2;
  float rightEyeX = faceX + spaceBetweenEyes/2;
  float eyeY = faceY - random(faceHeight*.1, faceHeight*.25);

  //white
  fill(255);

  //draw the eyes
  ellipse(leftEyeX, eyeY, eyeWidth, eyeHeight);
  ellipse(rightEyeX, eyeY, eyeWidth, eyeHeight);

  //random pupil size
  float pupilWidth = random(eyeWidth*.1, eyeWidth*.9);
  float pupilHeight = random(eyeHeight*.1, eyeHeight*.9);

  //black
  fill(0);

  //draw the pupils
  ellipse(leftEyeX, eyeY, pupilWidth, pupilHeight);
  ellipse(rightEyeX, eyeY, pupilWidth, pupilHeight);

  //random mouth size and Y
  float mouthWidth = random(faceWidth*.2, faceWidth*.8);
  float mouthHeight = random(faceHeight*.1, faceHeight*.3);
  float mouthY = faceY + random(faceHeight*.1, faceHeight*.25);

  //random mouth color
  fill(random(255), random(255), random(255));

  //draw the mouth
  arc(faceX, mouthY, mouthWidth, mouthHeight, 0, 3.14);
  line(faceX - mouthWidth/2, mouthY, faceX + mouthWidth/2, mouthY);
}

```

This code uses variables along with the `random()` function to procedurally generate random faces. Every time you run the program, you get a different face.

![random faces](/examples/processing/creating-functions/images/random-faces-1.gif)

{% include codepen.html slug-hash="rrGzLB" height="275" %}

## Tweak Ideas

- Randomly generate an entire crowd.
- Randomly generate an entire scene by creating functions that generate different objects: one that generates trees, one that generates buildings, etc.
