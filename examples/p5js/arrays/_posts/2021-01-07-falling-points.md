---
layout: tutorial
title: Falling Points
thumbnail: /examples/p5js/arrays/images/falling-points-2.png
tagline: Show falling points that look like snow.
sort-key: 810
meta-title: p5.js Example - Falling Points
meta-description: Use arrays to show falling points that look like snow.
meta-image: /examples/p5js/arrays/images/falling-points-3.png
tags: [example, p5.js, javascript, input]
includeP5jsWidget: true
previousPost: /examples/p5js/
---

{% include p5js-widget.html width=300 height=300 %}
const drops = [];

function setup() {
  createCanvas(300, 300);
  for(let x = 0; x < width; x++) {
    drops[x] = random(height);
  }
  
  stroke(255);
}

function draw() {
  background(32);
  
  for(let x = 0; x < drops.length; x++) {
    drops[x] += random(5);
    if(drops[x] > height){
      drops[x] = 0;
    }
    
    point(x, drops[x]);
  }
}
</script>

This sketch uses an array that holds a Y value for every X value across the width of the canvas. It adds a random number to each Y value so that the points fall at different speeds.

![falling points](/examples/p5js/arrays/images/falling-points-1.png)

# Remix Ideas

- Make all the points move at the same speed.
- Make all the points move horizontally as well as vertically.
- Make a more realistic simulation of rain or snow.

