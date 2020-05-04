---
layout: tutorial
title: Using Variables
slug: using-variables
thumbnail: /tutorials/processing/images/using-variables-7.png
tagline: Get information from the computer.
sort-key: 300
meta-title: Using Variables in Processing
meta-description: Learn how to use variables to get information from Processing.
meta-image: /tutorials/processing/images/using-variables-7.png
tags: [tutorial,processing]
---

{% include toc.md %}

Now you know how to [call functions](/tutorials/processing/calling-functions) with parameters to tell the computer what to do. 

But knowing exactly what values to use for those parameters can be annoying, so this tutorial shows you how to use **variables** to make your life a little easier.

Before talking about variables, let's take a step back and talk about **values**.

# What are values?

Values are the the numbers you've been passing into functions as parameters. For example:

```java
ellipse(50, 75, 30, 20);
```

This line of code passes the values `50`, `75`, `30`, and `20` into the `ellipse` function as parameters to set the `x`, `y`, `width`, and `height` of the ellipse.

![ellipse](/tutorials/processing/images/using-variables-1.png)

# Operators

When you get down to the details, computers are really just calculators. They crunch numbers by modifying values with **operators** like `+`, `-`, `*`, and `/`. 

You can apply an operator to two values to get a third value, and you can then use that new value just like you can use any other value. So you could rewrite the above line of code like this:

```java
ellipse(10+40, 300-225, 3*10, 40/2);
```

This line of code does the exact same thing as it did before: passes the values `50`, `75`, `30`, and `20` into the `ellipse` function as parameters to set the `x`, `y`, `width`, and `height` of the ellipse.

The only difference is that these values are calculated by applying operators to other values.

{% include codepen-new.html slug-hash="wzAJNL" height="100" %}

That might not seem very useful yet, but it will be in a second!

# Things Change

The ability to apply operators becomes more useful when you need to change something in a bunch of places. Let's say you have this code that draws a flower that fills the window:

```java
size(300, 300);

background(0, 200, 0);

fill(255, 128, 0);
ellipse(75, 75, 150, 150);
ellipse(225, 75, 150, 150);
ellipse(75, 225, 150, 150);
ellipse(225, 225, 150, 150);

fill(255, 0, 0);
ellipse(150, 150, 150, 150);
```

{% include codepen-new.html slug-hash="xEXqBX" height="300" %}

This sketch creates a window that's `300x300` pixels, and then draws a green background. It then changes the fill color to orange and draws 4 circles, one in each corner. It then changes the fill color to red and draws a circle in the center of the window.

The result is a program that draws five circles that look like a flower:

![flower](/tutorials/processing/images/using-variables-2.png)

This program works because the size of the window is `300x300`, which you can use to figure out where to draw the circles. You can do some math in your head (or on a piece of paper) to calculate the values to pass in as parameters to the `ellipse` function so the circles show up where you want them.

But what if now you want to change the size of the window?

# The Bad Way

To change the size of the window, you can change the parameters that are passed into the `size` function:

```java
size(400, 400);

background(0, 200, 0);

fill(255, 128, 0);
ellipse(75, 75, 150, 150);
ellipse(225, 75, 150, 150);
ellipse(75, 225, 150, 150);
ellipse(225, 225, 150, 150);

fill(255, 0, 0);
ellipse(150, 150, 150, 150);
```

But if you do that without changing anything else, you end up with the flower in the upper-left corner:

![flower in upper-left corner](/tutorials/processing/images/using-variables-3.png)

This happens because you changed the size of the window, but you didn't change the position or size of the circles.

To fix this, you'd have to change your code in a bunch of different places. You'd also have to do some math in your head to calculate the new position and size of the circles:

```java
size(400, 400);

background(0, 200, 0);

fill(255, 128, 0);
ellipse(100, 100, 200, 200);
ellipse(300, 100, 200, 200);
ellipse(100, 300, 200, 200);
ellipse(300, 300, 200, 200);

fill(255, 0, 0);
ellipse(200, 200, 200, 200);
```

