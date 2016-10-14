---
layout: tutorial
title: Creating Classes
slug: creating-classes
thumbnail: /tutorials/processing/images/creating-classes-4.gif
tag: Store whatever state you can think of.
sort-key: 1200
meta-title: Creating Classes
meta-description: Learn how to create classes in Processing.
meta-image: /tutorials/processing/images/creating-classes-3.png
---

We've now learned how to use classes like the predefined `PVector` class. We know that classes describe a state by defining variables, and we know that instances of a class give values to those variables to describe the state of particular object.

This tutorial teaches you how to define your own classes, which allows you to describe any state you can think of.

## State

The first step in creating your own class is identifying what **state** you want to capture to describe objects. Let's start with an example that doesn't use any classes or objects:

```java
float circleX = 50;
float circleY = 50;

float xSpeed = 1;
float ySpeed = 2;

void draw() {
  background(200);

    circleX += xSpeed;
    if (circleX < 0 || circleX > width) {
      xSpeed *= -1;
    }

    circleY += ySpeed;
    if (circleY < 0 || circleY > height) {
      ySpeed *= -1;
    }

    ellipse(circleX, circleY, 20, 20);
}
```

This program uses four variables to store the state of a circle that bounces around the window.

![bouncing ball](/tutorials/processing/images/creating-classes-1.gif)

So we know that our state consists of four variables: `circleX`, `circleY`, `xSpeed`, and `ySpeed`.

## Writing a Class

Now that we know the state, we can **encapsulate** those variables inside a class.

To write a class, you use the `class` keyword, then give your class a name. Then inside curly brackets `{}`, you write the **body** of the class. The body consists of the variables, constructors, and functions you want inside the class.

A constructor looks a lot like a method, except it doesn't have a return type and it's always the same name as the class. Most constructors take values as parameters and use those to set class-level variables to store the state of the object.

```java
class Circle{
 float x;
 float y;
 float xSpeed;
 float ySpeed;
 
 Circle(float x, float y, float xSpeed, float ySpeed){
   this.x = x;
   this.y = y;
   this.xSpeed = xSpeed;
   this.ySpeed = ySpeed;
 }
  
}
```

This section of code creates a class that contains four variables, as well as a constructor that takes parameters for setting those variables.

## The `this` Keyword

You might be wondering what's going on with the code inside the `Circle` constructor. Remember that a constructor usually takes parameters for setting class-level variables, so often you'll have parameters with the same name as class-level variables. When this happens, you can use the `this` keyword to specifically refer to class-level variables. So take this line of code:

```java
this.x = x;
```

This line of code is really saying "set the class-level variable `x` to the value of the parameter variable `x`."

You could also just give your parameters different names.

## Using Your Classes

Now that we have a `Circle` class, we can get rid of all of our sketch-level variables and use an instance of our class instead.

We create the instance by using the `new` keyword to call the `Circle` constructor, which we pass our parameters into. We store that in a variable named `circle`, and we can use the **dot operator** on that variable to access the variables in that instance.

```java
Circle circle = new Circle(50, 50, 1, 2);

void draw() {
  background(200);

    circle.x += circle.xSpeed;
    if (circle.x < 0 || circle.x > width) {
      circle.xSpeed *= -1;
    }

    circle.y += circle.ySpeed;
    if (circle.y < 0 || circle.y > height) {
      circle.ySpeed *= -1;
    }

    ellipse(circle.x, circle.y, 20, 20);
}

class Circle{
 float x;
 float y;
 float xSpeed;
 float ySpeed;
 
 Circle(float x, float y, float xSpeed, float ySpeed){
   this.x = x;
   this.y = y;
   this.xSpeed = xSpeed;
   this.ySpeed = ySpeed;
 }
  
}
```

## Let Objects Handle Themselves

When writing a class, you should try to **encapsulate** everything about the object inside that class. So far we've moved the variables inside the class, but we still do the movement, bouncing, and drawing outside the class.

To fix this, we can create functions for handling the movement and drawing inside the `Circle` class. We do that exactly like we'd create sketch-level functions. The only thing we have to make sure of is that we use the sketch-level variables inside our sketch-level functions:

```java
class Circle {
  float x;
  float y;
  float xSpeed;
  float ySpeed;

  Circle(float x, float y, float xSpeed, float ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
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
  
  void display(){
   ellipse(x, y, 20, 20); 
  }
}
```

And now that we have these functions, our `draw()` function becomes much simpler:

```java
void draw() {
  background(200);
  circle.move();
  circle.display();
}
```

