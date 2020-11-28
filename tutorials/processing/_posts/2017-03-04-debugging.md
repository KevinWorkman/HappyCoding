---
layout: tutorial
title: Debugging
thumbnail: /tutorials/processing/images/debugging-6.png
tagline: How to fix errors in your code.
sort-key: 550
meta-title: Debugging Processing
meta-description: Learn how to fix errors in your code.
meta-image: /tutorials/processing/images/debugging-7.png
tags: [tutorial, processing, debugging]
lastUpdated: 2020-11-27
---

{% include toc.md %}

You've now learned about the [fundamentals of coding](/tutorials/processing/what-is-programming) in Processing, and now you're writing your own code.  That's great!

No matter where you are in your coding journey, whether you're just starting out or if you've been coding for years, you're going to find yourself in situations where your code is behaving differently from what you expected. That's totally normal! This happens to every single programmer, every single time they write code.

This tutorial introduces some approaches and tools for understanding and fixing your code, which is also called **debugging**.

# Debugging with Your Brain

The first (and best) debugging tool is something you already have: your brain!

It can be really frustrating when you encounter a situation where your code is behaving differently from what you expected. But instead of throwing the computer out the window, try these approaches.

**Be specific.** What were you expecting to happen? What exactly happened instead? Don't say something like "I wanted to draw a flower but it's not working". Instead, say something like "I expected a red circle to show in the upper-left corner, but instead I only see half a circle at the top." Being more specific helps you narrow down exactly what's happening, and later it'll help you talk to other people about your code.

**Read your code line by line.** This is one of the most important skills you need to learn to be a good coder. Double check that the code you wrote is the code you meant to write, just like you’d proofread anything you were writing. Check for issues like spelling, capitalization and that you're using the right keywords and symbols (see [compiler errors](#compiler-errors) below).

**Use a piece of paper and a pencil** to write down the value of each variable, and to draw stuff to the “screen” as you read through your code. Don't assume you know what the code does, and take it one line at a time. Reading it out loud can help.

# Processing editor

The Processing editor lets you write and run your code, and it comes with a few handy tools for debugging as well.

 As you write your code, if it has a compiler error (more on that in the next section), your first clue will be a **red underline** underneath any code that your computer can't understand.

You can click on these underlined words for more information about why Processing is confused.

![processing editor](/tutorials/processing/images/debugging-1.png)

(This code forgot the `()` after `draw`.)

The second tool is the **Console** that displays at the bottom of the editor. When you run your code, if it contains a syntax error or a runtime error, the error message will show up in the console.

![processing editor](/tutorials/processing/images/debugging-2.png)

(This code forgot to give `message` a value.)

Remember, getting errors is a normal part of coding! Next, let's talk about different types of errors and how to figure them out.

# Compiler Errors

Unlike human languages, code doesn't leave a lot of room for mistakes. If you spell something wrong in a human language, most people will probably still understand you. But computers aren't that smart.

**Syntax** is a fancy word for the keywords and symbols you can use in code. If your code only uses valid keywords and symbols in an understandable order (in other words, if your syntax is valid), then the computer will be able to understand your code. But if you use a keyword or a symbol that the computer doesn't recognize (in other words, if your syntax is not valid), then the computer will instead give you an error.

This type of error is called a **compiler error** or a syntax error. Compiler errors include issues like forgotten semicolons or misspelled variables, as well as violating the rules of Processing, like trying to store a `String` value in an `int` variable. When you have a compiler error, Processing can't run your code, because it doesn't understand what you're telling it to do.

Here's an example that contains a compiler error.

```java
void setup() {
  size(300, 300);
}

void draw {
  background(50); 
}
```

Type this code into your Processing editor, and notice a couple things:

- The Processing editor shows a red line under the `void draw {` line.
- If you click the red line, a message saying `Missing a semicolon ";"` appears.
- If you try to run the code by pressing the play button, the editor shows a red message saying `unexpected token: draw`.

![processing editor](/tutorials/processing/images/debugging-9.png)

You can't run the code, so no window pops up, because a compiler error prevents the computer from understanding what you want it to do.

For this specific example, the error is happening because this code is missing the parentheses `()` after `draw`. It should be this instead:

```java
void setup() {
  size(300, 300);
}

void draw() {
  background(50); 
}
```

Learning all of the syntax rules about a language can be pretty overwhelming when you first start coding, but over time you learn **why** the rules exist, which makes them easier to remember. (For example, you need `()` here because some functions take arguments, which go inside the parentheses!)

# Runtime Errors

Even if your syntax is valid, you can still encounter errors when you run your code. These **runtime** errors usually happen when your code tries to do something that the computer doesn't understand. Here's an example:

```java
String message;

void setup() {
  size(300, 100);
  textSize(36);
}

void draw() {
  background(64);
  text(message, 20, 50);
}
```

This program defines a `message` variable, and uses the `text()` function to draw that message to the screen. Type this into the Processing editor, and notice that you don't see any compiler errors, because this is all valid syntax. But when you run the program, a window pops up, but no text is displayed! And you get an error:

![NullPointerException in the Processing editor](/tutorials/processing/images/debugging-2.png)

The Processing editor highlights the `text(message, 20, 50);` line and shows `NullPointerException` in the console.

`NullPointerException` is one of the most common runtime errors, and it's caused by using a variable that you haven't given a value. In this case, the code forgot to give the `message` variable a value.

You could fix this error by making sure the variable is defined before you use it:

```java
String message;

void setup() {
  size(300, 100);
  textSize(36);
  message = "Happy Coding";
}

void draw() {
  background(64);
  text(message, 20, 60);
}
```

![Happy Coding](/tutorials/processing/images/debugging-3.png)

There are many other types of runtime errors, but the general process for understanding them is the same: look at the line highlighted in the editor to find out which line of code triggered the error, and look in the console to see what error was triggered.

# Logic Errors

In addition to syntax and runtime errors, there's another type of error that's not really an error at all. We have a name for the situation when your code runs without encountering a syntax or runtime error, but still does something different from what you expected. We call this a **logic error**.

Logic errors are probably the most common type of error, and they're usually caused by a typo or by an incorrect assumption about how something works. In other words, logic errors happen when there's a problem in the logic in your code.

The frustrating thing about computers is that they do exactly what you tell them to, even if what you told them to do didn't make sense, or wasn't what you actually intended. So it's up to **you** to make sure your code is telling the computer exactly what you want it to do.

Here's an example:

```java
float circleX = width / 2;
float circleY = height / 2;

void setup() {
  size(300, 300);
}

void draw() {
  background(64);
  ellipse(circleX, circleY, 100, 100);
}
```

Read through this code line by line and try to guess what it'll do when you run it.

You might expect it to draw a circle in the middle of the screen since it's using `width / 2` and `height / 2` to find the center. But if you run it, you'll see something like this:

![circle in upper-left corner](/tutorials/processing/images/debugging-5.png)

Instead of showing a circle in the middle of the screen, the circle shows up in the upper-left corner. This isn't a syntax error or a runtime error, but there's a logic error in the code. What's going on?

In this case, it's because the code is calculating the `circleX` and `circleY` variables **before** the window is created. If you're using `width` and `height`, that code needs to be **after** the call to `size()`:

```java
float circleX;
float circleY;

void setup() {
  size(300, 300);
  circleX = width / 2;
  circleY = height / 2;
}

void draw() {
  background(64);
  ellipse(circleX, circleY, 100, 100);
}
```

![circle in center](/tutorials/processing/images/debugging-8.png)

# Researching Errors

So far you've seen a couple example errors, but there are many different kinds of syntax and runtime errors. What should you do when you encounter an error you've never seen before, or an error you don't understand?

The first thing you should do is take a step back and ask yourself what you expected to happen, and what happened instead. Try to be as **specific** as possible. What error message are you getting? What line did the error happen on? What did you expect your code to do? What exactly did it do instead?

**Read** the error message and try to understand what it's telling you. Error messages can be a little cryptic at first, but they often tell you exactly what's going wrong.

