---
layout: default
title: If Statements in JavaScript - Week 12
thumbnail: /tutorials/javascript/images/if-statements-1.png
pixelate-thumbnail: true
tagline: Make decisions in your JavaScript code.
sort-key: 190
meta-title: JavaScript - Intro to Web Dev Week 12
meta-description: Use JavaScript to make decisions in your code.
meta-image: /tutorials/javascript/images/if-statements-1.png
hide-video-icon: true
tags: [teaching, html, javascript]
---

# JavaScript If Statements - Week 12

{% include toc.md %}

Welcome to week 12 of Intro to Creative Web Dev!

Now you know how to use JavaScript to make your page interactive. This week is about using `if` statements in your JavaScript to make decisions in your code.

Read through the next section and then work through the project at the bottom to complete the week!

---

# If Statements

You actually already learned about `if` statements in p5.js during week 4, so let's build on what you already know and then add `if` statements into the mix.

Start with this example code:

{% include codepen-vertical.html slug-hash="QWxNmPZ" height="500" autoplay=true default-tab="js" %}

This HTML contains an input element, an output element, and a button. When the button is clicked, the JavaScript code gets the user's name from the input element, and then adds it to the output element.

**Note:** This is an online editor called CodePen, which works a lot like Replit but can be embedded in websites like this one. You should be able to edit this code directly to play with it, or you can copy it to a Replit project to use it in your own code.

To review the syntax for `if` statements: to create an `if` statement, first start with the `if` keyword, followed by a boolean expression inside of parentheses, followed by `{ }` curly braces. Inside those curly braces, put the code you want to run when the boolean expression is true.

```javascript
if (name == 'Kevin') {
  outputElement.innerHTML = "Wow that's my name too!";
}
```

This `if` statement checks whether the `name` variable is equal to the string `Kevin`. If so, the code adds `Wow that's my name too!` to the output. If the name is not Kevin, then that line of code is skipped and nothing happens.

We can add this to our example:

{% include codepen-vertical.html slug-hash="KKezRMY" height="500" autoplay=true default-tab="js" %}

Try changing this code so it shows a message for your name!

And just like in p5.js, you can also use `else if` and `else` statements to create multiple branches in your code:

{% include codepen-vertical.html slug-hash="MWXyGBa" height="550" autoplay=true default-tab="js" %}

You can read more about `if` statements in JavaScript here:

{% include url-thumbnail.html url="/tutorials/javascript/if-statements" %}

# Project - Quiz

Now you know how to us `if` statements in your JavaScript. To practice that, you're going to create an interactive quiz.

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

![quiz webpage](/teaching/intro-to-creative-web-dev/images/if-statements-1.png)

This HTML contains two input elements, and the JavaScript contains six `if`, `else if`, or `else` statements. For full credit, you'd need to add four more statements.
