---
layout: tutorial
title: Which Processing?
thumbnail: /tutorials/p5js/images/which-processing-1.png
tagline: Which Processing should I use?
sort-key: 100
meta-title: Which Processing?
meta-description: Which Processing should I use? What's the difference between Processing, Processing.js, and P5.js?
meta-image: /tutorials/p5js/images/which-processing-2.png
tags: [tutorial, p5.js, processing, processing.js, javascript]
---

Before we dive into learning about P5.js, let's take a minute to talk about how it fits into everything else we've learned about so far.

## A Brief Processing History

To understand how all of this fits together, let's see a timeline of the major events:

- **1995:** Java is developed by [James Gosling](https://en.wikipedia.org/wiki/James_Gosling) at Sun Microsystems.
  - Java had a goal of "write once, run anywhere" - any computer that can run Java can run Java programs. This was a big change from other programming languages at the time, which had to be recompiled for each type of computer.

- **2001:** Processing is developed by an artist named [Casey Reas](https://en.wikipedia.org/wiki/C.E.B._Reas) and a data scientist named [Ben Fry](https://en.wikipedia.org/wiki/Benjamin_Fry).
  - Processing is built on top of Java, with the goal of providing a simplified syntax that allows developers to create animated and interactive applications.
  - Several "modes" are added to Processing, which allows developers to write Processing applications in other languages, like [Processing.py](http://py.processing.org/) for Python.
  
- **2008:** Processing.js is developed by [John Resig](https://johnresig.com/blog/processingjs/).
  - Processing.js allowed Processing developers to [transpile](https://en.wikipedia.org/wiki/Source-to-source_compiler) their Processing code to JavaScript code.
  - Processing.js also included a JavaScript library that the generated JavaScript code could call.
  - This allowed Processing to be deployed as JavaScript, without programmers knowing web development.
  - This could be used as "JavaScript mode" in the Processing editor.

- **2013:** P5.js is developed by an artist named [Lauren McCarthy](http://lauren-mccarthy.com/).
  - The motivation behind P5.js was to take the original goals behind Processing (making it easy to create animated and interactive programs) and develop a new pure JavaScript framework that captured those goals.
  - This can be used as "p5.js mode" from the Processing editor.

- **2014:** Java releases an update that makes it very hard for novices to deploy applets.
  - Various security settings and requiring a paid certificate means that applets are basically dead.
  - Later, browsers remove the ability to run applets at all.

- **2015:** Processing is updated to [version 3.0](https://github.com/processing/processing/wiki/Changes-in-3.0).
  - Before Processing 3, the `PApplet` class extended Java's `Applet` class. But since applets weren't really a thing anymore, it didn't make sense to keep that around.
  - Processing 3 also introduced a few features (like the `surface` variable and the `settings()` function).
  
- **2016:** Processing.js is no longer actively developed.
  - Processing.js doesn't support any new Processing 3 features.
  - The Processing 3 editor no longer shows "JavaScript mode" for Processing.js.
  
You don't have to memorize any of this, but hopefully it helps put everything into perspective.

## P5.js versus Processing.js

If you're still not sure what the difference between P5.js and Processing.js is, don't worry! It's a subtle distinction. After all, they're both basically JavaScript versions of Processing, right?

The difference is a little bit philosophical, in that they had slightly different goals.

- **Processing.js** is based on Processing's syntax. There's pretty much a one-to-one mapping from Processing features to Processing.js features. This makes it very easy for Processing developers to deploy their code as JavaScript, because Processing.js does the conversion for them. Processing.js tried to implement basically everything that Processing implemented. (But after Processing 3 this is no longer the case, and Processing.js is no longer actively developed.)

- **P5.js** is based on Processing's original goals, but the developers of P5.js didn't tie themselves to Processing's syntax. Some things are the same (like the `setup()` and `draw()` functions), but other things (like interaction with the page it's embedded in) are very different. P5.js never tried to "keep up" with Processing, and instead focused on features that are unique to JavaScript development, like the [p5.dom library](https://p5js.org/reference/#/libraries/p5.dom).

In other words, Processing.js was originally intended to be a **port** of Processing, with support for all of Processing's syntax. P5.js was more of a **reboot** in pure JavaScript syntax.

## Which Processing should I use?

With all these different versions of Processing, how do you know which one to use? Here's a little flow chart (flow list?) that explains my recommendations:

- Are you completely new to coding?
  - **Yes, I'm new to coding.** Then start with regular Processing. Processing provides a simple editor and gives immediate feedback when you make a mistake, which I think is very helpful when learning how to code. (JavaScript doesn't tell you when you make a mistake, and instead does weird things that are hard to figure out if you don't know what's going on.)
  - **No, I'm already familiar with Processing and JavaScript.** Cool. Do you already have a Processing sketch you're trying to deploy?
    - **Yes, I already have a sketch.** Okay, does that sketch use any Java libraries or Processing 3 features?
      - **Yes, it uses Java libraries or Processing 3 features.** In that case you have to use regular Processing, and you can only deploy your sketch as an executable. You can't run it in a webpage.
      - **No, it doesn't use Java libraries or Processing 3 features.** Then you can deploy your sketch as Processing.js without changing any syntax.
    - **No, I'm starting a new sketch.** Cool, then I'd recommend P5.js!
      - Unless you need to use a Java library or feature, or if you have no interest in learning JavaScript or deploying as a webpage. In that case your best bet is to use regular Processing.
    
In other words, I recommend using regular Processing if you're new to coding, or if you have an existing sketch that uses Java libraries or Processing 3 syntax. I recommend using Processing.js if you already have a regular Processing sketch (with no Java libraries or Processing 3 syntax) that you're trying to deploy. And I recommend using P5.js if you've already learned about Processing and JavaScript, and you're thinking about starting a new sketch.

Those are my recommendations, but there aren't any strict rules about any of this. In the end, you should use whatever you're comfortable with or curious about!

## Learning P5.js as a Novice

If you're just starting out learning how to code, I recommend using regular Processing first. This is because Processing, built on Java, is **compiled** which means that you get a warning as soon as you type something incorrectly. (It shows up as a little red underline in the Processing editor.)

Compare that to P5.js, built on JavaScript, which is **interpreted** instead of compiled. This means that you don't get any errors until you actually run your code. And even then the errors can be pretty confusing, and you have to know where to find them, and often lead to weird behaviors instead of friendly errors. P5.js is [getting better at this](https://github.com/processing/p5.js/wiki/Friendly-Error-System), but it's still much easier to shoot yourself in the foot in JavaScript than it is in Java.

Plus, a lot of the cooler things about P5.js require an understanding of HTML and JavaScript. I think this is all a lot to learn at once, which is why I recommend starting with regular Processing to learn the basics of programming, then learning HTML and JavaScript, and finally combining it all to learn about P5.js. That's how I'm going to organize the tutorials on this site.

All of that being said, that's just my opinion, and it's what I personally recommend. But if you're a novice and you're dead set on starting with P5.js, then check out [the P5.js getting started guide](https://p5js.org/get-started/) and [the learn guide](https://p5js.org/learn/). I also recommend [this video playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA) by Daniel Shiffman.

Of course, if you start learning P5.js and you find it a bit overwhelming, you can always come back here and start learning the basics in Processing! :smile_cat: