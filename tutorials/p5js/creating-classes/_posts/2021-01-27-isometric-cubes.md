---
layout: tutorial
title: Isometric Cubes
thumbnail: /tutorials/p5js/creating-classes/images/isometric-cubes-1.png
tagline: Create an isometric grid of cubes.
sort-key: 1050
meta-title: p5.js Example - Recursive Lines
meta-description: Draw lines that draw other lines.
meta-image: /tutorials/p5js/creating-classes/images/recursive-lines-1.png
tags: [example, p5.js, javascript, creating-classes, trigonometry, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/creating-classes
redirect_from: /tutorials/p5js/creating-classes/isometric-cubes
discourseEmbedUrl: /tutorials/p5js/creating-classes/isometric-cubes
---

{% include youtube-embed.html slug="oqgrKWAo24M" %}

---

{% include p5js-widget.html width=400 height=400 %}
let gridTopX;
let gridTopY;
const sideLength = 25;

const cubes = [];

function setup() {
  createCanvas(400, 400);
  gridTopX = width / 2;
  gridTopY = height / 2;

  strokeWeight(2);

  cubes.push(new Cube(0, 0, 0));

  while (cubes.length < 50) {
    addRandomCube();
  }

  // Sort so the cubes are drawn in the right order
  cubes.sort((a, b) => {
    return a.getSortString().localeCompare(b.getSortString());
  });
}

function keyPressed() {
  if (cubes.length > 1) {
    rCube = cubes.pop();
  }
}

function draw() {
  background(120);

  for (const cube of cubes) {
    cube.draw();
  }
}

function addRandomCube() {

  let cubeAdded = false;

  while (!cubeAdded) {
    const randomCube = random(cubes);

    let newCubeC = randomCube.c;
    let newCubeR = randomCube.r;
    let newCubeZ = randomCube.z;

    const r = random(1);
    if (r < .3) {
      newCubeC++;
    } else if (r < .6) {
      newCubeR++;
    } else {
      newCubeZ++;
    }

    const spotTaken = cubes.some((cube) => {
      return cube.c == newCubeC &&
        cube.r == newCubeR &&
        cube.z == newCubeZ;
    });

    if (!spotTaken) {
      cubes.push(new Cube(newCubeC, newCubeR, newCubeZ));
      cubeAdded = true;
    }
  }
}

class Cube {

  constructor(c, r, z) {
    this.c = c;
    this.r = r;
    this.z = z;
    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }

  draw() {
    const x = gridTopX + (this.c - this.r) * sideLength *
      sqrt(3) / 2;
    const y = gridTopY + (this.c + this.r) * sideLength / 2 -
      (sideLength * this.z);

    const points = [];
    for (let angle = PI / 6; angle < PI * 2; angle += PI / 3) {
      points.push(
        createVector(x + cos(angle) * sideLength,
          y + sin(angle) * sideLength));
    }

    fill(this.red * .75, this.green * .75, this.blue * .75);
    quad(x, y,
      points[5].x, points[5].y,
      points[0].x, points[0].y,
      points[1].x, points[1].y);

    fill(this.red * .9, this.green * .9, this.blue * .9);
    quad(x, y,
      points[1].x, points[1].y,
      points[2].x, points[2].y,
      points[3].x, points[3].y);

    fill(this.red, this.green, this.blue);
    quad(x, y,
      points[3].x, points[3].y,
      points[4].x, points[4].y,
      points[5].x, points[5].y);
  }

  getSortString() {
    return this.z + '.' + this.r + '.' + this.c;
  }
}
</script>

[Click here to view this code in the p5 editor.](https://editor.p5js.org/KevinWorkman/sketches/sgLdEoU51)

This sketch shows a structure of cubes laid out in an [isometric](https://en.wikipedia.org/wiki/Isometric_projection) grid. I created this for the 26th day of [Genuary](https://genuary2021.github.io/) which had a prompt of "2D Perspective."

While coding this, I found these two pages really helpful: [Isometric Tiles Math](http://clintbellanger.net/articles/isometric_math/) and [Understanding isometric grids](https://yal.cc/understanding-isometric-grids/).

![isometric cubes](/tutorials/p5js/creating-classes/images/isometric-cubes-2.png)
![isometric cubes](/tutorials/p5js/creating-classes/images/isometric-cubes-4.png)
![isometric cubes](/tutorials/p5js/creating-classes/images/isometric-cubes-5.png)
![isometric cubes](/tutorials/p5js/creating-classes/images/isometric-cubes-6.png)

# Remix Ideas

- Make your cubes different sizes.
- Try different shapes. Can you create an isometric pyramid?
- Create a sketch that looks like [M. C. Escher's Waterfall](https://en.wikipedia.org/wiki/Waterfall_(M._C._Escher)) or [Penrose stairs](https://en.wikipedia.org/wiki/Penrose_stairs).
