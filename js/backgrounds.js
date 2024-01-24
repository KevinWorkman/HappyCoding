function setRandomP5Background() {
  function setupBackgroundSketch(sketch){
    const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
    canvas.id('background-sketch');
    canvas.parent('body');

    sketch.background('#fbfbfb');

    sketch.windowResized = function() {
      // Add extra height because mobile browsers move the bg when scrolling up.
      sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight + 100, false);
    }
  }

  function circles(sketch) {
    sketch.setup = function() {
      setupBackgroundSketch(sketch);
      sketch.noStroke();
    }

    sketch.draw = function() {
      const min = 0;
      const max = 255;
      sketch.fill(sketch.random(min, max), sketch.random(min, max), sketch.random(min, max));
      sketch.circle(sketch.random(sketch.width), sketch.random(sketch.height), sketch.random(25));
    }
  }

  function randomWalker(sketch) {
    let x;
    let y;
    let r;
    let g;
    let b;

    sketch.setup = function() {
      setupBackgroundSketch(sketch);
      x = sketch.width / 2;
      y = sketch.height / 2;
      r = sketch.random(255);
      g = sketch.random(255);
      b = sketch.random(255);

    }

    sketch.draw = function() {
      const maxDistance = 100;
      let nextX = x + sketch.random(-maxDistance, maxDistance);
      let nextY = y + sketch.random(-maxDistance, maxDistance);
      nextX = sketch.constrain(nextX, 0, sketch.width);
      nextY = sketch.constrain(nextY, 0, sketch.height);

      const colorDistance = 10;
      r += sketch.random(-colorDistance, colorDistance);
      g += sketch.random(-colorDistance, colorDistance);
      b += sketch.random(-colorDistance, colorDistance);
      r = sketch.constrain(r, 0, 255);
      g = sketch.constrain(g, 0, 255);
      b = sketch.constrain(b, 0, 255);

      sketch.stroke(r, g, b);
      sketch.line(x, y, nextX, nextY);
      x = nextX;
      y = nextY;
    }
  }

  function verticalLines(sketch) {
    sketch.setup = function() {
      setupBackgroundSketch(sketch);
    }

    sketch.draw = function() {
      const min = 0;
      const max = 255;
      const x = sketch.random(sketch.width);
      sketch.stroke(sketch.random(min, max), sketch.random(min, max), sketch.random(min, max));
      sketch.line(x, 0, x, sketch.height);
    }
  }

  const backgrounds = [
    circles,
    randomWalker,
    verticalLines,
  ];

  const randomSketch = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  new p5(randomSketch);
}

setRandomP5Background();
