---
layout: tutorial
title: What is Programming?
slug: what-is-programming
thumbnail: /tutorials/processing/images/what-is-programming-2.png
tagline: Get ready to write some code.
sort-key: 100
meta-title: What is Programming?
meta-description: Before diving into the code, let's talk about the terms we'll be using.
meta-image: /examples/processing/images/what-is-programming-2.png
tags: [tutorial,processing,fundamentals]
---

{% include toc.md %}

[The Processing tutorials](/tutorials/processing) teach you how to write code to create your own programs. But before we dive in, let's define some of the terms we'll be using.

## What's a program?

A **program** is a set of instructions that interact with a computer. You probably use programs every day. The web browser you're using to read this tutorial is a program. Notepad is a program. Games, data visualization, music and video players, these are all programs.

These programs tell your computer what to do. Your web browser tells your computer to display content from a website. Spotify tells your computer to play a music file. You might have heard words like *application* and *app* before- no matter what you call them, they're programs.

How does a program tell a computer what to do? Computers can't understand English (at least not yet), so programs are written in a language that computers can understand. We call this type of language **code**.

## What is programming?

A program is a set of instructions that tells a computer what to do, and those instructions are written in code. Programming (also called **coding**) is the process of writing that code.

## What is code?

Just like there are a bunch of different human languages, there are also a bunch of different kinds of coding languages. Different coding languages are good at different things: if you wanted to create the server part of a website, you might use Java. If you wanted to write low-level drivers that interact with hardware, you might use C++. If you wanted to create an interactive website, you might use JavaScript.

We'll be using a language called Processing.

## Why Processing?

Processing is designed to make it easier for programmers to create interactive, visual programs without requiring a ton of [boilerplate code](https://en.wikipedia.org/wiki/Boilerplate_code) (a bunch of code that you have to include just to get started, which is super annoying when you're eager to get started). This means we can get started making more interesting programs like visualizations and digital art, which I think is more fun than traditional command line programs.

Processing is maintained by [the Processing Foundation](https://processingfoundation.org/), who I'm a big fan of. Their mission statement starts with:

> *Our mission is to promote software literacy within the visual arts, and visual literacy within technology-related fields — and to make these fields accessible to diverse communities. Our goal is to empower people of all interests and backgrounds to learn how to program and make creative work with code, especially those who might not otherwise have access to these tools and resources.*

If that sounds interesting to you, then welcome to the Processing community!

## What if I want to learn Java or JavaScript?

Another thing I love about Processing is that it serves as a great stepping stone to other languages, especially Java and JavaScript.

Processing is built on top of Java, so it shares mostly the same syntax. If you're learning Processing, you're also learning Java. Processing sketches also share a lot in common with [p5.js](https://p5js.org/) sketches, which leads pretty naturally to learning JavaScript. You don't really have to understand what I'm talking about right now, but the point is that learning Processing makes it easier to learn Java or JavaScript.

So if your eventual goal is to learn more complicated languages like Java or JavaScript, that's completely fine. Learn the fundamentals in Processing, and then "graduate" to more complicated languages if you want to.

## Download Processing

You can download Processing from [here](https://processing.org/download/). Click the link that corresponds to the type of computer you're using.

The download gives you a `.zip` file. Double click the `.zip` file and then drag the directory inside it anywhere. (For now, putting it on your desktop is fine.) That gives you a folder, and inside that folder is a `processing.exe` file (or a similar runnable file on Mac and Linux). Double-click that file!

That opens up the Processing editor, which looks like this:

![Processing editor](/tutorials/processing/images/what-is-programming-1.png)

This is where you'll be writing your code. This is a **code editor**, which is a text editor with some extra features like syntax highlighting (coloring the text) and the run button (the triangular "play" button in the upper-left corner).

In your Processing editor, type this line of code and click the run button:

```java
ellipse(50, 50, 75, 75);
```

When you click the run button, Processing runs the code you just wrote. You should see a window that looks like this:

![circle](/tutorials/processing/images/hour-of-code-1.png)

You can also write code directly in the browser using this embedded editor:

{% include codepen-new.html slug-hash="oBdOMy" height="175" %}

Congratulations, you just wrote your first line of code! :tada:


## Homework

Over the next couple days, think about these questions:

- What programs do you use? What types of things do they tell the computer to do?
- What have you heard about different programming languages?
- What types of programs are you hoping to create?

## Next: [Let's write some code!](/tutorials/processing/calling-functions)
