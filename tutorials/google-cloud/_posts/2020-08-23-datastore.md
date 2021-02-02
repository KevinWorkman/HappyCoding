---
layout: tutorial
title: Datastore
thumbnail: /tutorials/google-cloud/images/datastore-1.png
tagline: Store your data.
sort-key: 300
meta-title: Google Datastore Tutorial
meta-description: Store data using Google Datastore.
meta-image: /tutorials/google-cloud/images/datastore-2.png
previousPost: /tutorials/google-cloud/app-engine
nextPost: /tutorials/google-cloud/oauth-2
tags: [tutorial, java, server, google, cloud, datastore, database]
updated: 2020-08-23
---

{% include toc.md %}

So far, you've used [App Engine](/tutorials/google-cloud/app-engine) to deploy a server. You've seen an example that uses servlets to generate content on the server with Java.

This tutorial introduces [Datastore](https://cloud.google.com/appengine/docs/standard/java11/using-cloud-datastore). Like its name suggests, Datastore lets you store data on your server. More specifically, Datastore is a [NoSQL](https://en.wikipedia.org/wiki/NoSQL) database that allows you to store and load data using Java code.

# Firestore in Datastore Mode

The full name of Datastore is "Cloud Firestore in Datastore mode", but for brevity I'm going to call it "Datastore" in this tutorial.

There was also a standalone Datastore library which has since been deprecated. This is very confusing, but keep in mind that this guide covers the newer Cloud SDK-based Firestore in Datastore mode library, not the older standalone Datastore library.

# Post Requests

Before continuing, make sure you understand how `POST` requests work. If you're unfamiliar with `POST` requests, read the [POST requests](/tutorials/java-server/post) tutorial first!

Let's start with an example webapp that uses POST requests to store data in an `ArrayList`. You can download this example project [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/shoutbox-v1).

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
  // This is for testing only!
  // In real life you'd want to use persistent storage like Datastore.
  private List<String> messages = new ArrayList<>();

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("<h1>Shoutbox</h1>");
    response.getWriter().println("<ul>");
    for(String message: messages) {
    	response.getWriter().println("<li>" + message + "</li>");
    }
    response.getWriter().println("</ul>");
    response.getWriter().println("<p><a href=\"/\">Back</a></p>");
  }

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    String message = request.getParameter("message");
    messages.add(message);
 
    // Redirect to /message.
    // The request will be routed to the doGet() function above.
    response.sendRedirect("/message");
  }
}
```

This servlet class contains an `ArrayList` of messages. When a user navigates to the `/message` URL, its `doGet()` function fires. This function iterates over the `ArrayList` to create an HTML response.

When a user makes a `POST` request to the `/message` URL (in this case, by submitting the form in the `index.html` file), then this servlet's `doPost()` function fires. This function adds a message to the `ArrayList` and then redirects back to a `GET` request to the `/message` URL, which will trigger the `doGet()` function.

Try deploying this webapp to a local server by running this command:

```bash
mvn package exec:java
```

# Persistent Storage

The above approach of using an in-memory `ArrayList` to store data might work for this small example, but it will **not** work in real life. What happens when the server restarts, or when App Engine automatically scales the server up or down? What happens if you have more message than fit in memory?

The answer is that the server will either crash or the data will be erased. This is obviously not great.

The solution to this problem is to use [persistent storage](https://en.wikipedia.org/wiki/Persistence_(computer_science)) to store the data somewhere safer. You might store data in a file, or in a database.

This tutorial introduces a tool called Datastore, which lets you store data using Java code.

# Maven Dependency

To use the Datastore Java library in your code, you first need to add the Datastore dependency to your `pom.xml` file:

```xml
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-datastore</artifactId>
  <version>1.104.0</version>
</dependency>
```

# Entities

Data in Datastore is represented by **entities**. You can think of an entity similar to how you think about an instance of a class in Java.

An entity has a **kind**, which is similar to a class name. To create an entity of a particular kind, first create a `KeyFactory` for that kind, and then use that `KeyFactory` to create a key that you then pass into the `Entity.newBuilder()` function.

```java
Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
KeyFactory keyFactory = datastore.newKeyFactory().setKind("Message");
FullEntity messageEntity = Entity.newBuilder(keyFactory.newKey())
  .set("text", text)
  .set("timestamp", System.currentTimeMillis())
  .build();
```

An entity also has **properties**, similar to how a class can have variables. Each property is a **key** and a **value**. To set a property, you call the `set()` function.

The code above adds two properties to the `myEntity` entity: `text` and `timestamp`. Property values can be String values, numbers, or timestamps. See [this guide](https://cloud.google.com/datastore/docs/concepts/entities#datastore-datastore-properties-java) to learn more about the types of values you can store in an entity.

# Storing Entities

Now that you have a `Datastore` instance and an `Entity` instance, you can store the entity by passing it into the `datastore.put()` function:

```java
datastore.put(messageEntity);
```

This function stores `messageEntity` in Datastore.

# Loading Entities

To load an entity from Datastore, first create a `Query` instance with the kind of entity you want to load along with any sorting or filtering rules, then you pass that `Query` into the `datastore.run()` function, which returns a `QueryResults` instance.

```java
Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

Query<Entity> query = Query.newEntityQueryBuilder()
  .setKind("Message")
  .setOrderBy(OrderBy.desc("timestamp"))
  .build();
