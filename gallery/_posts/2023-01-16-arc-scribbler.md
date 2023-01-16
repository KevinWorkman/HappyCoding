---
layout: tutorial
title: Arc Scribbler
thumbnail: /gallery/images/arc-scribbler-1.png
tagline: Turn left, turn right, repeat.
sort-key: 200
meta-title: Arc Scribbler
meta-description: Turn left, turn right, repeat.
meta-image: /gallery/images/arc-scribbler-1.png
---

This project uses p5.js's `arc()` function to draw a line that randomly curls around the screen.

---

<div id="sketch"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.5.0/p5.js"></script>
<script>
// This sketch works by drawing a new 90 degree arc every frame
// It tracks whether it's currently going clockwise or counter-clockwise
// and picks a new point to revolve around based on the below parameters

// If true, try to turn at least minTurns
// Otherwise turn at most maxTurns
const superTwistyMode = false;
const minTurns = 100;
const maxTurns = 3;

// Either "array" or "walk" or "random"
// If "array", choose from diameters each turn
// If "walk", fluctuate between minDiameter and maxDiameter
// If "random", choose randomly between minDiameter and maxDiamter
let diameterChangeMode = "array";

// Every turn, randomly choose one of these diameters
// (Think of them as turning radiuses if that's easier)
const diameters = [25, 25, 50, 50, 100];

let minDiameter = 25;
let maxDiameter = 50;
let deltaDiameter = 5;

// Leave this much room on all sides
const border = 100;

// How many turns to take each frame
let animationSpeed = 1;

// How much to fade the animation each frame
// Choose 0 for no fade
let fade = 5;

// If true, randomly change colors
// If false, use r, g, b
const changeColor = true;
let r = 255;
let g = 255;
let b = 255;
let deltaColor = 10;
const minR = 0;
const maxR = 255;
const minG = 0;
const maxG = 255;
const minB = 0;
const maxB = 255;

// If true, randomly change the thickness of the line
const changeThickness = true;
const deltaThickness = 0.25;
const minThickness = 2;
const maxThickness = 10;
const startThickness = 5;

// If true, instead of making a 90 degree turn each frame,
// make a 270 degree turn the other way
const inverseTurns = false;

// The values below are changed by the algorithm, don't change them here

// x and y are the point the arc revolves around,
// not the endpoint of the arc
let x;
let y;
let diameter;
let thickness = startThickness;

// The direction the line is currently heading
let direction;

// Whether the line is currently going clockwise
let clockwise;

// How many times we've gone without switching clockwise-ness
let stepsWithoutTurn = 0;

// Helper variables to make radians easier to reference
let rightAngle;
let downAngle;
let leftAngle;
let upAngle;

