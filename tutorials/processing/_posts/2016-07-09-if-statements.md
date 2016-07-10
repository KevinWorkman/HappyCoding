---
layout: tutorial
title: "If Statements"
slug: if-statements
---

We now know how to call functions, use variables, and create our own variables and functions.

We've seen that values have different types, which tells the computer what kind of data a value is, or what type of value a variable holds.

This tutorial introduces the idea of **if statements**, which allow us to do different actions depending on the value a variable holds.
## Boolean Values

Before we get into `if` statements, let's talk about a new type of value: the `boolean` type.

Remember that a type tells the computer what kind of value a variable will hold. For example, the `int` type holds whole numbers, the `float` type holds decimal numbers, and the `String` type holds text. You create a variable by giving it a type, a name, and then a value:

```java
int catLives = 9;
float accountBalance = -123.45;
String message = "Happy Coding!";
```

The new `boolean` type can only holds two values: `true` or `false`.

```java
boolean isCodingFun = true;
```

## Relational Operators

`Boolean` variables wouldn't be very useful if we had to decide their values ahead of time. Instead, we can obtain `boolean` values through **relational operators**, which are how we check for inequalities (less than, greater than, equal to) of other values. Here's an example:

```java
float score = 95;
boolean isGradeA = score >= 90;
```

This code creates a `float` variable named `score` and sets it equal to `95`. It then creates a `boolean` variable named `isGradeA` and sets it equal to the result of the inequality. In this case, the inequality is `true` because `95` is greater than `90`. So at the end of this code, `isGradeA` is holding the `boolean` value of `true`.

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

### Or

We can also use the **or** operator, which works a lot like the **and** operator. The difference is, the **or** operator evaluates to true if **either** of the two `boolean` values is `true`.

To use the **or** operator, type two pipes `||` (they're above the enter key, or shift+\) between two `boolean` values:

```java
boolean isFishOrBird = canSwim || canFly;
```

### Not

In addition to operating on two `boolean` values, we can also switch a single `boolean` value. Values that are `true` evaluate to `false`, and values that are `false` evaluate to `true`. This is called the **not** operator, and you use it by typing an exclamation point `!` before the value you want to switch.

```java
boolean sinks = !canSwim;
boolean falls = !canFly;
```

### Combining Operators

It's very common to combine these operators to form more complicated logic. Just keep in mind that operators give you new values, which you can then use more operators on. So you can do things like this:

```java
boolean isMammal = !canSwim && !canFly;
```

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

![congratulations message](/tutorials/processing/if-statements-1.png)

If `isGradeA` is **not** true (in other words, if it's `false` (in other other words, if `score` is less than `90`)), then the program doesn't do anything. Try changing `score` to `85`, and you'll see a blank window:

![boring gray nothing](/tutorials/processing/if-statements-2.png)

Since `isGradeA` is now `false`, the body of the `if` statement is **not** executed, and it skips over all of the code inside the body.

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

## Else-If Statements

An `if` statement executes some code if its `boolean` value is `true`, and it 
