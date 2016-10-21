---
layout: tutorial
title: Pumpkin Patch
slug: pumpkin-patch
thumbnail: /examples/processing/input/images/pumpkin-patch-2.gif
tagline: Click to add a pumpkin to the patch.
sort-key: 300
meta-title: Pumpkin Patch
meta-description: This example detects user input to grow a pumpkin patch! 🎃
meta-image: /examples/processing/input/images/pumpkin-patch-3.png
tags: [example, processing, input, 🎃]
---

This code takes user input to add a pumpkin to the pumpkin patch whenever the user clicks the mouse.

```java
float previousX;
float previousY;
float previousHeight;

void setup() {
  size(400, 300);
  background(64);
}

void draw() {
  //needed for mousePressed() to work
}

void mousePressed() {

  //create next pumpkin
  float nextX = mouseX;
  float nextY = mouseY;
  float nextWidth = random(50, 100);
  float nextHeight = random(25, 75);

  //draw next pumpkin
  strokeWeight(2);
  fill(random(200, 256), random(75, 125), 0);
  stroke(random(100, 140), random(40, 80), 0);
  ellipse(nextX, nextY, nextWidth, nextHeight);
  ellipse(nextX, nextY, nextWidth*.75, nextHeight);
  ellipse(nextX, nextY, nextWidth*.5, nextHeight);
  ellipse(nextX, nextY, nextWidth*.25, nextHeight);

  //connect next pumpkin to previous pumpkin
  noFill();
  stroke(0, random(50, 200), 0, 100);
  strokeWeight(random(5, 15));

  bezier(previousX, previousY - previousHeight/2, 
    previousX + random(-100, 100), previousY - previousHeight*2, 
    nextX + random(-100, 100), nextY - nextHeight*2, 
    nextX, nextY - nextHeight/2);

  //set the previous pumpkin to the next pumpkin
  previousX = nextX;
  previousY = nextY;
  previousHeight = nextHeight;
}
```

![pumpkin patch](/examples/processing/input/images/pumpkin-patch-1.gif)

{% include codepen.html slug-hash="kkzpzg" height="375" %}

This code uses the `bezier()` function to draw curves that connect the pumpkins like vines. The `bezier()` function takes 8 parameters representing 4 points, which form a curve using the pattern in this image:

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Bezier_curve.svg/800px-Bezier_curve.svg.png" style="width:200px" />

You can read more about the `bezier()` function in [the reference](https://processing.org/reference/bezier_.html).
    
## Tweak Ideas

- Add leaves to the vines.
- Make the pumpkins grow over time.
- Click to plant a vine. Make the vine automatically grow and have pumpkins sprout.
