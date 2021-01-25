---
layout: tutorial
title: Vertical Gradient
thumbnail: /examples/p5js/for-loops/images/vertical-gradient-1.png
tagline: Draw a gradient from one color to another.
sort-key: 200
meta-title: p5.js Example - Vertical Gradient
meta-description: Draw a gradient from one color to another.
meta-image: /examples/p5js/for-loops/images/wrong-lines-1.png
tags: [example, p5.js, javascript, for-loops, genuary]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include youtube-embed.html slug="DJgDW3F68Xc" %}

---

{% include p5js-widget.html width=300 height=500 %}
function setup() {
  createCanvas(300, 500);
  noSmooth();
}

function draw() {
  const m = 100;
  
  const topR = 255 * noise(frameCount / m);
  const topG = 255 * noise(1000 + frameCount / m);
  const topB = 255 * noise(2000 + frameCount / m);
  const bottomR = 255 * noise(3000 + frameCount / m);
  const bottomG = 255 * noise(4000  + frameCount / m);
  const bottomB = 255 * noise(5000 + frameCount / m);

  const topColor = color(topR, topG, topB);
  const bottomColor = color(bottomR, bottomG, bottomB);
  
  for(let y = 0; y < height; y++) {
    const lineColor = lerpColor(topColor, bottomColor, y / height);

    stroke(lineColor);
    line(0, y, width, y);
  }
}
</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/OdeY6jRpI)

This sketch uses a `for` loop to draw a vertical gradient.

I created this for the 24th day of [Genuary](https://genuary2021.github.io/) which had a prompt of "500 lines."

![vertical gradient](/examples/p5js/for-loops/images/vertical-gradient-2.png)
![vertical gradient](/examples/p5js/for-loops/images/vertical-gradient-3.png)
![vertical gradient](/examples/p5js/for-loops/images/vertical-gradient-4.png)
![vertical gradient](/examples/p5js/for-loops/images/vertical-gradient-5.png)

# Remix Ideas

- Add a third color in the middle, and make the gradient go from the top color, through the middle color, to the bottom color.
- Create a gradient by giving each corner of the canvas a color. In other words, define 4 colors instead of 2 colors. After you get that working, can you add a 5th color in the middle of the canvas?
- Base the gradient off the current time. Show a sunrise in the morning, blue during the day, sunset in the evening, and black at night.