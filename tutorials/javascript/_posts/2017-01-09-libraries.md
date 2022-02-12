---
layout: tutorial
title: Libraries
slug: libraries
thumbnail: /tutorials/javascript/images/libraries-1.png
tagline: Learn about using libraries in JavaScript.
sort-key: 900
meta-title: Using JavaScript Libraries
meta-description: Learn about using libraries in JavaScript.
meta-image: /tutorials/html/javascript/libraries-1.png
tags: [tutorial, javascript, libraries]
previousPost: /tutorials/javascript/if-statements
nextPost: /tutorials/javascript/fetch
lastUpdated: 2021-03-19
---

{% include toc.md %}

Now you know how to write JavaScript code, and how to use functions like `getElementById()` to make your webpage interactive. Also remember [using objects](/tutorials/p5js/using-objects) and [creating classes](/tutorials/p5js/creating-classes) from the [p5.js tutorials](/tutorials/p5js)!

This tutorial takes all of that and shows you how to use JavaScript libraries.

# Loading JavaScript

Remember that you can use the `src` attribute of the `<script>` tag to load JavaScript files into your webpage. Let's say you have this file:

**dom-tools.js**

```javascript
function createUlElement(items) {
  const ulElement = document.createElement('ul');
  for (const item of items) {
    const liElement = createLiElement(item);
    ulElement.appendChild(liElement);
  }
  return ulElement;
}

function createLiElement(text) {
  const liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode(text));
  return liElement;
}
```

You could load that JavaScript into your webpage using the `<script>` tag with a `src` attribute that pointed at your `dom-tools.js` file:

```html
<script src="dom-tools.js"></script>
```

And then you could write more JavaScript code that called the functions that were defined in your `dom-tools.js` file.

Here's an example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Referencing HTML Elements</title>
    <script src="dom-tools.js"></script>
    <script>
      function addFavoriteAnimalList() {
        const ulElement = createUlElement(['lions', 'tigers', 'bears']);
        const animalContainer = document.getElementById('animal-container');
        animalContainer.appendChild(ulElement);
      }
    </script>
  </head>
  <body onload="addFavoriteAnimalList();">
    <p>These are my favorite animals:</p>
    <div id="animal-container"></div>
  </body>
</html>
```

You could also move the `addFavoriteAnimalList()` function into its own separate JavaScript file.

This example is a little contrived, but the point is that you can split your JavaScript between multiple files, and you can use a mix of `<script>` tags that load files, `<script>` tags that contain JavaScript code, and JavaScript inside your HTML. And after you load a JavaScript file, you can use the objects and functions defined in that file in subsequent JavaScript files.

And here's the magic part of this tutorial: **the JavaScript you load can be written by somebody else!**

JavaScript libraries are a bunch of JavaScript code written by somebody else, and you can load them in your HTML to use the library's code in your own code.

# p5.js

Let's start with an example that you're probably already familiar with!

If you've already read through the [p5.js tutorials](/tutorials/p5js), then you know that p5.js is a JavaScript library that helps you create animated, interactive webpages. Here's an example:

```html
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/p5@1.3.0/lib/p5.js"></script>
    <script>
      function setup() {
        createCanvas(500, 500);
        background(32);
      }

      function draw() {
        fill(random(255), random(255), random(255));
        circle(random(width), random(height), 25);
      }
    </script>
  </head>
  <body>
    <h1>My Sketch</h1>
  </body>
</html>
```

{% include codepen-new.html slug-hash="PobMamd" height="300" %}

This file first loads the p5.js JavaScript library:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.3.0/lib/p5.js"></script>
```

Then the file includes JavaScript that calls the functions defined by the p5.js library:

```javascript
function setup() {
  createCanvas(500, 500);
  background(32);
}

function draw() {
  fill(random(255), random(255), random(255));
  circle(random(width), random(height), 25);
}
```

Notice that the code does not define functions like `createCanvas()` or `circle()`. Those are defined by the p5.js library! And because the file first loads the p5.js library, this code can then access those functions. You could also move this JavaScript into its own `sketch.js` file.

