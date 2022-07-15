---
layout: tutorial
title: "Hello World: Embedded Jetty (Maven)"
thumbnail: /tutorials/java-server/images/jetty-setup-4.png
tagline: Use Maven to run an embedded Jetty server.
sort-key: 140
meta-title: "Hello World Server Example: Embedded Jetty (Maven)"
meta-description: Use Maven to run an embedded Jetty server.
meta-image: /tutorials/java-server/images/jetty-setup-4.png
tags: [example, java, server, jetty]
---


This example uses [Maven](https://maven.apache.org/) to compile and run an embedded Jetty server.

**pom.xml**

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>embedded-jetty-hello-world</artifactId>
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

**/src/main/webapp/index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Jetty Hello World</title>
  </head>
  <body>
    <h1>Jetty Hello World</h1>
    <p>This is a sample HTML file. Click <a href="/hello">here</a> to see content served from a servlet.</p>
    <p>Learn more at <a href="https://happycoding.io">HappyCoding.io</a>.</p>
  </body>
</html>
```

**/io/happycoding/servlets/HelloWorldServlet.java**

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

**/src/main/java/io/happycoding/ServerMain.java**

```java
package io.happycoding;

import java.net.URL;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.webapp.WebAppContext;

/** Starts up a server that serves static files and annotated servlets. */
public class ServerMain {

  public static void main(String[] args) throws Exception {

    // Create a server that listens on port 8080.
    Server server = new Server(8080);
    WebAppContext webAppContext = new WebAppContext();
    server.setHandler(webAppContext);

    // Load static content from inside the jar file.
    URL webAppDir =
        ServerMain.class.getClassLoader().getResource("META-INF/resources");
    webAppContext.setResourceBase(webAppDir.toURI().toString());

    // Look for annotations in the classes directory (dev server) and in the
    // jar file (live server)
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

You can run this locally by executing this command:

```
mvn package exec:java
```

You can view the directory [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/hello-world-embedded-jetty-maven) or download it as a zip file [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/hello-world-embedded-jetty-maven).

See the [Embedded Jetty](/tutorials/java-server/embedded-jetty) tutorial for more info!
