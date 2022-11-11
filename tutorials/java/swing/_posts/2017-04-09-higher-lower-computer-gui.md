---
layout: tutorial
title: Higher Lower
thumbnail: /tutorials/java/images/higher-lower-random-computer-player-2.png
tagline: Guessing game gui
sort-key: 220
meta-title: Circle Button
meta-description: Create a custom class that shows a circle button.
meta-image: /tutorials/java/images/higher-lower-random-computer-player-3.png
tags: [example, java, swing]
previousPost: /tutorials/java/swing
redirect_from: /examples/java/higher-lower-computer-gui
discourseEmbedUrl: /examples/java/higher-lower-computer-gui
---

This code creates a GUI that plays the higher/lower guessing game with the user.

```java
import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JLabel;
import javax.swing.JButton;
import java.awt.CardLayout;
import java.awt.BorderLayout;
import javax.swing.BoxLayout;
import java.awt.Color;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class HigherLowerGui{

	private int min = 1;
	private int max = 100;
	private int guess;
	private int guesses = 0;

	private JLabel guessLabel;
	private JButton higherButton;
	private JButton lowerButton;
	private JLabel endLabel;

	public HigherLowerGui(){
		JFrame frame = new JFrame("Higher Lower");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

		CardLayout cardLayout = new CardLayout();
		JPanel mainPanel = new JPanel(cardLayout);

		JLabel startLabel = new JLabel("Pick a whole number between 1 and 100.");
		startLabel.setHorizontalAlignment(JLabel.CENTER);
		startLabel.setFont(startLabel.getFont().deriveFont(18f));
		startLabel.setBackground(Color.CYAN);
		startLabel.setOpaque(true);

		JButton startButton = new JButton("I'm ready!");
		startButton.setFont(startButton.getFont().deriveFont(18f));
		startButton.addActionListener(new ActionListener(){
			public void actionPerformed(ActionEvent e){
				nextGuess();
				cardLayout.show(mainPanel, "play");
			}
		});
		JPanel startPanel = new JPanel(new BorderLayout());
		startPanel.add(startLabel, BorderLayout.CENTER);
		startPanel.add(startButton, BorderLayout.SOUTH);
		mainPanel.add(startPanel, "start");

		guessLabel = new JLabel();
		guessLabel.setHorizontalAlignment(JLabel.CENTER);
		guessLabel.setFont(guessLabel.getFont().deriveFont(18f));

		JButton yesButton = new JButton("Yes that's my number!");
		yesButton.setFont(yesButton.getFont().deriveFont(18f));
		yesButton.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent e){
					endLabel.setText("It took me " + guesses + " guesses!");
					cardLayout.show(mainPanel, "end");
				}
		});

		higherButton = new JButton();
		higherButton.setFont(higherButton.getFont().deriveFont(18f));
		higherButton.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent e){
					min = guess + 1;
					nextGuess();
				}
		});

		lowerButton = new JButton();
		lowerButton.setFont(lowerButton.getFont().deriveFont(18f));
		lowerButton.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent e){
					max = guess - 1;
					nextGuess();
				}
		});

		JPanel buttonPanel = new JPanel();
		buttonPanel.setLayout(new BoxLayout(buttonPanel, BoxLayout.Y_AXIS));
		yesButton.setAlignmentX(JButton.CENTER_ALIGNMENT);
		lowerButton.setAlignmentX(JButton.CENTER_ALIGNMENT);
		higherButton.setAlignmentX(JButton.CENTER_ALIGNMENT);
		buttonPanel.add(yesButton);
		buttonPanel.add(lowerButton);
		buttonPanel.add(higherButton);

		JPanel playPanel = new JPanel(new BorderLayout());
		playPanel.add(guessLabel, BorderLayout.CENTER);
		playPanel.add(buttonPanel, BorderLayout.SOUTH);
		mainPanel.add(playPanel, "play");

		endLabel = new JLabel();
		endLabel.setHorizontalAlignment(JLabel.CENTER);
		endLabel.setFont(endLabel.getFont().deriveFont(18f));
		endLabel.setBackground(Color.DARK_GRAY);
		endLabel.setOpaque(true);
		endLabel.setForeground(Color.WHITE);

		JButton restartButton = new JButton("Restart");
		restartButton.setFont(restartButton.getFont().deriveFont(18f));
		restartButton.addActionListener(new ActionListener(){
				public void actionPerformed(ActionEvent e){
						min = 1;
						max = 100;
						guesses = 0;
						cardLayout.show(mainPanel, "start");
				}
		});

		JPanel endPanel = new JPanel(new BorderLayout());
		endPanel.add(endLabel, BorderLayout.CENTER);
		endPanel.add(restartButton,BorderLayout.SOUTH);
		mainPanel.add(endPanel, "end");

		frame.add(mainPanel);
		frame.setSize(400, 400);
		frame.setVisible(true);
	}

	private void nextGuess(){
		guesses++;
		guess = min + (int)(Math.random() * (max - min + 1));

		guessLabel.setText("Is your number " + guess + "?");
		higherButton.setText("My number is higher than " + guess + ".");
		lowerButton.setText("My number is lower than " + guess + ".");
	}

	public static void main(String[] args){
		new HigherLowerGui();
	}
}
```

This code uses a `CardLayout` to split the game into three screens:

The start screen shows an intro message to the user.

![start screen](/tutorials/java/images/higher-lower-computer-gui-1.png)

When the user clicks the button, the main play screen is shown:

![play screen](/tutorials/java/images/higher-lower-computer-gui-2.png)

On this play screen, the computer updates the GUI based on random guesses and the user's input. Eventually the computer will guess correctly, and the GUI will show the end screen:

![end screen](/tutorials/java/images/higher-lower-computer-gui-3.png)

If the user clicks the restart button, the variables that keep track of the game are reset, and the GUI goes back to the start screen.

## Tweak Ideas

- This program is pretty brittle: it doesn't handle stuff like the user lying. Add code that handles these cases.
- Make the GUI prettier by adding better colors and customized components.
- Add components that show what the computer is thinking.
