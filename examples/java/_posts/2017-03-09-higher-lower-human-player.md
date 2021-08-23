---
layout: tutorial
title: Higher Lower (Human Player)
thumbnail: /examples/java/images/higher-lower-human-player-2.png
tagline: Try to guess what number the computer is thinking.
sort-key: 100
meta-title: Higher Lower (Human Player)
meta-description: Try to guess what number the computer is thinking.
meta-image: /examples/java/images/higher-lower-human-player-3.png
tags: [example, java, hello-world, higher-lower]
---

This program creates a computer that plays the higher-lower number guessing game with you. The computer picks a number, and you try to guess what it is. Each time you guess, the computer tells you whether the number it's thinking of is higher or lower than your guess.

```java
import java.util.Scanner;

public class HigherLowerHumanPlayer{

	public static void main(String[] args){
	
		int number = (int)(1 + Math.random() * 100);
		
		System.out.println("I'm thinking of a whole number betwen 1 and 100. Guess what it is!");
		System.out.println("Please type a whole number and press enter.");
		
		Scanner scanner = new Scanner(System.in);
		
		int guesses = 0;
		boolean done = false;
		while(!done){
			
			int playerGuess = scanner.nextInt();
			guesses++;
			
			if(number < playerGuess){
				System.out.println("The number I'm thinking of is lower than " + playerGuess + ".");
				System.out.println("Guess again! (Please type a whole number and press enter.)");
			}
			else if(number > playerGuess){
				System.out.println("The number I'm thinking of is greater than " + playerGuess + ".");
				System.out.println("Guess again! (Please type a whole number and press enter.)");
			}
			else{
				System.out.println("That's correct! I was thinking of a " + number + ".");
				System.out.println("It took you " + guesses + " guesses to get it right. Thanks for playing!");	
				done = true;
			}
		}
		scanner.close();
	}
}
```

![higher lower game](/examples/java/images/higher-lower-human-player-1.png)

## Tweak Ideas

- Change the range: include negative numbers, or decimal places, or make the range between 100 and 200 instead of 1 and 100.
- Have the computer offer encouragement if the player is taking a long time to figure it out.
- Have the computer remind the player if they guess in the wrong direction, for example if the computer says the number is less than 20 but the player guesses 25.
- Add error checking so the program doesn't crash if the player enters anything other than a whole number.