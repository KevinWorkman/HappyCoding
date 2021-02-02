---
layout: tutorial
title: Libraries
thumbnail: /tutorials/p5js/images/libraries-2.png
tagline: Use libraries to expand what p5.js can do.
sort-key: 2500
meta-title: How to Use p5.js Libraries
meta-description: Mix other JavaScript libraries with p5.js
meta-image: /tutorials/p5js/images/libraries-3.png
previousPost: /tutorials/p5js/web-dev
nextPost: /tutorials/p5js/next
tags: [tutorial, p5.js, javascript, libraries]
updated: 2020-11-28
---

{% include toc.md %}

You've now learned about the [fundamentals of coding](/tutorials/p5js/welcome-to-coding) in p5.js. You know how to write code, and you know how to how to [use objects](/tutorials/p5js/using-objects) and [create your own classes](/tutorials/p5js/creating-classes).

For example, you know how to use the `p5.Vector` class to store a point, and you know how to use the `p5.Image` class to draw an image. You know how to call functions on these objects (like the `p5.Vector.add()` and `p5.Image.resize()` functions) to run code that's inside these classes.

You also know how to modify your sketch's HTML file and how p5.js fits in with [web development](/tutorials/p5js/web-dev).

Now that you know all of that, you can use other JavaScript libraries to expand what p5.js can do.

# p5.js is JavaScript

Like you learned in the [web development tutorial](/tutorial/p5js/web-dev), p5.js is a JavaScript library. A p5.js sketch starts with an HTML file, which loads the p5.js library and your code in the `sketch.js` file. Here's what the default HTML file looks like:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>
    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

Pay special attention to these two lines:

- `<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>` loads the p5.js library.
- `<script src="sketch.js"></script>` loads your code that uses the p5.js library.

Using a JavaScript library is very similar: you load the library, and then you write code that uses the library.

# JavaScript Libraries

There are a ton of JavaScript libraries that do a ton of different things. To find a JavaScript library, try googling terms like "XYZ JavaScript library" where `XYZ` is a task you want to accomplish.

For example, let's say you want to show the current time in different formats. You might google "time format JavaScript library" which would lead you to the [Moment.js](https://momentjs.com/) library.

The Moment.js library includes code that lets you format dates and times in a bunch of different languages. This is useful because different countries and languages use different formats for their dates.

To use a JavaScript library, first add a `<script>` tag with a `src` attribute that points to the location of the library:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.4/moment-with-locales.js"></script>
```

The location of the library can be a shared copy of the library, or it can be your own copy of the library that you upload alongside your other files. Look for a CDN link (like above) in the library documentation.

That line tells your HTML to load the JavaScript library from the provided URL. After that happens, you can use the library in your code.

This is exactly what you've already been doing to load the p5.js library:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
```

If you include both of these lines in your HTML, then you can use both the p5.js library and the Moment.js library in your code!

# Consulting Documentation

The first step to figuring out how to use a library is to consult its documentation. Most libraries provide tutorials, examples, and API documentation.

Start at the library's homepage and read through the guides. There's usually a "getting started" section that shows you how to load the library, and then more specific documentation on the library's individual classes, functions, and variables. Get a small "hello world" example working, and then work your way forward from there.

