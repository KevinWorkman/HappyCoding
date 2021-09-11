---
layout: tutorial
title: Swing Control Window
thumbnail: /examples/java/images/swing-control-window-4.png
tagline: Create a Processing sketch with a Swing control window.
sort-key: 310
meta-title: Swing Control Window
meta-description: Create a Processing sketch with a Swing control window.
meta-image: /examples/java/images/swing-control-window-5.png
tags: [example, java, processing, processing-in-java]
---

This program creates a Java application that contains a Processing sketch and a Swing GUI. The Swing GUI contains a button that shows a color picker, and that color is sent to the Processing sketch to be displayed.

First off, here's the `ProcessingSketch` class:

```java
import processing.core.PApplet;

public class ProcessingSketch extends PApplet{

	private float red = 64;
	private float green = 64;
	private float blue = 64;
	
	public void settings(){
		size(500, 500);
	}

	public void draw(){
		background(red, green, blue);
	}
	
	public void setColor(float red, float green, float blue) {
		this.red = red;
		this.green = green;
		this.blue = blue;
	}
	
	public void run(){
		String[] processingArgs = {"ProcessingSketch"};
		PApplet.runSketch(processingArgs, this);
	}

}
```

This class contains variables that keep track of a color, a `draw()` function that displays that color, and a `setColor()` function that sets those variables. It also contains a `run()` function that calls the `PApplet.runSketch()` function to run this as a sketch. Notice that it uses the `this` keyword to pass itself in as a parameter.

Here's the `SwingGui` class:

```java
import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JColorChooser;
import javax.swing.JFrame;

public class SwingGui {
	
	private JFrame frame;

	public SwingGui(ProcessingSketch sketch){
		frame = new JFrame("Controls");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		JButton pickColor = new JButton("Color...");
		pickColor.addActionListener(new ActionListener(){
			
			@Override
			public void actionPerformed(ActionEvent e){
				Color color = JColorChooser.showDialog(pickColor, "Color Picker", Color.RED);
				sketch.setColor(color.getRed(), color.getGreen(), color.getBlue());
			}
		});
		
		frame.add(pickColor);
		frame.setSize(200, 100);
	}
	
	public void show(){
		frame.setVisible(true);
	}
}
```

This class creates a Swing GUI that contains a button. When that button is pressed, the `JColorChooser.showDialog()` function is called, which lets the user pick a color. That color is sent to the `ProcessingSketch` instance, which is passed in as a parameter.

Finally, here's the `Main` class:

```java

public class Main {

	public static void main(String[] args){
		ProcessingSketch sketch = new ProcessingSketch();
		SwingGui swingGui = new SwingGui(sketch);
		
		sketch.run();
		swingGui.show();
	}
}
```

This class just creates instances of the `ProcessingSketch` and `SwingGui` classes, passing the `ProcessingSketch` instance into the `SwingGui` constructor. Then it calls the `run()` and `show()` functions to display both screens:

![Processing sketch and Swing control window](/examples/java/images/swing-control-window-1.png)

When the user clicks the button, a color picker is shown:

![color picker](/examples/java/images/swing-control-window-2.png)

Note that this is a Swing component, and we don't have to do anything special to display it. And when a user picks a color from it, our code communicates that color from Swing to Processing, and the color in our Processing sketch changes:

![pink Processing sketch](/examples/java/images/swing-control-window-3.png)

This is just a basic example, but it shows the general setup of creating a Swing GUI and a Processing sketch and communicating data between them.

## Tweak Ideas

- Make it so only one window is shown at a time. First show the Swing GUI and allow a user to pick a color, and then show the Processing sketch after the settings were chosen. Bonus: add a button to the Processing sketch that goes back to the Swing control window.
- Create a Swing GUI that lets a user specify input to a procedural generator, which is drawn in Processing.