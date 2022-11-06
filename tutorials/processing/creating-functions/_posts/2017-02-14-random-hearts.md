---
layout: tutorial
title: Random Hearts
thumbnail: /tutorials/processing/creating-functions/images/random-hearts-1.png
tagline: Draw random hearts. ❤
sort-key: 440
meta-title: Random Hearts
meta-description: Use Processing to draw random hearts! ❤
meta-image: /tutorials/processing/creating-functions/images/random-hearts-2.png
tags: [example, processing, ❤]
previousPost: /tutorials/processing/creating-functions
redirect_from: /examples/processing/creating-functions/random-hearts
discourseEmbedUrl: /examples/processing/creating-functions/random-hearts
---

:heart: ❤ :heart:

This program takes the [scaling heart example](/examples/processing/using-variables/scaling-heart) and modifies that code to draw random hearts all over the screen:

```java
void setup() {
  size(300, 300);
  background(64);
}

void draw() {

  float heartSize = random(10, 100);
  float heartX = random(width);
  float heartBottomY = random(height+heartSize);

  float r = random(255);

  fill(r, 0, 0);
  stroke(r, 0, 0);

  //fill in line that sometimes appears between halves
  line(heartX, heartBottomY, heartX, heartBottomY-heartSize*.75);

  //dark hearts have light outlines and vice versa
  stroke(255-r);

  //left half of heart
  beginShape();
  curveVertex(heartX, heartBottomY+heartSize); //anchor point
  curveVertex(heartX, heartBottomY); //bottom tip
  curveVertex(heartX - heartSize/2, heartBottomY-heartSize/1.5); //left edge
  curveVertex(heartX - heartSize/3, heartBottomY-heartSize); //top of left edge
  curveVertex(heartX, heartBottomY-heartSize*.75); //top middle dip
  curveVertex(heartX, heartBottomY); //guiding point
  endShape();

  //right half of heart
  beginShape();
  curveVertex(heartX, heartBottomY);
  curveVertex(heartX, heartBottomY-heartSize*.75);
  curveVertex(heartX + heartSize/3, heartBottomY-heartSize);
  curveVertex(heartX + heartSize/2, heartBottomY-heartSize/1.5);
  curveVertex(heartX, heartBottomY);
  curveVertex(heartX, heartBottomY + heartSize);
  endShape();
}
```

This code modifies the heart drawing logic: instead of always drawing in the center of the screen, the location of the heart is determined by the `heartX` and `heartBottomY` variables. Instead of using the `width` and `height` variables, the size of the heart is determined by the `heartSize` variable. Try feeding in different hard-coded values to those variables to see what they do.

From there, it's just a matter of putting the code inside the `draw()` function so it's called 60 times per second, and then choosing random values for the above variables. Now we get random hearts!

![random hearts](/tutorials/processing/creating-functions/images/random-hearts-3.png)

{% include codepen.html slug-hash="apMZjW" height="375" %}

## Tweak Ideas

- Change the color of the heart. Make it a random color!
- Add somebody's name to the middle of the heart. Send them a nerdy Valentine!

![random hearts](/tutorials/processing/creating-functions/images/random-hearts-4.png)
![random hearts](/tutorials/processing/creating-functions/images/random-hearts-5.png)
![random hearts](/tutorials/processing/creating-functions/images/random-hearts-6.png)