![p5.js sketch](/tutorials/javascript/images/libraries-3.png)

You can see how the p5.js library works by visiting this file directly: [https://cdn.jsdelivr.net/npm/p5@1.3.0/lib/p5.js](https://cdn.jsdelivr.net/npm/p5@1.3.0/lib/p5.js). The file is pretty big and contains some complicated syntax, but the idea is the same as what you've seen so far: this file defines some functions and classes, which you can then use in your own JavaScript code!

# Finding Libraries

There are a ton of libraries out there. Don't be afraid to search for them!

For example, let's say you wanted to make the default dialog box that pops up when you call the `alert()` function a little more interesting.

```html
<html>
  <head>
    <script>
      function sayHello() {
        alert('Hello world!');
      }
    </script>
  </head>
  <body>
    <button onclick="sayHello()">Click me!</button>
  </body>
</html>
```

![boring alert](/tutorials/javascript/images/libraries-4.png)

You might start by googling for things like "JavaScript alert library" or "JavaScript dialog library". You'd probably find a few different options, like [SweetAlert](https://sweetalert.js.org/) or [Micromodal.js](https://micromodal.now.sh/).

The best thing you can do is try a few different options out and see which one you like the best!

Here's the same example using the SweetAlert library:

```html
<html>
  <head>
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script>
      function sayHello() {
        swal('Hello world!');
      }
    </script>
  </head>
  <body>
    <button onclick="sayHello()">Click me!</button>
  </body>
</html>
```

{% include codepen-new.html slug-hash="PobMamd" height="300" %}

![beautiful alert](/tutorials/javascript/images/libraries-5.png)

# Consulting Documentation

Even after you find a library, learning how to use it might seem a little overwhelming: how do you know what objects and functions are offered by a library? How do you know what code you should write to make something happen?

Figuring out the answers to those questions is a huge part of coding. So if you feel confused, that's normal! Here are a few tips to help you through the process:

- **Find the documentation.** This should always be your first step. Start by reading through the library's website, which should include documentation. For example, the [Sweet Alert guides](https://sweetalert.js.org/guides/)  contain examples that use the library.
- **Read through the documentation.** You don't have to memorize anything, and you don't have to become an expert in the library. But you should read through the different sections of the documentation. Get a high-level understanding of the different features offered by the library. Spend some time becoming familiar with the library. You should be able to write a one-paragraph summary of what the library does and some of its main features.
- **Break your problem down into smaller steps.** If you have a big goal, you can start to feel like you don't even know where to start. If so, then you need to split your goal up into smaller sub-goals. For example, if my goal was to show an input element in an alert box, I would start by getting a normal alert working, and then I'd work my way forward from there.
- **Go back to the documentation.** Now that you have a single small step in mind, go back to the documentation and read about that particular small step in more detail.
- **Write test programs.** If you're working in small steps this should come pretty naturally. Don't just work out of a single file that contains your end goal project. Write smaller standalone programs that test out just one feature of the library before you try integrating it into your bigger project. I almost always have a standalone `index.html` file on my dekstop that I use for testing smaller parts by themselves.
- **Don't be afraid to Google.** If you're stuck on a particular step, then try Googling that step. For example, searching for "SweetAlert show input" returns a bunch of results. Try to work that into the test program you're writing.
- **Don't be afraid to post on [the forum](https://forum.HappyCoding.io).** Post the test program that contains the step you're working on, and explain where you're stuck. You'd be surprised how often you figure out the answer [while you're typing the question](https://en.wikipedia.org/wiki/Rubber_duck_debugging)!

# Homework

- Use the SweetAlert library to show an alert that asks the user for their name, and then shows another alert that says `"Hello [your name]!"`.
- The [Google Charts Library](https://developers.google.com/chart/) lets you create interactive charts. Create a visualization of an interesting data set.
- Find another JavaScript library that does something cool and use it! I'd love to see what you find, so don't be afraid to post on [the forum](https://forum.HappyCoding.io)!
