---
layout: default
title: Using Variables - Week 06
thumbnail: /tutorials/processing/images/using-variables-7.png
pixelate-thumbnail: false
tagline: Learn how to get information from the computer.
sort-key: 600
meta-title: Using Variables - Intro to Web Dev Week 06
meta-description: Learn how to get information from the computer.
meta-image: /tutorials/processing/images/using-variables-7.png
hide-video-icon: true
tags: [teaching]
---

# Using Variables - Week 06

{% include toc.md %}

Welcome to week 6 of Intro to Web Dev!

Now you know how to use p5.js to write code and call functions to draw on the screen.

This week, you'll learn how to use variables to get information from the computer.

Work through the activities in this page to complete the week!

---

# Using Variables

First, read through this tutorial:

{% include url-thumbnail.html url="/tutorials/p5js/using-variables" %}

---

# Project

Now you know how to use variables to get information from the computer.

To practice that, create a p5.js sketch that uses the `width` and `height` variables.

{% include youtube-embed.html slug="-c8JA7wCKrM" %}

---

Your sketch must run without any errors. Your sketch must contain at least **five** function calls that use the `width` and/or `height` variables. You can draw the same shape multiple times, and you can have more than 5 function calls. But I'll be looking for a minimum of 5.

**Note:** You can also use other variables like `mouseX` and `mouseY` if you want! I'll be looking for any five function calls that use any variables as their arguments.

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
