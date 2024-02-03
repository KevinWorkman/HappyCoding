---
layout: post
title: Random Walker
thumbnail: /tutorials/p5js/animation/images/random-walker-4.png
tagline: Show a scribble that randomly moves around.
sort-key: 540
meta-title: p5.js Example - Random Walker
meta-description: Show a scribble that randomly moves around.
meta-image: /tutorials/p5js/animation/images/random-walker-2.png
tags: [example, p5.js, javascript, animation, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/animation
redirect_from: /examples/p5js/animation/random-walker
discourseEmbedUrl: /examples/p5js/animation/random-walker
updated: 2023-01-02
---

These sketches move a point around the screen randomly, creating a colorful scribble effect. This is a visualization of my favorite algorithm, the [random walker](https://en.wikipedia.org/wiki/Random_walker_algorithm)!

{% include youtube-embed.html slug="yBVeCXnxQYs" %}

<br>

{% include p5js-widget.html width=300 height=300 %}
let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(300, 300);
  x = width / 2;
  y = height / 2;

  r = random(255);
  g = random(255);
  b = random(255);

  background(32);
}

function draw() {

  let nextX = x + random(-20, 20);
  let nextY = y + random(-20, 20);
  nextX = constrain(nextX, 0, width);
  nextY = constrain(nextY, 0, height);

  r += random(-10, 10);
  g += random(-10, 10);
  b += random(-10, 10);
  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);
  line(x, y, nextX, nextY);

  x = nextX;
  y = nextY;
}
</script>

([Edit this sketch in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/2eAaIBlau))

![random walker](/tutorials/p5js/animation/images/random-walker-5.png)

Just for fun, here's a sped up version of the above video:

{% include youtube-embed.html slug="nmUPkb_GrBc" %}

<br>

---

Here's another take on the random walker algorithm. This one uses a `for` loop to speed up the animation.

{% include youtube-embed.html slug="m2lT4QojnGg" %}

---

{% include p5js-widget.html width=300 height=300 %}
let x;
let y;

let r;
let g;
let b;

function setup() {
  createCanvas(300, 300);
  x = width / 2;
  y = height / 2;

  r = random(255);
  g = random(255);
  b = random(255);

  background(50);
}

function draw() {
  for (let i = 0; i < 1000; i++) {
    step();
  }
}

function step() {
  x += random(-1, 1);
  y += random(-1, 1);

  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

  r += random(-1, 1);
  g += random(-1, 1);
  b += random(-1, 1);

  r = constrain(r, 0, 255);
  g = constrain(g, 0, 255);
  b = constrain(b, 0, 255);

  stroke(r, g, b);
  point(x, y);
}
</script>

![random walker](/tutorials/p5js/animation/images/random-walker-1.png)

# Remix Ideas

- Change what happens when the point goes off the edge of the screen.
- Instead of including every random color, make your point a random shade of red or gray.
- Reset the point after a certain number of steps.
