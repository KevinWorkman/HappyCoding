---
layout: left-and-right-navs
title: JavaScript Libraries - Week 11
thumbnail: /tutorials/javascript/images/libraries-1.png
pixelate-thumbnail: true
tagline: Use code written by other people.
sort-key: 1100
meta-title: JavaScript Libraries - Intro to Web Dev Week 13
meta-description: Use code written by other people.
meta-image: /tutorials/javascript/images/libraries-1.png
hide-video-icon: true
tags: [teaching, html, javascript]
---

# JavaScript Libraries - Week 11

{% include toc.md %}

Welcome to week 11 of Intro to Web Dev!

After the past few weeks, you now know how to write your own JavaScript. This week is about using JavaScript libraries, which let you use code written by other people!

Read through these two sections and then work through the project at the bottom to complete the week!

---

# Libraries

First, learn about JavaScript libraries:

{% include url-thumbnail.html url="/tutorials/javascript/libraries" %}

---

# p5.js Library

You started using p5.js in the first half of this class, and now you know that p5.js is a JavaScript library.

To see how it all fits together, navigate to the [p5.js editor](https://editor.p5js.org/) and then open the file explorer by clicking the `>` symbol near the upper-left corner, just under the play button.

You should see three files: `index.html`, `sketch.js`, and `style.css`. These are the same three files used in the Replit editor!

p5.js calls its JavaScript file `sketch.js` instead of `script.js`, but other than that it's the same exact kinds of files. Try clicking each one.

Find these three lines in the `index.html` file:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/addons/p5.sound.min.js"></script>
...
<script src="sketch.js"></script>
```

The first line of code loads the main p5.js library. The second line of code loads the p5.js sound library. We haven't used that in class, but it might be fun to play with! Then the third line loads the `sketch.js` file, which contains the code you write. The code you write calls functions that are defined in the p5.js library file!

Alternatively, go to [Replit](https://replit.com) and create a new `HTML, CSS, JS` Repl project. Add this line of code to your `index.html` file:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js">
```

This line of code loads the p5.js library into your page, which means you can now call p5.js functions from your code.

To test that out, add this code to your `script.js` file:

```
function setup(){
  createCanvas(300, 300);
}

function draw(){
  background(200);
  circle(mouseX, mouseY, 50);
}
```

When you run your project, you should see a p5.js sketch that shows a white circle on a gray background. In Replit!

---

# Project - HTML, CSS, JavaScript, and Libraries

Now you know how to use HTML, CSS, and JavaScript, including JavaScript libraries. You also know that p5.js is a JavaScript library, and that the Replit editor and the p5.js editor both work on the same kinds of files.

To practice all of that, you're going to create a project that contains a mix of HTML, CSS, and p5.js (which is a JavaScript library).

You can use **either** Replit **or** the p5.js editor!

Your project should contain at least **10** HTML tags, **10** CSS properties, and **10** p5.js function calls.

For example, this file contains 9 HTML tags:

**index.html**

```html
<!DOCTYPE html>
<html>

<head>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.6.0/p5.js"></script>
  <script src="script.js"></script>
</head>

<body>
  <h1>My Sketch</h1>
  <div id="sketch-holder"></div>
  <p class="description">Move your mouse to move the circle!</p>
</body>

</html>
```

This file calls 4 functions:

**script.js** (or `sketch.js`)

```javascript
function setup(){
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
}

function draw(){
  background(200);
  circle(mouseX, mouseY, 50);
}
```

And this file contains 5 CSS properties:

**style.css**

```css
h1 {
  color: red;
}

#sketch-holder {
  border: 2px solid black;
  width: 400px;
  height: 400px;
}

.description {
  font-size: 24px;
}
```

You can [view this project in Replit](https://replit.com/@KevinWorkman/p5js-in-Replit), or you can [view this project in the p5.js editor](https://editor.p5js.org/KevinWorkman/sketches/ocxodsAJR).

For full credit, you'd need to add a total of 10 HTML tags, 10 function calls, and 10 CSS properties.

What you do with your code is up to you. You could add HTML and CSS to a previous p5.js project, or you could add a p5.js sketch to a previous HTML or CSS project. Or you could create a brand new project from scratch!
