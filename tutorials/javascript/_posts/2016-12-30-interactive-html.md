---
layout: tutorial
title: Interactive HTML
slug: interactive-html
thumbnail: /tutorials/javascript/images/interactive-html-1.png
tagline: Learn about creating interactive HTML with JavaScript.
sort-key: 500
meta-title: Interactive HTML
meta-description: Learn more about creating interactive HTML with JavaScript.
meta-image: /tutorials/html/javascript/interactive-html-2.png
tags: [tutorial, javascript, html]
previousPost: /tutorials/javascript/creating-functions
lastUpdated: 2022-01-25
---

{% include toc.md %}

Now you know how to write JavaScript code, and you know how to set up events in your HTML to call functions that you write. So far you've used functions like `alert()` and `console.log()` to interact with the user. But "real" JavaScript usually modifies something on the page.

# Referencing HTML Elements

Remember from [the CSS tutorials](/tutorials/html/css) that there are several ways to reference an HTML element: by tag, by class, and by id. Take this example webpage:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Referencing HTML Elements</title>
  </head>
  <body>
    <p>This is the first paragraph.</p>
    <p class="myClass">This is the second paragraph.</p>
    <p class="myClass" id="myId">This is the third paragraph.</p>
  </body>
</html>
```

This HTML contains three `<p>` elements, and there are three ways to reference them:

- By tag: you can refer to all `<p>` elements, which will reference all three `<p>` tags.
- By class: you can refer to the `myClass` class, which will reference the second and third `<p>` tag.
- By ID: you can refer to the `myId` id, which will only reference the third `<p>` tag.

You can use these selectors to create CSS that styles the `<p>` tags by referencing them:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Referencing HTML Elements</title>
    <style>
      p {
        font-size: 16pt;
      }

      .myClass {
        color: red;  
      }

      #myId {
        background-color: black;
      }
    </style>
  </head>
  <body>
    <p>This is the first paragraph.</p>
    <p class="myClass">This is the second paragraph.</p>
    <p class="myClass" id="myId">This is the third paragraph.</p>
  </body>
</html>
```

This CSS makes every `<p>` tag have a font size of `16pt`, gives the `myClass` class a color of red, and gives the `myId` id a background color of black.

![webpage with three paragraphs](/tutorials/javascript/images/interactive-html-3.png)

{% include codepen-new.html slug-hash="zNOwxe" height=400 autoplay=true %}

# The Document Object Model

The Document Object Model, or DOM for short, is how your browser organizes a webpage so you can access it using JavaScript code.

In other words, the DOM provides functions that you can call in your JavaScript code to modify a webpage to make it interactive.

# document.getElementById()

One of the most common DOM functions you'll use is the `document.getElementById()` function, which returns the element with the ID you pass in as a parameter. Here's an example:

```javascript
let labelElement = document.getElementById('label');
labelElement.innerText = 'You clicked the button!';
```

This code calls the `document.getElementById()` function to get the element with an ID of `label`. Then it changes the `innerText` property of the `labelElement` to update its text.

{% include codepen-new.html slug-hash="mRbmmR" height="350" autoplay=true %}

# Modifying Elements

You've seen one way to modify an element, using the `innerText` field to change the content of an element. There are a ton more!

For a more complete list, check out [W3Schools](http://www.w3schools.com/jsref/dom_obj_all.asp) or [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element). But here are a few examples:

## innerHTML

This is similar to `innerText`, except the content can include HTML.

{% include codepen-new.html slug-hash="XWzWBBq" height="350" autoplay=true %}

## style

The `style` property lets you customize the styling of an element.

{% include codepen-new.html slug-hash="zYPYLeJ" height="350" autoplay=true %}

The `style` property has nested properties, for example:

- `style.color` sets the color of an element
- `style.border` sets the border of an element
- `style.background` sets the background of an element

These are the same properties that you learned about in CSS!





## Creating and Appending Elements

You can use `innerHTML` to add HTML elements to an elements, but for more complicated code, you can use these functions:

- `createElement()` creates an element of a certain tag.
- `createTextNode()` creates the innermost content of an element. You could also use the `innerText` property.
- The `appendChild()` function adds one `Element` to another.

{% include codepen-new.html slug-hash="RKbgyY" height="300" autoplay=true %}

This code uses the `document.createElement()` function to create a new `<p>` element, then it uses the `document.createTextNode()` to create content for that `<p>` element. Then it uses the `appendChild()` function to add the content to the `<p>` element, and again to add the `<p>` element to the `<div>` with the `container` id.

## `element.className`

The `className` field lets you to get or set the CSS class of an element. 

```javascript
const element = document.getElementById("yourIdHere");
element.className = "yourClassHere";
```

This lets you set the style in CSS, and then change which styles apply in JavaScript. The `element.id` variable works in the same way, but with CSS ids instead of classes.

## `element.remove()`

The `element.remove()` function removes an element from the webpage.

{% include codepen-new.html slug-hash="bgbRRJ" height="300" autoplay=true %}

## `addEventListener()`

You've seen HTML attributes like `onload` and `onclick` that let you add an event listener using HTML. The `element.addEventListener()` function lets you add an event listener to an element using JavaScript.

{% include codepen-new.html slug-hash="mdqdjZe" height="300" autoplay=true %}

This code uses the `onload` attribute to call the `setupClickListener()` function. The `setupClickListener()` function uses the `addEventListener()` function to add the `clicked()` function as a click listener to the element with the `clickMe` id.

---

These are just a few examples- like I said, there are a TON of variables and functions you can use to make your webpage interactive. Check out [W3Schools](http://www.w3schools.com/jsref/dom_obj_all.asp) or [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element) for more info, and use your favorite search engine to find what you're looking for. As always, feel free to ask a question in [the forum](http://forum.HappyCoding.io) if you get stuck!

Like with all programming, the idea is that you should combine all of the above (and whatever you find from reading the documentation and doing searches) to accomplish your goal.

# Homework

- What happens if you call the `getElementById()` function with an id that's not on the webpage? What about the other functions? Hint: check your JavaScript console for any errors.
- Create an interactive webpage that plays [rock-paper-scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) against the user.
- You could also create a page that plays a game like [Mastermind](https://en.wikipedia.org/wiki/Mastermind_(board_game)) or [Nim](https://en.wikipedia.org/wiki/Nim).
