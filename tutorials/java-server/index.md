---
title: Server Tutorials
layout: default
thumbnail: /tutorials/java-server/images/java-ee-1.png
categories: [tutorials, java]
meta-title: Java Server Tutorials
meta-description: Learn how to create dynamic web apps!
meta-image: /tutorials/java-server/images/servlets-7.png
sort-key: 500
---

# Java Server Tutorials

These tutorials assume you're already familiar with the fundamentals of coding, and that you've already read [the Java tutorials](/tutorials/java). You should also be familiar with client-side web programming from the [HTML](/tutorials/html) and [JavaScript](/tutorials/javascript) tutorials.

# Running a Server

Pick a server and run with it.

Not sure which to choose? Try each one out and see which one you like the best!

<div class="thumbnail-link-container">
  {% include url-thumbnail.html url="/tutorials/java-server/tomcat" %}
  {% include url-thumbnail.html url="/tutorials/java-server/jetty-setup" %}
  {% include url-thumbnail.html url="/tutorials/java-server/embedded-jetty" %}
</div>

# Javax vs Jakarta

Java EE has a long and complicated history which can make tutorials and examples confusing. I'll try to simplify it as much as possible so you know what you're looking at.

Java EE stands for Java **E**nterprise **E**dition. "Enterprise" means "business", because back when it was invented in 1999, the only websites that needed server code were owned by businesses. Since then, server code has been used by many people, not just businesses, but the name stuck.

From 1999 to 2019, Java EE was continually developed by Sun and then Oracle. They launched several versions of Java EE, which included several versions of the Java servlets API. They released their code under the `javax` package, for example the `javax.servlet.http.HttpServlet` class.

Then in 2019, Oracle gave Java EE to the [Eclipse Foundation](https://www.eclipse.org/org/foundation/). But here's the weird part: they didn't let the Eclipse Foundation use the name "Java" or the `javax` package.

That meant that after 2019, Java EE was renamed to Jakarta EE, and the code itself was moved to a new `jakarta` package, for example `jakarta.servlet.http.HttpServlet`.

In other words, old tutorials will talk about Java EE and use the old `javax` package, but new tutorials will talk about Jakarta EE and use the new `jakarta` package. This also means that if you download an old version of a library or server container, it might only work with the old `javax` package, but new versions of libraries and server containers will only work with the new `jakarta` package.

This is all really confusing, so if you have a question, please reach out to me on [the Happy Coding forum](https://forum.happycoding.io)!

# Tutorials

After you've run a server, read through these tutorials in order.

<div class="thumbnail-link-container">
{% include url-thumbnail.html url="/tutorials/java-server/web-app" %}
{% include url-thumbnail.html url="/tutorials/java-server/client-server" %}
{% include url-thumbnail.html url="/tutorials/java-server/servlets" %}
{% include url-thumbnail.html url="/tutorials/java-server/jsp" %}
{% include url-thumbnail.html url="/tutorials/java-server/eclipse-ee" %}
{% include url-thumbnail.html url="/tutorials/java-server/post" %}
{% include url-thumbnail.html url="/tutorials/java-server/libraries" %}
{% include url-thumbnail.html url="/tutorials/java-server/sanitizing-user-input" %}
{% include url-thumbnail.html url="/tutorials/java-server/sessions" %}
{% include url-thumbnail.html url="/tutorials/java-server/secure-password-storage" %}
{% include url-thumbnail.html url="/tutorials/java-server/thread-safety" %}
{% include url-thumbnail.html url="/tutorials/java-server/hosting-aws" %}
{% include url-thumbnail.html url="/tutorials/java-server/hosting-google-app-engine" %}
{% include url-thumbnail.html url="/tutorials/java-server/databases" %}
{% include url-thumbnail.html url="/tutorials/java-server/uploading-files" %}
</div>

# Advanced

<div class="thumbnail-link-container">
{% include url-thumbnail.html url="/tutorials/java-server/rest-api" %}
{% include url-thumbnail.html url="/tutorials/java-server/struts" %}
</div>