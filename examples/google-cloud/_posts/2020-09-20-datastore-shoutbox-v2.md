---
layout: tutorial
title: Shoutbox V2 (Datastore)
thumbnail: /tutorials/google-cloud/images/datastore-1.png
tagline: Store your data.
sort-key: 500
meta-title:  Shoutbox V2 (Datastore Example)
meta-description: Store data using Google Datastore.
meta-image: /tutorials/google-cloud/images/datastore-2.png
previousPost: /examples/google-cloud/
tags: [example, java, google-cloud, app-engine, datastore]
---

This project uses POST requests and Datastore to create a [shoutbox](https://en.wikipedia.org/wiki/Shoutbox) where users can post short messages.

View the code for this project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/datastore-shoutbox-v2).

Download the code as a `.zip` from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/datastore-shoutbox-v2).

![input](/examples/google-cloud/images/datastore-shoutbox-v2-1.png)

![shoutbox](/examples/google-cloud/images/datastore-shoutbox-v2-2.png)

**pom.xml**

`pom.xml` is a Maven POM file that defines the project.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>happy-coding-datastore-shoutbox-v2</artifactId>
  <version>1</version>

  <properties>
    <!-- App Engine currently supports Java 11 -->
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <jetty.version>9.4.31.v20200723</jetty.version>

    <!-- Project-specific properties -->
    <exec.mainClass>io.happycoding.ServerMain</exec.mainClass>
    <googleCloudProjectId>YOUR_PROJECT_ID_HERE</googleCloudProjectId>
  </properties>

  <dependencies>
    <!-- Java Servlets API -->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
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

    <!-- Datastore -->
    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>google-cloud-datastore</artifactId>
      <version>1.104.0</version>
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

      <!-- App Engine plugin for deploying to the live site. -->
      <plugin>
        <groupId>com.google.cloud.tools</groupId>
        <artifactId>appengine-maven-plugin</artifactId>
        <version>2.2.0</version>
        <configuration>
          <projectId>${googleCloudProjectId}</projectId>
          <version>1</version>
        </configuration>
      </plugin>
    </plugins>
  </build>
</project>
```

**app.yaml**

`app.yaml` is a [config file](https://cloud.google.com/appengine/docs/standard/java11/config/appref) that sets up App Engine. This hello world project only uses a single property that sets the runtime to Java 11.

```yaml
runtime: java11
```

**ServerMain.java**

`ServerMain.java` is the main class that sets up the server.

```java
package io.happycoding;

import java.net.URL;
import org.eclipse.jetty.annotations.AnnotationConfiguration;
import org.eclipse.jetty.server.Handler;
import org.eclipse.jetty.server.handler.DefaultHandler;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.servlet.DefaultServlet;
import org.eclipse.jetty.webapp.Configuration;
import org.eclipse.jetty.webapp.WebAppContext;
import org.eclipse.jetty.webapp.WebInfConfiguration;

/**
 * Starts up the server, including a DefaultServlet that handles static files,
 * and any servlet classes annotated with the @WebServlet annotation.
 */
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

    // Enable annotations so the server sees classes annotated with @WebServlet.
    webAppContext.setConfigurations(new Configuration[]{ 
      new AnnotationConfiguration(),
      new WebInfConfiguration(), 
    });

    // Look for annotations in the classes directory (dev server) and in the
    // jar file (live server)
    webAppContext.setAttribute(
        "org.eclipse.jetty.server.webapp.ContainerIncludeJarPattern", 
        ".*/target/classes/|.*\\.jar");

    // Handle static resources, e.g. html files.
    webAppContext.addServlet(DefaultServlet.class, "/");

    // Start the server! 🚀
    server.start();
    System.out.println("Server started!");

    // Keep the main thread alive while the server is running.
    server.join();
  }
}
```

**MessageServlet.java**

`MessageServlet.java` is a Java servlet that contains a `doGet()` function that loads messages from Datastore and outputs them as HTML, and a `doPost()` function that stores new messages in Datastore.

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

**index.html**

 `index.html` is an HTML file that shows a form with a file input.

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

Follow the directions [here](/tutorials/google-cloud/datastore#running-datastore-locally) to run this project locally.

Then visit <http://localhost:8080> in your web browser, and you should see this:

![input](/examples/google-cloud/images/datastore-shoutbox-v2-1.png)

![shoutbox](/examples/google-cloud/images/datastore-shoutbox-v2-2.png)

Learn more in these tutorials:

{% include url-thumbnail.html url="/tutorials/google-cloud/datastore" %}
{% include url-thumbnail.html url="/tutorials/java-server/post" %}