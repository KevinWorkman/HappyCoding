---
layout: post
title: Turtle Graphics
slug: turtle-graphics
thumbnail: /tutorials/processing/creating-functions/images/turtle-graphics-1.gif
tagline: Use functions to create a pen that you can rotate and move.
sort-key: 430
meta-title: Turtle Graphics
meta-description: This example shows you how to use functions to create a pen that you can rotate and move.
meta-image: /tutorials/processing/creating-functions/images/turtle-graphics-2.png
tags: [example, processing, procedural-generation, 🐢]
previousPost: /tutorials/processing/creating-functions
redirect_from: /examples/processing/creating-functions/turtle-graphics
discourseEmbedUrl: /examples/processing/creating-functions/turtle-graphics
---

Processing uses an absolute coordinate system for its drawing functions, but other programming languages like [Logo](https://en.wikipedia.org/wiki/Logo_(programming_language)) use a relative system called [turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics). :turtle:

In turtle graphics, you control a "turtle", which you can think of as a pen. You can tell the turtle to move forward (which draws a line) or rotate, which makes it face a different direction. You can also change the turtle's color, whether it should draw while it moves, etc.

The idea is that turtle graphics are a little easier to think about than an absolute coordinate system because you just have to imagine what the turtle would be doing, and you can design some pretty cool-looking things this way.

This program uses a few variables and functions to recreate turtle graphics in Processing.


```java
float turtleX;
float turtleY;
float turtleHeading = 0;

void setup() {
  size(300, 300);
  turtleX = width/2;
  turtleY = height/2;
  background(64);
}

void draw() {

  stroke(random(256), random(256), random(256));

  rotateTurtle(random(360));
  float length = random(0, 150);

  forward(length);
  rotateTurtle(90);

  forward(length);
  rotateTurtle(90);

  forward(length);
  rotateTurtle(90);

  forward(length);
}

void forward(float amount) {

  float newX = turtleX + cos(radians(turtleHeading)) * amount;
  float newY = turtleY + sin(radians(turtleHeading)) * amount;

  line(turtleX, turtleY, newX, newY);
  fill(0);

  turtleX = newX;
  turtleY = newY;
}

void rotateTurtle(float degrees) {
  turtleHeading += degrees;
}
```

{% include codepen.html slug-hash="bBGQdw" height="375" %}

I ~~pretty much stole~~ borrowed this algorithm from [Secret Coders](http://www.secret-coders.com/), which is an awesome kids book that I highly recommend!

![🐢 graphics](/tutorials/processing/creating-functions/images/turtle-graphics-3.png)

## Tweak Ideas

- Add to the program so you can tell the turtle whether to draw when it moves or not.
- Draw a turtle using turtle graphics. 🐢 :turtle: 🐢
- Look up examples of turtle graphics art (like the [Secret Coders art gallery](http://www.secret-coders.com/turtle-art-gallery/)) and then make your own!
