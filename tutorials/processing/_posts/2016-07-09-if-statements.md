---
layout: tutorial
title: If Statements
slug: if-statements
thumbnail: /tutorials/processing/images/if-statements-6.png
tagline: Make decisions in your code.
sort-key: 600
meta-title: If Statements
meta-description: Learn how to use if statements to make decisions in your code.
meta-image: /tutorials/processing/images/if-statements-5.png
---

We now know how to call functions, use variables, and create our own variables and functions.

We've seen that values have different types. A type tells the computer what kind of data a value is, or what type of value a variable holds.

This tutorial introduces **if statements**, which allow us to perform different actions depending on what value a variable holds.

## Boolean Values

Before we get into `if` statements, let's talk about a new type of value: the `boolean` type.

Remember that a type tells the computer what kind of value a variable will hold. For example, the `int` type holds whole numbers, the `float` type holds decimal numbers, and the `String` type holds text. You create a variable by giving it a type, a name, and then a value:

```java
int catLives = 9;
float accountBalance = -123.45;
String message = "Happy Coding!";
```

The new `boolean` type can only hold two values: `true` or `false`.

```java
boolean isCodingFun = true;
```

## Relational Operators

`Boolean` variables wouldn't be very useful if we had to decide their values ahead of time. Instead, we can obtain `boolean` values through **relational operators**, which are how we check for inequalities (less than, greater than, equal to) of other values. Here's an example:

```java
float score = 95;
boolean isGradeA = score >= 90;
```

This code creates a `float` variable named `score` and sets it equal to `95`. It then creates a `boolean` variable named `isGradeA` and sets it equal to the result of the inequality `score >= 90`. In this case, the inequality is `true` because `95` is greater than `90`. So at the end of this code, `isGradeA` is holding the `boolean` value of `true`.

It might make more sense to read the **right** side first. First we take the inequality `score >= 90` and get a `boolean` value from it (in this case, `true`), and then point the `isGradeA` variable to that value.

## Boolean Operators

Similar to how you can add two `float` values using the `+` operator to get a third `float` value, or subtract them using the `-` operator,  you can also operate on two `boolean` values to get a third `boolean` value.

### And

You can combine two `boolean` values using the **and** operator. The **and** operator evaluates to `true` whenever the two `boolean`  values are also `true`.

For example, if we had these two `boolean` variables:

```java
boolean canSwim = true;
boolean canFly = true;
```

We could then use the **and** operator to make a third value that was only `true` when both of these `boolean` values are also `true`. To use the **and** operator, type two ampersands `&&` between two `boolean` values:

```java
boolean isDuck = canSwim && canFly;
```

The `isDuck` variable will only be `true` when **both** `canSwim` **and** `canFly` are also true. If either one of them is false, then `isFlyingBird` will also be false.

Again, it might make more sense to read the **right** side first. First we evaluate the `&&` operator, which gives us a `boolean` value of `true`. Then we point the `isFlyingBird` variable to that value.

### Or

We can also use the **or** operator, which works a lot like the **and** operator. The difference is, the **or** operator evaluates to true if **either** of the two `boolean` values is `true`.

