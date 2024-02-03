---
layout: post
title: Processing Showcase
thumbnail: /tutorials/processing/images/processing-icon-small-1.png
tagline: Create a Java program that cycles through Processing sketches.
sort-key: 320
meta-title: Processing Showcase
meta-description: Create a Java program that cycles through Processing sketches.
meta-image: /tutorials/processing/images/processing-icon-large-1.png
tags: [example, java, processing, processing-in-java]
previousPost: /tutorials/java/processing-in-java
redirect_from: /examples/java/processing-showcase
discourseEmbedUrl: /examples/java/processing-showcase
---

If you have a bunch of Processing sketches and want to show them one after the other, you can use this Java program:

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import processing.core.PApplet;

public class ProcessingShowcase {

	public static void main(String[] args){

		List<PApplet> sketches = new ArrayList<>();
		sketches.add(new ProcessingSketchOne());
		sketches.add(new ProcessingSketchTwo());
		//add sketch classes here!


		//this is optional, but causes the sketches to appear in random order
		//copy this to where the index is reset to randomize whenever you loop
		Collections.shuffle(sketches);

		int currentSketchIndex = 0;

		while(true){

			//using a broad exception to just skip over any sketches that have problems
			try {
				PApplet sketch = sketches.get(currentSketchIndex);
				String[] processingArgs = {""};
				PApplet.runSketch(processingArgs, sketch);

				// this is useful after we've looped
				sketch.getSurface().resumeThread();

				//how long do you want each sketch to display for
				//60 seconds
				Thread.sleep(60*1000);

				// prevent sketches from continuing to run while they're hidden
				sketch.getSurface().pauseThread();

				//hide the sketch
				sketch.getSurface().setVisible(false);
			}
			catch (Exception e) {
				System.err.println("There was a problem running a sketch!");
				e.printStackTrace();
				System.err.println("Skipping to the next sketch.");
			}

			// move to the next sketch, loop back to the first after finishing
			currentSketchIndex++;
			if(currentSketchIndex >= sketches.size()){
				currentSketchIndex = 0;
			}

			//go back to the top of the while(true) loop
		}
	}
}
```

This code assumes that you have a bunch of classes that look like this:

```java
import processing.core.PApplet;

public class MySketch extends PApplet {

	public void settings() {
		size(500, 500);
	}

	public void draw(){
		background(64);
		ellipse(mouseX, mouseY, 20, 20);
	}
}
```

You can get these classes by [exporting as an application](/tutorials/processing/exporting-applications) in the Processing editor, or you can manually create them using [Processing as a Java library](tutorials/java/processing-in-java).

Anyway, now that you have a bunch of these files, the code first creates a `List` containing instances of these classes. For each sketch in that `List`, the code then runs the sketch and waits for 60 seconds. At the end of 60 seconds, the code pauses the sketch and hides it, and then moves to the next sketch. When it does has gone through every sketch, it starts back at the beginning, unpauses the first sketch, and shows it.

In other words, this program shows each sketch, one at a time, for 60 seconds at a time. This is useful if you want to showcase a bunch of sketches in a student presentation or an art gallery.

If you find this useful, I'd love to [hear from you](/about#contact)!


## Tweak Ideas

- Working with a group of students or artists? You could have them add their classes to a [GitHub](https://github.com/) repository, that way you don't have to manually copy everything over.
- Create a gallery that shows previews of each sketch that you can click on to launch.