QueryResults<Entity> results = datastore.run(query);
```

`QueryResults` is an `Iterator` that contains all of the entities in Datastore that match your query.

To loop over those entities, use the `hasNext()` and `next()` functions. Then call the `getString()` (or whichever getter matches the type you're retrieving.

```java
while (results.hasNext()) {
  Entity entity = results.next();
  String message = entity.getString("text");
  response.getWriter().println("<li>" + message + "</li>");
}
```

# Updating Entities

By default, the `datastore.put()` function will create a new entry that contains the `Entity` you pass to it. If instead you want to update an existing entry, then you can either:

- Load an `Entity`, change its properties, and then pass it into the `datastore.put()` function.

```
Entity entity = results.next();
entity.set("propertyToUpdate", value);
datastore.put(entity);
```

- Pass in an ID to the entity's key when you first create it, and then use that same ID when you want to update it.

```
FullEntity messageEntity = Entity.newBuilder(keyFactory.newKey(YOUR_ID_HERE))
  .set("text", text)
  .set("timestamp", System.currentTimeMillis())
  .build();
datastore.put(messageEntity);
```

The `datastore.put()` function will check the ID of the `Entity` you give it, and either update the existing entry or create a new one.

# Example

Putting it all together, here's what the `MessageServlet` looks like using Datastore instead of an in-memory `ArrayList` to store messages:

```java
package io.happycoding.servlets;

import java.io.IOException;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;

@WebServlet("/message")
public class MessageServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {

    response.setContentType("text/html;");
    response.getWriter().println("<h1>Shoutbox</h1>");
    response.getWriter().println("<ul>");
    
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

    Query<Entity> query = Query.newEntityQueryBuilder()
      .setKind("Message")
      .setOrderBy(OrderBy.desc("timestamp"))
      .build();
    QueryResults<Entity> results = datastore.run(query);

    while (results.hasNext()) {
      Entity entity = results.next();
      String message = entity.getString("text");
      response.getWriter().println("<li>" + message + "</li>");
    }
    
    response.getWriter().println("</ul>");
    response.getWriter().println("<p><a href=\"/\">Back</a></p>");
  }
  
  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    String text = request.getParameter("message");
    
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Message");
    FullEntity messageEntity = Entity.newBuilder(keyFactory.newKey())
      .set("text", text)
      .set("timestamp", System.currentTimeMillis())
      .build();
    datastore.put(messageEntity);

    // Redirect to /message.
    // The request will be routed to the doGet() function above.
    response.sendRedirect("/message");
  }
}
```

You can download this example project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/datastore-shoutbox-v2).

# Running Datastore Locally

By default, Datastore will try to connect to the database for your **live** server. This is fine if you're deploying to your live site, but if you're testing locally, you'll get an error:

```
HTTP ERROR 500
com.google.cloud.datastore.DatastoreException: Unauthenticated.
```

To fix this, you *could* set your authentication so you local code connects to your live server's Datastore, but chances are that's not what you really want to do.

Instead, you probably want to run a local copy of Datastore, just like you run a local copy of your server. This allows you to test your code without worrying about breaking your live site.

Running a local copy of Datastore requires a few steps:

**Step 1:** Run this command: `gcloud beta emulators datastore start`

**Note:** If you're using Google Cloud Shell, then find that line that looks like this in the output of the command you just ran:

```
Storage: /tmp/tmp.YOUR_PATH_HERE/emulators/datastore/WEB-INF/appengine-generated/local_db.bin
```

The `YOUR_PATH_HERE` part will be a random string of characters.

Copy the `/tmp/tmp.YOUR_PATH_HERE/emulators/datastore` path.

**Step 2:** In a different command line, follow the steps [here](https://cloud.google.com/datastore/docs/tools/datastore-emulator#setting_environment_variables) to set the environment variables that tell your server to connect to your local Datastore.

**Windows:**

```bash
gcloud beta emulators datastore env-init > set_vars.cmd && set_vars.cmd
```

**Mac / Linux:**

```bash
$(gcloud beta emulators datastore env-init)
```

**Google Cloud Shell:** If you're using Google Cloud Shell, then you need to pass the path you copied from **step 1** into the `data-dir` argument:

```
$(gcloud beta emulators datastore env-init --data-dir=/tmp/tmp.YOUR_PATH_HERE/emulators/datastore)
```

**Step 3:** In that second command line, run your local server: `mvn package exec:java`

Your local server should now be running, and it should connect to your local Datastore.

# Deploying with Live Datastore

When you deploy your live server, it will automatically connect to the live Datastore.

# Datastore Admin Page

The live version of Datastore includes an admin page that gives you access to its data. This is very useful for debugging, and for deleting old data you don't need anymore.

To view the admin page for your live server, go to [https://console.cloud.google.com/datastore](https://console.cloud.google.com/datastore).

# Learn More

This tutorial covered the basics of how to use Datastore, but Datastore also provides more advanced functionalities. See these resources for more info:

- [Datastore documentation](https://cloud.google.com/datastore/docs/) - the homepage for all things Datastore
- [Entities documentation](https://cloud.google.com/datastore/docs/concepts/entities) - your best friend when working with entities
- [Google Cloud Datastore API](https://googleapis.dev/java/google-cloud-datastore/latest/index.html) - Javadoc for Datastore
- [Running the Datastore Emulator](https://cloud.google.com/datastore/docs/tools/datastore-emulator) - more info about running Datastore locally
- [Using Cloud Firestore in Datastore Mode](https://cloud.google.com/appengine/docs/standard/java11/using-cloud-datastore) - Cloud Firestore docs that point to other pages
- [Datastore Queries](https://cloud.google.com/datastore/docs/concepts/queries) - more info about querying Datastore
- [Index Configuration](https://cloud.google.com/datastore/docs/tools/indexconfig) - more info about Datastore indexes, which you need for more complex queries
- [Using the gcloud Tool to Test Applications and Manage Indexes](https://cloud.google.com/datastore/docs/tools) - more info about running locally and using indexes