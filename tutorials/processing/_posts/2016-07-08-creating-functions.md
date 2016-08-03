---
layout: tutorial
title: "Creating Functions"
slug: creating-functions
thumbnail: "/tutorials/processing/images/creating-functions-6.gif"
tag: "Write your own custom functions."
sort-key: 500
---

We now know how to call functions, use variables, and create our own variables. We've also seen that functions can give us a value instead of doing something.

This tutorial combines all of that to allow us to create our own functions.

Creating our own functions allows us to organize our code into smaller chunks and treat complicated tasks as a single step.

We can also use predefined functions that Processing calls automatically do do things like perform animations and get user input.

## New Syntax

To write your own function, you need to do 4 things:

- Write the **return type** of the function.
- Write the **name** of the function.
- Inside parenthesis `()`, list any parameters the function will take.
- Inside curly brackets `{}`, write a series of steps that will be followed whenever that function is called. This is called the **body** of the function.

## Return Types

Remember that functions can either **do something** (like draw an ellipse or change the fill color) or **give you a value** (like a random value or the current time).

For example, the `random()` function gives you a `float` value, which you can store in a `float` variable. That means that the **return type** of the `random()` function is `float`.

Compare that to the `ellipse()` function, which doesn't give you a value. It wouldn't make any sense to try to store it in a variable. We say that the return type of the `ellipse()` function is `void`, which just means that it doesn't return anything.

We'll need to keep this in mind as we write our own functions. Most of the functions we write will **do something** instead of giving you a value, so you'll see a lot of `void` return types.

## Example

Here's a function that draws a red circle:

```java
void drawRedCircle(float circleX, float circleY, float circleDiameter){
  fill(255, 0, 0);
  ellipse(circleX, circleY, circleDiameter, circleDiameter);
}
```

This function has a `void` return type (which just means it does something instead of giving you a value), and takes 3 parameters: `circleX`, `circleY`, and `circleDiameter`. In the **body** of the function, it changes the fill color to red and then uses the parameters to draw a circle.

To call this function, we'd just use its name and give it parameters, exactly like we've been calling preexisting functions:

```java
drawRedCircle(100, 200, 50);
```

This allows us to treat a task that takes multiple steps (like changing the fill color to red and drawing a circle) as a single step. As we do more complicated tasks, this becomes very useful.

## The `setup()` and `draw()` Functions

Let's start out with a basic program that doesn't use any of our own functions:

```java
size(200, 200);
background(200);
ellipse(100, 100, 25, 25);
```

This code creates a `200x200` window, draws a gray background, and then draws a circle in the middle of the window:

![circle](/tutorials/processing/images/creating-functions-1.png)

We can modify this program to use our own functions instead. For example, we might split up the setup and drawing code into two functions:

```java
void setup() {
  size(200, 200);
}

void draw() {
  background(0);
  ellipse(100, 100, 25, 25);
}
```

Both of these functions have a `void` return type, which just means that they **do something** instead of giving you a value. The `setup()` function handles telling Processing how big the window should be, and the `draw()` function draws the background and the circle.

## The `draw()` Loop

This might not seem like a big improvement, but there's something very powerful going on behind the scenes: Processing calls the `setup()` function **once** at the beginning of the program, and then calls the `draw()` function **60 times per second**.

The `setup()` function is useful for things you only want to happen once: sizing the window, loading images, reading from files, etc.

And because the `draw()` function is called 60 times per second, it allows us to make our programs animated and interactive instead of just showing one thing.

For example, we could use the `mouseX` and `mouseY` variables to make the circle follow the mouse:

```java
void setup() {
  size(200, 200);
}

void draw() {
  background(200);
  ellipse(mouseX, mouseY, 25, 25);
}
```

60 times per second, this function draws a gray background and then draws an ellipse wherever the mouse is.

![mouse circle](/tutorials/processing/images/creating-functions-2.gif)

We call each call to the `draw()` function a **frame**. To better see what's happening each frame, we can get rid of the call to the `background()` function:

