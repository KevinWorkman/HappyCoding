---
layout: tutorial
title: Fetching Data
thumbnail: /tutorials/javascript/images/react-1.png
tagline: Fetch data from a server in React.
sort-key: 1800
meta-title: Fetching Data in React
meta-description: Fetch data from a server in React.
meta-image: /tutorials/javascript/images/react-1.png
previousPost: /tutorials/javascript/react-lifting-state
nextPost: /tutorials/javascript/
tags: [tutorial, javascript, react]
---

{% include toc.md %}

Now you know how to build a React app using stateful components. So far, all of the examples used hard-coded data to build an app, but "real" React apps are usually built from data that comes from a server. This tutorial talks about using the `fetch()` function inside of a React component.

## Fetch

The `fetch()` function lets you request content from a URL. That content is usually HTML that gets added directly to the page, or it's JSON that gets further processed by JavaScript. Here's an example:

{% include codepen-vertical.html slug-hash="YzNqvoo" height=600 autoplay=true default-tab="html" %}

If you're not familiar with the `fetch()` function, you can learn more here:

{% include url-thumbnail.html url="/tutorials/javascript/fetch" %}

## React Component Lifecycle

By now you know that React components must define a `render()` function, which returns React elements that then get converted to HTML elements.

React components can also define other **lifecycle functions** that React automatically calls at certain times. Here are some examples:

- `constructor` is called when a component is instantiated. You've already seen this one!
- `render` is called automatically when a component's state changes. You've already seen this one too!
- `componentDidMount` is called when the component is added to the DOM, after the first time it's rendered. This is a good place to fetch data.
- `componentWillUnmount` is called when a component is about to be removed from the DOM. This is a good place to clean up things like timers.

See the [React.Component docs](https://reactjs.org/docs/react-component.html) for other lifecycle functions.

## React Fetch

Here's an example that uses the `componentDidMount()` function to fetch data:

{% include codepen-vertical.html slug-hash="LYdbVGm" height=600 autoplay=true default-tab="html" %}

(<a href="https://codepen.io/KevinWorkman/live/LYdbVGm" target="_blank">Click here to open the React fetch example in a new tab.</a>)

When you load this example page, React first instantiates the `App` component by calling its constructor, then React calls the `render()` function. The first time around, the `render()` function returns content that contains a `Loading...` message. After the component is added to the DOM, React calls the `componentDidMount()` function, which then calls the `fetch()` function to fetch data. This example code uses promise chaining to modify the state when the response comes back. When the state is modified, React calls the `render()` function again, and then shows a random message from the fetched data in the page.

This example used promise chaining, but you could also use the `async` and `await` keywords to handle the response.

## Nested Fetches

Here's another example that contains nested components that all fetch data:

{% include codepen-vertical.html slug-hash="MWVJovQ" height=600 autoplay=true default-tab="html" %}

(<a href="https://codepen.io/KevinWorkman/live/MWVJovQ" target="_blank">Click here to open the nested fetches example in a new tab.</a>)

This code uses the [Wikipedia API](https://www.mediawiki.org/wiki/API:Main_page) to fetch information about an article. It then creates child components for each image in the article, and those child components each fetch the URL of their respective image and display it.

## To-Do List Example

Here's our to-do list app, rewritten to fetch the data from a backend.

{% include codepen-vertical.html slug-hash="vYRgaGq" height=600 autoplay=true default-tab="html" %}

For this example, the "backend" is a static JSON file that I created ahead of time, but you could use the same approach to fetch data from a REST API.

## POSTing Data

Here's an extension of the to-do list example, which also sends data to the server whenever the user modifies a task:

{% include codepen-vertical.html slug-hash="MWVJqvR" height=600 autoplay=true default-tab="html" %}

This example code won't actually work because `HappyCoding.io` isn't set up to accept POST requests, but you could use this approach to send data to a REST API from a React app.
