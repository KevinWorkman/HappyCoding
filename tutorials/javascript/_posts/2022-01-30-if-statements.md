---
layout: tutorial
title: If Statements
thumbnail: /tutorials/javascript/images/if-statements-1.png
pixelate-thumbnail: true
tagline: Make decisions in your JavaScript code.
sort-key: 600
meta-title: JavaScript Variables Tutorial
meta-description: Use JavaScript if statements to make decisions in your code.
meta-image: /tutorials/javascript/images/if-statements-1.png
previousPost: /tutorials/javascript/interactive-html
nextPost: /tutorials/javascript/for-loops
tags: [tutorial, javascript]
---

{% include toc.md %}

Now you know the fundamentals of JavaScript, and you've created your own functions and variables. You've also created interactive HTML by getting input from the user and modifying the page.

Here's an example:

{% include codepen-new.html slug-hash="wvPBjBz" height="250" autoplay=true %}

So far, all of the code we've seen runs line by line, executing each line one after the other. The code can show different things, e.g. the above program shows whatever name the user enters. But the code itself always does the same thing every time it runs.

This tutorial introduces **if statements** which let your code take different actions based on conditions that you specify.

{% include youtube-embed.html slug="STjp3G_c-cg" %}

# Booleans

Most values and variables you've seen so far have been numbers or strings, like this:

```javascript
let catLives = 9;
let accountBalance = -123.45;
let message = 'hello world!';
```

`Number` and `String` are called **types** because they specify what type of data a value contains. JavaScript also contains another type called `Boolean`.

A boolean can only be one of two values: either `true` or `false`.

```javascript
let isCodingFun = true;
let isTheSkyGreen = false;
```

This might not seem very useful yet, but it will become more handy in a couple paragraphs!

# Relational Operators

Boolean variables wouldn’t be very useful if you had to decide their values ahead of time. Instead, you can obtain boolean values through **relational operators**. You might have called these *inequalities* in algebra class, where you compared two sides with symbols like `<` less than, `>` greater than, or `==` equal to. Here’s an example:

```
let temperature = 85;
let isHot = temperature > 80;
```

This code creates a variable named `temperature` and sets it equal to `85`. Then it creates a variable named `isHot` and sets it equal to the result of the inequality `temperature > 80`. In this case, the inequality is `true` because `85` is greater than `80`. So at the end of this code, `isHot` is holding the boolean value of `true`.

If that line of code is confusing, try reading what's on the **right** side of the `=` equals sign first. First you take the inequality `temperature > 80` and get a boolean value from it (in this case, `true`), and then you point the `isHot` variable to that value.

# Boolean Operators

Similar to how you can add two numbers using the `+` operator to get a third number, or subtract them using the `-` operator, you can also *operate* on two boolean values to get a third boolean value.

## And

You can combine two boolean values using the **and** operator, which looks like two ampersands: `&&`. The **and** operator evaluates to `true` whenever the two boolean values on either side of it are also `true`.

```javascript
let canSwim = true;
let canFly = true;
let isDuck = canSwim && canFly;
```

The `isDuck` variable will only be `true` when **both** `canSwim` **and** `canFly` are also true. If either one of them is false, then `isDuck` will also be false.

Again, it might make more sense to read the **right** side first. First the code evaluates the `&&` operator, which creates a boolean value of `true`. Then it points the `isDuck` variable to that value.

## Or

The **or** operator evaluates to true if **either** of the two boolean values on either side of it is `true`.

