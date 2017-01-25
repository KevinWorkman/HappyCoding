---
layout: tutorial
title: Developer Tools
slug: developer-tools
thumbnail: /tutorials/javascript/images/html-2.png
tagline: Meet your new best friend.
sort-key: 200
meta-title: Developer Tools
meta-description: Allow me to introduce you to your new best friend.
meta-image: /tutorials/html/javascript/html-3.png
tags: [tutorial, javascript, basic]
---

Before we get any further into web development, I need to introduce you to a set of tools that you'll be using all of the time. These are the **developer tools** that come with every web browser. These developer tools allow you to get more info about a website, to debug your JavaScript, and to see why that one component is 5 pixels to the right of where it should be.

Most browsers will be pretty similar: try pressing the `F12` key (or `ctrl shift i` if you don't have a `F12` key), or look for it in the menu.

- **Chrome:** Menu > More tools > Developer tools ([show me](/tutorials/javascript/images/developer-tools-chrome-1.gif))
- **Firefox:** Menu > Developer > Toggle Tools ([show me](/tutorials/javascript/images/developer-tools-firefox-1.gif))
- **Internet Explorer:** Menu > F12 Developer Tools ([show me](/tutorials/javascript/images/developer-tools-edge-1.gif))

This shows the developer tools panel at the bottom (or the side) of your web browser. I like to pop this into its own window by going to the menu inside the developer tools panel, then undocking it into a separate window. This way I can keep the developer tools on one screen while I work in the webpage in the other, but it's really up to you.

Now that you have the developer tools open, let's talk about what you're looking at.

## JavaScript Console

The `Console` tab shows the JavaScript console, which is your new best friend.

If you've coded even a tiny bit of JavaScript, maybe you've noticed that when your code breaks, most of the time nothing happens. That's because JavaScript doesn't show a big warning message if something goes wrong, which is good becuase otherwise you'd scare everybody who used your webpage! But it also can make it hard to debug your code when something goes wrong.

That's where the JavaScript console comes in handy. Any errors your code generates will be shown in the JavaScript console. So if your code isn't working, **the first thing you should do** is check here. In fact, it's probably a good idea to always have the JavaScript console open- you might be getting errors you don't even know about!

This is also where calls to the `console.log()` function show up. This is one of the easiest ways to debug your program: want to know the value of a variable in your code? Print it to the console!

### Debugging with the JavaScript Console

Let's say you have this JavaScript code:

```javascript
var x;
if(x > 10){
  alert("hello!");
}
```

This example code might be a little obvious, but pretend we're getting the value of the `x` variable from a library or even from the user. Let's say we're expecting to see a dialog show up, but it's not displaying. At this point, we might be tempted to say, "ugh, the `alert()` function isn't working!"

But before we go to Stack Overflow or [the forum](http://forum.HappyCoding.io) and proclaim that we've found a bug in JavaScript, first we have to test our assumption. The fastest way to do that is to add some print statements to our code to make sure it's executing the way we think it is.

For example, we might put a print statement inside the `if` statement to make sure we're getting inside it:

```javascript
var x;
if(x > 10){
  console.log("inside if statement");
  alert("hello!");
}
```

If we run that code, we won't see our statement print to the console. That tells us that the code is **not** entering the `if` statement. Now we know that the problem is before we even get to the `alert()` function. We might add another print statement to make sure our code is running:

```javascript
var x;
console.log("before if statement");
if(x > 10){
  console.log("inside if statement");
  alert("hello!");
}
```

That new print statement is shown in the console, so finally we might print out the value of `x` to make sure it's what we thought it was:

```javascript
var x;
console.log("before if statement");
console.log("x: " + x);
if(x > 10){
  console.log("inside if statement");
  alert("hello!");
}
```

This prints `x: undefined` to the console, which tells us that our `x` value is undefined! In this case that's pretty obvious, but you'll go through this exact process every single day as you write more complicated JavaScript code.

## Inspect Element

Another handy tool is the ability to inspect an HTML element. This will tell you what styles an element has, which is especially useful when you want to know where it's getting its position from. You can also look at JavaScript-generated HTML. We'll learn more about that in [the interactive html tutorial](tutorials/javascript/interactive-html).

To do all this, go to the Elements tab of the developer tools panel. (Firefox calls it the Inspect tab, Internet Explorer calls it the DOM Explorer tab.) This will show you the current HTML displayed in the webpage, and you can click through to get to any child element in the page.

Clicking a particular element shows a panel on the right that displays that element's CSS styles. This is really useful if you want to know exactly what's causing an element to look a certain way. Also check out the **Computed** tab to show the final result of all of the cascading styles.

You can even use this to change the styles of an element, which is a good way to play with different CSS values to get an element exactly how you want it to look. All of these changes are temporary: they don't make any changs to any of your files! So if you want to keep your changes, make sure to copy them. If you don't want to keep them, just refresh the page.

Another way to get here is by right-clicking an element in the webpage itself, and then clicking **Inspect** in the menu. This will bring you to the **Elements** tab of the developer tools, with the element you clicked already selected.

Try inspecting these elements:

<p>I'm a paragraph. <a href=".">I'm a link inside that paragraph.</a></p>

<ul>
	<li>List Item One</li>
	<li>List Item Two</li>
	<li>List Item Three</li>
</ul>

<img src="/images/random-walkers-1.png" />

Try playing with the styles: add borders, change the size, change background colors. Don't worry, you can't break anything, so go nuts! :chestnut: :squirrel:

## Network Tab

A webpage is usually multiple files: you might have one `index.html` file, a few `.js` files, some `.css` files, and some image files. Each of these files needs to be downloaded over the internet (or fetched from your cache) every time you load a webpage.

The `Network` tab shows all of this. Try going to the `Network` tab now and then refreshing the page. Check out all the files that are downloaded!

This becomes really useful if you have stuff on your page that's not loading correctly. Maybe you have an image that isn't showing up. Check the network tab! This will show you any errors you're getting on individual files.

## But wait, there's more!

The developer tools contain a ton more: you can test different internet connections, see what a website looks like on other devices, and even step through your JavaScript code with a debugger. Don't be afraid to click around and experiment (and use Google) to find out more! But the Console, Elements, and Network tabs will get you pretty far for now.

## Homework

- Open up the Developer Tools and then navigate to a few of your favorite websites. Do any of them have errors? What types of files do they require?
- Play around with the CSS by inspecting elements. Don't worry, nothing you do can break a website, so get creative! And if you want to go back to the default styles, just refresh the page.
- If you come up with a cool-looking style for this website, consider [contributing your code](https://github.com/KevinWorkman/HappyCoding/wiki/Contributing)!

## Next: [Interactive HTML](tutorials/javascript/interactive-html)
