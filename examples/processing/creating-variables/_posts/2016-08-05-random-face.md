---
layout: tutorial
title: Random Face
slug: random-face
thumbnail: /examples/processing/creating-variables/images/random-face-4.png
tagline: Procedurally generate a smiley face.
meta-title: Random Face
meta-description: This example uses variables to procedurally generate random faces.
meta-image: /tutorials/processing/creating-functions/images/random-faces-2.png
tags: [example, processing, procedural-generation]
sort-key: 310
---

```java
size(200, 200);

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
```

This code uses variables along with the `random()` function to procedurally generate random faces. Every time you run the program, you get a different face.

![random faces](/examples/processing/creating-variables/images/random-face-1.png)
![random faces](/examples/processing/creating-variables/images/random-face-2.png)
![random faces](/examples/processing/creating-variables/images/random-face-3.png)
![random faces](/examples/processing/creating-variables/images/random-face-4.png)

This code might seem complicated, but when writing a program like this, you only focus on one small part at a time.

- First, get a randomly sized circle showing up. Don't worry about anything else yet!
- Only when you get that working, then think about randomly coloring that circle.
- Then get two more randomly sized circles showing up for the eyes.
- Finally, focus on the mouth.

The point is, you don't write this entire program at one time. You focus on one small piece at a time.

{% include codepen.html slug-hash="WGkEwL" height="275" %}

## Tweak Ideas

- Randomly generate a flower, or a tree, or your favorite animal.
