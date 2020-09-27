---
layout: tutorial
title: Natural Language Web App Hello World
thumbnail: /tutorials/google-cloud/images/natural-language-3.png
tagline: Use machine learning to analyze natural language.
sort-key: 400
meta-title: Google Cloud Natural Language Web App Hello World Example
meta-description: Use machine learning to analyze natural language.
meta-image: /tutorials/google-cloud/images/natural-language-4.png
previousPost: /examples/google-cloud/
tags: [example, java, google-cloud, app-engine, natural-language, sentiment-analysis]
---

This is a web app that uses [Google Cloud Natural Language](/tutorials/google-cloud/natural-language) to analyze some text uploaded by the user.

View the code for this project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/natural-language-hello-world-webapp).

Download the code as a `.zip` from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/natural-language-hello-world-webapp).

![text input](/tutorials/google-cloud/images/natural-language-1.png)

![sentiment analysis](/tutorials/google-cloud/images/natural-language-2.png)

**pom.xml**

`pom.xml` is a Maven POM file that defines the project.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>google-cloud-natural-language-hello-world-webapp</artifactId>
  <version>1</version>

  <properties>
    <!-- Java 11 -->
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <jetty.version>9.4.31.v20200723</jetty.version>

    <!-- Project-specific properties -->
    <exec.mainClass>io.happycoding.ServerMain</exec.mainClass>
    <googleCloudProjectId>happy-coding-gcloud</googleCloudProjectId>
  </properties>

  <dependencies>
    <!-- Java Servlets API -->
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
    </dependency>
    
    <!-- Google Cloud Natural Language -->
    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>google-cloud-language</artifactId>
      <version>1.101.0</version>
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
              <filters>
                <filter>
                  <artifact>*:*</artifact>
                  <!-- The Cloud Natural Language library signs its jar, so exclude its signature in the output jar -->
                  <excludes>
                    <exclude>META-INF/*.SF</exclude>
                    <exclude>META-INF/*.DSA</exclude>
                    <exclude>META-INF/*.RSA</exclude>
                  </excludes>
                </filter>
              </filters>
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

**SentimentAnalysisServlet.java**

`SentimentAnalysisServlet.java` is a Java servlet that handles the `POST` request including the text entered by the user, sends the request for sentiment analysis, and outputs some HTML content.

```java
package io.happycoding.servlets;

import com.google.cloud.language.v1.Document;
import com.google.cloud.language.v1.LanguageServiceClient;
import com.google.cloud.language.v1.Sentiment;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/sentiment")
public class SentimentAnalysisServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String message = request.getParameter("message");

    Document doc = Document.newBuilder()
        .setContent(message).setType(Document.Type.PLAIN_TEXT).build();
    LanguageServiceClient languageService = LanguageServiceClient.create();
    Sentiment sentiment = languageService.analyzeSentiment(doc).getDocumentSentiment();
    languageService.close();
    float score = sentiment.getScore();

    // Output the sentiment score as HTML.
    // A real project would probably store the score in Datastore.
    response.setContentType("text/html;");
    response.getWriter().println("<h1>Sentiment Analysis</h1>");
    response.getWriter().println("<p>You entered: " + message + "</p>");
    response.getWriter().println("<p>Sentiment analysis score: " + score + "</p>");
    response.getWriter().println("<p><a href=\"/index.html\">Back</a></p>");
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
    <title>Sentiment Analysis</title>
  </head>
  <body>
    <h1>Sentiment Analysis</h1>
    <p>Type a message and click submit to analyze its sentiment:</p>

    <form method="POST" action="/sentiment">
      <textarea name="message"></textarea>
      <br/>
      <button>Submit</button>
    </form>

  </body>
</html>
```

You can run this locally by executing this command:

```
mvn package exec:java
```

Then visit <http://localhost:8080> in your web browser, and you should see this:

![text input](/tutorials/google-cloud/images/natural-language-1.png)

![sentiment analysis](/tutorials/google-cloud/images/natural-language-2.png)

Learn more in these tutorials:

{% include url-thumbnail.html url="/tutorials/google-cloud/natural-language" %}
{% include url-thumbnail.html url="/tutorials/java-server/post" %}