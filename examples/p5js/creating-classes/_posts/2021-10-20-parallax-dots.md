---
layout: tutorial
title: Parallax Dots
thumbnail: /examples/p5js/creating-classes/images/parallax-dots-2.png
tagline: Show three layers of dots.
sort-key: 1090
meta-title: p5.js Example - Parallax Dots
meta-description: Show three layers of dots.
meta-image: /examples/p5js/creating-classes/images/parallax-dots-2.png
tags: [example, p5.js, javascript, creating-classes]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include youtube-embed.html slug="Jw0uZD-_HZY" %}

---

This example uses [parallax scrolling](https://en.wikipedia.org/wiki/Parallax_scrolling) to show three layers of colorful dots. Move your mouse around the canvas to see the effect.

{% include p5js-widget.html width=400 height=400 %}
const dots = [];
const border = 20;

function setup() {
  createCanvas(400, 400);

  for (let layer = 1; layer <= 3; layer++) {
    for (let i = 0; i < 200; i++) {
      dots.push(new Dot(layer));
    }
  }
}

function draw() {
  background(32);
  for (const dot of dots) {
    dot.draw();
  }
}

class Dot {
  constructor(layer) {
    this.layer = layer;
    this.x = random(-border, width + border);
    this.y = random(-border, height + border);

    this.r = random(255);
    this.g = random(255);
  }

  draw() {
    let deltaX = 0;
    let deltaY = 0;

    if(mouseX != 0 && mouseY != 0){
      deltaX = -this.layer *
        map(mouseX - width / 2, 0, width, 0, 5);
      deltaY = -this.layer *
        map(mouseY - height / 2, 0, height, 0, 5);
    }

    this.x += deltaX;
    this.y += deltaY;

    if (this.x < -border) {
      this.x = width + random(border);
      this.y = random(0, height);
    } else if (this.x > width + border) {
      this.x = 0 - random(border);
      this.y = random(0, height);
    }

    if (this.y < -border) {
      this.y = height + random(border);
      this.x = random(0, width);
    } else if (this.y > height + border) {
      this.y = 0 - random(border);
      this.x = random(0, width);
    }

    fill(this.r, this.g, 0);
    circle(this.x, this.y, 10 / (4 - this.layer));
  }
}
</script>

[Click here to view this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/N4R8UHHGY)

![campfire](/examples/p5js/creating-classes/images/parallax-dots-1.gif)
![campfire](/examples/p5js/creating-classes/images/parallax-dots-3.png)
![campfire](/examples/p5js/creating-classes/images/parallax-dots-4.png)
![campfire](/examples/p5js/creating-classes/images/parallax-dots-5.png)

# Remix Ideas

- Change the colors of the dots.
- Add more layers of dots.
- Base the scrolling off of the mouse dragging.