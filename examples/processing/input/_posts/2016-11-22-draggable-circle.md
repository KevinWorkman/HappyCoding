---
layout: tutorial
title: Draggable Circle
slug: draggable-circle
thumbnail: /examples/processing/input/images/draggable-circle-1.gif
tagline: Reposition a circle by dragging it around the screen.
meta-title: Draggable Circle
meta-description: This example allows the user to reposition a circle by dragging it around the screen.
meta-image: /examples/processing/input/images/draggable-circle-2.png
tags: [example, processing, input]
sort-key: 50
---

```java
float circleX;
float circleY;
float circleDiameter;

void setup() {
  size(200, 200);
  circleX = width/2;
  circleY = height/2;
  circleDiameter = 50;
}

void draw() {

  background(64);

  if (dist(mouseX, mouseY, circleX, circleY) < circleDiameter/2) {
    //mouse is inside the circle

    if (mousePressed) {
      //mouse is inside the circle and clicked
      //color it bright green and move the circle
      fill(64, 256, 64);
      circleX = mouseX;
      circleY = mouseY;
    } else {
      //mouse is inside the circle but not clicked
      //highlight the circle light green but don't move it
      fill(128, 256, 128);
    }
  } else {
    //mouse is outside the circle, color it gray
    fill(128);
  }

  ellipse(circleX, circleY, circleDiameter, circleDiameter);
}
```

This code keeps track of a circle's position and size, and then uses the `dist()` function to check whether the cursor position is inside that circle. If so, then the circle is either highlighted or repositioned depending on whether the mouse is currently pressed.

In other words, this code shows a circle that can be repositioned by dragging it around the screen.

![draggable circles](/examples/processing/input/images/draggable-circle-3.gif)



## Tweak Ideas
- Use the `mouseDragged()` function to detect the mouse being dragged instead of the `mousePressed` variable.
- Notice that if you move the mouse fast enough to exit the circle while dragging, you "drop" the circle. Make it so the circle still moves even if you exit the bounds of the circle while dragging.
- Make a sketch that shows a draggable rectangle, or make one of your previous drawings draggable.