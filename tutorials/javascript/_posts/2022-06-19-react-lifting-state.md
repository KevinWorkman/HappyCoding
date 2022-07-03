---
layout: tutorial
title: Lifting State
thumbnail: /tutorials/javascript/images/react-1.png
tagline: Share state between components.
sort-key: 1600
meta-title: React Lifting State Tutorial
meta-description: Share state between your components.
meta-image: /tutorials/javascript/images/react-1.png
previousPost: /tutorials/javascript/react-keys
nextPost: /tutorials/javascript/react-css
tags: [tutorial, javascript, react]
---

{% include toc.md %}

Now you know how to use state in your React components. Here's an example:

{% include codepen-vertical.html slug-hash="PoQvmXK" height=600 autoplay=true %}

This code contains an `App` component, which renders a child `IncrementButton` component. That component tracks a `count` variable in its state. It renders a button that lets the user increment the count, and then renders the count itself.

Now, what if you wanted to add a `DecrementButton` component that decreased the count whenever it was clicked?

Take a second to think about how you might do that before reading on!

## Lifting State

Here are some options you might have thought about:

- You could go back to a single component with state that renders both buttons. This would work, but it defeats the point of React components and will become unwieldy in more complex codebases.
- You might think about **getting** the state from the `IncrementButton` component and using it in another component. Technically there are ways to do this, but it works against "the philosophy of React" which assumes that a component's state is private.

If you have multiple components that affect the same state, you should **lift** the state by following these steps:

1. Move your state to a parent component.
2. Write functions in your parent component to modify the state.
3. Pass **properties** down to your child components, **including the event listeners**.
4. Use those properties in your child components.

That might sound a little confusing, but it looks like this:

{% include codepen-vertical.html slug-hash="LYQoLLx" height=600 autoplay=true %}

Now, the state is tracked in the parent component. The `IncrementButton` child component takes in properties for the current count, and for a callback function which it then passes to its button as the `onClick` attribute.

## Sharing State

Now the state has been lifted to a parent component, and you've seen how to pass callback functions to child components. Now we can get back to adding a `DecrementButton` component.

{% include codepen-vertical.html slug-hash="abqrwYm" height=600 autoplay=true %}

This code now has a parent component that tracks a `count` variable in its state, and two child components that modify the state using callback functions.

**Note:** This example is meant to showcase the concept of lifting state, so I've made some design decisions here that I might not make in a "real" codebase. Specifically, in this example you don't get much from the buttons being their own components, but these concepts become more useful with more complicated codebases. Check out the to-do list section below for an example!

## State Flows Down

I mentioned previously that React is not just a JavaScript library- it's also a way of thinking about how to structure your code. Part of React's philosophy is that state is private, and state flows down through the component tree.

In other words, parent components shouldn't **get** any data from a child component's state. Instead, the parent should track the state, and children should call event callbacks to tell the parent to update the state. The parent should then pass the state down to children as properties.

I personally find this philosophy a little hard to think about, but React makes a little more sense when you start "thinking in React".

## React State Feedback Loop

All of this leads to what I think of as React's state feedback loop. By that I mean, the logic of React apps are structured like this:

1. A parent-level component tracks some state and defines functions that change that state.
2. That parent component passes parts of the state down to child components as **properties**, which then render different things based on those properties.
3. Child components call their parent's callback functions, which changes the state, which then changes the properties being passed down to the child components.

For example, let's modify the above example so that the count stays between `0` and `10`:

{% include codepen-vertical.html slug-hash="QWQRgze" height=600 autoplay=true %}

Now the parent component tracks the count, and also passes down a `disabled` property that disables each button if the count is about to go out of range. The state flows from the parent, to the children as properties, and back up to the parent as callback functions.

## To-Do List Example

Here's an updated version of the to-do list example that lifts the state so that the items are listed according to status:

{% include codepen-vertical.html slug-hash="vYdMPZp" height=600 autoplay=true %}
