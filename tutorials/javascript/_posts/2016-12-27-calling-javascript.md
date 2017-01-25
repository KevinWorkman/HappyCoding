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
tags: [tutorial, javascript, basic]
---

If you're following these tutorials in order, then at this point you should be familiar with programming in Processing and with setting up a basic webpage using HTML and CSS.

You might have noticed that HTML isn't really a programming language. It's a **markup language**, which means that it allows you to specify the content of a webpage. But it doesn't really contain any logic- the stuff like `if` statements, `for` loops, and functions that you learned about in Processing.

This is where JavaScript comes into play. JavaScript is a programming language (like Processing) that executes in a webpage (like HTML) and allows you to create interactive webpages, or to run code in a web browser.

## Running JavaScript

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

{% include codepen.html slug-hash="mRddaz" height="250" %}

This is just a basic HTML file, and hopefully it's pretty familiar by now.

To add JavaScript to this webpage, we're going to add a `<script>` tag inside the `<head>` section of our HTML, and then we're going to put our JavaScript code inside that `<script>` tag. It's probably easier to just show you what I mean:

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

Now when the browser loads the webpage, it gets to the `<script>` tag and executes the code inside of it. You don't really have to understand exactly what's going on yet, but you can probably guess that when this code is run, it causes `"Hello world!" to be added to the webpage:

![example webpage](/tutorials/javascript/images/calling-javascript-2.png)

{% include codepen.html slug-hash="BQXLBo" height="250" %}

## External JavaScript

You could write all of your JavaScript inside the `<head>` tag of your `index.html` file, but that gets cumbersome if you want to run the same code on multiple pages. It's also just a good idea to keep your JavaScript and your HTML separate. So most of the time you'll have a separate `.js` file (or multiple files) that contain your JavaScript code.

Similar to how we can load external `.css` files into our `.html` file, we can also load those external `.js` files. To do this, let's create a new `main.js` file, and put our code in that:

```javascript
document.write("Hello world!");
```

This is a little silly because our code is only one line long, but this will come in handy as your code gets more complicated. Now our `index.html` file can load that file using the `src` attribute of the `<script>` tag, like this:

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

Notice that our `<script>` tag now points to our `main.js` file, and we don't have to include any code in our `index.html` file.

In real life you'll see a combination of both approaches, so it's good to be familiar with both.

## Calling Basic Functions

I'm going to assume you're coming from Processing so you already know what a function is and what it means to call a function. For example, in Processing I would draw a circle by calling the `ellipse()` function and passing in the appropriate parameters.

JavaScript is pretty much the same in terms of calling basic functions. To tell JavaScript to do something, you just write the function name, then in `( )` parentheses you pass in the appropriate parameters.

We'll get to more advanced function in the next few tutorials, but for now let's focus on some more basic functions to get started.

### The `document.write()` Function

You've already seen this one in action. We'll go into more detail about the `document` variable in the [interactive HTML](/tutorials/javascript/interactive-html) tutorial, but for now you should just know that the `document` variable is an object, and that object contains functions you can call. One of those functions is the `write()` function, which adds whatever you pass into it to the webpage.

### The `alert()` Function

The `alert()` function is an easy way to show a message to the user. Pass it a string value, and that value will be displayed to the user in a dialog with an OK button. 

{% include codepen.html slug-hash="MJWYNQ" height="250" %}

(Note: CodePen automatically reloads the page if you make changes, so changing the code might show you multiple dialogs.)

This can be pretty annoying if you overuse it (nobody likes popups), but it can be a useful way to debug your code.

### The `console.log()` Function

The `console` variable is another object that contains functions that you can call. One function that you'll use all the time is the `console.log()` function, which takes a string parameter and outputs that to the browser's JavaScript console.

To see the JavaScript console, open your browser's developer tools (by pressing `F12` or through the menu) and find the console tab.

{% include codepen.html slug-hash="zNYGvM" height="250" %}

You can learn more about the developer tools in [the developer tools tutorial](/tutorials/javascript/developer-tools).

## Homework

- Do a Google search to figure out how to disable JavaScript in your browser. Disable it, and then try going to some of your favorite websites. This will show you how much the web relies on JavaScript. What differences do you notice? Don't forget to turn JavaScript back on when you're done!
- Create an HTML file that has an empty `<body>` tag. Add JavaScript code that uses the `document.write()` function to create a website. Congratulations, you just wrote your first JavaScript app!

## Next: [Developer Tools](/tutorials/javascript/developer-tools)
