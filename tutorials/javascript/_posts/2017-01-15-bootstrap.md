---
layout: tutorial
title: Bootstrap
thumbnail: /tutorials/javascript/images/bootstrap-1.png
tagline: Create a website using Bootstrap.
sort-key: 900
meta-title: Bootstrap
meta-description: Create a website using Bootstrap.
meta-image: /tutorials/html/javascript/bootstrap-2.png
tags: [tutorial, javascript, css, bootstrap]
lastUpdated: 2021-03-22
---

**Note:** I wrote this tutorial back in 2017. Since then, I've personally stopped using Bootstrap. I'm leaving this tutorial up for now, but I recommend using vanilla JavaScript and CSS instead!

---

{% include toc.md %}

At this point you should have created a few webpages, changed how they look using CSS, and made them interactive using JavaScript. You should also have a basic understanding of [jQuery](/tutorials/html/jquery). If not, then you should probably come back to this tutorial after you've done a few more projects!

This tutorial introduces Bootstrap, which is a JavaScript library and a set of CSS styles you can use in your own webpages.

# Bootstrap

Bootstrap is really two things:

- It's a bunch of predefined CSS you can use to style your webpage.
- It's a JavaScript library that makes your webpage interactive.

Bootstrap is written using kQuery, which means that the people who wrote Bootstrap used objects and functions from the jQuery libary. So to use Bootstrap, you have to load JQuery first:

```html
<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
```

Then you have to load both the Bootstrap JavaScript and the Bootstrap CSS:

```html
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

Now that you've loaded the CSS and the JavaScript, you can use both in your page. Let's talk about them one at a time:

# Bootstrap CSS

By now you know that you can style your webpage using CSS. You create a `.css` file that contains style rules, and then you use those style rules by setting the `id` and `class` attributes of your html elements.

Bootstrap provides a `.css` file with a bunch of style rules that you can use to style your webpage.

For example, look at this page that contains **unstyled** content:

{% include codepen-new.html slug-hash="VPKWrG" height="275" %}

I've set the `class` attribute of some of these elements, but I haven't written any styles for those classes so everything has the default styling. At this point I could write a `.css` file that styles the content. Or I could use the `.css` file that Bootstrap provides!

{% include codepen-new.html slug-hash="qRajxo" height="275" %}

The only thing that changed is I've added the Bootstrap CSS file (and I've added JQuery and the Bootstrap JavaScript, which technically doesn't do anything yet). In that CSS, Bootstrap contains styles for the classes I used.

# Bootstrap JavaScript

The other half of Bootstrap is its JavaScript library, which contains objects and functions that let you create interactive elements. This is usually done automatically based on the `class` attributes in your page, so you usually don't have to write any JavaScript yourself.

Here's an example that creates an interactive dropdown menu:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Bootstrap Dropdown Example</title>
	
	<script src="https://code.jquery.com/jquery-2.2.4.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
	<div class="dropdown">
		<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Oh My</button>
		<ul class="dropdown-menu">
			<li><a href=".">Lions</a></li>
			<li><a href=".">Tigers</a></li>
			<li><a href=".">Bears</a></li>
		</ul>
	</div>
</body>
</html>
```

This HTML contains a `<div>` element, which contains a `<button>` and a `<ul>` list. Without Bootstrap, those elements would look like this:

<hr />
<button>Oh My</button>

<ul>
	<li><a href=".">Lions</a></li>
	<li><a href=".">Tigers</a></li>
	<li><a href=".">Bears</a></li>
</ul>
<hr />

But because the code uses Bootstrap, it looks like this:

{% include codepen-new.html slug-hash="zNKzep" height="275" %}

Bootstrap's JavaScript adds a click listener to the `<button>` that toggles the visibility of the list. Bootstrap's CSS contains rules that hide the `<ul>` by default, and make it look like a dropdown when it's visible.

Notice that we didn't have to write any JavaScript or CSS ourselves. We get the functionality and a reasonable look-and-feel by including the Bootstrap CSS and JavaScript and using the correct classes on our HTML elements.

# Bootstrap Components

Now that you know Bootstrap is both CSS and JavaScript, the next question is: how do you know what CSS classes to use to trigger the correct behavior? If you've been reading the rest of Happy Coding's tutorials, you can probably guess by now that the answer is: consult the documentation!

