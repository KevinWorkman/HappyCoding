---
layout: default
title: Creating Variables - Week 03
thumbnail: /tutorials/processing/images/creating-functions-7.png
pixelate-thumbnail: false
tagline: Store information and make p5.js do math for you.
sort-key: 120
meta-title: Creating Variables - Intro to Web Dev Week 03
meta-description: Store information and make p5.js do math for you.
meta-image: /tutorials/processing/images/creating-functions-7.png
hide-video-icon: true
tags: [teaching]
---

# Creating Variables - Week 03

{% include toc.md %}

Welcome to week 3 of Intro to Creative Web Dev!

Now you know how to use p5.js to write code and call functions to draw on the screen, and you know how to use variables like `width` and `height.`

This week, you'll learn how to create your own variables and make p5.js do math for you.

Work through the activities in this page to complete the week!

---

# Creating Variables

First, read through this tutorial:

{% include url-thumbnail.html url="/tutorials/p5js/creating-variables" %}

---

# Project

Now you know how to create your own variables and how to make p5.js do math for you. You've also seen a little bit of randomness!

To practice that, create a p5.js sketch that creates your own variables.

---

If it helps, here are a couple code-alongs for how I would approach the project:

This code-along creates a sketch from an abstract shape:

{% include youtube-embed.html slug="kOsUMiuDo6g" %}

This code-along creates a sketch from randomly generated cats:

{% include youtube-embed.html slug="R9UJCuFFsRw" %}

---

Your sketch must run without any errors. Your sketch must contain at least **ten** variables that you create using the `let` keyword and then use either as function parameters or to calculate the value of another variable.

For example:

```javascript
function setup() {
  createCanvas(400, 400);
  frameRate(1);
}

function draw() {
  background(220);

  let pointOneX = random(width);
  let pointOneY = random(height);
  let pointTwoX = random(width);
  let pointTwoY = random(height);
  let midPointX = (pointOneX + pointTwoX) / 2;
  let midPointY = (pointOneY + pointTwoY) / 2;

  line(pointOneX, pointOneY, pointTwoX, pointTwoY);
  circle(midPointX, midPointY, 25);
}
```

This code creates 6 variables that it uses to draw a circle on the midpoint of a random line. Using randomness is optional! The important piece is that you're practicing using variables by creating and using 10 variables.
