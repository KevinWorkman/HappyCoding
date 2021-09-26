---
layout: tutorial
title: "Hello World: Maven"
thumbnail: /tutorials/java-server/images/java-ee-1.png
tagline: Use Maven to build a web app.
sort-key: 120
meta-title: "Hello World Server Example: Maven"
meta-description: Use Maven to build a web app.
meta-image: /tutorials/java-server/images/servlets-7.png
tags: [example, java, server]
---

This example uses [Maven](https://maven.apache.org/) to build a `.war` file that can run inside a [Jetty](/tutorials/java-server/jetty-setup) or [Tomcat](/tutorials/java-server/tomcat) server.

**pom.xml**

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>hello-world-maven</artifactId>
  <version>1</version>
  <packaging>war</packaging>

  <properties>
    <!-- Java 11 -->
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
  </properties>

  <dependencies>
    <!-- Jakarta Servlets API -->
    <dependency>
      <groupId>jakarta.servlet</groupId>
      <artifactId>jakarta.servlet-api</artifactId>
      <version>5.0.0</version>
      <scope>provided</scope>
    </dependency>
  </dependencies>

  <build>
    <plugins>
      <!-- Enable building as a .war file with `mvn package` -->
      <plugin>
        <artifactId>maven-war-plugin</artifactId>
        <version>3.3.1</version>
      </plugin>
    </plugins>

    <!-- The output .war file's name, which will be the name of the webapp. -->
    <finalName>${project.artifactId}</finalName>
  </build>
</project>
```

**/src/main/webapp/index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Server Hello World: Maven</title>
  </head>
  <body>
    <h1>Happy Coding</h1>
    <p>Hello world!</p>
  </body>
</html>
```

**/src/main/java/io/happycoding/servlets/HelloWorldServlet.java**

```java
package io.happycoding.servlets;

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

You can view the directory [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/hello-world-maven) or download it as a zip file [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/java-server/java-server-example-projects/hello-world-maven).

To build a WAR file from this project, run this command:

```
mvn package
```

And then copy that WAR file into your server's `webapps` directory.

See the [Anatomy of a Web App](/tutorials/java-server/web-app) tutorial for more info!