When in doubt, Google and [the forum](https://forum.happycoding.io) are your friends!

# Moment.js Hello World

Here's an example HTML file that uses Moment.js to format the current time in both English and Spanish:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Moment.js Example</title>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.4/moment-with-locales.js"></script>
		<script>
			document.write(moment().locale('en').format('LLLL'));
      document.write('<br/><br/>');
			document.write(moment().locale('es').format('LLLL'));
		</script>
	</head>
	<body>
	</body>
</html>
```

{% include codepen-new.html slug-hash="rNMazOZ" height="100" %}

You can read more about Moment.js [here](http://momentjs.com/docs/), but the general idea is to start with a "hello world" program to help you understand how a library works, without worrying about making it work with any other code.

# Combining P5.js and Moment.js

Now that you know how to get formatted dates using Moment.js, you can use that in a p5.js sketch.

Start by loading the Moment.js library in your HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>

    <!-- Load the p5.js library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/addons/p5.sound.min.js"></script>

    <!-- Load the Moment.js library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.4/moment-with-locales.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

Then you can use the Moment.js library in your code:

```html
function setup() {
  createCanvas(500, 200);
}

function draw() {

  let timeEnglish = moment().locale('en').format('LLLL');
  let timeSpanish = moment().locale('es').format('LLLL');
  let timeFrench = moment().locale('fr').format('LLLL');
  let timeGerman = moment().locale('de').format('LLLL');
  let timeKlingon = moment().locale('tlh').format('LLLL');
  let timeArabic = moment().locale('ar').format('LLLL');

  background(50);
  textSize(24);
  textAlign(CENTER);
  fill(255);
  text(timeEnglish, width / 2, 30);
  text(timeSpanish, width / 2, 60);
  text(timeFrench, width / 2, 90);
  text(timeGerman, width / 2, 120);
  text(timeKlingon, width / 2, 150);
  text(timeArabic, width / 2, 180);
}
```

![P5.js and Moment.js](/tutorials/p5js/images/libraries-1.png)

This code creates a sketch that uses Moment.js to format the time in six different languages, and p5.js to draw that to the screen. You can play with this example [here](https://editor.p5js.org/KevinWorkman/sketches/zqDJteEjt).

# p5.js Libraries

You can use almost any JavaScript library with p5.js, but some JavaScript libraries are  specifically built with p5.js in mind. You can view a list of them [here](https://p5js.org/libraries/).

Using these libraries is exactly like using any other JavaScript library. You start by consulting documentation to read about how it works, then you add a `<script>` tag with a `src` attribute that points to the library in your HTML, and then you can use the library in your code.

For example, let's use the **p5.speech** library in a P5.js sketch. Start by looking at [the p5.js libraries page](https://p5js.org/libraries/) and find the p5.speech link, which takes you to the p5.speech homepage [here](https://idmnyu.github.io/p5.js-speech/).

That page links to documentation that tells you where to get the library and how to use it. In real life you'd spend some time reading that to become more familiar with the library, but for now here's an example:

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Load the p5.js library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.js"></script>
    
    <!-- Load the p5.Speech library -->
    <script src="p5.speech.js"></script>

    <link rel="stylesheet" type="text/css" href="style.css">
    <meta charset="utf-8" />

  </head>
  <body>
    <script src="sketch.js"></script>
  </body>
</html>
```

**sketch.js**

```javascript
let speech = new p5.Speech();

function setup() {
  createCanvas(200, 200);

  background(32);
  fill(255);
  textSize(36);
  textAlign(CENTER);
  text('Click here!', width / 2, height / 2);
}

function mouseClicked() {
  speech.speak('Happy coding!');
}
```

This code uses the p5.speech library to make the computer say "Happy coding!" whenever the user clicks the mouse. First the HTML loads the p5.js library, and then it loads the p5.speech library. That means the code can use both libraries, which is what the `sketch.js` file does. It uses p5.js to set up a canvas and a `mouseClicked()` function, and it uses p5.speech to speak the message.

You can play with this example [here](https://editor.p5js.org/KevinWorkman/sketches/rfUqDn1ls).

# Summary

These examples used specific libraries, but the general idea should apply to any JavaScript library. You should always read the documentation for the library first. Then add a `<script>` tag to your HTML that points to the library, and then you'll be able to use the library in your JavaScript code. You can use multiple libraries on the same page!

# Homework

- Take a closer look at the [p5.speech documentation](https://idmnyu.github.io/p5.js-speech/). Try out different pitches, speeds, and voices.
- Try out some other libraries listed on the [P5.js libraries page](https://p5js.org/libraries/).