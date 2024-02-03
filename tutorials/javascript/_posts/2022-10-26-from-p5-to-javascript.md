---
layout: post
title: From p5.js to JavaScript
thumbnail: /tutorials/javascript/images/js-1.png
tagline: Build on your p5.js knowledge to learn JavaScript.
sort-key: 50
meta-title: From p5.js to JavaScript
meta-description: Build on your p5.js knowledge to learn JavaScript.
meta-image: /tutorials/javascript/images/calling-javascript-3.png
tags: [tutorial, p5js, javascript]
previousPost: /tutorials/javascript/
nextPost: /tutorials/javascript/variables
---

{% include toc.md %}

HTML is a **markup language**, which lets you specify the content of a webpage. CSS is a **style sheet language**, which lets you style that content. But HTML and CSS don't contain any logic. You can create a button in HTML, and you can style it in CSS, but you can't tell the browser to display a message when that button is clicked.

This is where JavaScript comes into play. JavaScript is a programming language that runs in the browser and lets you create interactive webpages.

This tutorial is designed for folks who are already familiar with [p5.js](/tutorials/p5js), which will make it easier to learn JavaScript- because p5.js is JavaScript!

{% include youtube-embed.html slug="zyt807wgvLk" %}

---

# Running JavaScript

With p5.js, you probably used the p5.js editor to run your code, which handled a few things for you automatically. Now that you're using pure JavaScript, you have to do those things yourself.

Let's start with an example `index.html` file:

{% include codepen-new.html slug-hash="mRddaz" height="200" autoplay=true %}

This HTML creates a webpage that contains a single `<p>` element.

To add JavaScript to this webpage, add a `<script>` tag inside the `<head>` section of your HTML, and then put your JavaScript code inside that `<script>` tag. Here's an example:

{% include codepen-new.html slug-hash="BQXLBo" height="260" autoplay=true %}

When the browser loads the webpage, it reads the `<script>` tag and executes the code inside of it. When this code is run, it adds `"Hello world!"` to the page. Try changing the code so it says `"Hello, your_name_here!"` instead.

# Calling Functions

Similar to p5.js, one of the tools you’ll use most often in JavaScript is the ability to **call a function**.

To call a function, you need to do four things:

- Write the **name** of the function.
- Add parentheses `()` after the function’s name.
- Inside the parenthesis, add any **parameters** that the function requires, separated by commas.
- End the line with a semicolon `;`.

If this sounds similar to how functions work in p5.js, that's because p5.js is JavaScript! So functions in JavaScript work exactly like functions in p5.js.

**Note:** Parameters are also often called *arguments*. I generally use the terms *parameter* and *argument* interchangeably.

# Helpful Functions

With p5.js, you could read through the p5.js reference to learn more about the functions you could call. JavaScript has a ton more features to choose from, and there isn't a single reference page for every available function.

We'll get into some more advanced functions in the next few tutorials, but for now let's focus on some functions that you'll use a lot while coding and debugging.

## alert()

The `alert()` function shows a message to the user in a dialog with an OK button.

```javascript
alert('Hello world!');
```

![alert dialog](/tutorials/javascript/images/calling-javascript-5.png)

{% include codepen-new.html slug-hash="MJWYNQ" height="250" %}

Try changing the code to show a dialog that says `'Hello, your_name_here!'` instead. **Note:** CodePen automatically re-runs the code as you make changes, so changing the code might show you multiple dialogs.

Alert dialogs can be pretty annoying if you overuse it (nobody likes popups), but it can be useful for debugging your code.

## console.log()

The `console.log()` function prints a message to your browser's JavaScript console.

```javascript
console.log('Hello world!');
```

To see the JavaScript console, open your browser's developer tools and find the console tab.

{% include codepen-new.html slug-hash="zNYGvM" height="250" %}

You can learn more about your browser's developer tools in [the developer tools tutorial](/tutorials/javascript/developer-tools).

# Callback Functions

So far, all of the above code runs as soon as you load the page. This can be handy for things like loading content, but it doesn't help make your page interactive.

