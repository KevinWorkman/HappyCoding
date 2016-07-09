---
layout: tutorial
title: "Creating Functions"
slug: creating-functions
---

We now know how to call funcations, use variables, and create our own variables. We've also seen that functions can give us a value instead of doing something.

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
background(0);
ellipse(100, 100, 25, 25);
```

This code creates a `200x200` window, draws a black background, and then draws a circle in the middle of the window:

![circle](/tutorials/processing/creating-functions-1.png)

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

## The draw() Loop

This might not seem like a big improvement, but there's something very powerful going on behind the scenes: Processing calls the `setup()` function **once** at the beginning of the program, and then calls the `draw()` function **60 times per second**.

The `setup()` function is useful for things you only want to happen once: sizing the window, loading images, reading from files, etc.

And because the `draw()` function is called 60 times per second, it allows us to make our programs animated and interactive instead of just showing one thing.

For example, we could use the `mouseX` and `mouseY` variables to make the circle follow the mouse:

```java
void setup() {
  size(200, 200);
}

void draw() {
  background(0);
  ellipse(mouseX, mouseY, 25, 25);
}
```

60 times per second, this function draws a black background and then draws an ellipse wherever the mouse is.

![mouse circle](/tutorials/processing/creating-functions-2.gif)

We call each call to the `draw()` function a **frame**. To better see what's happening each frame, we can move the call to the `background()` function to be inside the `setup()` function instead:

```java
void setup() {
  size(200, 200);
  background(0);
}

void draw() {
  ellipse(mouseX, mouseY, 25, 25);
}
```

Now the `background()` color is only drawn **once**, at the very beginning of the program. We're no longer clearing out old frames, so we can see previous circles we've drawn.

![mouse circle without clearing old frames](/tutorials/processing/creating-functions-3.gif)

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

