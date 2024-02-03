---
layout: post
title: Creating Functions
slug: creating-functions
thumbnail: /tutorials/javascript/images/creating-functions-1.png
tagline: Learn about creating functions in JavaScript.
sort-key: 400
meta-title: Creating Functions
meta-description: Learn more about creating functions in JavaScript.
meta-image: /tutorials/javascript/images/creating-functions-2.png
tags: [tutorial, javascript]
previousPost: /tutorials/javascript/developer-tools
nextPost: /tutorials/javascript/interactive-html
updated: 2022-01-25
---

{% include toc.md %}

So far, you know that you can write JavaScript using the `<script>` tag, like this:

{% include codepen-new.html slug-hash="bGYbXMK" height="275" %}

This code calls the `prompt()` function to ask the user for their name, which it stores in a variable. Then it creates a `message` variable, and passes it in as a parameter to the `alert()` function, which displays the message in a dialog.

Notice that when both dialogs display, the page is blank. That's because your browser reads the file line by line, and executes each line one at a time. When it reads the `<title>` tag, it sets the title of the window. Then it reads to the `<script>` tag, and it runs the code inside the tag, which shows the two dialogs. Then the browser continues loading the file, and eventually it reaches the `<p>This is the content of the page.</p>` line, which tells it to add that content to the webpage.

That might be okay for this example, but a lot of JavaScript code is meant to interact with elements that are on the page. That won't work if the JavaScript always runs before the page is loaded. So how do you make sure that the page is loaded before the JavaScript code runs?

The answer is that you can create functions that are only called *after* the page is done loading.

# Declaring Functions

To create your own function, you need to do four things:

1. Start with the `function` keyword.
2. Then write the **name** of the function.
3. Inside parenthesis `()`, list any parameters the function takes.
4. Inside curly brackets `{}`, write the code that will run whenever the function is called. This is called the **body** of the function.

Here's an example function that contains our above code:

```javascript
function showGreeting() {
  let name = prompt('What is your name?');
  let message = 'Hello ' + name + '!';
  alert(message);
}
```

Now that you've created the `showGreeting()` function, you can call it just like you called any other function!

You could call it right after defining it:

```
<script>
  function showGreeting() {
    let name = prompt('What is your name?');
    let message = 'Hello ' + name + '!';
    alert(message);
  }

	showGreeting();
</script>
```

But that’s pretty much the same thing as running the code without defining a function.

Instead, you can use **events** to run code when certain things happen in the page.

# Events

JavaScript doesn't automatically call any functions for you. Instead, you have to tell your webpage which functions to call when certain things happen.

You do this by adding an `event` attribute to an HTML element, and you set it equal to JavaScript code you want to call when that event happens. This will make more sense with a couple examples:

## `onclick`

The `onclick` event fires when a user clicks on an element in a webpage. Here's an example:

```html
<p onclick="alert('hello');">Click me!</p>
```

This HTML creates a `<p>` tag with an `onclick` attribute that contains the JavaScript code `alert('hello');` and content that says `Click me!` that gets rendered to the webpage. When the user clicks that `<p>` tag, the JavaScript code runs and displays the message.

{% include codepen-new.html slug-hash="KNOgmX" height="100" autoplay=true %}

## The `onload` Event

The `onload` event fires as soon as an element is done loading. This event attribute is usually used on the `<body>` tag to run code as soon as the page is loaded.

Here's an example:

{% include codepen-new.html slug-hash="MJOPeM" height="250" %}

The `onload` attribute of the `<body>` tag in this HTML contains JavaScript that displays a dialog when the page is loaded.

# Putting It All Together

Now you know how to run JavaScript code by setting event attributes on HTML elements and then putting JavaScript code inside the value of those attributes. That can be really cumbersome if you have more than a couple lines of code: imagine putting a hundred lines of code inside an attribute value!

Luckily, you already know how to get around this problem: you can define a function in the JavaScript in the `<head>` section (or in another file that you load), and then you call that function from the event attribute.

Here's an example:

{% include codepen-new.html slug-hash="YzEzeoJ" height=400 autoplay=true %}

This code defines a `showGreeting()` function, which prompts the user for their name and then shows a greeting message. Then the HTML contains a `<p>` element with an `onclick` attribute that calls the `showGreeting()` function.

# Scope

When you create a variable with the `let` keyword inside a function, that variable can only be used inside that function! For example, consider this code:

{% include codepen-new.html slug-hash="zYPYadK" height=450 autoplay=true %}

This code defines two functions: `askName()` which prompts the user for their name and stores it in a `username` variable, and `greet()` which displays the `username` variable in a greeting dialog.

Try clicking the first `<p>` element to set the `username` variable, and then click the second `<p>` element to display the greeting. The greeting dialog never appears! Check the JavaScript console in your browser's developer tools to see this error:

```
Uncaught ReferenceError: username is not defined
```

That's happening because the `username` variable is only available inside the `askName()` function, because that's where it was declared with the `let` keyword! In other words, the `username` variable is only **in scope** inside the `askName()` function.

You can fix this by declaring the `username` variable outside of both functions:

{% include codepen-new.html slug-hash="abVbKjW" height=450 autoplay=true %}

Now that the `username` variable is declared outside of the functions, it's usable from everywhere. This is also called a **global variable**.

Also notice that the code does **not** use the `let` keyword inside the `askName()` function, because that would declare a **different** variable with the same name.

What happens if you show the greeting before you set the name? You'll see `Hello undefined!` because the variable doesn't have a value yet. But at least you won't get an error!

# Homework

- Modify the above webapge to contain a third element that shows a dialog that says goodbye to the user.
