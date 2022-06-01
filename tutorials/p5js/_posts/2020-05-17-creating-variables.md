---
layout: tutorial
title: Creating Variables
thumbnail: /tutorials/processing/images/creating-variables-thumbnail.gif
tagline: Give your code a memory.
sort-key: 300
meta-title: Creating Variables in p5.js
meta-description: Learn how to create your own variables in p5.js.
meta-image: /tutorials/processing/images/using-variables-7.png
tags: [tutorial, p5.js, javascript]
includeP5jsWidget: true
previousPost: /tutorials/p5js/using-variables
nextPost: /tutorials/p5js/creating-functions
---

{% include toc.md %}

Now you know [how to use variables](/tutorials/p5js/using-variables) like `width` and `height`. Next you'll learn how to create your own variables!

Remember that variables are **names** that hold **values**. You can use a variable anywhere you can use a value, by writing its name. For example:

```javascript
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(32);
  ellipse(width / 2, height / 2, width - 25, height - 25);
}
```

This sketch uses the `width` and `height` variables to draw a circle that fills up the window.

![circle](/tutorials/processing/images/creating-variables-1.png)

You aren't limited to using only what p5.js gives you. You can also create your own variables!

# Creating Variables

To create a variable, you use the `let` keyword to define  a **name** and a **value**.

- The **name** is how you'll use the variable later in the code, like you've used `width` and `height`.
- The **value** is what the variable points to.

Here's an example:

```javascript
let circleX = 150;
let circleY = 200;
let circleDiameter = 100;
```

This code creates three variables: `circleX` points to a value of `150`, `circleY` points to a value of `200`, and `circleDiameter` points to a value of `100`.

You can use the variables just like you would use any value, which means you can use them as arguments for the `circle` function: 

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(32);

  let circleX = 150;
  let circleY = 200;
  let circleDiameter = 100;

  circle(circleX, circleY, circleDiameter);
}
</script>

![circle in sketch](/tutorials/processing/images/creating-variables-2.png)

Try changing the variables to see the effect they have on the circle.

## `let`, `const`, and `var`

The above code uses the `let` keyword to create variables, and I recommend sticking with that for now. But if you look at code written by other people, you'll likely see other keywords.

- `var` is the "old" way of creating a variable. You'll see this often with older code.
- `const` creates a variable that can't be changed- this helps prevent accidentally changing a variable's value if you didn't mean to.
- `let` is the "new" way of creating a variable.
- It's also possible to create a variable without using any of these keywords, but I don't recommend doing that because it makes your code harder to read and maintain.

You can read more on [ways of creating variables](https://www.w3schools.com/js/js_let.asp), but for now I would recommend using `let` and `const` without worrying too much about it.

# Example

Remember the example from [the using variables tutorial](/tutorials/p5js/using-variables) that draws a flower based on the `width` and `height` variables:

```javascript
function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0, 200, 0);

  fill(255, 128, 0);
  ellipse(width/4, height/4,
          width/2, height/2);
  ellipse(width*.75, height/4,
          width/2, height/2);
  ellipse(width/4, height*.75,
          width/2, height/2);
  ellipse(width*.75, height*.75,
          width/2, height/2);

  fill(255, 0, 0);
  ellipse(width/2, height/2,
          width/2, height/2);
}
```

This code uses the `width` and `height` variables to draw a flower that fills up the window.

![flower](/tutorials/processing/images/using-variables-5.png)

The `width` and `height` variables are handy if you want to tie your sketch to the canvas size, but if you want more control, you can use your own variables. Let's rewrite this example to use your own variables now!

Start by creating four variables that you'll use when drawing the flower:

```javascript
let flowerX = 150;
let flowerY = 150;
let petalSize = 100;
let petalDistance = petalSize / 2;
```

- `flowerX` holds the horizontal position of the center of the flower.
- `flowerY` holds the vertical position of the center of the flower.
- `petalSize` holds the diameter of the petals.
- `petalDistance` holds the space between the center of the flower and the four orange petals. Notice that this line uses the `petalSize` variable to calculate its value!

Unlike the `width` and `height` variables, the names of these variable are completely up to you. You can name them anything you want.

Now that you have your variables, use them to draw the center red petal first:

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
}

function draw() {

  let flowerX = 150;
  let flowerY = 150;
  let petalSize = 100;
  let petalDistance = petalSize / 2;

  background(0, 200, 0);

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}
</script>

This code calls the `circle` function using your variables as parameters. You should see this:

![center red petal](/tutorials/processing/images/creating-variables-4.png)

This might not seem like much, but this gives you a good base to expand on. Working in small steps like this makes it easier to fix mistakes, because you can test your code as you write it!

Next, draw the upper-left orange petal:

```javascript
function setup() {
  createCanvas(300, 300);
}

function draw() {

  let flowerX = 150;
  let flowerY = 150;
  let petalSize = 100;
  let petalDistance = petalSize / 2;

  background(0, 200, 0);

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}
```