To use the **or** operator, type two pipes `||` (they’re above the enter key, or `shift + \`) between two boolean values:

```javascript
let isTodaySaturday = true;
let isTodaySunday = false;
let isTodayWeekend = isTodaySaturday || isTodaySunday;
```

The `isTodayWeekend` variables will be `true` if **either** the `isTodaySaturday` or `isTodaySunday` variables are `true`.

First the code evaluates the `||` operator which creates a boolean value (in this case it’s `true`), and then it points the `isTodayWeekend` variable to that value.

## Not

In addition to operating on two `boolean` values, you can also calculate the opposite of a single boolean value. The opposite of `true` is `false`, and the opposite of `false` is `true`.

This is called the **not** operator, and you use it by typing an exclamation point `!` before the value you want to switch.

```javascript
let sinks = !canSwim;
let falls = !canFly;
let isTodayWeekday = !isTodayWeekend;
```

Each line of this code evaluates the `!` operator which creates a new boolean value based on the opposite of whatever follows it, and then it points a boolean variable to that value.

## Combining Operators

You can also combine these operators to form more complicated logic. So you can do things like this:

```javascript
let isMammal = !canSwim && !canFly;
```

First this code takes the opposite of the `canSwim` and `canFly` variables to create two new boolean values. It then takes those values and feeds them into the `&&` operator, which creates yet another boolean value. Then it points the `isMammal` variable to that value.

(If this bothers you because it doesn’t account for animals like bats, beavers, and dolphins… come up with your own `isMammal` variable!)

There is a whole field of study devoted to [boolean logic](https://en.wikipedia.org/wiki/Boolean_algebra), so check that out if it sounds interesting. But for now, keep in mind that boolean values contain `true` or `false`, and you can use operators like `&&`, `||`, and `!` on them.

# If Statements

An `if` statement checks a boolean value and only executes a block of code if that value is `true`.

To write an `if` statement, write the keyword `if`, then inside parentheses `()` insert a boolean value, and then in curly brackets `{}` write the code that should only execute when that value is `true`. That code is called the **body** of the `if` statement.

Here’s an example that says good morning, but only if the current time is before noon:

{% include codepen-new.html slug-hash="qBVbWmW" height="150" autoplay=true %}

This code creates a `currentHour` variable and sets it equal to `10`. Then it creates an `isMorning` variable, and sets it equal to the boolean value that's generated from the expression `currentHour < 12`. In this case that evaluates to `true`. Then the `if` statement checks the value of `isMorning`, and because it's `true`, it prints `'Good morning!'` to the page.

Try changing `currentHour` to `14` (which would represent 2:00 PM) to see that the message is no longer displayed. That's because the `if` statement only prints the message if `currentHour` is less than `12`. If it's greater than or equal to `12`, then `currentHour < 12` evaluates to `false`, and the `if` statement skips the code inside the `{ }` curly braces, so nothing is printed.

# Boolean Expressions

The above example separated the inequality and the `if` statement into two steps: the code first created a boolean variable `isMorning` from an inequality, and then it used that variable in an `if` statement. But you can combine them into a single step:

```javascript
let currentHour = 10;
if (currentHour < 12) {
  document.write('Good morning!');
}
```

This does the exact same thing as the old code, except now the inequality (which evaluates to a boolean value) is inside the `if` statement instead of being split into its own step. This is the format that most folks use when writing `if` statements.

# Else Statements

An `if` statement executes some code if its boolean value is `true`, and it skips that code if the boolean value is `false`. But what if you want to do one thing if the value is `true` and a different thing if it’s `false`? Sounds like a job for an `else` statement!

To use an `else` statement, type the `else` keyword after an `if` statement, and then inside curly brackets `{}` put the code you want to execute when the `if` statement’s boolean evaluates to `false`:

{% include codepen-new.html slug-hash="mdqVbGW" height="150" autoplay=true %}

This code uses an `if` statement to check whether `currentHour` is less than `12`. Since `22` is greater than `12`, that inequality is `false`, so the code inside the `if` statement is skipped. Instead, the browser jumps to the code inside the body of the `else` statement, which prints `'Good night!'` to the page.

You can translate the `if` statement pretty directly to English: *“If the current hour is lass than 12, then display the ‘Good morning!’ message. Otherwise, display the ‘Good night!’ message instead.”*

# Else If Statements

An `if` statement executes some code if its boolean evaluates to `true`, and an `else` statement executes code if it evaluates to `false`. But what if you want to take different actions depending on multiple cases? For example, it probably doesn't make sense to print `'Good night!'` at 2:00 PM, does it? This is where `else if` statements come in handy.

An `else if` statement is like a mix between an `else` statement and an `if` statement. You put an `else if` statement after an `if` statement, and if the `if` statement evaluates to `false`, then the `else if` statement’s boolean is evaluated:

{% include codepen-new.html slug-hash="abVdogO" height="150" autoplay=true %}

This code uses an `if` statement to check whether `currentHour` is less than `12`. Since `14` is greater than `12`, that inequality is `false`, so the code inside the `if` statement is skipped. The browser jumps down to the `else if` statement and checks the boolean expression inside the `else if` statement. Since `14` is less than `17`, the inequality is `true`, and the code inside the body of the `else if` is executed. The code then displays the `'Good afternoon!'` message.

You can think about the code like this: "If the current hour is less than 12, then display the 'Good morning!' message. Otherwise check whether the current hour is less than 17. If it is, then display the 'Good afternoon!' message instead."

If `currentHour` was `10`, then only the code inside the body of the `if` statement would run. The code inside the `else if` statement would be skipped. And if `currentHour` was `20`, then the boolean expressions of both the `if` statement and the `else if` statement would evaluate to `false`, so neither one of their bodies would be executed.

# If / Else If / Else Combinations

You can follow an `if` statement with multiple `else-if` statements, and you can follow an `else-if` statement with an `else` statement. So you could expand your program to detect every time of day:

{% include codepen-new.html slug-hash="WNXrNea" height=300 autoplay=true %}

This code uses a series of `if`, `else if` and `else` statements to run this logic:

- Is `currentHour < 5`?
  - If so, show the `Go back to bed!` message and stop checking any other conditions.
  - If not, keep checking.
- Is `currentHour < 12`?
  - If so, show the `Good morning!` message and stop checking any other conditions.
  - If not, keep checking.
- Is `currentHour < 17`?
  - If so, show the `Good afternoon!` message.
  - If not, show the `Good night!` message.

Try changing the `currentHour` variable to see the different messages.

# Avoiding Unnecessary Checks

Keep in mind that only **one** body of code is entered in a series of `if else-if else` statements. As soon as the code enters one of the `if` or `else-if` statements, it stops checking subsequent `else-if` statements.

Look at this line of code, from the above program:

```
else if (currentHour < 12) {
```

Notice that the code only checks whether `currentHour < 12`, and if so, it displays `Good morning!` in the page. But for very early times, like 2:00 AM, we don't want to show `Good morning!` yet. So why doesn’t the code also check that `currentHour > 5` on this line?

The code doesn’t check to make sure that `currentHour > 5`, because **it already knows that it is**. If `currentHour` was `< 5`, then the `if (currentHour < 5)` statement would have been entered, and the code wouldn’t even reach the `else if (currentHour < 12)` statement.

Think about it this way: first the code checks whether the time is before 5:00 AM. If it is, then it displays the `Go back to bed!` message **and doesn’t check any other times** since it already knows it's before 5:00 AM. If it’s not before 5:00 AM, then it knows that `currentHour > 5` and it keeps checking other times.

That’s why the code can check whether the current hour is in the morning by only checking whether `currentHour < 12`. It it is, then it displays the “Good morning!” message **and doesn’t check against any other times** since it already knows the time is in the morning. If `currentHour` is not less than `12`, then the code knows that `currentHour` is greater than or equal to `12`, and it continues that pattern for the rest of the program.

# Truthiness

We talked a little bit about type coercion when you read about variables. For example:

```javascript
let x = '21';
let y = '2';
let z = x * y;
console.log(z);
```

This code creates two string variables and then tries to multiply them together. Perhaps surprisingly, this code will work, because JavaScript *coerces* the strings into numbers before doing the multiplication.

Similarly, if you try to use a non-boolean value in an `if` statement, then the code uses the “truthiness” of that value to convert it to a boolean. Values like `0`, `''` (empty string), and `undefined` are “falsy” and convert to `false`, and values like `'42'` and `'hello world'` are “truthy” and convert to `true`.

Here’s an example:

{% include codepen-new.html slug-hash="mdqVdPp" height="175" autoplay=true %}

This code creates a `volume` variable, and then uses that variable in an `if` statement. Since it’s not a boolean, the code checks its truthiness to convert it to a boolean.

Try changing `volume` to `0` to see what happens!

# Learn More

- [JavaScript Booleans - W3Schools](https://www.w3schools.com/js/js_booleans.asp)
- [JavaScript Comparisons - W3Schools](https://www.w3schools.com/js/js_comparisons.asp)
- [JavaScript Conditions - W3Schools](https://www.w3schools.com/js/js_if_else.asp)
- [JavaScript if/else Statement - W3Schools](https://www.w3schools.com/jsref/jsref_if.asp)
- [if…else - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Truthy - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

# Homework

- Modify the above time of day example to use times from your daily schedule.
- Write code that shows a different message depending on the current temperature.
- Replace the hard-coded `currentHour` variable with this: `let currentHour = new Date().getHours();` and then modify the code to create your own daily greeting webpage.
- Expand the `boolean` example to work for more animals. Write a `showAnimalType` function that takes a set of `boolean` parameters (as many as you want!) and shows a message that explains whether the animal is a mammal, bird, reptile, amphibian, or fish. How would you represent a bat (which can fly but isn’t a bird) or a penguin (which can’t fly but is a bird)? If you want an advanced challenge, do a google search for “animal identification key” for some handy guides.
- Create a program that uses `boolean` logic to determine the outcome of a flowchart like this [xkcd comic flowchart](https://xkcd.com/210/). If you want an advanced challenge, try this [xkcd advance flowchart](https://xkcd.com/1688/)!
