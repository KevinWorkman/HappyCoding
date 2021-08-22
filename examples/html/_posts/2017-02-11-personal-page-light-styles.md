---
title: Personal Webpage (light styles)
layout: tutorial
thumbnail: /examples/html/images/personal-page-light-styles-1.png
tagline: Add styles to your personal webpage.
sort-key: 520
meta-title: Personal Webpage (light styles)
meta-description: Add styles to your personal webpage.
meta-image: /examples/html/images/personal-page-light-styles-2.png
tags: [example, html, css]
---

This is an example personal webpage:

<iframe src="/examples/html/files/personal-page-light-styles/home.html" width="95%" height="500px" style="border: thin solid black;"></iframe>

Click [here](/examples/html/files/personal-page-light-styles/home.html) to open the page in its own window.

This page contains basically the same three HTML files as the [unstyled personal webpage example](/examples/html/personal-webpage-unstyled):

### [home.html](/examples/html/files/personal-page-light-styles/home.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Personal Page</title>
	<link rel="stylesheet" type="text/css" href="light-styles.css">
</head>
<body>
	<div id="content">
		<navigation>
			<a href="home.html">Home</a>
			<a href="about.html">About</a>
			<a href="cats.html">Cat Pictures</a>
		</navigation>
	
		<h1>My Personal Page</h1>
		
		<p>Welcome to my personal page. This is just an example webpage. It uses some simple CSS to make it slightly prettier than the default styles.</p>
		
		<footer>Learn more at <a href="http://HappyCoding.io/examples/html/personal-page-light-styles">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

### [about.html](/examples/html/files/personal-page-light-styles/about.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>About My Personal Page</title>
	<link rel="stylesheet" type="text/css" href="light-styles.css">
</head>
<body>
	<div id="content">
		<navigation>
			<a href="home.html">Home</a>
			<a href="about.html">About</a>
			<a href="cats.html">Cat Pictures</a>
		</navigation>
	
		<h1>About My Personal Page</h1>
		
		<p>This is an example about section. You might explain more about yourself, or the webpage, or give links to other resources.</p>
		
		<p>My name is Kevin. I write programming tutorials at <a href="http://HappyCoding.io">HappyCoding.io</a>, and I have a cat named Stanley. My favorite color is black, but if that doesn't count then I'll choose green. I also like comic books and playing bikes.</p>

		<footer>Learn more at <a href="http://HappyCoding.io/examples/html/personal-page-light-styles">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

### [cats.html](/examples/html/files/personal-page-light-styles/cats.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>Cat Pictures! 🐈</title>
	<link rel="stylesheet" type="text/css" href="light-styles.css">
</head>
<body>
	<div id="content">
		<navigation>
			<a href="home.html">Home</a>
			<a href="about.html">About</a>
			<a href="cats.html">Cat Pictures</a>
		</navigation>
	
		<h1>Cat Pictures 🐈</h1>
		
		<p>Here are some pictures of my cat, Stanley:</p>
		
		<img src="../images/cat-1.jpg" />
		<img src="../images/cat-2.jpg" />
		<img src="../images/cat-3.jpg" />
		<img src="../images/cat-4.jpg" />
		<img src="../images/cat-5.jpg" />
		<img src="../images/cat-6.jpg" />
			
		<footer>Learn more at <a href="http://HappyCoding.io/examples/html/personal-page-light-styles">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

But it also contains a CSS file that contains styles:

### [light-styles.css](/examples/html/files/personal-page-light-styles/light-styles.css)

```css
body{
	background-color:lightgray;	
}

#content{
	width: 600px;
	height: 100%;
	margin-left:auto;
	margin-right:auto;	
	background-color: white;
	padding: 25px;
}

navigation a{
	border: thin solid black;
	padding: 5px;
	border-radius: 25px;
}

navigation a:hover{
	background-color: lightblue;
}

img{
	width:75%;	
}

footer{
	margin-top: 100px;
	border-top: thin solid black;
	font-size: 10pt;
}
```

The three `.html` files load the styles from this file using the `<link rel="stylesheet" type="text/css" href="light-styles.css">` line. These styles change how our webpage looks, even though the content of the HTML hasn't really changed!


## Tweak Ideas

- Create your own personal page.
- You can use different pages: maybe a page of your favorite songs, or a portfolio of the programs you've created, or poetry, photography, or anything else you've done!
- You could also use this as a start for a business page, or for a group you're a member of.
- Create your own CSS styles that make your webpage look however you want!