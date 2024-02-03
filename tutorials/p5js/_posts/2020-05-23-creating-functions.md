---
layout: post
title: Creating Functions
thumbnail: /tutorials/processing/images/creating-functions-9.gif
tagline: Write your own custom functions.
sort-key: 500
meta-title: Creating Functions in p5.js
meta-description: Learn how to write your own functions in p5.js.
meta-image: /tutorials/processing/images/creating-functions-7.png
tags: [tutorial, p5.js, javascript]
includeP5jsWidget: true
previousPost: /tutorials/p5js/creating-variables
nextPost: /tutorials/p5js/debugging
---

{% include toc.md %}

Now you now know how to [call functions](/tutorials/p5js/calling-functions), [use variables](/tutorials/p5js/using-variables), and [create your own variables](/tutorials/p5js/creating-variables).

This tutorial shows you how to create your own functions.

Creating your own functions allows you to organize your code into smaller chunks and treat complicated tasks as a single step.

Creating functions also allows you to do more advanced things like animations and getting user input.

# Defining Functions

To create your own function, you need to do four things:

- Start with the `function` keyword.
- Then write the **name** of the function.
- Inside parenthesis `()`, list any parameters the function takes.
- Inside curly brackets `{}`, write the code that will run whenever the function is called. This is called the **body** of the function.

You've actually already been defining your own functions: `setup` and `draw` are functions that p5.js automatically calls.

# Example: `drawRedCircle`

Here's a function that draws a red circle:

```java
function drawRedCircle(circleX, circleY, circleDiameter) {
  fill(255, 0, 0);
  circle(circleX, circleY, circleDiameter);
}
```

This function is called `drawRedCircle` and takes three parameters: `circleX`, `circleY`, and `circleDiameter`. The **body** of the function changes the fill color to red and then uses the parameters to draw a circle.

To call this function, you'd use its name and give it parameters, exactly like you've been calling other functions:

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(32);
  drawRedCircle(100, 200, 50);
}

function drawRedCircle(circleX, circleY, circleDiameter) {
  fill(255, 0, 0);
  circle(circleX, circleY, circleDiameter);
}
</script>

This allows you to treat a task that takes multiple steps (like changing the fill color to red and drawing a circle) as a single step. This will become very useful as your code gets more complicated!

# Example: `drawFlower`

By now, you're probably pretty familiar with this code:

```javascript
function setup() {
  createCanvas(300, 300);
  background(0, 200, 0);
}

function draw() {

  let flowerX = 150;
  let flowerY = 150;
  let petalSize = 100;
  let petalDistance = petalSize / 2;

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize );

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}
```

This code creates a `300x300` canvas, draws a green background, and then draws a flower in the middle of the window:

![flower](/tutorials/processing/images/creating-variables-3.png)

Imagine modifying the flower program to draw four different flowers, each with its own location and size. You would probably copy-paste a lot of the same code, which would make it hard to change. What if you wanted to change your flowers to all have blue centers? You'd have to make the same change in four different places!

**Challenge:** If you don't believe that would be annoying, try it! Write a program that draws four flowers, and then change the code so all of the flowers have blue center petals!

To help with this, you could move all of the code related to drawing a flower into a `drawFlower` function.

To create a function, you use the `function` keyword, then give the function a name, then list its parameters inside `()` parentheses, and finally, inside `{ }` curly brackets, write the code that should run when you call that function.

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
  background(0, 200, 0);
}

function draw() {
  drawFlower(150, 150, 100);
}

function drawFlower(flowerX, flowerY, petalSize) {
  let petalDistance = petalSize / 2;

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize );

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}
</script>

This code calls the `drawFlower` function with parameters `150, 150, 100` which draws a flower with an X coordinate of `150`, a Y coordinate of `150`, and a petal size of `100`. Try changing the parameters to see what happens!

Now that you have a `drawFlower` function, you can call it as many times as you want, with whatever parameters you want!

```javascript
function draw() {
  drawFlower(80, 90, 75);
  drawFlower(225, 80, 45);
  drawFlower(75, 225, 55);
  drawFlower(220, 220, 65);
}
```

![four flowers](/tutorials/processing/images/creating-functions-4.png)

The payoff here is that you can treat the `drawFlower` function as a single step, even though it's really doing a bunch of stuff when you call it. You don't have to worry about *how* the flower is drawn, exactly like you didn't have to worry about *how* the `circle` function works behind the scenes.

And now if you want to make a change to how your flowers are drawn, you only have to change it in one place instead of changing each individual flower. Try changing the center petal color to blue!

## Summary

Remember that a program is a lot like a recipe: a recipe is a list of steps that you follow in order, and a program is a list of function calls that the computer follows in order.

Calling a custom function is like referencing an icing recipe from a cake recipe.

```
...
Pour the cake batter into a cake pan.
Bake for 45 minutes.
While you wait, follow the icing recipe on page 42.
Remove the cake from the oven, and spread the icing on top.
```

The author of the cake recipe doesn't even need to know anything about the icing recipe! All they care about is the end result. They might also refer to a recipe multiple times: for example the recipe for a three-layer cake might refer to a recipe for making a single cake three times. This makes it easier to focus on one recipe at a time, and to organize the steps into a more logical structure.

The same thing is true of creating functions. Creating functions allows you to organize your code, and to *encapsulate* your complicated logic (like drawing a flower) into a function call that you can treat as a single step.

Creating functions also allow you to repeat work without repeating code: to draw four flowers, you called the `drawFlower` function four times with different parameters.

You can also use the `setup` and `draw` functions to make programs that are interactive and animated, which you'll learn about in the next few tutorials.

## Homework

- Create a `drawHouse` function that draws a house. Take in parameters for the house location, size, color, etc.
- Create a `drawBlock` function that draws 4 houses. Take in parameters for the block location, size, color, etc. Don't write code that draws 4 houses! Instead, call the `drawHouse` function 4 different times with different parameters.
- Create a `drawNeighborhood` function that draws 9 blocks. Take in parameters for the neighborhood location, size, color, etc. Call the `drawBlock` function to draw the blocks.
- Create a `drawCity` function that fills the window with neighborhoods.