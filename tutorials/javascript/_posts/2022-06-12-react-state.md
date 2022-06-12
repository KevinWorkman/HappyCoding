---
layout: tutorial
title: React State
thumbnail: /tutorials/javascript/images/react-1.png
tagline: Add data to your components.
sort-key: 1300
meta-title: React State Tutorial
meta-description: Add data to your components.
meta-image: /tutorials/javascript/images/react-1.png
previousPost: /tutorials/javascript/react-components
nextPost: /tutorials/javascript/
tags: [tutorial, javascript, react]
---

{% include toc.md %}

Now you know how to use React and JSX to build a page from nested components.

So far, all of the examples have used hard-coded content that never changes. This tutorial introduces **state**, which lets you handle changing data that's rendered to the page.

# Events

Talking about data changing is a little easier if we can get input from the user, so before we talk about state, let's talk about events.

This example shows a button that increments a count whenever the user clicks.

{% include codepen-vertical.html slug-hash="VwQzQvE" height=500 autoplay=true %}

**Note:** I'm using this example to talk about events, but you shouldn't actually track the count like this! Read on to find out why.

There are a couple new things here:

First, the component contains a constructor:

```javascript
constructor(props) {
  super(props);
  this.count = 0;
  this.showMessage = this.showMessage.bind(this);
}
```

The constructor takes a `props` argument, which it passes to the parent class's constructor using the `super` keyword. If your component contains a constructor, you need this- even if your component doesn't use any properties!

Then the constructor initializes a `count` variable, and then contains this line:

```javascript
this.showMessage = this.showMessage.bind(this);
```

This goofy-looking line is needed to make the `showMessage()` function work. Specifically, it's needed to make the `this` keyword work inside the `showMessage()` function. Check out [React's events tutorial](https://reactjs.org/docs/handling-events.html) for more info on why.

The other new syntax is this JSX in the `render()` function:

```jsx
<button onClick={this.showMessage}>
  Click
</button>
```

This JSX creates a React button element that will call the `showMessage()` function whenever the user clicks.

# The Wrong Way

The above example contains data that changes over time: the `click` variable increments whenever the user clicks the button.

Right now, the click is only shown in an alert dialog. What if you wanted to show it directly in the page, in the HTML that's created by the `render()` function?

You might try adding this line to the JSX, just under the closing `</button>` tag:

```jsx
<p>You clicked {this.count} times.</p>
```

If you do this, you'll see `You clicked 0 times.` rendered to the page under the button. But if you click the button, the count displayed in the page never increases!

That's because React doesn't know that it needs to re-render the component. You might try calling `render()` yourself, but that won't work either because you aren't doing anything with the returned element.

To fix this, you can use something that React calls **state**.

# The Right Way

To tell React that a piece of data is tied to what's rendered by a component, you need to do three things:

First, in your component's constructor, initialize the `state` variable, and set it equal to an object that contains the fields you want to track.

```javascript
this.state = {count: 0};
```

Second, use the `state` variable inside your `render()` function:

```jsx
<p>You clicked {this.state.count} times.</p>
```

Finally, whenever you want to change a piece of data, call the `setState()` function:

```javascript
this.setState({count: this.state.count + 1});
```

**Note:** For React to see your change, you must call the `setState()` function! In this example, incrementing the `this.state.count` variable directly with the `++` operator would not work!

**Another note while we're at it:** When you call `setState()`, you only need to include variables that have changed. The object you pass in will be merged with your current state.

Putting it all together, it looks like this:

{% include codepen-vertical.html slug-hash="OJQjzWo" height=600 autoplay=true %}

# Nested Stateful Components

Now you know how to use state in your components to change what's shown in the DOM, and you've already seen how to nest your components to create more complicated DOM structures.

You can combine those ideas to create a page that consists of multiple nested stateful components.

Here's an updated version of the todo list example:

{% include codepen-vertical.html slug-hash="Yzexwra" height=600 autoplay=true %}

This code defines a top-level `App` component that renders a heading and a `TaskList`. The `TaskList` component renders a list that contains three `Task` elements. The `Task` component takes a `label` property and tracks a `done` boolean in its state. Clicks the task toggles its `done` field, which is used to render `Done` or `Not done` in the DOM.

Coming soon: How to create feedback loops from the top level of your React app, down to individual components, and back again!
