---
layout: post
title: "Calling Functions"
slug: calling-functions
---

This tutorial teaches you how to write Processing code. In Processing (and many other languages), one of the basic building blocks we'll use while writing code is **calling functions**.

## What's a function?

A function is a **single instruction** that tells the computer to do **one thing**.

Writing a computer program is a little bit like writing driving instructions for another person to follow. An individual step of those directions might be something like "drive 5 miles" or "turn left", and you might write each step on its own line. The other person then follows those steps in order, one after the other, in order to get to the destination.

```
drive 5 miles
turn left
drive 3 miles
```

That's very similar to how a computer follows code that you write. Except instead of driving directions, we give the computer a series of **functions** that it **calls**, one after the other, to accomplish our end goal.

## How do I call a function?

To call a function (which is just another way to say "tell the computer to follow the step on this line of the directions"), you need to do four things:

- Write the name of the function.
- Add parentheses `()` after the function's name.
- Inside the parenthesis, add any **parameters** that the function requires, separated by commas.
- End the line with a semicolon `;`.

## What's a parameter?

In our driving instructions, imagine if one of the steps just said "drive" - that wouldn't be enough information! How far should we drive? That step requires more information: specifically, a distance.

It's the same idea when we're writing code. Computers are very dumb, so they only know what to do what we tell them. When you ask a computer to jump, it's going to ask you: how high? We pass that extra information into a function via its **parameters**.

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

![ellipse](/tutorials/processing/calling-functions-1.png)

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

Type this line of code into your Processing editor and hit the run button, and you should see this:

![rect](/tutorials/processing/calling-functions-1.png)

##You are now a programmer.

You now know how to ask yourself how to do something, look it up in the reference, and write a line of code to test it out. **That's 95% of what a programmer does.** From here it's just a matter of figuring out how to do more and more stuff. 

For example, we might ask ourselves how we might increase the size of the window. We go to [the Processing reference](https://processing.org/reference/) and look for a function that might help with that. We eventually find the [`size`](https://processing.org/reference/size_.html) function, which takes two parameters: a `width` and a `height`. We can call this function to tell Processing how big the window should be, adding it to our set of instructions:

```java
size(500, 300);
ellipse(250, 150, 300, 100);
```

This program tells Processing to make the window `500` pixels wide and `300` pixels tall. It then tells Processing to draw a circle with an `x` of `250`, `y` of `150`, `width` of `300`, and a `height` of `100`. Type these lines of code into your Processing editor and hit run, and you should see this:

![ellipse in a bigger window](/tutorials/processing/calling-functions-1.png)