```java
void setup() {
  size(200, 200);
}

void draw() {
  ellipse(mouseX, mouseY, 25, 25);
}
```

Now the `background()` color is not drawn. This means we're no longer clearing out old frames, so we can see previous circles we've drawn.

![mouse circle without clearing old frames](/tutorials/processing/images/creating-functions-3.gif)

## Writing Functions

We now know how to write functions that Processing automatically calls, but we can also write functions that we can call.

Remember our program from the previous tutorial:

```java
size(150, 150);

float targetX = 75;
float targetY = 85;
float targetSize = 100;

fill(255, 0, 0);
ellipse(targetX, targetY, targetSize, targetSize);

fill(255, 255, 255);
ellipse(targetX, targetY, targetSize*.75, targetSize*.75);

fill(255, 0, 0);
ellipse(targetX, targetY, targetSize/2, targetSize/2);
```

This program uses variables to draw a target.

![variables target](/tutorials/processing/images/creating-variables-3.png)

We can convert this code into a function. We'd just use the `targetX`, `targetY`, and `targetSize` variables as parameters instead:

```java
void drawTarget(float targetX, float targetY, float targetSize) {

  fill(255, 0, 0);
  ellipse(targetX, targetY, targetSize, targetSize);

  fill(255, 255, 255);
  ellipse(targetX, targetY, targetSize*.75, targetSize*.75);

  fill(255, 0, 0);
  ellipse(targetX, targetY, targetSize/2, targetSize/2);
}
```

Now that we've written the `drawTarget()` function, we can write a `draw()` function that calls it:

```java
void setup(){
  size(150, 150);
}

void draw() {
  drawTarget(75, 85, 100);
}
```

We're able to treat the `drawTarget()` function as a single step, even though it's really doing a bunch of stuff when we call it. For example, this allows us to draw 4 targets with different locations and sizes:

```java
void setup() {
  size(400, 400);
}

void draw() {
  drawTarget(100, 100, 200);
  drawTarget(300, 100, 100);
  drawTarget(100, 300, 150);
  drawTarget(300, 300, 175);
}
```

The `drawTarget()` function doesn't have to change at all. Each time we call it, the `drawTarget()` function takes the parameters and follows the steps in its **body**, which in this case allows us to draw a target at different locations and sizes.

![4 targets](/tutorials/processing/images/creating-functions-4.png)

We could also draw a target that follows the mouse:

```java
void draw() {
  background(200);
  drawTarget(mouseX, mouseY, 100);
}
```

Every frame, this program draws a gray background (which clears any targets from previous frames) and then draws a target at the mouse's position.

![target following mouse](/tutorials/processing/images/creating-functions-5.gif)

Or we could fill the screen up with random targets:

```java
void draw() {
  drawTarget(random(0, width), random(0, height), random(25, 100));
}
```

Every frame, this program draws a target with a random `targetX` between `0` and `width`, a random `targetY` between `0` and `height`, and a random `targetSize` between `25` and `100`. And since we aren't calling the `background()` function every frame, our old frames are not cleared out.

![random targets](/tutorials/processing/images/creating-functions-6.gif)

## Summary

Creating our own functions allows us to organize our code into complicated tasks that we can treat as a single step. It also allows us to repeat work (like drawing a target) without repeating code (we just call the `drawTarget()` function with different parameters).

We can also use the `setup()` and `draw()` functions to make programs that are interactive and animated. 

## Homework

- Create a `drawHouse()` function that draws a house. Take in parameters for the house location, size, color, etc.
- Create a `drawBlock()` function that draws 4 houses. Take in parameters for the block location, size, color, etc. Don't write code that draws 4 houses! Instead, call the `drawHouse()` function 4 different times with different parameters.
- Create a `drawNeighborhood()` function that draws 9 blocks. Take in parameters for the neighborhood location, size, color, etc. Call the `drawBlock()` function to draw the blocks.
- Create a `drawCity()` function that fills the window with neighborhoods.

## Next: [If Statements](/tutorials/processing/if-statements)
