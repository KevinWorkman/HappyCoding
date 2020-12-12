---
layout: blog-post
title: New and Improved p5.js and Processing Tutorials
meta-title: New and Improved p5.js and Processing Tutorials
meta-description: Happy Coding Now Has New and Improved p5.js and Processing Tutorials
meta-image: /tutorials/p5js/images/hello-world-3.png
---

{% include toc.md %}

When I [first started](/blog/hello-world) Happy Coding back in 2016, I had one main goal: introduce the fundamentals of coding using the starting point with the lowest barrier to entry, and over time expand on that to include pretty much everything I know about coding.

Back in 2016, the most logical starting point was [Processing](/tutorials/processing). Processing lets you write animated and interactive programs without much setup or prior knowledge. Download the Processing editor, write some code, and click the play button!

And since then, that's been my recommendation to anyone asking how to learn to code: start with Processing, and then branch out from there. Until now.

![Mitch Hedberg](/blog/images/p5js-tutorials/mitch.png)

# p5.js

Similar to Processing, p5.js also lets you write animated and interactive programs, but with a basis in JavaScript instead of Java.

I didn't recommend starting in p5.js because it required a few more setup steps than Processing. You had to create an HTML file, understand how HTML and JavaScript worked together, how to edit those files, and how to open them in a browser. So to get started, you'd either spend a lot of time on boilerplate, or you'd have to hand-wave away a lot of what was happening. That's a lot of "invisible" knowledge for getting started, which is why I recommended starting in Processing instead of p5.js.

Then in late 2018, [the p5.js web editor](https://medium.com/processing-foundation/hello-p5-js-web-editor-b90b902b74cf) changed all of that.

With the web editor, you can start coding directly in your browser without downloading anything. And it's set up in a way that means you don't have to understand HTML to get started. But if you do want to peek behind the scenes, it's one click away. The p5.js web editor also lets you share your work as a webpage.

All of that makes p5.js the perfect entry point for learning the fundamentals of coding. I can't overstate how much I love the p5.js web editor. My teacher friends have taught me the concept of "low floor, high ceiling, wide walls" where the best educational tools make it easy to get started but also lead to more advanced topics, and include a variety of interesting paths.

The p5.js editor is the best example of "low floor, high ceiling, wide walls" that I've ever seen.

I've used the p5.js editor for my own coding, and for [CC Fest](http://ccfest.rocks/) and a couple sessions for [SPS](https://buildyourfuture.withgoogle.com/programs/softwareproductsprint/). Slowly but surely, my recommendation went from starting with Processing to starting with p5.js.

# p5.js Tutorials

With all of that in mind, [earlier this year](https://twitter.com/KevinAWorkman/status/1257507624972546048), I started writing the new and improved [p5.js tutorials](/tutorials/p5js). These new p5.js tutorials are designed for folks who are completely new to coding, and you don't have to know Processing or anything else to understand them.

From start to finish this took me about 6 months, although a couple of those months were spent updating the [Google Cloud tutorials](https://happycoding.io/blog/google-cloud-java-11). I didn't really [plan](/blog/happy-new-year-2020) to spend that much time on this, but I do think it's an important piece of [what Happy Coding is supposed to be](/blog/what-is-happy-coding), so I'm glad I did.

# Processing Tutorials

As part of writing the p5.js tutorials, I also went back and updated the existing [Processing tutorials](/tutorials/processing). It was interesting to see how much I've changed since I originally wrote them.

For example, [here](https://github.com/KevinWorkman/HappyCoding/commit/d674c7bf1e40ba81d6b1309346ded35087d2d338) are the updates I made to the [using variables](/tutorials/processing/using-variables) tutorial. I noticed little differences like saying "you" instead of "we" (because the reader is the one doing the work, not me), and avoiding words like "simple" and "basic" (because nothing is simple or basic), and moving away from game-y type examples (targets) to more artsy examples (flowers). I don't think any of that is particularly profound, but it was a little bit like collaborating with another person: me from 4 years ago.

I've been a bit of a Java and Processing fanboy, mostly because Java is what I learned first, and it's what I spent most of my time with. I've been getting more into JavaScript these past few years, and at my day job it's what I now spend most of my time in, but I still "feel" like a Java guy. So it honestly felt a little bit like a betrayal to "admit" that p5.js is such a wonderful tool, especially for novices.

I believe that [languages are tools](/tutorials/p5js/which-processing), so rather than trying to debate which language is "best", it only really makes sense to talk about which tools are better for certain goals. I still love Processing, and I still use it for a lot of my own personal projects, especially ones that deal with a lot of local files. I also think Processing is a perfect gateway into creative coding for folks who have seen a little bit of Java, for example in an introductory CS class. For those folks, the new and improved [Processing tutorials](/tutorials/processing) aren't going anywhere.

So this isn't me saying that p5.js has completely replaced Processing in my heart. But p5.js is an awesome new gateway into the coding world, and I'm excited to welcome anybody who discovers it into the community.

# What's Next?

I'll save my pontificating for my annual new year blog post, but for now I'll say that the p5.js tutorials lead to a few interesting next steps, like expanding the teaching resources and adding examples. Or maybe it makes sense to give the server tutorials a little TLC.

But either way, I think that the new p5.js tutorials help flesh out my "vision" for Happy Coding in a really meaningful way.

![tutorial path](/tutorials/images/tutorial-path.png)

This blog post will be my 1000th commit to the [Happy Coding repo](https://github.com/KevinWorkman/HappyCoding). Somehow it feels right that this announcement coincides with such a cool milestone. Here's to the next 1000!