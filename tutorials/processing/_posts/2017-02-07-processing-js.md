---
layout: tutorial
title: Processing.js
thumbnail: /tutorials/processing/images/processing-js-1.png
tagline: Embed your sketch in a webpage.
sort-key: 1800
meta-title: Processing.js
meta-description: Embed your sketch in a webpage.
meta-image: /tutorials/processing/images/processing-js-2.png
tags: [tutorial, processing, basic]
---

Processing allows you to [export applications](/tutorials/processing/export-applications), which gives you a `.zip` file that runs on a particular operating system. You can then upload that file (to a site like [Game Jolt](http://gamejolt.com/) or [itch.io](https://itch.io/), or even [your own webpage](/tutorials/html/)), and then other people can download it, unzip it, and run the application to see your sketch.

But that process does **not** create a webpage that contains your sketch embedded directly in the page itself. You can create a webpage that **links** to the files for download, but it's not embedded in the webpage itself.

Embedding your sketch directly in a webpage makes it easier for users to run it, since they don't have to download, unzip, and run your application. It just shows up in the browser. You can do this using Processing.js!

## Processing.js

[Processing.js](http://processingjs.org/) is a JavaScript library that allows you to write Processing code that is then translated into JavaScript and embedded in a webpage.

**Note:** Processing.js **won't** work if any of the following are true:

- If you used any Java-specific code, like the `File` class.
- If you used a library, like Minim or Video.
- If you used features new to Processing 3, like the `surface` variable or the `settings()` function.

If any of the above are true, then you have to stick with the first approach of [exporting applications](/tutorials/processing/export-applications).

But if none of the above are true, then you can embed your Processing sketch in a webpage using Processing.js. You do this by creating a `.html` file that loads the Processing.js library, and then includes your Processing code.

It looks like this:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>My Sketch</title>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.0/processing.min.js"></script>
	</head>
	<body>
		<script type="application/processing">
			void setup(){
				size(200, 200);
			}
			
			void draw(){
				background(64);
				ellipse(mouseX, mouseY, 20, 20);
			}
		</script>
		<canvas> </canvas>
	</body>
</html>
```

[Click here](/tutorials/processing/files/simple-processing-js-sketch.html) to view this file in your browser, or right-click to save it to use as a template. See [this](/tutorials/html/html) tutorial for instructions on working with `.html` files, including how to edit and view them.

You can learn more about HTML in [the HTML tutorials](/tutorials/html), but for now you just need to know that your Processing code goes in the `<script type="application/processing">` tag.

## Using HTML and JavaScript with Processing.js

The above `.html` file is just a regular html page with some Processing code (which Processing.js turns into JavaScript code), so you can add HTML content and CSS styles. You can even call JavaScript code from your Processing code (and vice-versa)! Here's a more advanced example:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>My Advanced Sketch</title>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.0/processing.min.js"></script>

		<style>
			body{
				background-color: gray;
				text-align: center;
			}
		</style>
	</head>
	<body>
		<h1>My Advanced Example Sketch</h1>
		<script type="application/processing">
			void setup(){
				size(200, 200);
				backgroundShade = random(255);
			}
			
			void draw(){
				background(64);
				ellipse(mouseX, mouseY, 20, 20);
				
				document.getElementById("label").innerHTML = "Mouse coordinates: " + mouseX + ", " + mouseY;
			}
		</script>
		<canvas id="sketch"> </canvas>
		<p id="label"></p>
	</body>
</html>
```

[Click here](/tutorials/processing/files/advanced-processing-js-sketch.html) to see this in action.

Now our page contains other HTML content and CSS styles, and our Processing code calls JavaScript functions. You can do a lot more than what I've shown here, and I suggest checking out [the Processing.js reference](http://processingjs.org/articles/p5QuickStart.html)!

## Uploading Processing.js

Here are a few sites that support Processing.js:

- [CodePen](http://codepen.io/) (This is what I use, and I have a Processing.js template [here](http://codepen.io/pen?template=LRzErQ)!)
- [OpenProcessing](http://www.openprocessing.org/)
- [Sketchpad](http://sketchpad.cc/)
- [sketchPatch](http://sketchpatch.net/)
- [Game Jolt](http://gamejolt.com/)
- [itch.io](https://itch.io/)
- You could create [your own webpage](/tutorials/html/) that contains your sketch!

## Homework

- Post a link to your sketch on [the forum](http://forum.HappyCoding.io)!
- Want to make your Processing.js prettier? Check out [the HTML tutorials]([your own webpage](/tutorials/html/) )!
