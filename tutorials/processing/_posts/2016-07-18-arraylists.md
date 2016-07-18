---
layout: tutorial
title: "ArrayLists"
slug: arraylists
---

Now we know how to use objects and create our own classes. We know how to use arrays to create variables that hold multiple values, and we know how to create arrays of objects.

Arrays are great if you know exactly how many values you're going to need ahead of time. But this often isn't the case: what if we want to add an object whenever the user clicks, or we want to add objects over time?

You can't increase the size of an array, so the only way to do this is to create a new bigger array, copy the values from the old array into the new array, then add the new object to the new array. This is a real pain in the neck.

This tutorial teaches you about the `ArrayList` class, which uses arrays internally and handles all of that stuff for us. In other words, an `ArrayList` has the ability to grow over time.

## Creating an `ArrayList`

Creating an `ArrayList` is a lot like creating any other object: you use the `ArrayList` type to create a variable, then you use the `new` keyword along with the `ArrayList` type to call the constructor, which gives you a new instance of the `ArrayList` class.

The only difference is that the `ArrayList` typre requires a **generic argument** that tells Processing what types of objects the `ArrayList` will hold. A generic argument is just a class name inside angle brackets `<>` right after the `ArrayList` type. Here's an example:

```java
ArrayList<Circle> circles = new ArrayList<Circle>();
```

This line of code code creates an `ArrayList` that can hold instances of a `Circle` class.

## Adding to an `ArrayList`

Once we have a variable that points to an `ArrayList`, we can add objects to it by calling the `add()` function, which takes one parameter: an instance of whatever type you specified in the generic argument.

```java
Circle c = new Circle();
circles.add(c);
```

## Getting from an `ArrayList`

An `ArrayList` is similar to an array in that it holds values at different indexes (of course, starting at zero). However, you don't access them using the array index operator `[]`. Instead, you call the `get()` function, which takes an `int` parameter of the index to return.

```java
Circle firstCircle = circles.get(0);
```

You can use the `size()` function along with a `for` loop to loop over every object in an `ArrayList`:

```java
for(int i = 0; i < circles.size(); i++){
	circles.get(i).doSomething();
}
```

## Removing from an `ArrayList`

The `remove()` function takes an `int` parameter, and removes the object at that index. It's good to remove objects that you don't need anymore (like when they go off-screen), otherwise your program might use up too much memory and crash.

When you remove an object from an `ArrayList`, everything after that index is shifted down. So if you remove the object from index `3`, then the object that was in index `4` moves to index `3`, the object that was in index `5` moves to index `4`, and so on.

This creates a problem when calling the `remove()` function inside a `for` loop. Let's say the loop variable is `0`, and you remove the object at that index. This causes the object at index `1` to shift down to index `0`, and the object at index `2` to shift down to index `1`. At the end of the current step, the loop variable increments, so now it's `1`. That means that during the next iteration, you're going to be looking at the object that was at index `2`, skipping over the object that was originally at index `0`. One easy way to avoid this is to just loop backwards, starting at `size-1`, decreasing by `1` each step, and then ending at `0`, that way any shifting happens to indexes that you've already looked at. 

```java
for(int i = circles.size()-1; i >= 0; i--){
   if(circles.get(i).isDead()){
   	circles.remove(i);
   }
}
```

## Example

The `ArrayList` class contains a bunch of other functions, but the `add()`, `get()`, and `remove()` functions will get us pretty far. Let's create a fireworks program that shows an explosion when the user clicks by adding 100 circles that go off in random directions.

First off, let's create a `Circle` class that knows how to move and draw itself:

```java
class Circle {

  float x;
  float y;
  float xSpeed = random(-3, 3);
  float ySpeed = random(-3, 3);
  
  Circle(float x, float y){
    this.x = x;
    this.y = y;
  }
 
  void move() {
    x += xSpeed;
    y += ySpeed;
  }

  void display() {
    ellipse(x, y, 20, 20);
  }
  
  boolean isOffScreen(){
    return x < 0 || x > width || y < 0 || y > height;
  }
}
```

You might notice the `isOffScreen()` function. That returns a `boolean` value of `true` if `x<0` (the circle is off the left side) or `x>width` (the circle is off the right side) or `y<0` (the circle is off the top) or `y>height` (the circle is off the bottom side). This will be useful for removing circles we can't see anymore.

Now that we have a `Circle` class, we can create an `ArrayList` that will hold instances of it:

```java
ArrayList<Circle> circles = new ArrayList<Circle>();
```

Then in the `mousePressed()` function we can add a bunch of `Circle` instances to our `ArrayList`:

```java
void mousePressed(){
  for(int i = 0; i < 100; i++){
    circles.add(new Circle(mouseX, mouseY));   
  }
}
```

Finally, our `draw()` function loops over the `ArrayList`, tells each `Circle` instance to move and draw itself, and then removes a `Circle` if it's off the screen:

```java
void draw() {
  background(200);

  for (int i = circles.size()-1; i >= 0; i--) {
    circles.get(i).move();
    circles.get(i).display();
    
    if(circles.get(i).isOffScreen()){
      circles.remove(i);
    }
  }
}
```

Notice that we're looping backwards through the `ArrayList`, to avoid the problem of skipping indexes when we call the `remove()` function inside a `for` loop.

Putting all of that together, our program looks like this:

```java
ArrayList<Circle> circles = new ArrayList<Circle>();

void setup() {
  size(300, 300);
}

void mousePressed(){
  for(int i = 0; i < 100; i++){
    circles.add(new Circle(mouseX, mouseY));   
  }
}

void draw() {
  background(200);

  for (int i = circles.size()-1; i >= 0; i--) {
    circles.get(i).move();
    circles.get(i).display();
    
    if(circles.get(i).isOffScreen()){
      circles.remove(i);
    }
  }
}

class Circle {

  float x;
  float y;
  float xSpeed = random(-3, 3);
  float ySpeed = random(-3, 3);
  
  Circle(float x, float y){
    this.x = x;
    this.y = y;
  }
 
  void move() {
    x += xSpeed;
    y += ySpeed;
  }

  void display() {
    ellipse(x, y, 20, 20);
  }
  
  boolean isOffScreen(){
    return x < 0 || x > width || y < 0 || y > height;
  }
}
```

## Homework

- Modify the fireworks program to use random colors and sizes. Make the circles fade over time.
- Remember the scene you drew in a previous homework? Use `ArrayLists` to add user interaction. For example if I drew a garden scene, I might use an `ArrayList` of `Flower` instances to add flowers whenever the user clicks.
- Modify your flocking program (from a previous homework) to use an `ArrayList` instead of arrays. Add objects to your simulation whenever the user clicks.
