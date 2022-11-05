---
layout: tutorial
title: Numbers Station
thumbnail: /tutorials/p5js/using-objects/images/numbers-station-1.png
tagline: Use text-to-speech to create a numbers station.
sort-key: 920
meta-title: p5.js Example - Numbers Station
meta-description: Use text-to-speech to create a numbers station.
meta-image: /tutorials/p5js/using-objects/images/numbers-station-1.png
tags: [example, p5.js, javascript, oop]
includeP5jsWidget: true
previousPost: /tutorials/p5js/using-objects
redirect_from: /examples/p5js/using-objects/numbers-station
discourseEmbedUrl: /examples/p5js/using-objects/numbers-station
---

This sketch uses the [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) class to say random words and numbers, just like a real-life [numbers station](https://en.wikipedia.org/wiki/Numbers_station).

{% include p5js-widget.html width=400 height=400 %}
const utterance = new SpeechSynthesisUtterance();

// Speak the next word when the current word ends.
utterance.onend = nextWord;

// When voices finish loading, pick a random voice.
window.speechSynthesis.onvoiceschanged = function() {
  const voices = window.speechSynthesis.getVoices();
  utterance.voice = voices[Math.floor(Math.random() * voices.length)];
  nextWord();
};

// NATO alphabet
const words = [
'Alfa', 'Bravo', 'Charlie', 'Delta',
'Echo', 'Foxtrot', 'Golf', 'Hotel',
'India', 'Juliett', 'Kilo', 'Lima',
'Mike', 'November', 'Oscar', 'Papa',
'Quebec', 'Romeo', 'Sierra', 'Tango',
'Uniform', 'Victor', 'Whiskey', 'X-ray',
'Yankee', 'Zulu'];

// Numbers 0 - 100
for (let i = 0; i <= 100; i++) {
  words.push(i);
}

// The current word being spoken.
let word;

function setup() {
  createCanvas(400, 400);

  stroke(255);
  fill(255);
  textSize(72);
  textAlign(CENTER, CENTER);

  nextWord();
}

/** Say the next word */
function nextWord() {
  word = words[Math.floor(Math.random() * words.length)]; //random(words);
  utterance.text = word;
  window.speechSynthesis.speak(utterance);
}

/** Draw the current word. */
function draw(){
  background(50);
  text(word, width / 2, height / 2);
}
</script>

# Remix Ideas

- Use the p5.sound library to play random tones.
- Set the variables in the [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) object to give each word a random pitch, rate, and volume.
- Add random words from other sources. Try the script from your favorite movie, or a public domain book. Do you notice any patterns in the randomness?
