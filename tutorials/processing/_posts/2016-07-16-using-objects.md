---
layout: tutorial
title: "Using Objects"
slug: using-objects
---

We've now learned how to use variables, functions, and `if` statements. We know how to modify variables over time to create animations, and we know how to get user input.

We know that variables and values have a type, which tells the computer what kind of value it is. We also know how to use arrays to create a variable that holds multiple values.

This tutorial introduces a new kind of type: objects. Objects help you organize a group of related variables and functions into one unit, which allows you to do more complicated things with your code.

## Primitive Types

So far, the types we've been using have been **primitive types**. A primitive type holds a single, standalone value. There isn't any extra information associated with a primitive type. A primitive value of `7` is the same value as any other primitive value of `7`.

In other words, primitive values have no **state** associated with them.

## States

Think of a state as a snapshot of something. It's like a picture, or a written description of a particular item (or person, place, thing...). Think about how you would describe your state right now: How old are you? What color shirt are you wearing? Are you sitting or standing?

The value of any one of those items might be a primitive: Maybe you're 30 years old, and `30` by itself is a primitive. Maybe you're wearing a `blue` shirt, and `blue` by itself is a primitive (or three primitives representing RGB). Maybe you're sitting down, so we'd just store that as a `boolean` value of `true`, which is a primitive.

But the collection of all of those facts together represent your current state. In programming, we represent states using objects.

## Classes and Instances

Think about how we describe the state of objects in real life. For example, we know that cats have colored fur, as well as a weight, and a size. In other words, **the concept of "cat" describes what type of information the state for a particular cat will hold.** Then when we describe a particular cat, we fill in the blanks in that state: my cat Stanley has tan fur, weights about 14 pounds, and is about a foot long. A different cat might have orange and black stripes, weigh 200 pounds, and be six feet long.

We describe the state of objects in code in a similar way. We use **classes** to describe what type of information the state for a particular object can hold, and we use **instances** to fill in the blanks of that state to describe a particular object.

A class holds the variables that represent a concept: a `Cat` class might have `furColor`, `weight`, and `size` variables. We create instances of that class by filling in those blanks: a variable of type `Cat` named `stanley` might have `furColor = tan`, `weight = 14lbs`, and `size = 16inches`. We might also have a different variable of type `Cat` named `tiger` that holds a different state!

## Creating Instances

Let's start with an example program that stores the state of a circle (in this case, its position) in two variables:

```java
float circleX = 50;
float circleY = 25;
background(200);
ellipse(circleX, circleY, 15, 15);
```

This is a very simple example, but imagine it getting more complicated as we add speed, color, and size, along with multiple circles. Eventually we'll want to store all of that in objects, but for now let's just use the two position values as an example.

The `circleX` and `circleY` variables represent the state of the circle, and we want to store that state in an object instead. So we need a **class** that contains `x` and `y` variables. Luckily, Processing has a **class** named `PVector` that represents a position.

To create an **instance** of the `PVector` class, we declare a variable of type `PVector`, then initialize it to the value returned from the `PVector` constructor, which takes two parameters:

```java
PVector circlePosition = new PVector(50, 25);
```

This line of code uses the `new` keyword to call the `PVector` constructor, which takes two parameters: and x and a y. The `circlePosition` variable points to a `PVector` object with an x of `50` and a `y` of `25`.

## The Bad Way: Parallel Arrays

Let's look at this example program that uses arrays to store the position of three circles:

```java
float[] circleX = {25, 50, 75};
float[] circleY = {50, 75, 25};

void draw() {
  background(200);

  for (int i = 0; i < circleX.length; i++) {
    ellipse(circleX[i], circleY[i], 10, 10);
  }
}
```

This program uses two arrays: one to store the x positions of the circles, and one to store their y positions. This approach of using multiple arrays to store data is called **parallel arrays**. We try to avoid this approach for a few reasons:

- If you want to add or remove a circle, you have to change code in two places.
- If you want to know where a circle is, you have to look in two places. This would get worse as we add color, speed, size, etc.
- What happens if your arrays are different lengths? This isn't a big problem if you're coding by yourself, but becomes a problem when you're working with other people.

The x and y variables represent the position of a circle: in other words, they represent the **state** of a circle.

That state can change if you change your shirt or stand up, at which point one of the primitives inside that state will also change.
