---
layout: tutorial
title: "Social Feed Website Part 3: Post Requests"
thumbnail: /examples/java-server/images/social-feed-website-part-3-post-requests-3.png
tagline: Let users create their own posts.
sort-key: 220
meta-title: "Social Feed Website Part 3: Post Requests"
meta-description: Let users create their own posts.
meta-image: /examples/java-server/images/social-feed-website-part-3-post-requests-4.png
tags: [example, java, server, jsp, post]
redirect_from: /examples/java-server/post/social-feed-website
---

This code expands the [social feed website example](/examples/java-server/jsp/social-feed-website) (I recommend reading that before this) and adds the ability for users to create their own posts to create an example of a social feed web app like Twitter, Tumblr, or Facebook.

Now our JSP page contains a form:

```jsp
<%@ page import="java.util.List" %>
<%@ page import="feed.data.Post" %>

<!DOCTYPE html>
<html>
<head>
	<title>Social Feed Web App</title>
	
	<script src="/js/jquery-2.2.4.js"></script>
	<script src="/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="/css/bootstrap.flatly.css">
</head>
<body>

<div class="container">
	<nav class="navbar navbar-default">
		<ul class="nav navbar-nav">
			<li><a href="">Social Feed Web App</a></li>
		</ul>
	</nav>
	
	<h1>New Message</h1>
	<form action="/feed/" method="POST">

		<div class="form-group">
			<label class="form-control-label">Name:</label>
			<input type="text" name="name" class="form-control">
		</div>
	  	
	  	<div class="form-group">
	  		<label class="form-control-label">Message:</label>
			<textarea name="message" class="form-control"></textarea>
		</div>
		
		<button type="submit" class="btn btn-primary">Send</button>
	</form>
	
	<hr/>
	
	<h1><%= request.getAttribute("title") %></h1>

	<% 
	List<Post> posts = (List<Post>)request.getAttribute("posts");
	if(posts == null){
	%>
		<p>This user has no posts.</p>
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

Notice the New Message form towards the top of the HTML. This lets a user enter their name and a message to post. We're using Bootstrap to style our form. When the user clicks the `Send` button, the `doPost()` function of our servlet class is triggered:

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
		String name = request.getParameter("name");
		String message = request.getParameter("message");
		addPost(name, message, System.currentTimeMillis());
		
		response.sendRedirect("/feed/");
	}
}
```

The `doPost()` function gets the `name` and `message` parameters from the request, and passes them into the `addPost()` function to add them to our data structures. The `doGet()` function is the same as it was before, and passes those data structures to our JSP page to be rendered.

This code also uses a `Post` class, which is just a Java bean:

```java
package feed.data;

import java.util.Date;

public class Post {
	private String user;
	private String message;
	private Date date;
	
	public Post(String user, String message, Date date) {
		this.user = user;
		this.message = message;
		this.date = date;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}
	
}
```

Finally, we need a `web.xml` file to map the URL to the servlet class:

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

</web-app>
```

This file maps any URL starting with `/feeds/` to our servlet, which then sends the request to our JSP file. Now if you run this web app and visit [http://localhost:8080/feed/](http://localhost:8080/feed/) in your browser, you should see this:

![post form](/examples/java-server/images/social-feed-website-part-3-post-requests-1.png)

If you enter a name and a message and then click the `Send` button, you'll see your message added to the feed:

![message posted](/examples/java-server/images/social-feed-website-part-3-post-requests-2.png)

The rest of the web app works the same: you can click a user's name to go to their personal feed page, where only their posts are shown.

## Tweak Ideas

- Right now users can enter any raw text they want, including arbitrary HTML and JavaScript. This is dangerous! Add logic that escapes HTML and JavaScript instead of displaying it.
- Add more customization. Let users specify a color for their posts.
- What do you want to do when a page contains millions of posts? How would you handle thousands of users?