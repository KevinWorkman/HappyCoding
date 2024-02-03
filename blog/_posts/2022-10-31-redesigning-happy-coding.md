---
layout: tutorial
title: Redesigning Happy Coding
meta-title: Redesigning Happy Coding
meta-description: Brainstorming about a potential redesign.
meta-image: /blog/images/redesigning-happy-coding/thumbnail.jpg
tags: [dev-log, site-update]
---

<style>
  .content img {
    border: 2px solid black;
  }
</style>

{% include toc.md %}

It's makeover time here at Happy Coding. I've been thinking about this for a while, but I find myself going in circles about the same few issues without making much progress, so this blog post is my attempt at talking it through. I don't have a UX team I can whiteboard with, so typing into a text editor will have to do.

## The Problem

Happy Coding started with an amorphous goal. I wanted a new home for the tutorials that started over at Static Void Games. This new home would also be the home of hobby projects I worked on, which would be examples that showed practical applications of the tutorials. Oh and why not throw in a personal blog while I'm at it. And a [forum](https://forum.happycoding.io)!

Each of these made sense on their own. I didn't want the site to be a bunch of theoretical tutorials, so I wanted the [examples](/examples) section to be a first-class citizen. I wanted a place to post random nerdy thoughts, so I added a blog. And more importantly, I wanted Happy Coding to be a community, so I added the forum.

But I'm not sure it ever made sense as a cohesive whole. Some folks come to the tutorials after searching for specific info. Some other folks come to the examples as I post them on Twitter. Others only know Happy Coding as my personal blog.

I think that leaves people with an incomplete picture of What This All Is For, and to be honest I think it leaves **me** with an incomplete picture of why I'm doing this. I get into grooves where I hang out in certain parts of the website for a while, but it doesn't feel _connected_ in the way I'd like it to.

## The Inspiration

I've been thinking about this for a long time, probably years at this point. But two things recently happened that inspired me to finally do something about it.

The first was [the redesign of The Coding Train's website](https://designsystems.international/work/the-coding-train/). I love seeing how much thought they put into understanding their goals, and then making sure the new and improved website got them closer to those goals. And it was done in a genuine way, instead of the shady SEO hacks you usually see with this kind of thing.

The other one was Elon Musk buying Twitter. This has been coming for a while, and I've been thinking about what it would look like to quit social media altogether. Is it possible to have an online presence without being at the mercy of a couple soulless billionaires? What would Happy Coding have to look like for that to work?

## What's in a URL?

One or the main issues I'm trying to fix is that right now, the examples section [feels](/blog/subjective-side-of-code) very separate from the tutorials section. If you're learning about calling functions on `HappyCoding.io/tutorials/p5js/calling-functions`, it's not obvious that you can jump over to `HappyCoding.io/tutorials/p5js/#calling-functions` to see a bunch of projects you can tweak and remix to practice calling functions.

Should I move all of the examples? Maybe to sub-pages of the tutorials? Maybe `HappyCoding.io/tutorials/p5js/calling-funtions` would be the tutorial, and then `HappyCoding.io/tutorials/p5js/calling-functions/rainbow` would be an example that draws a rainbow?

I think I like that, because it makes navigating by URL a little more obvious. Maybe I should get rid of the `tutorials` subpath and move everything up a level? Then I'd have `HappyCoding.io/p5js`, `HappyCoding.io/java`, etc. Would it be okay that `p5js` is on the same level as, say, `HappyCoding.io/blog`? What about what's already at `HappyCoding.io/teaching`?

Do URLs even matter? I like how this idea feels, but am I just [bike shedding](https://en.wikipedia.org/wiki/Law_of_triviality) for the fun of it? Not that there's anything wrong with that, but do people even look at URLs anymore?

## Journeys

I think I want Happy Coding to feel a little like a [skill tree](https://duckduckgo.com/?q=skill+tree&iax=images&ia=images), where working through one layer of the tutorials unlocks a new set of example project. I'm not saying I want to hide things until the user does something, but I want the examples to feel like a _result_ of the tutorials.

This gets complicated, because there isn't just one path through the tutorials. For example, the [Intro to Creative Web Dev](/teaching/intro-to-web-dev-2022-fall/) course starts with a few p5.js tutorials, then jumps over to HTML, then to JavaScript, and finally back to p5.js. Right now that's pretty clunky: the main course page contains links to specific tutorials, but those tutorials don't "know" they're part of that course. I'd love to find a way to make these journeys more obvious. I might even do something like repeat the same exact content on multiple paths, like `HappyCoding.io/intro-to-creative-web-dev/calling-functions` might be the same thing as `HappyCoding.io/p5js/calling-functions`, but with different intro paragraphs maybe?

And where does the community come into play? What would it look like to read a tutorial, play with some examples, and then add your own, or comment on stuff posted by other people?

## First Attempts

The tutorials page currently looks like this:

![current tutorials page](/blog/images/redesigning-happy-coding/redesigning-happy-coding-1.png)

I started hacking at this by rearranging the p5.js tutorial page to make the tutorials bigger, and to include examples below each tutorial.

![tutorials page with examples](/blog/images/redesigning-happy-coding/redesigning-happy-coding-2.png)

I think this is an improvement, but there's way too much going on in one page. Next, I tried adding some styling to separate each "chapter" into its own section.

![tutorials page with chapters](/blog/images/redesigning-happy-coding/redesigning-happy-coding-3.png)

This feels like it might be something, but I still don't love it.

I've been scribbling ideas in a notebook. Maybe a more obvious hierarchy using tabs?

![hand-drawn tutorial page](/blog/images/redesigning-happy-coding/redesigning-happy-coding-4.jpg)

## Eureka?

To be honest, I was hoping that writing this would help me [rubber duck debug](https://en.wikipedia.org/wiki/Rubber_duck_debugging) the redesign, that I'd stumble upon the obvious solution and know exactly what to do. But I'm still asking myself the same questions.

I'd be extremely open to suggestions. I'm also considering finding a freelance designer to help think through some of this stuff, so if that sounds like you, get at me!
