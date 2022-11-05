---
layout: tutorial
title: Triangle Inset
thumbnail: /tutorials/p5js/creating-variables/images/triangle-inset-1.png
tagline: Draw triangles inside triangles inside triangles.
sort-key: 300
meta-title: p5.js Example - Triangle Inset
meta-description: Draw triangles inside triangles inside triangles.
meta-image: /tutorials/p5js/creating-variables/images/triangle-inset-2.png
tags: [example, p5.js, javascript, input]
includeP5jsWidget: true
previousPost: /tutorials/p5js/creating-variables
redirect_from: /examples/p5js/creating-variables/triangle-inset
discourseEmbedUrl: /examples/p5js/creating-variables/triangle-inset
---

<iframe width="560" height="315" style="max-width:100%;" src="https://www.youtube.com/embed/Opu8yVn5Qk0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

{% include p5js-widget.html width=300 height=300 %}
function setup() {
  createCanvas(300, 300);
  strokeWeight(2);

  frameRate(1);
}

function draw() {
  background(random(255), random(255), random(255));

  let pointOneX = width / 2;
  let pointOneY = 0;
  let pointTwoX = 0;
  let pointTwoY = height;
  let pointThreeX = width;
  let pointThreeY = height;

  fill(random(255), random(255), random(255));
  triangle(pointOneX, pointOneY,
           pointTwoX, pointTwoY,
           pointThreeX, pointThreeY);

  let nextPointOneX = (pointOneX + pointTwoX) / 2;
  let nextPointOneY = (pointOneY + pointTwoY) / 2;
  let nextPointTwoX = (pointTwoX + pointThreeX) / 2;
  let nextPointTwoY = (pointTwoY + pointThreeY) / 2;
  let nextPointThreeX = (pointThreeX + pointOneX) / 2;
  let nextPointThreeY = (pointThreeY + pointOneY) / 2;

  fill(random(255), random(255), random(255));
  triangle(nextPointOneX, nextPointOneY,
           nextPointTwoX, nextPointTwoY,
           nextPointThreeX, nextPointThreeY);

  fill(255);
  circle(nextPointOneX, nextPointOneY, 10);
  circle(nextPointTwoX, nextPointTwoY, 10);
  circle(nextPointThreeX, nextPointThreeY, 10);

  pointOneX = nextPointOneX;
  pointOneY = nextPointOneY;
  pointTwoX = nextPointTwoX;
  pointTwoY = nextPointTwoY;
  pointThreeX = nextPointThreeX;
  pointThreeY = nextPointThreeY;

  nextPointOneX = (pointOneX + pointTwoX) / 2;
  nextPointOneY = (pointOneY + pointTwoY) / 2;
  nextPointTwoX = (pointTwoX + pointThreeX) / 2;
  nextPointTwoY = (pointTwoY + pointThreeY) / 2;
  nextPointThreeX = (pointThreeX + pointOneX) / 2;
  nextPointThreeY = (pointThreeY + pointOneY) / 2;

  fill(random(255), random(255), random(255));
  triangle(nextPointOneX, nextPointOneY,
           nextPointTwoX, nextPointTwoY,
           nextPointThreeX, nextPointThreeY);

  fill(255);
  circle(nextPointOneX, nextPointOneY, 10);
  circle(nextPointTwoX, nextPointTwoY, 10);
  circle(nextPointThreeX, nextPointThreeY, 10);

  pointOneX = nextPointOneX;
  pointOneY = nextPointOneY;
  pointTwoX = nextPointTwoX;
  pointTwoY = nextPointTwoY;
  pointThreeX = nextPointThreeX;
  pointThreeY = nextPointThreeY;

  nextPointOneX = (pointOneX + pointTwoX) / 2;
  nextPointOneY = (pointOneY + pointTwoY) / 2;
  nextPointTwoX = (pointTwoX + pointThreeX) / 2;
  nextPointTwoY = (pointTwoY + pointThreeY) / 2;
  nextPointThreeX = (pointThreeX + pointOneX) / 2;
  nextPointThreeY = (pointThreeY + pointOneY) / 2;

  fill(random(255), random(255), random(255));
  triangle(nextPointOneX, nextPointOneY,
           nextPointTwoX, nextPointTwoY,
           nextPointThreeX, nextPointThreeY);

  fill(255);
  circle(nextPointOneX, nextPointOneY, 10);
  circle(nextPointTwoX, nextPointTwoY, 10);
  circle(nextPointThreeX, nextPointThreeY, 10);

  pointOneX = nextPointOneX;
  pointOneY = nextPointOneY;
  pointTwoX = nextPointTwoX;
  pointTwoY = nextPointTwoY;
  pointThreeX = nextPointThreeX;
  pointThreeY = nextPointThreeY;

  nextPointOneX = (pointOneX + pointTwoX) / 2;
  nextPointOneY = (pointOneY + pointTwoY) / 2;
  nextPointTwoX = (pointTwoX + pointThreeX) / 2;
  nextPointTwoY = (pointTwoY + pointThreeY) / 2;
  nextPointThreeX = (pointThreeX + pointOneX) / 2;
  nextPointThreeY = (pointThreeY + pointOneY) / 2;

  fill(random(255), random(255), random(255));
  triangle(nextPointOneX, nextPointOneY,
           nextPointTwoX, nextPointTwoY,
           nextPointThreeX, nextPointThreeY);

  fill(255);
  circle(nextPointOneX, nextPointOneY, 10);
  circle(nextPointTwoX, nextPointTwoY, 10);
  circle(nextPointThreeX, nextPointThreeY, 10);
}
</script>

This sketch draws a triangle inside a triangle inside a triangle inside a triangle inside a triangle.

![mouse ripple](/tutorials/p5js/creating-variables/images/triangle-inset-3.png)

# Remix Ideas

- Try alternating shapes: draw a square inside a triangle inside a circle.
- Give each individual section of each triangle a different color (3 sections per triangle).
- Instead of using the midpoint of each line, try moving the next point closer to one of the previous points.
