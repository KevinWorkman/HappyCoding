---
title: Personal Webpage (default Bootstrap styles)
layout: tutorial
thumbnail: /examples/javascript/images/personal-page-bootstrap-default-1.png
tagline: Use Bootstrap to style your personal webpage.
sort-key: 100
meta-title: Personal Webpage (default Bootstrap styles)
meta-description: Use Bootstrap to style your personal webpage.
meta-image: /examples/javascript/images/personal-page-bootstrap-default-2.png
tags: [example, javascript, html, css, bootstrap]
---

This is an example personal webpage:

<iframe src="/examples/javascript/files/personal-page-bootstrap-default/home.html" width="95%" height="500px" style="border: thin solid black;"></iframe>

Click [here](/examples/javascript/files/personal-page-bootstrap-default/home.html) to open the page in its own window.

This page contains basically the same three HTML files as the [unstyled](/examples/html/personal-webpage-unstyled), [light styled](/examples/html/personal-webpage-light-styles), and the [dark styled](/examples/html/personal-webpage-dark-styles) personal webpage examples:

### [home.html](/examples/javascript/files/personal-page-bootstrap-default/home.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Personal Page</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
</head>
<body>
	<div class="container">
		<nav class="navbar navbar-default">
			<ul class="nav navbar-nav">
				<li class="active"><a href="home.html">Home</a></li>
				<li><a href="about.html">About</a></li>
				<li><a href="cats.html">Cat Pictures</a></li>
			</ul>
		</nav>
	
		<div class="jumbotron">
			<p>Admit it. You just came here for the cat pictures.</p>
			<p><a class="btn btn-primary btn-lg" href="cats.html" role="button">Meow</a></p>
		</div>
		
		<h1>My Personal Page</h1>
		
		<p>Welcome to my personal page. This is just an example webpage. It uses Bootstrap!</p>
	
		<footer>Learn more at <a href="http://HappyCoding.io/examples/javascript/personal-page-bootstrap-default">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

### [about.html](/examples/javascript/files/personal-page-bootstrap-default/about.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>About My Personal Page</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
</head>
<body>
	<div class="container">
		<nav class="navbar navbar-default">
			<ul class="nav navbar-nav">
				<li><a href="home.html">Home</a></li>
				<li class="active"><a href="about.html">About</a></li>
				<li><a href="cats.html">Cat Pictures</a></li>
			</ul>
		</nav>
	
		<h1>About My Personal Page</h1>
		
		<p>This is an example about section. You might explain more about yourself, or the webpage, or give links to other resources.</p>
		
		<p>My name is Kevin. I write programming tutorials at <a href="http://HappyCoding.io">HappyCoding.io</a>, and I have a cat named Stanley. My favorite color is black, but if that doesn't count then I'll choose green. I also like comic books and playing bikes.</p>

		<footer>Learn more at <a href="http://HappyCoding.io/examples/javascript/personal-page-bootstrap-default">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

### [cats.html](/examples/javascript/files/personal-page-bootstrap-default/cats.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>Cat Pictures! 🐈</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">
	<style>
		img{
			width:75%;	
		}
	</style>
</head>
<body>
	<div class="container">
		<nav class="navbar navbar-default">
			<ul class="nav navbar-nav">
				<li><a href="home.html">Home</a></li>
				<li><a href="about.html">About</a></li>
				<li class="active"><a href="cats.html">Cat Pictures</a></li>
			</ul>
		</nav>
	
		<h1>Cat Pictures 🐈</h1>
		
		<p>Here are some pictures of my cat, Stanley:</p>
		
		<div class="row">
			<img class="col-xs-12 col-md-4" src="http://happycoding.io/examples/html/files/images/cat-1.jpg" />
			<img class="col-xs-12 col-md-4" src="http://happycoding.io/examples/html/files/images/cat-2.jpg" />
			<img class="col-xs-12 col-md-4" src="http://happycoding.io/examples/html/files/images/cat-3.jpg" />
		</div>
		
		<div class="row">
			<img class="col-xs-12 col-md-4" src="http://happycoding.io/examples/html/files/images/cat-4.jpg" />
			<img class="col-xs-12 col-md-4" src="http://happycoding.io/examples/html/files/images/cat-5.jpg" />
			<img class="col-xs-12 col-md-4" src="http://happycoding.io/examples/html/files/images/cat-6.jpg" />
		</div>
			
		<footer>Learn more at <a href="http://HappyCoding.io/examples/javascript/personal-page-bootstrap-default">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

The major difference is that each file loads the default [Bootstrap](http://getbootstrap.com/) style file: `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.css">`

Most of the HTML content is the same, but I've added a few Bootstrap classes to the elements to style them using Bootstrap. I've also added a jumbotron (the big announcement-looking thing) to the home page, and I've used Bootstrap's grid to show the cat pictures in different arrangements depending on screen size- try changing the window width! Also notice that the `cats.html` file contains its own `<style>` tag that sets the size of images- this style **cascades** (combines) with Bootstrap's styles to create the end result.

## Tweak Ideas

- Use Bootstrap to style your own personal webpage.
- We haven't even used Bootstrap's JavaScript library. Use it to add some interactive components!