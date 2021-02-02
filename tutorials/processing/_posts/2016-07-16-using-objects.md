---
layout: tutorial
title: Using Objects
thumbnail: /tutorials/processing/images/using-objects-2.gif
tagline: Group related variables together.
sort-key: 1100
meta-title: Using Objects
meta-description: Learn how to use objects to group related variables together.
meta-image: /examples/processing/using-objects/images/eyes-5.png
updated: 2020-10-18
tags: [tutorial, processing, objects]
---

{% include toc.md %}

Now you know how to [create variables](/tutorials/processing/creating-variables) including [arrays](/tutorials/processing/arrays), and you know how to use [`for` loops](/tutorials/processing/for-loops) to repeat some code for each element in an array.

You know that variables and values have a **type**, which tells the computer what kind of value it is.

This tutorial introduces a new kind of type: objects. Objects help you combine a group of related variables and functions into one unit, which helps you organize your code.

# Primitive Types

So far, you've been using **primitive types** like `float` and `boolean`. A primitive type holds a single, standalone value. For example:

```java
float x = 7;
```

When you read this line of code, you know that `x` holds a primitive value of `7`, but you don't know whether there's an associated `y` value. It's a single value, without any extra information.

# Example

Let's start with some code that uses two primitive values to show a falling circle:

```java
float x;
float y;

void setup(){
  size(300, 300);
  x = width / 2;
  y = height / 2;
}

void draw(){
  y++;
  if(y > height){
    y = 0;
  }

  background(50);
  ellipse(x, y, 100, 100);
}
```

{% include codepen-new.html slug-hash="ExyyZvR" height="300" %}

This code uses primitive `x` and `y` variables to represent the position of a falling circle.

# The Bad Way: Parallel Arrays

Next, let's say you wanted to show multiple falling circles instead of just one. You might use one array to hold x values, and another array to hold y values:

```java
float[] xArray;
float[] yArray;
float circleCount = 10;
  
void setup() {
  size(300, 300);
  xArray = new float[circleCount];
  yArray = new float[circleCount];
  
  for(int i = 0; i < circleCount; i++) {
    xArray[i] = random(width);
    yArray[i] = random(height);
  }
}
  
void draw() {
  background(50);
  
  for(int i = 0; i < circleCount; i++) {
    yArray[i]++;
    if(yArray[i] > height) {
      yArray[i] = 0;
    }

    ellipse(xArray[i], yArray[i], 25, 25);
  }
}
```

{% include codepen-new.html slug-hash="QWENRPy" height="300" %}

This code uses two arrays: one that holds the x values of the circles, and another that holds the y values. This approach of using multiple arrays to hold related data is called **parallel arrays**. This approach works, but it's generally considered a bad idea because it can be difficult to understand code that uses a bunch of different arrays.

# Classes

You know that a type tells the computer what kind of value a variable will hold. You've seen primitive types like `float` and `boolean`.

Primitive types hold a single value, and **object types** hold multiple related values. But how do you know what those related values are?

