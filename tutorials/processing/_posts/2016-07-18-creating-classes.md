---
layout: tutorial
title: Creating Classes
slug: creating-classes
thumbnail: /tutorials/processing/images/creating-classes-4.gif
tagline: Create blueprints for your own objects.
sort-key: 1200
meta-title: Creating Classes
meta-description: Learn how to create classes in Processing.
meta-image: /tutorials/processing/images/creating-classes-3.png
previousPost: /tutorials/processing/using-objects
tags: [tutorial,processing,objects]
lastUpdated: 2020-10-25
---

{% include toc.md %}

Now you know how to [use classes](/tutorials/processing/using-objects) like the predefined `PVector` class. You know that classes let you group a set of fields together, like the `x` and `y` fields of the `PVector` class. And you know how to create instances of a class using the `new` keyword followed by the class name, also called a constructor.

Predefined classes like `PVector` are useful, but you'll likely encounter situations where you need a set of fields that are not captured by any existing classes. For example, `PVector` gives you `x` and `y` fields, but what if you also wanted your object to contain `r`, `g`, and `b` fields so each instance had its own color? 

This tutorial teaches you how to define your own classes, which lets you group any set of fields you can think of.

# State

The first step in creating your own class is identifying what **state** you want to capture to describe objects. Let's start with an example that doesn't use any classes or objects:

```java
float circleX = 150;
float circleY = 150;

float xSpeed = 1;
float ySpeed = 2;

void setup() {
 size(300, 300); 
}

void draw() {
  background(50);

  circleX += xSpeed;
  if (circleX < 0 || circleX > width) {
    xSpeed *= -1;
  }

  circleY += ySpeed;
  if (circleY < 0 || circleY > height) {
    ySpeed *= -1;
  }

  ellipse(circleX, circleY, 50, 50);
}
```

{% include codepen-new.html slug-hash="VwjpaVK" height="300" %}

This program uses four variables to store the state of a circle that bounces around the window.

![bouncing ball](/tutorials/processing/images/creating-classes-1.gif)

So the state consists of four variables: `circleX`, `circleY`, `xSpeed`, and `ySpeed`.

Now, let's say you wanted to show 10 circles bouncing around the screen. You could create four arrays: `xArray`, `yArray`, `xSpeedArray`, and `ySpeedArray`. But working with four different parallel arrays is confusing, so you might look for a class that contains those four variables. `PVector` is pretty close, but it only contains `x`, `y`, and `z` fields.

# Defining a Class

Instead of using a predefined class like `PVector`, you can define your own class.

To define a class, use the `class` keyword, then give your class a name. Then inside curly brackets `{}`, write the **body** of the class. The body consists of the variables, constructors, and functions you want inside the class. Let's start with the variables:

```java
class Circle {
  float x;
  float y;
  float xSpeed;
  float ySpeed;
}
```

You can put this anywhere in your sketch. I usually put my class definitions at the bottom.

Now that you've defined a `Circle` class, you can use it just like you used the `PVector` class.

You can create a variable of type `Circle`:

```java
Circle circle;
```

You can use the `new` keyword to create a new instance of `Circle`:

```java
circle = new Circle();
```

You can use the dot operator to set the fields inside the `Circle` class:

```java
 circle.x = 150;
 circle.y = 150;
 circle.xSpeed = 1;
 circle.ySpeed = 2;
```

You can also use the dot operator to access the fields inside the `Circle` class:

```java
circle.x += circle.xSpeed;
if (circle.x < 0 || circle.x > width) {
  circle.xSpeed *= -1;
}
```

Putting it all together, it looks like this:

```java
Circle circle;

void setup() {
  size(300, 300);

  circle = new Circle();
  circle.x = 150;
  circle.y = 150;
  circle.xSpeed = 1;
  circle.ySpeed = 2;
}

void draw() {
  background(50);

  circle.x += circle.xSpeed;
  if (circle.x < 0 || circle.x > width) {
    circle.xSpeed *= -1;
  }

  circle.y += circle.ySpeed;
  if (circle.y < 0 || circle.y > height) {
    circle.ySpeed *= -1;
  }

  ellipse(circle.x, circle.y, 50, 50);
}

class Circle {
  float x;
  float y;
  float xSpeed;
  float ySpeed;
}
```

{% include codepen-new.html slug-hash="pobebzG" height="300" %}

