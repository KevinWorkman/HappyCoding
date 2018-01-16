---
layout: tutorial
title: Libraries
thumbnail: /tutorials/p5js/images/libraries-2.png
tagline: Mix other JavaScript libraries with P5.js
sort-key: 500
meta-title: JavaScript Libraries
meta-description: Mix other JavaScript libraries with P5.js
meta-image: /tutorials/p5js/images/libraries-3.png
tags: [tutorial, p5.js, javascript, libraries]
---

{% include toc.md %}

So far we've learned that P5.js is a JavaScript library, which you can use just like any other JavaScript library. This also means that you can use other JavaScript libraries alongside P5.js.

Like we learned in [the JavaScript libraries tutorial](/tutorials/javascript/libraries), a JavaScript library is just a bunch of JavaScript code that we can use in our JavaScript. To use a JavaScript library, first add a `<script>` tag with a `src` attribute that points to the location of the library:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.4/moment-with-locales.js"></script>
```

The location of the library can be a shared copy of the library, or it can be your own copy of the library that you host alongside your other files.

Anyway, this line tells our HTML to load the JavaScript from the provided URL. After that happens, we can use that JavaScript in our code. In other words, this line loads the [Moment.js](http://momentjs.com/) library.

This is exactly what we're already doing to load the P5.js library:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
```

The point is that if we include both of these lines, then we can use both the P5.js library and the Moment.js library!

## Consulting Documentation

The first step to figuring out how to use a library is to consult its documentation. Most libraries will provide tutorials, examples, and API documentation.

Start at the library's homepage and read through the guides. There's usually a "getting started" section that shows you how to load the library, and then more specific documentation on the individual functions and variables. Get a simple example working, and then work your way forward from there.

When in doubt, Google and [the forum](http://forum.happycoding.io) are your friends.

## Moment.js

The Moment.js library includes code that allows us to format dates and times in a bunch of different languages. This is useful because different countries and languages use different formats for their dates. Here's an example that uses Moment.js to format the current time in both English and Spanish:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>P5.js Example</title>
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

{% include codepen-new.html slug-hash="vWMQJj" height="325" %}

You can read more about Moment.js [here](http://momentjs.com/docs/), but the specifics aren't important right now. Just know that you can use Moment.js to get formatted dates in different languages.

## Combining P5.js and Moment.js

Now that we know how to get formatted dates using Moment.js, let's use that in a P5.js sketch.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>P5.js and Moment.js</title>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.4/moment-with-locales.js"></script>
		<script>
			function setup(){
				createCanvas(500, 200);
			}
			
			function draw(){
        
				var timeEnglish = moment().locale('en').format('LLLL');
				var timeSpanish = moment().locale('es').format('LLLL');
				var timeFrench = moment().locale('fr').format('LLLL');
				var timeGerman = moment().locale('de').format('LLLL');
				var timeKlingon = moment().locale('tlh').format('LLLL');
				var timeArabic = moment().locale('ar').format('LLLL');
        
				background(32);
				textSize(24);
				textAlign(CENTER);
				fill(255);
				text(timeEnglish, width/2, 30);
				text(timeSpanish, width/2, 60);
				text(timeFrench, width/2, 90);
				text(timeGerman, width/2, 120);
				text(timeKlingon, width/2, 150);
				text(timeArabic, width/2, 180);
			}
		</script>
	</head>
	<body>
	</body>
</html>
```

![P5.js and Moment.js](/tutorials/p5js/images/libraries-1.png)

{% include codepen-new.html slug-hash="EoVdvj" height="200" %}

This code creates a P5.js sketch that uses Moment.js to format the time in six different languages.

## P5.js Libraries

In addition to regular JavaScript libraries, there are also libraries designed to work specifically with P5.js. Although you can use pretty much any JavaScript library with P5.js, these libraries are specifically built with P5.js in mind. You can view a list of them [here](https://p5js.org/libraries/).

Using these libraries is exactly like using any other JavaScript library. You start by consulting documentation to read about how it works, then you add a `<script>` tag with a `src` attribute that points to the library, and then you can use the library in your own code.

For example, let's use the **p5.speech** library in a P5.js sketch. Start by looking at [the P5.js libraries page](https://p5js.org/libraries/) and find the p5.speech link, which takes you to the p5.speech homepage [here](http://ability.nyu.edu/p5.js-speech/).

That page contains documentation that tells us where to get the library and how to use it. In real life you'd spend some time reading that stuff, but for now let's just put together a basic example:

```html
<!DOCTYPE html>
<html>
<head>
	<title>P5.js Example</title>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.14/p5.js"></script>
	<script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/837599/p5.speech.js"></script>
	<script>
		var speech = new p5.Speech();

		function setup(){
			createCanvas(200, 200);
			background(32);
			fill(255);
			textSize(36);
			textAlign(CENTER);
			text('Click here!', width/2, height/2);
		}

		function mouseClicked(){
			speech.speak('Happy coding!');
		}
	</script>
</head>
<body>
</body>
</html>
```

{% include codepen-new.html slug-hash="ypemmK" height="200" %}

This code uses the p5.speech library to have the computer say "Happy coding!" whenever the user clicks the mouse. First the code loads the P5.js library, and then it loads the p5.speech library. That means the code can use both libraries, which is exactly what it does. It uses P5.js to set up a canvas and a click listener, and it uses p5.speech to speak the message.

## Summary

These were just examples, but the general idea should apply to any JavaScript library. You should always read the documentation for the library first. Then add a `<script>` tag that points to the library, and then you'll be able to use the library in your code. You can use multiple libraries on the same page.

## Homework

- Take a closer look at the [p5.speech documentation](http://ability.nyu.edu/p5.js-speech/). Try out different pitches, speeds, and voices.
- Try out some other libraries listed on the [P5.js libraries page](https://p5js.org/libraries/).