**Search** for the error message or for the unexpected behavior. Paste the error message into google. Try to find posts on Stack Overflow, [the Processing forums](https://discourse.processing.org/), or other websites that mention your error, and read through those to get a better understanding of what's going on.

Sometimes it can help to search for only **parts** of the error message. For example, if the error message mentions a variable name that you created, try leaving that variable name out of your search and only including the rest of the error message. You can also wrap the error message in `" "` quotation marks to look for an exact match. You can also add "Processing" or Java" to your search for more specific results.

Doing this type of research is, again, totally normal! Writing code is one part of the process, but debugging, researching, and reading through documentation are just as important.



# Print Statements

Another tool that can help you understand why your code is behaving differently from what you expected is the `println()` function.

The `println` function prints whatever you pass into it to the console. Try running this code and then looking in the console:

```java
void setup() {
  size(300, 300);
}

void draw() {
  background(64);
  
  println(frameCount);
}
```

This code prints the value of the `frameCount` variable to the console. The `frameCount` variable holds how many frames have elapsed since the start of the sketch, so you should see an increasing number in the console.

The `println` function can also help with debugging. For example, let's say you were still trying to figure out why this code generates a `NullPointerException`:

```java
String message;

void setup() {
  size(300, 100);
  textSize(36);
}

void draw() {
  background(64);
  text(message, 20, 50);
}
```

![NullPointerException in the Processing editor](/tutorials/processing/images/debugging-2.png)

If you weren't sure what was going on, you could add a call to `println()` to check your assumptions.

```java
String message;

void setup() {
  size(300, 100);
  textSize(36);
}

void draw() {
  background(64);
  
  println("message: " + message);
  
  text(message, 20, 50);
}
```

Now when you run the code, the value of the `message` variable is printed to the console, which can help you understand exactly what the code is doing.

You can use `println()` statements to figure out the values of variables, which functions are being called in what order, how many times a loop is iterating, etc.

# Debugging with the Debugger

You can also use the debugger that comes with the Processing editor. The debugger is a tool that lets you watch your code run one line at a time.

To activate the debugger, press the debug button- the butterfly-looking circle in the upper-right corner of the Processing editor. That brings up a new `Variables` window, which is blank for now.

![debugger](/tutorials/processing/images/debugging-4.png)

Now that the debugger is activated, you can use it by following these steps:

- First, set a **break point** by clicking a line number. The line number should turn into a diamond symbol.
- Now press the play button to run your code using the debugger.
- The debugger will pause the execution of your code when it reaches your break point.
- Then you can use the **step** button to walk through the code one line at a time.
- The `Variables` window will show the value of every variable as you step through your code.

The whole process looks like this:

![Processing debugger gif](/tutorials/processing/images/debugging-5.gif)

The debugger lets you run your code in "slow motion" and watch the values of variables change as the code runs. Again, the goal of debugging is to figure out exactly where the code does something different from what you expected.

# Work in Small Pieces

One final tip I'll leave you with is to start small and test often. If you try to write your whole program at once and then only run it when you're done, you're guaranteed to get a ton of errors.

[Programming is a process of breaking a problem down into smaller pieces, and approaching each of those pieces one at a time.](/tutorials/how-to/program)

Instead, test your code by running it and checking that it's doing what you expected as often as you can. It's not unreasonable to re-run your code after **every line** you write. Don't wait until you think your code is done! Test that each line is doing what you expected. Use print statements to check the value of variables.

It's much easier to debug an error when you know it's on the line of code you just wrote. It's a lot harder if you wait until you have dozens of lines of code to debug!

Another tactic you can use when you encounter an error or an unexpected behavior is to **isolate** the code that's confusing you. **Start with a new sketch** and only add code that's directly related to the problem. Code that focuses on the problem is much easier to debug than an entire program that includes a bunch of unrelated code. On the internet, you might hear these isolated programs called an [MCVE](https://stackoverflow.com/help/minimal-reproducible-example) or an [SSCCE](http://sscce.org/).

For example, if your code loads 100 images, gives them random positions and speeds, and has them all bouncing off each other, but you can't get the bouncing to work right, then you should start with a simpler sketch:

- Instead of images, use rectangles.
- Instead of showing 100 of them, only show 2 of them.
- Instead of giving them random positions and speeds, use hard-coded values.

This small example program should still show the same problem as your main sketch. But now it's much easier to debug, because you don't have to look at any of the code that has nothing to do with the problem.

 Half the time you'll figure out your problem while trying to narrow your problem down to a smaller example sketch.

# Other Debugging Tips

All of the above approaches will help you debug your code, but 'd be remiss if I didn't mention a couple other debugging tactics!

## Rubber Duck Debugging

Another really useful approach for debugging is to try explaining your problem out loud. You don't even have to be talking to another person! A rubber duck will do just fine. 🦆

[Rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging) is the process of explaining your problem to an inanimate object (or a pet, or a houseplant). By restating your problem in your own words, you force your brain to think about it from a different perspective. This often gives you that "ah-ha!" moment that helps you figure out your problem. (This is also why you'll often figure out your problem when you start writing a question to post in a forum or on Stack Overflow.)

You can learn more about rubber duck debugging [here](https://rubberduckdebugging.com/) and [here](https://blog.codinghorror.com/rubber-duck-problem-solving/).

## Take a Break

If you're stuck on a particularly confusing piece of code, one of the best things you can do is get away from the computer. Go on a walk, pet your cat, and try to clear your head. You'll be amazed at how many solutions you end up thinking of in the shower.

# Get Help

You aren't alone! If you're still having trouble with an error or with code that's doing something different from what you expected, you can reach out for help!

Try to isolate your problem to a small example program and come say hello on [the Happy Coding forum](https://forum.happycoding.io)!