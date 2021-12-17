---
layout: blog-post
title: Debootstrapification
meta-title: Debootstrapification
meta-description: Lose 24,503 lines of code with this one weird trick!
meta-image: /blog/images/debootstrapification/thumbnail.png
tags: [site-update]
---

{% include toc.md %}

[Bootstrap](/tutorials/javascript/bootstrap) is a JavaScript / CSS library that makes it easier to create a nice-looking website, even if you don't have a ton of experience with web design. It relies on [JQuery](/tutorials/javascript/jquery), which is by far the world's most popular JavaScript library. This site was built using Bootstrap. Bootstrap is great.

So why did I spend this [long weekend](https://happycoding.io/examples/p5js/fireworks) getting rid of Bootstrap?

# Keeping it Simple

Bootstrap and JQuery are great tools, but I think people (myself included) turn to them before we need them. It's easy to overcomplicate things- especially if, like me when I started this site, you aren't very familiar with web development.

For example, Bootstrap makes it easy to create a nice interactive [navigation bar](https://getbootstrap.com/docs/4.1/components/navbar/). So it might be tempting to use Bootstrap every single time you start putting together a navigation bar. You could add JQuery and Bootstrap to the `<head>` section of your page, and then write something like this:

```html
<nav class="navbar navbar-default transition">

  <div class="navbar-header">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand random-color transition" href="/">Happy Coding</a>
  </div>
  <div class="collapse navbar-collapse" id="myNavbar">
    <ul class="nav navbar-nav">
      <li class="nav-item"><a class="nav-link random-color transition" href="/tutorials">Tutorials</a></li>
      <li class="nav-item"><a class="nav-link random-color transition" href="/examples">Examples</a></li>
      <li class="nav-item"><a class="nav-link random-color transition" href="/blog">Blog</a></li>
      <li class="nav-item"><a class="nav-link random-color transition" href="/about">About</a></li>
      <li class="nav-item"><a class="nav-link random-color transition" href="/teaching">Teaching</a></li>
      <li class="nav-item"><a class="nav-link random-color transition" href="http://forum.HappyCoding.io">Forum</a></li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li class="nav-item nav-img"><a style="" class="nav-link" href="https://twitter.com/TheKevinWorkman"><img id="twitter-img" src="/images/twitter-black.png" /></a></li>
      <li class="nav-item nav-img"><a style="padding-top:14px; padding-bottom:14px;" class="nav-link" href="https://github.com/KevinWorkman/HappyCoding"><img id="github-img" src="/images/GitHub-Mark-32px.png" /></a></li>
      <li class="nav-item"><a class="nav-link"><span class="glyphicon glyphicon-adjust" aria-label="Toggle Theme" onclick="toggleTheme()"></span></a></li>
    </ul>
  </div>
</nav>
```

This is the code for the previous version of the navigation bar.

And here's what the code for the navigation bar looks like after I remove Bootstrap:

```html
<nav class="transition">
  <a class="navbar-brand random-color transition" href="/">Happy Coding</a>
  <a class="nav-link random-color transition" href="/tutorials">Tutorials</a>
  <a class="nav-link random-color transition" href="/examples">Examples</a>
  <a class="nav-link random-color transition" href="/blog">Blog</a>
  <a class="nav-link random-color transition" href="/about">About</a>
  <a class="nav-link random-color transition" href="/teaching">Teaching</a>
  <a class="nav-link random-color transition" href="http://forum.HappyCoding.io">Forum</a>

  <a class="nav-link" href="https://twitter.com/TheKevinWorkman">
    <img class="nav-img" src="/images/twitter.png" /></a>
  <a class="nav-link" href="https://www.facebook.com/HappyCoding.io/">
    <img class="nav-img" src="/images/facebook.png" /></a>
  <a class="nav-link" href="https://github.com/KevinWorkman/HappyCoding">
    <img class="nav-img" src="/images/GitHub-Mark-32px.png" /></a>
</nav>
```

This is a bit of an unfair comparison, because I wrote that first block of code 3 years ago and I've learned a lot since then, but I think it's a good example of the difference between *assuming something is complicated* and *trying to find the simplest way to do it*.

# Better Websites

Although they're purposely ridiculous, I actually find a lot of inspiration in [this website](http://motherfuckingwebsite.com/) and [this better website](http://bettermotherfuckingwebsite.com/) (warning: those links contain swears). They make the argument that web developers often overcomplicate their sites, and that we should rely on more straightforward approaches.

> What I'm saying is that all the problems we have with websites are **ones we create ourselves**.
>
> \- [this website](http://motherfuckingwebsite.com/)

I've said before that I'm a big fan of the [worse is better](https://blog.codinghorror.com/worse-is-better/) philosophy, and I think these websites are a good practical example of that philosophy in action.

I also removed a few other things I didn't really need, like the dark theme and storing the navigation color between pages. Deleting code is one of the best things a programmer can do, and [these changes](https://github.com/KevinWorkman/HappyCoding/commit/c67d45dc195844167119d85ed138df6105af3bfe?diff=unified) allowed me to delete 24,503 lines of code. (Again, this is an unfair number because I wasn't using the minified version, but I'm still counting it as a victory.)

# Fundamentals

It can be tempting to "[just use JQuery](https://meta.stackexchange.com/a/19492/294611)" for everything.

[![just use JQuery](https://i.stack.imgur.com/sGhaO.gif)](https://meta.stackexchange.com/a/19492/294611)

But it's important to make sure you're familiar with the fundamentals. If you don't take the time to understand what's going on behind the scenes, then you end up [cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming) instead of actually knowing what you're doing. This makes it harder to be creative, and harder to debug when something inevitably goes wrong.

So this weekend was also an excuse for me to play around with some [vanilla](https://en.wikipedia.org/wiki/Vanilla_software) code. The navigation bar above uses [flexbox](https://www.w3schools.com/css/css3_flexbox.asp):

```css
nav {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
  background-color: #dddddd;
  margin-bottom: 25px;
}
```

I know a little bit about flexbox, but the best way to learn a concept is by using it.

And I got to use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) in a few places instead of JQuery. This might not seem like a big win, but I think about it as a [programming kata](https://en.wikipedia.org/wiki/Kata_(programming)): every time I use the `fetch()` function, I'm internalizing it a bit more, which will help me the next time I need to use it.

# The Process

At first, I assumed that debootstrappifying the whole site was going to be complicated, so I originally planned on doing it one page at a time. The site is built using [Jekyll](https://jekyllrb.com/), and I added a parameter that each page would pass up to the main template that loads all the styles and JavaScript files. The idea was that as I migrated each page, I would change that parameter and leave the rest of the pages unchanged.

Perhaps ironically, this plan for simplification was itself overly complicated. Because as soon as I migrated the JavaScript and the navigation bar for the homepage, I was pretty much done. It turns out that I wasn't relying on JQuery and Bootstrap as much as I thought I was! (Which is even more of a reason to remove it!)

So I finished up by clicking around and giving each page a once-over. I wasn't trying to perfectly recreate everything that Bootstrap provided, and I'm pretty happy with the result.

I took a screenshot every time I changed something. Here's what the process looked like:

![timelapse](/blog/images/debootstrapification/timelapse.gif)

And here are a few before / afters:

Homepage:
[![before and after homepage](/blog/images/debootstrapification/before-after-1.png)](/blog/images/debootstrapification/before-after-1.png)

Tutorials:
[![before and after tutorials page](/blog/images/debootstrapification/before-after-2.png)](/blog/images/debootstrapification/before-after-2.png)

Individual tutorial:
[![before and after tutorial page](/blog/images/debootstrapification/before-after-3.png)](/blog/images/debootstrapification/before-after-3.png)

Blog:
[![before and after blog](/blog/images/debootstrapification/before-after-4.png)](/blog/images/debootstrapification/before-after-4.png)

# Next

I know this isn't the most exciting thing in the world, but I've been feeling a little stressed lately and spending a long weekend playing with CSS and doing [logic puzzles](http://www.lusciousbooks.co.uk/50-logic-puzzles.html#.XSLZ0IhKiUk) sounded cathartic. There are still a few things I want to clean up and simplify, but most of what I set out to do is done.

I've also been playing with Android again. I've updated my old [Android apps](https://play.google.com/store/apps/developer?id=Happy+Coding), and I still want to get back into making a libGDX game. More on that in a future blog post.

It's also very possible that I missed something during the debootstrapification, or that there are quirks in different browsers that I didn't think of. So let me know if you notice any weird styling or loading issues!