{% include codepen.html slug-hash="WGkjYp" height="275" %}

Now we just tell the `Circle` to move and display itself, and it knows how to do that.

## Creating Many Instances

Now that we've encapsulated all of the information needed to draw a bouncing circle inside the `Circle` class, it becomes very easy to add more circles: we just create more instances of the `Circle` class.

To do that, we can use an array that holds our `Circle` instances.

```java
Circle[] circles = new Circle[1000];
```

Note that this doesn't actually create any `Circle` instances yet! It just creates an array that can hold them. You still have to create the instances and add them to an array:

```java
for (int i = 0; i < circles.length; i++) {
    circles[i] = new Circle(random(width), random(height), random(-3, 3), random(-3, 3));
}
```

Then you can loop over the array to move and draw all of them:

```java
for (int i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
}
```

Putting it all together, it looks like this:

```java
Circle[] circles = new Circle[1000];

void setup() {
  size(300, 300);
  for (int i = 0; i < circles.length; i++) {
    circles[i] = new Circle(random(width), random(height), random(-3, 3), random(-3, 3));
  }
}

void draw() {
  background(200);

  for (int i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}

class Circle {
  float x;
  float y;
  float xSpeed;
  float ySpeed;

  Circle(float x, float y, float xSpeed, float ySpeed) {
      this.x = x;
      this.y = y;
      this.xSpeed = xSpeed;
      this.ySpeed = ySpeed;
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
    ellipse(x, y, 20, 20);
  }
}
```

![1000 bouncing balls](/tutorials/processing/images/creating-classes-2.gif)

{% include codepen.html slug-hash="vXZmvB" height="375" %}

Now if we want to add more circles, we only have to make one change. If we want to modify the logic of every circle (to wrap to the left side of the screen when it goes off the right side, or to change color, or to change size), then we only have to change the code in one place: inside the `Circle` class.

## Implied Constructor

We're giving every instance of `Circle` a random position and speed by passing parameters into the constructor. Instead of taking them as parameters, we could just create them in the constructor:

```java
Circle() {
    x = random(width);
    y = random(height);
    xSpeed = random(-3, 3);
    ySpeed = random(-3, 3);
  }
```

(Notice that we don't need to use the `this` keyword, since we don't have any parameters with the same name, so Processing knows that we're talking about the class-level variables.)

Now the constructor doesn't take any parameters, so we can just call the constructor without passing in any values:

```java
Circle c = new Circle();
```

We could further simplify our code by initializing the variables in the same line as when we declare them at top of the `Circle` class. If we do that, then our constructor will be empty, and we can remove it.

```java
class Circle {
  float x = random(width);
  float y = random(height);
  float xSpeed = random(-3, 3);
  float ySpeed = random(-3, 3);
 
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
    ellipse(x, y, 20, 20);
  }
}
```

Even though the `Circle` class doesn't have a constructor, you can still create instances of it using the `new` keyword along with the class name.

```java
Circle c = new Circle();
```

In other words, if you don't specify a constructor, a class still contains a no-args constructor (a constructor that takes no arguments). This is called an **implied constructor**. 

## Objects can contain other objects!

So far our classes have contained primitive values representing their state. But nothing prevents you from using other objects inside your class!

For example, here is our `Circle` class rewritten to use `PVector` instances:

```java
class Circle {
  PVector position = new PVector(random(width), random(height));
  PVector speed = new PVector(random(-3, 3), random(-3, 3));
 
  void move() {
    position.add(speed);
    
    if (position.x < 0 || position.x > width) {
      speed.x *= -1;
    }

    if (position.y < 0 || position.y > height) {
      speed.y *= -1;
    }
  }

  void display() {
    ellipse(position.x, position.y, 20, 20);
  }
}
```

## Homework

- Modify the bouncing circles program to make every circle have a random color and size.
- Make it so all of the circles restart at the position of the cursor when the user clicks the mouse.
- Create a fireworks program. When the user clicks, display an explosion at that position. Hint: your explosion can just be 100 red circles that fly off in random directions.
- Create a [flocking](https://en.wikipedia.org/wiki/Flocking_(behavior)) simulation. Start with circles that move randomly around the screen. Then add logic that makes every circle follow the circle closest to it, or the average position of the 10 closest circles.
- Remember the scene you drew in a previous homework? Convert it to use objects, and then animate it by having those objects move over time. For example if I drew a garden scene, maybe I would use `Flower` objects that grow over time.

# Next: [ArrayLists](/tutorials/processing/arraylists)
