---
layout: tutorial
title: Flower Grid
thumbnail: /tutorials/p5js/for-loops/images/flower-grid-1.png
tagline: Draw a grid of random flowers.
sort-key: 740
meta-title: p5.js Example - Flower Grid
meta-description: Draw a grid of random flowers.
meta-image: /tutorials/p5js/for-loops/images/flower-grid-1.png
tags: [example, p5.js, javascript, for-loops, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/for-loops
redirect_from: /examples/p5js/for-loops/flower-grid
discourseEmbedUrl: /examples/p5js/for-loops/flower-grid
---

{% include youtube-embed.html slug="Bpi_O-VhuCw" %}

---

{% include p5js-widget.html width=400 height=400 %}
function setup() {
  createCanvas(400, 400);
  noLoop();
  strokeWeight(2);
}

function draw() {
  background(0, 255, 100);

  const columns = 10;
  const rows = 10;
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const x = c * cellWidth + cellWidth / 2;
      const y = r * cellHeight + cellHeight / 2;

      drawFlower(x, y, min(cellWidth, cellHeight));
    }
  }
}

function drawFlower(x, y, size) {
  const flowerSize = random(size * .5, size * .95);
  const petalSize = flowerSize / 2;
  const spacing = petalSize / 2;

  fill(random(255), random(255), random(255));
  circle(x - spacing, y - spacing, petalSize);
  circle(x + spacing, y - spacing, petalSize);
  circle(x - spacing, y + spacing, petalSize);
  circle(x + spacing, y + spacing, petalSize);

  fill(random(255), random(255), random(255));
  circle(x, y, petalSize);
}
</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/mfHrynber)

This sketch uses a nested `for` loop to draw a grid of random flowers.

I created this for the 25th day of [Genuary](https://genuary2021.github.io/) which had a prompt of "Make a grid of permutations of something."

![flower grid](/tutorials/p5js/for-loops/images/flower-grid-2.png)

# Remix Ideas

- Make your flowers more realistic, or limit them to random shades of red, orange, or other interesting colors.
- Add vines to the background of your flower grid.
- Create a grid of random drawings of something else. Try a random smiley face, or a random pattern.
