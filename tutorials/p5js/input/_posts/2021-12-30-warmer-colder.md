---
layout: post
title: Warmer / Colder
thumbnail: /tutorials/p5js/input/images/warmer-colder-1.png
tagline: Play a game of warmer / colder with your computer.
sort-key: 640
meta-title: Warmer / Colder - p5.js Example
meta-description: Play a game of warmer / colder with your computer.
meta-image: /tutorials/p5js/input/images/warmer-colder-1.png
tags: [example, p5.js, javascript, input]
includeP5jsWidget: true
previousPost: /tutorials/p5js/input
redirect_from: /examples/p5js/input/warmer-colder
discourseEmbedUrl: /examples/p5js/images/warmer-colder
---

This sketch hides a circle, and tells you whether your mouse is getting warmer (closer) or colder (further away).

{% include p5js-widget.html width=400 height=400 %}
let previousDistance = 100000;
let findX;
let findY;

let found = false;

let message;

function setup() {
  createCanvas(400, 400);
  ellipseMode(CENTER);
  ellipseMode(RADIUS);
  textAlign(CENTER);
  textSize(24);
  noStroke();

  findX = random(50, width - 50);
  findY = random(50, height - 50);
}

function draw() {
  background(32);

  if(mouseX == 0 || mouseY == 0){
    fill(255);
    message = "Move your mouse to find the thing.";
  } else if (found) {
    fill(255);
    circle(findX, findY, 25);

    fill(0, 255, 0);
    message = 'Found! Refresh to play again.';
  } else {
    const distance = dist(mouseX, mouseY, findX, findY);

    if (distance < 25) {
      found = true;
    }

    if (distance > previousDistance) {
      fill(0, 255, 255);
      message = "Colder...";

      if (distance > 200) {
        message += " Very cold!";
      }
    } else if (distance < previousDistance) {
      fill(255, 0, 0);
      message = "Warmer...";

      if (distance < 100) {
        message += " Very warm!";
      }
    }
    previousDistance = distance;
  }

  text(message, width/2, 100);
}
</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/mwsAr97nU)

# Remix Ideas

- Add other hints like "move left" or "move right"
- Show a trail of red or blue dots based on whether the user was warmer or colder
- Move the shape over time
