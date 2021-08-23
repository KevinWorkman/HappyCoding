---
layout: tutorial
title: Random Synthesizer
slug: random-synthesizer
thumbnail: /examples/processing/libraries/images/random-synthesizer-1.png
tagline: Use the Minim library to play random synthesizer notes.
meta-title: Random Synthesizer
meta-description: Use the Minim library to play random synthesizer notes.
meta-image: /examples/processing/libraries/images/random-synthesizer-2.png
tags: [example, processing, library]
sort-key: 1420
---

This code uses the [Minim](http://code.compartmental.net/tools/minim/) library, which makes it possible to play sounds from Processing.

Looking at [Minim's documentation](http://code.compartmental.net/minim/), I found the `AudioPlayer#playNote()` function, which allows playing of a note at a specific frequency.

Now that we have that function, we can feed it random values to create a random song.


```java
import ddf.minim.Minim;
import ddf.minim.AudioOutput;

AudioOutput out;

void setup() {
  size(300, 100);

  Minim minim = new Minim(this);
  out = minim.getLineOut();

  frameRate(4);
}

void draw() {

  float note = random(1000);

  out.playNote(note);

  stroke(random(256), random(256), random(256));
  line(width*note/1000, 0, width*note/1000, height);
}
```

The result is a random "song" that sounds like this:

<audio controls>
	<source src="/examples/processing/libraries/data/random-synthesizer.mp3" type="audio/mpeg">
</audio>

Oh and then just for fun, I'm drawing a randomly colored line with an X value based on the frequency of the note.

![lines](/examples/processing/libraries/images/random-synthesizer-3.png)

## Tweak Ideas

- Make it so the notes speed up over time.
- Move the random note playing into the `keyPressed()` function to turn your keyboard into a synthesizer. Or play a note when the user clicks, based on the mouse position.
- Instead of playing random notes, create an "audio random walker" that plays notes based on a value that you change over time.
- Use the `noise()` function instead of playing random notes.
