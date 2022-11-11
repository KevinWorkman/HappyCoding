---
layout: tutorial
title: Free Paycheck Calculator
thumbnail: /tutorials/java/images/free-paycheck-calculator-1.png
tagline: Find months that have three paychecks in them.
sort-key: 130
meta-title: Free Paycheck Calculator
meta-description: This Java program finds months that have free paychecks in them.
meta-image: /tutorials/java/images/free-paycheck-calculator-2.png
tags: [example, java, hello-world, util]
previousPost: /tutorials/java/hello-world
redirect_from: /examples/java/free-paycheck-calculator
discourseEmbedUrl: /examples/java/free-paycheck-calculator
---

If you get paid every two weeks, every once in a while you'll hit a month where you get three paychecks. If your budget assumes you only get two paychecks per month, then that third paycheck is basically free money!

(Disclaimer: it is not free money.)

This program takes your next paycheck date and calculates the next 10 months that you'll get a third paycheck.

```java
import java.time.LocalDate;
import java.time.Year;
import java.time.format.DateTimeFormatter;
import java.util.Scanner;

public class FreePaycheckCalculator{

	public static void main(String... args){

		//get paycheck date from user
		System.out.println("When is your next paycheck? Example: March 14");
		Scanner scanner = new Scanner(System.in);
		String userString = scanner.nextLine();
		scanner.close();

		//parser needs year, try current year first
		String year = Year.now().toString();
		userString += " " + year;

		//convert input String to LocalDate
		DateTimeFormatter inputFormat = DateTimeFormatter.ofPattern("MMMM d yyyy");
		LocalDate userDate = LocalDate.parse(userString, inputFormat);

		//if the user's date is before current date, that means it's next year
		LocalDate now = LocalDate.now();
		if(userDate.compareTo(now) < 0){
			userDate = userDate.plusYears(1);
		}

		System.out.println("Here are the months you'll get a free paycheck:");

		DateTimeFormatter outputFormat = DateTimeFormatter.ofPattern("MMMM yyyy");

		//find 10 months with 3 paychecks in them
		int freePaychecksFound = 0;
		int currentMonth = userDate.getMonthValue();
		int paychecksThisMonth = 1;
		while(freePaychecksFound < 10){
			userDate = userDate.plusWeeks(2);
			//if we're still in the same month, add the paycheck to the count
			if(userDate.getMonthValue() == currentMonth){
				paychecksThisMonth++;
				//if we found 3 paychecks this month, it's a free one!
				if(paychecksThisMonth == 3){
					freePaychecksFound++;
					System.out.println(outputFormat.format(userDate));
				}
			}
			//otherwise we're in the next month, reset the count
			else{
				paychecksThisMonth = 1;
				currentMonth = userDate.getMonthValue();
			}
		} //end while
	} //end main
}
```

The code uses the `LocalDate` and `DateTimeFormatter` classes to get the user's next paycheck date. Then it adds 2 weeks to the date until it finds 3 paychecks in the same month. It keeps doing that until it finds 10 months that have three paychecks in it.

```
> javac FreePaycheckCalculator.java
> java FreePaycheckCalculator
When is your next paycheck? Example: March 14
May 19
Here are the months you'll get a free paycheck:
June 2017
December 2017
June 2018
November 2018
May 2019
November 2019
May 2020
October 2020
April 2021
October 2021
```

Buy yourself something nice, or donate to [the Processing Foundation](https://processingfoundation.org/)!

## Tweak Ideas

- Improve the parsing code so it handles dates in different formats.
- Not everybody gets paid every two weeks. Modify this program to support other pay periods.
- Not everybody uses the Gregorian calendar. Modify this program to support other calendar types.
