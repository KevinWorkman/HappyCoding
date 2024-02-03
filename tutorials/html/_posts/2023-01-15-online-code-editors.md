---
layout: post
title: Online Code Editors
thumbnail: /tutorials/html/images/html-2.png
tagline: Write HTML directly in your browser.
sort-key: 225
meta-title: Online Code Editors
meta-description: Write HTML directly in your browser.
meta-image: /tutorials/html/images/html-3.png
tags: [tutorial, html]
previousPost: /tutorials/html/
nextPost: /tutorials/html/html-tags
---

{% include toc.md %}

Now you know, at a high level, that HTML is a coding language used for building websites. But to write HTML, you need an HTML editor!

This tutorial introduces a couple online code editors, which let you write HTML directly in your browser without downloading or installing anything.

# Replit

There are many online editors out there, but for now I recommend using [Replit](https://replit.com/).

(I like Replit because it's powerful enough for all of our projects, and the default code it gives you is less overwhelming than the default code that some other editors give you.)

To use Replit, first [sign up for a free Replit account](https://replit.com/signup).

After you login, click the blue `+ Create` button in the upper-left corner. You should see a dialog like this:

![Replit project create dialog](/tutorials/html/images/from-p5js-to-html-1.png)

Select the **HTML, CSS, JS** template. Optionally name your project (which Replit calls a Repl), and then click the blue `+ Create Repl` button.

You should now see something like this:

![Replit editor](/tutorials/html/images/from-p5js-to-html-2.png)

Welcome to the Replit editor! Some of this might look similar to the p5.js editor. The left tab shows the files in your project- the only one you care about for now is the `index.html` file. The middle tab shows an editor for your code, and the right tab shows the result of your code.

Try clicking the green `Run` button at the top of Replit. You should see "Hello world" display in the right tab.

## Getting Started with Replit

The default HTML code that Replit gives you can be a little overwhelming. So for now, **delete all of the code in the index.html file**. You should see an empty editor:

![empty Replit editor](/tutorials/html/images/from-p5js-to-html-3.png)

Next, copy this code into the `index.html` file:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>Welcome to my first webpage!</p>
  </body>
</html>
```

This code is a little more manageable. Click the green `Run` button at the top, and you should see this:

![hello world webpage](/tutorials/html/images/from-p5js-to-html-4.png)

Again, if you're new to coding and HTML, I recommend using Replit. But there are some other online code editors you're likely to encounter.

# CodePen

For these tutorials, I use [CodePen](/about/codepen) to embed a code editor directly in the page. You can edit the code in the CodePen editor and see your changes directly. Try it now:

{% include codepen-new.html slug-hash="yVyzPO" height="150" %}

I use CodePen because it lets me embed code directly in these tutorials, and I recommend using CodePen for experiments and small test projects. But for bigger projects, I'd recommend using Replit.

# Other Code Editors

There are many other online code editors. Here are a few worth checking out:

- [Glitch](https://glitch.com/) is similar to Replit. The main reason I recommend Replit over Glitch is because Glitch gives you slightly more complicated starter code. But if that's not a concern (you usually delete the starter code anyway), Glitch is great.
- [JSFiddle](https://jsfiddle.net/) is similar to CodePen. It's great for small projects and sending small examples.
- [W3Schools Editor](https://www.w3schools.com/tryit/) is an embedded editor in a lot of [W3Schools](https://www.w3schools.com/html/default.asp) tutorials. It's a great way to try out new HTML tags as you learn about them.

Don't be afraid to try out a few different editors and see which one you like the best!

# Next Steps

Now you should have a code editor set up. Next, you'll start writing your own HTML!

{% include url-thumbnail.html url="/tutorials/html/html-tags" %}
