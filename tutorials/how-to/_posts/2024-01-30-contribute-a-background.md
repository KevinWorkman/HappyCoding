---
layout: post
title: Contribute a Background
thumbnail: /tutorials/how-to/images/add-a-background-thumbnail.png
tagline: Contribute your own background image to Happy Coding!
sort-key: 70
meta-title: How to Contribute a Background
meta-description: Contribute your own background image to Happy Coding!
meta-image: /tutorials/how-to/images/add-a-background-thumbnail.png
tags: [tutorial, how-to, meta]
forumExcerpt: I wrote a tutorial about contributing your own custom backgrounds to Happy Coding.
---

{% include toc.md %}

Happy Coding shows a random background image on every page. Those images are generated with code, and I'd love if other people contributed their own!

This guide walks through the process of creating and contributing your own background image.

# Step 1: Write Code

Using your coding language of choice, write some code that generates a cool pattern.

I use [Processing](/tutorials/processing) or [p5.js](/tutorials/p5js). Processing tends to be much faster, which can be helpful if your animation takes time to fill the screen.

If you want some inspiration, check out the tutorials and examples on Happy Coding, or scroll to the bottom of any page to find a link to the source code for its background.

**Tips**

- To speed up your animation, try wrapping your entire `draw()` function in a `for` loop
- Try a few color combinations: random colors, grayscale, shades of a blue and green
- Post your first draft on [the Happy Coding forum](https://forum.happycoding.io) to get feedback!

# Step 2: Take a Screenshot

In p5.js, you can right-click the canvas and save your canvas as an image. In Processing, you can call the `save()` or `saveFrame()` functions to create an image file.

I've been creating image files with a resolution of **1920x1080**.

By default, backgrounds will be stretched to fill the screen. Their aspect ratios will be preserved (so they won't look distorted), but they might be cut off (so users with small screens might only see the top-left corner). Try resizing your browser window and watching how the background resizes to see what I mean.

I'm open to other ideas. If you want to use a different size, or if you want your background to repeat instead of stretch, let me know!

# Step 3: Ship It ⛵

After you're happy with your background image, submit it to Happy Coding!

There are two main ways to do that:

1. Post on [the Happy Coding forum](https://forum.happycoding.io). This is an easy way to introduce yourself!
2. Submit a pull request to [Happy Coding's GitHub repo](https://github.com/KevinWorkman/HappyCoding).

Your submission should include a few things:

- Your image file.
- A link to your code. If you don't have a link, you can post the code directly to the forum.
- Your name, as you'd like to be credited in the footer of the page.
- Optionally, a link to your homepage that will show along with your name.
  - Note: I won't link to any sites that sell or market NFTs.

# How It Works

If you're curious about how the random background images work, check out the [backgrounds.js](/js/backgrounds.js) file.

That file contain an array of objects. Each object specifies an image file (stored in the [backgrounds directory](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/images/backgrounds)) and a link to the code that generated the file.

Then on page load, the code picks a random object, and changes the background of the page to that object's image file. It also adds a link to the footer of the page.

If you made it this far, I'd love to see what kinds of background images you come up with!