Remember in p5.js that you could define functions like `setup()` and `draw()` that p5.js automatically called. You could also define functions like `keyPressed()` and `mousePressed()`, which p5.js would automatically call when the user took certain actions.

In JavaScript, you need to hook your functions up yourself. First, define a function inside your `<script>` tag:

```html
<script>
  function showMessage() {
    alert('Hello!');
  }
</script>
```

By default, nothing will run this function. To fix that, add an `onclick` attribute to an HTML element. The `onclick` attribute points to JavaScript code inside of `" "` quotation marks. Typically, that JavaScript will call a single function that then runs whatever code you want.

```html
<button onclick="showMessage()">
  Click me!
</button>
```

Putting it all together, it looks like this:

{% include codepen-new.html slug-hash="wvXBeqb" height="325" autoplay=true %}

When the user clicks the `<button>` element, the `onclick` attribute tells the browser to call the `showMessage()` function, which then calls the `alert()` function to show a dialog.

# DOM Manipulation

The `alert()` function is handy for testing, but it's annoying for users. Nobody likes popups! Instead, you probably want to write JavaScript that changes the content of your webpage. This is called **DOM manipulation**.

To start, first add an HTML element with an `id` attribute:

```html
<p id="output"></p>
```

Next, in your JavaScript, call the `document.getElementById()` function and pass it the ID of the HTML element, and store the result in a variable:

```javascript
let outputElement = document.getElementById('output');
```

The `document.getElementById()` function returns an `Element` object that points to the HTML element with that ID. Now that you have this in a variable, you can change it using JavaScript code.

```javascript
outputElement.innerText = 'Hello!';
```

Putting it all together, it looks like this:

{% include codepen-vertical.html slug-hash="jOKELqy" height=500 autoplay=true %}

# Input

Now you know how to update your page using JavaScript, and you can user a similar approach to get input from the user.

First, add an input element with an ID attribute:

```html
<input id="nameInput">
```

Next, in your JavaScript, use the `document.getElementById()` function and pass it the ID of the input element, and store the result in a variable:

```javascript
let nameInputElement = document.getElementById('nameInput');
```

Now that you have a reference to the input element, you can get its `value` which contains whatever the user typed:

```javascript
let name = nameInputElement.value;
```

Finally, you can use that value to build some output:

```javascript
outputElement.innerText = 'Hello ' + name + '!';
```

Putting it all together, it looks like this:

{% include codepen-vertical.html slug-hash="XWYJazB" height=500 autoplay=true %}

# External JavaScript

You could write all of your JavaScript inside the `<script>` tag in your `index.html` file, but that gets cumbersome if you want to run the same code on multiple pages. It's also a good idea to keep your JavaScript and your HTML separate. So most of the time you'll have a separate `.js` file (or multiple files) that contain your JavaScript code.

Similar to how you can load external `.css` files into your `.html` file, you can also load external `.js` files. Create a new `script.js` file, and put your code in that:

```javascript
alert('Hello world!');
```

This is a little silly because this code is only one line long, but this will come in handy as your code gets more complicated. Now your `index.html` file can load that file using the `src` attribute of the `<script>` tag, like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Happy Coding</title>

    <script src="script.js"></script>

  </head>
  <body>
    <p>Happy coding!</p>
  </body>
</html>
```

The `<script>` tag now points to the `script.js` file, and you don't have to include any code in the `index.html` file itself.

# Reference

With p5.js, you could read through the p5.js reference to learn more about the functions you could call. JavaScript has a ton more features to choose from, and there isn't a single reference page for every available function.

Instead, I'd recommend using search engines to find resources for specific functions and variables. For example, searching for "JavaScript document.getElementById" returns a bunch of results, including pages on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) and [W3Schools](https://www.w3schools.com/jsref/met_document_getelementbyid.asp).

You can read through those pages for more information on the `document.getElementById()` function, and I encourage you to do similar searches for any other functions you come across.

# Homework

- Do a search to figure out how to disable JavaScript in your browser. Disable it, and then try going to some of your favorite websites. This will show you how much the web relies on JavaScript. What differences do you notice? Don't forget to turn JavaScript back on when you're done!
