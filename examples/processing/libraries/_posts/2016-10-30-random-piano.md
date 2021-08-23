---
layout: tutorial
title: Random Piano
slug: random-piano
thumbnail: /examples/processing/libraries/images/random-piano-1.png
tagline: Use the Minim library to play random piano notes.
meta-title: Random Piano
meta-description: Use the Minim library to play random piano notes.
meta-image: /examples/processing/libraries/images/random-piano-2.png
tags: [example, processing, library]
sort-key: 1410
---

This code uses the [Minim](http://code.compartmental.net/tools/minim/) library, which makes it possible to play sounds from Processing.

First I downloaded a bunch of piano notes from [freesound.org](http://www.freesound.org/), and I added them to my sketch as files named `0.mp3`, `1.mp3`, `2.mp3`, etc.

Then I looked at [Minim's documentation](http://code.compartmental.net/minim/) to find the code that would load and play the sound files.

```java
import ddf.minim.Minim;
import ddf.minim.AudioPlayer;

Minim minim;
AudioPlayer[] notes = new AudioPlayer[73];

void setup()
{
  minim = new Minim(this);

  for (int i = 0; i < notes.length; i++) {
    notes[i] = minim.loadFile("notes/" + i + ".mp3");
  }
  
  frameRate(2);
}


void draw(){
  
  background(0);

  int i = int(random(notes.length));
  notes[i].rewind();
  notes[i].play();
}
```

I load the sound files into an array, and then I play a random note two times per second. The result is a random "song" that sounds like this:

<audio controls>
	<source src="/examples/processing/libraries/data/piano.mp3" type="audio/mpeg">
</audio>

The sketch, including the sound files, can be downloaded [here](/examples/processing/libraries/data/RandomPiano.zip).

## Tweak Ideas

- Make it so the notes speed up over time.
- Move the random note playing into the `keyPressed()` function to turn your keyboard into a piano.
- Rearrange the sound files from low pitched to high pitched.