A **class** tells you about a particular object type. Similar to how you looked up primitive types in [the reference](https://processing.org/reference/), you can also find classes in the reference.

Specifically, let's look at the [PVector](https://processing.org/reference/PVector.html) class.

# Instances

A class is like a template that tells you what's available inside an object. For example, [the PVector reference](https://processing.org/reference/PVector.html) tells you that the `PVector` class contains `x`, `y`, and `z` fields.

That means you can create a variable with an object type of `PVector`, and that variable will contain `x`, `y`, and `z` fields.

To create an object, use the **`new`** keyword, followed by the name of the class, followed by parentheses `()` similar to a function call:

```java
PVector myVector = new PVector();
```

The `myVector` variable is of type `PVector`, and this code uses the `new` keyword along with the `PVector` class name to create an object with `x`, `y`, and `z` fields. This is called an **instance** of the `PVector` class.

Now that you have this variable, you can use the **dot operator** to set the fields of that instance:

```java
myVector.x = 150;
myVector.y = 200;
```

Now the `myVector` variable holds a `PVector` instance with an `x` value of `150` and a `y` value of `200`.

(You could also set the `z` field, but the example only needs `x` and `y` so you can ignore `z` for now.)

You can also use the dot operator to access those fields, and you can pass them into a function just like any other value:

```java
ellipse(myVector.x, myVector.y, 100, 100);
```

Putting it all together, it looks like this:

```java
size(300, 300);

PVector myVector = new PVector();
myVector.x = 150;
myVector.y = 200;

background(100);
ellipse(myVector.x, myVector.y, 100, 100);
```

{% include codepen-new.html slug-hash="pobyXNw" height="300" %}

This code creates a `myVector` variable with an object type of `PVector`, and uses the `new` keyword to create an instance of the `PVector` class. It then sets the `x` and `y` fields of that instance, and then uses that instance to draw a circle.

## Constructors

Take a closer look at this line:

```java
PVector myVector = new PVector();
```

The `new` keyword tells the computer to create a new instance, and the `PVector()` part tells the computer what class to create an instance of. The `PVector()` part is also called a **constructor** because it constructs the instance.

The above constructor does not take any parameters, and the `x`, `y`, and `z` fields inside the instance it creates will point to default values of `0`. This is also called a no-args constructor.

But like functions, constructors can also take arguments, passed in as comma-separated values inside the `()` parentheses. The constructor section of [the PVector reference](https://processing.org/reference/PVector.html) tells you what parameters the `PVector` constructor can take.

For example, instead of setting the `myVector.x` and `myVector.y` values yourself, you can pass them into the `PVector` constructor:

```java
size(300, 300);

PVector myVector = new PVector(150, 200);

background(100);
ellipse(myVector.x, myVector.y, 100, 100);
```

And here's the original example using a `PVector` instance:

```java
PVector circle;

void setup(){
  size(300, 300);
  circle = new PVector(width / 2, height / 2);
}

void draw(){
  circle.y++;
  if(circle.y > height){
    circle.y = 0;
  }

  background(100);
  ellipse(circle.x, circle.y, 100, 100);
}
```

{% include codepen-new.html slug-hash="rNLLjvv" height="300" %}

This code uses a `PVector` instance to represent a falling circle.

# Multiple Instances

One of the most important concepts to understand with objects is that each instance is independent of other instances of the same class. Changing one instance doesn't change the other instances.

For example, this code creates two `PVector` instances:

```java
PVector redCircle;
PVector blueCircle;

void setup() {
  size(300, 300);
  redCircle = new PVector(100, 150);
  blueCircle = new PVector(150, 100);
}
  
void draw() {
  redCircle.x++;
  if(redCircle.x > width) {
    redCircle.x = 0;
  }
  
  blueCircle.y++;
  if(blueCircle.y > height) {
    blueCircle.y = 0;
  }
  
  background(100);

  fill(255, 0, 0);
  ellipse(redCircle.x, redCircle.y, 100, 100);

  fill(0, 0, 255);
  ellipse(blueCircle.x, blueCircle.y, 100, 100);
}
```

{% include codepen-new.html slug-hash="KKMzjQX" height="300" %}

This code creates two `PVector` variables, each pointing to a different `PVector` instance. Notice that the red circle and the blue circle are independent. Updating the red circle does not update the blue circle, and vice-versa.

This is a powerful idea, and it lets you organize your code as it gets more complicated. It's also pretty confusing, and "thinking in objects" can take some time. Try changing the above code to add a green circle using a third `PVector` instance.

# The Good Way: Object Arrays

Just like you can create an array of primitive values, you can also create an array of objects:

```java
PVector[] circles = new PVector[10];
```

This line of code creates a `circles` variable that points to an array that can hold 10 instances of the `PVector` class.

```java
for(int i = 0; i < circles.length; i++) {
  circles[i] = new PVector(random(width), random(height));
}
```

This `for` loop fills the array with `PVector` instances. Each instance contains a random `x` and `y` value.

Then you can loop over the array to move and draw each circle:

```java
for(int i = 0; i < circles.length; i++) {
  circles[i].y++;
  if(circles[i].y > height) {
    circles[i].y = 0;
  }

  ellipse(circles[i].x, circles[i].y, 25, 25);
}
```

Putting it all together, it looks like this:

```java
PVector[] circles = new PVector[10];

void setup() {
  size(300, 300);

  for(int i = 0; i < circles.length; i++) {
    circles[i] = new PVector(random(width), random(height));
  }
}
  
void draw() {
  background(100);
  
  for(int i = 0; i < circles.length; i++) {
    circles[i].y++;
    if(circles[i].y > height) {
      circles[i].y = 0;
    }

    ellipse(circles[i].x, circles[i].y, 25, 25);
  }
}
```

{% include codepen-new.html slug-hash="dyXMBex" height="300" %}

# Thinking in Objects

Objects are a new way of organizing your code, but more importantly, they're a new way of **thinking** about your code.

For example, when you think of a bunch of falling circles, you probably don't think of them as a bunch of x values and a bunch of y values. You probably think of each circle as a cohesive unit, where each unit has an x and y value. Objects let you structure your code closer to how you structure the ideas in your brain.

This new way of thinking can be confusing. I remember being frustrated by it when I first started learning. But I also remember having an *"ah-ha!"* moment after working with objects for a while, where I finally understood them. I honestly believe that it has affected the way I've thought about not just code, but also the real world ever since.

So if all of this still feels confusing, that's okay! It'll become more natural as you write more code and see more examples that use objects.

This way of "thinking in objects" is called [object oriented programming](https://en.wikipedia.org/wiki/Object-oriented_programming) and it's at the core of many languages and libraries.

# NullPointerException

Like I've said [before](/tutorials/processing/debugging), encountering errors and needing to debug problems is a normal part of writing code. And now that you're using objects, you're very likely to encounter a new type of error: the dreaded `NullPointerException`.

For example, what do you expect happens when you run this code?

```java
PVector myVector;

void setup() {
  size(300, 300);
}

void draw() {
  ellipse(myVector.x, myVector.y, 100, 100);
}
```

You might expect this sketch to draw a circle in the upper-left corner, with an `x` and `y` value of `0`. Instead, if you try to run this program, you'll get this error:

```
NullPointerException
```

## Default Values and Null

To understand this error, think about the default values of sketch-level variables. For primitive number types like `float`, the default value is `0`, and for primitive `boolean` values, the default value is `false`. For object types, the default value is **`null`** which means that it's not pointing at any instance yet.

```java
float myNumber;
boolean myBoolean;
PVector myVector;

void setup() {
  size(300, 300);
}

void draw() {
  background(50);
  textSize(32);
  text("myNumber: " + myNumber, 25, 75);
  text("myBoolean: " + myBoolean, 25, 150);
  text("myVector: " + myVector, 25, 225);
}
```

![default values](/tutorials/processing/images/using-objects-1.png)

In other words, if you don't specify a value, then you can pretend that you've specified the defaults:

```java
float myNumber = 0;
boolean myBoolean = false;
PVector myVector = null;
```

The `NullPointerException` error is caused by trying to use the dot operator on an object variable that points to `null`.

That's why this code generates a `NullPointerException`:

```java
PVector myVector;

void setup() {
  size(300, 300);
}

void draw() {
  ellipse(myVector.x, myVector.y, 100, 100);
}
```

This code tries to get the `x` and `y` values of `myVector` which is set to the default value of `null`. And since `null` means that no object has been created, the computer doesn't have an object to "ask" for its `x` and `y` values, so it generates the `NullPointerException` instead.

To fix a `NullPointerException`, you need to make sure any object variables you're using are pointing to an instance:

```java
PVector myVector;

void setup() {
  size(300, 300);
  myVector = new PVector(width / 2, height / 2);
}

void draw() {
  ellipse(myVector.x, myVector.y, 100, 100);
}
```

Also note that the same thing is true of object arrays! For example:

```java
PVector[] circles = new PVector[10];
```

This line of code creates an array that can hold 10 `PVector` instances, but by default each index in the array points to `null` (in other words, doesn't point to anything). If you tried to use one of those elements:

```java
ellipse(circles[0].x, circles[0].y, 100, 100);
```

You would get a `NullPointerException` because the element is `null`. That's why you need to fill the array with instances first:

```java
for(int i = 0; i < circles.length; i++) {
  circles[i] = new PVector(random(width), random(height));
}
```

When you encounter a `NullPointerException`, try using `println()` statements to figure out which variable is `null`, and then make sure that variable points to an instance instead of `null`.

You can learn more about debugging here:

{% include url-thumbnail.html url="/tutorials/processing/debugging" %}

# Object Functions

Now you've seen that classes contain fields. For example, the `PVector` class contains `x`, `y`, and `z` fields. Each instance of the `PVector` class is an object that contains its own `x`, `y`, and `z` fields, and each instance is independent of other instances.

In addition to containing fields, classes can also contain functions. Functions inside a class usually modify the state of an instance by changing the values of its fields, or they take some action based on the values of the fields.

As always, the Processing reference is your best friend. [The PVector reference](https://processing.org/reference/PVector.html) lists all of the functions you can call for instances of the `PVector` class. For example, the `PVector` class provides an [add()](https://processing.org/reference/PVector_add_.html) function that adds values to the `x`, `y`, and `z` fields of a specific instance.

To call an instance's function, use the **dot operator**, then the name of the function, then any parameters the function requires in parentheses `()`.

```java
PVector circle;

void setup(){
  size(300, 300);
  circle = new PVector(width / 2, height / 2);
}

void draw(){
  circle.add(0, 1);
  
  if(circle.y > height){
    circle.y = 0;
  }

  background(100);
  ellipse(circle.x, circle.y, 100, 100);
}
```

{% include codepen-new.html slug-hash="ExyyNoW" height="300" %}

Specifically, notice this line of code:

```java
circle.add(0, 1);
```

This line of code calls the `add()` function on the `circle` variable, which points to an instance of the `PVector` class. The `0` and `1` represent how much to add to the instance's `x` and `y` fields respectively. After this line of code, the `y` field inside the `circle` instance will increase by `1`.

This might not seem very useful yet, but it comes in handy when you start using more complicated objects.

# Homework

- What is the difference between a class and an instance?
- Think about some real life objects. What fields would be in their class? What values would instances of that class have?
- Modify the above program to use the `z` field of the `PVector` class to hold a different size or speed for each falling circle.
