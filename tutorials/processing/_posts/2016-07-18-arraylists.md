---
layout: tutorial
title: ArrayLists
thumbnail: /tutorials/processing/images/arraylists-1.gif
tagline: Create an object that stores other objects.
sort-key: 1300
meta-title: ArrayLists
meta-description: Learn how to use ArrayLists in Processing.
meta-image: /examples/processing/arraylists/images/random-walkers-3.png
tags: [tutorial, processing, arraylist]
previousPost: /tutorials/processing/creating-classes
lastUpdated: 2020-11-14
---

{% include toc.md %}

Now you know how to [use objects](/tutorials/processing/using-objects) and [create your own classes](/tutorials/processing/creating-classes). You know how to use [arrays](/tutorials/processing/arrays) to create variables that hold multiple values, and you know how to create arrays of objects.

Arrays are great if you know exactly how many values you're going to need ahead of time. But this often isn't the case: what if you want to add an object whenever the user clicks, or you want to remove objects over time?

You can't change the size of an array after you create it, so to add or remove elements, you generally need to create a new array, copy the elements you want into that new array, and then change the variable so it points at the new array instead of the old one. This is how functions like [shorten()](https://processing.org/reference/shorten_.html) and [append()](https://processing.org/reference/append_.html) work.

This tutorial introduces the `ArrayList` class, which lets you store multiple values without worrying about creating new arrays or copying elements. The `ArrayList` class handles all of that for you. In other words, an `ArrayList` has the ability to grow and shrink over time.

# Creating an ArrayList

Creating an `ArrayList` is a lot like creating any other object: you use the `ArrayList` type to create a variable, then you use the `new` keyword along with the `ArrayList` type to call the constructor, which gives you a new instance of the `ArrayList` class.

The only difference is that the `ArrayList` type requires a **generic argument** that tells Processing what types of objects the `ArrayList` will hold. A generic argument is a class name inside angle brackets `<>` right after the `ArrayList` type. Here's an example:

```java
ArrayList<PVector> circles = new ArrayList<PVector>();
```

This line of code code creates an `ArrayList` that can hold instances of the `PVector` class.

# Adding to an ArrayList

Once you have a variable that points to an `ArrayList`, you can add objects to it by calling the `add()` function, which takes one parameter: an instance of whatever type you specified in the generic argument.

```java
PVector circle = new PVector(150, 150);
circles.add(circle);
```

This line of code creates a new `PVector` instance and then adds it to the `circles` `ArrayList`.

You can also shorten this to a single line of code:

```java
circles.add(new PVector(150, 150));
```

# Getting from an ArrayList

An `ArrayList` is similar to an array in that it holds values at indexes, starting at zero. However, you don't access the elements in an `ArrayList` using the array index operator `[]`. Instead, you call the `get()` function, which takes an `int` parameter of the index to return.

```java
PVector firstCircle = circles.get(0);
```

You can use the `size()` function along with a `for` loop to loop over every object in an `ArrayList`:

```java
for(int i = 0; i < circles.size(); i++) {
  PVector circle = circles.get(i);
  ellipse(circle.x, circle.y, 50, 50);
}
```

Putting it all together, it looks like this:

```java
ArrayList<PVector> circles = new ArrayList<PVector>();

void setup() {
  size(300, 300);

  PVector circle = new PVector(150, 150);
  circles.add(circle);
}

void mousePressed() {
 PVector circle = new PVector(mouseX, mouseY);
 circles.add(circle);
}

void draw() {
  background(50);

  for(int i = 0; i < circles.size(); i++) {
   PVector circle = circles.get(i);
   ellipse(circle.x, circle.y, 50, 50);
  }
}
```

{% include codepen-new.html slug-hash="WNxawPx" height="300" %}

This sketch creates an `ArrayList` named `circles` and adds a single `PVector` to it. Then in the `mousePressed()` function, the code creates a new `PVector` and adds it to the `ArrayList`. Finally, the `draw()` function loops over the `ArrayList` and draws a circle for every `PVector` instance it contains.

# Removing from an ArrayList

The `remove()` function takes an `int` parameter, and removes the element at that index. It's a good idea to remove objects that you don't need anymore (like when they go off-screen), otherwise your sketch might use up too much memory and slow down or even crash.

Let's start with a sketch that does **not** remove any objects:

```java
ArrayList<PVector> circles = new ArrayList<PVector>();

void setup() {
  size(300, 300);
}

void mouseDragged() {
  circles.add(new PVector(mouseX, mouseY));
}

void draw() {
  background(50);

  textSize(16);
  text("Circles: " + circles.size(), 100, 100);
  text("Framerate: " + frameRate, 100, 125);

  for (int i = 0; i < circles.size(); i++) {
    PVector circle = circles.get(i);
    circle.y += 1;
    ellipse(circle.x, circle.y, 50, 50);

    if (circle.y > height) {
      circles.remove(i);
    }
  }
}

```

{% include codepen-new.html slug-hash="BazqzxR" height="300" %}

This code creates an `ArrayList` and then adds a `PVector` instance to it whenever the user drags their mouse. The `draw()` function displays the size of the `ArrayList` and the current framerate, and then loops over the circles to move them down, and draws them. The circles fall down, but they are not removed from the `ArrayList` when they fall off the bottom of the screen.

