---
layout: tutorial
title: Variables
thumbnail: /teaching/intro-to-web-dev-2022-spring/images/week-04-javascript/variables-1.png
pixelate-thumbnail: true
tagline: Store information in variables.
sort-key: 200
meta-title: JavaScript Variables Tutorial
meta-description: Store information in variables.
meta-image: /teaching/intro-to-web-dev-2022-spring/images/week-04-javascript/variables-1.png
previousPost: /tutorials/javascript/calling-javascript
nextPost: /tutorials/javascript/developer-tools
tags: [tutorial, javascript]
---

{% include toc.md %}

Now you know how to call functions in JavaScript. Here's an example:

{% include codepen-new.html slug-hash="BQXLBo" height="250" autoplay=true %}

This code calls the `document.write()` function and passes `'Hello world!'` into it as a parameter, which tells the function to write that message to the page.

You can pass parameters directly into a function, but that often gets tedious if you need to use the same value multiple times. Instead, you can use **variables** to make your life a little easier.

# Values

Variables let you store values so you can use them multiple times. So before we talk about variables, let's talk about values for a second.

You've already seen one type of value: **strings** of characters in `' '` single quotes, which you can pass in as a single value:

```javascript
document.write('Hello world!');
```

In this line of code, `'Hello world!'` is a string value that's being passed as a parameter into the `document.write()` function.

**Note:** In JavaScript, you can use `' '` single quotes or `" "` quotation marks to create a string value. Most people use `' '` single quotes though.

You can also have **numbers**, which are, well, numbers:

```javascript
document.write(42);
```

Notice that the number `42` does not have any `' '` single quotes around it. If it did, it would be a string, not a number! We'll see why that matters in a second.

# Operators

Operators are math symbols that you've probably already seen, like `+`, `-`, `*`, and `/`. There are other types of operators in JavaScript, but let's talk about these mathematical operators first.

You can apply an operator to two values to get a third value, and you can then use that new value just like you can use any other value. That might sound complicated, but it means that you could rewrite the above line of code like this:

```
document.write(21 * 2);
```

This line of code takes two number values: `21` and `2`, and multiplies them together to get the value `42`. Then it passes the value `42` into the `document.write()` function as a parameter.

Operators work how you might expect with numbers. But you can also use the `+` operator with strings!

```javascript
document.write('Hello ' + 'world!');
```

This line of code takes two strings, `'Hello '` and `'world!'`, and appends them together to create a third string, `'Hello world!'`, which it then passes as a parameter into the `document.write()` function.

{% include codepen-new.html slug-hash="WNXewLw" height="225" autoplay=true %}

Remember how I said you shouldn't wrap number values in `' '` single quotes?

What do you think this line of code will do?

```javascript
document.write('42' + '37');
```

Try copying this line of code into the above code editor to test it out!

This line of code takes two strings, `'42'` and `'37'`, and tells JavaScript to append them together. The result is a third string with the value `4237`, which is probably not what you wanted! This is why it's important to only use `' '` single quotes with strings, not with numbers.

## Type Coercion

What do you expect this line of code to do?

```javascript
document.write('2' * '3');
```

This line of code uses the `*` multiplication operator on two strings. That shouldn't work! But if you run the code, you'll see that it writes `6` to the page.

That's because JavaScript contains a feature called **type coercion**, which means that JavaScript will try to guess what type you wanted if something doesn't make sense. JavaScript's guesses can be really confusing, so try to avoid it by always using the right type in the first place: use `' '` single quotes for strings, but not for numbers!

# Creating Variables

Now you know more about values, so let's get back to talking about variables.

Variables let you create a name that points to a value.

To create a variable, use the `let` keyword, then give your variable a name, then use the `equals` operator to set it equal to a value. After you create a variable, you can use its name whenever you want to use the value it points to!

```javascript
let answer = 42;
document.write('The answer to life, the universe, and everthing is ' + answer);
```

That might not seem very useful yet, but it's one of the most important building blocks of code. Here are a couple reasons why:

## Reusing Variables

Let's say you have this code:

{% include codepen-new.html slug-hash="ZEazZZz" height="225" %}

This code passes the same value into three different functions. Now let's say you wanted to change the value to `'Hello your_name!'` instead. You'd have to make that change in three different places:

```javascript
console.log('Hello Ada!');
document.write('Hello Ada!');
alert('Hello Ada!');
```

That might not seem like a big deal in this example, but it gets even more annoying when your code is longer.

Instead, you could create a variable that points to the message. Now you can use that variable instead of using the same message three times:

```javascript
let message = 'Hello Ada!';

console.log(message);
document.write(message);
alert(message);
```

Now if you wanted to change the message to `'Hello your_name, how are you?'` then you'd only need to change your code in one place instead of three. The rest of your code can stay the same, which makes your job easier.

```
let message = 'Hello Ada, how are you?';

console.log(message);
document.write(message);
alert(message);
```

## Storing Data

So far, you've seen a few functions, like `console.log()`, `document.write()`, and `alert()`. All of these functions **do** something, but there's another kind of function that **returns** something.

For example, the `prompt()` function shows a dialog that asks the user for some input. When the user types something and presses okay, the `prompt()` function **returns** what the user created. You can then store that in a variable and use it in your code!

{% include codepen-new.html slug-hash="xxPKNPL" height="250" %}

Think about how you'd do this without a variable. You'd need to ask the user for their name every time you wanted to use it, which would get very annoying for both you and your users!

# let vs const vs var

In my examples above, I used the `let` keyword to create a variable. If you're new to JavaScript, I recommend always using the `let` keyword. But there are also a few other ways to do it that you'll see in other people's code, so I wanted to mention them here.

## const

The `const` keyword is similar to `let`, except after you create a variable, you can't change it!

This code works fine, and will print `'Goodbye'` to the console:

```javascript
let message = 'Hello';
message = 'Goodbye';
console.log(message);
```

But this code will give you an error:

```javascript
const message = 'Hello';
message = 'Goodbye';
console.log(message);
```

The `const` keyword is used as a safeguard to make sure you don't accidentally change a variable after you create it. You can use it if you want, and it's often used in "real" code, but for now I'd recommend using `let` everywhere.

## var

The `var` keyword is also similar to `let`. It has some subtle differences, but for now all you need to know is that `var` is the **old** way to create a variable. The `let` and `const` keywords were introduced in 2015, and nowadays nobody uses `var` anymore. You might still see it in old example code though!

## no keyword

It's also technically possible to create a variable without using any keyword:

```javascript
message = 'Hello';
console.log(message);
```

This works, but it has side effects that will make your life harder when you start defining your own functions. So for now, my advice is to always use `let` everywhere. When you're more comfortable with variables, you can start using `const` when you know you never want a variable to change values. But never use the `var` keyword or create a variable without any keyword!

# Homework

- Create a webpage that asks the user for three words, and then inserts those words into a story, which it displays in the page.
