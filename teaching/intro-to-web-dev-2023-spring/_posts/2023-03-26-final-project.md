---
layout: single-content-section
title: Final Project
thumbnail: /teaching/intro-to-web-dev-2022-spring/images/final-project/final-project.png
pixelate-thumbnail: true
tagline: Practice everything you learned by making your own webpage from scratch!
sort-key: 1500
meta-title: Final Project - Intro to Creative Web Dev
meta-description: Practice everything you learned by making your own webpage from scratch!
meta-image: /teaching/intro-to-web-dev-2022-spring/images/final-project/final-project.png
hide-video-icon: true
previousPost: /teaching/intro-to-web-dev-2023-spring/
tags: [teaching]
---

# Final Project

{% include toc.md %}

Congratulations, you've reached the end of Intro to Web Development!

You've learned a ton in the past few weeks. You learned how to use HTML, CSS selectors, CSS rules, flexbox, p5.js, calling functions, variables, if statements, animation, input, JavaScript, DOM manipulation, event callbacks, libraries like Bootstrap, and GitHub Pages.

Take a second to pat yourself on the back. That's a lot!

To practice all of that, we'll close out the course with a final project.

# Ideas

The real power of coding comes from being able to create anything you want, so rather than tell you what to build, I encourage you to create something that's personally meaningful to you.

Here are a couple ideas to get you thinking, organized roughly by complexity.

**Mild:**

- Create a page that links to your social media pages
- Show a grid of pictures you've taken
- Show different greetings depending on what time of day or year it is, or what the user tells you their name is

**Medium:**

- Create an interactive choose-your-own adventure game using JavaScript
- Code Pong in p5.js
- Use the Google Maps JavaScript library to show a list of your favorite places. See the [Google Maps tutorial](/tutorials/google-cloud/maps) and the [Washington DC Tour Map example](/examples/javascript/washington-dc-tour) for more info.

**Spicy:**

- Create a website for a real local business
- Make a game like [Flappy Bird](https://en.wikipedia.org/wiki/Flappy_Bird)
- Start your own blog using [Jekyll](/tutorials/html/jekyll).

For more inspiration, check out these resources:

- [CodePen Challenges](https://codepen.io/challenges) gives a different challenge every week. This is a great way to play with web development!
- [Genuary](https://genuary.art/prompts) is an event that gives you a different procedural generation prompt every day in January. This is a great way to play with p5.js!
- [The Coding Train](https://thecodingtrain.com/) has a ton of videos, including a [programming with p5.js video series](https://thecodingtrain.com/beginners/p5js/) that has tons of ideas about what you can do with p5.js.

# Grades

I want you to focus on stretching your web development muscles and building something that's personally meaningful to you, rather than worrying too much about jumping through hoops for grades.

With that in mind, projects will be worth 30 points, but you can choose any combination from below to get to 30:

- 3 points: HTML tags
  - If you're using p5.js, add at least one new HTML tag to the `index.html` file!
- 3 points: CSS
  - If you're using p5.js, add at least one style for the HTML you added.
  - If you're using Bootstrap, add at least one style on top of Bootstrap's styling.
- 3 points: An event callback (like `onclick` or `onload`) **or** p5.js `setup()` and `draw()` functions.
- 6 points: Animation
- 6 points: Input
  - This can be in p5.js, or in vanilla JavaScript by getting an input element's value.
- 6 points: Bootstrap component
- 10 points: If statements
- 10 points: DOM manipulation (changing the page with JavaScript)
- 10 points: Bootstrap grid
- 10 points: Flexbox
- 20 points: JavaScript library (not counting p5.js, Bootstrap, or Sweet Alert)
  - This is worth so much because there are a ton of JavaScript libraries out there, and each one is different, so I didn't want to limit you too much.
  - Note that **loading** a JavaScript library doesn't count unless you **use** it!

**Example p5.js project - Barking Dog**

I use the p5.js editor to create a new sketch. I add an `<h1>` element to the `index.html` file to give my sketch a title, and I add a `<p>` element to `index.html` to add a description. I style both of those in the `style.css` file. I call functions to draw a dog, and I use `if(mousePressed)` to draw the dog barking when the user presses the mouse.

**Example Bootstrap project: Professional Business Page**

I use Replit to create a new HTML project. I load Bootstrap's JavaScript and CSS files. I use Bootstrap grid to lay out a page that shows a gallery of services offered by the business. I add a Bootstrap carousel component to show some previously completed jobs. I add my own CSS to change the font. I add an input element for the user to enter their email address to contact me. When the user enters their email and clicks submit, for now I just show an alert box. After this class, I'll investigate actually sending the email address to the business.

**Example HTML project: Contact Page**

I use Replit to create a new HTML project. I create links to my Twitter, Instagram, and LinkedIn profiles, and I add CSS to give each link a different color and font. I lay them out using flexbox. Then I add JavaScript that gets the current time of day, and then I use an `if` statement to check that time and then add what I'm probably doing right now to the page.

**Example Library project: Restaurant Map**

I use Replit to create a new HTML project. I load the Google Maps JavaScript library, and I get my API key working so my map shows. Then I write JavaScript that adds five markers to the map, one for each of my favorite restaurants.
