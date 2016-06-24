---
layout: post
title: "Calling Functions"
slug: calling-functions
---

This tutorial teaches you how to write Processing code. In Processing (and many other languages), one of the basic building blocks we'll use while writing code is **calling functions**.

## What's a function?

A function is a **single instruction** that tells the computer to do **one thing**.

Writing a computer program is a little bit like writing driving instructions for another person to follow. An individual step of those directions might be something like "drive 5 miles" or "turn left", and you might write each step on its own line. The other person then follows those steps in order, one after the other, in order to get to the destination.

```java
  drive 5 miles
  turn left
  drive 3 miles
```

That's very similar to how a computer follows code that you write. Except instead of driving directions, we give the computer a series of **functions** that it **calls**, one after the other, to accomplish our end goal.

## How do I call a function?

To call a function (which is just another way to say "tell the computer to follow the step on this line of the directions"), you need to do four things:

- Write the name of the function.
- Add parentheses `()` after the function's name.
- Inside the parenthesis, add any **parameters** that the function requires.
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

