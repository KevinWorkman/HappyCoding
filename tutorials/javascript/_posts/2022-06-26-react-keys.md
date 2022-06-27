---
layout: tutorial
title: Keys
thumbnail: /tutorials/javascript/images/react-1.png
tagline: How (and Why) to use Keys in React.
sort-key: 1400
meta-title: React Keys Tutorial
meta-description: How (and Why) to use Keys in React.
meta-image: /tutorials/javascript/images/react-1.png
previousPost: /tutorials/javascript/react-lifting-state
nextPost: /tutorials/javascript/
tags: [tutorial, javascript, react]
---

{% include toc.md %}

If you've been working through these React tutorials in order, you might have noticed this error message in your JavaScript console:

```error
Warning: Each child in a list should have a unique "key" prop.
```

This tutorial talks about what that error means, and how (and why) to fix it.

## From State to DOM

React stores data in its state, and then uses that state to render React elements. These look like HTML elements (especially if you're using JSX, like these tutorials have been), but they're really JavaScript objects. Behind the scenes, React converts these React elements into HTML elements, which are then rendered to the DOM.

As the state changes, React's `render()` function returns a new tree of React elements, and then here's the important part: **React only updates parts of the DOM that have changed.**

Here's an example:

{% include codepen-vertical.html slug-hash="mdxbyGj" height=600 autoplay=true %}

Use your browser's developer tools to inspect the elements in this example, and then try clicking the button. (<a href="https://codepen.io/KevinWorkman/live/mdxbyGj" target="_blank">Click here to open the example in a new tab.</a>)

<img alt="Animation showing the parts of the DOM changing as items are added and removed." src="/tutorials/javascript/images/react-keys-1.gif" style="border: thin solid black;" />

The `render()` function of the `App` component returns a few React elements, which are then converted to HTML elements and added to the DOM. But notice that only the `<p>` element in the middle changes, and the rest of the DOM stays the same.

This is part of the magic of React: as a component's state changes, React only modifies parts of the DOM that have changed, and leaves the rest of the DOM alone.

## List Updates

Now you've seen that React only updates parts of the DOM that have changed.

Here's another example:

{% include codepen-vertical.html slug-hash="gOvVLep" height=600 autoplay=true %}

Use your browser's developer tools to inspect the elements in the list, and then try adding and removing items. (<a href="https://codepen.io/KevinWorkman/live/gOvVLep" target="_blank">Click here to open the example in a new tab.</a>)

<img alt="Animation showing the DOM changing as items are added and removed" src="/tutorials/javascript/images/react-keys-2.gif" style="border: thin solid black;" />

Notice where the DOM changes as the state changes. Specifically, notice that when you add or remove an item from the beginning of the list, **every subsequent list element also changes**, even though their content isn't actually changing.

That's because React isn't smart enough to understand when content moves but doesn't change. If you have a list like this:

- Apples
- Bananas
- Strawberries

And then you add an item to the beginning of the list:

- Oranges
- Apples
- Bananas
- Strawberries

...React will see that `Apples` changed to `Oranges`, `Bananas` changed to `Apples`, `Strawberries` changed to `Bananas`, and that a new `Strawberries` item was added to the end. And since React thinks that the content of ever list item has changed, it updates every `<li>` element in the DOM.

That might be okay for a small page like this. But as your page becomes more complicated, updating the DOM becomes more expensive. To help avoid unnecessary updates, React uses **keys** to track elements that might move and change.

## Keys

To use keys, add a `key` attribute to elements that are generated from a loop or list. The value can be anything you want, but each sibling element should have a unique key value. Key values can be the underlying ID in the data, an ID that you increment over time, or a UUID.

If the state contains an array of items, and each item already has an ID, here's how you might use those IDs as keys:

```JSX
<ul>
  {
    this.state.items.map((item) =>
      <li key={item.id}>
        {item.label}
      </li>
    )
  }
</ul>
```

Here's the same example from before, this time with keys added:

{% include codepen-vertical.html slug-hash="NWYKgYw" height=600 autoplay=true %}

Use your browser's developer tools to inspect the elements in the list, and then try adding and removing items.(<a href="https://codepen.io/KevinWorkman/live/NWYKgYw" target="_blank">Click here to open the example in a new tab.</a>)

<img alt="Animation showing only parts of the DOM changing as items are added and removed." src="/tutorials/javascript/images/react-keys-3.gif" style="border: thin solid black;" />

Notice that only the added or removed element changes, and the rest of the DOM stays the same. That's because React is now using the keys to determine which parts of the DOM have actually changed.

## Indexes as Keys

When choosing a value for your keys, you might be tempted to use a loop index as the key value. After all, you're already looping over an array, so you might as well use the index, right?

And yes, you could do something like this:

```jsx
<ul>
  {
    this.state.items.map((item, index) =>
      <li key={index}>
        {item.label}
      </li>
    )
  }
</ul>
```

However, this approach won't actually prevent React from re-rendering every item! Here's why: Let's say you started with these items and keys:

<table>
  <tr>
    <th>Index</th>
    <th>Label</th>
  </tr>
  <tr>
    <td>0</td>
    <td>Apples</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Bananas</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Strawberries</td>
  </tr>
</table>

And then your data changed to include a new item:

<table>
  <tr>
    <th>Index</th>
    <th>Label</th>
  </tr>
  <tr>
    <td>0</td>
    <td>Oranges</td>
  </tr>
  <tr>
    <td>1</td>
    <td>Apples</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Bananas</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Strawberries</td>
  </tr>
</table>

If you're using the indexes as keys, React's rendering logic will go something like this:

- Okay, the state has changed, so it's time to re-render!
- The item with key `0` had a content of `Apples`, but now it has a content of `Oranges`. That means I need to re-render it!
- The item with key `1` had a content of `Bananas`, but now it has a content of `Apples`. That means I need to re-render it!
- ...and so on, for every item in the list.

In other words, you're back to the original problem of React not being smart enough to tell the difference between an element that has *moved* and an element that has *changed*.

So when in doubt, don't use indexes as keys!

## To-Do List Example

{% include codepen-vertical.html slug-hash="ExEYvpg" height=600 autoplay=true %}

Use your browser's developer tools to inspect the elements in the list, and then try marking a task as completed.(<a href="https://codepen.io/KevinWorkman/live/ExEYvpg" target="_blank">Click here to open the example in a new tab.</a>) Notice how the DOM only updates the elements that have changed!
