---
layout: default
title: JavaScript - Week 11
thumbnail: /tutorials/javascript/images/js-1.png
pixelate-thumbnail: true
tagline: Use JavaScript to make your page interactive.
sort-key: 190
meta-title: JavaScript - Intro to Web Dev Week 11
meta-description: Use JavaScript to make your page interactive.
meta-image: /tutorials/javascript/images/calling-javascript-3.png
hide-video-icon: true
tags: [teaching, html, javascript]
---

# JavaScript - Week 11

{% include toc.md %}

Welcome to week 11 of Intro to Creative Web Dev!

Now you know how to use HTML to create webpage content, and you know how to use CSS to style that content. This week is all about JavaScript, which makes your webpages interactive.

Since you already know p5.js, a lot of JavaScript's syntax will be familiar, since behind the scenes, p5.js is JavaScript!

Work through the activities in this page to complete the week!

---

# JavaScript

First, read through this tutorial:

{% include url-thumbnail.html url="/tutorials/javascript/from-p5-to-javascript" %}

# Project - Mad Libs

Now you know how to make your page interactive using JavaScript. To practice that, you're going to create an interactive [mad libs game](https://en.wikipedia.org/wiki/Mad_Libs).

The game can be funny, serious, or realistic. You can tell an original story, or you can recreate a scene from your favorite book, movie, or TV show. Make it your own!

Your `index.html` file should contain at least **5 input elements** asking the user for words, and your `script.js` file should contain JavaScript code that inserts those words into a story.

Modifying the CSS is optional, so make sure your JavaScript works first.

Write your code one small piece at a time. Don't try to get all 5 words working at once! Write the code for a single word, and then test that single word in your browser. Check your browser's developer tools console for errors. When you have a single word working, then move on to a second word. Repeat that process until you have enough words to tell your story.

For example:

**index.html**

```html
<!DOCTYPE html>
<html>

<head>
  <script src="script.js"></script>
  <link href="style.css" rel="stylesheet" type="text/css" />
</head>

<body>
  <p>Give me an adjective:</p>
  <input id="adjectiveInput">

  <p>Give me a color:</p>
  <input id="colorInput">

  <br><br>
  <button onclick="submit();">Okay!</button>

  <p>
    The
    <span id="adjectiveOutput">quick</span>
    <span id="colorOutput">brown</span>
    fox jumps over the lazy dog!
  </p>

</body>

</html>
```

**script.js**

```javascript
function submit() {
  let adjectiveInputElement = document.getElementById('adjectiveInput');
  let adjective = adjectiveInputElement.value;

  let adjectiveOutputElement = document.getElementById('adjectiveOutput');
  adjectiveOutputElement.innerText = adjective;

    let colorInputElement = document.getElementById('colorInput');
  let color = colorInputElement.value;

  let colorOutputElement = document.getElementById('colorOutput');
  colorOutputElement.innerText = color;
}
```

![mad libs game](/teaching/intro-to-creative-web-dev/images/javascript-1.png)