The [Bootstrap documentation](http://getbootstrap.com/components/) contains a bunch of example components (like the dropdown from above) that you can use. If you're interested in using Bootstrap, this page should be your first stop. I recommend reading through that whole thing at least once, and then going back to it later when you need a specific component.

[W3Schools](http://www.w3schools.com/bootstrap/default.asp) also has a good section of Bootstrap examples. And of course Google is always your best friend.

Here are a couple examples of the most common Bootstrap components:

## Container

The `container` class lets the content in your website "snap" to certain widths depending on the device you're using and the width of the window.

Here's an example:

{% include codepen-new.html slug-hash="GrjMqE" height="575" %}

Try opening this code up in its own window (click Run Pen and then click the [Edit on CodePen](http://codepen.io/KevinWorkman/pen/GrjMqE) link in the upper-right corner) and change the width of the window.

## Navigation

To create a navigation bar, you can use a `<nav>` tag with the `navbar` class, then a `<ul>` tag with the `nav` and `navbar-nav` classes.

```html
<nav class="navbar navbar-default">
	<ul class="nav navbar-nav">
		<li class="active"><a href="">Home</a></li>
		<li><a href="">About</a></li>
		<li><a href="">Cat Pictures</a></li>
	</ul>
</nav>
```

{% include codepen-new.html slug-hash="rjMgxR" height="575" %}

(The navigation bar is automatically turned into a menu if it doesn't have enough width, so try [opening this in a new window](http://codepen.io/KevinWorkman/pen/rjMgxR).)

Note that you can put the `<nav>` inside the `container` `<div>` to give the navigation bar the same width as the content, or you can put it before the `container` to make the navigation span the whole page. Try both and see which you like better!

From here you can do fancier things like putting different types of components inside your nav, or changing how your navigation works on mobile devices. But these fundamentals should get you started!

## Grid

Bootstrap organizes a page's content into a grid. You can customize the layout of your content by specifying how much room each section of your page should take up in that grid. You do this using the `row` and `col` classes.

Think about it this way: you can have an unlimited number of rows, but inside each row you can only have `12` total columns.

Here's an example that has 2 rows that both use all 12 columns:

{% include codepen-new.html slug-hash="GrjbKd" height="575" %}

You won't always use 12 columns, especially if your content is wider than the window (like the above example). You can use fewer columns by changing the number in the `col-xs-#` class name to change how many columns your content should take up. For example, you could use `col-xs-3` to make your content take up 3 columns. This column would take up 25% of its row's width (3 is 25% of 12). You could then add another section that took up 75% of the row's width using the `col-xs-9` class. Notice that the total (3+9) adds up to 12!

It's probably easier to explain using an example, so here's an example that creates 2 rows. The first row contains 2 columns: one that takes up 9 column widths and another that takes up 3 column widths. The second row contains 3 columns, and each takes up 6 column widths.

{% include codepen-new.html slug-hash="egdwaR" height="575" %}

Notice how the first row contains a column that takes up 75% (9/12) of the row, and another column that takes up the remaining 25% (3/12).

Then the second row contains 3 columns, but notice that the last column (the red one) wraps around into a new row. That's because each row can only have a total of 12 column widths! Each of the 3 rows has a width of 6, so only the first 2 fit on the row, which causes the last column to wrap to a new row.

The cool thing about this is that you can specify different layouts for different sized devices and screens. This is super useful, since you don't need a separate version of your website for phones, you just use a different layout.

Notice the `xs` part of the `col-xs-#` classes we've used so far. That stands for **extra small** and means that phone sized screens (and larger) will use that layout. So far that hasn't been important because we haven't specified any other screen size layouts. But we could add classes for other screen sizes. 

Here's an example:

```html
<div class="row">
	<div class="col-xs-12 col-md-4">This section will take up 12 columns on extra small screens, but only 4 columns on medium (and larger) screens.</div>

	<div class="col-xs-12 col-md-8"><p>This section will take up 12 columns on extra small screens, but only 8 columns on medium (and larger) screens.</p></div>
</div>
```

This HTML defines a row with two columns. On extra small screens, each column takes up all 12 column widths, which causes them to be shown on their own rows. But on medium (and larger) screens, the first column only takes up 4 column widths, and the second column takes up the remaining 8.

{% include codepen-new.html slug-hash="ZLBYLa" height="575" %}

(Open this [in its own window](http://codepen.io/KevinWorkman/pen/ZLBYLa) and change the window width!)

This is a really powerful feature, so it might seem confusing at first. I recommend putting together a few examples and seeing how they behave when you change the width of your browser. When you get the hang of it, this will let you create layouts that work on mobile devices, desktops, and everything in between.

# Themes

As you've seen, Bootstrap provides CSS its own styles. But you aren't stuck with the default styles that Bootstrap provides.

Instead of using Bootstrap's default `.css` file, you can use other `.css` files that define styles for Bootstrap's classes. These files are called Bootstrap themes, but really they're regular `.css` files.

Here's an example page that uses Bootstrap's default styles, aka the default theme:

{% include codepen-new.html slug-hash="JEbdwK" height="575" %}

And here is that same page using the [Cyborg Theme](https://bootswatch.com/cyborg/) from [Bootswatch](https://bootswatch.com/):

{% include codepen-new.html slug-hash="ygVNxr" height="575" %}

Notice that the only thing that changed is the `.css` file that's loaded in the `<head>` section. This `.css` file defines all of the classes that Bootstrap uses, but with different styles than the default `.css` file. You can download the `.css` file or view it in your browser here: [https://bootswatch.com/3/cyborg/bootstrap.css](https://bootswatch.com/3/cyborg/bootstrap.css)

Try doing a search in that file for the `panel` class to see the styles on it.

You can also add your own CSS rules for any of the Bootstrap classes to create your own custom style. You can do this on top of the default styles or on top of a theme. Keep in mind the **cascading** part of CSS, which means that your styles will be combined with the styles from the main Bootstrap CSS.

For example, you could add some custom styles for a few of the classes in your webpage:

```html
<style>
	.navbar{
		border: thick solid blue;
	}
	
	.panel .panel-heading{
		background-color:red;
	}
	
	.panel .panel-footer{
		font-size: 8pt;	
	}
	
	.panel{
		width: 200px;
		margin-left:auto;
		margin-right:auto;
	}
</style>
```

This adds your own custom styles to a few Bootstrap classes. First the main styles from Bootstrap (or whatever theme you're using) are applied, and then your styles **cascade** on top to add a border to the navbar, change the background color of the panel, change the font size of the panel footer, and set the width of the panel.

{% include codepen-new.html slug-hash="bgBVaP" height="575" %}

This gives you the best of both worlds: you get to use all of the styles from Bootstrap, but you still get to customize your site with whatever styles you want.

# Homework

- Use Bootstrap to style your example webpage. Add some [Bootstrap components](http://getbootstrap.com/components/), like a collapsing navbar or a jumbotron!
- Keep your eyes peeled for websites that use Bootstrap. Once you start looking, you'll see them everywhere.
