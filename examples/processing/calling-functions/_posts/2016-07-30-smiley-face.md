---
layout: tutorial
title: "Smiley Face"
slug: smiley-face
thumbnail: "/examples/processing/calling-functions/images/smiley-face-1.png"
tag: "Draw a smiley face."
categories: [examples,processing,calling-functions]
---

```java
size(200, 200);

//green
fill(0, 255, 0);

//draw the head
ellipse(100, 100, 150, 150);

//white
fill(255);

//draw the eyes
ellipse(75, 85, 30, 20);
ellipse(125, 85, 30, 20);

//black
fill(0);

//draw the pupils
ellipse(75, 85, 10, 10);
ellipse(125, 85, 10, 10);

//red
fill(255, 0, 0);

//draw the mouth
arc(100, 125, 80, 50, 0, 3.14);
line(60, 125, 140, 125);
```

This code calls a series of functions do draw a smiley face:

![smiley face](/examples/processing/calling-functions/images/smiley-face-1.png)

The `arc()` function takes 6 parameters: the first 4 parameters define an ellipse, and the last 2 parameters specify a limit (in [radians](https://en.wikipedia.org/wiki/Radian)) that causes the computer to only draw part of the ellipse. In radians, `0` is the right-most point of the ellipse, and `pi` (we're using `3.14` which is close enough) is the left-most point of the ellipse. That lets us draw only half the ellipse for the mouth.

{% include codepen.html slug-hash="LRzjYb" height="275" %}

## Tweak Ideas

- Change the face to a frown face :frowning:
- Don't stop there! Can you make it look sad? :crying_cat_face: Angry? :pouting_cat: Scared? :scream_cat: In love? :heart_eyes_cat:
- Add ears, hair, a nose, maybe even a body.
- Try to draw yourself, one of your friends, or your favorite characters.
