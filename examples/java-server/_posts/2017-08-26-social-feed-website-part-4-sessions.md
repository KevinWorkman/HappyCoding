---
layout: tutorial
title: "Social Feed Website Part 4: Sessions"
thumbnail: /examples/java-server/images/social-feed-website-part-5-sessions-7.png
tagline: Let users login and create their own posts.
sort-key: 230
meta-title: "Social Feed Website Part 4: Sessions"
meta-description: Let users login and create their own posts.
meta-image: /examples/java-server/images/social-feed-website-part-5-sessions-8.png
tags: [example, java, server, jsp, post, sessions]
redirect_from: /examples/java-server/sessions/social-feed-website
---

This code expands the [social feed website example](/examples/java-server/post/social-feed-website) (I recommend reading that before this) and adds the ability for users to login and create their own posts to create an example of a social feed web app like Twitter, Tumblr, or Facebook.

This code uses [sessions](/tutorials/java-server/sessions) to track whether each user is logged in, and adds functionality for registering and logging into our web app.

## `FeedServlet.java`

```java
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import feed.data.Post;

public class FeedServlet extends HttpServlet {
	
	/**
	 * All of the posts, ordered by time. New messages at the
	 * beginning, old messages at the end. We're using a LinkedList
	 * so inserting at the beginning is very fast.
	 */
	private LinkedList<Post> postsByTime = new LinkedList<>();
	
	/**
	 * Map of user names to posts made by that user.
	 */
	private Map<String, LinkedList<Post>> postsByUser = new HashMap<>();
	
	/**
	 * Adds a post to the postsByTime and postsByUser data structures.
	 */
	private void addPost(String user, String message, long time){
		Post post = new Post(user, message, new Date(time));
		postsByTime.addFirst(post);
		
		if(!postsByUser.containsKey(user)){
			postsByUser.put(user, new LinkedList<>());
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
			request.setAttribute("title", "Posts by " + user);
			
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

This looks pretty much the same, except the `doPost()` function now gets the username from the session. Notice that the code checks whether the username has been set! Even though we aren't showing the form to users who aren't logged in (you'll see that in a second), we still want to program defensively on the server to prevent users from posting stuff to our server. If we didn't have this check, then users could post data to our server using programs like [cURL](https://en.wikipedia.org/wiki/CURL).

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

This file is also mostly the same, except now it contains a few `if` statements that check whether the user is logged in. If so, it displays a link to that user's feed page, a logout button, and the form for submitting a new post. If the user is not logged in, it displays a login button, but doesn't show the form for submitting a new post.

## `UserDataStore.java`

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

This class contains all of the logic required for storing user data, such as usernames and password hashes. It uses [jBCrypt](http://www.mindrot.org/projects/jBCrypt/) to hash passwords and avoid storing them as plain text. This class provides all of the functions required for registration and login, and it's a [singleton](https://en.wikipedia.org/wiki/Singleton_pattern) to make it easier to use from multiple servlets.

## `LoginServlet.java`

```java
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginServlet extends HttpServlet {

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		request.getRequestDispatcher("/WEB-INF/jsp/login.jsp").forward(request, response);
	}
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
	
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		if(UserDataStore.getInstance().isLoginCorrect(username, password)){
			request.getSession().setAttribute("user", username);
			response.sendRedirect("/feed/");
		}
		else{
			request.setAttribute("loginError", "Incorrect username or password.");
			request.getRequestDispatcher("/WEB-INF/jsp/login.jsp").forward(request,response);
		}
	}
}
```

The `LoginServlet` class handles requests related to logging in. The `doGet()` function just forwards the request to `login.jsp` for rendering, which we'll see next. The `doPost()` function gets the username and password and checks whether they're valid. If so, it sets the `user` attribute of the session and redirects to the homepage. If not, it adds an error to the request and forwards it back to `login.jsp` for rendering again.

## `login.jsp`

```jsp
<!DOCTYPE html>
<html>
<head>
	<title>Login - Social Feed Web App</title>
	
	<script src="/js/jquery-2.2.4.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://bootswatch.com/slate/bootstrap.min.css">
</head>
<body>

<div class="container">
	<nav class="navbar navbar-default">
		<ul class="nav navbar-nav">
			<li><a href="/feed/">Social Feed Web App</a></li>
		</ul>
	</nav>
	
	<h1>Login</h1>
	<% if(request.getAttribute("loginError") != null){ %>
		<h2 style="color:red"><%= request.getAttribute("loginError") %></h2>
	<% } %>
	<form action="/login" method="POST">

		<div class="form-group">
			<label class="form-control-label">Name:</label>
			<input type="text" name="username" class="form-control">
		</div>
	  	
	  	<div class="form-group">
	  		<label class="form-control-label">Password:</label>
			<input type="password" name="password" class="form-control">
		</div>
		
		<button type="submit" class="btn btn-primary">Login</button>
	</form>
	
	<p>Don't have an account? Register <a href="/register">here</a>!</p>

</div>
		
</body>
</html>
```

This file renders a form, showing any errors that have been set. Submitting this form triggers the `doPost()` function of `LoginServlet` above. Also notice that this page shows a link to register at the bottom.

## `RegisterServlet.java`

```java
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class RegisterServlet extends HttpServlet {

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		request.getRequestDispatcher("/WEB-INF/jsp/register.jsp").forward(request, response);
	}
	
	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
	
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		if(UserDataStore.getInstance().isUsernameTaken(username)){
			request.setAttribute("registerError", "That username is already taken.");
			request.getRequestDispatcher("/WEB-INF/jsp/register.jsp").forward(request,response);
		}
		else{
			UserDataStore.getInstance().registerUser(username, password);
			request.getSession().setAttribute("user", username);
			response.sendRedirect("/feed/");
		}
	}
}
```

This class is very similar to `LoginServlet.java`, except instead of handling login, it handles registration. The `doPost()` function checks whether the username is already taken, and if so it sets an error attribute and renders the registration page again. If the username is not already taken, it registers the user, logs them in by setting the `user` attribute of the session, and redirects to the homepage.

## `register.jsp`

```jsp
<!DOCTYPE html>
<html>
<head>
	<title>Register - Social Feed Web App</title>
	
	<script src="/js/jquery-2.2.4.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://bootswatch.com/slate/bootstrap.min.css">
</head>
<body>

<div class="container">
	<nav class="navbar navbar-default">
		<ul class="nav navbar-nav">
			<li><a href="/feed/">Social Feed Web App</a></li>
		</ul>
	</nav>
	
	<h1>Register</h1>
	<% if(request.getAttribute("registerError") != null){ %>
		<h2 style="color:red"><%= request.getAttribute("registerError") %></h2>
	<% } %>
	<form action="/register" method="POST">

		<div class="form-group">
			<label class="form-control-label">Name:</label>
			<input type="text" name="username" class="form-control">
		</div>
	  	
	  	<div class="form-group">
	  		<label class="form-control-label">Password:</label>
			<input type="password" name="password" class="form-control">
		</div>
		
		<button type="submit" class="btn btn-primary">Register</button>
	</form>

</div>
		
</body>
</html>
```

This file is similar to `login.jsp`, the only major difference being that it posts to the `/register` URL, which triggers the `doPost()` function of the `RegisterServlet` class above.

## `LogoutServlet.java`

```java
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LogoutServlet extends HttpServlet {

	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		request.getSession().removeAttribute("user");
		response.sendRedirect("/feed/");
	}
}
```

Finally, we need to allow users to logout. Clicking the `Logout` button triggers the `LogoutServlet` class's `doGet()` function, which simply removes the `user` attribute and redirects to the homepage.

## `web.xml`

```xml
<web-app>

	<servlet>
		<servlet-name>FeedServlet</servlet-name>
		<servlet-class>FeedServlet</servlet-class>
	</servlet>

	<servlet-mapping>
		<servlet-name>FeedServlet</servlet-name>
		<url-pattern>/feed/*</url-pattern>
	</servlet-mapping>

	<servlet>
		<servlet-name>LoginServlet</servlet-name>
		<servlet-class>LoginServlet</servlet-class>
	</servlet>

	<servlet-mapping>
		<servlet-name>LoginServlet</servlet-name>
		<url-pattern>/login</url-pattern>
	</servlet-mapping>
	
	<servlet>
		<servlet-name>LogoutServlet</servlet-name>
		<servlet-class>LogoutServlet</servlet-class>
	</servlet>

	<servlet-mapping>
		<servlet-name>LogoutServlet</servlet-name>
		<url-pattern>/logout</url-pattern>
	</servlet-mapping>
	
	<servlet>
		<servlet-name>RegisterServlet</servlet-name>
		<servlet-class>RegisterServlet</servlet-class>
	</servlet>

	<servlet-mapping>
		<servlet-name>RegisterServlet</servlet-name>
		<url-pattern>/register</url-pattern>
	</servlet-mapping>

</web-app>
```

This `web.xml` file ties everything together by mapping the URLs to their corresponding servlet classes.

Here's what it looks like in action! When you first load the page, no posts are shown:

![no posts](/examples/java-server/images/social-feed-website-part-5-sessions-1.png)

I can click the `Login` link to show the login page:

![blank login](/examples/java-server/sessions/images/social-feed-website-2.png)

Then I can click the register link to go to the registration page:

![registration page](/examples/java-server/images/social-feed-website-part-5-sessions-3.png)

I can fill out the registration form and click `Register`, which takes me back to the homepage:

![new message form](/examples/java-server/images/social-feed-website-part-5-sessions-4.png)

Notice now that the navigation bar shows a link to my personal feed, as well as a logout link. I'm also given a form for posting a new message.

![message submitted](/examples/java-server/images/social-feed-website-part-5-sessions-5.png)

Now that I'm logged in, I can submit messages, which are then shown on the homepage and in my personal feed.

I can also logout, register as a new user, and post as that user instead:

![posting as Stanley](/examples/java-server/images/social-feed-website-part-5-sessions-6.png)

Because we're using sessions, this will work for multiple people using different computers. Each user has their own session, so we can track whether each one is logged in. Try accessing the page from multiple browsers!

## Tweak Ideas

- Right now users can enter any raw text they want, including arbitrary HTML and JavaScript. This is dangerous! Add logic that disallows or escapes HTML and JavaScript instead of displaying it.
- There are no restrictions on usernames or passwords, so a user can enter blank values, or whitespace, or even HTML. Add restrictions to disallow bad usernames or passwords.
- What do you want to do when a page contains millions of posts? How would you handle thousands of users?
- Allow users to comment on other users' posts.
- Allow users to like, star, or favorite other users' posts.
- By default, users are logged out after 15 minutes. Add a "Remember me" checkbox to the login screen that prevents users from automatically logging out.