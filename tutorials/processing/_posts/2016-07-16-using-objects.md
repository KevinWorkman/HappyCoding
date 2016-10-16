---
layout: tutorial
title: Using Objects
slug: using-objects
thumbnail: /tutorials/processing/images/using-objects-2.png
tagline: Store a state (not just a value) in a variable.
sort-key: 1100
meta-title: Using Objects
meta-description: Learn how to use objects to store a state (not just a value) in Processing.
meta-image: /examples/processing/using-objects/images/eyes-5.png
---

We've now learned how to use variables, functions, and `if` statements. We know how to modify variables over time to create animations, and we know how to get user input.

We know that variables and values have a type, which tells the computer what kind of value it is. We also know how to use arrays to create a variable that holds multiple values.

This tutorial introduces a new kind of type: objects. Objects help you organize a group of related variables and functions into one unit, which allows you to do more complicated things with your code.

## Primitive Types

So far, the types we've been using have been **primitive types**. A primitive type holds a single, standalone value. There isn't any extra information associated with a primitive type. A primitive value of `7` is the same value as any other primitive value of `7`.

In other words, primitive values have no **state** associated with them.

## States

Think of a state as a description of something. It's like a picture, or a set of facts about a particular item (or person, place, thing...). Think about how you would describe your state right now: How old are you? What color shirt are you wearing? Are you sitting or standing?

The value of any one of those items might be a primitive: Maybe you're 30 years old, and `30` by itself is a primitive. Maybe you're wearing a `blue` shirt, and `blue` by itself is a primitive (or three primitives representing RGB). Maybe you're sitting down, so we'd just store that as a `boolean` value of `true`, which is a primitive.

But the collection of all of those facts together represent your current state. In programming, we represent states using objects.

## Classes and Instances

Think about how we describe the state of objects in real life. For example, we know that cats have colored fur, as well as a weight, and a size. In other words, **the concept of "cat" describes what type of information the state for a particular cat will hold.** Then when we describe a particular cat, we fill in the blanks in that state: my cat Stanley has tan fur, weights about 14 pounds, and is about a foot long. A different cat might have orange and black stripes, weigh 200 pounds, and be six feet long.

We describe the state of objects in code in a similar way. We use **classes** to describe what type of information the state for a particular object can hold, and we use **instances** to fill in the blanks of that state to describe a particular object.

A class holds the variables that represent a concept: a `Cat` class might have `furColor`, `weight`, and `size` variables. We create instances of that class by filling in those blanks: a variable of type `Cat` named `stanley` might have `furColor = tan`, `weight = 14lbs`, and `size = 16inches`. We might also have a different variable of type `Cat` named `tiger` that holds a different state!

Think about classes and instances like this:

- Classes are types, similar to primitive types like `int` and `float`. And just like primitive types, class types tell Processing what kind of value a variable will hold. 

- Instances are values, similar to primitive values like '7' and '3.14`.

## Creating Instances

Let's start with an example program that stores the state of a circle (in this case, its position) in two variables:

```java
float circleX = 50;
float circleY = 25;
ellipse(circleX, circleY, 15, 15);
```

![circle](/tutorials/processing/images/using-objects-1.png)

This is a very simple example, but imagine it getting more complicated as we add speed, color, and size, along with multiple circles. Eventually we'll want to store all of that in objects, but for now let's just use the two position values as an example.

The `circleX` and `circleY` variables represent the state of the circle, and we want to store that state in an object instead. So we need a **class** that contains `x` and `y` variables. Luckily, Processing has a **class** named `PVector` that represents a position.

To create an **instance** of the `PVector` class, we declare a variable of type `PVector`, then initialize it to the value returned from the `PVector` constructor, which takes two parameters:

```java
PVector circlePosition = new PVector(50, 25);
```

This line of code uses the `new` keyword to call the `PVector` constructor, which takes two parameters: and x and a y. The `circlePosition` variable points to a `PVector` object with an x of `50` and a `y` of `25`.

## Using Instances

A class tells us what variables a state has, and an instance gives values to those variables to describe a particular object.

Once we have a variable that points to an instance, we can access the variables of that instance using the **dot operator** and then the name of the variable.

```java
ellipse(circlePosition.x, circlePosition.y, 15, 15);
```

## Different instances can have different values!

Different cats can have different colored fur, sizes, weights, and names. Similarly, different instances of the same class can have different values for the variables in that class. So we could do something like this:

```java
PVector redCircle = new PVector(25, 25);
PVector greenCircle = new PVector(75, 25);
PVector blueCircle = new PVector(25, 75);
PVector yelllowCircle = new PVector(75, 75);

fill(255, 0, 0);
ellipse(redCircle.x, redCircle.y, 40, 40);

fill(0, 255, 0);
ellipse(greenCircle.x, greenCircle.y, 40, 40);

fill(0, 0, 255);
ellipse(blueCircle.x, blueCircle.y, 40, 40);

fill(255, 255, 0);
ellipse(yelllowCircle.x, yelllowCircle.y, 40, 40);
```

This code creates four instances of `PVector`, each with different `x,y` coordinates.

![four circles](/tutorials/processing/images/using-objects-2.png)

{% include codepen.html slug-hash="NRajBb" height="175" %}

## Objects have functions

In addition to containing variables, objects can also contain functions. Usually a function inside an object modifies the state of the object by changing the variables, or it does something based on the state.

To call an instances's function, you use the **dot operator**, then the name of the function, then any parameters the function requires in parentheses `()`.

For example, the `PVector` class has an `add()` function that adds values to its `x,y` position:

```java
PVector circlePosition = new PVector(37, 5);
circlePosition.add(13, 20);
ellipse(circlePosition.x, circlePosition.y, 15, 15);
```

This program creates a `PVector` representing position `37,5`, then adds `13,20` to that position, making it `50,25` when we access the `x` and `y` variables.

![circle](/tutorials/processing/images/using-objects-3.png)

## Object Oriented Programming

The examples in this tutorial are purposely oversimplified, since learning about objects can already be very confusing. This isn't just learning a new syntax, it's also learning **a new way of thinking about the world**, or at least thinking about programming.

## Homework

- What is the difference between a class and an instance?
- Think about some real life objects. What variables would be in their class? What values would instances have?
- Write a program that shows balls bouncing around the screen. Use an array of `PVector` instances to track them.

# Next: [Creating Classes](/tutorials/processing/creating-classes)
