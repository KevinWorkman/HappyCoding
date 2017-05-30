---
layout: tutorial
title: Jetty Setup
thumbnail: /tutorials/java-server/images/jetty-setup-4.png
tagline: Run your own server.
sort-key: 100
meta-title: Jetty Setup
meta-description: Run your own server.
meta-image: /tutorials/java-server/images/jetty-setup-5.png
tags: [tutorial, java, server]
---

When we use the term *server*, we might mean two different things:

- Hardware, or the computer that receives and sends messages and files.
- Software, or the code that's running on that computer to handle a request.

This tutorial goes through the process of downloading [Jetty](http://www.eclipse.org/jetty/), which is a (software) server, and running it on your computer to turn your computer into a (hardware) server.

There are other types of servers (both software and hardware), but the setup for those is pretty similar. We're starting with Jetty because it's simple, and we'll work our way up towards the more complicated stuff.

## Download Jetty

Jetty is bundled as a `.zip` file, which can be downloaded [here](http://www.eclipse.org/jetty/download.html).

Download that file, and then unzip it anywhere. I just put mine on my desktop. You can always move it later.

## Run start.jar

Open a console to your Jetty directory. There should be a `start.jar` file inside that directory. Run it!

```
java -jar start.jar
```

This runs Jetty, which turns your computer into a server. This is very useful for debugging server code before uploading it to a real server!

To prove that Jetty is working, open a web browser and navigate to [http://localhost:8080/](http://localhost:8080/) which should give you an error that looks like this:

![Jetty 404 error](/tutorials/java-server/images/jetty-setup-1.png)

If you're seeing this, that's a good thing! It means that Jetty is running, but you haven't added any web apps to it. Let's do that now!

## Static Web App

For our purposes, you can think of a web app as a website and everything in it. There are different types of web apps, but for now that definition will get us pretty far. A server can run multiple web apps. Now that we have Jetty running, we can add web apps to it!

In the following tutorials, we'll learn how to create a dynamic web app (a website that requires code to run on a server), but for now let's test our Jetty installation using a static web app (a website that's just files).

In your Jetty folder, notice the `webapps` directory. This is where your web apps will go.

Adding a web app to our server is as simple as adding a folder to  the `webapps` directory. Let's add a folder named `HelloWorld` for now. Inside the `HelloWorld` directory, save this HTML to a file named `index.html`:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Testing Jetty</title>
	</head>
	<body>
		<h1>Happy Coding</h1>
		<p>Hello world!</p>
	</body>
</html>
```

Your directory structure should look like this:

- `jetty/`
  - `start.jar`
  - `(bunch of other files)`
  - `webapps/`
    - `HelloWorld/`
      - `index.html`
      
Now open your web browser to [http://localhost:8080/HelloWorld/index.html](http://localhost:8080/HelloWorld/index.html), and you should see this:

![Jetty hello world](/tutorials/java-server/images/jetty-setup-2.png)

Notice that you didn't have to restart the Jetty server. It should automatically detect changes to the `webapps` folder.

Congratulations, you just wrote your first web app! :tada:

## Root Web App

Notice that the URL for our web app contains the `HelloWorld` directory. This is useful if you have multiple web apps running on the same server, but you also might want to create a "top level" web app. To do that, basically all you need to do is create a web app named `root`.

In your `webapps` directory, create another folder named `root`. And in that `root` folder, save this HTML to another file named `index.html`:

```html
<!DOCTYPE html>
<html>
	<head>
		<title>Root Web App</title>
	</head>
	<body>
		<h1>Root Web App</h1>
		<p><a href="http://localhost:8080/HelloWorld/index.html">Here</a> is a link to the Hello World app.</p>
	</body>
</html>
```

Now open up your web browser to [http://localhost:8080/index.html](http://localhost:8080/index.html), and you should see this:

![Jetty root web app](/tutorials/java-server/images/jetty-setup-3.png)

Note that this URL does not contain the `root` directory.

Also note that you can link between web apps, just like you can link between web pages- because that's what these are!