Try dragging your mouse around until you notice the framerate drop. On my computer, I notice a drop somewhere between 5,000 and 10,000 circles. So if you're working with a sketch that uses a lot of objects, you should get into the habit of removing them when you no longer need them.

Try modifying the above `for` loop to look like this:

```java
for (int i = 0; i < circles.size(); i++) {
  PVector circle = circles.get(i);
  circle.y += 1;
  ellipse(circle.x, circle.y, 50, 50);

  if (circle.y > height) {
    circles.remove(i);
  }
}
```

Now the code contains an `if` statement that checks whether the circle has fallen off the bottom of the window, and if so, removes it from the `ArrayList`. Now the `ArrayList` only contains circles that you actually still need, and your framerate will be much better.

# Other Functions

The `add()`, `get()`, and `remove()` functions will get you pretty far, but the `ArrayList` class contains a bunch of other functions that might come in handy. Here are a couple other functions worth checking out:

- A version of the `add()` function that take two parameters, an index and an element, and inserts the element at that index instead of at the end. For example, `myList.add(0, myElement)` will insert `myElement` to the beginning of `myList` instead of at the end.
- A version of the `remove()` function that takes an element instead of an index. For example, `myList.remove(myElement)` removes `myElement` from `myList`.
- A `contains()` function that returns whether an element is already in the `ArrayList`. For example, `myList.contains(myElement)` returns `true` if `myElement` is inside `myList`.

`ArrayList` is a Java class, so you can learn more about it in [the Java reference](https://docs.oracle.com/javase/8/docs/api/index.html?java/util/ArrayList.html).

# For-Each Loop

A for-each loop (also called an enhanced for loop) lets you shorten your code if you're looping over an `ArrayList` and you don't care about the index.

For example, if you have a loop like this:

```java
for(int i = 0; i < circles.size(); i++) {
  PVector circle = circles.get(i);
  ellipse(circle.x, circle.y, 50, 50);
}
```

Notice that you don't use the `i` variable for anything other than getting the element at that index. That means you can shorten your code to use a for-each loop:

```java
for(PVector circle : circles) {
  ellipse(circle.x, circle.y, 50, 50);
}
```

# Custom Classes

So far, all of the examples have used the `PVector` class. But remember that you can create custom classes to represent any state you want- and you can use an `ArrayList` to hold multiple instances of your custom class!

Here's an example:

```java
ArrayList<Circle> circles = new ArrayList<Circle>();

void setup() {
  size(300, 300);
}

void draw() {
  background(50);

  for (Circle c : circles) {
    c.move();
    c.display();
  }
}

void mousePressed() {
  circles.add(new Circle(mouseX, mouseY));
}

// Class representing a bouncing circle
class Circle {
  float x;
  float y;
  float xSpeed;
  float ySpeed;

  Circle(float x, float y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-2, 2);
  }

  void move() {
    x += xSpeed;
    if (x < 0 || x > width) {
      xSpeed *= -1;
    }

    y += ySpeed;
    if (y < 0 || y > height) {
      ySpeed *= -1;
    }
  }

  void display() {
    ellipse(x, y, 50, 50);
  }
}
```

{% include codepen-new.html slug-hash="LYZqBVz" height="300" %}

This code uses the `Circle` class from the [creating classes tutorial](/tutorials/processing/creating-classes) along with an `ArrayList` to add a new bouncing circle whenever the user clicks their mouse. Notice how the `mousePressed()` function passes in `mouseX` and `mouseY` to the `Circle` constructor.

Try changing the `mousePressed()` function to `mouseDragged()`, or try giving each circle a random color!

# Example: Trail

Here's another example that combines many of the concepts from above to create a trail that follows the mouse:

```java
ArrayList<PVector> trail = new ArrayList<PVector>();

void setup() {
  size(300, 300);
  noStroke();
}

void draw() {
  background(50);
 
  // Add a point to the end of the trail at the mouse position
  trail.add(new PVector(mouseX, mouseY));

  // If the trail gets too long, remove the first (oldest) point
  if (trail.size() > 25) {
    trail.remove(0);
  }

  // Draw the trail
  for (int i = 0; i < trail.size(); i++) {
    PVector p = trail.get(i);

    // The trail is smaller at the beginning,
    // and larger closer to the mouse
    float size = 50.0 * i / trail.size();
    ellipse(p.x, p.y, size, size);
  }
}
```

{% include codepen-new.html slug-hash="xxOMJRL" height="300" %}

This code uses an `ArrayList` of `PVector` instances to show a trail that follows the mouse. Each time `draw()` is called, the code adds a new instance of `PVector` to the end of the `ArrayList`. This new point is directly under the mouse. Then the code checks the length of the `ArrayList`, and if it's more than `25`, it removes the first (oldest) `PVector`. This means the `ArrayList` only contains the 25 newest `PVector` instances. Then the code uses a `for` loop to draw each `PVector` in the trail.

![trail of circles](/tutorials/processing/images/arraylists-2.gif)

Try changing the length of the trail, or making it so old points are not removed.

# Homework

- Create a sketch that shows fireworks whenever the user clicks their mouse. (You could use an `ArrayList` to contain all of the particles.)
- Create a sketch that shows a circle. When the user clicks the circle, remove that circle and add two random circles. If the user clicks either of those circles, remove that circle and add two more.
