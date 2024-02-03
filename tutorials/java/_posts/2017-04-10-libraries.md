---
layout: post
title: Libraries
thumbnail: /tutorials/java/images/libraries-3.png
tagline: The power of other people's code.
sort-key: 700
meta-title: Java Libraries
meta-description: Learn how to use Java libraries.
meta-image: /tutorials/java/images/libraries-3.png
tags: [tutorial, java, libraries]
---

{% include toc.md %}

So far, we've relied on the classes that come standard with Java, which you can read about in [the Java API](https://docs.oracle.com/javase/8/docs/api/). These classes were written by the developers who create Java itself, and you can use them on any computer that has Java installed.

However, you aren't limited to just using those classes. You've already seen how to create your own classes that interact with each other. You can also use classes that have been written by other people!

A Java library is just a collection of classes that have been written by somebody else already. You download those classes and tell your computer about them, and then you can use those classes in your code. This lets you expand what Java can do and rely on code that other people have tested instead of doing everything yourself.

## Finding a Library

Before you can use a library, obviously you have to decide what library you want to use! There are a ton of libraries out there, so how do you know which one to use?

Like most things in programming, the answer is Google. Doing a search for `"Java XYZ library"` where XYZ is what you want to do will usually return a ton of results. For example, let's say we want to create a Java program that shows graphs. We'd start by Googling "Java graph library" and we'd get a bunch of results. From there we'd go through those results until we found one that helped us with our goal. When trying to decide on a library, don't be afraid to try them all! Write simple programs using each, and figure out which one will work best for you.

The rest of the tutorial will use the [JFreeChart](http://www.jfree.org/jfreechart/devguide.html) libary, which lets you add interactive charts and graphs to Swing applications.

## Downloading `.jar` Files

You've probably seen `.zip` files before, which are **archive files**, or files that hold other files. Similarly, `.jar` files are another kind of archive file, but they usually contain `.class` files. Java libraries usually come packaged in `.jar` files. (Actually, they're usually in `.zip` files that contain `.jar` files, which contain `.class` files!)

