---
layout: tutorial
title: Creating Variables
slug: creating-variables
thumbnail: /tutorials/javascript/images/calling-javascript-3.png
tagline: Learn more about dynamic typing in JavaScript.
sort-key: 300
meta-title: Creating Variables
meta-description: Learn more about dynamic typing in JavaScript.
meta-image: /tutorials/javascript/images/calling-javascript-4.png
tags: [tutorial, javascript, basic]
---

This tutorial assumes you've worked through the Processing tutorials, and you already know what a variable is. (If not, go read [the Processing tutorials](/tutorials/processing) now!) So I won't spend a lot of time explaining what variables are or why they're useful. I'll just focus on the major differences between creating variables in JavaScript vs creating them in Processing.

## The Basics

Creating variables in JavaScript looks a lot like creating variables in Processing, except you use the `var` keyword instead of giving your variable a type:

```javascript
var answer = 42;
var message = "Happy Coding";
var yum = 3.14;
```

You can also get the value of variables from functions:

```javascript
var currentHour = new Date().getHours();
var randomNumber = Math.random();
var userName = prompt("What's your name?");
```

And you can pass variables into functions as arguments:

```javascript
var userName = "Kevin";
console.log("Hi " + userName);

var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();
alert("It is currently " + currentHour + ":" + currentMinute);
```

We'll get into more complicated variables (like creating objects) and more useful functions (like creating interactive webpages) in later tutorials, but for now just know that you can use variables in JavaScript just like you could in Processing.

But why does JavaScript use the `var` keyword instead of giving each variable a specific type? To answer that question, let's take a step back and talk about why Processing requires types in the first place.

## Processing is Statically Typed

