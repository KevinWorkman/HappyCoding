---
layout: tutorial
title: Wrong Lines
thumbnail: /tutorials/p5js/for-loops/images/wrong-lines-1.png
tagline: Draw lines the wrong way.
sort-key: 720
meta-title: p5.js Example - Wrong Lines
meta-description: Draw lines the wrong way.
meta-image: /tutorials/p5js/for-loops/images/wrong-lines-1.png
tags: [example, p5.js, javascript, for-loops, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/for-loops
redirect_from: /tutorials/p5js/for-loops/wrong-lines
discourseEmbedUrl: /tutorials/p5js/for-loops/wrong-lines
---

{% include youtube-embed.html slug="lNKFhaOQJys" %}

---

{% include p5js-widget.html width=300 height=400 %}
const margin = 25;

function setup() {
  createCanvas(300, 400);
  noLoop();
  strokeWeight(2);
}

function draw() {
  background(32);
  stroke(255);

  noFill();
  rect(margin, margin, width - margin * 2, height - margin * 2);

  for (let y = margin*2; y < height - margin * 2; y += 25) {
    drawLine(y);
  }

}

function drawLine(lineY) {
  const range = map(lineY, margin * 2, height - margin * 2, 0, 50);

  let prevX = margin * 2;
  let prevY = lineY;
  const lineSpacing = 10;

  for (let x = prevX + lineSpacing; x <= width - margin * 2; x += lineSpacing) {

    const y = lineY + random(-range, range);
    line(prevX, prevY, x, y);

    prevX = x;
    prevY = y;
  }
}
</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/O4Hm1Apln)

This sketch uses a `for` loop to draw lines that get progressively messier.

I created this for the 22nd day of [Genuary](https://genuary2021.github.io/) which had a prompt of "Draw a line. Wrong answers only."

![wrong lines](/tutorials/p5js/for-loops/images/wrong-lines-2.png)
![wrong lines](/tutorials/p5js/for-loops/images/wrong-lines-3.png)
![wrong lines](/tutorials/p5js/for-loops/images/wrong-lines-4.png)

# Remix Ideas

- Give each line a random color, or make the lines progressively darker.
- Add more lines over time.
- Base the randomness off the x coordinate instead of the y coordinate.
