---
layout: tutorial
title: Animation
slug: animation
thumbnail: /tutorials/processing/images/animation-4.gif
tagline: Create animated visualizations.
sort-key: 700
meta-title: Animation
meta-description: Learn how to create animations in Processing.
meta-image: /examples/processing/animation/images/random-walker-5.png
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

![falling circle](/tutorials/processing/images/animation-1.gif)

{% include codepen.html slug-hash="ORxmyK" height="175" %}

## Scope

Notice that we're declaring the `circleY` variable at the top of the sketch, outside the `draw()` function. That line of code is run once at the very beginning of the program.

What if we declared the `circleY` variable inside the `draw()` function?

```java
void draw(){
  float circleY = 25;

  background(200);
  ellipse(50, circleY, 10, 10);
  
  circleY = circleY + 1;
}
```

Every frame, this program declares a variable named `circleY` and initializes it to point to `25`. It then draws a circle and reassigns the value. But then during the next time, we declare a new variable named `circleY` and initialize it to `25`. In other words, the variable "forgets" its old value, since we're recreating it every frame. If you want a variable to remember its value between frames, then you have to declare it at the top of your sketch!

Similarly, what if we declare the `circleY` variable inside the `setup()` function?

```java
void setup(){
   size(200, 200);
   float circleY = 25;
}

void draw(){
  background(200);
  ellipse(50, circleY, 10, 10);
  
  circleY = circleY + 1;
}
```

You might think this makes sense because the `setup()` function is only called once at the beginning of the program, but this code has a big problem: if you declare a variable inside a function, you can only access it inside that function! Since we declare the `circleY` variable inside the `setup()` function, we can only access it inside the `setup()` function. So when we try to use it in the `draw()` function, we'll get an error.

Where you can access a variable is called its **scope**. So to make sure the variable is in-scope between multiple calls to the `draw()` function, we have to declare it at the top of the sketch. I call this a **sketch-level variable**.

A common thing to do is **declare** a variable at the top of the sketch, then **assign** it in the `setup()` function, and then **reassign** it in the `draw()` function:

```java
float circleY;

void setup(){
  size(200, 200);
  circleY = height/2;
}

void draw(){
  background(200);
  ellipse(100, circleY, 20, 20);
  
  circleY = circleY + 1;
}
```

This program declares the `circleY` variable at the sketch level. Then in the `setup()` function, it sets the size and initializes the `circleY` variable to point to `height/2`. Note that if we tried this assignment at the top of the sketch, it wouldn't work because the size hasn't been set yet! Finally, the `draw()` funtion uses the `circleY` variable and then reassigns it to create an animation.

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

![resetting circle](/tutorials/processing/images/animation-2.gif)

{% include codepen.html slug-hash="GjrmoL" height="175" %}

## Bouncing

When the circle reaches the bottom of the window, we could make the it bounce instead of teleporting it back to the top of the window.

One way to do this is to use another variable to hold the direction the circle should travel.

```java
float circleY = 25;
float ySpeed = 1;

void draw(){
  background(200);
  ellipse(50, circleY, 20, 20);
  
  circleY = circleY + ySpeed;
}
```

This program does the exact same thing as our previous program, except it's using a `ySpeed` variable to hold the value we add to `circleY` during the reassignment.

Now when we detect the circle has fallen off the bottom of the window (when `circleY > height`), we can reassign the `ySpeed` variable:

```java
float circleY = 25;
float ySpeed = 1;

void draw(){
  background(200);
  ellipse(50, circleY, 20, 20);
  
  circleY = circleY + ySpeed;
  
  if(circleY > height){
   ySpeed = ySpeed * -1; 
  }
}
```

Everything about this code is the same, except now when `circleY > 25`, we multiply the `ySpeed` variable by `-1`, which makes it negative. The next time the `draw()` function is called, `ySpeed` will now be `-1`. Adding that to `circleY` causes `circleY` to decrease, which moves the circle up.

![bouncing circle](/tutorials/processing/images/animation-3.gif)

We can expand that to make the ball bounce off all of the sides of the screen:

```java
float circleX = 50;
float circleY = 0;

float xSpeed = 1;
float ySpeed = 1;

void draw() {
  background(200);

  ellipse(circleX, circleY, 20, 20);

  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  if (circleX < 0 || circleX > width) {
    xSpeed = xSpeed * -1;
  }

  if (circleY < 0 || circleY > height) {
    ySpeed = ySpeed * -1;
  }
}
```

This program creates variables to hold the position of the ball (`circleX` and `circleY`), and two variables to hold the speed of the ball (`xSpeed` and `ySpeed`). Every frame, the code draws a ball at that position, and then moves the position by that speed. It then uses an `if` statement to check whether the ball has gone off the left or right side of the window, and reverses the `xSpeed` variable if it has. Similarly, it uses another `if` statement to check whether the ball has gone of the top or bottom of the window, and reverses the `ySpeed` variable if it has. This causes the ball to bounce off every side of the window.

![bouncing ball](/tutorials/processing/images/animation-4.gif)

{% include codepen.html slug-hash="rrGmZj" height="175" %}

This is where things get really interesting. Try playing around with the variables in this program to see what happens. What happens if you randomize the position or speed, either at the beginning or when you go off the edge of the window? What happens if you use `mouseX` and `mouseY` to set the speed or position?

## Shortcuts

When reassigning a variable to another value that's based on its old value, we can use shortcuts in our code. For example, look at this line of code:

```java
circleY = circleY + 10;
```

This line of code can be shortened to use the **add assign** operator `+=`instead:

```java
circleY += 10;
```

This code does the exact same thing, except it's less typing for us. It adds `10` to `circleY` and then reassigns `circleY` to that new value, all in one step.

Similarly, if we're adding `1` to a variable, we can use the **increment** `++` operator:

```java
circleY++;
```

This code adds `1` to `circleY` and then reassigns `circleY` to that value, all in one step.

There are similar shortcuts for subtraction, multiplication, and division. You don't **have** to use the shortcuts, but you'll probably see them in other people's code, so it's good to be familiar with them.

## Homework

- Add gravity to the bouncing ball program. Hint: `ySpeed` changes `circleY` every frame. Gravity changes `ySpeed` every frame!
- Add a rectangle to the bouncing ball program. The ball should bounce off the rectangle as well as the edges of the window.
- Create an animation that shows a full day- start out with a sunrise, show the sun moving across the sky, then sunset, and finally the moon and stars. The prettier the better!
- Remember your drawing program from previous homeworks? Animate it by either bouncing it around the screen or by changing it over time.
- Create a [random walk](https://en.wikipedia.org/wiki/Random_walk) animation.

# Next: [For Loops](/tutorials/processing/for-loops)
