---
layout: tutorial
title: Datastore (Java 8)
thumbnail: /tutorials/google-cloud/images/datastore-1.png
tagline: Store your data.
sort-key: 2300
meta-title: Google Datastore Tutorial
meta-description: Store data using Google Datastore.
meta-image: /tutorials/google-cloud/images/datastore-2.png
previousPost: /tutorials/google-cloud/java-8/app-engine
nextPost: /tutorials/google-cloud/java-8/authentication
tags: [tutorial, java, server, google, cloud, datastore, database]
---

{% include toc.md %}

At this point you should be familiar with App Engine and servlets.

This tutorial introduces Datastore, which allows us to store data.

# Post Requests

Before continuing, make sure you understand how `POST` requests work. If you're unfamiliar with `POST` requests, read the [POST requests](/tutorials/java-server/post) tutorial before continuing.

Let's start with an example webapp that uses POST requests to store data in an `ArrayList`. (This code is available [here](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/post/shoutbox-v1).)

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Shoutbox v1</title>
  </head>
  <body>
    <h1>Shoutbox v1</h1>
    <p>Type a message and click submit:</p>

    <form method="POST" action="/message">
      <textarea name="message"></textarea>
      <br/>
      <button>Submit</button>
    </form>

    <p>Learn more at <a href="https://happycoding.io">HappyCoding.io</a>.</p>
  </body>
</html>
```

This HTML file contains a `<form>` element that contains a `<textarea>` for the user to enter a message, and a `<button>` element the user can click to submit their message.

Notice the form's `action` attribute, which points to the `/message` URL, and its `method` attribute, which specifies it's a `POST` request.

**MessageServlet.java**

```java
package io.happycoding.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/message")
public class MessageServlet extends HttpServlet {
	
  // In-memory data structure for a simple example.
  // In real life you'd want to use persistent storage.
  private List<String> messages = new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getOutputStream().println("<h1>Shoutbox</h1>");
    response.getOutputStream().println("<ul>");
    for(String message: messages) {
    	response.getOutputStream().println("<li>" + message + "</li>");
    }
    response.getOutputStream().println("</ul>");
    response.getOutputStream().println("<p><a href=\"/\">Back</a></p>");
  }
  
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String message = request.getParameter("message");
    messages.add(message);
    
    // Redirect to /message. The request will be routed to the doGet() function above.
    response.sendRedirect("/message");
  }
}
```

This servlet class contains an `ArrayList` of messages. When a user navigates to the `/message` URL, its `doGet()` function fires. This function iterates over the `ArrayList` to create a response.

When a user makes a `POST` request to the `/message` URL (in our case, by submitting the form in the `index.html` file), then this servlet's `doPost()` function fires. This function adds a message to the `ArrayList` and then redirects back to a `GET` request to the `/message` servlet, which will trigger the `doGet()` function.

Try deploying this webapp to a local server.

# Persistent Storage

The above approach of using an in-memory `ArrayList` to store data might work for this simple example, but it will **not** work in real life. What happens if we have more message than fit in memory? What happens when our server restarts, or when App Engine automatically scales our server up or down?

The answer is our server will either crash or our data will be erased. This is obviously not great.

The solution to this problem is to use some kind of **persistent storage** to store the data somewhere safer. You might use a database, or file storage.

This tutorial introduces a tool called Datastore, which allows us to store data using a relatively simple Java API.

# Datastore

[Datastore](https://cloud.google.com/appengine/docs/standard/java/datastore/) is a [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database that allows us to store and load data using Java code.

Here's what our above example would look like using Datastore:

```java
package io.happycoding.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;

@WebServlet("/message")
public class MessageServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getOutputStream().println("<h1>Shoutbox</h1>");
    response.getOutputStream().println("<ul>");

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    Query query = new Query("Message").addSort("timestamp", SortDirection.DESCENDING);
    PreparedQuery results = datastore.prepare(query);
    for (Entity entity : results.asIterable()) {
      String message = (String) entity.getProperty("text");
      response.getOutputStream().println("<li>" + message + "</li>");
    }

    response.getOutputStream().println("</ul>");
    response.getOutputStream().println("<p><a href=\"/\">Back</a></p>");
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    String text = request.getParameter("message");

    DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
    Entity messageEntity = new Entity("Message");
    messageEntity.setProperty("text", text);
    messageEntity.setProperty("timestamp", System.currentTimeMillis());
    datastore.put(messageEntity);

    // Redirect to /message. The request will be routed to the doGet() function above.
    response.sendRedirect("/message");
  }
}
```

(This code is available [here](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/datastore/shoutbox-v2).)

We'll break this code down in a second.

## Maven Dependency

Datastore comes with the App Engine environment that we’re using to deploy our server, so we don’t have to do any special setup to use Datastore. We just have to add this dependency to our `pom.xml` file:

```xml
<dependency>
  <groupId>com.google.appengine</groupId>
  <artifactId>appengine-api-1.0-sdk</artifactId>
  <version>1.9.59</version>
