---
layout: tutorial
title: Using Variables
slug: using-variables
thumbnail: /tutorials/processing/images/using-variables-5.png
tagline: Get information from the computer.
sort-key: 300
meta-title: Using Variables
meta-description: Learn how to use variables to get information from Processing.
meta-image: /tutorials/processing/images/creating-functions-7.png
tags: [tutorial,processing,basic]
---

Now you know how to [call functions](/tutorials/processing/calling-functions) by passing in parameters to tell the computer to follow a series of steps to accomplish some goal.

Knowing exactly what parameters to use can be annoying, so this tutorial shows you how you can use **variables** to make your life a little easier.

Before we get into variables, let's take a step back and talk about **values**.

## What are values?

Values are the numbers you've been passing into functions as parameters. For example:

```java
ellipse(50, 75, 30, 20);
```

This line of code passes the values `50`, `75`, `30`, and `20` into the `ellipse` function as parameters to set the `x`, `y`, `width`, and `height` of the ellipse, respectively.

![ellipse](/tutorials/processing/images/using-variables-1.png)

## Operators

At their most simple level, computers are just calculators. They crunch numbers by modifying values with **operators**: things like `+`, `-`, `*`, and `/`. 

You can apply an operator to two values to get a third value, and you can then use that new value just like you can use any other value. So we can rewrite the above line of code like this:

```java
ellipse(10+40, 300-225, 3*10, 40/2);
```

This line of code does the exact same thing: passes the values `50`, `75`, `30`, and `20` into the `ellipse` function as parameters to set the `x`, `y`, `width`, and `height` of the ellipse, respectively.

The difference is that these values are obtained by applying operators to other values.

{% include codepen.html slug-hash="wzAJNL" height="175" %}

## Things Change

The ability to apply operators becomes more useful when we need to change something in a bunch of places. Let's say we have this code that draws a target that fills the window:

```java
size(200, 200);

fill(255, 0, 0);
ellipse(100, 100, 200, 200);

fill(255, 255, 255);
ellipse(100, 100, 150, 150);

fill(255, 0, 0);
ellipse(100, 100, 100, 100);
```

{% include codepen.html slug-hash="xEXqBX" height="275" %}

This program creates a window that's `200x200` pixels. It then changes its fill color to red and draws a circle at `100,100` with a size of `200, 200`. This fills the window with a red circle, since `100,100` is the center of the window and `200,200` is the size of the window. The program then changes its fill color to white and draws a slightly smaller white circle overtop of the red circle. Then it changes the color back to red and draws a smaller circle overtop of that white circle.

The result is a program that draws three circles that look like a target:

![target](/tutorials/processing/images/using-variables-2.png)

This program works because we know that the size of the window is `200x200`, so we can set the center of the circles to `100,100` so they show up in the middle of the window. We can also set the size of the first circle to `200x200` to fill the window, then the second circle to be a little smaller, and the third circle to be even smaller than that.

But what if we want to change the size of the window?

## The Bad Way

To change the size of the window, we can change the parameters we're passing into the `size` function:

```java
size(400, 400);

fill(255, 0, 0);
ellipse(100, 100, 200, 200);

fill(255, 255, 255);
ellipse(100, 100, 150, 150);

fill(255, 0, 0);
ellipse(100, 100, 100, 100);
```

But if we just do that, we end up with the target drawn in the upper-left corner:

![target in upper-left corner](/tutorials/processing/images/using-variables-3.png)

This makes sense: we've changed the size of the window, but we haven't changed the position or size of the circles we're drawing. Since our window is now `400x400` pixels, that means that position `100,100` is in the upper-left corner, and a size of `200,200` only fills up part of the window, not the whole thing.

To fix this, we'd have to change our code in a bunch of different places. We'd also have to do some math in our head to calculate the new position and size of our circles:

