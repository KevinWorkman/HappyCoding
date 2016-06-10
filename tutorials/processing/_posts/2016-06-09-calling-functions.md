---
layout: post
title: "Calling Functions"
date: 2016-06-09
slug: calling-functions
test: "testing 123 abc"
---

#  [Basic Concepts](index.jsp)

## Calling Functions

Functions are how we tell the computer what to do, or how we ask the computer
for information. Different languages can have different functions, but the
idea is often the same: you call a function to perform tasks, or to get
information.

If you think of a function as a to-do list of instructions to carry out, then
calling a function is like handing the computer a to-do list and saying "go do
this list of instructions". Further, you can have multiple to-do lists
(functions), each with its name written at the top- that way you can say "go
do the to-do list titled 'daily chores' now". Functions can (and usually do)
call other functions, so you can think of a to-do list with another to-do
list's name as one of the tasks!

To call a function, you simply type its name, followed by a list of any
arguments it uses inside parentheses.

For example, to change the background color, you call the background()
function and give it a single number from 0-255 representing the brightness.

    
    
    void draw() {
    	background(0);
    }
    

Try changing the number to achieve different results.

### Function Overloading

The background() function has also been overloaded, meaning there is another
function with the same name that takes a different set of arguments.

    
    
    void draw() {
    	background(255, 0, 0);
    }
    

This form of the function takes three numbers: one for red, one for blue, and
one for green.

There are a bunch of predefined functions in Processing. You can see them in
the [Processing API](http://processing.org/reference/), which tells you how to
use each. For example, the
[ellipse()](http://processing.org/reference/ellipse_.html) function draws an
ellipse:

    
    
    void draw() {
    	ellipse(75, 50, 25, 25);
    }
    

Much of programming consists of calling different functions in a particular
order to achieve a desired goal. For example, can you guess what the following
program does?

    
    
    void draw() {
      background(0);
      
      fill(0, 0, 255);
      ellipse(25, 50, 25, 25);
      
      fill(255, 0, 0);
      ellipse(75, 50, 25, 25);
    }
    

Run it and find out!

### The println() Function

One of the most useful functions in any programming language is the println()
function. This function takes whatever argument you pass it and prints it to
the console. In Processing, the console is the black area at the bottom of the
Processing editor.

    
    
    void draw() {
    	println("Hello World!");
    	println(123);
    }
    

Note- The code inside the draw() function happens 60 times a second, so this
code will continually print stuff out.

The println() function might not seem very useful right now, but it will
become your best friend as you write more complicated programs. In fact, most
students learning programming in school only use the console functions instead
of a visual display! If that sounds boring to you, that's one of the reasons
we're using Processing to learn the basics.

### Exercises

  * What do each of the four numbers passed into the ellipse() function represent?
  * There are several other functions in the Processing Api: rect(), triangle(), line(), arc(), box(), sphere(). Try some of them out!
  * Using multiple calls to the line() function, draw a grid that might be used for a game like tic-tac-toe or checkers.
  * Using some of those functions, create a program that draws a flower, or a house, or a tree, or a giant killer robot... anything you want!

###  Next: [Variables](Variables.jsp)

