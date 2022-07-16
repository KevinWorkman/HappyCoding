---
layout: tutorial
title: Test Post Please Ignore
thumbnail: /tutorials/javascript/images/calling-javascript-3.png
tagline: Start making interactive webpages.
sort-key: 100
meta-title: Test Post Please Ignore
meta-description: Start learning how to make interactive webpages.
meta-image: /tutorials/javascript/images/calling-javascript-4.png
tags: [tutorial, javascript]
previousPost: /tutorials/javascript/
nextPost: /tutorials/javascript/variables
updated: 2022-01-23
---

{% include toc.md %}

Please ignore this post. I'm using it to test out some functionality and will delete it in a bit. If you get a notification about this post, please just ignore it. Sorry for the spam!

If you're following these tutorials in order, then at this point you should be familiar with creating a webpage using [HTML](/tutorials/html) and [CSS](/tutorials/html/css).

HTML is a **markup language**, which lets you specify the content of a webpage. CSS is a style sheet language, which lets you style that content. But HTML and CSS don't contain any logic! You can create a button in HTML, and you can style it in CSS, but you can't tell the browser to display a message when that button is clicked.

This is where JavaScript comes into play. JavaScript is a programming language that runs in the browser and lets you create interactive webpages.

# Running JavaScript

Let's start with an example `index.html` file:

{% include codepen-new.html slug-hash="mRddaz" height="200" autoplay=true %}

This HTML creates a webpage that contains a single `<p>` element.

To add JavaScript to this webpage, add a `<script>` tag inside the `<head>` section of your HTML, and then put your JavaScript code inside that `<script>` tag. Here's an example:

{% include codepen-new.html slug-hash="BQXLBo" height="250" autoplay=true %}

When the browser loads the webpage, it reads the `<script>` tag and executes the code inside of it. When this code is run, it adds `"Hello world!"` to the page. Try changing the code so it says `"Hello, your_name_here!"` instead.

# Calling Functions

In JavaScript (and most other languages), one of the tools you’ll use most often is the ability to **call a function**.

## What’s a function?

Writing code is a little bit like writing a recipe. Similar to how a recipe is a set of steps that another person follows, a program is a set of steps that the computer follows.

A single step of a recipe might be something like *“preheat the oven to 350 degrees”* or *“add 2 cups of flour”*, and you might write each step on its own line. The other person then follows those steps in order, one after the other, to bake a cake.

```
preheat oven to 350 degrees
get a large bowl
add 2 cups of flour
add 1 cup of sugar
...
```

This is similar to how a computer program works. A program is a set of instructions that tells the computer to follow a series of steps. Each step is written on its own line, and the computer follows the instructions one at a time.

A function is **one of those steps**. Calling a function is giving the computer a **single instruction** that tells it to do **one thing**.

## How do I call a function?

To call a function (which is another way to say “tell the computer to follow the step on this line of the directions”), you need to do four things:

- Write the **name** of the function.
- Add parentheses `()` after the function’s name.
- Inside the parenthesis, add any **parameters** that the function requires, separated by commas.
- End the line with a semicolon `;`.

## What’s a parameter?

In our recipe instructions, imagine if one of the steps just said “preheat the oven” - that wouldn’t be enough information! What temperature should you use? That step requires more information: specifically, a temperature.

It’s the same idea when you’re writing code. **Computers are very dumb**, so they only know how to do exactly what you tell them. When you ask a computer to jump, it’s going to ask you: how high? You pass that extra information into a function through its **parameters**.

The recipe from above might look like this in code:

```
preheatOven(350);
getLargeBowl();
addFlour(2);
addSugar(1);
```

Notice that the `getLargeBowl` function doesn’t take any parameters, because you don’t need any extra information to follow that step.

**Note:** Parameters are also often called *arguments*. I generally use the terms *parameter* and *argument* interchangeably.

# Helpful Functions

We'll get into some more advanced functions in the next few tutorials, but for now let's focus on some functions that you'll use a lot while coding and debugging.

## document.write()

The `document.write()` function adds some content to the webapge.

```javascript
document.write('Hello world!');
```

You've already seen this one in the example above. You'll learn more about the `document` variable in the [interactive HTML](/tutorials/javascript/interactive-html) tutorial, but for now it's enough to know the `document.write()` function takes whatever parameter you pass into it and adds it to the webpage.

Notice the `' '` single quotes around the `'Hello world!'` parameter. That's because `'Hello world!'` is a `string` of characters, and the `' '` single quotes group them together into a single value that you can use as a parameter. You'll learn more about this syntax when you learn about variables, but for now try to remember your `' '` single quotes when you're working with text!

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

# External JavaScript

You could write all of your JavaScript inside the `<script>` tag in your `index.html` file, but that gets cumbersome if you want to run the same code on multiple pages. It's also a good idea to keep your JavaScript and your HTML separate. So most of the time you'll have a separate `.js` file (or multiple files) that contain your JavaScript code.

Similar to how you can load external `.css` files into your `.html` file, you can also load external `.js` files. Create a new `script.js` file, and put your code in that:

```javascript
document.write("Hello world!");
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

# Homework

- Do a Google search to figure out how to disable JavaScript in your browser. Disable it, and then try going to some of your favorite websites. This will show you how much the web relies on JavaScript. What differences do you notice? Don't forget to turn JavaScript back on when you're done!
- Create an HTML file that has an empty `<body>` tag. Add JavaScript code that uses the `document.write()` function to create a website. Congratulations, you just wrote your first JavaScript app!
