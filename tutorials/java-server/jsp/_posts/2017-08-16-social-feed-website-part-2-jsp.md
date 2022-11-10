---
layout: tutorial
title: "Social Feed Website Part 2: JSP"
thumbnail: /tutorials/java-server/images/social-feed-website-part-2-jsp-3.png
tagline: Use JSP to render user posts.
sort-key: 210
meta-title: "Social Feed Website Part 2: JSP"
meta-description: Use JSP to render user posts.
meta-image: /tutorials/java-server/images/social-feed-website-part-2-jsp-4.png
tags: [example, java, server, jsp]
redirect_from:
 - /examples/java-server/jsp/social-feed-website
 - /examples/java-server/social-feed-website
 - /examples/java-server/social-feed-website-part-2-jsp
previousPost: /tutorials/java-server/jsp
discourseEmbedUrl: /examples/java-server/social-feed-website-part-2-jsp
---

This code expands the [social feed website example](/examples/java-server/servlets/social-feed-website) (I recommend reading that before this) and uses JSP to render user posts to create an example of a social feed web app like Twitter, Tumblr, or Facebook.

We're using hard-coded example data for now, but this brings us a step closer towards creating a more advanced web app that will actually handle real user input.

Now our servlet class just "fetches" the data and adds it as attributes, and then tells the JSP file to render the request. Here's the servlet class:

```java
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import feed.data.Post;

public class FeedServlet extends HttpServlet {

	/**
	 * All of the posts, ordered by time. Old messages at the
	 * beginning, new messages at the end.
	 */
	private List<Post> postsByTime = new ArrayList<>();

	/**
	 * Map of user names to posts made by that user.
	 */
	private Map<String, List<Post>> postsByUser = new HashMap<>();

	@Override
	public void init(){

		long now = System.currentTimeMillis();
		// for fake data, add an offset so posts aren't all at the same time
		long offset = 15*60*1000;

		// add a bunch of fake data for testing
		addPost("Ada", "Hello world!", now+offset);
		addPost("Grace", "I've always been more interested in the future than in the past.", now+offset*2);
		addPost("Stanley", "Meow", now+offset*3);
		addPost("Stanley", "Purr", now+offset*4);
		addPost("Grace", "From then on, when anything went wrong with a computer, we said it had bugs in it.", now+offset*5);
		addPost("Ada", "Mathematical Science shows what is. It is the language of the unseen relations between things.", now+offset*6);
		addPost("Grace", "Please cut off a nanosecond and send it over to me.", now+offset*7);
		addPost("Stanley", "Growl!", now+offset*8);
	}

	/**
	 * Adds a post to the postsByTime and postsByUser data structures.
	 */
	private void addPost(String user, String message, long time){
		Post post = new Post(user, message, new Date(time));
		postsByTime.add(post);

		if(!postsByUser.containsKey(user)){
			postsByUser.put(user, new ArrayList<>());
		}
		postsByUser.get(user).add(post);
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
}
```

Note that the servlet does not do any rendering itself! Instead, that's handled by our JSP file:

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

This JSP file makes it easier to write HTML to make out page look a little nicer. In this case we're using Bootstrap, but the point is that this is just plain old HTML and you can do all of the normal HTML stuff with it, much easier than if we were outputting HTML from a servlet class.

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

Note that the `Post` class is now inside a package, so we can use it inside our JSP file.

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

![social feeds website feed page](/tutorials/java-server/images/social-feed-website-part-2-jsp-1.png)

If you click one of the usernames, you'll be taken to their profile page which only shows their posts:

![social feeds website user page](/tutorials/java-server/images/social-feed-website-part-2-jsp-2.png)

## Tweak Ideas

- Show the posts in reverse-chronological order, so new posts are at the top.
- What do you want to do when a page contains millions of posts? How would you handle thousands of users?
- Modify the HTML so the site is prettier. (This will become much easier when we start using JSP.)
