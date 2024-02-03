---
layout: post
title: Welcome to Coding
thumbnail: /tutorials/p5js/images/hello-world-3.png
tagline: Get ready to write some code!
sort-key: 100
meta-title: Welcome to Coding p5.js
meta-description: Get ready to write some code!
meta-image: /tutorials/p5js/images/hello-world-3.png
includeP5jsWidget: true
tags: [tutorial, p5.js, javascript]
previousPost: /tutorials/p5js/
nextPost: /tutorials/p5js/calling-functions
---

{% include toc.md %}

If you're here, that means you're curious about writing code. Hi! Hello! Nice to meet you!

Before you dive in, let's define some of the terms we'll be using.

{% include youtube-embed.html slug="55KksCk_3U8" %}

---

# What's a computer?

This might sound like an obvious question, but the answer has changed quite a bit over time.

[Early computers](https://en.wikipedia.org/wiki/Category:Early_computers) were designed for very specific tasks, usually involving math and encrypting messages during World War 2. They were very big (some took up an entire room!), and the only people who worked with them were specialized experts.

Over time, computers got smaller and more generalized, meaning they could do more than just crunch numbers. The emergence of [personal computer](https://en.wikipedia.org/wiki/Personal_computer) means that people who weren't experts could use them.

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

This tutorial series shows you how to code using a tool called [p5.js](https://p5js.org/).

# Why p5.js?

p5.js is designed for coders who want to create interactive, visual programs that run directly in a web page. It's designed for [creative coding](https://en.wikipedia.org/wiki/Creative_coding), and it sits right at the intersection of coding and art.

p5.js programs are often called *sketches* to evoke the feeling of doodling on a piece of paper. Just like you don't have to know what the end result will look like when you start doodling, you don't have to know what the end result will look like when you start coding.

I personally love p5.js, and I've created a lot of games, art, and visualizations with it. I also think it's the best way to get started coding, because it doesn't require downloading or installing anything, and it makes sharing your creations easy.

p5.js also has a very supportive community. This is from their [community page](https://p5js.org/community/):

>  *p5.js is a community interested in exploring the creation of art and design with technology.*
>
> *We are a community of, and in solidarity with, people from every gender identity and expression, sexual orientation, race, ethnicity, language, neuro-type, size, ability, class, religion, culture, subculture, political opinion, age, skill level, occupation, and background. We acknowledge that not everyone has the time, financial means, or capacity to actively participate, but we recognize and encourage involvement of all kinds. We facilitate and foster access and empowerment. We are all learners.*

p5.js is maintained by [the Processing Foundation](https://processingfoundation.org/), which I'm also a big fan of. Their mission statement starts with:

> *Our mission is to promote software literacy within the visual arts, and visual literacy within technology-related fields — and to make these fields accessible to diverse communities. Our goal is to empower people of all interests and backgrounds to learn how to program and make creative work with code, especially those who might not otherwise have access to these tools and resources.*

If that sounds interesting to you, then welcome to the p5.js and Processing community!

# What if I want to learn something else?

Another thing I love about p5.js is that it's a great stepping stone to other languages, especially HTML, CSS, and JavaScript, but also to Processing and Java.

Behind the scenes, p5.js is a JavaScript library, which runs inside of an HTML web page. p5.js is based on Processing, which itself is based on Java. It's okay if you don't know what any of that means yet, but the important thing is that if you *do* want to eventually learn about more advanced topics, then learning p5.js first is a good way to get there.

I personally recommend learning the fundamentals in p5.js, and then branching out from there based on your goals.

(Of course, if you want to learn Processing and/or Java, you can always start with [the Processing tutorials](/tutorials/processing) instead!)

# Let's get started!

Get to the [p5.js editor](https://editor.p5js.org).

You should see this:

![p5.js editor](/tutorials/p5js/images/welcome-to-coding-1.png)

This is where you'll be writing your code. Similar to how Microsoft Word and Google Docs help you edit text, **code editors** like this help you write code. The p5.js editor includes some handy features like syntax highlighting (coloring the text) to make it easier to read your code, and a play button (the triangular button in the upper-left corner) to make it easier to run your code.

Click the play button now. You should see this:

![p5.js editor running code](/tutorials/p5js/images/welcome-to-coding-2.png)

When you click the play button, the p5.js editor runs your code and shows the result in the "preview" section on the right side of the screen. For now, the only thing the code does is create a drawing canvas and give it a gray background.

The next tutorial talks more about exactly what's happening here, but for now, try changing your code to this:

{% include p5js-widget.html width=400 height=400 %}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(200, 200, 300);
}
</script>

**Side note:** The tutorials include these embedded p5.js editors to make it easier to try out code as you read. But when you're coding on your own, you should use the standalone p5.js editor since it lets you save and share your work!

Make sure your `;` semicolons and `{ }` curly brackets are all in order, and then click the play button again. Now you should see this:

![p5.js editor showing a circle](/tutorials/p5js/images/welcome-to-coding-3.png)

Congratulations, you just wrote your first line of code! 🎉

# Homework

Over the next couple days, think about these questions:

- What programs do you use? What types of things do they tell the computer to do?
- What have you heard about different programming languages?
- What types of programs are you hoping to create?
