---
layout: left-and-right-navs
title: Animation - Week 05
thumbnail: /tutorials/processing/images/animation-8.png
pixelate-thumbnail: true
tagline: Create animated visualizations.
sort-key: 140
meta-title: Animation - Intro to Web Dev Week 05
meta-description: Learn how to create animations in p5.js
meta-image: /tutorials/processing/images/animation-8.png
hide-video-icon: true
tags: [teaching]
---

# Animation - Week 05

{% include toc.md %}

Welcome to week 5 of Intro to Creative Web Dev!

Now you know how to call functions to draw shapes to the screen, and you know how to use variables to store information, and you know how to use `if` statements to make decisions in your code. This week you'll combine all of that to learn about creating animations.

Work through the activities in this page to complete the week!

---

# Animation

First, read through this tutorial:

{% include url-thumbnail.html url="/tutorials/p5js/animation" %}

---

# Project

Now you know how to create animations in p5.js.

To practice that, create a p5.js sketch that shows an animation.

{% include youtube-embed.html slug="BHqMTazKyMg" %}

Rather than requiring a minimum number of functions or variables, this week I'm specifically looking for any change to what's being drawn to the canvas over time. You can create an animation by changing variables over time, or by using the `random()` function to add randomness to your drawing.

---

For example:

```javascript
let ballY;
let ySpeed;

function setup() {
  createCanvas(400, 400);
  ballY = 200;
  ySpeed = 3;
}

function draw() {
  background(32);
  circle(width / 2, ballY, 50);

  ballY += ySpeed;
  if(ballY < 0 || ballY > height){
    ySpeed = ySpeed * -1;
  }
}
```

This code shows a circle that bounces up and down.

You can draw something that moves around on the screen like this, or can you use the `random()` function to create randomly generated drawings that fill the screen. I'm looking for any form of animation at all, so don't be afraid to get creative!
