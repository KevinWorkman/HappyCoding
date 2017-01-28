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
tags: [tutorial, javascript, basic]
---

This tutorial assumes you've worked through the Processing tutorials, and you already know what a function is. (If not, go read [the Processing tutorials](/tutorials/processing) now!) So I won't spend a lot of time explaining what a function is or why they're useful. I'll just focus on the major differences between creating functions in JavaScript vs creating them in Processing.

## Calling JavaScript

Remember that we can call JavaScript by putting our code inside the `<script>` tag, either loading it via the `src` attribute or by putting the code inside the tag, like this:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>document.write() Example</title>
		<script>
			document.write("This was added from JavaScript.");
		</script>
	</head>
	<body>
		<p>This is the original page content.</p>
	</body>
</html>
```

{% include codepen.html slug-hash="BQXLBo" height="300" %}

This code uses the `document.write()` function to add some content to the webpage. But notice that what we're adding shows up in the webpage **before** the content of the page.

This is because the JavaScript is executing before the page has rendered the `<body>` section of the webpage. Hopefully this makes sense: as your browser loads the file, it reads the HTML line by line. It sets the title of the window, then gets to the `<script>` tag. It runs the code in that tag, which adds `This was added from JavaScript.` to the page (which is blank to start with). Then it continues loading the file, and eventually adds `<p>This is the original page content.</p>` to the webpage as well.

The problem is, a lot of JavaScript code is meant to interact with elements that are on the page. But how can we do that if our JavaScript always runs before the page is loaded?

The answer is that we can create functions that we only call after the page is done loading.

## Declaring Functions

Remember that Processing is statically typed, and JavaScript is dynamically typed. This applies to functiosn just like it applies to variables!

Consider how you declare functions in Processing:

```java
void doSomething(){
	println("doing something");
}

int returnSomething(){
	return 42;
}
```

This code creates two functions: one called `doSomething()` that doesn't return anything (it has a `void` return type), and another that returns an `int` value.

To call those functions, you would do this:

```java
doSomething();
int x = returnSomething();
```

Now look at how you'd do that in JavaScript, where you don't specify a function's return type. Instead, you use the `function` keyword to define a function. Here's the same thing in JavaScript:

```javascript
function doSomething(){
	console.log("doing something");
}

function returnSomething(){
	return 42;
}
```

Calling the functions works the same way, except of course the `x` variable doesn't get a type either:

```javascript
doSomething();
var x = returnSomething();
```

There are other ways to declare functions in JavaScript, but just stick with this approach for now.

Putting it all together, here's a little example HTML file that contains a `<script>` tag that creates a `writeMessage()` function.

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

If you run this file, you'll notice that our `Happy coding!` message is never displayed. That's because all we've done so far is define a function named `writeMessage()` that adds our message to the webpage. **We haven't actually called it yet!**

We could call it right after defining it:

```html
<script>
	function writeMessage(){
		document.write("<p>Happy coding!</p>");
	}
	writeMessage();
</script>
```

But that's pretty much the same thing as just running the code without defining a function.

## Events

Remeber that Processing automatically called functions for you: `setup()` once at the beginning, `draw()` 60 times per second, `mouseClicked()` whenever the mouse was clicked, etc. We could define these functions and Processing would run our program for us.

JavaScript doesn't automatically call any functions for you. Instead, you have to tell your webpage which functions to call when certain things happen.

You do this by using an event attribute on an HTML element, and you set it equal to JavaScript code you want to call when that event happens. This will make more sense with a couple examples:

## The `onclick` Event

The `onclick` event fires when a user clicks on an element in a webpage. Here's an example:

```html
<p onclick="alert('hello');">Click me!</p>
```

This HTML creates a `<p>` tag with an `onclick` attribute equal to the JavaScript code `alert('hello');` and content that says `Click me!` that gets rendered to the webpage. Now, when the user clicks that `<p>` tag, the JavaScript code is run and a message pops up.

{% include codepen.html slug-hash="KNOgmX" height="150" %}

## The `onload` Event

The `onload` event fires as soon as the element is done loading. This event attribute is usually used on the `<body>` tag to run some code as soon as the page is loaded. This is similar to Processing's `setup()` function.

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

{% include codepen.html slug-hash="MJOPeM" height="250" %}

The `onload` attribute of the `<body>` tag in this HTML contains JavaScript that displays a dialog when the page is loaded. In real life this would probably annoy your users, but this is just an example!

## Putting It All Together

Now you know how to run JavaScript code by setting event attributes on HTML elements and then putting JavaScript code in the value. That can be really cumbersome if you have more than a couple lines of code: imagine putting a hundred lines of code inside an attribute! 🤢

Luckily, you already know how to get around this problem: you can define a function in the JavaScript in the `<head>` section (or in another file that you load), and then you call that function from the event attribute.

Here is the above `onclick` example, rewritten to call a function in the `<head>` section of our HTML document:

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

This example is a little silly because we're just calling a single function, but imagine if the `showMessage()` function contained 100 lines of code. This approach also makes it easier to run the same code on different HTML webpages, and having your code all in one place makes it easier to debug your code.

## Multiple Functions and Variables

Just like a Processing sketch can have several functions that Processing calls at different times (like `setup()` at the beginning and `mouseClicked()` whenever the user clicks), you can have multiple JavaScript functions that are called from multiple events.

And just like Processing can have variables that are used between functions, you can do the exact same thing in JavaScript.

Here's an example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<script>
		
			var clickedFirstP = false;
		
			function showFirstMessage(){
				alert('Welcome to my webpage!');
			}
		
			function firstThingClicked(){
				clickedFirstP = true;
			}
			
			function secondThingClicked(){
				if(clickedFirstP){
					alert("Good job!");
				}
				else{
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

{% include codepen.html slug-hash="apVREm" height="575" %}

Maybe not a very exciting game, but it shows the basics of having multiple events, functions, and a variable shared between them.


## Parameters

While we're on the subject of creating functions, I should let you know about another little difference between Processing and JavaScript.

Take this function in Processing:

```java
void printNumberOfThings(String thing, int count){
	println("You have " + count + " " + thing + "s");
}
```

This function takes two parameters: a `String` value and an `int` value, and it uses them to print out a message. You can call the function by passing in values:

```java
printNumberOfThings("cat", 3); //prints: "You have 3 cats"
```

In JavaScript, you don't give parameters a type, just like you don't give variables a type or functions a return type. You simply list the parameter names in the `( )` parentheses:

```javascript
function printNumberOfThings(thing, count){
	console("You have " + count + " " + thing + "s");
}
```

If you're used to Processing, then that probably looks a little weird. But just remember that parameters don't get a type, and you'll be okay!

## Homework

- Create a guessing game. Create a webpage with three "buttons" (they can just be `<p>` tags) that say `Higher`, `Lower`, and `Correct`. Have the player choose a number between `1` and `100`, and have the computer guess what the number is. After the computer guesses, have the player click one of the buttons. Hint: what is the lowest possible number it could be? What is the highest? If you guess `50` and the player says the number is higher, now what is the lowest and highest?

## Next: [Interactive HTML](/tutorials/javascript/interactive-html)


