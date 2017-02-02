---
title: Rainbow Logo
layout: tutorial
thumbnail: /examples/html/images/rainbow-logo-1.png
tagline: Use CSS to create a rainbow logo!
sort-key: 100
meta-title: Rainbow Logo
meta-description: This example shows how to use CSS to create a rainbow logo.
meta-image: /examples/html/images/rainbow-logo-2.png
tags: [example, html, css]
---

This program uses the `<span>` class to style each individual letter in the text `Happy Coding!`. It then uses a mix of internal styles inside the `<head>` section and inline styles on each `<span>` tag to create a rainbow logo on a black background.

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Happy Coding</title>
		<style>
			body{
				background:black;
				text-align:center;
				font-size:96pt;
				font-family: "Lucida Console", Monaco, monospace;
			}
			
			p{
				line-height: 0pt;	
			}
		</style>
	</head>
	<body>
		<p>
			<span style="color:orange">H</span><span style="color:yellow">a</span><span style="color:green">p</span><span style="color:blue">p</span><span style="color:indigo">y</span>
		</p>
		<p>
			<span style="color:red">C</span><span style="color:orange">o</span><span style="color:yellow">d</span><span style="color:green">i</span><span style="color:blue">n</span><span style="color:indigo">g</span><span style="color:violet">!</span>
		</p>
	</body>
</html>
```

![rainbow logo](/examples/html/images/rainbow-logo-3.png)

{% include codepen.html slug-hash="zodxYj" height="375" %}

If this seems confusing, try to split the `<span>` tags up to better see what they're doing:

```html
<p>
	<span style="color:orange">H</span>
	<span style="color:yellow">a</span>
	<span style="color:green">p</span>
	<span style="color:blue">p</span>
	<span style="color:indigo">y</span>
</p>
<p>
	<span style="color:red">C</span>
	<span style="color:orange">o</span>
	<span style="color:yellow">d</span>
	<span style="color:green">i</span>
	<span style="color:blue">n</span>
	<span style="color:indigo">g</span>
	<span style="color:violet">!</span>
</p>
```

(Note that actually formatting this way will add spaces between our letters. This is just to make it easier to see what's going on.)

The `<span>` tag is just a block of text that doesn't get its own line like the `<p>` tag, so it can be used to style a part of a paragraph, or even a single letter like above. Then we just use inline styles to give each letter a different color. The rest of the styles (the black background, font size, and centered text) come from the internal styles in the `<head>` section.

## Tweak Ideas

- Change the colors so they fade from one color to another instead of a rainbow.
- Use this type of logic to create a logo for your own personal webpage.