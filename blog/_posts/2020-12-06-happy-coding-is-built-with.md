---
layout: tutorial
title: Happy Coding is Built With
meta-title: Happy Coding is Built With
meta-description: Here's a list of everything I use to create Happy Coding.
meta-image: /blog/images/happy-coding-is-built-with/thumbnail.jpg
tags: [site-update, dev-log]
---

{% include toc.md %}

Here is a list of everything I use to build Happy Coding.

There are many ways to build a website like Happy Coding, and I'm not saying this is The One True Way to go about it. There are a million different tools and workflows you could choose, and you should go with whatever makes the most sense to you. But if you're curious, here's what works for me.

![Stanley](/blog/images/happy-coding-is-built-with/2020-09-07.jpg)

# Hardware

I use Windows at home. I started creating Happy Coding on an old Dell desktop, but for the last few years I've done everything on a Lenovo ThinkPad. This thing is a "laptop" in name only. In reality it's a monster that weighs about 15 pounds.

# GitHub Pages

Happy Coding is hosted on [GitHub Pages](https://pages.github.com/), which means that the site itself is backed by an open-source [repo](https://github.com/KevinWorkman/HappyCoding). To update the site, I update the content in the Happy Coding repo, and then GitHub Pages automatically deploys it.

## GitHub Desktop

Because I'm using GitHub Pages, that means I'm also using git. I'm pretty much the only person updating the site and I always push directly to the main branch, so I use [GitHub Desktop](https://desktop.github.com/) to push my changes. For any other workflow, I'd probably recommend using the command line.

# Jekyll

GitHub Pages uses [Jekyll](https://jekyllrb.com/), which uses a mix of [Markdown](https://commonmark.org/), [Liquid](https://shopify.github.io/liquid/), and HTML to create the site.

I write the text of every tutorial and blog in Markdown, and then use Liquid to stitch them together into HTML files.

For example, view [the Markdown source](https://raw.githubusercontent.com/KevinWorkman/HappyCoding/gh-pages/blog/_posts/2020-12-06-happy-coding-is-built-with.md) for this blog entry.

The section at the top between `---` is [Liquid front matter](https://jekyllrb.com/docs/front-matter/) that tells Jekyll what to do with the content, and then the rest of the file is Markdown content that gets converted into HTML. That content goes through [the blog post layout](https://github.com/KevinWorkman/HappyCoding/blob/gh-pages/_layouts/blog-post.html) which adds the title, date, and comment section, and then [the default layout](https://github.com/KevinWorkman/HappyCoding/blob/gh-pages/_layouts/default.html) which adds everything else.

Jekyll is built in [Ruby](https://www.ruby-lang.org/en/) and [Bundler](https://bundler.io/), but I don't have to deal with that directly other than when I decide to update Jekyll. Jekyll also uses [Kramdown](https://jekyllrb.com/docs/configuration/markdown/) and [Rogue](http://rouge.jneen.net/) for syntax highlighting of code blocks, but that's another thing I almost never have to think about.

I absolutely **love** Jekyll. Back in the Static Void Games days, I wrote a Java wrapper of Stack Overflow's [pagedown](https://github.com/StackExchange/pagedown) JavaScript library using [V8](https://github.com/eclipsesource/J2V8). In hindsight that's ridiculous, but in my defense this was before [CommonMark](https://commonmark.org/) was a thing. When I was thinking about how to build Happy Coding I almost used the same workflow, where I would have written content in markdown and then used a library to convert that to HTML. But then I discovered GitHub Pages and Jekyll, which did all of that automatically. I was instantly able to cut out a ton of hacky code that probably never should have existed in the first place.

# Code Embeds

Wherever possible, I include embedded code editors in tutorials and examples.

For Processing, I use [CodePen](https://codepen.io/). Specifically I use [CodePen editable embeds](https://blog.codepen.io/documentation/editable-embeds/) which require a [pro subscription](https://codepen.io/features/pro) that currently costs $75 per year.

The Processing embeds also use [Processing.js](https://github.com/processing-js/processing-js) which lets you write Processing syntax that runs as JavaScript code in the browser. This is slightly dangerous as Processing.js is no longer recommended, but it still works for most sketches as long as they don't require file access or Processing 3 features. I know this will break eventually though.

For p5.js, I use [p5.js-widget](https://toolness.github.io/p5.js-widget/). Similar to the Markdown converter I mentioned above, I actually went pretty far down the rabbit hole of creating my own p5.js embedded editor before realizing a better solution already existed.

# Editors

I use [Typora](https://typora.io/) to edit most of the Markdown content, and [jEdit](http://www.jedit.org/) for most of everything else. I love how simple both of these editors are. They give me exactly what I need and nothing else.

When I'm working on a language-specific tutorial or project, I also use language-specific editors. For [Processing](/tutorials/processing) I use the Processing editor; for [p5.js](/tutorials/p5js) I use the [p5.js editor](https://editor.p5js.org/); for Android I use [Android Studio](https://developer.android.com/studio). For Java I use a little bit of Intellij, but I mostly use jEdit.

# Backgrounds

I use Processing to create the background images. See [this page](https://github.com/KevinWorkman/HappyCoding/wiki/Contributing-Backgrounds) for more info on that process, and how to contribute your own background images!

# JavaScript and CSS

I don't use any libraries like jQuery or Bootstrap ([anymore](https://happycoding.io/blog/debootstrapification)). The only JavaScript on the general site is for setting a random background image and changing the background color of the navigation bar. For that last one I use [Modernizr](https://modernizr.com/) to check whether the browser supports CSS transitions, although [looking at the availability](https://caniuse.com/#feat=css-transitions) I could probably get rid of that now.

I wrote all of the [CSS](/css/main.css) myself, except for the syntax highlighting. For that, Jekyll uses [Rogue](http://rouge.jneen.net/) which is styled with [Pygments](https://pygments.org/).

# Images

I use good old [Microsoft Paint](https://en.wikipedia.org/wiki/Microsoft_Paint) for editing and cropping most images. I also use the [Snipping Tool](https://en.wikipedia.org/wiki/Snipping_Tool) to get screenshots, and I press `alt` + `PrtSc` a lot. If I need something fancy like transparency I'll use [GIMP](https://www.gimp.org/), but Paint works for almost everything I need.

For quick and easy GIFs, I use [ScreenToGif](https://www.screentogif.com/). For higher-quality GIFs, I export individual frames as images and then use [ImageMagick](https://imagemagick.org/index.php) to stitch them together.

I've also commissioned a few artists to create images for specific tutorials and blog posts. Generally they're credited below each image.

# Domain

I use [Namecheap](https://www.namecheap.com/) for my domain. If you want to use a custom domain with your GitHub Pages site, check out [this guide](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site).

# Forum

The [forum](https://forum.happycoding.io) is built using [Discourse](https://www.discourse.org/). The comments embedded on each blog are also built using Discourse.

I use [Digital Ocean](https://www.digitalocean.com/) to host the forum, and [Mailgun](https://www.mailgun.com/) for the emails that the forum sends out.

# Other Stuff

Did I forget anything? Are you curious about anything else? Let me know!
