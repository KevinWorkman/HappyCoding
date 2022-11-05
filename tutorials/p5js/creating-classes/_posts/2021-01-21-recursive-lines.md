---
layout: tutorial
title: Recursive Lines
thumbnail: /examples/p5js/creating-classes/images/recursive-lines-1.png
tagline: Draw lines that draw other lines.
sort-key: 1040
meta-title: p5.js Example - Recursive Lines
meta-description: Draw lines that draw other lines.
meta-image: /examples/p5js/creating-classes/images/recursive-lines-1.png
tags: [example, p5.js, javascript, creating-classes, trigonometry, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/creating-classes
redirect_from: /tutorials/p5js/creating-classes/recursive-lines
discourseEmbedUrl: /tutorials/p5js/creating-classes/recursive-lines
---

{% include p5js-widget.html width=400 height=400 %}
const lines = [];

function setup() {
  createCanvas(400, 400);
  lines.push(new LineDrawer(25, height - 25, 0, 275));
  strokeWeight(2);
  background(32);
}

function draw() {
  for (const line of lines) {
    line.step();
  }
}

class LineDrawer {

  constructor(x, y, heading, length) {
    this.startX = x;
    this.startY = y;
    this.currentX = x;
    this.currentY = y;
    this.heading = heading;
    this.length = length;
    this.speed = random(1, 5);
    this.spawned25 = false;
    this.spawned50 = false;
    this.spawned75 = false;
    this.c = random(100, 255);
  }

  step() {

    if (this.length < 10) {
      return;
    }

    const currentLength = dist(this.startX, this.startY,
                               this.currentX, this.currentY);

    if (currentLength >= this.length) {
      return;
    }

    if (!this.spawned25 && currentLength >= this.length * .25) {
      lines.push(
        new LineDrawer(this.currentX, this.currentY,
          this.heading - PI / 4, this.length * .25));
      this.spawned25 = true;
    }

    if (!this.spawned50 && currentLength >= this.length * .5) {
      lines.push(
        new LineDrawer(this.currentX, this.currentY,
          this.heading - PI / 4, this.length * .5));
      this.spawned50 = true;
    }

    if (!this.spawned75 && currentLength >= this.length * .75) {
      lines.push(
        new LineDrawer(this.currentX, this.currentY,
          this.heading - PI / 4, this.length * .75));
      this.spawned75 = true;
    }


    const prevX = this.currentX;
    const prevY = this.currentY;
    this.currentX = this.currentX + cos(this.heading) * this.speed;
    this.currentY = this.currentY + sin(this.heading) * this.speed;

    stroke(this.c);
    line(prevX, prevY, this.currentX, this.currentY);
  }
}
</script>

[Click here to view this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/09uOivsQN)

[Click here to view the result by itself.](https://editor.p5js.org/KevinWorkman/present/09uOivsQN)

This sketch shows lines that draw other lines. Each line draws itself, and 3 other lines. Those 3 lines draw themselves, and each draws 3 more lines.

I created this for the 21st day of [Genuary](https://genuary2021.github.io/) which had a prompt of:

```
function f(x) {
  DRAW(x);
  f(1 * x / 4);
  f(2 * x / 4);
  f(3 * x / 4);
}
```

Each line draws itself, and then spawns a new line at 25%, 50%, and 75% of its own length.

![recursive lines](/examples/p5js/creating-classes/images/recursive-lines-6.png)
![recursive lines](/examples/p5js/creating-classes/images/recursive-lines-5.png)
![recursive lines](/examples/p5js/creating-classes/images/recursive-lines-4.gif)
![recursive lines](/examples/p5js/creating-classes/images/recursive-lines-2.gif)

# Remix Ideas

- Restart each line when with a new color when it finishes.
- Start each new line at a random angle.
- Base the line's color off of it's length. Make longer lines darker, or more red.
