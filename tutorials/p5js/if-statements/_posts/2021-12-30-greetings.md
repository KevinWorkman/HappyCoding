---
layout: tutorial
title: Daily Greetings
thumbnail: /examples/p5js/if-statements/images/greetings-1.png
tagline: Show a different message based on the time of day.
sort-key: 800
meta-title: Daily Greetings - p5.js Example
meta-description: Show a different message based on the time of day.
meta-image: /examples/p5js/if-statements/images/greetings-1.png
tags: [example, p5.js, javascript, if-statements]
includeP5jsWidget: true
previousPost: /tutorials/p5js/if-statements
redirect_from: /examples/p5js/if-statements/greetings
discourseEmbedUrl: /examples/p5js/if-statements/greetings
---

{% include youtube-embed.html slug="050lEjbygfU" %}

---

This sketch shows a different message depending on the time of day.

{% include p5js-widget.html width=400 height=400 %}
function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  noStroke();
}

function draw() {
  if (hour() < 5) {
    drawLateNight();
  } else if (hour() < 12) {
    drawMorning();
  } else if (hour() < 16) {
    drawAfternoon();
  } else {
    drawEvening();
  }

  let formattedHour = hour();
  if (hour() == 0) {
    formattedHour = 12;
  } else if (hour() > 12) {
    formattedHour = hour() - 12;
  }

  const formattedMinute = nf(minute(), 2);

  text(formattedHour + ":" + formattedMinute,
       width * 0.5, height * 0.25);
}

function drawLateNight() {
  background(32);
  fill(255);
  drawTimeMessage("Go to sleep!", "😴");
}

function drawMorning() {
  background(0, 100, 255);
  fill(255);
  drawTimeMessage("Good morning!", "🌄");
}

function drawAfternoon() {
  background(255, 255, 0);
  fill(0);
  drawTimeMessage("Good afternoon!", "🏃‍♂️");
}

function drawEvening() {
  background(0, 0, 100);
  fill(255);
  drawTimeMessage("Good evening!", "🌃");
}

function drawTimeMessage(message, emoji) {
  textSize(36);
  text(message, width * 0.5, height * 0.5);
  textSize(72);
  text(emoji, width * 0.5, height * 0.75);
}
</script>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/P7xk0ucIp)

![good morning](/examples/p5js/if-statements/images/greetings-2.png)
![good afternoon](/examples/p5js/if-statements/images/greetings-3.png)
![good evening](/examples/p5js/if-statements/images/greetings-4.png)
![go to bed](/examples/p5js/if-statements/images/greetings-5.png)

# Remix Ideas

- Change the messages and emojis that show throughout the day.
- Add different times of day, or activites that always happen around the same time.
- Show messages at specific times, like 11:11 or 1:23
