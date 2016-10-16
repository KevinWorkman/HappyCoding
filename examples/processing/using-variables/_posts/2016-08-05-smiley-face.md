---
layout: tutorial
title: Smiley Face
slug: smiley-face
thumbnail: /examples/processing/using-variables/images/smiley-face-2.png
tagline: Scale a smiley face.
meta-title: Smiley Face
meta-description: This example uses variables to scale a drawing of a face.
meta-image: /examples/processing/creating-functions/images/random-faces-2.png
---

```java
size(200, 200);

//green
fill(0, 255, 0);

//draw the head
ellipse(width*.5, height*.5, width*.75, height*.75);

//white
fill(255);

//draw the eyes
ellipse(width*.375, height*.425, width*.15, height*.1);
ellipse(width*.625, height*.425, width*.15, height*.1);

//black
fill(0);

//draw the pupils
ellipse(width*.375, height*.425, width*.05, height*.05);
ellipse(width*.625, height*.425, width*.05, height*.05);

//red
fill(255, 0, 0);

//draw the mouth
arc(width*.5, height*.625, width*.4, height*.25, 0, 3.14);
line(width*.3, height*.625, width*.7, height*.625);
```

This code uses the `width` and `height` variables to draw a smiley face that changes size depending on the size of the window.

![smiley face](/examples/processing/using-variables/images/smiley-face-1.png)

If we change the first line of our code to `size(400, 200)`, then we get a wider smiley face:

![wider smiley face](/examples/processing/using-variables/images/smiley-face-2.png)

If we change the first line of our code to `size(150, 300)`, then we get a taller smiler face:

![taller smiley face](/examples/processing/using-variables/images/smiley-face-3.png);

## Finding the Right Numbers

Look at these two lines from [the smiley face example that didn't use variables](/examples/processing/calling-functions/smiley-face):

```java
ellipse(75, 85, 30, 20);
ellipse(125, 85, 30, 20);
```

This code draws the whites of the eyes. How did we use that to figure out what numbers to use in these lines of code that use the `width` and `height` variables?

```java
ellipse(width*.375, height*.425, width*.15, height*.1);
ellipse(width*.625, height*.425, width*.15, height*.1);
```

Keep in mind that our original window had a `width` and a `height` of `200`. Then we look at the numbers one at a time: the left eye has an `x` position of `75`. What can we multiply `200` by to get `75`? We figure that out by dividing `75` by `200`, and we get `.375`. We know that `200*.375` is `75`, so we know that `width*.375` will give us the `x` position of the left eye no matter what the value of `width` is.

We repeat that process for every number we want to scale. That might seem like an annoying process, but it becomes more automatic with practice.

{% include codepen.html slug-hash="YGAxqx" height="275" %}

## Tweak Ideas

- Change the color of the face based on the size of the window. Make wider faces more red, taller faces more blue.
- Change the expression of the face based on the size of the window. Wider windows make the face angry, taller windows make the window sad, etc.
- Make it so the face is always a circle, but grows with the window. In other words, try to maintain the [aspect ratio](https://en.wikipedia.org/wiki/Aspect_ratio_(image)) of the face.
