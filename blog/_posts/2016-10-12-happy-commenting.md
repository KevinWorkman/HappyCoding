---
layout: blog-post
title: Happy Commenting
slug: happy-commenting
meta-title: Happy Commenting
meta-description: We now have a comment section! *gulp*
meta-image: /examples/processing/using-objects/images/eyes-5.png
tags: [site-update]
---

Blog posts now contain a comment section! Just scroll to the bottom to check it out!

The comment section uses [Happy Coding forum](http://forum.HappyCoding.io) to store and display comments. To leave a comment, just click the `Start Discussion` or `Continue Discussion` at the bottom of a blog post (like this one!). This will take you to the corresponding forum post, and any replies you post there will automagically show up in the comment section of the blog post. Neat!

This does require registering for a (free) forum account, or you can just use Facebook, Twitter, or GitHub to login.

This is thanks to [Discourse's](http://www.discourse.org/) nifty [embedding feature](https://meta.discourse.org/t/embedding-discourse-comments-via-javascript/31963). I love Discourse (from the philosophy of [please read the comments](https://blog.codinghorror.com/please-read-the-comments/) to the idea of [incentivizing reading](https://blog.codinghorror.com/because-reading-is-fundamental-2/)), and they made it easy (and a little **fun**) to make this work.

The only hiccup I encountered was caused by the fact that Discourse treats domains as case sensitive. I tend to [CamelCase](https://en.wikipedia.org/wiki/Camel_case) :camel: :dromedary_camel: the domain, writing it as HappyCoding.io instead of happycoding.io. For the most part this doesn't matter because domains aren't case sensitive, but it turns out that this caused a problem in Discourse. (Which they just [fixed](https://github.com/discourse/discourse/commit/6ea040dd5f773ed8f5e65ebd0938e9413c631f48)!)

One great thing about this feature is that **I didn't have to write any code.** That might sound a little counterintuitive coming from me (I love coding!), but I think this is a sign of me growing (or at least evolving) as a developer. Back in the Static Void Games days, I wanted to do everything myself: from user accounts to comments to uploads to notifications. Part of my motivation was a general curiosity about how that stuff worked. But on the other hand, that meant I spent a lot of time working on things that weren't a core part of my vision. In other words, I was frustrated or bored pretty often! :sleeping: :zzz:

So when I started Happy Coding, I took the opposite approach and tried to do as little as possible myself. I didn't want to keep [reinventing the wheel](https://en.wikipedia.org/wiki/Reinventing_the_wheel). That's why I use [GitHub Pages](https://pages.github.com/) and [Jekyll](https://jekyllrb.com/) to create the site, [Discourse](http://www.discourse.org/) for the forum (and now comments), [CodePen](http://codepen.io/) for the embedded code, etc. I'm trying to do as little of the boring stuff as possible, so I can focus on implementing fun new features and writing tutorials and examples.

I don't want to get too rambly, but now is a pretty exciting time to be a developer (or to start learning how to code, hint hint). Not too long ago, stuff like implementing a comment system was **hard** and **kinda boring**. Now it's getting easier and easier to build your own thing by piggy-backing on top of stuff that does the hard and boring stuff for you.

Anyway, my real vision for Happy Coding is to build a community of people who love coding. The tutorials and examples are the heart of that, but the forum is where that community actually becomes, well, a community. And I'm hoping that this new comment feature is a bit of a gateway into that community.

So, don't be a stranger! Say hello in the comments! :wave:
