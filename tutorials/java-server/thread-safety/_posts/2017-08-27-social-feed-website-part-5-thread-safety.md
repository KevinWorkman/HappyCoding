---
layout: tutorial
title: "Social Feed Website Part 5: Thread Safety"
thumbnail: /examples/java-server/images/social-feed-website-part-5-thread-safety-7.png
tagline: Let multiple users post messages safely.
sort-key: 240
meta-title: "Social Feed Website Part 5: Thread Safety"
meta-description: Let multiple users post messages safely.
meta-image: /examples/java-server/images/social-feed-website-part-5-thread-safety-8.png
tags: [example, java, server, jsp, post, sessions, thread-safety]
redirect_from:
 - /examples/java-server/thread-safety/social-feed-website
 - /examples/java-server/social-feed-website-part-5-thread-safety
previousPost: /tutorials/java-server/thread-safety
discourseEmbedUrl: /examples/java-server/social-feed-website-part-5-thread-safety
---

This code expands the [social feed website example](/examples/java-server/sessions/social-feed-website) (I recommend reading that before this) and examines its thread safety to allow multiple users to post messages at the same time, to create an example of a social feed web app like Twitter, Tumblr, or Facebook.

Thread safety can be very hard to think about, because the whole point is that the order of execution between multiple threads is unpredictable. But you have to try to imagine how your code will behave when you have a bunch of users making requests at the same time. You have to look for cases like this:

- Ada requests a page that shows a list of all posts.
- While that page is loading, Grace submits a form that adds a post.

Because these requests happen at the same time using multiple threads running our code concurrently, this can lead to strange behaviors. Errors like `ConcurrentModificationException`, or skipping or repeating messages, or other weird behaviors that only happen sometimes.

What would happen in the above case? If we run our server and try to test that happening, chances are everything will work okay. This is because we're probably only looking at a few posts at a time, and all of the code is running fast enough that probably the first request will complete before we can even start the second one. But then we aren't really testing the problem! We want to test our code so it will work with a bunch of users interacting with a bunch of posts at the same time.

One quick and dirty way to test thread safety is to modify our code so requests take longer. Basically, throw a call to `Thread.sleep()` to pause the execution of your code, that way you can more easily test what happens when two requests happen at the same time.

Specifically, let's add a call to `Thread.sleep()` in the code that renders the post list:

## `feed.jsp`

```jsp
<%@ page import="java.util.List" %>
<%@ page import="feed.data.Post" %>

<!DOCTYPE html>
<html>
<head>
	<title>Social Feed Web App</title>

	<script src="/js/jquery-2.2.4.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://bootswatch.com/slate/bootstrap.min.css">
</head>
<body>

<div class="container">
	<nav class="navbar navbar-default">
		<ul class="nav navbar-nav">
			<li><a href="/feed/">Social Feed Web App</a></li>
			<% if(request.getSession().getAttribute("user") != null){ %>
			<li><a href="/feed/<%= request.getSession().getAttribute("user") %>"><%= request.getSession().getAttribute("user") %></a></li>
			<li><a href="/logout">Logout</a></li>
			<% } else{ %>
			<li><a href="/login">Login</a></li>
			<% } %>
		</ul>
	</nav>

	<% if(request.getSession().getAttribute("user") != null){ %>
		<h1>New Message</h1>
		<form action="/feed/" method="POST">	  	
		  	<div class="form-group">
		  		<label class="form-control-label">Message:</label>
				<textarea name="message" class="form-control"></textarea>
			</div>

			<button type="submit" class="btn btn-primary">Send</button>
		</form>

		<hr/>
	<% } %>

	<h1><%= request.getAttribute("title") %></h1>

	<%
	List<Post> posts = (List<Post>)request.getAttribute("posts");
	if(posts == null || posts.isEmpty()){
	%>
		<p>There are no posts.</p>
	<%
	}
	else{
		for(Post post : posts){
			Thread.sleep(5000);
	%>
			<div class="panel panel-default">
				<div class="panel-heading"><h4><a href="/feed/<%= post.getUser() %>"><%= post.getUser() %></a></h4></div>
				<div class="panel-body"><%= post.getMessage() %></div>
				<div class="panel-footer">at <%= post.getDate().toString() %></div>

			</div>
	<%
		}
	}
	%>
</div>

</body>
</html>
```

The only change here is that we've added a call to `Thread.sleep(5000)` when we iterate over the `posts` list. This means that each post will take 5 seconds to render, which makes it easier for us to test what happens when a post is added while they're being rendered.

Test the code by following these steps:

- Run the server
- Register a user.
- Create 3 posts.
- Refresh the page, so that the 3 posts are loading.
- While they're loading, open a new tab.
- Create another post in that new tab.

If you create a new post while they're being rendered, you'll get a `ConcurrentModificationException`:

![ConcurrentModificationException](/examples/java-server/images/social-feed-website-part-5-thread-safety-1.png)

Believe it or not, this is good news! It's much better to catch these errors now than only finding out about them after you already have users.

So now we know where a potential problem is, but what's the solution? Like we discussed in [the thread safety tutorial](/tutorials/java-server/thread-safety), we generally have three options:

- Use thread-safe data structures the solve the problem for us.
- Modify our code so it's thread-safe by design.
- Synchronize the parts of our code that aren't thread-safe.

Which approach you take depends on your exact context, but in this case let's try the first option.

Our code uses a `LinkedList` because we wanted to efficiently add messages to the beginning, so that when we rendered them the newest posts showed up at the top. With that goal in mind, can we find a thread-safe data structure that supports efficient insertion at the beginning of the list?

After searching Google and scouring [the Java API](http://docs.oracle.com/javase/8/docs/api/index.html), we eventually find the `ConcurrentLinkedDeque` class, which is a thread-safe data structure that supports efficiently adding elements to the beginning. Hooray! Now we just need to use that class instead of `LinkedList`, in both our `FeedServlet` and our `feed.jsp` file:

## `FeedServlet.java`

```java
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ConcurrentLinkedDeque;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

import feed.data.Post;

public class FeedServlet extends HttpServlet {

	/**
	 * All of the posts, ordered by time. New messages at the
	 * beginning, old messages at the end. We're using a ConcurrentLinkedDeque
	 * so inserting at the beginning is very fast and it's thread-safe.
	 */
	private ConcurrentLinkedDeque<Post> postsByTime = new ConcurrentLinkedDeque<>();

	/**
	 * Map of user names to posts made by that user.
	 */
	private Map<String, ConcurrentLinkedDeque<Post>> postsByUser = new HashMap<>();

	/**
	 * Adds a post to the postsByTime and postsByUser data structures.
	 */
	private void addPost(String user, String message, long time){

		String sanitizedMessage = Jsoup.clean(message, Whitelist.none());

		Post post = new Post(user, sanitizedMessage, new Date(time));
		postsByTime.addFirst(post);

		if(!postsByUser.containsKey(user)){
			postsByUser.put(user, new ConcurrentLinkedDeque<>());
		}
		postsByUser.get(user).addFirst(post);
	}

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		String requestUrl = request.getRequestURI();
		String user = requestUrl.substring("/feed/".length());

		if("".equals(user)){
			request.setAttribute("title", "All Posts");
			request.setAttribute("posts", postsByTime);
		}
		else{
			request.setAttribute("title", "Posts by " +  Jsoup.clean(user, Whitelist.none()));

			if(postsByUser.containsKey(user)){
				request.setAttribute("posts", postsByUser.get(user));
			}
		}

		request.getRequestDispatcher("/WEB-INF/jsp/feed.jsp").forward(request,response);
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		HttpSession session = request.getSession();

		String username = (String)session.getAttribute("user");
		if(username != null){
			String message = request.getParameter("message");
			addPost(username, message, System.currentTimeMillis());
		}
		response.sendRedirect("/feed/");
	}
}
```

This class now uses `ConcurrentLinkedDeque` instead of a `LinkedList`. Now we need to make the same change in `feed.jsp`:

## `feed.jsp`

```jsp
<%@ page import="java.util.concurrent.ConcurrentLinkedDeque" %>
<%@ page import="feed.data.Post" %>

<!DOCTYPE html>
<html>
<head>
	<title>Social Feed Web App</title>

	<script src="/js/jquery-2.2.4.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://bootswatch.com/slate/bootstrap.min.css">
</head>
<body>

<div class="container">
	<nav class="navbar navbar-default">
		<ul class="nav navbar-nav">
			<li><a href="/feed/">Social Feed Web App</a></li>
			<% if(request.getSession().getAttribute("user") != null){ %>
			<li><a href="/feed/<%= request.getSession().getAttribute("user") %>"><%= request.getSession().getAttribute("user") %></a></li>
			<li><a href="/logout">Logout</a></li>
			<% } else{ %>
			<li><a href="/login">Login</a></li>
			<% } %>
		</ul>
	</nav>

	<% if(request.getSession().getAttribute("user") != null){ %>
		<h1>New Message</h1>
		<form action="/feed/" method="POST">	  	
		  	<div class="form-group">
		  		<label class="form-control-label">Message:</label>
				<textarea name="message" class="form-control"></textarea>
			</div>

			<button type="submit" class="btn btn-primary">Send</button>
		</form>

		<hr/>
	<% } %>

	<h1><%= request.getAttribute("title") %></h1>

	<%
	ConcurrentLinkedDeque<Post> posts = (ConcurrentLinkedDeque<Post>)request.getAttribute("posts");
	if(posts == null || posts.isEmpty()){
	%>
		<p>There are no posts.</p>
	<%
	}
	else{
		for(Post post : posts){
			Thread.sleep(5000);
	%>
			<div class="panel panel-default">
				<div class="panel-heading"><h4><a href="/feed/<%= post.getUser() %>"><%= post.getUser() %></a></h4></div>
				<div class="panel-body"><%= post.getMessage() %></div>
				<div class="panel-footer">at <%= post.getDate().toString() %></div>

			</div>
	<%
		}
	}
	%>
</div>

</body>
</html>
```

I left the call to `Thread.sleep()` in there so you can test it. Now you should be able to add posts while they're being rendered, and you'll no longer see a `ConcurrentModificationException`. Hooray! :tada:

Is there anywhere else in our code that might have a similar problem when multiple users are making requests at the same time? Let's look at the `UserDataStore` class:

```java
import java.util.HashMap;
import java.util.Map;

import org.mindrot.jbcrypt.BCrypt;

public class UserDataStore {

	private static UserDataStore instance = new UserDataStore();

	/**
	 * Map of usernames to their hashed passwords.
	 */
	private Map<String, String> usernamePasswordMap = new HashMap<>();

	public static UserDataStore getInstance(){
		return instance;
	}

	// This class is a singleton. Call getInstance() instead.
	private UserDataStore(){}

	public boolean isUsernameTaken(String username){
		return usernamePasswordMap.containsKey(username);
	}

	public void registerUser(String username, String password){
		String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
		usernamePasswordMap.put(username, hashedPassword);
	}

	public boolean isLoginCorrect(String username, String password) {

		// username isn't registered
		if(!usernamePasswordMap.containsKey(username)){
			return false;
		}

		String storedPasswordHash = usernamePasswordMap.get(username);

		return BCrypt.checkpw(password, storedPasswordHash);
	}
}
```

This class uses a `HashMap` to store usernames and password hashes. What might happen if a bunch of users are making requests to this class at the same time?

This is a little harder to reason about, because there isn't an obvious place to put a call to `Thread.sleep()` to test our code. The problem is that all of the logic is **inside** the `HashMap` class! We can't really put a call to `Thread.sleep()` inside the `HashMap` class, so we have to think about different ways our code might execute. Here's one example:

- Ada tries to login, which calls the `get()` function in our `HashMap` instance.
- Inside the `get()` function, the `HashMap` finds the location of the password associated with the Ada's username key.
- Meanwhile, Grace registers a new account. This calls the `put()` function in our `HashMap` instance.
- The `put()` function rearranges the internal array used by `HashMap`, so now the values are in new positions.
- The `get()` function uses the location it found, and returns the password at that location.

There's where we might see a problem. Because the underlying array was rearranged while it was executing, the `get()` function might return the wrong password for a user.

Again, we have three main options to fix this problem. We could use a thread-safe `ConcurrentHashMap`, but just to show another approach, let's synchronize our code instead:

```java
import java.util.HashMap;
import java.util.Map;

import org.mindrot.jbcrypt.BCrypt;

public class UserDataStore {

	private static UserDataStore instance = new UserDataStore();

	/**
	 * Map of usernames to their hashed passwords.
	 */
	private Map<String, String> usernamePasswordMap = new HashMap<>();

	public static UserDataStore getInstance(){
		return instance;
	}

	// This class is a singleton. Call getInstance() instead.
	private UserDataStore(){}

	public synchronized boolean isUsernameTaken(String username){
		return usernamePasswordMap.containsKey(username);
	}

	public synchronized void registerUser(String username, String password){
		String hashedPassword = BCrypt.hashpw(password, BCrypt.gensalt());
		usernamePasswordMap.put(username, hashedPassword);
	}

	public synchronized boolean isLoginCorrect(String username, String password) {

		// username isn't registered
		if(!usernamePasswordMap.containsKey(username)){
			return false;
		}

		String storedPasswordHash = usernamePasswordMap.get(username);

		return BCrypt.checkpw(password, storedPasswordHash);
	}
}
```

Notice the `synchronized` keyword in all of the functions that access the `HashMap` data structure. This means that only one thread can call these functions at a time. If another request comes in, then that request has to wait for the first one to finish before it can continue.

Now our web app is thread-safe, and multiple users can safely use it at the same time!
