---
layout: tutorial
title: Which Processing should I use?
thumbnail: /tutorials/p5js/images/which-processing-1.png
tagline: Should I use p5.js or Processing?
sort-key: 50
meta-title: Which Processing should I use?
meta-description: Should I use p5.js or Processing? What's the difference between Processing, Processing.js, and p5.js?
meta-image: /tutorials/p5js/images/which-processing-2.png
previousPost: /tutorials/p5js/
tags: [tutorial, p5.js, processing, processing.js, javascript]
updated: 2020-11-22
---

{% include toc.md %}

If you're new to coding, or even if you've been coding for years, understanding the differences between all the different languages and libraries out there can be really confusing. Should you learn Processing or p5.js? How does Processing.js fit into the picture? How do all of those relate to other languages? So before you dive into coding, let's take a minute to understand how the various versions of Processing relate to each other, and to other languages.

# Languages are Tools

When you're comparing different languages, it can be tempting to try to find the "best" one. But keep in mind that languages are a lot like tools, where each tool is designed for a different job.

It doesn't really make sense to ask *"which tool is better, a hammer or a saw?"* &nbsp; because each tool is designed for a different task. The same thing is true of programming languages!

 Different programming languages are good at different things: if you want to create a website, you’ll probably use HTML and JavaScript. If you want to create a server, you might use Java. If you wanted to write low-level drivers that interact with hardware, you might use C++. If you wanted to create an interactive website, you might use JavaScript.

So instead of trying to find the "best" language, you should try to find the language that best fits your goals.

One last thing to keep in mind is that learning about one tool doesn't mean you can't learn about other tools. In fact, learning how to use a hammer makes it easier to learn how to use a saw, and over time you'll likely use many different tools. Again, the same thing is true of programming languages!

So don't stress out too much about finding the perfect language. Anything you learn now will apply to any other language you learn along the way. The important thing is to try out new things and to find what's interesting to you!

# A Brief Processing History

To understand how all of this fits together, let's see a timeline of the major events:

