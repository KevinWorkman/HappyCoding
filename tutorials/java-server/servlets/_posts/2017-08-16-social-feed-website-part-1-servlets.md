---
layout: post
title: "Social Feed Website Part 1: Servlets"
thumbnail: /tutorials/java-server/images/social-feed-website-part-1-servlets-3.png
tagline: Use servlets to show user posts.
sort-key: 200
meta-title: "Social Feed Website Part 1: Servlets"
meta-description: Use servlets to show user posts.
meta-image: /tutorials/java-server/images/social-feed-website-part-1-servlets-4.png
tags: [example, java, server, servlets]
redirect_from:
 - /examples/java-server/servlets/social-feed-website
 - /examples/java-server/social-feed-website-part-1-servlets
previousPost: /tutorials/java-server/servlets
discourseEmbedUrl: /examples/java-server/social-feed-website-part-1-servlets
---

This example uses a servlet to create a barebones example of a social feed web app like Twitter, Tumblr, or Facebook.

We're using hard-coded example data for now, but this is the first step towards creating a more advanced web app that will actually handle real user input.

Also note that we're outputting the HTML directly from the servlet. That can be a pain in the neck, and our lives will become much easier when we start using JSP.

```java
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

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
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
		PrintWriter out = response.getWriter();
		String requestUrl = request.getRequestURI();
		String user = requestUrl.substring("/feed/".length());

		if("".equals(user)){
			// the URL is just /feed/, so show all posts
			out.println("<h1>All Posts</h1>");
			for(Post post : postsByTime){
				renderPost(post, out);
			}
		}
		else{
			// the URL is /feed/user, so show that user's posts
			if(postsByUser.containsKey(user)){
				out.println("<h1>Posts by " + user + "</h1>");
				for(Post post : postsByUser.get(user)){
					renderPost(post, out);
				}
			}
			else{
				out.println("<p>That user has no posts.</p>");
			}
		}
	}

	/**
	 * Renders the HTML for the Post to the response's PrintWriter.
	 */
	private void renderPost(Post post, PrintWriter out){
		out.println("<hr/>");
		out.println("<p>" + post.getDate().toString() + "</p>");
		out.println("<p><a href=\"/feed/" + post.getUser() + "\" >" + post.getUser() + "</a>: ");
		out.println(post.getMessage() + "</p>");
	}
}
```

This servlet contains a couple data structures that hold user posts, and it populates them with dummy data so we can test our web app more easily. The `doGet()` function checks whether a user name has been supplied in the URL: if not, it just shows every post, but if so it shows the posts for that user. This is very similar to how you only see a user's posts on their own profile, but you see every posts in the main feed.

This code also uses a `Post` class, which is just a Java bean:

```java
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

Finally, it requires a `web.xml` file to map the URL to the servlet class:

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

This file maps any URL starting with `/feeds/` to our servlet. Now if you run this servlet and visit [http://localhost:8080/feed/](http://localhost:8080/feed/) in your browser, you should see this:

![social feeds website feed page](/tutorials/java-server/images/social-feed-website-part-1-servlets-1.png)

If you click one of the usernames, you'll be taken to their profile page which only shows their posts:

![social feeds website user page](/tutorials/java-server/images/social-feed-website-part-1-servlets-2.png)

## Tweak Ideas

- Show the posts in reverse-chronological order, so new posts are at the top.
- What do you want to do when a page contains millions of posts? How would you handle thousands of users?
- Modify the HTML so the site is prettier. (This will become much easier when we start using JSP.)
