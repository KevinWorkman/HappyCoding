---
layout: post
title: Vera Molnár Squares
thumbnail: /tutorials/p5js/for-loops/images/vera-molnar-squares-1.png
tagline: Code a design inspired by Vera Molnár.
sort-key: 820
meta-title: Vera Molnár Squares - p5.js Code Along
meta-description: Code a design inspired by Vera Molnár.
meta-image: /tutorials/p5js/for-loops/images/vera-molnar-squares-1.png
tags: [example, p5.js, javascript, for-loops, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/for-loops
forumExcerpt: For genuary, I created a p5.js sketch that draws squares in the style of Vera Molnár.
---

{% include youtube-embed.html slug="kjB_3pWmTR8" %}

---

{% include youtube-embed.html slug="eykSzznPimQ " %}

---

[Genuary](https://genuary.art/) is an event that provides a different prompt every day through January, and creative coders make generative art based on the prompt each day. This year, Genuary 6th's prompt was *"In the style of Vera Molnár"*.

[Vera Molnár](https://en.wikipedia.org/wiki/Vera_Moln%C3%A1r) was an early digital artist, and she created [really interesting artwork](https://duckduckgo.com/?t=ffab&q=Vera+Moln%C3%A1r+&iax=images&ia=images) back before creative coding was really a thing!

This sketch creates a design similar to some of her artwork, by randomly drawing squares in a grid.

{% include p5js-widget.html width=400 height=400 %}
const columns = 5;
const rows = 5;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(400, 400);

  cellWidth = width / columns;
  cellHeight = height / rows;

  noFill();
  background(32);
  stroke(255);

  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const cellX = c * cellWidth;
      const cellY = r * cellHeight;

      drawCell(cellX, cellY);
    }
  }
}

function draw() {
  const c = int(random(columns));
  const r = int(random(rows));

  const cellX = c * cellWidth;
  const cellY = r * cellHeight;

  drawCell(cellX, cellY);
}

function drawCell(x, y) {

  noStroke();
  fill(32);
  rect(x, y, cellWidth, cellHeight);

  noFill();

  const squareCount = 10;
  const randomOffset = 5;

  for (let i = 1; i <= squareCount; i++) {
    const layerOffset = 5 * i;

    const xOne = x + layerOffset + random(-randomOffset, randomOffset);
    const yOne = y + layerOffset + random(-randomOffset, randomOffset);

    const xTwo =
      x + cellWidth - layerOffset + random(-randomOffset, randomOffset);
    const yTwo = y + layerOffset + random(-randomOffset, randomOffset);

    const xThree =
      x + cellWidth - layerOffset + random(-randomOffset, randomOffset);
    const yThree =
      y + cellHeight - layerOffset + random(-randomOffset, randomOffset);

    const xFour = x + layerOffset + random(-randomOffset, randomOffset);
    const yFour =
      y + cellHeight - layerOffset + random(-randomOffset, randomOffset);

    stroke(random(256), random(256), random(256));

    quad(xOne, yOne, xTwo, yTwo, xThree, yThree, xFour, yFour);
  }
}

</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/rFB4KF6e0)

![Randomly colored squares](/tutorials/p5js/for-loops/images/vera-molnar-squares-2.png)
![Blue and green squares](/tutorials/p5js/for-loops/images/vera-molnar-squares-3.png)
![Grayscale squares](/tutorials/p5js/for-loops/images/vera-molnar-squares-4.png)
![Animation of randomly colored squares appearing in a grid](/tutorials/p5js/for-loops/images/vera-molnar-squares-5.gif)

# Remix Ideas

- Change the number of squares, or play with different colors.
- Draw different shapes, like circles or polygons.
- Check out other [art by Vera Molnár](https://duckduckgo.com/?t=ffab&q=Vera+Moln%C3%A1r+&iax=images&ia=images) for inspiration!