</dependency>
```

This dependency allows us to reference the classes that come with the App Engine SDK, which includes Datastore.

## DatastoreService

Before we can use Datastore, we have to get an instance of the `DatastoreService` class. When running in App Engine, we can call the `DatastoreServiceFactory.getDatastoreService()` function:

```java
DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();
```

Now we can use this `datastore` variable to interact with Datastore.

You can read more about `DataStoreService` [here](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/datastore/DatastoreService.html).

## Entities

Data in Datastore is represented by **entities**. You can think of an entity similar to how you think about an instance of a class in Java.

An entity has a **kind**, which is similar to a class name. To create an entity of a particular kind, pass a `String` value into the `Entity` constructor:

```java
Entity myEntity = new Entity("myKind");
```

This line of code creates an `Entity` of type `myKind` and stores it in a `myEntity` variable.

An entity also has **properties**, similar to how a class can have variables. Each property is a **key** and a **value**. To set a property, you call the `setProperty()` function:

```java
myEntity.setProperty("name", "My Entity Name");
myEntity.setProperty("number", 42);
myEntity.setProperty("time", Instant.now());
```

This code adds three properties to the `myEntity` entity: `name`, `number`, and `time`. Notice that the property values can be String values, numbers, or timestamps. See [this guide](https://cloud.google.com/datastore/docs/concepts/entities#datastore-datastore-upsert-java) to learn more about the types of values you can store in an entity.

## Storing Entities

Now that we have a `datastore` variable and a `myEntity` variable, we can store the entity by passing it into the `datastore.put()` function:

```java
datastore.put(myEntity);
```

This function stores `myEntity` in Datastore so that we can load it next time we need it.

## Loading Entities

To load an entity from Datastore, we first create a `Query` instance with the kind of entity we want to load, then we pass that `Query` into the `datastore.prepare()` function, which gives us a `PreparedQuery` instance that contains all of the entities in Datastore with that kind. To loop over those entities, we can call the `asIterable()` function. Putting it all together, it looks like this:

```java
Query query = new Query("Message").addSort("timestamp", SortDirection.DESCENDING);
PreparedQuery results = datastore.prepare(query);
for (Entity entity : results.asIterable()) {
```

Then inside this loop, we can use the `entity.getProperty()` function to get the properties that were set on each entity when it was stored in Datastore.

If your results only contain a single result, then you can call the `asSingleEntity()` function instead of the `asIterable()` function.

By storing entities when the user creates them and loading them when we need to use the magain, we can use Datastore as persistent storage even when our web app is shut down or restarted.

## Updating Entities

By default, the `datastore.put()` function will create a new entry that contains the `Entity` you pass to it. If instead you want to update an existing entry, then you can either:

Load an `Entity`, change its properties, and then pass it into the `datastore.put()` function.

```
Entity entity = results.asSingleEntity();
entity.setProperty("propertyToUpdate", value);
datastore.put(entity);
```

Pass in an ID to the `Entity` constructor when you first create it, and then use that same ID when you want to update it.

```
Entity entity = new Entity("MyKind", id);
entity.setProperty("propertyToUpdate", value);
datastore.put(entity);
```

The `datastore.put()` function will check the ID of the `Entity` you give it, and either update the existing entry or create a new one.

[Here](https://github.com/KevinWorkman/GoogleCloudExamples/blob/master/authentication/users-api/user-nicknames/src/main/java/io/happycoding/servlets/NicknameServlet.java) is an example that updates entities after they've been stored in Datastore.

## Admin Page

Datastore includes an admin page that gives you access to its data. This is very useful for debugging.

To view an admin page for your local devserver, go to [http://localhost:8080/_ah/admin](http://localhost:8080/_ah/admin).

To view the admin page for your live server, go to [https://console.cloud.google.com/datastore](https://console.cloud.google.com/datastore).

# Learn More

This tutorial covered the basics of how to use Datastore, but Datastore also provides more advanced functionalities. See these resources for more info:

- [Datastore documentation](https://cloud.google.com/datastore/docs/)
- [Entities documentation](https://cloud.google.com/datastore/docs/concepts/entities)
- [Datastore API](https://cloud.google.com/appengine/docs/standard/java/javadoc/com/google/appengine/api/datastore/package-summary)