The positions and sizes of the circles now cause the flower to fill up the window again.

![flower filling the window](/tutorials/processing/images/using-variables-4.png)

But now what if you want to change the size of the window yet again? Ugh, you'd have to go through and do all that math, which is going to get pretty annoying. That might not seem like a big deal, but it becomes more and more annoying as your programs get bigger.

# The Slightly Better Way

Instead of doing all that math in your head, why don't you let the computer handle it for you? You can use **operators** to figure out the correct locations and sizes of the circles:

```java
size(400, 400);

background(0, 200, 0);

fill(255, 128, 0);
ellipse(400/4, 400/4, 400/2, 400/2);
ellipse(400*.75, 400/4, 400/2, 400/2);
ellipse(400/4, 400*.75, 400/2, 400/2);
ellipse(400*.75, 400*.75, 400/2, 400/2);

fill(255, 0, 0);
ellipse(400/2, 400/2, 400/2, 400/2);
```

This code uses the width and height of the window (in this case, `400`) along with operators to calculate the locations and sizes of the circles.

Now that you're using operators, if you want to change the size of the window, you just have to change everywhere you see a `400` to whatever size you want. So you could change the size to `150x150`:

```java
size(150, 150);

background(0, 200, 0);

fill(255, 128, 0);
ellipse(150/4, 150/4, 150/2, 150/2);
ellipse(150*.75, 150/4, 150/2, 150/2);
ellipse(150/4, 150*.75, 150/2, 150/2);
ellipse(150*.75, 150*.75, 150/2, 150/2);

fill(255, 0, 0);
ellipse(150/2, 150/2, 150/2, 150/2);
```

You only have to change the value you're operating on, not the operators themselves.

![150x150 flower](/tutorials/processing/images/using-variables-5.png)

This is **better** because you don't have to do any math yourself, other than figuring out the operators in the first place. But you still have to change your code in a bunch of different places. You might be able to use the find/replace feature in the editor to make it a little easier. But wouldn't it be nice if Processing could keep track of the width and height of the window for you?

Great news: it can! This is where **variables** become useful.

# What are variables?

Variables are **names** that hold **values**. 

You can use a variable wherever you can use a value, including applying operators to them and passing them into functions as parameters. There are a ton of different variables you can use, but for now let's focus on two that you'll use all the time: the `width` and `height` variables.

Processing gives you the `width` and `height` variables, and they hold exactly what they sound like: the width and height of the window.

To use a variable, write its name wherever you would normally use a value. For example, here's a program that draws an ellipse that fills up the window:

```java
size(200, 200);
ellipse(width/2, height/2, width, height);
```

The big change here is that this code uses the `width` and `height` variables to calculate the position and size of the ellipse. `width/2` gives you the horizontal center of the window, and `height/2` gives you its vertical center. Similarly, `width` gives you the full width of the window, and `height` gives you its height.

![circle using variables](/tutorials/processing/images/using-variables-6.png)

Now if you want to change the size of the window, you only have to change the parameters you pass into the `size` function. You don't have to change anything else, since the `width` and `height` variables will change automatically.

# The Best Way

This becomes even more useful as your programs grow in size. Here's the flower sketch, now using the `width` and `height` variables:

```java
size(300, 300);

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
```

{% include codepen-new.html slug-hash="QKqpPw" height="300" %}

**Side note:** When a line of code gets too long, you can split it up into multiple lines to make it easier to read. The computer ignores whitespace when it runs your code.

Now whenever you want to change the size of the window, you only have to change one line! Try changing the parameters that are passed into the `size()` function to see the flower change size automatically.

# Homework

- Remember that scene you drew in the previous homework? Use the `width` and `height` variables so that it works with any sized window. It might be helpful to draw your figure out on a piece of paper first, that way you can visualize your figure as percentages of width and height.

- Create a program that displays a different color depending on the `width` and `height` variables.
