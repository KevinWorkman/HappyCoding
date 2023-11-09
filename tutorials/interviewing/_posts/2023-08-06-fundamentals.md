---
layout: tutorial
title: Fundamentals
thumbnail: /tutorials/interviewing/images/fundamentals-1.jpg
tagline: Your interviews might include a linked list, but they'll definitely include a for loop.
sort-key: 500
meta-title: Fundamentals
meta-description: Your interviews might include a linked list, but they'll definitely include a for loop.
meta-image: /tutorials/interviewing/images/fundamentals-1.jpg
previousPost: /tutorials/interviewing/picking-a-language
nextPost: /tutorials/interviewing/complexity
tags: [tutorial, interviewing]
forumExcerpt: Big tech interviews are infamous for their focus on complex data structure and algorithm questions. It's tempting to jump straight to studying the most advanced techniques you can find. But the most important technical concepts you can study are the fundamentals of your language. Here's an article that talks about the fundamental concepts used in technical interviews.
---

{% include toc.md %}

Big tech interviews are infamous for their focus on complex data structure and algorithm questions. It's tempting to jump straight to studying the most advanced techniques you can find. And there is some value in that kind of studying.

But the most important technical concepts you can study are the _fundamentals_ of your language. Make sure you have a strong grasp of concepts like for loops and if statements before you worry about anything else.

If that sounds surprising, think about it this way:

- Will your interviews require a linked list? Recursion? A graph? Maybe!
- Will your interviews require a for loop? An if statement? A helper function? Definitely!

You might assume you already know the fundamentals. And that's great! But keep in mind that you'll be coding without a code editor, without autocomplete, without a compiler, all while talking out loud as another person watches you write. With that in mind, it's probably a good idea to brush up on the fundamentals, even if you feel like you've already got a solid grasp.

# Hello World

Make sure you can create a hello world program with an entry point. For Java, that's this:

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
  }
}
```

This might seem obvious, but if you've been using an IDE to write code, you might not have actually written this in a while. And similar to how [we can't remember the things we see most often](https://www.psychologytoday.com/us/blog/metacognition-and-the-mind/201503/why-we-cant-remember-the-things-we-most-often-see) (try drawing a dollar, or a bike, or your car's dashboard without looking at it first), it's easy to forget code that you often get from autocomplete or as starting boilerplate in your IDE.

# Control Flow

After hello world, you should have a strong grasp on [control flow](https://en.wikipedia.org/wiki/Control_flow). Things like:

- if statements, and their friends switch and ternary
- for loops, while loops, "enhanced" loops, and statements like `continue` and `break`
- calling other functions from your code, and returning values from your functions

Again, this might seem obvious, but a surprising number of people _forget how to write a for loop_ when they get to the whiteboard. I don't blame them: interviews are a very stressful environment, and you can spiral into an internal debate about what comes after `for(int i = 0;` and then realize your interviewer has been staring at you for 30 seconds.

# Primitives

Have a good sense of Java's primitive types:

- `int` is one of the most common types you'll encounter.
- `boolean` is probably _the_ most common type you'll encounter. I'm struggling to come up with an interview question that doesn't include at least one if statement!
- `long`, `double`, and `float` are less common, but you should still be familiar with them.
- `char` has properties that are useful for dealing with single characters from strings. More on this in the next tutorial.
- `byte` and `short` are much less common, but remember they exist so you aren't caught off guard if they do pop up.

Know the mins and maxes for each numeric type, or at least a rough estimate. For example, `int` values have a min and max of `-2^31` and `2^31-1`, but `two point one billion something` is good enough for most cases. Be aware of floating point precision issues, as well as wrapper classes and their functionality.

Strings and arrays aren't primitives, but they're the most likely data types you'll encounter, so have a strong understanding of those as well. More on that in the next tutorial

# Object Oriented Programming

Be comfortable using objects in your code. This includes:

- Using classes from the standard Java API
- Creating your own classes to hold custom data
- Discussing and using concepts like inheritance

Similar to helper functions, helper classes can go a long way towards simplifying a problem. And make sure you're comfortable with concepts like interfaces vs implementations and classes vs instances.

# Exceptions

Know how to handle errors in your code, and how to throw errors when you get invalid input.

Know the difference between checked and unchecked exceptions, when to use each, and what has to change about your code for both.

When you're thinking about corner cases, don't ask your interviewer what you should do for invalid input. Tell them what you'd do, and ask them if they want to see the code.

# Data Structures

Many interview questions come down to using the correct data structure for the task at hand, so you should be very familiar with all of the data structures that your language offers.

For Java, that's the [Java Collections Framework](https://en.wikipedia.org/wiki/Java_collections_framework).

I'll talk more about specific data structures in later tutorials.

You should also be familiar with the built-in methods for sorting and organizing data, and their corresponding complexity. For example, `Collections.sort()` takes `O(n * log(n))` time. Bonus points if you can casually reference some of the implementation details from the [Java API docs](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/List.html#sort(java.util.Comparator)).

# New Language Features

Languages are constantly evolving as new features are released. Companies often look to new hires to stay up to date on the latest and greatest language changes. And chances are that your interviewer is at least a couple years behind, especially if they've been at the same company for a while. So including a newer feature in your code is a good way to prove that you know what you're talking about.

I'll admit to being nervous about providing a list of examples because it'll show how out of touch I am, but here are a few "newer" features of Java to keep in your back pocket:

- The `var` type, more formally "local type inference"
- Streams
- Arrow functions, a.k.a. lambda expressions
- Method references
- Text blocks
- Records

I'm not saying you should throw as many of these in your code as possible. Your code should still be readable and make sense, to both you and your interviewer. But casually mentioning that you're using a newer Java feature shows that you have an understanding of the language that goes beyond the syntax.

# Idiomatic Coding

You should also write *idiomatic* code. This is a little fuzzy, but it comes down to: are you using the language the way it was intended to be used? Are you *thinking* in the language? Or are you thinking in some other language and then translating it?

Here are a few examples of idiomatic code vs non-idiomatic code:

- Using custom classes to store related data instead of something like parallel arrays
- Using an enum to represent options instead of multiple booleans
- Using streams to process data instead of a bunch of for loops
- Using `StringBuilder` instead of concatenating a string inside a loop
- Using generics with your collections instead of storing non-generic Objects

The goal is to show that you're taking advantage of the language, instead of working against it.

# Practice Makes Perfect

This might seem like a lot, but the best way to practice the fundamentals is by writing code. That can be through Leetcode, or your own personal projects.

You'll also learn more if you force yourself to code in an editor with as few features as possible: no code generation, no autocomplete, no syntax highlighting. Because that's what you'll be using in an interview.

# Practice Questions

- [Pascal's Triangle](https://leetcode.com/problems/pascals-triangle-ii/)
- [Palindrome Number](https://leetcode.com/problems/palindrome-number/)
- [Length of Last Word](https://leetcode.com/problems/length-of-last-word/)
- [Find the Index of the first Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)
