---
layout: left-and-right-navs
title: If Statements - Week 04
thumbnail: /tutorials/javascript/images/if-statements-1.png
pixelate-thumbnail: true
tagline: Make decisions in your code.
sort-key: 130
meta-title: If Statements - Intro to Web Dev Week 04
meta-description: Make decisions in your code.
meta-image: /tutorials/javascript/images/if-statements-1.png
hide-video-icon: true
tags: [teaching]
---

# If Statements - Week 04

{% include toc.md %}

Welcome to week 4 of Intro to Creative Web Dev!

Now you know how to create your own variables. This week you'll learn about `if` statements, which let you make decisions in your code.

Work through the activities in this page to complete the week!

---

# If Statements

First, read through this tutorial:

{% include url-thumbnail.html url="/tutorials/p5js/if-statements" %}

---

# Project

Now you know how to use `if` statements to make decisions in your code.

To practice that, create a p5.js sketch that contains at least **five** `if`, `else if`, or `else` statements.

Try using the `month()` and `day()` functions to draw different things based on the current date, or the `hour()` and `minute()` functions to draw different things based on the current time.

---

Your sketch must run without any errors. Your sketch must contain at least **five** `if`, `else if`, or `else` statements.

For example:

```javascript
function setup() {
  createCanvas(400, 400);
  textAlign(CENTER);
  textSize(36);
}

function draw() {
  background(220);

  let currentSecond = second();

  if(currentSecond == 0) {
    text('New minute!', width / 2, height / 2);
  } else if(currentSecond == 30) {
    text('Halfway there!', width / 2, height / 2 );
  } else {
    text(currentSecond, width / 2, height / 2);
  }
}
```

{% include youtube-embed.html slug="BmFcjcUOZzk" %}

This code contains an `if` statement, an `else if` statement, and an `else` statement that draws different things based on the seconds in the current time. That's 3 out of the 5 required statements.

Get your code working with hard-coded variables first. Test that your `if`, `else if`, and `else` statements work with different values for your variables. When you get that working, set your variables based on the date or time functions.
