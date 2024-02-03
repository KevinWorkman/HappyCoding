---
layout: post
title: App Engine (Java 8)
thumbnail: /tutorials/java-server/images/hosting-google-app-engine-5.png
tagline: Deploy your web app.
sort-key: 2200
meta-title: Google App Engine Tutorial
meta-description: Deploy your web app on Google App Engine.
meta-image: /tutorials/java-server/images/hosting-google-app-engine-6.png
previousPost: /tutorials/google-cloud/java-8/setup
nextPost: /tutorials/google-cloud/java-8/datastore
tags: [tutorial, java, server, google, cloud, app-engine]
---

{% include toc.md %}

[App Engine](https://cloud.google.com/appengine/) is a Google Cloud framework for launching and running our code on Google servers so anyone can access it using a public URL.

At this point you've deployed the "hello world" project from the [Google Cloud Setup](/tutorials/google-cloud/setup) tutorial, using the `mvn appengine:devserver` and `mvn appengine:update` commands.

Those commands deploy to App Engine, either locally or on your live server. This tutorial talks about App Engine in more detail.

# Hello World

If you haven't already, you can download a barebones example webapp from [here](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/hello-world).

This project contains 4 files:

- `hello-world/`
  - **`pom.xml`** is a Maven [POM file](https://maven.apache.org/pom.html) and defines our project.
  - `src/main/` is a directory that contains our code.
    - `webapp/` is a directory that contains web files.
      - **`index.html`** is an HTML file that shows static content.
    - `WEB-INF/` is a directory that contains files we don't want users to access, like config files.
      - **`appengine-web.xml`** is a config file that sets up our App Engine deployment.
    - `java/` is a directory that contains our server-side code.
      - `io.happycoding.servlets` is a Java package.
        - **`HelloWorldServlet.java`** is a Java servlet that runs server-side code and returns some HTML content.

Navigate to the `hello-world` directory in a command line, and then execute this command:

```
mvn appengine:devserver
```

When the command completes and you see `Dev App Server is now running` in your command line, visit this url in a web browser:

[localhost:8080](http://localhost:8080)

This URL points to the local server that we just ran. You should see this:

![local server](/tutorials/google-cloud/images/setup-7.png)

This is the HTML content of the `index.html` file in our project.

Navigate to [localhost:8080/hello](http://localhost:8080/hello) to view the content that's served by the `HelloWorldServlet` class.

# Servers and Servlets

We can use the above approach to run a **server**, which is just a computer that runs code to **serve** content when users request a particular URL. When we run locally, our computer acts as the server. When we deploy to App Engine, a computer inside Google's infrastructure acts as the server.

Servers support many programming languages and types of code. To keep things simple, most of our examples use the **Java servlet API** which is a framework based on Java classes for fulfilling server requests.

If you're new to servlets, you should read through the [Java servlets](/tutorials/java-server/servlets) tutorial before continuing. At the very least, make sure you understand that when a user makes a request to the `/hello` URL, that request is routed to the `HelloWorldServlet` class, which returns a response.

We can also serve static content from our App Engine server. The hello world project contains one `index.html` file. Other static content might include JavaScript, CSS, or image files.

App Engine creates a server that maps URLs to our Java servlets and to our static content. This lets us deploy our code as a webapp that other people can access over the internet.

# appengine-web.xml

The `appengine-web.xml` file contains configuration data required by App Engine.

The most important property in this file is the `<application>` tag, which lets you specify which Google Cloud Project the code should deploy to. This determines stuff like what the public URL will look like, and will later be responsible for things like billing or quota management.

The file contains a few other properties:

- `version` specifies a version label. You can use this to deploy multiple versions of your webapp to the same server. For most purposes you can ignore this property.
- `threadsafe`specifies whether your code is thread-safe. If this is true, App Engine will allow multiple requests to run at the same time. Read the [thread safety](/tutorials/java-server/thread-safety) tutorial for more info. For now, just keep this false.
- `sessions-enabled` specifies whether [sessions](https://en.wikipedia.org/wiki/Session_(computer_science)) should be enabled. Read the [sessions](/tutorials/java-server/sessions) tutorial for more info.
- `runtime` specifies which version of Java your server should use. Currently, App Engine supports up to Java 8.

This is a minimum set of properties that App Engine requires, but there are a ton of other properties you can set. See [this guide](https://cloud.google.com/appengine/docs/standard/java/config/appref) for more info.

# App Engine Plugin

The `pom.xml` file contains this section:

```
<plugin>
  <groupId>com.google.appengine</groupId>
  <artifactId>appengine-maven-plugin</artifactId>
  <version>1.9.71</version>
</plugin>
```

This adds the [App Engine Maven plugin](https://cloud.google.com/appengine/docs/standard/java/tools/maven) to the project.

The App Engine plugin handles the server setup and deployment for us. When we run a command like `mvn appengine:devserver`, we're telling Maven to tell the App Engine plugin to run its `devserver` command.

You can read more about the commands offered by the App Engine plugin [here](https://cloud.google.com/appengine/docs/standard/java/tools/maven).

Note that you don't need to use Maven to deploy to App Engine. You could use the [App Engine SDK](https://cloud.google.com/appengine/downloads) directly instead.

# Other Considerations

Here are a few other things to keep in mind while you're developing for App Engine:

## Java Versions

App Engine currently only supports Java 8. 

The `<maven.compiler.source>` and `<maven.compiler.target>` properties in the `pom.xml` file should guarantee that the code you write works: if you try to use anything specific to a later version of Java, you'll get an error right away. But you have to be careful to make sure any libraries you call from your code are also compatible with Java 8.

## Multiple Instances

By default, App Engine will automatically scale based on how many requets it's receiving.

In other words, if only a few people are using your webapp, all of your requests are probably served from a single instance of your project. But if you suddenly get a spike of traffic, App Engine will create more instances to deal with the extra traffic automatically.

This means you don't have to worry about your code crashing if you get a surge of new users, but it also means you have to be careful about how you handle data.

Consider this example servlet:

```java
@WebServlet("/increment")
public class CountingServlet extends HttpServlet {

  int count = 0;

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    count++;

    response.setContentType("text/html;");
    response.getOutputStream().println("<h1>Count: " + count + "</h1>");
  }
}
```

This servlet maintains a `count` variable. Whenever a user visits the `/increment` URL, it increments the `count` variable and then responds with some HTML that displays the current count.

If you run this locally, it'll work fine.

But if you deploy this to your live server, and many users flock to your site, then App Engine will spawn a new instance of your project. This new instance will have its own `count` variable, which will start over at 0. Depending on which instance your users are routed to, they'll see a different set of data. I've personally been caught by this myself, so watch out for it!

The solution to this problem is to not rely on in-memory data like this, and to use a service like Datastore instead.

You can read more about App Engine scaling [here](https://cloud.google.com/appengine/docs/standard/java/how-instances-are-managed).

## Automatic Shutdown

Similar to how App Engine creates new instances if your project receives a lot of traffic, it will also shutdown instances if your project receives no traffic.

By default, App Engine will shutdown your project after 15 minutes of inactivity. Don't worry, when it receives a new request, it'll spin a new instance back up!

You generally don't have to worry about this, but if you notice that your live site takes a few seconds to refresh when you come back to it, that's probably because it's spinning back up after being shutdown due to inactivity.

You can read more about this [here](https://cloud.google.com/appengine/docs/standard/python/how-instances-are-managed).

## Logs

When you're running locally, your logs and print statements will output to your command line.

You can view this output for your live server by going to the **Logging** tab at [console.cloud.google.com](https://console.cloud.google.com) (direct link [here](https://console.cloud.google.com/logs)). You should see something like this:

![Google Cloud logs](/tutorials/google-cloud/images/app-engine-1.png)

The logs in this screenshot list each request made to my server: one to `/`, one to `/favicon.ico`, another to `/`, and one to `/hello`.

I can click on any of those requests to view the logs for it. In the screenshot, I've expanded the `/hello` request, and we can see more information about that request. **This is where stack traces, logs, and print statements show up.**

To debug a request that's behaving differently from what you expected, you'll generally go to this logging page, find the request you're trying to debug, and then expand it to see its output.

This can be a little confusing, so I'd recommend playing around with this a bit. Try adding a print statement to your servlet and finding it in the logging page. If you wait until you're trying to debug a user problem to learn how the logs work, you're going to have a bad time, so take some time to learn it now!