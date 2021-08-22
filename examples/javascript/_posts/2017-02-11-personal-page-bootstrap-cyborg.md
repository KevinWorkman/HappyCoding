---
title: Personal Webpage (Cyborg Bootstrap theme)
layout: tutorial
thumbnail: /examples/javascript/images/personal-page-bootstrap-cyborg-1.png
tagline: Use Bootstrap themes to style your personal webpage.
sort-key: 200
meta-title: Personal Webpage (Cyborg Bootstrap theme)
meta-description: Use Bootstrap themes to style your personal webpage.
meta-image: /examples/javascript/images/personal-page-bootstrap-cyborg-2.png
tags: [example, javascript, html, css, bootstrap]
---

This is an example personal webpage:

<iframe src="/examples/javascript/files/personal-page-bootstrap-cyborg/home.html" width="95%" height="500px" style="border: thin solid black;"></iframe>

Click [here](/examples/javascript/files/personal-page-bootstrap-cyborg/home.html) to open the page in its own window.

This page contains the exact same three HTML files as the [default Bootstrap styled personal webpage](/examples/javascript/personal-page-bootstrap-default) example:

### [home.html](/examples/javascript/files/personal-page-bootstrap-cyborg/home.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Personal Page</title>
	<link rel="stylesheet" href="http://bootswatch.com/cyborg/bootstrap.css">
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
	
		<footer>Learn more at <a href="http://HappyCoding.io/examples/javascript/personal-page-bootstrap-cyborg">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

### [about.html](/examples/javascript/files/personal-page-bootstrap-cyborg/about.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>About My Personal Page</title>
	<link rel="stylesheet" href="http://bootswatch.com/cyborg/bootstrap.css">
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

		<footer>Learn more at <a href="http://HappyCoding.io/examples/javascript/personal-page-bootstrap-cyborg">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

### [cats.html](/examples/javascript/files/personal-page-bootstrap-cyborg/cats.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>Cat Pictures! 🐈</title>
	<link rel="stylesheet" href="http://bootswatch.com/cyborg/bootstrap.css">
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
			
		<footer>Learn more at <a href="http://HappyCoding.io/examples/javascript/personal-page-bootstrap-cyborg">HappyCoding.io</a>!</footer>
	</div>
</body>
</html>
```

The **only** difference is that instead of the default [Bootstrap](http://getbootstrap.com/) style, each `.html` file loads the [Cyborg theme](https://bootswatch.com/cyborg/) from [Bootswatch](https://bootswatch.com/): `<link rel="stylesheet" href="http://bootswatch.com/cyborg/bootstrap.css">`

The rest of the HTML content is the same. But since we're loading the styles from the theme's `.css` file, all of our content has a cool dark theme!

## Tweak Ideas

- Use Bootstrap themes to style your own personal webpage.
- We haven't even used Bootstrap's JavaScript library. Use it to add some interactive components!