Anyway, now that we've decided on a libary to use, the next step is to download it. Library websites usually contain a download page, and JFreeChart's is [here](http://www.jfree.org/jfreechart/download.html).

Download the `.zip` file and extract it wherver you want. That gives you a directory that contains a bunch of `.jar` files.

![JFreeChart jar files](/tutorials/java/images/libraries-1.png)

(Note that the version numbers in the file name might change by the time you're reading this.)

Remember where this file is located! I extracted the `.zip` file onto my desktop, so it's located at `C:\Users\Kevin\Desktop\jfreechart-1.0.19\lib` for me.

## Library Documentation

By now, you should be pretty familiar with looking at [the Java API](https://docs.oracle.com/javase/8/docs/api/), tutorials, and doing Google searches. Using a library is no different: one of the first steps to working with a library is reading through its documentation to understand what it can do.

The JFreeChart API is available [here](http://www.jfree.org/jfreechart/api/javadoc/index.html). It lists every class in the library, as well as the variables and functions they contain. That can be a lot, but your goal isn't to read the entire thing! Just skim the classes, get a general idea of what your options are, and then start focusing on stuff that sounds like what you're looking for.

Of course, Google is always your best friend. Googling something like `"JFreeChart bar chart"` will return a bunch of results. Try not to just blindly copy-paste code you find on the internet though. Instead, try to understand what the code is doing!

You can also always ask questions in [the forum](http://forum.HappyCoding.io).

## Classpath

When we compile and run Java files, by default Java just looks for those files in the current directory. For example:

```
javac MyProgram.java
```

If we do this command, then the Java compiler looks for classes in the current directory. So if `MyProgram.java` references another class named `MyDependency`, then it looks in the current directory for `MyDependency.class` or `MyDependency.java`. This is how you can compile multiple classes by just compiling the main file.

However, our library files are inside a `.jar` file, not in the current directory! If we want to use the library classes, we have to tell Java where those files are located.

In other words, we have to set the **classpath**, which is a list of places that Java will look for class files. We do this by specifying a list of paths as the `-cp` argument to a Java command. For example:

```
javac -cp .;path/to/first/jarFile.jar;path/to/second/jarFile.jar MyProgram.java
```

This command runs the Java compiler, and passes it a `-cp` argument that contains three entries:

- `.` This adds the current directory to the classpath, since we probably want Java to keep looking there.
- `path/to/first/jarFile.jar` This adds a `.jar` file to the classpath. Any `.class` files inside that `.jar` file are now usable in our program!
- `path/to/second/jarFile.jar` This adds a second `.jar` file to the classpath.

(I'm on Windows, so my classpath separator is a `;` semicolon. Check the settings for your OS! Linux usually uses a `:` colon, for example.)

Now if the code in `MyProgram.java` references a class inside one of the `.jar` files, Java will know where to look! We'll see a specific example in a second.

## Using Library Classes

Let's say after consulting the documentation for our libary and doing a bunch of Google searches, we have an idea of how to accomplish our goal. The beauty of Java libraries is that you can use them just like any other regular Java classes, because that's what they are!

For example, here's a little program that uses the classes inside the JFreeChart library to create a bar chart:

```java
import javax.swing.JFrame;
import org.jfree.chart.ChartFactory;
import org.jfree.chart.ChartPanel; 
import org.jfree.chart.JFreeChart; 
import org.jfree.chart.plot.PlotOrientation;
import org.jfree.data.category.CategoryDataset; 
import org.jfree.data.category.DefaultCategoryDataset; 

public class MyChart {

	public static void main(String[] args){
		
		DefaultCategoryDataset dataset = new DefaultCategoryDataset();
		dataset.addValue(10, "Dogs", "Animals");
		dataset.addValue(42, "Cats", "Animals");
		dataset.addValue(25, "Lizards", "Animals");
		
		JFreeChart barChart = ChartFactory.createBarChart(
			"Animals Chart",
			"X Label",
			"Y Label",
			dataset,
			PlotOrientation.VERTICAL,
			true, true, false);
		
		ChartPanel chartPanel = new ChartPanel(barChart);
		
		JFrame frame = new JFrame("Chart Example");
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.add(chartPanel);
		frame.setSize(500, 500);
		frame.setVisible(true);
	}
}
```

This code first creates a `DefaultCategoryDataset`, which is a class in the JFreeChart library. It then uses that dataset to create an instance of `JFreeChart`, which handles all of the drawing and user interaction with the chart. That is added to a `ChartPanel` instance, which is a component that we can add to a Swing GUI. Finally, the code creates a `JFrame` that contains the chart and shows it.

Notice that we can use a mix of standard Java classes, library classes, and our own classes.

To compile this class, we need to specify the **classpath** so Java knows where to look for the library files. So, first you would open a command prompt to the directory that contains `MyChart.java` and then you would do this:

```
javac -cp ".;C:\Users\Kevin\Desktop\jfreechart-1.0.19\lib\jfreechart-1.0.19.jar;C:\Users\Kevin\Desktop\jfreechart-1.0.19\lib\jcommon-1.0.23.jar" MyChart.java
```

That might seem complicated, but really it's only specifying a classpath that contains three entries:

- `.` is the current directory.
- `C:\Users\Kevin\Desktop\jfreechart-1.0.19\lib\jfreechart-1.0.19.jar` contains the core JFreeChart classes.
- `C:\Users\Kevin\Desktop\jfreechart-1.0.19\lib\jcommon-1.0.23.jar` contains classes that JFreeChart depends on. That means that the creators of JFreeChart used this library to create their library, just like you're using JFreeChart to create your program!

That creates a `MyChart.class` file that you can now run. But you have to specify the classpath when running it too!

```
java -cp ".;C:\Users\Kevin\Desktop\jfreechart-1.0.19\lib\jfreechart-1.0.19.jar;C:\Users\Kevin\Desktop\jfreechart-1.0.19\lib\jcommon-1.0.23.jar" MyChart
```

Again, this command specifies a classpath that contains three entries and tells Java to run your class. The end result is a window that contains a bar chart:

![JFreeChart example](/tutorials/java/images/libraries-2.png)

We don't have to worry about drawing the chart ourselves; we can just let JFreeChart deal with it. We could also add fancier styling, user interaction, animation, etc. But the point is that we would use the classes in the library to do all the work for us.

## Organizing Library Files

It can be a little cumbersome to remember where all of our library `.jar` files are, especially if you're working with multiple libraries. So a common thing to do is add a subdirectory inside your main directory that contains the `.jar` files. So your directory structure would look like this:

- `MyChart/`
  - `MyChart.java`
  - `lib/`
    - `jcommon-1.0.23.jar`
    - `jfreechart-1.0.19.jar`

Now if we open up a command prompt to the `MyChart` directory, we can simplify our commands to use the relative paths to the `.jar` files instead:

```
javac -cp ".;lib\jfreechart-1.0.19.jar;lib\jcommon-1.0.23.jar" MyChart.java
java -cp ".;lib\jfreechart-1.0.19.jar;lib\jcommon-1.0.23.jar" MyChart
```

These commands are still just specifying a classpath that contains three entries, but it's a little easier to read since the `lib` directory is now inside our main directory.

We could also use a `*` wildcard character to point to both `.jar` files instead of listing each individually:

```
javac -cp ".;lib\*" MyChart.java
java -cp ".;lib\*" MyChart
```

Any of the above approaches are fine, and it really comes down to personal preference.

## Summary

Libraries allow you to expand your toolset using code that other people have written and tested, instead of [doing everything from scratch yourself](https://en.wikipedia.org/wiki/Reinventing_the_wheel). If there's a problem you're trying to solve, chances are somebody already wrote a library that helps you solve it!

Just like everything else with programming, the most important skill you need is the ability to do research: use Google, consult the documentation, look on [Stack Overflow](http://stackoverflow.com/). Put together small programs that test out your assumptions and isolate questions you have. [Break your problem down into smaller steps](/tutorials/how-to/program), and then take on those steps one at a time.

To use a library, you have to add it to your classpath, which you pass into the `javac` and `java` commands using the `-cp` argument. As long as you do that, you can use classes from a library exactly like you can use a regular Java class or a class that you create- they're all just Java classes. You can also mix libraries together!

## Homework

- Find an interesting dataset and visualize it with JFreeChart. Make your charts interactive!
- Find a library that lets you create a [Twitter bot](https://en.wikipedia.org/wiki/Twitterbot)!