- **1995:** Java is developed by [James Gosling](https://en.wikipedia.org/wiki/James_Gosling) at Sun Microsystems.
  - Java had a goal of ["write once, run anywhere"](https://en.wikipedia.org/wiki/Write_once,_run_anywhere) - any computer that can run Java can run programs written in Java. This was a big change from other programming languages at the time, which had to be recompiled for each type of computer.

- **2001:** Processing is developed by an artist named [Casey Reas](https://en.wikipedia.org/wiki/C.E.B._Reas) and a data scientist named [Ben Fry](https://en.wikipedia.org/wiki/Benjamin_Fry).
  - Processing is built on top of Java, with the goal of providing a simplified syntax that lets developers make creative animated and interactive applications.
  - Processing sketches could be embedded in webpages as Java applets.
  - Several "modes" are added to Processing, which lets developers write Processing applications in other languages, like [Processing.py](http://py.processing.org/) for Python.
  
- **2008:** Processing.js is developed by [John Resig](https://johnresig.com/blog/processingjs/).
  - With Processing.js, you'd write Processing code and then [transpile](https://en.wikipedia.org/wiki/Source-to-source_compiler) it into JavaScript code.
  - That code could then run inside a browser without a Java applet, and without knowing anything about web development.
  - This could be used as "JavaScript mode" in the Processing editor.
  
- **2013:** p5.js is developed by an artist named [Lauren McCarthy](http://lauren-mccarthy.com/).
  - The motivation behind p5.js was to take the original goals of Processing (making it easy to create animated and interactive programs) and develop a new JavaScript library that achieved those goals.
  - Unlike Processing.js, p5.js doesn't use the exact same syntax and function names as Processing did. For example, p5.js uses `createCanvas()` instead of `size()`.
  - p5.js can be used as "p5.js mode" from the Processing editor.
  
- **2014:** Java releases an update that makes it very hard to deploy applets.
  - Strict security settings and a required paid certificate mean that applets are essentially dead.
  - Later, browsers remove the ability to run applets at all.
  - This means you can no longer deploy Processing to the web, and must either use Processing.js or p5.js.
  
- **2015:** Processing is updated to [Processing version 3.0](https://github.com/processing/processing/wiki/Changes-in-3.0).
  - Before Processing 3, the `PApplet` class extended Java's `Applet` class. But since applets weren't really a thing anymore, it didn't make sense to keep that around.
  - Processing 3 also introduced a few new features (like the `surface` variable and the `settings()` function).
  
- **2016:** Processing.js is no longer actively developed.
  - Processing.js doesn't support any new Processing 3 features.
  - The Processing 3 editor no longer shows "JavaScript mode" for Processing.js.
- **2018**: The online [p5.js editor](https://medium.com/processing-foundation/hello-p5-js-web-editor-b90b902b74cf) is released, making it much easier to write and share p5.js code without knowing web development.
- **2020**: Both Processing and p5.js are still actively used and developed!

You don't have to memorize any of this, but hopefully it helps put everything into perspective.

# p5.js vs Processing.js

If you're still not sure about the difference between p5.js and Processing.js, don't worry! It's a subtle distinction. After all, they're both JavaScript versions of Processing, right?

The difference is a little bit philosophical, in that they had slightly different goals.

- **Processing.js** was based on Processing's syntax. There's pretty much a one-to-one mapping from Processing features to Processing.js features. This makes it easier for Processing developers to deploy their code as JavaScript, because Processing.js does the conversion for them. Processing.js tried to implement everything that Processing implemented. But after Processing 3, this is no longer the case, and Processing.js is no longer actively developed.

- **p5.js** is based on Processing's original goals, but the developers of p5.js didn't tie themselves to Processing's syntax. Some things are the same (like the `setup()` and `draw()` functions), but other things (like interaction with the page it's embedded in) are very different. The p5.js developers never tried to "keep up" with Processing, and instead focused on features that are unique to JavaScript development, like interacting with the webpage.

In other words, Processing.js was originally intended to be a **port** of Processing, with support for all of Processing's syntax. p5.js was more of a **reboot** using JavaScript syntax.

Processing.js is no longer maintained, and you should no longer use it except for some pretty specific use cases, which I'll mention in a second.

# Which Processing should I use?

With all these different versions of Processing, how do you know which one to use? Here's a list that explains my recommendations:

**I'm completely new to coding!**

You should start with [p5.js](/tutorials/p5js). I love p5.js because it comes with an amazing [online editor](https://editor.p5js.org/) that requires zero setup, and you can share what you make as a webpage with a single click.

**I know some web dev and want to get into creative coding!**

You should start with [p5.js](/tutorials/p5js). Behind the scenes, p5.js is a JavaScript library, so you can use anything you know about HTML, CSS, and JavaScript with p5.js code.

**I know some Java and want to get into creative coding!**

You should start with [Processing](/tutorials/processing). Processing is built on top of Java, so you can use anything you know about Java in Processing code.

On a personal note, this was the path I followed. I learned about Java in high school and then in college, and only later did I discover Processing. It opened up a whole world of creating coding for me!

**I already wrote a Processing sketch and want to share it on the web!**

If your sketch uses any Processing 3 features, or any Java-specific libraries or features, then you can only deploy your sketch as an executable file. You can link to a download of your executable file from a webpage, but you can't share this kind of sketch as a website itself.

If your sketch does **not** use any Processing 3 features or any Java-specific libraries or features, then you can use [Processing.js](/tutorials/processing/processing-js) to share your sketch as a website.

If deploying to the web is a priority for you, then you should also consider rewriting your code in [p5.js](/tutorials/p5js), since Processing.js is no longer maintained and will likely stop working with a future release of Processing or JavaScript.

**My code reads a lot of local files, or outputs something used by a bigger project.**

p5.js makes it easy to deploy your code to the web, but that comes at the cost of making it harder to do things like access files on your hard drive. After all, you wouldn't want any random website accessing your files!

So if your code needs to read in a lot of files from your hard drive, then you should probably use [Processing](/tutorials/processing).

For example, I use Processing to create these [movie color visualizations](/gallery/movie-colors/). I use one Processing sketch to convert a movie into a bunch of images (one for each frame), and then I use a different Processing sketch to take those image files and convert them into a poster or a visualization. It wouldn't really make sense to deploy those individual sketches to the web, and they need to access a ton of files on my hard drive, so I use Processing instead of p5.js.

**I want to get a job!**

Even if your end goal is to get a programming job that's not directly tied to creative coding, I still think that creative coding is a great way to practice the fundamentals of coding, which you can then apply to whatever you want.

I'd summarize my thoughts like this:

If you want to get a job as a frontend developer, then you should start with [p5.js](/tutorials/p5js) and then work your way through [HTML](/tutorials/html) and [JavaScript](/tutorials/javascript).

If you want to get a job as a backend developer or as an Android developer, then you should start with [Processing](/tutorials/processing) and then work your way through [Java](/tutorials/java) and [Java EE](/tutorials/java-server), or [Google Cloud](/tutorials/google-cloud) or [Android](/tutorials/android) depending on your goals.

# Choose Your Own Adventure

I listed my recommendations above because I know how confusing this is, but there aren't any strict rules about any of it. In the end, you should use whatever you're comfortable with or curious about!

If you're trying to decide between Processing and p5.js (or between any other language), the best advice I can give you is to try them all out! Put together a hello world program for each one, and see which one fits in your brain the best.

Both the [p5.js tutorials](/tutorials/p5js) and the [Processing tutorials](/tutorials/processing) are designed for people who have never coded before, so either one is a good choice. And remember that learning one language actually helps you learn other languages, so any time you spend learning is time well spent!

---

{% include url-thumbnail.html url="/tutorials/p5js/" %}
{% include url-thumbnail.html url="/tutorials/processing/" %}