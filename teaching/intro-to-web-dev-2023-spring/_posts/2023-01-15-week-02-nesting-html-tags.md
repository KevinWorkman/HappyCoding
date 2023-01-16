---
layout: default
title: Nesting HTML Tags - Week 02
thumbnail: /tutorials/html/images/html-3.png
pixelate-thumbnail: true
tagline: Put HTML tags inside other HTML tags.
sort-key: 200
meta-title: Nesting HTML Tags - Intro to Web Dev Week 02
meta-description: Put HTML tags inside other HTML tags.
meta-image: /tutorials/html/images/html-3.png
hide-video-icon: true
tags: [teaching, html]
---

# Nesting HTML Tags - Week 02

{% include toc.md %}

Welcome to the second week of Intro to Web Dev!

This week you're building on your HTML knowledge and practicing nesting many tags together.

---

# Nesting HTML Tags

First, you'll learn about nesting HTML tags:

{% include url-thumbnail.html url="/tutorials/html/nesting-html-tags" %}

# Project

Now you know how to nest multiple tags together to create more complicated webpages.

Next, go read [soft corruptor](http://cordite.org.au/poetry/game/soft-corruptor/), an HTML poem by [Everest Pipkin](https://everest-pipkin.com/). Expand each section to read the poem.

The poem uses the `<details>` and `<summary>` tags to show expandable sections. Use your developer tools to inspect the elements of the poem to see how they fit together.

Now, open Replit and create your own poem using the the `<details>` and `<summary>` tags.

You'll get one point for each layer of nesting in your poem. For full credit, your poem should contain **ten** levels of nesting. That's content that's inside a tag inside a tag inside a tag inside a tag inside a tag inside a tag inside a tag inside a tag inside a tag!

For example:

{% include codepen-vertical.html slug-hash="GRBvOeb" height="500" autoplay=true default-tab="html" %}

This code contains **seven** levels of nesting. The `strange new worlds` content is inside a `<p>` tag, which is inside a `<details>` tag, which is inside a `<details>` tag, which is inside a `<details>` tag, which is inside a `<details>` tag, which is inside a `<details>` tag!

**Tip:** If you put this inside a `<html>` and `<body>` tags, that's two more levels of nesting for free.

I encourage you to use other tags, not just the `<details>` and `<summary>` tags. Feel free to add images, links, and anything else that make your poem more interesting to you.

# Debugging

The best advice I can give you is to **work slowly**. It might be tempting to try to write your whole poem all at once, but try not to do that!

Instead, write your poem one line at a time. Every time you create an HTML tag, test that it works how you expected. When something doesn't work how you expected, it's a lot easier to find a mistake on one line than it is to read through 50 lines of code.

Format your code and use whitespace and indentation to organize your code. This makes your code easier to read, and things like missing closing tags easier to spot.

Use your browser's developer tools to inspect the elements in your poem. Does what the browser see match what you expected it to see? Look for inconsistencies between what you expected to happen and what happened instead, and that'll tell you which line of code to look at.

# Styling Content

Next week, we'll be learning about styling your content with CSS. For now, if you want to indent each level of your poem, try adding this to the beginning of your HTML file:

```html
<style>
  details {
    margin-top: 10px;
    margin-left: 25px;
  }
</style>
```

This is totally optional! I'm just including it here because I'm guessing somebody is going to ask about it.