If this new line is confusing, that's okay! Think about each argument being passed into the `circle` function.

- Remember that `flowerX` is the horizontal center of the red petal, so `flowerX - petalDistance` is to the left of the red petal.
- Similarly, `flowerY` is the vertical center of the red petal, so `flowerY - petalDistance` is above the red petal.

The result is another circle in the upper-left corner of the red petal:

![two petals](/tutorials/processing/images/creating-variables-5.png)

Next, draw the upper-right petal:

```javascript
// upper-right petal
circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);
```

This is very similar to the line of code you just added, but it uses `flowerX + petalDistance` to calculate a position that's to the right of the red petal.

![three petals](/tutorials/processing/images/creating-variables-6.png)

Finally, add the two bottom petals.

**Try to figure this out on your own before continuing!**

Putting it all together, the code looks like this:

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
}

function draw() {

  let flowerX = 150;
  let flowerY = 150;
  let petalSize = 100;
  let petalDistance = petalSize / 2;

  background(0, 200, 0);

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize);

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}
</script>

![flower](/tutorials/processing/images/creating-variables-3.png)

# Changing Variables

If you want to change the size and location of the flower, now all you have to do is change the values of the variables!

```javascript
let flowerX = 100;
let flowerY = 200;
let petalSize = 75;
```

The rest of the code stays the same, but now the flower is smaller and in a different location.

![moved flower](/tutorials/processing/images/creating-variables-7.png)

Think about how you would do this without variables. Every time you wanted to change the size of your flower, you would have to change the code on a bunch of different lines! But because you're using variables, you only have to change it in one place.

You could also combine what you've seen so far, and move the flower to the center of the window:

```java
let flowerX = width / 2;
let flowerY = height / 2;
```

![centered flower](/tutorials/processing/images/creating-variables-3.png)

Remember: you can use a variable anywhere you can use a value, including when creating another variable!

# Random

Now that you know how to create variables, I can introduce you to one of my favorite functions: the `random` function!

The `random` function gives you a random value between two parameters. You can read more about it in [the reference](https://p5js.org/reference/#/p5/random).

This might not sound very useful, but it allows you to add some variety to your programs instead of the same thing happening every time you run your code. You might use the `random` function to draw a flower at a random location:

```java
let flowerX = random(0, width);
let flowerY = random(0, height);
```

Now the `flowerX` variable will hold a random value between `0` and `width`, and `flowerY` will hold a random value between `0` and `height`. This means the flower will appear in a different location every time you run the program. You could also give the flower a random size, or even random colors!

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
  frameRate(1);
}

function draw() {

  let flowerX = random(0, width);
  let flowerY = random(0, height);
  let petalSize = random(25, 150);
  let petalDistance = petalSize / 2;

  background(0, 200, 0);

  fill(255, 128, 0);

  // upper-left petal
  circle(flowerX - petalDistance, flowerY - petalDistance, petalSize);

  // upper-right petal
  circle(flowerX + petalDistance, flowerY - petalDistance, petalSize);

  // lower-left petal
  circle(flowerX - petalDistance, flowerY + petalDistance, petalSize);

  // lower-right petal
  circle(flowerX + petalDistance, flowerY + petalDistance, petalSize);

  // center petal
  fill(255, 0, 0);
  circle(flowerX, flowerY, petalSize);
}
</script>

Variables allow you to "remember" a value so you can reuse it in multiple places. Without variables, using random values would be very difficult!

# Animation

When you ran the last example, you probably noticed that the flower redrew itself. That's because, by default, **p5.js runs your code inside the `draw` function 60 times a second.** The example above changes that to once per second by calling `frameRate(1)` from the `setup` function.

Every time the code inside the `draw` function runs is a new frame, and changing what's on the screen each frame creates an animation. You'll learn more about that in a later tutorial, but for now think about what happens each frame in the above code:

- The code creates variables for the location and side of the flower.
- The `random` function gives rando mvalues to those variables.
- The `background(0, 200, 0);` line draws a green background, which clears out what was drawn in previous frames. 
- Then the code draws a new random flower.
- One second later, this happens again, and again, and again...

Try removing the call to the `background` function to see what happens when you don't clear out old frames!

# Your Turn

- Remember your drawing from the previous tutorial? Instead of basing it off the `width` and `height` variables, change it to draw at a location and size that you store in your own variables. Test that your code works with different values for each variable.
- Make a program that randomizes your drawing. Draw it at a random location, with random sizes and random colors. This is called [procedural generation](https://en.wikipedia.org/wiki/Procedural_generation)!
- Make a program that shows the current time. Hint: check the reference for useful functions! Get creative: make the clock change color throughout the day, or show the time in dog years.
- Make a program that uses variables to calculate something useful for you: how long will you be paying student loans? What percentage of your income goes to rent? What grade do you need to get on your final to get an A in the class?
