---
layout: tutorial
title: React
thumbnail: /tutorials/javascript/images/react-1.png
tagline: Use React to build an interactive web app.
sort-key: 1000
meta-title: React Tutorial
meta-description: Use React to build an interactive web app.
meta-image: /tutorials/javascript/images/react-1.png
previousPost: /tutorials/javascript/
nextPost: /tutorials/javascript/
tags: [tutorial, javascript, react]
---

{% include toc.md %}

React is a popular JavaScript library that's very commonly used to make professional, interactive webpages.

React isn't a single thing. It's more like 5 different things:

1. A JavaScript library that organizes code into a concept called components
2. A JavaScript library that lets you load React components into the DOM
3. A JavaScript library that lets you write in a new syntax called JSX
4. An environment that makes coding with the above libraries a little easier
5. A way of thinking about how your code is organized

This tutorial introduces the first two concepts: React as a JavaScript library.

# Building on the Fundamentals

These tutorials assume you're already familiar with the fundamentals of JavaScript. That includes control flow statements like if statements and for loops, classes and object-oriented programming, and ES6 features.

If you aren't familiar with those concepts, that's okay! I'd recommend working through the [p5.js tutorials](/tutorials/p5js) and [JavaScript tutorials](/tutorials/javascript) first, and then coming back here.

Some tutorials and bootcamps will start you out directly in React. Between you and me, I don't love this approach. I think it's better to first learn the fundamentals in vanilla JavaScript, that way you understand what React is doing behind the scenes.

In fact, I think people tend to jump to React way too fast. React is great if your webpage uses a lot of interactive data, and it's hard to argue with its popularity. But I also see a lot of value in sticking with vanilla HTML and JavaScript if you don't really need React.

# A Brief History

React was created by a developer within Facebook named [Jordan Walke](https://twitter.com/jordwalke) in 2011. React was used to (re)build parts of Facebook and Instagram, and then React was released as open-source in 2013.

Although React is open-source, it's still owned and maintained by Facebook. Since 2013, React has grown to include React Native, which is a similar framework designed for mobile app development.

I won't rant too much more about the downsides of React, but I'll admit that it feels a little gross to use a framework with such close ties to Facebook, and whose original developer (from what I can tell) has very different politics than mine. (For the record, I don't think social media's biggest problem is that it has too much moderation.)

But I can't argue with the popularity of React, and learning it does unlock a lot of access to the industry, so here we are. I invite you to reflect on your own ethical feelings here, and I'd love to hear your thoughts.

With all of that said, let's get into it!

# DOM Manipulation

Remember from the [interactive HTML](/tutorials/javascript/interactive-html) tutorial that you can use functions like `document.getElementById()` to get an HTML element in your JavaScript code, and then you can use variables like `innerText` to set the content. You can also create HTML elements from your JavaScript, and get values entered by the user.

Here's an example that uses all of that to create a task list:

{% include codepen-vertical.html slug-hash="xxpxvYd" height=800 autoplay=true %}

This code uses JavaScript functions and variables to get, create, and modify HTML elements.

The rest of this tutorial will rebuild this example using React.

# React Library

At its core, React is a JavaScript library designed to make it easier to build a webpage based on data.

To load the JavaScript libraries that make up React, start by including these two lines in your HTML, exactly how you'd include any other JavaScript libraries:

```html
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```

The first line loads `react.js`, which provides code related to creating components (more on that below), and the second line loads `react-dom.js`, which provides code related to rendering those components to the DOM.

Now that you have the React libraries loaded, you can use code from those libraries in your own code:

```javascript
class App extends React.Component {
  render() {
    let h1Element =
        React.createElement('h1', {},
                            'Hello world!');
    return h1Element;
  }
}

function load() {
  let appElement = React.createElement(App);
  let rootElement = document.getElementById('root');
  ReactDOM.render(appElement, rootElement);
}
```

There's a lot going on here, so let's walk through it line by line:

- First, the code creates an `App` class that extends `React.Component`
- That class has a `render()` function
- Inside that `render()` function, the code calls the `React.createElement()` function and passes it three parameters: `'h1'` to create an `h1` tag, an empty object `{}` because the element will not contain any attributes, and `'Hello world!'` as the element's content. The `render()` function then returns that element.
- The code then defines a `load()` function, which will be called when the page loads.
- Inside the `load()` function, `let appElement = React.createElement(App)` creates an element out of the `App` class, and stores it in an `appElement` variable.
- `let rootElement = document.getElementById('root');` gets a reference to an element that's already in the HTML.
- Finally, `ReactDOM.render(appElement, rootElement);` tells React to render the app element inside the root element.

Putting it all together, it looks like this:

{% include codepen-vertical.html slug-hash="NWXbqjg" height=500 autoplay=true %}

# Homework

- Use React to create a "hello world" style homepage.