```java
size(400, 400);

fill(255, 0, 0);
ellipse(200, 200, 400, 400);

fill(255, 255, 255);
ellipse(200, 200, 300, 300);

fill(255, 0, 0);
ellipse(200, 200, 200, 200);
```

The center of the circles is pretty easy to calculate, since it's just the width and height of the window divided by 2. The size of the first circle is the same as the size of the window, so it fills the whole thing up. Then the size of the second circle is 75% of the size of the window, and the smallest circle is 50% of the size of the window.

![target in upper-left corner](/tutorials/processing/images/using-variables-4.png)

But now what if we want to change the size of the window again? Ugh, we'd have to go through and do all that math again. That might not seem like a big deal, but it becomes more and more annoying as your programs get bigger.

## The Slightly Better Way

Instead of doing all that math in our heads, why don't we just let the computer handle it for us? We can use operators to figure out the correct location and size of our circles:

```java
size(400, 400);

fill(255, 0, 0);
ellipse(400/2, 400/2, 400, 400);

fill(255, 255, 255);
ellipse(400/2, 400/2, 400*.75, 400*.75);

fill(255, 0, 0);
ellipse(400/2, 400/2, 400/2, 400/2);
```

Now that we're using operators, if we want to change the size of the window, we just have to change everywhere we see a `400` to whatever size we want. So we could change our size to `150x150`:

```java
size(150, 150);

fill(255, 0, 0);
ellipse(150/2, 150/2, 150, 150);

fill(255, 255, 255);
ellipse(150/2, 150/2, 150*.75, 150*.75);

fill(255, 0, 0);
ellipse(150/2, 150/2, 150/2, 150/2);
```

We only have to change the value we're operating on, not the operators themselves.

![150x150 target](/tutorials/processing/images/using-variables-5.png)

This is **better** since we don't have to do any math, but we still have to change our code in a bunch of different places. Wouldn't it be nice of Processing could keep track of the width and height of the window for us?

Luckily for us, it can! This is where **variables** become useful.

## What are variables?

Variables are **names** that hold **values**. 

We can use a variable wherever we can use a value, including applying operators to them and passing them into functions as parameters. There are a ton of different variables you can use, but for now let's focus on two that you'll use all the time: the `width` and `height` variables.

Processing gives you the `width` and `height` variables, and they hold exactly what they sound like: the width and height of the window.

To use a variable, just write its name wherever you would normally use a value. For example, here's a program that draws an ellipse that fills up the window:

```java
size(200, 200);
ellipse(width/2, height/2, width, height);
```

The big change here is that we're using the `width` and `height` variables to calculate the position and size of the ellipse. `width/2` gives us the horizontal center of the window, and `height/2` gives us its vertical center. Similarly, `width` gives us the full width of the window, and `height` gives us its height.

![circle using variables](/tutorials/processing/images/using-variables-6.png)

Now if we want to change the size of the window, we only have to change the parameters we pass into the `size` function. We don't have to change anything else, since the `width` and `height` variables will change accordingly.

## The Best Way

This becomes even more useful as our programs grow in size. Here's our target program, now using the `width` and `height` variables:

```java
size(150, 150);

fill(255, 0, 0);
ellipse(width/2, height/2, width, height);

fill(255, 255, 255);
ellipse(width/2, height/2, width*.75, height*.75);

fill(255, 0, 0);
ellipse(width/2, height/2, width/2, height/2);
```

{% include codepen.html slug-hash="QKqpPw" height="225" %}

Now whenever we want to change the size of the window, we only have to change one line! Try changing the parameters we're passing into the `size()` function to see the target change size automatically.

## Homework

- Remeber that thing you drew in the previous homework? Use the `width` and `height` variables so that it works iwth any sized window. It might be helpful to draw your figure out on a piece of paper first, that way you can visualize your figure as percentages of width and height.

- Create a program that displays a different color depending on the `width` and `height` variables.

# Next: [Creating Variables](/tutorials/processing/creating-variables)
