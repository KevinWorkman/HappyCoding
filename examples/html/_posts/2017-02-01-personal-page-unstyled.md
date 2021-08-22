---
title: Personal Webpage (no styles)
layout: tutorial
thumbnail: /examples/html/images/personal-page-unstyled-1.png
tagline: Check out my basic personal webpage.
sort-key: 510
meta-title: Personal Webpage (no styles)
meta-description: Check out my basic personal webpage.
meta-image: /examples/html/images/personal-page-unstyled-2.png
tags: [example, html]
---

This is an example personal webpage:

<iframe src="/examples/html/files/personal-page-unstyled/home.html" width="95%" height="500px" style="border: thin solid black;"></iframe>

Click [here](/examples/html/files/personal-page-unstyled/home.html) to open the page in its own window.

This page is three files that link to each other:

### [home.html](/examples/html/files/personal-page-unstyled/home.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Personal Page</title>
</head>
<body>
	<a href="home.html">Home</a>
	<a href="about.html">About</a>
	<a href="cats.html">Cat Pictures</a>
	<hr/>
	
	<h1>My Personal Page</h1>
	
	<p>Welcome to my personal page. This is just an example webpage. It doesn't use any CSS styles, so it's pretty ugly.</p>
	
	<hr/>
	<footer>Learn more at <a href="http://HappyCoding.io/examples/html/personal-page-unstyled">HappyCoding.io</a>!</footer>
</body>
</html>
```

### [about.html](/examples/html/files/personal-page-unstyled/about.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>About My Personal Page</title>
</head>
<body>
	<a href="home.html">Home</a>
	<a href="about.html">About</a>
	<a href="cats.html">Cat Pictures</a>
	<hr/>
	
	<h1>About My Personal Page</h1>
	
	<p>This is an example about section. You might explain more about yourself, or the webpage, or give links to other resources.</p>
	
	<p>My name is Kevin. I write programming tutorials at <a href="http://HappyCoding.io">HappyCoding.io</a>, and I have a cat named Stanley. My favorite color is black, but if that doesn't count then I'll choose green. I also like comic books and playing bikes.</p>
		
	<hr/>
	<footer>Learn more at <a href="http://HappyCoding.io/examples/html/personal-page-unstyled">HappyCoding.io</a>!</footer>
</body>
</html>
```

### [cats.html](/examples/html/files/personal-page-unstyled/cats.html)

```html
<!DOCTYPE html>
<html>
<head>
	<title>Cat Pictures! 🐈</title>
</head>
<body>
	<a href="home.html">Home</a>
	<a href="about.html">About</a>
	<a href="cats.html">Cat Pictures</a>
	<hr/>
	
	<h1>Cat Pictures 🐈</h1>
	
	<p>Here are some pictures of my cat, Stanley:</p>
	
	<img src="../images/cat-1.jpg" />
	<img src="../images/cat-2.jpg" />
	<img src="../images/cat-3.jpg" />
	<img src="../images/cat-4.jpg" />
	<img src="../images/cat-5.jpg" />
	<img src="../images/cat-6.jpg" />
		
	<hr/>
	<footer>Learn more at <a href="http://HappyCoding.io/examples/html/personal-page-unstyled">HappyCoding.io</a>!</footer>
</body>
</html>
```



## Tweak Ideas

- Create your own personal page.
- You can use different pages: maybe a page of your favorite songs, or a portfolio of the programs you've created, or poetry, photography, or anything else you've done!
- You could also use this as a start for a business page, or for a group you're a member of.