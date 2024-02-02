---
layout: left-and-right-navs
title: Creating Variables - Week 07
thumbnail: /tutorials/processing/images/creating-functions-7.png
pixelate-thumbnail: false
tagline: Store information and make p5.js do math for you.
sort-key: 700
meta-title: Creating Variables - Intro to Web Dev Week 07
meta-description: Store information and make p5.js do math for you.
meta-image: /tutorials/processing/images/creating-functions-7.png
hide-video-icon: true
tags: [teaching]
---

# Creating Variables - Week 07

{% include toc.md %}

Welcome to week 7 of Intro to Web Dev!

Now you know how to use p5.js to write code and call functions to draw on the screen, and you know how to use variables like `width` and `height`. (And if you were feeling spicy last week, you also learned about user input with variables like `mouseX` and `mouseY`!)

This week, you'll learn how to create your own variables to store information.

Work through the activities in this page to complete the week!

---

# Creating Variables

First, read through this tutorial to learn about creating your own variables:

{% include url-thumbnail.html url="/tutorials/p5js/creating-variables" %}

## Optional Extra Spicy Bonus Content 🔥

This section is not required!! But if you're comfortable with the idea of creating your own variables, and you want to take it to the next level, read this to learn about using your variables to create animations:

{% include url-thumbnail.html url="/tutorials/p5js/animation" %}

---

# Project

Now you know how to create your own variables. You've also seen a little bit of randomness!

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

This code creates **6** variables that it uses to draw a circle on the midpoint of a random line. (So for full credit, you'd need to add 4 more.) Using randomness is optional! The important piece is that you're practicing using variables by creating and using **10** variables.

If you want an **extra spicy bonus challenge**, try adding animation to your sketch!
