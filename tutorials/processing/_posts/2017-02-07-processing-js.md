---
layout: tutorial
title: Processing.js
thumbnail: /tutorials/processing/images/processing-js-1.png
tagline: Embed your sketch in a webpage.
sort-key: 1800
meta-title: Processing.js
meta-description: Embed your sketch in a webpage.
meta-image: /tutorials/processing/images/processing-js-2.png
previousPost: /tutorials/processing/exporting-applications
nextPost: /tutorials/processing/next
tags: [tutorial, processing, processing.js]
updated: 2020-11-28
---

{% include toc.md %}

**Note:** Processing.js is no longer actively maintained or recommended. You can learn more [here](/tutorials/p5js/which-processing). If embedding your sketch in a webpage is a priority, then consider using [p5.js](/tutorials/p5js) instead. This Processing.js tutorial will still work for now, but you should not count on it working forever.

---

Processing lets you [export applications](/tutorials/processing/export-applications), which gives you a runnable file. You can upload that file to a site like [Game Jolt](http://gamejolt.com/), [itch.io](https://itch.io/), or even [your own webpage](/tutorials/html/), and then other people can download it and run the application to see your sketch.

But exporting an application does **not** create a webpage that contains your sketch embedded directly in the page itself. You can create a webpage that **links** to the file for download, but it's not embedded in the webpage directly.

If you're using Processing and you want to embed your sketch directly in a webpage, you might be able to use Processing.js!

# Processing.js

[Processing.js](https://github.com/processing-js/processing-js) is a JavaScript library that lets you write Processing code that is then translated into JavaScript and embedded in a webpage.

Processing.js **won't** work if any of the following are true:

- If you used any Java-specific code, like the `File` class.
- If you used a library, like Minim or Video.
- If you used features new to Processing 3, like the `surface` variable or the `settings()` function.

If any of the above are true, then you have to stick with the first approach of [exporting applications](/tutorials/processing/export-applications).

But if none of the above are true, then you can embed your Processing sketch in a webpage using Processing.js. You do this by following these steps:

1. Create an `.html` file.
2. In that HTML file, load the Processing.js library: `<script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.0/processing.min.js"></script>`
3. Then include your Processing code inside a `<script type="application/processing">` tag.

It looks like this:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>My Sketch</title>
    
    <!-- Load the Processing.js library -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/processing.js/1.6.0/processing.min.js"></script>
	</head>
	<body>
		<script type="application/processing">
			void setup(){
				size(200, 200);
			}
			
			void draw(){
				background(50);
				ellipse(mouseX, mouseY, 50, 50);
			}
		</script>
		<canvas> </canvas>
	</body>
</html>
```

[Click here](/tutorials/processing/files/processing-js-sketch.html) to view this HTML file in your browser. See [this tutorial](/tutorials/html/html) for instructions on working with `.html` files, including how to edit and view them. You can learn more about HTML in [the HTML tutorials](/tutorials/html).

# Using HTML and JavaScript with Processing.js

The above `.html` file is a regular HTML page that contains some Processing code, which Processing.js turns into JavaScript code. Because it's a regular HTML page, that means you can add HTML content and CSS styles. You can even call JavaScript code from your Processing code (and vice-versa)! Here's a more complex example:

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

[Click here](/tutorials/processing/files/advanced-processing-js-sketch.html) to view this HTML file in your browser.

This page contains a Processing sketch, as well as other HTML content and CSS styles. The Processing code (which is translated into JavaScript by Processing.js) uses JavaScript's `document.getElementById()` function to change an element that's in the HTML. You can do a lot more than what I've shown here, and I suggest checking out the [HTML](/tutorials/html) and [JavaScript](/tutorials/javascript) tutorials!

# Uploading Processing.js

Here are a few sites that support Processing.js:

- [CodePen](http://codepen.io/) (This is what I use, and I have a Processing.js template [here](http://codepen.io/pen?template=LRzErQ)!)
- [OpenProcessing](http://www.openprocessing.org/)
- [Sketchpad](http://sketchpad.cc/)
- [sketchPatch](http://sketchpatch.net/)
- [Game Jolt](http://gamejolt.com/)
- [itch.io](https://itch.io/)
- You could create [your own webpage](/tutorials/html/) that contains your sketch!

# p5.js

Like I mentioned above, Processing.js is no longer maintained or recommended. It will still work for now, but if embedding your code in a browser is a priority for you, then I recommend learning more about [p5.js](/tutorials/p5js)!

You can also read this tutorial for more info on the differences between the various versions of Processing:

{% include url-thumbnail.html url="/tutorials/p5js/which-processing" %}