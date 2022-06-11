---
layout: tutorial
title: React Components
thumbnail: /tutorials/javascript/images/react-1.png
tagline: Build your webpage out of components.
sort-key: 1200
meta-title: React Components Tutorial
meta-description: Build your webpage out of components.
meta-image: /tutorials/javascript/images/react-1.png
previousPost: /tutorials/javascript/react-jsx
nextPost: /tutorials/javascript/
tags: [tutorial, javascript, react]
---

{% include toc.md %}

Now you know how to use React and JSX to render a component:

{% include codepen-vertical.html slug-hash="WNMEQYg" height=600 autoplay=true %}

```jsx
class App extends React.Component {
  render() {
    return <h1>Hello world!</h1>;
  }
}

function load() {
  let rootElement = document.getElementById('root');
  ReactDOM.render(<App/>, rootElement);
}
```

This code defines an `App` component which renders a single `<h1>` element. It then calls the `ReactDOM.render()` function to tell React to render the `App` component. The component's content is then shown in the DOM.

This isn't super useful yet, but this tutorial shows you how you can use components to organize your page.

# Nesting Components

Components aren't limited to rendering hard-coded HTML. They can also contain other components! Here's an example:

{% include codepen-vertical.html slug-hash="zYRdrvr" height=600 autoplay=true %}

First, this example defines a top-level `App` component:

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Task List</h1>
        <TaskList />
      </div>
    );
  }
}
```

This component renders a `<div>` which contains an `<h1>` element and a `<TaskList>` element. But wait, where does that `<TaskList>` element come from? It comes from the `TaskList` component!

That's the first magical thing about components: any components you define can be used exactly like you can use any other HTML element! This is also why JSX is handy, because you can reference your components as if they were standard HTML tags.

Here's the `TaskList` component:

```jsx
class TaskList extends React.Component {
  render() {
    return (
      <ul>
        <Task />
        <Task />
        <Task />
      </ul>
    );
  }
}
```

This component renders a `<ul>` tag that contains three `<Task>` elements. And that works fine, because the code also defines a `Task` component:

```jsx
class Task extends React.Component {
  render() {
    return <li>Task</li>;
  }
}
```

The `Task` component renders a single `<li>` element. This example HTML is pretty short, but the power here is that a React Component can contain a bunch of HTML, which you can then insert into the DOM multiple times.

# Properties

Now the example is made up of nested component, but in the end it's still rendering hard-coded HTML. To make this more useful, you can use **properties** to customize the content of the `Task` component.

First, add an attribute to your JSX element with the name and value of each property you want to define:

```jsx
class TaskList extends React.Component {
  render() {
    return (
      <ul>
        <Task label="Wash the dishes" />
        <Task label="Do laundry" />
        <Task label="Walk the dog" />
      </ul>
    );
  }
}
```

Then to use a property, use the `props` field, followed by the name of the property you want to access.

```jsx
class Task extends React.Component {
  render() {
    return <li>{this.props.label}</li>;
  }
}
```

Putting it all together, it looks like this:

{% include codepen-vertical.html slug-hash="OJQjMpa" height=600 autoplay=true %}

# React Elements

Now you've seen a few examples that use JSX, which is the syntax that looks like you're returning HTML directly in JavaScript. Look at this line from the above example:

```jsx
return <li>{this.props.label}</li>;
```

This looks like you're returning HTML directly from JavaScript, but remember that JSX is only a shortcut to writing JavaScript!

You can use the [Babel browser translator](https://babeljs.io/repl) to see the JavaScript code that's generated from your JSX. Try pasting these lines into the translator:

- ```jsx
  return <li>{this.props.label}</li>;
  ```
- ```jsx
  return <h1>Hello world</h1>;
  ```
- ```jsx
  <ul>
    <Task label="Wash the dishes" />
    <Task label="Do laundry" />
    <Task label="Walk the dog" />
  </ul>
  ```

The important thing to keep in mind is that even though what you're writing looks like HTML, it's actually JavaScript! Specifically, you're writing JSX that transpiles into JavaScript, and that JavaScript creates objects called React elements, which React then uses to add HTML elements to the DOM.

With that in mind, there are a few rules to keep in mind when writing React elements:

- HTML attributes are lowercased, but React element attributes are camelCased and avoid JavaScript keywords. For example, instead of `class` you should use `className`, and instead of `onclick` you should use `onClick`.
- If the value of the attribute is a string, you can use `" "` quotation marks just like in HTML. But if the value of the attribute is a JavaScript expression (like the name of a function), then you should put that expression inside `{ }` curly brackets.

For example, this HTML:

```html
<button class="big-button" onclick="clickBigButton();">
    Click the big button!
</button>
```

Would be this JSX:

```jsx
<button className="big-button" onClick={clickBigButton}>
  Click the big button!
</button>
```

This syntax might look a little weird, but it starts making more sense if you keep in mind that JSX is JavaScript, not HTML.

# Stamps

These tutorials are still building up your foundational understanding of React, so this might not seem very useful yet. But the things to remember from this tutorial are that you can define your own React components, which you can think of as stamps. You can also pass in properties to customize the content of those stamps. And you can build nested components, which in this metaphor would be stamps of stamps?

Maybe that metaphor got away from me, but the point is that React lets you organize your page into reusable and customizable units called components.

Coming soon: how to add state to your React components!
