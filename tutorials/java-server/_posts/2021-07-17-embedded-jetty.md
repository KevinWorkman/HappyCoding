---
layout: tutorial
title: Embedded Jetty
thumbnail: /tutorials/java-server/images/jetty-setup-4.png
tagline: Run a Jetty server from Java code.
sort-key: 130
meta-title: Embedded Jetty
meta-description: Run a Jetty server from Java code.
meta-image: /tutorials/java-server/images/jetty-setup-5.png
tags: [tutorial, java, server, jetty]
---

{% include toc.md %}

This tutorial walks through the process of using [Jetty](http://www.eclipse.org/jetty/) to run a server on your computer. Running a local Jetty server is handy for testing things out without needing to update (or pay for) a live server.

Jetty is a popular Java server, especially because of its ability to run embedded in any Java application. That's what this tutorial is about, but you can also follow the [Jetty tutorial](/tutorials/java-server/jetty-setup) to use Jetty as its own server container.

# Download Jetty

Jetty is bundled as a `jetty-home` directory inside a `.zip` file, which you can download from [here](http://www.eclipse.org/jetty/download.html).

Download that file, and then unzip the directory anywhere. I put mine on my desktop. You can always move it later.

# Embedded Jetty

There are a couple of ways to use Jetty to create a server. You can either run a full server that you then add code to, or you can write code that runs an embedded Jetty server.

To learn about running a full Jetty server, check out [this tutorial](/tutorials/java-server/jetty-settup).

The rest of this tutorial walks you through running an embedded Jetty server.

# ServerMain.java

Instead of running a server and then adding code to it, you can run a Jetty server directly from a normal Java class.

Here's an example Java class that runs an embedded Jetty server:

```java
package io.happycoding;

import java.net.URL;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;

/**
 * Starts up a server that serves static files from the top-level directory.
 */
public class ServerMain {

  public static void main(String[] args) throws Exception {

    // Create a server that listens on port 8080.
    Server server = new Server(8080);
    WebAppContext webAppContext = new WebAppContext();
    server.setHandler(webAppContext);

    // Load static content from the top level directory.
    URL webAppDir = ServerMain.class.getClassLoader().getResource(".");
    webAppContext.setResourceBase(webAppDir.toURI().toString());

    // Start the server! 🚀
    server.start();
    System.out.println("Server started!");

    // Keep the main thread alive while the server is running.
    server.join();
  }
}
```

This code creates a server that listens on port `8080` and loads static files (like `index.html`) from the top level directory, and then it starts that server.

This code assumes you have a directory structure like this:

- `HelloWorld/`
  - `index.html`
  - `io/happycoding/` (this is a directory representing a package)
    - `ServerMain.java`

Notably, the static files (like `index.html`) are in the top-level directory, and the packages and classes are in that same top-level directory. You can also have a more complicated directory structure, but you'd have to change the corresponding lines in the `ServerMain` class.

# Command Line

Eventually you'll probably want to use an IDE like Eclipse or Intellij to compile and run your code, but I recommend using the command line the first few times so you really understand what's going on behind the scenes.

## Example Project

You can view and download an example project that uses the command line to deploy an embedded Jetty server here:

{% include url-thumbnail.html url="/examples/java-server/hello-world-embedded-jetty-command-line" %}

This section of the tutorial walks through this example project.

## Compiling

To compile this code, open a command line to the `HelloWorld` directory and then run this command:

```
javac -cp /jetty-home/lib/* io/happycoding/ServerMain.java
```

Don't forget to change the classpath to your local copy of Jetty! For example, the command I would run is this:

```
javac -cp C:/Users/kevin/Desktop/jetty-home-11.0.5/lib/* io/happycoding/ServerMain.java
```

## Running

And then to run the `ServerMain` class, run this command:

```
java -cp /jetty-home/lib/*;jetty-home/lib/annotations/*;jetty-home/lib/apache-jsp/*;jetty-home/lib/jaspi/*;/jetty-home/lib/logging/*;.; io.happycoding.ServerMain
```

For example, the command I would run is this:

```
java -cp C:\Users\kevin\Desktop\jetty-home-11.0.5\lib\*;C:\Users\kevin\Desktop\jetty-home-11.0.5\lib\annotations\*;C:\Users\kevin\Desktop\jetty-home-11.0.5\lib\apache-jsp\*;C:\Users\kevin\Desktop\jetty-home-11.0.5\lib\jaspi\*;C:\Users\kevin\Desktop\jetty-home-11.0.5\lib\logging\*;.; io.happycoding.ServerMain
```

The classpath to run the server is a bit more complicated than the classpath to compile the server, because running the server requires a few other libraries that aren't used directly by the `ServerMain` class.

You should see `Server started!` in your command line. That means you can navigate to [localhost:8080](http://localhost:8080) to see the `index.html` file:

![index.html file in the browser](/tutorials/java-server/images/embedded-jetty-1.png)

Try changing your `index.html` file, restarting the server, and refreshing the page to see your changes!

# Servlets

You'll learn more about servlets in the [servlets tutorial](/tutorials/java-server/servlets), but for now, let's look at how the `ServerMain.java` file can also load server code.

Let's say you have this servlet class in the `io.happycoding` package:

```java
package io.happycoding;

import java.io.IOException;

import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("<h1>Hello world!</h1>");
  }
}
```

This servlet uses the `@WebServlet` annotation to map to the `/hello` URL and writes a hard-coded `<h1>Hello world!</h1>` message to the response.

For the embedded Jetty server to see this class, you need to add this line of code to your `ServerMain.java` file:

```java
// Look for annotations in classes and packages in the top level directory.
webAppContext.setAttribute(
    "org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern", ".*/");
```

Then, to compile both the `ServerMain.java` file and the `HelloWorldServlet.java` file, `cd` into the `HelloWorld` directory and run this command:

```
javac -cp /jetty-home/lib/* io.happycoding.*.java 
```

For example, here's the command I would run:

```
javac -cp C:/Users/kevin/Desktop/jetty-home-11.0.5/lib/* io.happycoding.*.java 
```

Then, run the `ServerMain` class:

```
java -cp /jetty-home/lib/*;jetty-home/lib/annotations/*;jetty-home/lib/apache-jsp/*;jetty-home/lib/jaspi/*;/jetty-home/lib/logging/*;.; io.happycoding.ServerMain
```

You should see `Server started!` in your command line, and you should still be able to navigate to [localhost:8080](http://localhost:8080) to see your `index.html` file. And you should now be able to navigate to [localhost:8080/hello](http://localhost:8080/hello) to see the content generated from the servlet!

![servlet response in the browser](/tutorials/java-server/images/embedded-jetty-2.png)

# Maven

So far, this tutorial has used the command line to compile and run the code. You can keep using that approach if you want, but it can get pretty annoying to handle the classpath yourself, especially as you start using other libraries.

[Maven](https://maven.apache.org/) is a tool that manages the classpath for you, and makes it easier to compile and build (and eventually deploy) your server. To use Maven, first download and install it from [here](https://maven.apache.org/download.cgi).

## Example Project

You can view and download an example project that uses Maven to deploy an embedded Jetty server here:

{% include url-thumbnail.html url="/examples/java-server/hello-world-embedded-jetty-maven" %}

The rest of this tutorial walks through this example project.

## Maven Directory Structure

Maven expects a [specific directory structure](https://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html):

- `Web App Name`
  - `pom.xml`
  - `src/`
    - `main/`
      - `java/`
        - Java packages and classes go here
      - `webapp/`
        - Static files like `index.html`, `script.js`, and `styles.css` go here

For example, you might have a `HelloWorld` webapp directory that looks like this:

- `HelloWorld`
  - `pom.xml`
  - `src/`
    - `main/`
      - `java/`
        - `/io/happycoding/`
          - `ServerMain.java`
          - `HelloWorldServlet.java`
      - `webapp/`
        - `index.html`

## pom.xml

Maven uses a `pom.xml` file to configure a project, including information about the classpath and how to compile and build the project. Here's an example `pom.xml` file:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>jetty-hello-world</artifactId>
  <version>1</version>

  <properties>
    <!-- Java 11 -->
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <jetty.version>11.0.5</jetty.version>
    <exec.mainClass>io.happycoding.ServerMain</exec.mainClass>
  </properties>

  <dependencies>
    <!-- Jakarta Servlets API -->
    <dependency>
      <groupId>jakarta.servlet</groupId>
      <artifactId>jakarta.servlet-api</artifactId>
      <version>5.0.0</version>
      <scope>provided</scope>
    </dependency>

    <!-- Jetty -->
    <dependency>
      <groupId>org.eclipse.jetty</groupId>
      <artifactId>jetty-server</artifactId>
      <version>${jetty.version}</version>
    </dependency>
    <dependency>
      <groupId>org.eclipse.jetty</groupId>
      <artifactId>jetty-annotations</artifactId>
      <version>${jetty.version}</version>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <!-- Copy static resources like html files into the output jar file. -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-resources-plugin</artifactId>
        <version>2.7</version>
        <executions>
          <execution>
            <id>copy-web-resources</id>
            <phase>compile</phase>
            <goals><goal>copy-resources</goal></goals>
            <configuration>
              <outputDirectory>
                ${project.build.directory}/classes/META-INF/resources
              </outputDirectory>
              <resources>
                <resource><directory>./src/main/webapp</directory></resource>
              </resources>
            </configuration>
          </execution>
        </executions>
      </plugin>

      <!-- Package everything into a single executable jar file. -->
      <plugin>
        <groupId>org.apache.maven.plugins</groupId>
        <artifactId>maven-shade-plugin</artifactId>
        <version>3.2.4</version>
        <executions>
          <execution>
            <phase>package</phase>
            <goals><goal>shade</goal></goals>
            <configuration>
              <createDependencyReducedPom>false</createDependencyReducedPom>
              <transformers>
                <transformer implementation="org.apache.maven.plugins.shade.resource.ManifestResourceTransformer">
                  <mainClass>${exec.mainClass}</mainClass>
                </transformer>
              </transformers>
            </configuration>
          </execution>
        </executions>
      </plugin>
    </plugins>
  </build>
</project>
```

## ServerMain.java

Next, because Maven's directory structure is a bit different, you'll need to change a few things in your `ServerMain.java` file:

```java
package io.happycoding;

import java.net.URL;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;

/**
 * Starts up a server that serves static files and annotated servlets.
 */
public class ServerMain {

  public static void main(String[] args) throws Exception {

    // Create a server that listens on port 8080.
    Server server = new Server(8080);
    WebAppContext webAppContext = new WebAppContext();
    server.setHandler(webAppContext);

    // Load static content from the resources directory.
    URL webAppDir =
        ServerMain.class.getClassLoader().getResource("META-INF/resources");
    webAppContext.setResourceBase(webAppDir.toURI().toString());

    // Look for annotations in the classes directory (dev server) and in the
    // jar file (live server).
    webAppContext.setAttribute(
        "org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern", 
        ".*/target/classes/|.*\\.jar");

    // Start the server! 🚀
    server.start();
    System.out.println("Server started!");

    // Keep the main thread alive while the server is running.
    server.join();
  }
}
```

Specifically, notice that the static content and the annotations are loaded from specific locations.

To see why those locations make sense, `cd` into the `HelloWorld` directory and run this command:

```
mvn package
```

This tells Maven to compile and build your code based on the `pom.xml` file, and then Maven copies the compiled code into a `target` directory. Try exploring the `HellowWorld/target` directory to see the directory structure that Maven outputs, which is why the static files and annotations are loaded from those locations.

## Running a Server

Finally, to run a local server, execute this command:

```
mvn exec:java
```

This command tells Maven to run the code as a Java application, by running the `main()` method in the `ServerMain` class.

Now you can visit [localhost:8080](http://localhost:8080) to see your web app!

![index.html file in the browser](/tutorials/java-server/images/embedded-jetty-1.png)

Note that you can run multiple Maven commands in one step. For example, this command clears out old copies of your code, packages a new version, and runs a server with that new code:

```
mvn clean package exec:java
```

You'll run this command a lot when developing an embedded Jetty server using Maven!

# Homework

Add a few HTML pages to your `HelloWorld` web app, and then run your server again to see them in the browser.

# Examples

{% include url-thumbnail.html url="/examples/java-server/hello-world-embedded-jetty-command-line" %}
{% include url-thumbnail.html url="/examples/java-server/hello-world-embedded-jetty-maven" %}
