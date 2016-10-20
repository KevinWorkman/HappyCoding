---
layout: tutorial
title: "Glowing Jack-o'-Lantern"
slug: glowing-jack-o-lantern
thumbnail: /examples/processing/creating-functions/images/glowing-jack-o-lantern-2.gif
tagline: "Make a glowing Jack-o'-lantern."
meta-title: Glowing Jack-o'-Lantern
meta-description: This example shows you how to make a glowing Jack-o'-lantern.
meta-image: /examples/processing/creating-functions/images/glowing-jack-o-lantern-3.png
tags: [example, processing, procedural-generation, 🎃]
---

This example builds off the [random Jack-o'-lantern example](/examples/processing/creating-variables/random-jack-o-lantern) and uses the `draw()` function to make it look like the Jack-o'-lantern contains a flickering candle.

```java
float leftEyeWidth;
float leftEyeHeight;
float leftEyeX;
float leftEyeY;
 
float rightEyeWidth;
float rightEyeHeight;
float rightEyeX;
float rightEyeY;
 
float mouthWidth;
float mouthHeight;
float mouthY;
 
float centerX;
 
void setup() {
 
  size(200, 200);
  
  background(64);
 
  centerX = width/2;
  float centerY = height/2;
 
  float jWidth = random(width/2, width*.75);
  float jHeight = random(height/2, height*.75);
 
  //stem
  stroke(0, random(50, 200), 0);
  strokeWeight(random(5, 15));
  line(centerX, centerY-jHeight/2, centerX + random(-jWidth*.25, jWidth*.25), centerY - jHeight*.75);
 
  //pumpkin
  strokeWeight(2);
  fill(random(200, 256), random(75, 125), 0);
  stroke(random(100, 140), random(40, 80), 0);
  ellipse(centerX, centerY, jWidth, jHeight);
  ellipse(centerX, centerY, jWidth*.75, jHeight);
  ellipse(centerX, centerY, jWidth*.5, jHeight);
  ellipse(centerX, centerY, jWidth*.25, jHeight);
 
  //generate left eye
  leftEyeWidth = random(jWidth*.1, jWidth*.35);
  leftEyeHeight = random(jHeight*.1, jHeight*.25);
  leftEyeX = ((centerX - jWidth/2) + centerX)/2;
  leftEyeY = centerY - jHeight*.1 - leftEyeHeight;
 
  //generate right eye
  rightEyeWidth = random(jWidth*.1, jWidth*.35);
  rightEyeHeight = random(jHeight*.1, jHeight*.25);
  rightEyeX = ((centerX + jWidth/2) + centerX)/2;
  rightEyeY = centerY - jHeight*.1 - leftEyeHeight;
 
  //generate mouth
  mouthWidth = random(jWidth*.1, jWidth*.8);
  mouthHeight = random(jHeight*.1, jHeight*.25);
  mouthY = centerY + random(jHeight*.1, jHeight*.35);
 
  frameRate(10);
}
 
void draw() {
 
  //get the glowing color
  float r = random(100, 255);
  float g = random(r);
  fill(r, g, 0);
 
  //draw eyes
  triangle(leftEyeX, leftEyeY, leftEyeX - leftEyeWidth/2, leftEyeY + leftEyeHeight, leftEyeX + leftEyeWidth/2, leftEyeY + leftEyeHeight);
  triangle(rightEyeX, rightEyeY, rightEyeX - rightEyeWidth/2, rightEyeY + rightEyeHeight, rightEyeX + rightEyeWidth/2, rightEyeY + rightEyeHeight);
 
  //draw mouth
  arc(centerX, mouthY, mouthWidth, mouthHeight, 3.14, 2*3.14);
  line(centerX-mouthWidth/2, mouthY, centerX + mouthWidth/2, mouthY);
}
```

{% include codepen.html slug-hash="bwONxm" height="275" %}

We've called `frameRate(10)`, so the `draw()` function is called `10` times per second. Each frame, we're generating a different red/orange/yellow color and then drawing the eyes and mouth with that color. This (hopefully) makes it look like the Jack-o'-lantern contains a flickering candle.

![glowing Jack-o'-lantern](/examples/processing/creating-functions/images/glowing-jack-o-lantern-1.gif)

## Tweak Ideas

- Tweak the values fed into the `random()` function to change the type of Jack-o'-lanterns you generate.
- Make the flickering more smoothly transition between colors.
- 