This code defines a `Circle` class that contains `x`, `y`, `xSpeed`, and `ySpeed` fields, and then creates an instance of that class to represent a circle bouncing around the screen.

# Defining Constructors

Now you know how to define a class that contains a certain set of variables. You can use the no-args constructor and then the dot operator to set those variables:

```java
 circle = new Circle();
 circle.x = 150;
 circle.y = 150;
 circle.xSpeed = 1;
 circle.ySpeed = 2;
```

But you can shorten this code by defining a constructor that takes these values as parameters, so that you don't have to set each one individually.

A constructor looks a lot like a method, except it doesn't have a return type and it's always the same name as the class. Most constructors take values as parameters and use those to set class-level variables to store the state of the object.

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
}
```

Now that you've defined this constructor, you can shorten this code:

```java
 circle = new Circle();
 circle.x = 150;
 circle.y = 150;
 circle.xSpeed = 1;
 circle.ySpeed = 2;
```

To this:

```java
circle = new Circle(150, 150, 1, 2);
```

Here's the full example:

```java
Circle circle;

void setup() {
  size(300, 300);

  circle = new Circle(150, 150, 1, 2);
}

void draw() {
  background(50);

  circle.x += circle.xSpeed;
  if (circle.x < 0 || circle.x > width) {
    circle.xSpeed *= -1;
  }

  circle.y += circle.ySpeed;
  if (circle.y < 0 || circle.y > height) {
    circle.ySpeed *= -1;
  }

  ellipse(circle.x, circle.y, 50, 50);
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
}
```

## `this` Keyword

You might be wondering what's going on with the code inside the `Circle` constructor. What does `this` mean?

The `Circle` class defines four variables:

```java
 float x;
 float y;
 float xSpeed;
 float ySpeed;
