---
layout: tutorial
title: Interactive HTML
slug: interactive-html
thumbnail: /tutorials/javascript/images/interactive-html-1.png
tagline: Learn about creating interactive HTML with JavaScript.
sort-key: 500
meta-title: Interactive HTML
meta-description: Learn more about creating interactive HTML with JavaScript.
meta-image: /tutorials/html/javascript/interactive-html-2.png
tags: [tutorial, javascript, basic]
---

Now you know how to write JavaScript code, and you know how to set up events in your HTML to call functions that you write. So far we've only used basic functions like `alert()` and `console.log()` to interact with the user. But "real" JavaScript usually modifies something on the page to interact with the user.

## Referencing HTML Elements

Remember from [the CSS tutorials](/tutorials/html/css) that there are several ways to reference an HTML element: by tag, by class, and by id. Take this example webpage:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Referencing HTML Elements</title>
	</head>
	<body>
		<p>This is the first paragraph.</p>
		<p class="myClass">This is the second paragraph.</p>
		<p class="myClass" id="myId">This is the third paragraph.</p>
	</body>
</html>
```

This HTML contains three `<p>` elements, and there are three ways to reference them:

- By tag: we can refer to all `<p>` elements, which will reference all three `<p>` tags.
- By class: we can refer to the `myClass` class, which will reference the second and third `<p>` tag.
- By ID: we can refer to the `myId` id, which will only reference the third `<p>` tag.

We can use the above to create CSS that styles the `<p>` tags by referencing them:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Referencing HTML Elements</title>
		<style>
			p{
				font-size: 16pt;
			}
			
			.myClass{
				color: red;	
			}
			
			#myId{
				background-color: black;
			}
		</style>
	</head>
	<body>
		<p>This is the first paragraph.</p>
		<p class="myClass">This is the second paragraph.</p>
		<p class="myClass" id="myId">This is the third paragraph.</p>
	</body>
</html>
```

This CSS makes every `<p>` tag have a font size of `16pt`, gives the `myClass` class a color of red, and gives the `myId` id a background color of black.

{% include codepen.html slug-hash="zNOwxe" height="300" %}

JavaScript works in the same way: you can refer to HTML elements by tag, by class, or by id.

## The Document Object Model

The Document Object Model, or DOM for short, is (basically) a way to organize a webpage so you can access it using JavaScript code. Using the DOM, you can refer to your webpage using objects and their functions.

You can think about a webpage like this:

- The webpage itself is a `Document` object, which you can reference using the `document` variable.
- The HTML elements in the webpage are `Element` objects.
- Element objects can contain other Elements as children: you can have a `<p>` element that contains an `<a>` element, for example.
- Element objects also give you access to properties of a particular element on the page: things like its CSS style, its content, etc.

By using these objects in your JavaScript code, you can modify a webpage to make it interactive.

## The `document.getElementById()` Function

One of the most common functions you'll use is the `document.getElementById()` function, which returns the element with the ID you pass in as a parameter. Here's an example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>The getElementById() Function</title>
		<script>
			function makeParagraphGreen(){
				var p = document.getElementById("myId");
				p.style.color = "green";
			}
		</script>
	</head>
	<body>
		<p id="myId" onclick="makeParagraphGreen()">Click to make me green.</p>
		<p>I won't change color.</p>
	</body>
