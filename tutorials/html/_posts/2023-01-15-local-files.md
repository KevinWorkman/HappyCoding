---
layout: tutorial
title: Local Files
thumbnail: /tutorials/html/images/html-2.png
tagline: Write HTML on your own computer.
sort-key: 250
meta-title: Local Files
meta-description: Write HTML on your own computer.
meta-image: /tutorials/html/images/html-3.png
tags: [tutorial, html]
previousPost: /tutorials/html/
nextPost: /tutorials/html/html-tags
---

{% include toc.md %}

Now you know, at a high level, that HTML is a coding language used for building websites. But to write HTML, you need an HTML editor!

If you're new to coding and HTML, I recommend using an online code editor:

{% include url-thumbnail.html url="/tutorials/html/online-code-editors" %}

But you don't **have** to use an online code editor to create HTML. This tutorial walks you through creating HTML files directly on your own computer.

# Text Editors

You can create an HTML file using any text editor. You can use whatever text editor came with your computer, like [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) on Windows or [TextEdit](https://en.wikipedia.org/wiki/TextEdit) on Mac.

If you want additional features, you can download a [text editor](https://en.wikipedia.org/wiki/List_of_text_editors) like [Atom](https://atom.io/) or [Notepad++](https://notepad-plus-plus.org/). But make sure you are **not** using a word processor like Microsoft Word, because it'll try to add its own formatting to your text.

Don't stress out too much about finding the exactly correct text editor. Use whatever came with your computer for now, and you can always try a few text editors out and see which one you like the best later.

# Creating an HTML File

To get started, open up your text editor and type this HTML content into it:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My First Webpage</title>
  </head>
  <body>
    <h1>Happy Coding</h1>
    <p>Hello world!</p>
  </body>
</html>
```

Then save that as a file that ends with the `.html` extension. Many people use `index.html` as a default, but you could call it `my-amazing-webpage.html` if you want.

Remember where you save your file. On your desktop is fine for now!

# Viewing an HTML File

When you're ready to publish your webpage, you'll upload your HTML file to a server so that people can access it over the internet using a URL. But for now, open your HTML file in your web browser directly from wherever you saved it.

To do that, right-click the file, then go to `Open with`, and then choose your web browser to open the file.

Alternatively, you can type a `file://` url into your browser to open the file. For example, if I saved my `index.html` file onto my desktop, I would type `file:///C:/Users/Kevin/Desktop/index.html` into my browser to open the file.

Either way, when you open the file, you should see a page that looks like this:

![example webpage](/tutorials/html/images/html-1.png)

Go back to your text editor and make a change, save it, and then refresh your browser. You should see your change in the browser.

Congratulations, you're now an HTML programmer!

# Next Steps

Now you should have a code editor set up. Next, you'll start writing your own HTML!

{% include url-thumbnail.html url="/tutorials/html/html-tags" %}

# Homework

- Edit your HTML file to include a few paragraphs describing who you are, why you're learning about html, and what you hope to get out of these tutorials.
- Look at some websites you use. What types of content do they contain? How do you think that content is marked up in html?
