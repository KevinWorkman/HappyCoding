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
previousPost: /tutorials/processing/
nextPost: /tutorials/processing/calling-functions
tags: [tutorial,processing,fundamentals]
---

{% include toc.md %}

If you're here, that means you're curious about writing code. Hi! Hello! Nice to meet you!

Before you dive in, let's define some of the terms we'll be using.

# What's a computer?

This might sound like an obvious question, but the answer has changed quite a bit over time.

[Early computers](https://en.wikipedia.org/wiki/Category:Early_computers) were designed for very specific tasks, usually involving math and encrypting messages during World War 2. They were very big (some took up an entire room!), and the only people who worked with them were specialized experts.

Over time, computers got smaller and more generalized, meaning they could do more than just crunch numbers. They also became more [personal](https://en.wikipedia.org/wiki/Personal_computer), meaning people who weren't experts could use them.

Nowadays, you probably own multiple computers. You might use a desktop computer, a laptop, a phone, a smart watch, a fitness tracker, or a gaming console. These are all computers.

# What's a program?

You probably use computer programs every day. The web browser you're using to read this tutorial is a program. Notepad is a program. Games, data visualizations, music and video players, these are all programs.

*Programs tell your computer what to do.* Your web browser tells your computer to display content from a website. Spotify tells your computer to play a music file. Many programs include a [user interface](https://en.wikipedia.org/wiki/User_interface) to allow humans to interact with the computer (like the buttons in your web browser). Other programs run "behind the scenes" to keep your computer running.

You might have heard words like *application* and *app* before- no matter what you call them, they're all programs.

# What is code?

How does a program tell a computer what to do? Computers can't understand English (at least not yet), so programs are written in a language that computers can understand. These computer languages are called **code**. You can think of code as a set of instructions that tell the computer what to do.

Just like there are a bunch of different [human languages](https://en.wikipedia.org/wiki/List_of_languages_by_number_of_native_speakers), there are also a bunch of different [coding languages](https://en.wikipedia.org/wiki/List_of_programming_languages). Different coding languages are good at different things: if you want to create a website, you'll probably be using HTML and JavaScript. If you want to create a server, you might use Java. If you wanted to write low-level drivers that interact with hardware, you might use C++. If you wanted to create an interactive website, you might use JavaScript.

# What is coding?

To summarize everything so far:

- Computers are devices like laptops and smart phones.
- Programs are a set of instructions that tell a computer what to do.
- Those instructions are written in code.

That means that **coding** (also called **programming**) is the process of writing that code!

This tutorial series shows you how to code using a language called [Processing](https://processing.org/).

# Why Processing?

Processing is designed for coders who want to create interactive, visual programs. It's designed for [creative coding](https://en.wikipedia.org/wiki/Creative_coding), and it sits right at the intersection of coding and art. That means you can get started making more interesting programs like visualizations and digital art, which I think is more fun than traditional command line programs.

Processing programs are often called *sketches* to evoke the feeling of doodling on a piece of paper. Just like you don't have to know what the end result will look like when you start doodling, you don't have to know what the end result will look like when you start coding.

I personally love Processing, and I've created a lot of games, art, and visualizations with it. I also think it's one of the best ways to get started coding, especially if you have a little Java experience.

Processing is maintained by [the Processing Foundation](https://processingfoundation.org/), which I'm also a big fan of. Their mission statement starts with:

> *Our mission is to promote software literacy within the visual arts, and visual literacy within technology-related fields — and to make these fields accessible to diverse communities. Our goal is to empower people of all interests and backgrounds to learn how to program and make creative work with code, especially those who might not otherwise have access to these tools and resources.*

If that sounds interesting to you, then welcome to the Processing community!

# What if I want to learn something else?

Another thing I love about Processing is that it serves as a great stepping stone to other languages, especially Java and JavaScript.

Processing is built on top of Java, so it shares mostly the same syntax. If you're learning Processing, you're also learning Java. Processing sketches also share a lot in common with [p5.js](/tutorials/p5js) sketches, which leads pretty naturally to learning JavaScript. It's okay if you don't know what any of that means yet, but the important thing is that if you *do* want to eventually learn about more advanced topics, then learning Processing first is a good way to get there.

So if your eventual goal is to learn more complicated languages like Java or JavaScript, that's completely fine. Learn the fundamentals in Processing, and then "graduate" to more complicated languages if you want to.

# Let's get started!

{% include youtube-embed.html slug="mtsC0uIJpkk" %}

---

You can download Processing from [here](https://processing.org/download/). Click the link that corresponds to the type of computer you're using.

The download gives you a `.zip` file. Double click the `.zip` file and then drag the directory inside it anywhere. (For now, putting it on your desktop is fine.) That gives you a folder, and inside that folder is a `processing.exe` file (or a similar runnable file on Mac and Linux). Double-click that file!

That opens up the Processing editor, which looks like this:

![Processing editor](/tutorials/processing/images/what-is-programming-1.png)

This is where you'll be writing your code. Similar to how Microsoft Word and Google Docs help you edit text, **code editors** like this help you write code. The Processing editor includes some handy features like syntax highlighting (coloring the text) to make it easier to read your code, and a play button (the triangular button in the upper-left corner) to make it easier to run your code.

In your Processing editor, type this line of code and click the play button:

```java
ellipse(50, 50, 75, 75);
```

When you click the play button, Processing runs the code you just wrote. You should see a window that looks like this:

![circle](/tutorials/processing/images/hour-of-code-1.png)

You can also write code directly in the browser using this embedded editor:

{% include codepen-new.html slug-hash="oBdOMy" height="175" %}

Congratulations, you just wrote your first line of code! :tada:

# Homework

Over the next couple days, think about these questions:

- What programs do you use? What types of things do they tell the computer to do?
- What have you heard about different programming languages?
- What types of programs are you hoping to create?