To use the **or** operator, type two pipes `||` (they're above the enter key, or shift+\) between two `boolean` values:

```java
boolean isFishOrBird = canSwim || canFly;
```

First we evaluate the `||` operator which gives us a `boolean` value, and then we point the `isFishOrBird` variable to that value.

### Not

In addition to operating on two `boolean` values, we can also switch a single `boolean` value. Values that are `true` evaluate to `false`, and values that are `false` evaluate to `true`. This is called the **not** operator, and you use it by typing an exclamation point `!` before the value you want to switch.

```java
boolean sinks = !canSwim;
boolean falls = !canFly;
```

First we evaluate the `!` operator which gives us a `boolean` value, and then we point the `sinks` variable to that value.

### Combining Operators

It's very common to combine these operators to form more complicated logic. Just keep in mind that operators give you new values, which you can then use more operators on. So you can do things like this:

```java
boolean isMammal = !canSwim && !canFly;
```

First this code toggles (or **negates**) the `canSwim` and `canFly` variables to create two new `boolean` values. It then takes those values and feeds them into the `&&` operator, which gives us yet another `boolean` value. Then we point the `isMammal` variable to that value.

(If this bothers you because it doesn't account for animals like bats, beavers, and dolphins... check out the homework!)

There is a [whole field of study](https://en.wikipedia.org/wiki/Boolean_algebra) devoted to `boolean` logic, so check that out if it sounds interesting. But for now, just know that `boolean` values contain `true` or `false`, and you can use operators like `&&`, `||`, and `!` on them.

## If Statements

Now that we know what `boolean` values are, we're ready to talk about `if` statements.

An `if` statement takes a `boolean` value and only executes its body if that value is `true`.

To write an `if` statement, write the keyword `if`, then inside parentheses `()` insert a `boolean` value, and then in curly brackets `{}` write the code that should only execute when that value is true. We call that last part the **body** of the `if` statement.

Here's an example that draws a congratulations message, but only if your grade is an A:

```java
float score = 95;
boolean isGradeA = score >= 90;
if(isGradeA){
   background(0, 255, 0);
   fill(0);
   text("Congratulations!", 7, 50);
}
```

This code uses an `if` statement to check whether `isGradeA` is `true`, and if it is, it draws a green background, changes the fill color to black, and then writes `"Congratulations!"` to the screen.

Since `score` is `95` (and `95` is greater than `90`), then we get the congratulations message:

![congratulations message](/tutorials/processing/images/if-statements-1.png)

If `isGradeA` is **not** true (in other words, if it's `false` (in other other words, if `score` is less than `90`)), then the program doesn't do anything. Try changing `score` to `85`, and you'll see a blank window:

![boring gray nothing](/tutorials/processing/images/if-statements-2.png)

Since `isGradeA` is now `false`, the body of the `if` statement is **not** executed, and it skips over all of the code inside the body.

{% include codepen.html slug-hash="pEWPJb" height="175" %}

## Boolean Values and Variables

So far we've been splitting up the inequality and the `if` statement into two steps: first we create a `boolean` variable, and then we use that variable in an `if` statement. But we could combine that into a single step:

```java
float score = 95;
if(score >= 90){
   background(0, 255, 0);
   fill(0);
   text("Congratulations!", 7, 50);
}
```

This does the exact same thing as our old code, except now we do the inequality (which gives us a `boolean` value) inside the `if` statement instead of splitting it into its own step. We aren't storing the `boolean` value inside a variable, we're just using the value directly. This will make our lives easier as we do more complicated things.

## Else Statements

An `if` statement executes some code if its `boolean` value is `true`, and it skips that code if the `boolean` value is `false`. But what if we want to do one thing if the value is `true` and a different thing if it's `false`? For this, we can use an `else` statement.

To use an `else` statement, just type the word `else` after an `if` statement, and then inside curly brackets `{}` put the code you want to execute when the `boolean` value is `false`:

```java
float score = 85;

if(score >= 90){
   background(0, 255, 0);
   fill(0);
   text("Congratulations!", 7, 50);
}
else{
  background(255, 0, 0);
  fill(0);
  text("Study more!", 15, 50);
}
```

This code uses an `if` statement to check whether `score` is greater than or equal to `90`. Since `85` is less than `90`, that inequality is `false`, so the code inside the `if` statement is skipped. Instead, the program jumps to the code inside the body of the `else` statement, which draws a red background, changes the fill color to black, and displays the "Study more!" message.

![study more](/tutorials/processing/images/if-statements-3.png)

You can think about the code like this: "If the score is greater than or equal to 90, then display the 'Congratulations!' message. Otherwise, display the `Study more!' message instead."

## Else-If Statements

An `if` statement executes some code if its `boolean` value is `true`, and an `else` statement executs code if the value is `false`. But what if we want to take different actions depending on multiple cases? This is where `else-if` statements come in handy.

An `else-if` statement is like a mix between an `else` statement and an `if` statement. You put an `else-if` statement after an `if` statement, and if the `if` statement's value is `false`, then the `else-if` statement's value is checked, exactly like an `if` statement. It's probably easier just to show you:

```java
float score = 85;

if(score >= 90){
   background(0, 255, 0);
   fill(0);
   text("Congratulations!", 7, 50);
}
else if(score >= 80){
  background(0, 0, 255);
  fill(255);
  text("Good job!", 18, 50);
}
```

This code uses an `if` statement to check whether `score` is greater than or equal to `90`. Since `85` is less than `90`, that inequality is `false`, so the code inside the `if` statement is skipped. The program jumps down to the `else-if` statement and checks the `boolean` value inside the `else-if` statement. Since `85` is greater than `80`, the inequality is `true`, and the code inside the body of the `else-if` is executed. The code then draws a blue background, changes the fill color to white, and displays the "Good job!" message.

![good job message](/tutorials/processing/images/if-statements-4.png)

You can think about the code like this: "If the score is greater than or equal to 90, then display the 'Congratulations!' message. Otherwise check whether the score is greater than or equal to 80. If it is, then display the `Good job!' message instead."

Note that if `score` was `75`, then the `boolean` values of both the `if` statement and the `else-if` statement would evaluate to `false`, so neither one of them would be executed.

## If Else-If Else Combinations

You can follow an `if` statement with multiple `else-if` statements, and you can follow an `else-if` statement with an `else` statement. So we could expand our program to detect every grade:

```java
float score = 75;

if(score >= 90){
   background(0, 255, 0);
   fill(0);
   text("Congratulations!", 7, 50);
}
else if(score >= 80){
  background(0, 0, 255);
  fill(255);
  text("Good job!", 18, 50);
}
else if(score >= 70){
  background(255, 255, 0);
  fill(0);
  text("Just okay.", 16, 50);
}
else if(score >= 60){
  background(255, 128, 0);
  fill(0);
  text("Not good!", 18, 50);
}
else{
  background(255, 0, 0);
  fill(0);
  text("Study more!", 15, 50);
}
```

This code uses an `if` statement to detect whether `score >= 90`. If it is, then it draws a "Congratulations!" message. If not, it goes to the first `else-if` statement and checks whether `score >= 80`. If it is, then it draws a "Good job!" message. If not, then it goes to the next `else-if` statement and checks whether `score >= 70`. If it is, then it draws a "Just okay." message. If not, then it goes to the next `else-if` statement and checks whether `score >= 60`. If it is, then it draws a "Not good!" message. If not, then it goes to the `else` statement and draws a "Study more!" message.

Try changing the `score` variable to see the different messages.

{% include codepen.html slug-hash="dpVWoq" height="175" %}

## Avoid Unncessary Checks

Only one body of code is entered in a string of `if else-if else` statements. As soon as the code enters one of the `if` or `else-if` statements, it stops checking subsequent `else-if` statements.

Look at this line of code, from our above program:

```java
else if(score >= 80){
```

Notice that we're only checking whether `score >= 80`. But for the grade to be a B, it also has to be `< 90`. Why aren't we checking for that?

We aren't checking to make sure that `score < 90`, because **we already know that is `true`**. We know this because if `score` was `>= 90`, then the **first** `if statement` would have been entered, and we wouldn't even be executing this line of code.

Think about it this way: first we check whether the grade is an A. If it is, then we display the "Congratulations!" message **and don't check against any other grades** since we already know the grade is an A. If it's not an A, then we know that `score < 90`. We can then check whether the grade is a B by only checking whether `score > 80`. It it is, then we display the "Good job!" message **and don't check against any other grades** since we already know the grade is a B. If it's not a B, then we know that `score < 80`, and we continue that logic for the rest of the program.

## Homework

- Expand the `boolean` example to work for more animals. How would you represent a bat (which can fly but isn't a bird) or a penguin (which can't fly but is a bird)?
- Create a program that uses `boolean` logic to identify a type of animal. Do a Google search for "animal identification key" for some handy guides. 
- Create a program that displays black if the mouse is on the left half of the screen, and white if the mouse is on the right half of the screen.
- Expand that program to show 4 different colors: red when the mouse is in the upper-left corner, green when the mouse is in the upper-right corner, blue when the mouse is in the lower-left corner, and yellow when the mouse is in the lower-right corner.
- Create a greeting program that shows a different message depending on what time of day it is. At least include morning, afternoon, evening, and night.

## Next: [Animation](/tutorials/processing/animation)
