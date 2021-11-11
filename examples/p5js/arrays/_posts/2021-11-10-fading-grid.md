---
layout: tutorial
title: Fading Grid
thumbnail: /examples/p5js/arrays/images/fading-grid-1.png
tagline: Use a 2D array to show a fading grid.
sort-key: 830
meta-title: Fading Grid - p5.js 2D Array Example
meta-description: Use a 2D array to show a fading grid.
meta-image: /examples/p5js/arrays/images/fading-grid-1.png
tags: [example, p5.js, javascript, arrays]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

This sketch uses a 2D array to hold values, and decreases changes those values to show a fading grid of cells.

{% include youtube-embed.html slug="06HMnogJyGw" %}

---

{% include p5js-widget.html width=400 height=400 %}
const rows = 10;
const columns = 10;
const fadeSpeed = 1;
let cells = [];

function setup() {
  createCanvas(400, 400);

  for (let r = 0; r < rows; r++) {
    cells[r] = [];
    for (let c = 0; c < columns; c++) {
      cells[r][c] = random(255);
    }
  }
}

function draw() {
  const cellWidth = width / columns;
  const cellHeight = height / rows;

  if (mouseX > 0 && mouseX < width &&
      mouseY > 0 && mouseY < height) {
    const mouseR = floor(rows * (mouseY / height));
    const mouseC = floor(columns * (mouseX / width));
    cells[mouseR][mouseC] = 255;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      cells[r][c] -= fadeSpeed;
      cells[r][c] = constrain(cells[r][c], 0, 255);

      const y = height * (r / rows);
      const x = width * (c / columns);

      fill(cells[r][c], 0, 128);
      rect(x, y, cellWidth, height);
    }
  }
}
</script>

[Edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/yoCVXKFre)

![fading grid](/examples/p5js/arrays/images/fading-grid-2.gif)

# Remix Ideas

- Change the number of cells, or their colors.
- Give each cell a random color.
- Instead of resetting a cell when the user moves their mouse, reset a random cell every frame.