</html>
```

The HTML on this page contains a `<p>` tag with an id of `myId` and an `onclick` attribute that calls the `makeParagraphGreen()` function. The `makeParagraphGreen()` function calls the `document.getElementById()` function to get the `myId` paragraph `Element` object, then uses that object's `style` variable to change the color to green. Notice that the second `<p>` tag is unaffected.

{% include codepen.html slug-hash="mRbmmR" height="300" %}

We'll get to exactly what the `p.style.color` line is doing in a second, but for now just remember that the `getElementById()` function returns a single `Element` with the id you pass in as a parameter.

## The `document.getElementsByClassName()` Function

Similar to how the `document.getElementById()` function returns a single `Element` with the parameter id, the `document.getElementsByClassName()` function returns an array (technically an array-like object, JavaScript is weird) of `Element` objects that have the parameterized class name.

You can use a `for` loop to iterate over the returned array, and then use the functions and variables on the `Element` objects in that array. Here's an example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>The getElementsByClassName() Function</title>

		
		<script>
			function getIndexes(){
				var pArray = document.getElementsByClassName("indexedParagraph");
				for(var index = 0; index < pArray.length; index++){
					pArray[index].innerHTML = "My index is: " + index;
				}
			}
		</script>
	</head>
	<body>
		<p onclick="getIndexes()">Click to see the indexes.</p>
		<p class="indexedParagraph">What's my index?</p>
		<p class="indexedParagraph">What's my index?</p>
		<p class="indexedParagraph">What's my index?</p>
		<p class="indexedParagraph">What's my index?</p>
		<p class="indexedParagraph">What's my index?</p>
	</body>
</html>
```

This webpage contains one `<p>` element with an `onclick` attribute that calls the `getIndexes()` function, and 5 other `<p>` elements that all have the `indexedParagraph` class. In the JavaScript code, the `getIndexes()` function calls the `getElementsByClassName()` which returns the 5 `<p>` elements with the `indexedParagraph` class in an array. It then uses a `for` loop to iterate over that array, and sets the `innerHTML` variable of each element to display the index of each `<p>` tag. Phew!

{% include codepen.html slug-hash="MJgmVx" height="300" %}

Notice that the first `<p>` tag is unaffected, because it doesn't have the `indexedParagraph` class. Also notice that the `onclick` attribute is on a different element than the elements that the JavaScript code changes. It's perfectly normal to have one element that changes another!

## The `document.getElementsByTagName()` Function

Similar to how the `document.getElementsByClassName()` function returns an array of `Element` objects that have the parameter class name, the `document.getElementsByTagName()` function returns an array of `Element` objects that have the parameterized tag name. Here's an example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>The getElementsByTagName() Function</title>
		<style>
			ul {
				list-style:none;
			}
		</style>
		<script>
			function addCats(){
				var liArray = document.getElementsByTagName("li");
				for(var index = 0; index < liArray.length; index++){
					liArray[index].innerHTML = "😸" + liArray[index].innerHTML;
				}
			}
		</script>
	</head>
	<body onload="addCats()">
		<p>Cat facts:</p>
		<ul>
			<li>I like cats.</li>
			<li>Cats say meow.</li>
			<li>Cats have whiskers.</li>
		</ul>
	</body>
</html>
```

The HTML of this webpage contains a `<ul>` element with `<li>` elements that list some facts about cats. The CSS has removed the bullet from the beginning. (If you don't know what I'm talking about, try getting rid of the CSS.) The `<body>` tag has an `onload` attribute that calls the `addCats()` function when the page loads. In the JavaScript code, the `addCats()` function calls the `getElementsByTagName()` function to get the `<li>` elements, and then it uses a `for` loop to iterate over those elements. For each element, it adds a 😸 cat emoji at the beginning of the content.

{% include codepen.html slug-hash="EZYmrj" height="300" %}

## Element Functions

You've seen a few `Element` functions and variables, like `style` that references the element's style and `innerHTML` that references the content of an element. There are a ton more!

For a more complete list, check out [W3Schools](http://www.w3schools.com/jsref/dom_obj_all.asp) or [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element). But here are a few examples:

**Appending an Element**

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Appending an Element</title>
		<script>
			function addParagraph(){
				
				//create a new <p> element
				var newPDiv = document.createElement("p");
				
				//create the content for the <p> element
				var pContent = document.createTextNode("I'm a new paragraph!");
				
				//add the content to the <p> element
				newPDiv.appendChild(pContent);
				
				//get the container <div>
				var containerDiv = document.getElementById("container");
				
				//add the <p> element to the <div>
				containerDiv.appendChild(newPDiv);
			}
		</script>
	</head>
	<body>
		<p onclick="addParagraph()">Click to add a p tag below.</p>
		<div id="container"></div>
	</body>
</html>
```

