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

## If Statements

Now that we know what `boolean` values are, we're ready to talk about `if` statements.

An `if` statement takes a `boolean` value and only executes its body if that value is `true`.

To write an `if` statement, write the keyword `if`, then inside parentheses `()` insert a `boolean` value, and then in curly brackets `{}` write the code that should only execute when that value is true. We call that last part the **body** of the `if` statement.

Here's an example that draws a 