Processing (particularly, Processing's Java mode) is **statically typed**, which means that you have to give variables a type when you declare them:

```java
String message = "happy coding";
println(message);
```

Notice the `String` keyword, which gives the `message` variable a type. What happens if you try to store an `int` value in your `String` variable?

```java
String message = "happy coding";
message = 123; //error!
println(message);
```

You get a compiler error saying that a `String` variable can't hold an `int` value.

This **type safety** prevents you from making silly mistakes. More accurately, it warns you at compile time (before the program is actually run) that you've made a mistake.

## JavaScript is Dynamically Typed

Compare that to JavaScript, which is **dynamically typed**. This means that in JavaScript, you don't give variables a type! Instead, you declare them using the `var` keyword:

```javascript
var message = "happy coding";
console.log(message);
```

JavaScript will then figure out **at run time** what type the variable holds. This means that you can also do this:

```javascript
var message = "happy coding";
message = 123;
console.log(message);
```

The above code runs fine and prints `123` to the JavaScript console.

This gives you more freedom, but it also makes it harder to track down logic errors. It also makes it harder to know exactly what code is doing when it's written by other people or relies on libraries.

## Static Typing vs Dynamic Typing

Now you know the basics of what dynamic typing means. It's okay if you don't completely understand it! But just remember that Processing is statically typed so you give everything a type, whereas JavaScript is dynamically typed so you don't.

Now you might be wondering: which is better, static typing or dynamic typing? And the answer is: neither. Think of them like tools. Different tools are better at accomplishing different goals. It doesn't make a ton of sense to say that a hammer is "better" than a saw.

Static typing is great because it prevents you from making stupid mistakes, like storing the wrong type of data in a variable. You'll get an error as soon as you type it, because the compiler will complain before it even lets you run the code.

On the other hand, dynamic typing gives you more freedom. You can store whatever you want in any variable, and there isn't even a compiler to complain at you! However, this freedom comes at a cost: it can make it harder to debug and track down problems in your code.

So it really comes down to personal preference. In real life you'll probably end up using a mix of both types of languages.

Anyway, now that we know about the `var` keyword and the basics of how dynamic typing work, let's talk about some common types of variables:

## Numbers

Processing has different number types, like `int` that holds whole numbers and `float` that holds decimals. JavaScript only has one number type (technically it's the same type as Processing's `float` type). You don't really have to worry about any of that. Just know that you can store numbers in variables, and you can use **operators** on them just like you'd expect:

```javascript
var x = 25 + 75;
var y = x * 2;
var z = (y + 46) / 2
console.log(z); //prints 123
```

You can also change a variable over time by setting it again or by incrementing it:

```javascript
var x = 10;
x = x + 5;
console.log(x); //prints 15

var y = 1;
y++;
console.log(y); //prints 2
```

## Strings

JavaScript strings are pretty much like Processing strings. You can store text surrounded by `"` double quotes in a string variable:

```javascript
var message = "Happy Coding";
console.log(message);
```

One difference is that in JavaScript you can also use `'` single quotes:

```javascript
var message = `Happy Coding`;
console.log(message);
```

This isn't really a big deal until you start mixing them:

```javascript
var message = 'This string "contains" double quotes!`;
console.log(message);
```

If you're used to Processing, then this probably looks strange at first. But just know that the inner `"` double quotes are just a part of the string value. If it still looks strange, try printing out a few examples to see how it works.

You can also use the `+` append operator with two string values, which combines them into a new string value:

```javascript
var name = prompt("What's your name?");
var greeting = "Hello " + name;
console.log(greeting);
```

You can also use this with non-string values. For example, you can append a number to a string:

```javascript
var x = 123;
var message = "x is: " + x;
```

This can be confusing if you have string values that hold numbers. Numbers inside of strings are treated just like any other letter. What do you think this prints out?

```javascript
var x = "123";
var y = 456;
var z = x + y;
console.log(z);
```

You might expect it to add `123` and `456` to print out `579`, but it actually prints out `123456` because it treats `123` as a string and then appends `456` to it.

## Booleans

A boolean value can only hold one of two values: either `true` or `false`, and you can use them with `if` statements:

```javascript
var winner = true;
if(winner){
	console.log("Congratulations!");
```

You can also obtain a boolean value using other operators, such as inequalities:

```javascript
var grade = 93;
var isGradeA = grade >= 90; //is grade at least 90?
if(isGradeA){
	console.log("You got an A!");
}
```

All of that should be pretty familiar to you, but there is one big difference: in JavaScript, other values also evaluate to true and false. For example, `0` evaluates to false, but other numbers evaluate to true:

```javascript
var lives = 1;
if(lives){
	document.write("You're alive!");
}
else{
	document.write("You're dead! Spooky.");
}
```

{% include codepen.html slug-hash="apVLaJ" height="250" %}

Try changing `lives` to `0` to see what happens.

Other stuff also evalutes to a boolean value:

 - Empty strings `""` are false, any other string is true.
 - null and undefined values (which you can get if you forget to give a variable a value) are false.
 - NaN (not a number, which you get by dividing by zero or doing other illegal stuff) is false.
 
This might seems strange, but it becomes useful if you want to check whether a variable has been initialized or holds a valid value.

## Objects and Functions

Variables can also point to objects and even functions. We'll learn more about this in upcoming tutorials.

## Checking Equality

To compare two values, you can use the `==` operator to check whether they're equal:

```javascript
var x = 40 + 2;
var y = 21 * 2;
if(x == y){
  console.log("They're equal.");
}
else{
  console.log("They're not equal.");
}
```

The `==` operator automatically converts between types, so you can do this:

```javascript
var x = 123;
var y = "123";
if(x == y){
  console.log("They're equal.");
}
else{
  console.log("They're not equal.");
}
```

This code prints out `"They're equal."` even though the variables are of two different types.

{% include codepen.html slug-hash="MJOEZK" height="250" %}

The `===` operator does **not** do this automatic conversion, so variables with two different types are not considered equal, even if they hold the same content:

```javascript
var x = 123;
var y = "123";
if(x === y){
  console.log("They're equal.");
}
else{
  console.log("They're not equal.");
}
```

{% include codepen.html slug-hash="vgWevr" height="250" %}

## Next: [Creating Functions](/tutorials/javascript/creating-functions)