function setup() {
  createCanvas(600, 600).parent("sketch");

  rightAngle = 0;
  downAngle = PI / 2;
  leftAngle = PI;
  upAngle = (PI * 3) / 2;

  if (diameterChangeMode == "array") {
    diameter = random(diameters);
  } else if (diameterChangeMode == "walk") {
    diameter = random(minDiameter, maxDiameter);
  } else if (diameterChangeMode == "random") {
    diameter = random(minDiameter, maxDiameter);
  }

  clockwise = true;
  x = width / 2 + diameter / 2;
  y = height / 2;

  direction = "up";

  background(32);
  noFill();

  if (changeColor) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

function draw() {
  for (let i = 0; i < animationSpeed; i++) {
    step();
  }
}

function step() {
  if (fade) {
    background(0, fade);
  }

  strokeWeight(thickness);
  if (changeThickness) {
    thickness += random(-deltaThickness, deltaThickness);
    thickness = constrain(thickness, minThickness, maxThickness);
  }

  stroke(r, g, b);
  if (changeColor) {
    r += random(-deltaColor, deltaColor);
    g += random(-deltaColor, deltaColor);
    b += random(-deltaColor, deltaColor);
    r = constrain(r, minR, maxR);
    g = constrain(g, minG, maxG);
    b = constrain(b, minB, maxB);
  }

  let nextClockwise = random() < 0.5;

  if (superTwistyMode && stepsWithoutTurn < minTurns) {
    nextClockwise = clockwise;
  } else if (!superTwistyMode && stepsWithoutTurn >= maxTurns) {
    nextClockwise = !clockwise;
  }

  if (clockwise != nextClockwise) {
    stepsWithoutTurn = 0;
  } else {
    stepsWithoutTurn++;
  }

  let nextDiameter;
  if (diameterChangeMode == "array") {
    nextDiameter = random(diameters);
  } else if (diameterChangeMode == "walk") {
    nextDiameter = diameter + random(-deltaDiameter, deltaDiameter);
    nextDiameter = constrain(nextDiameter, minDiameter, maxDiameter);
  } else if (diameterChangeMode == "random") {
    nextDiameter = random(minDiameter, maxDiameter);
  }

  let startAngle;

  // This big gross if statement checks which direction we're going,
  // and picks a next point based on that and whether we're going clockwise
  if (direction == "up") {
    // Keep the line on the canvas
    if (x < border) {
      nextClockwise = true;
    } else if (x > width - border) {
      nextClockwise = false;
    }

    // Switching directions moves the point
    if (clockwise && !nextClockwise) {
      x -= diameter;
    } else if (!clockwise && nextClockwise) {
      x += diameter;
    }

    if (nextClockwise) {
      startAngle = leftAngle;
      x = x - diameter / 2 + nextDiameter / 2;
    } else {
      startAngle = upAngle;
      x = x + diameter / 2 - nextDiameter / 2;
    }
  } else if (direction == "down") {
    // Keep the line on the canvas
    if (x < border) {
      nextClockwise = false;
    } else if (x > width - border) {
      nextClockwise = true;
    }

    // Switching directions moves the point
    if (clockwise && !nextClockwise) {
      x += diameter;
    } else if (!clockwise && nextClockwise) {
      x -= diameter;
    }

    if (nextClockwise) {
      startAngle = rightAngle;
      x = x + diameter / 2 - nextDiameter / 2;
    } else {
      startAngle = downAngle;
      x = x - diameter / 2 + nextDiameter / 2;
    }
  } else if (direction == "left") {
    // Keep the line on the canvas
    if (y < border) {
      nextClockwise = false;
    } else if (y > height - border) {
      nextClockwise = true;
    }

    // Switching directions moves the point
    if (clockwise && !nextClockwise) {
      y += diameter;
    } else if (!clockwise && nextClockwise) {
      y -= diameter;
    }

    if (nextClockwise) {
      startAngle = downAngle;
      y = y + diameter / 2 - nextDiameter / 2;
    } else {
      startAngle = leftAngle;
      y = y - diameter / 2 + nextDiameter / 2;
    }
  } else if (direction == "right") {
    // Keep the line on the canvas
    if (y < border) {
      nextClockwise = true;
    } else if (y > height - border) {
      nextClockwise = false;
    }

    // Switching directions moves the point
    if (clockwise && !nextClockwise) {
      y -= diameter;
    } else if (!clockwise && nextClockwise) {
      y += diameter;
    }

    if (nextClockwise) {
      startAngle = upAngle;
      y = y - diameter / 2 + nextDiameter / 2;
    } else {
      startAngle = rightAngle;
      y = y + diameter / 2 - nextDiameter / 2;
    }
  }

  direction = getNextDirection(nextClockwise);
  diameter = nextDiameter;
  clockwise = nextClockwise;

  let endAngle = startAngle + PI / 2;
  if (inverseTurns) {
    let t = startAngle;
    startAngle = endAngle;
    endAngle = t;
  }

  arc(x, y, diameter, diameter, startAngle, endAngle);
}

const directions = ["up", "right", "down", "left"];
function getNextDirection(nextClockwise) {
  let index = directions.indexOf(direction);
  if (nextClockwise) {
    index++;
  } else {
    index--;
  }
  if (index < 0) {
    index = directions.length - 1;
  } else if (index >= directions.length) {
    index = 0;
  }

  return directions[index];
}
</script>

---

([View fullscreen here!](https://editor.p5js.org/KevinWorkman/present/c8FJXtne2))

The code has lots of juicy parameters you can play with! [Edit the code here.](https://editor.p5js.org/KevinWorkman/sketches/c8FJXtne2)

![light blue scribbled lines](/gallery/images/arc-scribbler-2.png)

<video width="95%" autoplay muted loop>
  <source src="/gallery/images/arc-scribbler-5.mp4" type="video/mp4">
</video>

![very twisty scribbled lines](/gallery/images/arc-scribbler-3.png)

<video width="95%" autoplay muted loop>
  <source src="/gallery/images/arc-scribbler-6.mp4" type="video/mp4">
</video>

![black and white scribbled lines](/gallery/images/arc-scribbler-4.png)


# Remix Ideas

- Modify the parameters at the top of the code to change the animation.
- Change the code so only red or blue lines are drawn.
- This was partially inspired by [Josh Millard's post about visualizing the EKG sequence](https://mastodon.art/@joshmillard@mastodon.social/109671513643945874). Mine doesn't actually visualize the EKG sequence, but yours could!
