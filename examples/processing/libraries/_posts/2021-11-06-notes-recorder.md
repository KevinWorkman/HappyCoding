---
layout: tutorial
title: Notes Recorder
thumbnail: /examples/processing/libraries/images/random-synthesizer-1.png
tagline: Use Minim to play and record notes.
meta-title: Notes Recorder - Processing Example
meta-description: Use Minim to play and record notes.
meta-image: /examples/processing/libraries/images/random-synthesizer-2.png
tags: [example, processing, library, minim]
sort-key: 1420
---

This code uses the [Minim](http://code.compartmental.net/tools/minim/) library to play and record random notes.

I use this as the Happy Coding "theme song" that plays at the beginning of [Happy Coding videos](https://www.youtube.com/user/TheKevinWorkman)!

{% include youtube-embed.html slug="YYVARbW8iJ8" %}

```java
import ddf.minim.Minim;
import ddf.minim.AudioOutput;
import ddf.minim.AudioRecorder;

int bps = 6;
int maxNote = 500;
int deltaNote = 100;

int note = 0;
boolean playing = true;
int stoppedPlayingTime;

AudioOutput out;
AudioRecorder recorder;

void setup() {
  size(300, 100);

  Minim minim = new Minim(this);
  out = minim.getLineOut();
  recorder = minim.createRecorder(out, "notes.wav");

  frameRate(bps);

  recorder.beginRecord();
}

void draw() {
  if (playing) {
    // Move the note
    note += random(-deltaNote * .5, deltaNote);
    note = constrain(note, 0, maxNote);
    out.playNote(note);

    // Draw a line just for fun
    stroke(random(256), random(256), random(256));
    line(width * note / maxNote, 0, width * note / maxNote, height);

    // If the note gets too high, stop playing
    if (note >= maxNote) {
      playing = false;
      stoppedPlayingTime = millis();
    }
  }
  // Wait 1 second after stopping to record,
  // so the notes have time to fade out
  else if(millis() > stoppedPlayingTime + 1000){
    recorder.endRecord();
    recorder.save();
    println("Done!");
    noLoop();
  }
}

```

The result is a random "song" that sounds like this:

<audio controls>
  <source src="/examples/processing/libraries/data/random-synthesizer.mp3" type="audio/mpeg">
</audio>

This code builds on the [random synthesizer](/examples/processing/libraries/random-synthesizer) example, as well as [Minim's AudioRecorder example](http://code.compartmental.net/minim/audiorecorder_class_audiorecorder.html).

# Tweak Ideas

- Change the variables at the top to make different kinds of songs.
- Use Minim's `AudioInput` class to record your microphone.
- Make a theme song based on different emotions: what would a sad song sound like?
