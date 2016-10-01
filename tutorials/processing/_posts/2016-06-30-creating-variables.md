---
layout: tutorial
title: "Creating Variables"
slug: creating-variables
thumbnail: "/tutorials/processing/images/creating-variables-3.png"
tag: "Store your own information."
sort-key: 400
---

In the previous tutorial, we learned about [using variables](/tutorials/processing/using-variables). 

Variables are names that hold values, and we can use a variable anywhere we can use a value just by writing its name. That lets us do things like this:

```java
ellipse(width/2, height/2, width, height);
```

This program uses the `width` and `height` variables to draw a circle that fills up the window.

![circle](/tutorials/processing/images/creating-variables-1.png)

Processing gives us variables like `width` and `height`, but we aren't limited to using only what Processing gives us. We can create our own variables!

## New Syntax

Creating a variable requires some new syntax (this is just another way to say that the code looks a little different from what you've been doing so far), so let's go over that first.

To create a variable, you have to give it a **type**, a **name**, and a **value**.

- The **type** tells Processing what kind of value the variable will hold.
- The **name** is what you'll use later in the code, exactly like you've used `width` and `height`.
- The **value** is the value that you want the variable to hold.

## What are types?

Processing needs to know what kind, or **type**, of value that a variable will hold. There are a few different types to choose from:

- The `int` type holds whole numbers like `0`, `1`, or `-256`.
- The `float` type holds decimal numbers like `0.5`, `3.14`, or `-123.45`.
- The `String` stype holds text like `"Hello world"`, `"Happy Coding"`, or `"Kevin"`. `Strings` are always between quotation marks.

There are other types, but these three will get you pretty far, so let's focus on them for now.

## Creating a Variable

You create a variable by giving it a type and a name, then assigning a value using the `=` operator.

```java
String message = "Happy coding!";
```

This line of code creates a `String` value that holds the text `"Happy coding!"` and stores it in a variable named `message` which we can use anywhere we could use a `String` value. For example, we could pass it as a parameter to the `text` function:

```java
String message = "Happy coding!";
text(message, 10, 50);
```

The `text` function takes 3 parameters: a `String` value (in other words, some text inside quotation marks), and an `x` and `y` position to display it on the screen.

![Happy coding message](/tutorials/processing/images/creating-variables-2.png)

If you're not familiar with the `text` function, that's okay. You can read more about the in [the reference](https://processing.org/reference/)!

## Using our Variables

Remember our example from [the previous tutorial](/tutorials/processing/using-variables) of drawing a target based on the size of the window using the `width` and `height` variables?

```java
size(150, 150);

fill(255, 0, 0);
ellipse(width/2, height/2, width, height);

fill(255, 255, 255);
ellipse(width/2, height/2, width*.75, height*.75);

fill(255, 0, 0);
ellipse(width/2, height/2, width/2, height/2);
```

This code uses the predefined `width` and `height` variables to draw a target that fills up the window.

![target](/tutorials/processing/images/using-variables-5.png)

We can modify this code to use our own variables instead, so the target is no longer dependent on the size of the window, but is still easy to change:

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

This code now uses our own variables to draw a target.

![target](/tutorials/processing/images/creating-variables-3.png)

Let's take it one section at a time:

```java
size(150, 150);
```

This section of the code tells Processing to create a window that's `150` pixels wide and `150` pixels high.

```java
float targetX = 75;
float targetY = 85;
float targetSize = 100;
```

This section of the code creates 3 variables: `targetX` holds the horizontal position of the center of the target, `targetY` holds the vertical position of the center of the target, and `targetSize` holds the diameter of the target. Note that unlike the `width` and `height` variables, the names of these variable are completely up to us. We could have named them anything we wanted.

```java
fill(255, 0, 0);
ellipse(targetX, targetY, targetSize, targetSize);
```

This section of code draws the outer-most ring of the target. First it changes the fill color to red, then it draws a circle centered at `targetX, targetY` with a diameter of `targetSize`.

```java
fill(255, 255, 255);
ellipse(targetX, targetY, targetSize*.75, targetSize*.75);
```

This section of code draws the second ring of the target. First it changes the fill color to white, then it draws a circle at the same position, but with a diameter of `targetSize*.75`. This makes the second ring a little smaller than the outer ring.

```java
fill(255, 0, 0);
ellipse(targetX, targetY, targetSize/2, targetSize/2);
```

Finally, this section of code draws the middle ring of the target. First it changes the fill color to red, then it draws a circle at the same position, but with a diameter of `targetSize/2` (which is the same thing as `targetSize*.5`). This makes the middle ring even smaller than the second ring.

{% include codepen.html slugh-hash="rrGyEr" height="225" %}

## Changing Variables

If we want to change the size and position of the target, now all we have to do is change the values of the variables!

```java
float targetX = 25;
float targetY = 75;
float targetSize = 50;
```

The rest of the code stays the same, but now our target is smaller and more towards the left of the window:

![smaller target](/tutorials/processing/images/creating-variables-4.png)

Or we could move the target to the center of the window:

```java
float targetX = width/2;
float targetY = height/2;
float targetSize = 125;
```

![centered target](/tutorials/processing/images/creating-variables-5.png)

We're using the `width` and `height` variables to calculate a value that the `targetX` and `targetY` variables hold, and that's completely fine! Remember: you can use a variable anywhere you can use a value, including when creating another variable!

## Function Types

So far, the functions we've seen cause our programs to **do something** (like draw a circle or change the color). But there are also functions that **give you a value** instead of doing something. You can then store that value in a variable, or use it anywhere else we can use a value.

For example, the `random()` function gives you a random value between two parameters. (As always, you can read more about it in [the reference](https://processing.org/reference/random_.html).) This might not sound very useful, but it allows us to add some variety to our programs instead of having the same thing happen every time our code runs. We might use that to draw a target at a random location:

```java
float targetX = random(0, width);
float targetY = random(0, height);
float targetSize = 50;
```

Now the `targetX` variable will hold a random value between `0` and `width`, and `targetX` will hold a random value between `0` and `height`. This causes our target to appear in a different position every time we run the program. We could also give the target a random size, or even random colors!

{% include codepen.html slugh-hash="xEXqoP" height="225" %}

(Hint: Click the "rerun" button that appears in the lower-right when you mouse over the right side of the editor.)

Variables allow us to "remember" a value so we can reuse it in multiple places. Without variables, using random values would be very difficult!

## Summary

To create a variables, give it a **type**, a **name**, and a **value**. To use a variable, just write its name wherever you would normally use a value.

Variables make it easier to change our code. If we use a variable in our code, we only have to change the value the variable holds, and everywhere that uses that variable will also change.

Functions can give you a value instead of doing something, and variables let us do stuff with those values.

Down the road we'll use variable to do cooler things like animation and user input. But for now, just focus on using variables to make your code easier to change.

## Homework

- Remember your drawing from the previous homework? Instead of basing it off the `width` and `height`, change it to draw at a location and size that you store in variables. Test that your code works with different values for each variable.
- Make a program that randomizes your drawing. Draw it at a random location, with random sizes and random colors. This is called [procedural generation](https://en.wikipedia.org/wiki/Procedural_generation)!
- Make a program that shows the current time. Hint: check the reference for useful functions! Get creative: make the clock change color throughout the day, or show the time in dog years.
- Make a program that uses variables to calculate something useful for you: how long will you be paying student loans? What percentage of your income goes to rent? What grade do you need to get on your final to get an A in the class?

# Next: [Creating Functions](/tutorials/processing/creating-functions)
