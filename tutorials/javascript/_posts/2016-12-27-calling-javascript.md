---
layout: tutorial
title: Calling JavaScript
slug: calling-javascript
thumbnail: /tutorials/javascript/images/calling-javascript-3.png
tagline: Start making interactive webpages.
sort-key: 100
meta-title: Calling JavaScript
meta-description: Start learning how to make interactive webpages.
meta-image: /tutorials/javascript/images/calling-javascript-4.png
tags: [tutorial, javascript]
previousPost: /tutorials/javascript/
nextPost: /tutorials/javascript/developer-tools
---

{% include toc.md %}

If you're following these tutorials in order, then at this point you should be familiar with coding in [p5.js](/tutorials/p5js) and with setting up a webpage using [HTML](/tutorials/html) and [CSS](/tutorials/html/css).

You might have noticed that HTML isn't really a programming language. It's a **markup language**, which means that it lets you specify the content of a webpage. But it doesn't contain any logic- the stuff like `if` statements, `for` loops, and functions that you might expect from a coding language.

This is where JavaScript comes into play. JavaScript is a programming language that executes in a webpage and lets you create interactive webpages.

# Running JavaScript

Let's start with an example `index.html` file:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
	</head>
	<body>
		<p>Happy coding!</p>
	</body>
</html>
```

![example webpage](/tutorials/javascript/images/calling-javascript-1.png)

{% include codepen-new.html slug-hash="mRddaz" height="250" %}

Hopefully you're already familiar with how HTML works. If not, go read the [HTML tutorials](/tutorials/html) and then come back!

To add JavaScript to this webpage, add a `<script>` tag inside the `<head>` section of your HTML, and then put your JavaScript code inside that `<script>` tag. Here's an example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<script>
			document.write("Hello world!");
		</script>
	</head>
	<body>
		<p>Happy coding!</p>
	</body>
</html>
```

Now when the browser loads the webpage, it gets to the `<script>` tag and executes the code inside of it. When this code is run, it adds `"Hello world!" to the webpage:

![example webpage](/tutorials/javascript/images/calling-javascript-2.png)

{% include codepen-new.html slug-hash="BQXLBo" height="250" %}

# External JavaScript

You could write all of your JavaScript inside the `<head>` tag of your `index.html` file, but that gets cumbersome if you want to run the same code on multiple pages. It's also just a good idea to keep your JavaScript and your HTML separate. So most of the time you'll have a separate `.js` file (or multiple files) that contain your JavaScript code.

Similar to how you can load external `.css` files into your `.html` file, you can also load external `.js` files. Create a new `main.js` file, and put your code in that:

```javascript
document.write("Hello world!");
```

This is a little silly because this code is only one line long, but this will come in handy as your code gets more complicated. Now your `index.html` file can load that file using the `src` attribute of the `<script>` tag, like this:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<script src="main.js"></script>
	</head>
	<body>
		<p>Happy coding!</p>
	</body>
</html>
```

The `<script>` tag now points to the `main.js` file, and you don't have to include any code in the `index.html` file itself.

# Calling Functions

Remember from the [p5.js tutorials](/tutorials/p5js) that functions let you tell the computer what to do. For example, in p5.js you can draw a circle by calling the `circle()` function and passing in the appropriate parameters.

To call a function, you write the function's name, then in `( )` parentheses you pass in parameters.

We'll get into some more advanced function in the next few tutorials, but for now let's focus on some functions that you'll use a lot while coding and debugging.

## `document.write()`

The `document.write()` function adds some content to the webapge.

```javascript
document.write('Hello world!');
```

You've already seen this one in the example above. You'll learn more about the `document` variable in the [interactive HTML](/tutorials/javascript/interactive-html) tutorial, but for now it's enough to know that the `document` variable is an object, and that object contains functions you can call. One of those functions is the `write()` function, which adds whatever you pass into it to the webpage.

## `alert()`

The `alert()` function shows a message to the user in a dialog with an OK button.

```javascript
alert('Hello world!');
```

![alert dialog](/tutorials/javascript/images/calling-javascript-5.png)

{% include codepen-new.html slug-hash="MJWYNQ" height="250" %}

(Note: CodePen automatically reloads the page if you make changes, so changing the code might show you multiple dialogs.)

This can be pretty annoying if you overuse it (nobody likes popups), but it can be a useful way to debug your code.

## `console.log()`

The `console.log()` function prints a string to your browser's JavaScript console.

```javascript
console.log('Hello world!');
```

To see the JavaScript console, open your browser's developer tools (by pressing `F12` or through the menu) and find the console tab.

{% include codepen-new.html slug-hash="zNYGvM" height="250" %}

You can learn more about the developer tools in [the developer tools tutorial](/tutorials/javascript/developer-tools).

# Homework

- Do a Google search to figure out how to disable JavaScript in your browser. Disable it, and then try going to some of your favorite websites. This will show you how much the web relies on JavaScript. What differences do you notice? Don't forget to turn JavaScript back on when you're done!
- Create an HTML file that has an empty `<body>` tag. Add JavaScript code that uses the `document.write()` function to create a website. Congratulations, you just wrote your first JavaScript app!
