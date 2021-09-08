---
layout: tutorial
title: Authentication (Java 8)
thumbnail: /tutorials/google-cloud/images/authentication-1.png
tagline: Allow users to login.
sort-key: 2400
meta-title: Google Authentication Tutorial
meta-description: Allow users to login using the Google User API.
meta-image: /tutorials/google-cloud/images/authentication-2.png
previousPost: /tutorials/google-cloud/java-8/datastore
nextPost: /tutorials/google-cloud/java-8/blobstore
tags: [tutorial, java, server, google, cloud, authentication]
---

{% include toc.md %}

At this point we can use App Engine to deploy servlets that respond to `GET` and `POST` requests, and we can use Datastore to store data.

That works for simple cases where we only want to store anonymous data, but if we want to associate data with a specific user then we need to implement **authentication**. In other words, we need a way for users to login.

There are many ways to implement authentication, but because we're using App Engine, we can allow users to login to our site using their Google accounts.

# Users API

The [Users API](https://cloud.google.com/appengine/docs/standard/java/users/) is included with App Engine and lets us get login and logout links, as well as the current user's email address. We can then use this email address to associate data with a specific user, for example preferences, posts, or file uploads.

The Users API lets us avoid handling registration and login ourselves. Instead, we give the user a link to Google's login page, and we can ask Google's login page to redirect back to our page after the user logs in.

Here's an example servlet:

(Full code for this example is [here](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/authentication/users-api/hello-world).)

```java
package io.happycoding.servlets;

import com.google.appengine.api.users.UserService;
import com.google.appengine.api.users.UserServiceFactory;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/")
public class HomeServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html");

    UserService userService = UserServiceFactory.getUserService();
    if (userService.isUserLoggedIn()) {
      String userEmail = userService.getCurrentUser().getEmail();
      String urlToRedirectToAfterUserLogsOut = "/";
      String logoutUrl = userService.createLogoutURL(urlToRedirectToAfterUserLogsOut);
      
      response.getWriter().println("<p>Hello "+ userEmail + "!</p>");
      response.getWriter().println("<p>Logout <a href=\"" + logoutUrl + "\">here</a>.</p>");
    } else {
      String urlToRedirectToAfterUserLogsIn = "/";
      String loginUrl = userService.createLoginURL(urlToRedirectToAfterUserLogsIn);
      
      response.getWriter().println("<p>Hello stranger.</p>");
      response.getWriter().println("<p>Login <a href=\"" + loginUrl + "\">here</a>.</p>");
    }
  }
}
```

Let's talk about exactly what this code is doing:

## UserService

To use the Users API, we first get a reference to `UserService`:

```java
UserService userService = UserServiceFactory.getUserService();
```

Now we can use this `userService` variable to get login and logout links, as well as information about the current logged-in user.

## Login and Logout Links

Instead of handling login and logout ourselves, we're going to let Google handle all of that stuff. So to login a user, we need to send them to Google's login page, and then ask Google to send the user back to us after they login.

We do that by calling the `createLoginURL()` function and passing it the URL that the user should be sent to after they login. The `createLoginURL()` returns a URL to a page that shows Google's login form and then redirects back to your URL after the user logs in.

```java
UserService userService = UserServiceFactory.getUserService();
String urlToRedirectToAfterUserLogsIn = "/url/on/my/site";
String loginUrl = userService.createLoginURL(urlToRedirectToAfterUserLogsOut);
```

Now that we have the `loginURL`, we can display that to the user whenever we want them to login.

Logging out works in the exact same way.

## Is the user logged in?

We probably want to show a login link to users who aren't logged in, and a logout link to users who are logged in. We can determine whether a user is currently logged in using the `isUserLoggedIn()` function, which returns a `boolean` value that we can then use in an `if` statement:

```java
if (userService.isUserLoggedIn()) {
  // user is logged in
} else{
  // user is not logged in
}
```

This is also useful for restricting certain actions like submitting new data or uploading a new file to users who are logged in.

## User Info

After a user logs in, we can call the `getCurrentUser()` function to get information about the current user. This function returns an instance of the `User` class.

You can take a look at the documentation [here](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/users/User) for a list of functions, but the two functions you'll most likely use are:

- `getEmail()` returns the user's email address. Note that this won't always be an `@gmail.com` address, because users can login to Google using a [G Suite](https://gsuite.google.com/) account for any domain. Also note that it's possible for users to change their email addresses, so you might not want to use this to identify a user.
- `getUserId()` returns the user's ID. This is unique to each user and will not change even if the user changes their email address, so it's safe to use this to identify a user.

**Note:** if you're going to include the user's ID in a URL, for example something like `/users/[USER_ID_HERE]`, then you should [obfuscate](https://en.wikipedia.org/wiki/Obfuscation) it using a hashing algorithm. If you don't do this, then badguys can use the ID to associate users across different websites.

To associate a set of data (for example a message sent by the user, or a file uploaded by the user), you'd store the user ID alongside that data in Datastore. Then to fetch the data, you'd query for the data that contains the user ID. We'll see an example in a minute. 

## Devserver vs Live Server

When you deploy to your live server, the Users API will use the real Google sign-in page.

When you deploy to a local devserver, the Users API will use a dummy sign-in page that lets you pretend to be any user. This is handy for testing your code out locally before deploying it to your live server.

# Examples

Here are a few example projects that use the Users API.

- [Hello World](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/authentication/users-api/hello-world) is a barebones example that lets a user login.
- [Shoutbox v3](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/authentication/users-api/shoutbox-v3): associates users with data, specifically by displaying user email addresses next to messages they post.
- [Nicknames](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/authentication/users-api/user-nicknames) shows an approach that lets users specify nicknames, so you can avoid using their emails or IDs for display or to build URLs.

# Other Approaches

This tutorial introduced the Users API, mostly because it's the easiest way to implement authentication if you're using App Engine. But there are many other ways to handle registration and login.

[OAuth](https://developers.google.com/identity/protocols/OAuth2) and [OpenID](https://developers.google.com/identity/protocols/OpenIDConnect) both allow users to login to your site using their accounts from other sites. For example a user could user to their Twitter account to identify themsevles on your site. This is pretty similar to what we saw above, but is not confined to Google accounts.

Or you could handle registration and login yourself. This approach generally works like this:

- Your project would contain a registration page consisting of a form that allowed users to create accounts. When the user submits that form, you'd store their username and password. Make sure you [store passwords securely](/tutorials/java-server/secure-password-storage)!
- Your project would also have a login page consisting of another form that allowed users to enter a username and password. When the user submits that form, you'd check what they submitted against the data that you have stored.
- If the username and password match the data you have stored, then you could use something like [sessions](/tutorials/java-server/sessions) to track the fact that the user logged in.

You could also take a hybrid approach and support all of the above.
