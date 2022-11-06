---
layout: tutorial
title: "Random Jack-o'-Lantern"
slug: random-jack-o-lantern
thumbnail: /tutorials/processing/creating-variables/images/random-jack-o-lantern-1.png
tagline: "Procedurally generate a Jack-o'-lantern."
meta-title: Random Jack-o'-Lantern
meta-description: Procedurally generate a Jack-o'-lantern.
meta-image: /tutorials/processing/creating-variables/images/random-jack-o-lantern-2.png
tags: [example, processing, procedural-generation, 🎃]
sort-key: 320
previousPost: /tutorials/processing/creating-variables
redirect_from: /examples/processing/creating-variables/random-jack-o-lantern
discourseEmbedUrl: /examples/processing/creating-variables/random-jack-o-lantern
---

```java

size(200, 200);

float centerX = width/2;
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
float leftEyeWidth = random(jWidth*.1, jWidth*.35);
float leftEyeHeight = random(jHeight*.1, jHeight*.25);
float leftEyeX = ((centerX - jWidth/2) + centerX)/2;
float leftEyeY = centerY - jHeight*.1 - leftEyeHeight;

//generate right eye
float rightEyeWidth = random(jWidth*.1, jWidth*.35);
float rightEyeHeight = random(jHeight*.1, jHeight*.25);
float rightEyeX = ((centerX + jWidth/2) + centerX)/2;
float rightEyeY = centerY - jHeight*.1 - leftEyeHeight;

//draw eyes
fill(0);
triangle(leftEyeX, leftEyeY, leftEyeX - leftEyeWidth/2, leftEyeY + leftEyeHeight, leftEyeX + leftEyeWidth/2, leftEyeY + leftEyeHeight);
triangle(rightEyeX, rightEyeY, rightEyeX - rightEyeWidth/2, rightEyeY + rightEyeHeight, rightEyeX + rightEyeWidth/2, rightEyeY + rightEyeHeight);

//generate mouth
float mouthWidth = random(jWidth*.1, jWidth*.8);
float mouthHeight = random(jHeight*.1, jHeight*.25);
float mouthY = centerY + random(jHeight*.1, jHeight*.35);

//draw mouth
arc(centerX, mouthY, mouthWidth, mouthHeight, 3.14, 2*3.14);
line(centerX-mouthWidth/2, mouthY, centerX + mouthWidth/2, mouthY);
```

{% include codepen.html slug-hash="KgBVgV" height="275" %}

This code uses variables along with the `random()` function to procedurally generate random Jack-o'-lanterns. Every time you run the program, you get a different Jack-o'-lantern.

![random Jack-o'-lantern](/tutorials/processing/creating-variables/images/random-jack-o-lantern-3.png) ![random Jack-o'-lantern](/tutorials/processing/creating-variables/images/random-jack-o-lantern-4.png) ![random Jack-o'-lantern](/tutorials/processing/creating-variables/images/random-jack-o-lantern-5.png) ![random Jack-o'-lantern](/tutorials/processing/creating-variables/images/random-jack-o-lantern-6.png) ![random Jack-o'-lantern](/tutorials/processing/creating-variables/images/random-jack-o-lantern-7.png)

![random Jack-o'-lantern](/tutorials/processing/creating-variables/images/random-jack-o-lantern-2.png)

## Tweak Ideas

- Tweak the values fed into the `random()` function to change the type of Jack-o'-lanterns you generate.
- Create a procedural generator that generates a flower, or a tree, or your favorite animal.
