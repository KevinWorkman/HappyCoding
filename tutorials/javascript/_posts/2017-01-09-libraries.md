---
layout: tutorial
title: Libraries
slug: libraries
thumbnail: /tutorials/javascript/images/libraries-1.png
tagline: Learn about using libraries in JavaScript.
sort-key: 700
meta-title: Using JavaScript Libraries
meta-description: Learn about using libraries in JavaScript.
meta-image: /tutorials/html/javascript/libraries-2.png
tags: [tutorial, javascript, basic]
---

Now you know how to write JavaScript code, how to use functions like `getElementById()` to make your webpage interactive, and how to create objects using function constructors and object literals.

This tutorial takes all of that and shows you how to use JavaScript libraries.

## Loading JavaScript

Remember that you can use the `src` attribute of the `<script>` tag to load JavaScript files into your webpage. So if you had a file named `MyScript.js` that contained this code:

```javascript
console.log("I'm some JavaScript!");
```

You could load that JavaScript into your webpage using the `<script>` tag with a `src` attribute that pointed at your `MyScript.js` file:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<script src="MyScript.js"></script>
	</head>
	<body>
		<p>Happy coding!</p>
	</body>
</html>
```

You can also split your JavaScript up into multiple files. So you can have one JavaScript file that defines some objects and functions, and then use those in another JavaScript file, or in your html.

Let's say you have this code in a file named `MyObject.js`:

```javascript
function MyObject(id, message){
	this.id = id;
	this.message = message;

	this.printMessage = function(){
		document.getElementById(this.id).innerHTML = this.message;
	}
}
```

This code defines a function constructor that creates an object that contains a `printMessage()` function that sets the content of an element. But notice that we don't actually call this code yet!

Then you could have another file named `MyClickEvent.js`:

```javascript
function clicked(){
	myObj.printMessage();
}
```

This code defines another function that simply calls the `myObj.printMessage()` function. Notice that we still haven't called this code. We haven't even defined the `myObj` variable yet!

Finally, in our `index.html` file, we can load the `MyObject.js` file and the `MyClickEvent.js` file, and we can write JavaScript code inside a `<script>` tag:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<script src="MyScript.js"></script>
		<script src="MyClickEvent.js"></script>
		<script>
			var myObj = new MyObject("clickMe", "You clicked!");
		</script>
	</head>
	<body>
		<p id="clickMe" onclick="clicked()">Click here.</p>
	</body>
</html>
```

This example is a little contrived, but the point is that you can split your JavaScript between files, and you can use a mix of `<script>` tags that load files, `<script>` tags that contain JavaScript code, and JavaScript inside your HTML.

And here's the point of this tutorial: **the JavaScript you link to can be written by somebody else!**

This lets you use JavaScript libraries (which is just a bunch of JavaScript code written by somebody else) in your own code.

Here's an example:

## Google Maps

Google Maps has a JavaScript library that's located at [http://maps.googleapis.com/maps/api/js](http://maps.googleapis.com/maps/api/js). You can click that link if you want to see the code, but it won't make much sense because it's [minified](https://en.wikipedia.org/wiki/Minification_(programming)). The real value of that url is that you can point a `<script>` tag's `src` attribute at it:

```html
<script src="http://maps.googleapis.com/maps/api/js"></script>
```

And then you can use the Google Maps JavaScript library in your code! In other words, you can write code that uses objects and functions written by the Google Maps team.

