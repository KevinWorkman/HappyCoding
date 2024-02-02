---
layout: left-and-right-navs
title: If Statements - Week 10
thumbnail: /tutorials/javascript/images/if-statements-1.png
pixelate-thumbnail: true
tagline: Make decisions in your code.
sort-key: 1000
meta-title: If Statements - Intro to Web Dev Week 10
meta-description: Use JavaScript to make decisions in your code.
meta-image: /tutorials/javascript/images/if-statements-1.png
hide-video-icon: true
tags: [teaching, html, javascript]
---

# If Statements - Week 10

{% include toc.md %}

Welcome to week 10 of Intro to Web Dev!

Now you know how to use JavaScript to make your page interactive. This week is about using `if` statements in your JavaScript to make decisions in your code.

Read through the next section and then work through the project at the bottom to complete the week!

---

# If Statements

First, read through this tutorial:

{% include url-thumbnail.html url="/tutorials/javascript/if-statements" %}

If you were more comfortable in p5.js, you might also read this tutorial:

{% include url-thumbnail.html url="/tutorials/p5js/if-statements" %}

**Note:** I'm including the p5.js tutorial to help you familiarize yourself with `if` statement syntax, but this week's project will be in Replit!

# Project - Quiz

Now you know how to use `if` statements in your JavaScript code. To practice that, you're going to create an interactive quiz.

{% include youtube-embed.html slug="HcJ2Y17KLUg" %}

Your quiz can be funny, serious, or realistic. It can be about yourself, or a cause you care about, or something totally random. Make it your own!

Your code should contain at least **ten** `if`, `else if`, or `else` statements. You can have as many inputs in your HTML as you want: either a single input that checks for ten different cases, or ten inputs that each check a single case, or anything in between.

Modifying the CSS is optional, so make sure your JavaScript works first.

Write your code one small piece at a time. Don't try to get all 10 statements working at once! Write the code for a single case, and then test that single case in your browser. Check your browser's developer tools console for errors. When you have a single case working, then move on to a second case. Repeat that process until you have at least ten `if`, `else if`, or `else` statements.

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
  <p>What's my favorite food?</p>
  <input id="food-answer">
  <p id="food-result"></p>

  <p>What's the answer to life, the universe, and everything?</p>
  <input id="life-answer" type="number">
  <p id="life-result"></p>

  <br><br>
  <button onclick="submit();">Submit</button>
</body>

</html>
```

**script.js**

```javascript
function submit() {
  let foodAnswerElement = document.getElementById('food-answer');
  let food = foodAnswerElement.value;
  let foodResultElement = document.getElementById('food-result');

  if (food == 'Subway') {
    foodResultElement.innerText = "That's right!";
  } else if (food == 'ice cream') {
    foodResultElement.innerText =
      'Close, but my favorite food is a sandwich place.';
  } else {
    foodResultElement.innerText = 'Wrong, guess again!';
  }


  let lifeAnswerElement = document.getElementById('life-answer');
  let life = lifeAnswerElement.value;
  let lifeResultElement = document.getElementById('life-result');

  if (life == 42) {
    lifeResultElement.innerText = "That's right!";
  } else if (life < 42) {
    lifeResultElement.innerText = 'Try a higher number.';
  } else {
    lifeResultElement.innerText = 'Try a lower number.';
  }

}
```

![quiz webpage](/teaching/intro-to-web-dev-2022-fall/images/if-statements-1.png)

This HTML contains two input elements, and the JavaScript contains six `if`, `else if`, or `else` statements. For full credit, you'd need to add four more statements.
