---
layout: tutorial
title: Calling Functions
slug: calling-functions
thumbnail: /tutorials/processing/images/calling-functions-5.png
tagline: Tell the computer what to do.
sort-key: 200
meta-title: Calling Functions
meta-description: "Learn the first step to coding: calling functions!"
meta-image: /examples/processing/creating-functions/images/random-faces-2.png
tags: [tutorial,processing,basic]
---

This tutorial teaches you how to write Processing code. In Processing (and many other languages), one of the basic building blocks we'll use while writing code is **calling functions**.

## What's a function?

Writing a program is a little bit like writing driving instructions for another person to follow. A single step of those directions might be something like "drive 5 miles" or "turn left", and you might write each step on its own line. The other person then follows those steps in order, one after the other, to travel to the destination.

```
drive 5 miles
turn left
drive 3 miles
```

This is similar to how a computer program works. A program is a set of instructions that tells the computer to follow a series of steps. Each step is written on its own line, and the computer follows the instructions one at a time.

A function is **one of those steps**. Calling a function is giving the computer a **single instruction** that tells it to do **one thing**.

## How do I call a function?

To call a function (which is just another way to say "tell the computer to follow the step on this line of the directions"), you need to do four things:

- Write the name of the function.
- Add parentheses `()` after the function's name.
- Inside the parenthesis, add any **parameters** that the function requires, separated by commas.
- End the line with a semicolon `;`.

## What's a parameter?

In our driving instructions, imagine if one of the steps just said "drive" - that wouldn't be enough information! How far should we drive? That step requires more information: specifically, a distance.

It's the same idea when we're writing code. Computers are very dumb, so they only know how to do what we tell them. When you ask a computer to jump, it's going to ask you: how high? We pass that extra information into a function via its **parameters**.

We might write our driving instructions in code like this:

```java
drive(5);
turnLeft();
drive(3);
```

Notice that our `turnLeft` function doesn't take any parameters, because we don't need any extra information to follow that step!

## Let's write some code!

Let's call Processing's `ellipse` function, which tells the computer to draw a circle.

The `ellipse` function takes 4 parameters: an `x` position, a `y` position, a `width`, and a `height`. The first two parameters tell the computer where the circle should be, and the last two parameters tell the computer how big the circle should be.

So to draw a circle at `x` position of `50`, a `y` position of `75`, with a `width` and `height` of `20`, we'd write this line of code:

```java
ellipse(50, 75, 20, 20);
```

Open up your Processing editor, type that line of code, and then hit the run button. You should see something that looks like this:

![ellipse](/tutorials/processing/images/calling-functions-1.png)

If you don't feel like opening up your Processing editor, you can run the code directly in this online editor:

{% include codepen.html slug-hash="EgwaxP" height="173" %}

If this is your first time seeing the online editor, you might want to [read more about it](/about/codepen.html).

Try changing the parameters to see what happens. Can you draw an ellipse in the upper-left corner? The lower-right corner? Can you make an ellipse that fills up the whole window? Can you make a very tall ellipse, or a very fat ellipse?

## The Processing Reference

Processing has a ton of other functions you can call. How do you know what they are and what parameters they take? Let me introduce you to your new best friend: [the Processing reference](https://processing.org/reference/). 

That page lists every function you can call in Processing, and clicking on a particular function gives you information about what parameters it needs. This is going to be your first stop whenever you start wondering how you might do something in Processing.

You might as well just bookmark that page now. (Seriously, it's one of my default tabs in chrome!)

That might seem overwhelming, but let's keep it simple. Let's say we're sick of drawing circles: we've put them in the upper-left corner, we've made them fat, we've made them skinny. Yawn. Let's take it up a notch and start drawing **rectangles**!!!

With that goal, we can look at the Processing reference and ask ourselves, "do any of these functions look like they might draw a rectangle?" (Go ahead, try to find it!)

Sure enough, the reference tells us that Processing has a [`rect`](https://processing.org/reference/rect_.html) function. The reference tells us that it takes 4 parameters: an `x` and `y` position of the upper-left corner of the rectangle, and a `width` and a `height` specifying the size.

So we can modify our program to draw a rectangle instead:

```java
rect(10, 20, 80, 70);
```

Type this line of code into your Processing editor (or into the online editor above) and hit the run button, and you should see this:

![rect](/tutorials/processing/images/calling-functions-1.png)

## You are now a programmer.

You now know how to ask yourself how to do something, look it up in the reference, and write a line of code to test it out. **That's 95% of what a programmer does.** From here it's just a matter of figuring out how to do more and more stuff. 

For example, we might ask ourselves how we might increase the size of the window. We go to [the Processing reference](https://processing.org/reference/) and look for a function that might help with that. We eventually find the [`size`](https://processing.org/reference/size_.html) function, which takes two parameters: a `width` and a `height`. We can call this function to tell Processing how big the window should be, adding it to our set of instructions:

```java
size(500, 300);
ellipse(250, 150, 300, 100);
```

{% include codepen.html slug-hash="PGJwXL" height="393" %}

This program tells Processing to make the window `500` pixels wide and `300` pixels tall. It then tells Processing to draw a circle with an `x` of `250`, `y` of `150`, `width` of `300`, and a `height` of `100`. Type these lines of code into your Processing editor and hit run, and you should see this:

![ellipse in a bigger window](/tutorials/processing/images/calling-functions-3.png)

What if we then want to change the color of our circle? Again, we'd look in the Processing reference until we found a function that tells the computer to draw in a certain color. We'd find [the `fill` function](https://processing.org/reference/fill_.html), which takes 3 parameters: a red, a green, and a blue value. You can mix these values just like you mix paint. Check out [this Wikipedia article](https://en.wikipedia.org/wiki/RGB_color_model) for more information on that.

To change our ellipse to red, we'd call `fill(255, 0, 0)` before drawing our ellipse. This is like dipping a paintbrush in red before drawing on a canvas:

```java
size(200, 200);
fill(255, 0, 0);
ellipse(50, 50, 100, 100);
```

This program calls the `size` function to make the window `200` pixels wide and `200` pixels tall. It then calls the `fill` function with a `red` value of `255` and `green` and `blue` values of `0` to change the color to red. Finally, it calls the `ellipse` function to draw a circle in the upper-left corner of the window.

![red ellipse](/tutorials/processing/images/calling-functions-4.png)

We can expand our program to draw 4 circles, all with different colors:

```java
size(200, 200);

fill(255, 0, 0);
ellipse(50, 50, 100, 100);

fill(0, 255, 0);
ellipse(150, 50, 100, 100);

fill(0, 0, 255);
ellipse(50, 150, 100, 100);

fill(255, 255, 0);
ellipse(150, 150, 100, 100);
```

![colored circles](/tutorials/processing/images/calling-functions-5.png)

Notice that the call to `fill(255, 255, 0)` mixes red and green together to make yellow. If you're unfamiliar with RGB colors, try playing with the parameters to mix different colors together.

{% include codepen.html slug-hash="ozGgmd" height="362" %}

## Homework

The best way to learn how to program is by, well, programming. Give yourself a goal, then consult the Processing reference to figure out how to accomplish that goal. Write some code and see what happens. If you aren't quite sure about the kinds of things you can create, here are a few ideas:

- Draw a smiley face.
- Draw a flower or a garden.
- Draw a rainbow.
- Draw a dog or cat.
- Draw a house.

Come up with a scene that you want to draw, and then write a program that draws it. Write Processing code that calls functions to draw the scene.

## Next: [Using Variables](/tutorials/processing/using-variables)
