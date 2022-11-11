---
layout: tutorial
title: Circle Button
thumbnail: /examples/java/images/circle-button-1.png
tagline: Rectangle buttons are so last year.
sort-key: 210
meta-title: Circle Button
meta-description: Create a custom class that shows a circle button.
meta-image: examples/java/images/circle-button-2.png
tags: [example, java, swing]
previousPost: /tutorials/java/swing
redirect_from: /examples/java/circle-button
discourseEmbedUrl: /examples/java/circle-button
---

This code defines a class that extends the `JButton` class and overrides a few methods to make a circular button.

```java
import javax.swing.JButton;
import java.awt.Graphics;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.geom.Point2D;
import java.awt.FontMetrics;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;

public class CircleButton extends JButton{

	private boolean mouseOver = false;
	private boolean mousePressed = false;

	public CircleButton(String text){
		super(text);
		setOpaque(false);
		setFocusPainted(false);
		setBorderPainted(false);

		MouseAdapter mouseListener = new MouseAdapter(){

			@Override
			public void mousePressed(MouseEvent me){
				if(contains(me.getX(), me.getY())){
					mousePressed = true;
					repaint();
				}
			}

			@Override
			public void mouseReleased(MouseEvent me){
				mousePressed = false;
				repaint();
			}

			@Override
			public void mouseExited(MouseEvent me){
				mouseOver = false;
				mousePressed = false;
				repaint();
			}

			@Override
			public void mouseMoved(MouseEvent me){
				mouseOver = contains(me.getX(), me.getY());
				repaint();
			}
		};

		addMouseListener(mouseListener);
		addMouseMotionListener(mouseListener);		
	}

	private int getDiameter(){
		int diameter = Math.min(getWidth(), getHeight());
		return diameter;
	}

	@Override
	public Dimension getPreferredSize(){
		FontMetrics metrics = getGraphics().getFontMetrics(getFont());
		int minDiameter = 10 + Math.max(metrics.stringWidth(getText()), metrics.getHeight());
		return new Dimension(minDiameter, minDiameter);
	}

	@Override
	public boolean contains(int x, int y){
		int radius = getDiameter()/2;
		return Point2D.distance(x, y, getWidth()/2, getHeight()/2) < radius;
	}

	@Override
	public void paintComponent(Graphics g){

		int diameter = getDiameter();
		int radius = diameter/2;

		if(mousePressed){
			g.setColor(Color.LIGHT_GRAY);
		}
		else{
			g.setColor(Color.WHITE);
		}
		g.fillOval(getWidth()/2 - radius, getHeight()/2 - radius, diameter, diameter);

		if(mouseOver){
			g.setColor(Color.BLUE);
		}
		else{
			g.setColor(Color.BLACK);
		}
		g.drawOval(getWidth()/2 - radius, getHeight()/2 - radius, diameter, diameter);

		g.setColor(Color.BLACK);
		g.setFont(getFont());
		FontMetrics metrics = g.getFontMetrics(getFont());
		int stringWidth = metrics.stringWidth(getText());
		int stringHeight = metrics.getHeight();
		g.drawString(getText(), getWidth()/2 - stringWidth/2, getHeight()/2 + stringHeight/4);
	}
}
```

This class does a few things:

- It changes some of the default `JButton` settings to avoid things like drawing a rectangle around the button when the mouse hovers over it. That's because we want to handle that ourselves and draw a circle instead.
- It adds mouse listeners to detect when the mouse is on top of the circular part of the button.
- It overrides the `getPreferredSize()` function, which layout managers use to determine how big to make the component.
- It overrides the `contains()` function, which returns whether a point is inside the component. We also use this function in our own code.
- It overrides `paintComponent()` to draw the button as a circle instead of a rectangle.

Most of the logic here is to make it so the component reacts like a button: its border changes when the mouse is over it, and its background changes when it's being clicked. Other than that, this class extends `JButton` so we can treat it just like any other `JButton`. We can add an `ActionListener` to it, and the super class will handle all of that for us. And we can add it to a `JFrame` to display it.

```java
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JButton;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class GuiMain{

	public static void main(String[] args){

		JFrame frame = new JFrame("Circle Button Demo");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		JLabel circleLabel = new JLabel("Exciting circle button:");

		CircleButton circleButton = new CircleButton("Click me!");
		circleButton.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent e){
					System.out.println("Clicked!");
				}
		});

		JLabel normalLabel = new JLabel("Boring square button:");
		JButton normalButton = new JButton("Okay");

		JPanel panel = new JPanel();
		panel.add(circleLabel);
		panel.add(circleButton);
		panel.add(normalLabel);
		panel.add(normalButton);
		frame.add(panel);

		frame.setSize(300, 150);
		frame.setVisible(true);
	}
}
```

![circle button](/examples/java/images/circle-button-3.png)

You might have to tweak some of this code to make it work with different layout managers, but the basic idea is the same: you extend the `JButton` class and then override functions to change the default behavior to make your own custom components.

## Tweak Ideas

- I didn't spend too much time making the button look pretty. Try to make it look more like a real button by using better colors, gradients, and borders.
- Make a triangular button, or a star-shaped button.
- Try to handle corner cases: what if the text is really long? What if the user makes the window too small for the button to fit?
