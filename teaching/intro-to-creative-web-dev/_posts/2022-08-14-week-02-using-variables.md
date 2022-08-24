---
layout: default
title: Using Variables - Week 02
thumbnail: /tutorials/processing/images/using-variables-7.png
pixelate-thumbnail: false
tagline: Learn how to get information from the computer.
sort-key: 110
meta-title: Using Variables - Intro to Web Dev Week 02
meta-description: Learn how to get information from the computer.
meta-image: /tutorials/processing/images/using-variables-7.png
hide-video-icon: true
tags: [teaching]
---

# Using Variables - Week 02

{% include toc.md %}

Welcome to week 2 of Intro to Creative Web Dev!

Now you know how to use p5.js to write code and call functions to draw on the screen.

This week, you'll learn how to use variables to get information from the computer.

Work through the activities in this page to complete the week!

---

# Using Variables

First, read through this tutorial:

{% include url-thumbnail.html url="/tutorials/p5js/using-variables" %}

---

# Quiz

Think about your answers to these questions:

1. In your own words, what is a variable?
2. What is the difference between a variable and a value?
3. What is an operator?
4. What do the `windowWidth` and `windowHeight` variables hold?

   *Note: These variables were not mentioned in any of this week's content. I'm testing that you can research and read about new p5.js variables you haven't seen before. Feel free to use a search engine and resources like the p5.js reference to answer this question.*
5. What do you do when your code has an error?
6. Where can you go if you have a question or want some help debugging?

---

# Project

Now you know how to use variables to get information from the computer.

To practice that, create a p5.js sketch that uses the `width` and `height` variables.

{% include youtube-embed.html slug="-c8JA7wCKrM" %}

---

Your sketch must run without any errors. Your sketch must contain at least **five** function calls that use the `width` and/or `height` variables. You can draw the same shape multiple times, and you can have more than 5 function calls. But I'll be looking for a minimum of 5.

For example:

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(width / 2, height / 2, width * .75, height * .75);
  rect(width * .25, height * .25, width * .5, height * .5);
}
```

This code contains two function calls that use the `width` and `height` variables: `ellipse()` and `rect()`. Note that the `createCanvas()` and `background()` functions don't use `width` or `height`, so I'm not counting those.

As you write your code, try changing the size of your canvas to make sure your sketch works with different widths and heights. Try these sizes:

- `createCanvas(400, 400);`
- `createCanvas(200, 400);`
- `createCanvas(400, 200);`
- `createCanvas(200, 200);`

It's okay if your drawing looks smooshed or distorted at different sizes. The important thing is that you're practicing using the `width` and `height` variables!