```

And the `Circle` constructor takes four arguments:

```java
Circle(float x, float y, float xSpeed, float ySpeed) {
```

Notice that the constructor arguments have the same names as the class variables. So when the code inside the constructor wants to reference a class variable, it needs to use the `this` keyword to point to the class variables instead of the argument variables.

```java
this.x = x;
```

This line of code tells the computer to set the class-level variable `x` to the value of the parameter variable `x`.

If `this` is confusing, you can avoid this problem by giving your constructor parameters different names than the class variables. But this pattern of using the same name for class variables and constructor arguments is very common, so you're likely to encounter it in code written by other people.

# Class Functions

So far you've learned how to define a class that includes a set of fields, and a constructor that sets those fields.

Remember that classes can also contain functions, like the `add()` function of the `PVector` class. These functions often do something based on the values of the instance's fields.

Defining a class function is a lot like defining a sketch function like `setup()` and `draw()`.

Inside your class, give your function a return type (or if it doesn't return anything, give it a `void` return type), then give it a name, and then list any arguments in `()` parentheses. Then in `{}` curly brackets, write the code that should run when that function is called.

Here's an example:

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
   ellipse(x, y, 50, 50); 
  }
}
```

The `move()` function uses the class variables to handle moving and bouncing the circle, and the `display()` function draws the circle.

This means your sketch-level `draw()` function can be simplified, since all of the logic has been moved inside the `Circle` class:

```java
void draw() {
  background(50);
  circle.move();
  circle.display();
}
```

Now instead of containing a bunch of code that moves, bounces, and draws the circle, the `draw()` function tells the circle to move and draw itself.

Putting it all together, it looks like this:

```java
Circle circle;

void setup() {
  size(300, 300);

  circle = new Circle(150, 150, 1, 2);
}

void draw() {
  background(50);
  circle.move();
  circle.display();
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
    ellipse(x, y, 50, 50);
  }
}
```

{% include codepen-new.html slug-hash="WGkjYp" height="300" %}

# Let Objects Handle Themselves

When you create a class, you should try to include everything about an object inside that class. In other words, a class should be self-contained, so that the code that *uses* that class doesn't need to worry about the details.

For example, the `Circle` class includes everything needed to move, bounce, and display a circle, which means the `draw()` function can tell the circle to do its thing instead of containing a bunch of circle-bouncing logic.

This process of including everything about an object inside a class is called **encapsulation**. The `Circle` class encapsulates the concept of a bouncing circle, so the `draw()` function can tell the circle to move, bounce, and draw itself, instead of doing all of that work directly.

```java
void draw() {
  background(200);
  circle.move();
  circle.display();
}
```

This is a little subtle, but it lets you organize your code into logical pieces, which becomes very important as you work with more complex code. This also helps you work with other people: imagine you're responsible for the `draw()` function, and somebody else is responsible for creating a new `Square` class that showed a bouncing square. What would you be responsible for? What would they be responsible for? This way of "thinking in objects" lets you draw clear lines between coders, which makes working on a team much more manageable.

# Creating Many Instances

Let's get back to the goal of showing 10 circles bouncing around the screen.

Now that you've encapsulated the concept of a bouncing circle inside the `Circle` class, you can create multiple instances of that class to add more circles to your sketch.

To do that, you can use an array that holds `Circle` instances.

```java
Circle[] circles = new Circle[10];
```

This line of code creates an array empty that can hold ten `Circle` instances. This doesn't create any `Circle` instances yet! You still have to create the instances and add them to the array:

```java
for (int i = 0; i < circles.length; i++) {
    circles[i] = new Circle(random(width), random(height), random(-3, 3), random(-3, 3));
}
```

This `for` loop creates ten instances of the `Circle` class, each with a random `x`, `y`, `xSpeed`, and `ySpeed` value.

Then you can loop over the array to move and draw each circle:

```java
for (int i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
}
```

Putting it all together, it looks like this:

```java
Circle[] circles = new Circle[10];

void setup() {
  size(300, 300);
  for (int i = 0; i < circles.length; i++) {
    circles[i] = new Circle(random(width), random(height), random(-3, 3), random(-3, 3));
  }
}

void draw() {
  background(50);

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
    ellipse(x, y, 50, 50);
  }
}
```

![1000 bouncing balls](/tutorials/processing/images/creating-classes-2.gif)

{% include codepen-new.html slug-hash="vXZmvB" height="375" %}

Now if you want to add more circles, you only have to change the size of the array. And if you want to modify the logic of every circle (to wrap to the left side of the screen when it goes off the right side, or to change color, or to change size), then you only have to change the code in one place: inside the `Circle` class. That's encapsulation!

# Objects can contain other objects!

So far, the `Circle` class has contained four primitive fields representing its state: `x`, `y`, `xSpeed`, and `ySpeed`. But nothing prevents you from using other objects inside your class!

For example, here's the `Circle` class rewritten to use `PVector` instances:

```java
class Circle {
  PVector position;
  PVector speed;

  Circle(float x, float y, float xSpeed, float ySpeed) {
      position = new PVector(x, y);
      speed = new PVector(xSpeed, ySpeed);
  }

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
    ellipse(position.x, position.y, 50, 50);
  }
}
```

This `Circle` class uses `PVector` instances to represent its position and its speed. The rest of the sketch (the `setup()` and `draw()` functions) can stay the same, because the `Circle` class encapsulates its own internal representation of a bouncing circle.

```java
void draw() {
  background(50);

  for (int i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}
```

# Thinking in Objects

I mentioned this in the [using objects](/tutorials/processing/using-objects#thinking-in-objects) tutorial, but objects aren't just a new way of organizing your code, they're a new way of **thinking** about your code.

Like many things in coding, there isn't a single "correct" way to approach object oriented programming. From here on out, a lot of code becomes more [subjective](/blog/subjective-side-of-code) than you might expect. It's less about what's correct, and more about what makes the most sense to **you**.

Does it make more sense to represent a bouncing circle as four primitive variables, or does it make more sense to use two `PVector` instances? Does that change if you were to encapsulate the concept of a color for each circle? What about a size?

There isn't a right or wrong answer to any of those questions. That can be frustrating and confusing, but I also find it beautiful in its own way. The code you write is an extension of how your brain organizes the world.

Just don't forget the `this` keyword.

# Homework

- Modify the bouncing circles program to make every circle have a random color and size.
- Make it so all of the circles restart at the position of the cursor when the user clicks the mouse.
- Create a fireworks program. When the user clicks, display an explosion at that position. Hint: your explosion can just be 100 red circles that fly off in random directions.
- Create a [flocking](https://en.wikipedia.org/wiki/Flocking_(behavior)) simulation. Start with circles that move randomly around the screen. Then add logic that makes every circle follow the circle closest to it, or the average position of the 10 closest circles.
- Remember the scene you drew in a previous homework? Convert it to use objects, and then animate it by having those objects move over time. For example, if I drew a garden scene, maybe I would use `Flower` objects that grow over time.
