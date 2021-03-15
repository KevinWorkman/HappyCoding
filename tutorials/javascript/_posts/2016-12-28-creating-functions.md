---
layout: tutorial
title: Creating Functions
slug: creating-functions
thumbnail: /tutorials/javascript/images/creating-functions-1.png
tagline: Learn about creating functions in JavaScript.
sort-key: 400
meta-title: Creating Functions
meta-description: Learn more about creating functions in JavaScript.
meta-image: /tutorials/html/javascript/creating-functions-2.png
tags: [tutorial, javascript]
previousPost: /tutorials/javascript/developer-tools
lastUpdate: 2021-03-14
---

{% include toc.md %}

This tutorial assumes you've worked through the [p5.js tutorials](/tutorials/p5js), and that you already know what a function is. If not, go read [the p5.js tutorials](/tutorials/p5js) now!

# Calling JavaScript

Remember that you can write JavaScript using the `<script>` tag, and either loading a JavaScript file via the `src` attribute or by putting the code directly inside the tag, like this:

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

{% include codepen-new.html slug-hash="BQXLBo" height="300" %}

This code uses the `document.write()` function to add `Hello world!` to the webpage. If you run this code, you might notice that `Hello world!` displays in the webpage **before** the content of the page.

![html page](/tutorials/javascript/images/creating-functions-3.png)

This is because the JavaScript code is executing before the page has rendered the `<body>` section of the webpage. Hopefully this makes sense: as your browser loads the file, it reads the HTML line by line. It sets the title of the window, then gets to the `<script>` tag. It runs the code in that tag, which adds `Hello world!` to the page (which is blank to start with). Then it continues loading the file, and eventually adds `<p>Happy coding!</p>` to the webpage as well.

That might be okay for this example, but a lot of JavaScript code is meant to interact with elements that are on the page. That won't work if the JavaScript always runs before the page is loaded. So how do you make sure that the page is loaded before the JavaScript code runs?

The answer is that you can create functions that are only called *after* the page is done loading.

# Declaring Functions

Like you learned in the [p5.js tutorials](/tutorials/p5js), you declare a function using the `function` keyword, then zero or more parameters between `( )` parentheses, and then code inside of `{ }` curly braces.

Here's an example HTML file that contains a `<script>` tag that creates a `writeMessage()` function.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<script>
			function writeMessage(){
				document.write("<p>Happy coding!</p>");
			}
		</script>
	</head>
	<body>
		<p>Hello world!</p>
	</body>
</html>
```

If you save this file and open it in your browser, you'll notice that the `Happy coding!` message is never displayed. That's because all the code does so far is *define* a function named `writeMessage()` that adds a message to the webpage. **Nothing actually calls the function yet!**

You could call it right after defining it:

```html
<script>
	function writeMessage(){
		document.write("<p>Happy coding!</p>");
	}
	writeMessage();
</script>
```

But that's pretty much the same thing as running the code without defining a function.

Instead, you can use **events** to run code when certain things happen in the page.

# Events

Remember that p5.js automatically called functions for you: `setup()` once at the beginning, `draw()` 60 times per second, `mouseClicked()` whenever the mouse was clicked, etc.

JavaScript doesn't automatically call any functions for you. Instead, you have to tell your webpage which functions to call when certain things happen.

You do this by adding an `event` attribute to an HTML element, and you set it equal to JavaScript code you want to call when that event happens. This will make more sense with a couple examples:

## `onclick`

The `onclick` event fires when a user clicks on an element in a webpage. Here's an example:

```html
<p onclick="alert('hello');">Click me!</p>
```

This HTML creates a `<p>` tag with an `onclick` attribute that contains the JavaScript code `alert('hello');` and content that says `Click me!` that gets rendered to the webpage. When the user clicks that `<p>` tag, the JavaScript code runs and displays the message.

{% include codepen-new.html slug-hash="KNOgmX" height="150" %}

## The `onload` Event

The `onload` event fires as soon as an element is done loading. This event attribute is usually used on the `<body>` tag to run code as soon as the page is loaded. This is similar to p5.js's `setup()` function.

Here's an example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
	</head>
	<body onload="alert('Welcome to my page!');">
	
		<p>Thanks for visiting!</p>
	</body>
</html>
```

{% include codepen-new.html slug-hash="MJOPeM" height="250" %}

The `onload` attribute of the `<body>` tag in this HTML contains JavaScript that displays a dialog when the page is loaded.

# Putting It All Together

Now you know how to run JavaScript code by setting event attributes on HTML elements and then putting JavaScript code inside the value of those attributes. That can be really cumbersome if you have more than a couple lines of code: imagine putting a hundred lines of code inside an attribute value!

Luckily, you already know how to get around this problem: you can define a function in the JavaScript in the `<head>` section (or in another file that you load), and then you call that function from the event attribute.

Here is the above `onclick` example, rewritten to call a function in the `<head>` section of the HTML file:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<script>
			function showMessage(){
				alert('hello');
			}
		</script>
	</head>
	<body>
		<p onclick="showMessage()">Click me!</p>
	</body>
</html>
```

This example is a little silly because it's still calling a single function, but imagine if the `showMessage()` function contained 100 lines of code!

# Multiple Functions and Variables

Just like a p5.js sketch can have several functions that p5.js calls at different times (like `setup()` at the beginning and `mouseClicked()` whenever the user clicks), you can have multiple JavaScript functions that are called from multiple events.

And just like p5.js can have variables that are used between functions, you can do the exact same thing in JavaScript.

Here's an example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<script>
		
			let clickedFirstP = false;
		
			function showFirstMessage(){
				alert('Welcome to my webpage!');
			}
		
			function firstThingClicked(){
				clickedFirstP = true;
			}
			
			function secondThingClicked(){
				if (clickedFirstP) {
					alert("Good job!");
				} else {
					alert("You forgot to click the first thing!");
				}
			}
		</script>
	</head>
	<body onload="showFirstMessage()">
		<p onclick="firstThingClicked()">Click me first!</p>
		<p onclick="secondThingClicked()">Click me second!</p>
	</body>
</html>
```

This example shows a message when the page loads, and then it shows you two `<p>` elements to click. If you click them in the correct order, you get a congratulatory message. If not, you get a reminder to click them in the correct order. 

{% include codepen-new.html slug-hash="apVREm" height="575" %}

This might not be a very exciting game, but it shows the fundamentals of having multiple events, functions, and a variable shared between them.

# Homework

- Create an HTML file that contains a button. When you click that button, a new button is added to the page. Hint: the `onclick` attribute and the `document.write()` function might come in handy!


