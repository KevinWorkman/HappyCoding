---
layout: tutorial
title: "Animation"
slug: animation
---

We now know about functions, variables, and if statements.

We know that the `draw()` function is called 60 times per second, and we know how to use operators like `+` and `-` to get new values.

This tutorial combines those ideas to let us create animations.

## Reassigning Variables

One thing you might not have seen yet is that after you create a variable, you can **reassign** it by giving it a new variable.

To reassign a variable, you just type its name, then the equals operator `=`, and then the new value it should have.

```java
float circleY = 50;
circleY = 100;
```

At the end of this code, `circleY` now holds the value `100`.

Notice that we don't give the variable a type when we reassign it. It already has a type. Creating a variable (giving it a type and a name) is called **declaring** a variable. The first time you point it to a value using the `=` operator (which is often in the same line as declaring it) is called **initializing** a variable. If you then change the value of the variable, that's called **reassigning** the variable. In other words, you only have to give a variable a type when you're **declaring** it, not when you're initializing or reassigning it.

## Modifying Variables

We already know how to declare, assign, and reassign a variable.

```java
float circleY = 50;
circleY = 100;
```

And we know that we can use variables anywhere we can use a value, and that we can use operators to get new values.

```java
float circleY = height/2;
```

Here we're using the `height` variable, dividing it by `2` to get a new value, and then pointing `circleY` to that value.

We can combine those ideas to change a variable over time, by basing its new value on its old value.

```java
float circleY = 50;
circleY = circleY + 1;
```

At the end of this code, `circleY` will point to the value `51`.

It might make sense to read the **right** side of the second line first: We take `circleY`, which is `50`, and then add `1` to it to get `51`. We then reassign `circleY` so it points to that value instead of its old value.

## The `draw()` Loop

This becomes much more useful when we combine it with the `draw()` function. Remeber that the `draw()` function is called 60 times per second. So if we reassign a variable inside the `draw()` function, we can modify that variable over time, and then use that variable to draw animations.

Here's an example:

```java
float circleY = 25;

void draw(){
  background(200);
  ellipse(50, circleY, 10, 10);
  
  circleY = circleY + 1;
}
```

First, this code declares a variable named `circleY` and initializes it to point to the value `25`. Every time the `draw()` function is called, the code draws a gray background, and then draws a circle with a vertical position of `circleY`. Then, the code adds `1` to the `circleY` variable! Now the next time `draw()` is called, `circleY` will be `26`, which causes the circle to be drawn just a little bit lower in the window. We repeat that 60 times per second, which makes it look like the circle is falling.

![falling circle](/tutorials/processing/animation-1.gif)

## Resetting

Now we have an animation, but our circle falls off the window and never comes back. That's not very interesting.

To fix this, we can use an `if` statement to check whether the circle has fallen off the bottom of the window. We know the circle is below the bottom of the window when `circleY` is greater than `height`. When this happens, we can reassign `circleY` to move it back to the top of the window. 

```java
float circleY = 25;

void draw(){
  background(200);
  ellipse(50, circleY, 20, 20);
  
  circleY = circleY + 1;
  
  if(circleY > height){
    circleY = 0; 
  }
}
```

This code is mostly the same: we declare a variable named `circleY`, initialize it to `25`, and use that variable to draw a circle. We then reassign `circleY` every frame, which creates our animation.

The new part is the `if` statement. After we reassign the `circleY` variable, we check whether its new value is greater than `height`. If it is, then we reassign it to point to the value `0`. The next time the `draw()` function is called, `circleY` will be `0`, the circle will be drawn at the top of the window, and we start the animation over again.

![resetting circle](/tutorials/processing/animation-2.gif)
