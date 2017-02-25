---
layout: tutorial
title: Hello World
thumbnail: /tutorials/java/images/hello-world-3.png
tagline: Write, compile, and run your first Java application.
sort-key: 200
meta-title: Hello World
meta-description: Write, compile, and run your first Java application.
meta-image: /tutorials/java/images/hello-world-4.png
tags: [tutorial, java]
---

Now that you [installed Java](/tutorials/java/setup), it's time to write some code!

This tutorial assumes that you've already been through [the Processing tutorials](/tutorials/processing) and understand what code is, and what objects and classes are.

In Processing, we used the Processing editor to write and run our sketches. The Processing editor makes that easy, but it hid a lot of the details from us. To better understand what's going on behind the scenes, we're going to create our files using a basic text editor, and we're going to compile and run our files using the command prompt. Eventually we'll use a fancier editor, but for now let's stick with doing things the "manual" way.

## Creating a `.java` File

Open up your basic text editor. I use [jEdit](http://www.jedit.org/), but you can use Notepad or whatever came with your computer. You **don't** want to use a fancy word processor like Microsoft Word though, because that kind of editor adds formatting and stuff that we don't want in our code. Just use a basic text editor!

Type this into your editor:

```java
public class HelloWorld{
	public static void main(String[] args){
		System.out.println("Happy Coding!");
	}
}
```

And then save that to a file named `HelloWorld.java`. (Note that you can save files with any extension, and they're still just basic text files. But we need to use the `.java` extension so the next step works.)

## Compiling

Even though we're writing code, the computer can't actually understand the code yet. So we have to translate it into a language that the computer does understand. This is called **compiling** the code. The Java Development Kit (the JDK) contains a bunch of programming tools, and one of them is a **compiler** that converts `.java` files (which are just basic text files that contain Java code) into files that the computer can run.

So now that you have a `.java` file, you need to **compile** it.

- Open the command prompt and `cd` to the directory that contains the `.java` file.
- Type `javac HelloWorld.java` and press enter.

That should create a new file named `HelloWorld.class` in that same directory.

This is a Java class file, and it contains [Java bytecode](https://en.wikipedia.org/wiki/Java_bytecode), which is instructions that the computer (specifically, the Java runtime environment) can read and execute. You can try to open the `.class` file in your basic text editor, but it will look like gibberish- that's because it's designed for the computer to understand, not humans!

## Running

Now that you have a `.class` file, you can tell Java to run that file. From the command prompt, type `java HelloWorld` and press enter. Notice that you don't include the `.class` part!

That command runs our program, which for now just prints a message to the console. Here's what the whole process looks like from start to finish:

![command prompt](/tutorials/java/images/hello-world-1.png)

## Java Classes

Remember that you can [create a class](/tutorials/processing/creating-classes) to organize variables and functions into a single unit.

In Processing, you can also have "sketch-level" code: variables and functions that aren't inside a class. But Java doesn't have sketch-level code, so everything must be inside a class!

That's why our file starts with a class definition:

```java
public class HelloWorld{
```

The `public` keyword just means that other classes can uses this class. We'll talk more about this later.

## The `main()` Function

Remember that Processing automatically calls the `setup()` and `draw()` functions for you, so any code you put in them is run for you. Instead of `setup()` and `draw()`, Java uses a function named `main()`. 

The `main()` function is `public` (which means other classes can call it) and `static` (we'll talk more about what that later), and it doesn't return anything (it has a `void` return type). It also takes a `String[]` array as an argument. So its declaration looks like this:

```java
public static void main(String[] args){
```

Finally, inside the `main()` function we place any code we want to run when the program is executed. For now we're just printing out a message to the console (the command prompt), so we just call the `System.out.println()` function:

```java
System.out.println("Happy Coding!");
```

Putting it all together, it looks like this:

```java
public class HelloWorld{
	public static void main(String[] args){
		System.out.println("Happy Coding!");
	}
}
```

## Command Line Arguments

(I'm assuming that you remember arrays from [the Processing arrays tutorial](/tutorials/processing/arrays). If you don't remember, you might want to read through that again.)

Notice that the `main()` function takes a `String[]` array argument. Let's write a program that prints out the values of that array:

```java
public class ArgsPrinter{
	public static void main(String[] args){
		System.out.println("args.length: " + args.length);
		for(int i = 0; i < args.length; i++){
			System.out.println("args[" + i + "]: " + args[i]);
		}
	}
}
```

Type this program into your basic text editor, save it as a file named `ArgsPrinter.java`, then open a command prompt to that directory. Type `javac ArgsPrinter.java` and press enter to compile that code into a class file, and then type `java ArgsPrinter` and press enter to run this code.

If you run this code, you'll notice that it just prints out one line:

```java
args.length: 0
```

So the `args` argument is just an empty array. That doesn't seem very useful!

**Command line arguments** are a way for a user to provide input to a command line program. They're usually just a set of words listed after the command. You've actually already used them! When you type `javac HelloWorld.java`, you're running the `javac` command and passing in `HelloWorld.java` as an argument.

So let's run the program again, and this time let's pass in **command line arguments** by adding them after the class name. Type this into your command prompt and press enter:

```
java ArgsPrinter one two three
```

This runs our `ArgsPrinter` program, and gives it command line arguments `one`, `two`, and `three`. If we hit enter, we see this:

```
C:\Users\Kevin\Desktop\HelloJava>java ArgsPrinter one two three
args.length: 3
args[0]: one
args[1]: two
args[2]: three
```

So, the `args` variable is an array that holds any command line arguments the user gives to the program. This is the most basic way we can get input from a user.

## The Java API

[The Java API](https://docs.oracle.com/javase/8/docs/api/) is a webpage that lists every class, function, and variable that you can use in Java. It's a lot like Processing's reference page, but the Java API is much, much larger.

This should be your first stop whenever you have a question about how something in Java works. This might seem overwhelming at first, but you don't have to know every class or memorize anything. Instead, you can search for a specific class and get more info about it when you need it.

For example, let's say you want to use the `ArrayList` class. Find the `ArrayList` class in the list on the left, then click it to get more info about it. That page will give you a general description and tell you about the constructors and functions you can call.

## Import Statements

Let's say you created a program that uses the `ArrayList` class (you remember the `ArrayList` class from [the Processing tutorials](/tutorials/processing/arraylists), right?). Type this code into your basic text editor and save it to a file named `ArrayListExample.java`:

```java
public class ArrayListExample{
	public static void main(String[] args){
		ArrayList<String> list = new ArrayList<String>();
		list.add("one");
		list.add("two");
		list.add("three");
		System.out.println(list.get(0));
	}
}
```

Now try to compile your program by opening a command prompt to the directory that contains this file, then typing `javac ArrayListExample.java` and pressing enter. You'll get an error:

```
C:\Users\Kevin\Desktop\HelloJava>javac ArrayListExample.java
ArrayListExample.java:3: error: cannot find symbol
                ArrayList<String> list = new ArrayList<String>();
                ^
```

We'll talk more about how to read this error later, but for now just know that this error says it can't find the `ArrayList` class. It's in the Java API, so what's going on?

In the Java API webpage, notice that the `ArrayList` class is inside the `java.util` package:

<img src ="/tutorials/java/images/hello-world-2.png" style="border: thin solid darkgray" />

This means that we have to **import** the class before we can use it. Import statements go at the top of our code:

```java
import java.util.ArrayList;

public class ArrayListExample{
	public static void main(String[] args){
		ArrayList<String> list = new ArrayList<String>();
		list.add("one");
		list.add("two");
		list.add("three");
		System.out.println(list.get(0));
	}
}
```

Now we can compile and run this code, and it works! Hooray! :tada:

Note that we didn't have to import the `System` class, because it's in the `java.lang` package (check for yourself by looking it up in [the Java API](https://docs.oracle.com/javase/8/docs/api/)!. Anything in the `java.lang` package does not need to be imported.

## Homework

- Explain in your own words what the `javac` and `java` commands do.
- Write a program that takes a single command line argument: the user's name. Print out a message saying hello to that name. What if the user provides their first and last name? Show a friendly error message if the user does not supply any command line arguments.
- Write a program that takes any amount of digits as command line arguments and prints out their total. So `java Adder 1 2 3` prints out `6`, and `java Adder 1 2 3 4` prints out `10`. Hint: if you need to convert a `String` value to an `int` value, find the `Integer` class in [the Java API](https://docs.oracle.com/javase/8/docs/api/) and look for useful functions.
