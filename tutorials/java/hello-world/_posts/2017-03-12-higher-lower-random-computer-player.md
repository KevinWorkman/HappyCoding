---
layout: post
title: Higher Lower (Random Computer Player)
thumbnail: /tutorials/java/images/higher-lower-random-computer-player-2.png
tagline: Think of a number and the computer will guess what it is.
sort-key: 120
meta-title: Higher Lower (Random Computer Player)
meta-description: Think of a number and the computer will guess what it is.
meta-image: /tutorials/java/images/higher-lower-random-computer-player-3.png
tags: [example, java, hello-world, higher-lower]
previousPost: /tutorials/java/hello-world
redirect_from: /examples/java/higher-lower-random-computer-player
discourseEmbedUrl: /examples/java/higher-lower-random-computer-player
---

This program creates a computer that plays the higher-lower number guessing game with you. You pick a number, and the computer tries to guess what it is. Each time the computer guesses, you tell it whether the number you're thinking of is higher or lower than your number. The computer "remembers" your answers and gets closer with every guess.

```java
import java.util.Scanner;

public class HigherLowerRandom{

	public static void main(String[] args){

		System.out.println("Think of a whole number betwen 1 and 100. I'll guess what it is!");
		System.out.println("When you're ready, type yes and press enter.");

		Scanner scanner = new Scanner(System.in);
		//ignore the yes
		scanner.nextLine();

		int min = 1;
		int max = 100;

		int guesses = 0;
		boolean done = false;
		while(!done){

			int guess = min + (int)(Math.random() * (max - min + 1));
			guesses++;

			System.out.println("My guess is: " + guess);
			System.out.println("Please type yes if I got it right.");
			System.out.println("Please type higher if your number is greater than " + guess + ".");
			System.out.println("Please type lower if your number is less than " + guess + ".");
			System.out.println("Then press enter.");

			String answer = scanner.nextLine();

			if(answer.equals("lower")){
				max = guess - 1;
			}
			else if(answer.equals("higher")){
				min = guess + 1;
			}
			else{
				System.out.println("Hooray!");
				System.out.println("It took me " + guesses + " guesses to get it right. Thanks for playing!");
				done = true;
			}
		}
		scanner.close();
	}
}
```

![higher lower game](/tutorials/java/images/higher-lower-random-computer-player-1.png)

This works by keeping track of the minimum and maximum your number could possible be. At the beginning of the program, the min is 1 and the max is 100. Then the computer chooses a random number between the min and max: let's say the computer chooses 10. If you say your number is lower than 10, then that means the min is still 1, but the max is now 9. If you say your number is higher than 10, then the min is now 11 and the max is still 100. The range of possible numbers decreases as this process is repeated, until the computer eventually gets it right.

## Tweak Ideas

- This program is pretty brittle: it doesn't handle stuff like typos, different capitalizations, or the user lying. Add code that handles these cases.
- Humans are bad at being actually random: they're more likely to choose certain numbers than others, for example. Can you use this fact to make a smarter computer player? Think about how you would play against another person.
