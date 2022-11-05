---
layout: tutorial
title: Year Percent
thumbnail: /tutorials/p5js/using-objects/images/year-percent-1.png
tagline: How far into the year are we?
sort-key: 910
meta-title: p5.js Example - Year Percent
meta-description: How far into the year are we?
meta-image: /tutorials/p5js/using-objects/images/year-percent-1.png
tags: [example, p5.js, javascript, oop]
includeP5jsWidget: true
previousPost: /tutorials/p5js/using-objects
redirect_from: /tutorials/p5js/using-objects/year-percent
discourseEmbedUrl: /tutorials/p5js/using-objects/year-percent
---

This sketch shows what percent we are through the year.

{% include p5js-widget.html width=400 height=400 %}
function setup() {
  createCanvas(400, 400);
  stroke(255);
  fill(255);
  textAlign(CENTER, CENTER);
}

function draw() {
  const now = new Date();

  const yearStart = new Date(now.getFullYear(), 0, 1);

  const yearEnd = new Date(now.getFullYear() + 1, 0, 1);

  const totalDuration = yearEnd.getTime() - yearStart.getTime();
  const currentDuration = now.getTime() - yearStart.getTime();

  const percent = (currentDuration / totalDuration) * 100;
  const formattedPercent = nf(percent, 3, 6) + '%';

  background(50);

  textSize(24);
  text('We are now', width / 2, height * .25);

  textSize(48);
  text(formattedPercent, width / 2, height / 2);

  textSize(24);
  text('through the year!', width / 2, height * .75);
}
</script>

The code uses the [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) class to get the start of the year, the end of the year, the current time, and then uses those to calculate the percentage.

# Remix Ideas

- Display the year as a loading bar.
- Show a countdown to an upcoming event.
