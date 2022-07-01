---
layout: tutorial
title: Loops
thumbnail: /tutorials/javascript/images/react-1.png
tagline: Use loops and iterate over arrays.
sort-key: 1400
meta-title: React Loops Tutorial
meta-description: Use loops and iterate over arrays.
meta-image: /tutorials/javascript/images/react-1.png
previousPost: /tutorials/javascript/react-state
nextPost: /tutorials/javascript/react-keys
tags: [tutorial, javascript, react]
---

{% include toc.md %}

Now you know how to use state in your React components, which lets you build a webpage from your data.

So far, all of our examples have used hard-coded values. This tutorial shows you how to use loops in React so you can iterate over an array of data instead.

## The Wrong Way

If you're like me, you might expect something like this to work:

```jsx
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['lions', 'tigers', 'bears']}
  }

  render() {
    return (
      <div>
        <h1>Items</h1>
        <ul>
          {
          for (const item of items)
            <li>{item}</li>
          }
        </ul>
      </div>
    );
  }
}
```

But if you try that, you'll get an error like this:

```error
Uncaught SyntaxError: Unexpected token
for (const item of items)
^
```

To understand why this doesn't work, remember that JSX is converted to JavaScript. You can use the [Babel browser translator](https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABAJwKZgCauQCgJSIDeAUIiqlCMkjgDwgA2AfKWYrQzEwDLxgDOtAPScWbdqIAqMAObZBIrqzIcuAIVQBDZAtGthjJngDcxAL5A&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.18.7&externalPlugins=&assumptions=%7B%7D) to see the JavaScript that's generated from a snippet of JSX. Try converting this JSX to JavaScript:

```jsx
function render() {
  return (<ul>
    <li>Lions</li>
    <li>Tigers</li>
    <li>Bears</li>
  </ul>);
}
```

The generated JavaScript code looks something like this:

```javascript
function render() {
  return React.createElement('ul', null,
    React.createElement('li', null, 'Lions'),
    React.createElement('li', null, 'Tigers'),
    React.createElement('li', null, 'Bears'));
}
```

The generated code calls the `React.createElement()` function to create a `<ul>` element which then contains nested `<li>` elements. This is plain old vanilla JavaScript!

Thinking in plain old vanilla JavaScript, it's a little more obvious that this wouldn't work:

```javascript
function render() {
  return React.createElement('ul', null,
    for (const item of items) {
      React.createElement('li', null, item);
    });
}
```

This syntax is invalid, because you can't pass a `for` loop as an argument to a function. That's why the above "wrong way" won't work in JSX.

However, you can pass an array as an argument:

```javascript
function render() {
  return React.createElement('ul', null,
    [React.createElement('li', null, 'Lions'),
     React.createElement('li', null, 'Tigers'),
     React.createElement('li', null, 'Bears')])
}
```

So now the question is, how can you convert an array of data into an array of React elements?

## Map

JavaScript arrays contain a `map` function that iterates over every item in the array, does some logic to convert the item into a new item, and collects those new items into a new array.

The `map()` function takes a function as an argment, where that function takes an item and returns the new item.

```javascript
const input = ['HeLlO', 'wOrLd'];
const output = input.map(convertToLowerCase);
console.log(output); // prints ['hello', 'world']

funtion convertToLowerCase(word) {
  return word.toLowerCase();
}
```

And using arrow functions, that syntax can be shortened:

```javascript
const input = ['HeLlO', 'wOrLd'];
const output = input.map((word) => word.toLowerCase());
console.log(output); // prints ['hello', 'world']
```

So now back to the plain old JavaScript example, you can convert an array of items into an array of React elements like this:

```javascript
React.createElement('ul', null,
  this.state.items.map((item) => React.createElement('li', null, item)))
```

Which can be shortened even further in JSX:

```jsx
<ul>
  {
  this.state.items.map((item) => <li>{item}</li>)
  }
</ul>
```

This JSX creates a `<ul>` element, and passes in child `<li>` elements in the form of an array created using the `map()` function.

Putting it all together, it looks like this:

{% include codepen-vertical.html slug-hash="zYWGrzb" height=600 autoplay=true %}

## To-Do List Example

Here's our to-do list example, now using an array of data as its source of content:

{% include codepen-vertical.html slug-hash="MWVwKVz" height=600 autoplay=true %}

## Learn More

- Special thanks to [Sophie Alpert on Stack Overflow](https://stackoverflow.com/a/22877049/873165) for helping me understand how loops in React work.
- [Lists and Keys - Official React Tutorials](https://reactjs.org/docs/lists-and-keys.html)
