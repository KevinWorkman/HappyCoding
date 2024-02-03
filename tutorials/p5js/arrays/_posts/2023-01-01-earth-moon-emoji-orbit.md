---
layout: post
title: Earth Moon Emoji Orbit
thumbnail: /tutorials/p5js/arrays/images/earth-moon-emoji-orbit-1.png
tagline: Use arrays of emojis to show the moon orbiting the earth.
sort-key: 850
meta-title: Earth Moon Emoji Orbit - p5.js Tutorial
meta-description: Use arrays of emojis to show the moon orbiting the earth.
meta-image: /tutorials/p5js/arrays/images/earth-moon-emoji-orbit-1.png
tags: [example, p5.js, javascript, arrays, genuary]
includeP5jsWidget: true
previousPost: /tutorials/p5js/arrays
---

{% include youtube-embed.html slug="ZfFtXzzTwP8" %}

---

I created this for the first day of [Genuary 2023](https://genuary.art/) which had a prompt of "Perfect loop / Infinite loop / endless GIFs".

This sketch uses `cos()` and `sin()` to show the moon orbiting the earth. It also uses arrays of emojis to animate the earth and moon rotating.

[Edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/_A9FF9Ujq)

{% include p5js-widget.html width=400 height=400 %}
let earthSize = 150;
let moonSize = 75;

let angle = 0;
let distance = 150;

let moons = ['🌕','🌖', '🌗', '🌘', '🌑', '🌒', '🌓', '🌔'];
let moonIndex = 0;

let earths = ['🌎', '🌍', '🌏'];
let earthIndex = 0;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(32);

  angle++;

  if(angle % 45 == 0){
    moonIndex++;
    if (moonIndex >= moons.length) {
      moonIndex = 0;
    }
  }

  if(angle % 120 == 0){
    earthIndex++;
    if (earthIndex >= earths.length) {
      earthIndex = 0;
    }
  }

  let moonX = width / 2 + cos(radians(angle)) * distance;
  let moonY = height / 2 + sin(radians(angle)) * distance;

  textSize(earthSize);
  text(earths[earthIndex], width / 2, height / 2);

  textSize(moonSize);
  text(moons[moonIndex], moonX, moonY);  
}
</script>

[Edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/_A9FF9Ujq)

![emoji moon orbiting emoji earth](/tutorials/p5js/arrays/images/earth-moon-emoji-orbit-2.gif)

# Remix Ideas

- Make the earth orbit the sun. 🌞
- Add stars ⭐🌟✨
- Add rockets, satellites, or aliens! 🚀🛰️☄️👽👾🌌🪐