You can consult [the Google Maps JavaScript library documentation](https://developers.google.com/maps/documentation/javascript/tutorial) for more info, but here's a basic example:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Google Map Example</title>
	<script src="http://maps.googleapis.com/maps/api/js"></script>
	<script>
		function createMap() {
		
			var element = document.getElementById('map');
		
			var mapOptions = {
				center: {lat: 43.723, lng: 10.396},
				zoom: 18,
				mapTypeId: 'satellite'
			};
		
			var map = new google.maps.Map(element, mapOptions);
		}
	</script>

</head>
<body onload="createMap()">
	<div id="map" style="width:500px;height:500px;"></div>
</body>
</html>
```

This code first loads the Google Maps JavaScript library, and then it defines a `createMap()` function that uses that library. That function calls the `getElementById()` function to get the element the map should be added to, and then creates an object literal that contains the options for creating the map. Finally, it calls the `google.maps.Map()` function constructor, passing in the `element` and `mapOptions` parameters.

The `google.maps.Map()` function constructor is provided by the Google Maps JavaScript library, and it contains all of the code for adding the map to the element we gave it, fetching the images for the map, the street names, etc. The end result is a map that shows us the [Leaning Tower of Pisa](https://en.wikipedia.org/wiki/Leaning_Tower_of_Pisa):

{% include codepen.html slug-hash="OWMZpz" height="575" %}

Just for fun, note that we could have done all of the above in a single line of code: 

```javascript
new google.maps.Map(document.getElementById('map'), {center: {lat: 43.723, lng: 10.396}, zoom: 18, mapTypeId: 'satellite'});
```

In real life I'd probably prefer the longer code since it's more readable, but this is just to show you the power of using libraries: in just one line of code, we've created a Google Map and added it to our page. We don't have to worry about what's happening inside the library. Somebody else wrote it for us!

And we can do much more than that with the library. To find out what you can do, always check out the documentation. [Here](https://developers.google.com/maps/documentation/javascript/tutorial) is the documentation for the Google Maps JavaScript library. That might seem overwhelming, but usually I start by doing a quick read-through of the different features that are available, then I do a search for the specific feature I want to use.

For example, after a `google.maps.Map` object is  created, we can use the `google.maps.Marker` object to add a pin to the map. [Here](https://developers.google.com/maps/documentation/javascript/markers) is the documentation on adding a marker to a Google Map, and here is an example:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Google Map Example</title>
	<script src="http://maps.googleapis.com/maps/api/js"></script>
	<script>
		function createMap() {
			var element = document.getElementById('map');
		
			var mapOptions = {
				center: {lat: 0, lng: -75},
				zoom: 1,
				mapTypeId: 'satellite'
			};
		
			var map = new google.maps.Map(element, mapOptions);
      
			var empireStateBuilding = new google.maps.Marker({
				position: {lat:40.7484, lng: -73.9856},
				map: map
			});
			
			var itaipuDam = new google.maps.Marker({
				position: {lat:-25.408, lng: -54.5888},
				map: map
			});
			
			var cnTower = new google.maps.Marker({
				position: {lat:43.6426, lng: -79.3871},
				map: map
			});
			
			var panamaCanal = new google.maps.Marker({
				position: {lat:9.08, lng: -79.68},
				map: map
			});
			
			var channelTunnel = new google.maps.Marker({
				position: {lat:51.0125, lng: 1.5041},
				map: map
			});
			
			var northSea = new google.maps.Marker({
				position: {lat:56, lng: 3},
				map: map
			});
			
			var goldenGateBridge = new google.maps.Marker({
				position: {lat:37.8197, lng: -122.4786},
				map: map
			});
		}
	</script>

</head>
<body onload="createMap()">
	<div id="map" style="width:500px;height:500px;"></div>
	<p>This map shows the <a href="https://en.wikipedia.org/wiki/American_Society_of_Civil_Engineers#World_wonders">Engineering Wonders of the World</a>. Zoom in to see them!</p>
</body>
</html>
```

This code loads the Google Maps JavaScript library, creates a map, and then adds pins on top of the [Engineering Wonders of the World](https://en.wikipedia.org/wiki/American_Society_of_Civil_Engineers#World_wonders).

{% include codepen.html slug-hash="ggrgqM" height="625" %}

Notice that this page also contains a `<p>` tag as well as the Google Map. There's nothing stopping you from mixing regular html content (including interactive content) with a JavaScript library!

Again, there's a ton more you can do with the Google Maps JavaScript library. You can interact with the user by detecting their clicks, you can add different types of content to the map, and you can visualize all sorta of geospatial data.

I've used the Google Maps library as an example just because I think it's fun to play with, but there are a **ton** of other libaries out there.

## Consulting Documentation

This might seem a little overwhelming: how do you know what objects and functions are offered by a library? How do you know what code you should write to make something happen?

Figuring out the answers to those questions is a huge part of what programming is. So if you feel confused and lost, that's okay! Here are a few tips to help you through the process:

- **Find the documentation.** This should always be your first step. Start by Googling "[your library's name] JavaScript library" to find the library's website, which should include documentation. For example, searching for "google maps javascript library" leads to [this page](https://developers.google.com/maps/documentation/javascript/tutorial), which contains tutorials, examples, and guides on using the library.
- **Read through the documentation.** You don't have to memorize anything, and you don't have to become an expert in the library. But you should read through the different sections of the documentation. Get a high-level understanding of the different features offered by the library. Don't write any code yet. But spend some time becoming familiar with the library. You should be able to write a one-paragraph summary of what the library does and some of its main features.
- **Break your problem down into smaller steps.** If you have a big goal, you can start to feel like you don't even know where to start. If so, then you need to split your goal up into smaller sub-goals. For example, if my goal is to show some pins on a map, I might break that up into smaller steps: First, can I just show a map without any pins? Then can I show a single pin? Now how about two pins? Focus on one small step at a time.
- **Go back to the documentation.** Now that you have a single small step in mind, go back to the documentation and read about that particular small step in more detail.
- **Write test programs.** If you're working in small steps this should be pretty easy. But don't just work out of a single file that contains your end goal project. Write simple programs that test out just one feature of the library before you try integrating it into your actual project. Read the examples in the documentation.
- **Don't be afraid to Google.** If you're stuck on a particular step, then try Googling that step. For example, searching for "Google Maps JavaScript library add marker to map" returns a ton of results. Try to work that into the test program you're writing.
- **Don't be afraid to post on [the forum](http://forum.HappyCoding.io).** Post the test program that contains the step you're working on, and explain where you're stuck. You'd be surprised how often you figure out the answer while you're typing the question!

## Homework

- Create a Google Map that shows your favorite places in your home town. Put a pin at each location, and when the user clicks the pin show a description of what you like about that place. You could even add pictures you've taken!
- The [Google Charts Library](https://developers.google.com/chart/) allows you to create interactive charts. Create a visualization of a simple data set.
- Find another JavaScript library that does something cool and use it! (I'd love to see what you find!)
