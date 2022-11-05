---
layout: tutorial
title: Array Functions
thumbnail: /tutorials/processing/images/arraylists-1.gif
tagline:  Take arrays to the next level.
sort-key: 1300
meta-title: Array Functions in p5.js
meta-description: Take arrays to the next level.
meta-image: /tutorials/processing/arraylists/images/random-walkers-3.png
tags: [tutorial, p5.js, javascript, arrays]
includeP5jsWidget: true
previousPost: /tutorials/p5js/creating-classes
nextPost: /tutorials/p5js/images
---

{% include toc.md %}

Now you know how to [use objects](/tutorials/p5js/using-objects) and [create your own classes](/tutorials/p5js/creating-classes). You know how to use [arrays](/tutorials/p5js/arrays) to create variables that hold multiple values, and you know how to create arrays of objects.

So far, you've used the array access operator (square brackets `[]` with a number inside them) to reference the indexes of an array. That's an important concept that unlocks a lot of functionality, but arrays can also do a lot more!

This tutorial introduces a few handy functions that you can call on arrays.

# Arrays Are Objects

Remember from the [using objects tutorial](/tutorials/p5js/using-objects) that if you have an object, you can call functions on that object. Here's an example:

```javascript
let myCircle = new p5.Vector(100, 200);
myCircle.add(10, 20);
// myCircle now contains 110, 220
```

This example creates a `p5.Vector` instance, and then calls its `add()` function.

The thing that makes the rest of this tutorial work is this: **arrays are objects** which means you can call functions on them.

Specifically, arrays are instances of the `Array` class. You can learn more about every function offered by the `Array` class at [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [W3Schools](https://www.w3schools.com/jsref/jsref_obj_array.asp), but this tutorial will introduce a few functions you'll likely use most often.

# Push

The `push()` function adds an element to the end of the array. Here's an example:

{% include p5js-widget.html width=300 height=300 %}
let circles = [];

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(50);

  for(let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.y++;
    circle(c.x, c.y, 25);
  }
}

function mouseDragged() {
  circles.push(new p5.Vector(mouseX, mouseY));
}
</script>

This code creates a `circles` array, and uses a `for` loop to move and draw all of the circles it contains. The `mouseDragged()` function calls the array's `push()` function to add a new `p5.Vector` to the end of the array whenever the user drags their mouse.

# Splice

The `splice()` function takes an index parameter and removes the element at that index. It also takes a count parameter, which lets you remove multiple elements, but you'll often pass in `1` to remove a single element.

It's a good idea to remove elements that you don't need anymore (like when they go off-screen), otherwise your sketch might use up too much memory and slow down or even crash.

Let's start with a sketch that does **not** remove any objects:

{% include p5js-widget.html width=300 height=300 %}
let circles = [];

function setup() {
  createCanvas(300, 300);
  textSize(18);
}

function draw() {
  background(50);

  noStroke();
  fill(255);
  text('circles: ' + circles.length, 100, 100);
  text('frame rate: ' + floor(frameRate()), 100, 125);

  stroke(0);
  for(let i = 0; i < circles.length; i++) {
    let c = circles[i];
    c.y++;
    circle(c.x, c.y, 25);
  }
}

function mouseDragged() {
  circles.push(new p5.Vector(mouseX, mouseY));
}
</script>

This is the same code as before, except now it also draws the length of the `circles` array and the current frame rate to the screen. Try dragging your mouse until you notice the frame rate dropping. On my laptop, the frame rate start dropping at around 5,000 circles.

So if you're working with a sketch that uses a lot of objects, you should get into the habit of removing them when you no longer need them.

Try modifying the above `for` loop to look like this:

```javascript
for (let i = 0; i < circles.length; i++) {
  let c = circles[i];

  c.y++;
  if (c.y > height) {
    circles.splice(i, 1);
  }

  circle(c.x, c.y, 25);
}
```

Now the code contains an `if` statement that checks whether the circle has fallen off the bottom of the window, and if so, removes it from the array. Now the array only contains circles that you actually still need, and your framerate will be much better.

# Pop

The `pop()` function removes an element from the end of the array. Here's an example:

{% include p5js-widget.html width=300 height=300 %}
let circles = [];

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(50);

  for(let i = 0; i < circles.length; i++) {
    circle(circles[i].x, circles[i].y, 25);
  }
}

function mousePressed() {
  circles.push(new p5.Vector(mouseX, mouseY));
}

function keyPressed(){
  circles.pop();
}
</script>

When the mouse is pressed, this code calls the array's `push()` function to add a `p5.Vector` instance to the end of the array, and when a key is pressed, it calls the array's `pop()` function to remove the last element in the array.

# Shift and Unshift

Similar to how `push()` and `pop()` add and remove an element from the end of an array, `unshift()` and `shift()` add and remove an element from the front of the array.

```javascript
let animals = ['tigers', 'bears'];
animals.unshift('lions');
// animals now = ['lions', 'tigers', 'bears']
animals.shift();
// animals now = ['tigers', 'bears']
```

# Other Functions

The goal of this tutorial is to introduce you to the concept of calling functions on arrays, and to show examples of the functions you'll most commonly use. But there are many other functions you can call on arrays!

Check out [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and [W3Schools](https://www.w3schools.com/jsref/jsref_obj_array.asp) for a full list of array functions. A big part of coding is reading through this kind of documentation. So if you ever find yourself stuck while trying to work with an array, try looking for an array function that can help you!

# For Of Loop

A `for of` loop lets you shorten your code if you're looping over an array and you don't care about the index.

For example, if you have a loop like this:

```javascript
for (let i = 0; i < circles.length; i++) {
  let c = circles[i];
  circle(c.x, c.y, 25);
}
```

Notice that you don't use the `i` variable for anything other than getting the element at that index. That means you can shorten your code to use a `for of` loop:

```javascript
for (const c of circles) {
  circle(c.x, c.y, 25);
}
```

# Example: Trail

Here's another example that combines many of the concepts from above to create a trail that follows the mouse:

{% include p5js-widget.html width=300 height=300 %}
let trail = [];

function setup() {
  createCanvas(300, 300);
  noStroke();
}

function draw() {
  background(50);

  // Add a point to the end of the trail at the mouse position
  trail.push(new p5.Vector(mouseX, mouseY));

  // If the trail gets too long, remove the first (oldest) point
  if (trail.length > 25) {
    trail.shift();
  }

  // Draw the trail
  for (let i = 0; i < trail.length; i++) {
    let p = trail[i];

    // The trail is smaller at the beginning,
    // and larger closer to the mouse
    let size = 50.0 * i / trail.length;
    circle(p.x, p.y, size);
  }
}
</script>

This code uses an array of `p5.Vector` instances to show a trail that follows the mouse. Each time `draw()` is called, the code adds a new instance of `p5.Vector` to the end of the array. This new point is directly under the mouse. Then the code checks the length of the array, and if it's more than `25`, it removes the first (oldest) `p5.Vector`. This means the array only contains the 25 newest `p5.Vector` instances. Then the code uses a `for` loop to draw each `p5.Vector` in the trail.

![trail of circles](/tutorials/processing/images/arraylists-2.gif)

Try changing the length of the trail, or making it so old points are not removed.

# Homework

- Create a sketch that shows fireworks whenever the user clicks their mouse. (You could use an array to contain all of the particles.)
- Create a sketch that shows a circle. When the user clicks the circle, remove that circle and add two random circles. If the user clicks either of those circles, remove that circle and add two more.