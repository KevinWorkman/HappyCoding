---
layout: tutorial
title: Thread Safety
thumbnail: /tutorials/java-server/images/thread-safety-7.png
tagline: Safely handle multiple requests at the same time.
sort-key: 700
meta-title: Thread Safety
meta-description: Learn how to safely handle multiple requests at the same time.
meta-image: /tutorials/java-server/images/thread-safety-9.png
tags: [tutorial, java, server, threading]
---

*"A programmer had a problem. They thought, "I know, I'll solve it with threading!". has Now problems. two they"* - ancient proverb

We just learned how we can keep track of users by using sessions, so now our web apps can handle multiple users. An important thing to keep in mind is that uses will often be doing things at the same time! Think about it this way: you wouldn't want to have to wait until another user is done reading this tutorial before you can read it, would you? And in the real world servers can handle hundreds (or more) of requests per second, so our web apps have to handle multiple requests simultaneously.

Behind the scenes, the way this works is through threading. You can read [this tutorial](https://docs.oracle.com/javase/tutorial/essential/concurrency/) for a good background, but here are the basics:

- A thread is the thing that's running your code. (Behind the scenes it's using a `Thread` object which is just a standard Java class, and there's a lot more to it than that, but that's the most basic definition I could come up with.)
- Code you've seen so far has mostly used one thread. Your functions are called one after the other, in order.
- You can also use multiple threads, which allows you to run code *while other code is still running*.
- Threads run **concurrently**, meaning that code running on two different threads runs **at the same time**. (It's more complicated than that, but that definition works for now.)

Servlets use threads to handle multiple requests at the same time. For each request, a new thread is created, and the servlet function (like `doGet()` or `doPost()`) is called on that thread. And because the code is running on multiple threads, the requests are happening at the same time.

It's probably easier to just show you an example. Take a look at this servlet class:

```java
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ThreadingServlet extends HttpServlet {
	
	private int total = 0;
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.getOutputStream().println("<h1>Current total: " + total + "</h1>");
		response.getOutputStream().println("<form action=\"/total\" method=\"POST\">");
		response.getOutputStream().println("<input type=\"submit\" value=\"+10\">");
		response.getOutputStream().println("</form>");
	}
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		for(int i = 0; i < 10; i++){
			total++;
			
			// this just delays the code by 1 second each time, so the request takes 10 seconds
			try {
				Thread.sleep(1000);
			} 
			catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		
		response.sendRedirect("/total");
	}
}
```

This servlet class contains a single `int` variable named `total`. The `doGet()` function renders that total, along with a form that contains a button. Clicking that button will submit a `POST` request, which causes our `doPost()` function to be called. The `doPost()` function uses a `for` loop to increment the `total` variable `10` times. That's not a very smart way to add 10 to a variable, but that's not the point here. The only code that might be new here is this bit:

```java
// this just delays the code by 1 second each time, so the request takes 10 seconds
try {
	Thread.sleep(1000);
} 
catch (InterruptedException e) {
	e.printStackTrace();
}
```

Like the comment says, the `Thread.sleep()` function pauses the current thread, in this case for one second at a time. It's wrapped in a `try` block because it can throw an `InterruptedException` (we learned about catching checked exceptions in [this tutorial](/tutorials/java/errors)), but really all this code does is make the request take longer to complete. This is to simulate a more complicated request that takes longer to complete, like storing a file or making a big change to a database.

Now all we need is a `web.xml` file to map the `/total` URL to our servlet:

```xml
<web-app
	xmlns="http://xmlns.jcp.org/xml/ns/javaee"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
		http://xmlns.jcp.org/xml/ns/javaee/web-app_3_1.xsd"
	version="3.1">

	<servlet>
		<servlet-name>ThreadingServlet</servlet-name>
		<servlet-class>ThreadingServlet</servlet-class>
	</servlet>

	<servlet-mapping>
		<servlet-name>ThreadingServlet</servlet-name>
		<url-pattern>/total</url-pattern>
	</servlet-mapping>

</web-app>
```

Run that on your server, and you should see this:

![total is zero](/tutorials/java-server/images/thread-safety-1.png)

Click the button, and notice that the request takes 10 seconds to complete. After 10 seconds, you should see this:

![total is ten](/tutorials/java-server/images/thread-safety-2.png)

Hopefully that makes sense so far. We're only executing one request at a time, so our code works exactly how you'd expect it to. If you just click the button and wait for the request to finish, you'll only ever see a multiple of 10. Click the button again and you'll see 20, then 30, 40, etc.

Where this gets interesting is when you execute more than one request at a time. To do this, click the button, and then **while the request is being executed**, quickly open a new tab to the `/total` URL. You'll see something like this:

![total is thirteen](/tutorials/java-server/images/thread-safety-3.png)

Notice that the total is no longer a multiple of ten! Here's what's happening:

- You navigate to the page, which sends a `GET` request to the server. This creates a thread, which calls our `doGet()` function, which renders 0 to the page.
- You click the button, which sends a `POST` request to the server. This creates a thread, which calls our `doPost()` function, which adds 1 to the total, then 1 again, then again... until it has added 10 to the total.
- Then the code redirects you back to the page, which sends another `GET` request, creates another thread, and renders 10 to the page.
- Now you click the button again. This sends another `POST` request, creates another thread, and calls our `doPost()` function. It adds 1 to the total, then 1 again...
- **This is where things get interesting:** in a new tab, you navigate to the page. This sends a `GET` request to the server, which creates another thread. This thread is executed at the same time as the thread that's still running the `POST` request! So you catch the `total` variable an "in-between" state, and it renders 13 to the page.
- Then the `POST` request completes, and you'll see 20 is rendered to the first tab.

This is called a [race condition](https://en.wikipedia.org/wiki/Race_condition), because the result depends on the order of the instructions being carried out by different threads. You don't really have to understand exactly how threads work, but the point is that multiple requests can happen simultaneously. This means that your data can be accessed in ways you didn't plan for, which can lead to unexpected behaviors.

## Thread Safety

Now we understand the problem, so let's talk about the solutions. There are a ton of different ways to make sure your code works when multiple threads are running it: in other words, to make your code **thread-safe**. This is a [huge topic](https://en.wikipedia.org/wiki/Thread_safety) and can get very complicated, but I'll try to outline a few simple approaches that will solve a lot of the most common problems.

## Synchronization

Let's look at another example:

```java
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BalanceServlet extends HttpServlet {

	private int balance = 15;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.getOutputStream().println("<h1>Current balance: " + balance + "</h1>");
		response.getOutputStream().println("<form action=\"/balance\" method=\"POST\">");
		response.getOutputStream().println("<input type=\"submit\" value=\"-10\">");
		response.getOutputStream().println("</form>");
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		//first check whether we have enough
		if(balance > 10){

			//let's pretend the request takes ten seconds to complete
			try {
				Thread.sleep(10*1000);
			} 
			catch (InterruptedException e) {
				e.printStackTrace();
			}

			//make a withdrawal
			balance -= 10;
		}

		response.sendRedirect("/balance");
	}
}
```

This servlet class contains a `balance` variable, and its `doGet()` function renders a form that shows the balance along with a `-10` button. The `doPost()` function checks whether the balance is greater than 10, and if it is, subtracts 10 from it. That means the user should never be able to make their balance go below zero, right?

As you might guess, threading complicates this code, and in fact a user can end up with a balance below zero.

- The user loads the `/balance` URL. This shows that the balance is 15.
- The user clicks the `-10` button. The code then checks whether the balance is above 10, which it is.
- The code then does some processing that takes ten seconds.
- In that time, the user opens up a new tab to the `/balance` URL. The balance is still 15, because the first withdrawal request hasn't completed yet.
- The user clicks the `-10` button in the new tab. The code checks whether the balance is above 10, which it is.
- Now the second request does some processing that takes 10 seconds.
- The first thread then finishes the processing, subtracts 10 from the balance, and redirects back to the `/balance` URL. The balance is now 5.
- The second thread then finishes the processing, subtracts 10 from the balance, and redirects back to the `/balance` URL. The balance is now -5!

![balance is -5](/tutorials/java-server/images/thread-safety-4.png)

This is a simplified example, but this mirrors a ton of real-life problems: not just withdrawing credits from an account, but also stuff like using limited server resources (like database connections) or modifying data structures that are accessed by multiple users.

The problem is caused because the `if` statement that checks the balance and the `balance -= 10;` withdrawal line need to happen together. We need the logic of `check balance > processing > withdrawal` to work as a single unit that can't be interrupted. But because multiple threads are running the code, we're getting sequences like `check balance > check balance > processing > processing > withdrawal > withdrawal`.

We can tell our code to treat a block of code as an "uninterruptible" sequence using a **synchronized block** that only one thread can access at a time. To create a synchronized block, use the `synchronized` keyword, followed by an object in parentheses (the `this` keyword works fine), followed by the code you want to synchronize inside `{}` curly brackets. That might sound complicated, but it looks like this:

```java
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BalanceServlet extends HttpServlet {

	private int balance = 15;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.getOutputStream().println("<h1>Current balance: " + balance + "</h1>");
		response.getOutputStream().println("<form action=\"/balance\" method=\"POST\">");
		response.getOutputStream().println("<input type=\"submit\" value=\"-10\">");
		response.getOutputStream().println("</form>");
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		// only one thread can access this block at a time!
		synchronized(this){
			//first check whether we have enough
			if(balance > 10){
	
				//let's pretend the request takes ten seconds to complete
				try {
					Thread.sleep(10*1000);
				} 
				catch (InterruptedException e) {
					e.printStackTrace();
				}
	
				//make a withdrawal
				balance -= 10;
			}
		}

		response.sendRedirect("/balance");
	}
}
```

Now our `doPost()` function uses a synchronized block to treat our whole `if` statement as one uninterruptible sequence. More specifically, **only one thread can access this block at a time.** So now our web app works like this:

- The user loads the `/balance` URL. This shows that the balance is 15.
- The user clicks the `-10` button. The server creates a thread that calls the `doPost()` function.
- The code hits the synchronized block. No other thread has entered it yet, so the code continues.
- It then checks whether the balance is above 10, which it is.
- The code then does some processing that takes ten seconds.
- In that time, the user opens up a new tab to the `/balance` URL. The balance is still 15, because the first withdrawal request hasn't completed yet.
- The user clicks the `-10` button in the new tab. The server creates a second thread that also calls the `doPost()` function.
- This second thread hits the synchronized block. But the first thread is already inside it, so this second thread can't continue. It starts waiting.
- The first thread then finishes the processing, subtracts 10 from the balance (which is now 5), exits the synchronized block, and redirects back to the `/balance` URL.
- Now that the first thread has exited the synchronized block, the first thread can continue. It checks whether the balance is above 10, but it's only 5, so the withdrawal is not executed!
- The second thread then exits the synchronized block and redirects back to the `/balance` URL. The balance is still 5!

It's also possible to synchronize entire functions. So we could rewrite our code to look like this:

```java
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class BalanceServlet extends HttpServlet {

	private int balance = 15;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		response.getOutputStream().println("<h1>Current balance: " + balance + "</h1>");
		response.getOutputStream().println("<form action=\"/balance\" method=\"POST\">");
		response.getOutputStream().println("<input type=\"submit\" value=\"-10\">");
		response.getOutputStream().println("</form>");
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		maybeDoWithdrawal();

		response.sendRedirect("/balance");
	}

	// only one thread can access this function at a time!
	private synchronized void maybeDoWithdrawal(){

		//first check whether we have enough
		if(balance > 10){

			//let's pretend the request takes ten seconds to complete
			try {
				Thread.sleep(10*1000);
			} 
			catch (InterruptedException e) {
				e.printStackTrace();
			}

			//make a withdrawal
			balance -= 10;
		}
	}
}
```

This code is pretty much identical to the previous version, except now we've isolated the balance checking and withdrawal into a function, which we've marked with the `synchronized` keyword. This means that only one thread can call this function at a time! If a second thread tries to call it, that thread will have to wait until the first thread is done before continuing. **Note:** Don't mark the `doGet()` or `doPost()` functions as `synchronized`, that way your server can still handle multiple requests. Only mark small blocks that shouldn't be interrupted as synchronized.

You can also use multiple synchronized blocks in multiple functions. Let's take a look at our first example, which originally had a problem with both the `doGet()` and `doPost()` functions accessing the same `total` variable. We can fix that problem using two synchronized blocks:

```java
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ThreadingServlet extends HttpServlet {

	private int total = 0;

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		//only one thread can enter these synchronized blocks at a time
		synchronized(this){
			response.getOutputStream().println("<h1>Current total: " + total + "</h1>");
		}
		
		response.getOutputStream().println("<form action=\"/total\" method=\"POST\">");
		response.getOutputStream().println("<input type=\"submit\" value=\"+10\">");
		response.getOutputStream().println("</form>");
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		//only one thread can enter these synchronized blocks at a time
		synchronized(this){
			
			for(int i = 0; i < 10; i++){
				total++;

				// this just delays the code by 1 second each time, so the request takes 10 seconds
				try {
					Thread.sleep(1000);
				} 
				catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}

		response.sendRedirect("/total");
	}
}
```

The idea is the same, except now we're using two synchronized blocks instead of one. And because they're synchronizing on the same object (specifically, the `this` keyword references the instance of the `ThreadingServlet` class), only one thread can enter either one at a time. We call these two blocks of code [mutually exclusive](https://en.wikipedia.org/wiki/Mutual_exclusion) because only one can run at a time. This means that if we try to request the `/total` URL while the `doPost()` function is still processing the first request, the second request has to wait until the first request completes before it can continue. This means we'll only ever see the `total` variable at a multiple of ten, which is what we expected in the first place.

## Thread-Safe Coding

Let's look at another example:

```java
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ListServlet extends HttpServlet {

	private List<String> list = new ArrayList<String>();
	
	public ListServlet(){
		list.add("lions");
		list.add("tigers");
		list.add("bears");
		list.add("turtles");
		list.add("tarantulas");
		list.add("lizards");
	}

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		response.getOutputStream().println("<h1>Animals</h1>");
		response.getOutputStream().println("<ul>");
		for(String animal : list){
			
			try {
				Thread.sleep(2000);
			} 
			catch (InterruptedException e) {
				e.printStackTrace();
			}
			
			response.getOutputStream().println("<li>" + animal + "</li>");
		}
		response.getOutputStream().println("</ul>");
		
		response.getOutputStream().println("<form action=\"/animals\" method=\"POST\">");
		response.getOutputStream().println("<input type=\"input\" name=\"animal\" value=\"monkeys\">");
		response.getOutputStream().println("<input type=\"submit\" value=\"Add\">");
		response.getOutputStream().println("</form>");
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		String animal = request.getParameter("animal");
		
		try {
			Thread.sleep(4000);
		} 
		catch (InterruptedException e) {
			e.printStackTrace();
		}
		
		list.add(animal);
		response.sendRedirect("/animals");
	}
}
```

This servlet contains an `ArrayList` of animals. The `doGet()` function renders those animals along with a form that allows the user to add an animal. The `doPost()` function simply adds the input animal to the list and then redirects back to the same page.

But like you might have guessed, this becomes more complicated if we're handling multiple requests at the same time. Try adding a new animal, and then opening a new tab while that first request is still being processed.

![ConcurrentModificationException](/tutorials/java-server/images/thread-safety-5.gif)

You'll get a `ConcurrentModificationException`! Basically, if you try to modify a data structure (in our case, an `ArrayList`) while you're iterating over it (in our case, with the `for(String animal : list)` line), you'll get this error. This is because the iterator can "lose its place" in the data structure if you modify the data structure while iterating over it. This can lead to unpredictable behavior (like skipping or repeating items), so it just throws an exception instead.

We could solve this problem using synchronization: we could wrap the whole `for` loop in a synchronized block, and put the `list.add(animal);` line in another synchronized block. That would work.

But we could also take a step back and try to rewrite our code to avoid the problem in the first place. The problem is happening because we're using an "enhanced `for` loop" which uses an `Iterator` behind the scenes. Could we use a regular `for` loop instead? In this specific case, since the only thing we ever do is add an item to the end of the list, we can!

So we could change the `for(String animal : list){` line to this:

```java
for(int i = 0; i < list.size(); i++){
	String animal = list.get(i);
```

Everything else stays the same. Now our code will work, and we don't have to synchronize anything.

Important note: this only works because we carefully thought about our code and came up with a solution that works with multiple threads. Because we're only ever adding items to the end of the list, we can get away with using a regular `for` loop. If the second thread adds an item to the list while the first thread is looping over it, the first thread will pick that change up when it checks the `list.size()` funtion in the next iteration of the loop.

That does **NOT** mean that simply switching from an enhanced `for` loop to a regular `for` loop will solve all of your threading problems! That works in this specific case, and the point is that you have to really understand exactly what your code is doing before you can write thread-safe code. For example, we could not have simply used a regular `for` loop if we were also supporting removal of items, or adding items to the beginning of the list.

## Thread-Safe Data Structures

Let's make another small change to our animal list example. When the user clicks the `Add` button, let's add the animal to the beginning of the list instead of the end. Specifically, let's change the `list.add(animal);` line to this:

```java
list.add(0, animal);
```

This adds the animal to the beginning of the list, and shifts all of the other items forward by one index.

Run this servlet, and go to the `/animals` URL. You'll see the list of animals. Now click the `Add` button, and while that request is being processed, open a new tab to the `/animals` URL. If you're still using an enhanced `for` loop, you'll get another `ConcurrentModificationException`. If you're using a regular `for` loop, you'll see something like this:

![tigers listed twice](/tutorials/java-server/images/thread-safety-6.png)

Notice that `tigers` is repeated twice! Which animal is repeated depends on the exact timing of the requests, but the point is that the second request is buggy.

This happens because while the first request is processing, the second request starts looping over the list. First it renders the animal at index `0` (lions), then the animal at index `1` (tigers). Meanwhile, the first request adds an animal to the front of the list at index `0`, so "lions" moves to index `1`, and "tigers" moves to index `2`. Back in the second thread, the loop gets to index `2`, which is now "tigers" again, even though a second ago it was at index `1` and it was already rendered. This causes "tigers" to be listed twice. You'll see a similar issue where items are skipped if you remove stuff from a list while looping over it in another thread.

We could solve this problem using synchronization. We could wrap the loop and the addition in synchronized blocks, which would force the addition to wait until after the loop completed, or vice-versa. But that requires us to understand exactly which blocks need to be synchronized.

Instead of doing the synchronization ourselves, we could use a data structure that's designed to be thread-safe out of the box. There are quite a few options, and which one you choose depends on exactly your context. In our specific example, let's use a [CopyOnWriteArrayList](http://docs.oracle.com/javase/8/docs/api/index.html?java/util/concurrent/CopyOnWriteArrayList.html). You can learn more about it in [the Java API](http://docs.oracle.com/javase/8/docs/api/index.html?java/util/concurrent/CopyOnWriteArrayList.html), but basically instead of modifying the underlying array when a function like `add()` is called, `CopyOnWriteArrayList` copies the underlying array and modifies the copy. Any threads that are already iterating over the list will keep using the original array, so they don't need to care about changes to the copy.

To use `CopyOnWriteArrayList`, just call its constructor instead of the `ArrayList` constructor:

```java
private List<String> list = new CopyOnWriteArrayList<String>();
```

This creates an instance of `CopyOnWriteArrayList` and stores it in our `list` variable. This works because `CopyOnWriteArrayList` implements the `List` interface, just like `ArrayList` does. We also have to make sure we're using an enhanced `for` loop (or an `Iterator`) in the `doGet()` function:

```java
for(String animal : list){
```

We need to use the enhanced `for` because we need the "snapshot" feature provided by the underlying `Iterator`. Again, your best source of information is [the Java API](http://docs.oracle.com/javase/8/docs/api/index.html?java/util/concurrent/CopyOnWriteArrayList.html), but basically the iterator is what guarantees old threads use the original underlying array instead of the copy.

Anyway, run this servlet, load the page, click the button, and then open the page in a new tab. You'll see that the second page loads fine, but it doesn't see the change being made by the first request until you refresh after the first request completely finishes.

There are a bunch of different data structures designed to be thread-safe, but that doesn't automatically make your code thread-safe. You still have to understand the implications of multiple threads accessing your code. You should also note that choosing a data structure is a process of weighing pros and cons: the `CopyOnWriteArrayList` can be pretty inefficient since it's copying all of its underlying data whenever you make a change, for example. You have to weigh that inefficiency against the benefits it gives you.

## More Advanced Threading

This tutorial introduced the basics of thread-safety, some common issues you're likely to encounter, and some simple fixes for them. But threading (more formally, [concurrency](https://en.wikipedia.org/wiki/Concurrency_(computer_science))) is a huge topic that can get very complicated. I want to keep this tutorial short (or at least not any longer than it already is), but in case you need them in the future, you should be aware that there are more advanced topics out there. Here are some examples:

- We've just used `synchronized(this)`, but you can synchronize on any instance. Two synchronized blocks are only [mutually exclusive](https://en.wikipedia.org/wiki/Mutual_exclusion) if they're synchronized on the same instance. This gives you more control over exactly which blocks can be executed on different threads. This also allows you to synchronized between servlets.

- You can use the `wait()` function on one thread to pause code execution, until the `notify()` function is called on another thread. More info [here](https://docs.oracle.com/javase/tutorial/essential/concurrency/guardmeth.html).

- You can also use a [Semaphore](http://docs.oracle.com/javase/8/docs/api/index.html?java/util/concurrent/Semaphore.html) to allow a certain number of threads to access a block.

Concurrency is its own field of study, so it's not possible to list all of the topics within it. Just know that there are solutions for just about any problem you're facing!

## Homework

- Go back and make sure all of your servlets are thread-safe.
- Create a web app where users can add or subtract from RGB values. Make the current value the background color. Don't let it go below 0 or above 255!

# Next: [Hosting on AWS](/tutorials/java-server/hosting-aws)