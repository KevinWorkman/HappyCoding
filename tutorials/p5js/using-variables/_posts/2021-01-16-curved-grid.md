---
layout: post
title: Curved Grid
thumbnail: /tutorials/p5js/using-variables/images/curved-grid-1.png
tagline: Draw a retro-futuristic curved grid.
sort-key: 200
meta-title: p5.js Example - Curved Grid
meta-description: Use the width and height variables to draw a retro-futuristic curved grid.
meta-image: /tutorials/p5js/using-variables/images/curved-grid-2.png
tags: [example, p5.js, javascript, using-variables]
includeP5jsWidget: true
previousPost: /tutorials/p5js/using-variables
redirect_from: /examples/p5js/using-variables/curved-grid
discourseEmbedUrl: /examples/p5js/using-variables/curved-grid
---

{% include youtube-embed.html slug="C_yAthKA6f4" %}

---

{% include p5js-widget.html width=400 height=400 %}
function setup() {
  createCanvas(400, 400);
  strokeWeight(3);
  stroke(0, 255, 0);
  noFill();
}

function draw() {
  background(32);

  // outline
  rect(1, 1, width-2, height-2);

  // lower-left
  line(0, 0, width * .1, height);
  line(0, height * .1, width * .2, height);
  line(0, height * .2, width * .3, height);
  line(0, height * .3, width * .4, height);
  line(0, height * .4, width * .5, height);
  line(0, height * .5, width * .6, height);
  line(0, height * .6, width * .7, height);
  line(0, height * .7, width * .8, height);
  line(0, height * .8, width * .9, height);
  line(0, height * .9, width, height);

  // upper-right
  line(width * .9, 0, width, height);
  line(width * .8, 0, width, height * .9);
  line(width * .7, 0, width, height * .8);
  line(width * .6, 0, width, height * .7);
  line(width * .5, 0, width, height * .6);
  line(width * .4, 0, width, height * .5);
  line(width * .3, 0, width, height * .4);
  line(width * .2, 0, width, height * .3);
  line(width * .1, 0, width, height * .2);
  line(0, 0, width, height * .1);  
}
</script>

This sketch uses the `width` and `height` variables to draw a retro-futuristic curved grid.

![curved grid](/tutorials/p5js/using-variables/images/curved-grid-3.png)
![red curved grid](/tutorials/p5js/using-variables/images/curved-grid-4.png)
![rainbow curved grid](/tutorials/p5js/using-variables/images/curved-grid-5.png)

# Remix Ideas

- Add colors to your lines.
- Add more lines. What would 20 lines look like?
- Add curved grids in all 4 corners.
- Draw two perpendicular lines that intersect in the middle of the screen. (It might look like a big plus sign.) Now draw a curved grid between all 4 quadrants!
