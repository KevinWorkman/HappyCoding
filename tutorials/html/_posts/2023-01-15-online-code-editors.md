---
layout: post
title: Online Code Editors
thumbnail: /tutorials/html/images/neocities-1.png
tagline: Write HTML directly in your browser.
sort-key: 225
meta-title: Online Code Editors
meta-description: Write HTML directly in your browser.
meta-image: /tutorials/html/images/neocities-1.png
tags: [tutorial, html]
previousPost: /tutorials/html/
nextPost: /tutorials/html/html-tags
updated: 2025-08-14
---

<style>
  .content img {
    border: thin solid #323232;
  }
</style>

{% include toc.md %}

{% include youtube-embed.html slug="Dq5MYv2BUwg" %}

Now you know, at a high level, that HTML is a coding language used for building websites. But to write HTML, you need an HTML editor!

This tutorial introduces a couple online code editors, which let you write HTML directly in your browser without downloading or installing anything.

# Neocities

There are many online editors out there, but for now I recommend using [Neocities](https://neocities.org).

I like Neocities because its free tier is powerful enough for all of our projects. I also can't help but love its retro vibe.

To use Neocities, first [sign up for a free Neocities account](https://neocities.org/#new).

![Neocities registration form](/tutorials/html/images/neocities-2.png)

You can only have one username per email, which means you can only create one website per email. That's fine, because you can have multiple directories and pages within a site, like this:

- `kevinworkman.neocities.org/exampleone/mypage.html`
- `kevinworkman.neocities.org/exampletwo/myotherpage.html`
- `kevinworkman.neocities.org/examplethree/yetanotherpage.html`

But you can only change the username part of your site either by upgrading to a paid account, or by registering with a new email address, so choose carefully!

If Neocities asks you whether you want a free account or a supporter account, you can select the free option. You can always upgrade later if you want to support Neocities or want to have multiple websites.

![Neocities account upgrade](/tutorials/html/images/neocities-3.png)

If Neocities asks whether you want to visit tutorials, you can select **Go to the dashboard**. You can always come back to the tutorials later!

![Neocities tutorial option screen](/tutorials/html/images/neocities-4.png)

Finally, you should see your website's dashboard:

![Neocities dashboard](/tutorials/html/images/neocities-5.png)

By default, Neocities populates your website with a few files. You'll learn more about them as you work through these tutorials, but for a quick summary:

- `index.html` is the default HTML file that people will see when they visit your site.
- `neocities.png` is an image that's used in the HTML file.
- `not_found.html` is the error page that's shown if somebody tries to access a file that doesn't exist.
- `robots.txt` tells web crawlers (like Google and AI trainers) whether they're allowed to use your site. By default, everything is allowed, but you can turn them off if you want.
- `style.css` is a CSS file that sets the styling of your website.

You can click the red link with your website's URL (it looks like `yourusername.neocities.org`) to see your current site. It should look like this:

![Neocities default page](/tutorials/html/images/neocities-6.png)

Back in your site's dashboard, hover your mouse over the `index.html` file and then click the **Edit** button.

![Neocities edit button](/tutorials/html/images/neocities-7.png)

You should now see something like this:

![Neocities editor](/tutorials/html/images/neocities-8.png)

Welcome to the Neocities editor! This file already contains some HTML content. You'll learn more about HTML in the next couple tutorials, but for now, replace the contents of the file with this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Amazing Website</title>
  </head>
  <body>
    <h1>Welcome to my amazing website!</h1>

    <p>Here are some of my favorite animals:</p>
    <ul>
      <li>Cats</li>
      <li>Bees</li>
      <li>Snails</li>
    </ul>
  </body>
</html>
```

Then click the **Save** button at the top, and then click the **Dashboard** in the upper-left corner.

Back in the dashboard, you should now see **My Amazing Website** at the top:

![Updated Neocities dashboard](/tutorials/html/images/neocities-9.png)

That's coming from the `<title>` tag in your `index.html` file!

Next, click your website's URL again, or refresh the tab if you already have it open, and you should see this:

![Updated Neocities website](/tutorials/html/images/neocities-10.png)

This might not look like the best website in the world, but it means you were able to edit your HTML file and see your changes in your live site.

Try changing the list of your favorite animals by editing the `index.html` file, saving it, and then refreshing your website again.

If you're new to coding and HTML, I recommend using Geocities. But there are some other online code editors you're likely to encounter.

# CodePen

For the tutorials I post to Happy Coding, I often use [CodePen](/about/codepen) to embed a code editor directly in the page. You can edit the code in the CodePen editor and see your changes directly. Try it now:

{% include codepen-new.html slug-hash="yVyzPO" height="150" %}

I use CodePen because it lets me embed code directly in these tutorials, but for most purposes I'd recommend using Geocities.

# Other Code Editors

There are many other online code editors. Here are a couple you're likely to encounter:

- [JSFiddle](https://jsfiddle.net/) is similar to CodePen. It's great for small projects and sending small examples.
- [W3Schools Editor](https://www.w3schools.com/tryit/) is an embedded editor in a lot of [W3Schools](https://www.w3schools.com/html/default.asp) tutorials. It's a great way to try out new HTML tags as you learn about them.

Don't be afraid to try out a few different editors and see which one you like the best!

# Next Steps

Now you should have a code editor set up. Next, you'll start writing your own HTML!

<div class="thumbnail-link-container">
{% include url-thumbnail.html url="/tutorials/html/html-tags" %}
</div>