{% include codepen.html slug-hash="RKbgyY" height="300" %}

This code uses the `document.createElement()` function to create a new `<p>` element, then it uses the `document.createTextNode()` to create content for that `<p>` element. Then it uses the `appendChild()` function to add the content to the `<p>` element, and again to add the `<p>` element to the `<div>` with the `container` id.

**Changing an element's class**

```javascript
var element = document.getElementById("yourIdHere");
element.className = "yourClassHere";
```

The `className` variable allows you to get (or set) the CSS class of an element. This allows you to set the style in CSS, and then change which styles apply in JavaScript. The `id` variable works in the same way, just with CSS ids instead of classes.

**Element Children**

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Element Children</title>
		<script>
			function addBorder(){
				var containerDiv = document.getElementById("container");
				for(var index = 0; index < containerDiv.children.length; index++){
					containerDiv.children[index].style.border = "thin solid red";
				}
			}
		</script>
	</head>
	<body onload="addBorder()">
		<div id="container">
			<p>I'm a paragraph. And <a href="">I'm a link</a> inside that paragraph.</p>
			<p>I'm another paragraph.</p>
		</div>
		<p>I'm outside the div.</p>
	</body>
</html>
```

{% include codepen.html slug-hash="QdOJWW" height="300" %}

This code uses the `element.children` variable, which is an array that contains all of the child elements of a parent element. In this case, it iterates over the children of the `<div>` element with the `container` id, and adds a red border to them. Notice that the `<p>` element outside the `<div>` is unaffected because it's not a child of the `<div>`. Also notice that the `<a>` tag is unaffected because it's not a **direct** child of the `<div>` element: its parent is the `<p>` element that contains it, which makes it a grandchild of the `<div>` element.

**Removing an Element**

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Removing an Element</title>
		<script>
			function deleteParagraph(){
				document.getElementById("deleteMe").remove();
			}
		</script>
	</head>
	<body>
		<p id="deleteMe" onclick="deleteParagraph()">Click to delete me.</p>
		<p>I'm here to stay.</p>
	</body>
</html>
```

{% include codepen.html slug-hash="bgbRRJ" height="300" %}

This code uses the `remove()` function to remove an element from the webpage.

**Adding Listeners**

JavaScript lets you reference functions just like any other value. That might sound weird, but it allows you to write code like this:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Appending an Element</title>
		<script>
		
			var count = 0;
		
			function setupClickListeners(){
				document.getElementById("clickMe").addEventListener("click", clicked);
				
			}
			
			function clicked(){
				count++;
				document.getElementById("countLabel").innerHTML = count;
			}
		</script>
	</head>
	<body onload="setupClickListeners()">
		<span id="clickMe">Click to add one:</span> <span id="countLabel">0</span>
	</body>
</html>
```

This code uses the `onload` attribute to call the `setupClickListeners()` function. The `setupClickListeners()` function uses the `addEventListener()` function to add the `clicked()` function as a click listener to the element with the `clickMe` id.

These are just a few examples- like I said, there are a TON of variables and functions you can use to make your webpage interactive. Check out [W3Schools](http://www.w3schools.com/jsref/dom_obj_all.asp) or [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element) for more info, and use Google to find what you're looking for. As always, feel free to ask a question in [the forum](http://forum.HappyCoding.io) if you get stuck!

Like with all programming, the idea is that you should combine all of the above (and whatever you find from reading the documentation and doing Google searches) to accomplish your goal.


## Homework

- What happens if you call the `getElementById()` function with an id that's not on the webpage? What about the other functions? Hint: check your JavaScript console for any errors.
- Change your guessing game to communicate with the user by changing an element on the page instead of showing an alert dialog.
- Create an interactive webpage that plays [rock-paper-scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) against the user.
- You could also create a page that plays a game like [Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)) or [Nim](https://en.wikipedia.org/wiki/Nim).

## Next: [Creating Objects](/tutorials/javascript/creating-objects)


