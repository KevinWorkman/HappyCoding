---
layout: tutorial
title: Migrating to Java 11
thumbnail: /tutorials/google-cloud/images/google-cloud-icon-1.png
tagline: Upgrade from Java 8 to Java 11.
sort-key: 3000
meta-title: Google Cloud Migrating from Java 8 to Java 11
meta-description: Upgrade your Google Cloud project from Java 8 to Java 11, and from the App Engine SDK to the Cloud SDK.
meta-image: /tutorials/google-cloud/images/google-cloud-icon-2.png
previousPost: /tutorials/google-cloud/
nextPost: /tutorials/google-cloud/setup
tags: [tutorial, java, google, cloud]
---

<style>
.content img {
  border: 2px solid black;
}
</style>
{% include toc.md %}

This guide outlines a process you can follow to migrate your Google Cloud server code from [Java 8](https://cloud.google.com/appengine/docs/standard/java) and the standalone App Engine SDK to [Java 11](https://cloud.google.com/appengine/docs/standard/java11) and the Cloud SDK.

For years, Java 8 was the standard Java runtime supported by Google Cloud. Then in June 2019, Google Cloud [announced](https://cloud.google.com/blog/products/application-development/turn-it-up-to-eleven-java-11-runtime-comes-to-app-engine) support for Java 11. The challenge is that code that used to work with Java 8 will no longer work in Java 11, and the [migration path](https://cloud.google.com/appengine/docs/standard/java11/java-differences) is not very obvious.

Instead of complaining about [why that is](https://mtlynch.io/why-i-quit-google/), I'm going to collect the steps I followed to upgrade my own Google Cloud code from Java 8 to Java 11.

# Migration Specifics

One thing that makes this migration confusing is that it's actually migrating three different things:

- The Maven plugin that runs the code, from the standalone App Engine Maven plugin to the Cloud SDK-based Maven plugin. This is the only step you **need** to do for your code to keep working.
- The Cloud libraries, from the App Engine-specific APIs to the Google Cloud SDK-based libraries. The App Engine-specific APIs still work for now, but they're no longer recommended by Google. You **can** do this without upgrading to Java 11.
- The Java runtime, from Java 8 to Java 11. If you're happy with Java 8, you don't need to do this. But if you want to use any features implemented in Java 9, 10, or 11, or if you want to stay more up-to-date, then you'd want to do this migration. You **can't** do this unless you also migrate any App Engine libraries you're using.

The rest of this guide outlines upgrading each of these three pieces. The end result is a codebase that uses the new Cloud SDK-based Maven plugin, the new Cloud SDK-based libraries, and the Java 11 runtime.

# Maven Plugin

The [App Engine Maven plugin](https://cloud.google.com/appengine/docs/standard/java/tools/maven) had been used to deploy servers both locally and to Google Cloud, and it was the first feature to be deprecated. You're using the App Engine Maven plugin if you have this in your `pom.xml` file:

```xml
<plugin>
  <groupId>com.google.appengine</groupId>
  <artifactId>appengine-maven-plugin</artifactId>
  <version>1.9.71</version>
</plugin>
```

This tool allowed you to deploy locally using `mvn appengine:devserver` and to a live server using `mvn appengine:update`.

Starting on [August 30, 2020](https://cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration), this Maven plugin and its corresponding commands no longer work. If you try to use them, you'll get an error message:

```bash
Application deployment failed.
Message: Deployments using appcfg are no longer supported.
See https://cloud.google.com/appengine/docs/deprecations
99% Rolling back the update.
```

To solve this, you'll need to upgrade to the new [Cloud SDK-based Maven plugin](https://cloud.google.com/appengine/docs/standard/java/using-maven).

Change the above `<plugin>` tag to this:

```xml
<plugin>
  <groupId>com.google.cloud.tools</groupId>
  <artifactId>appengine-maven-plugin</artifactId>
  <version>2.2.0</version>
  <configuration>
    <deploy.projectId>YOUR_PROJECT_ID_HERE</deploy.projectId>
    <deploy.version>1</deploy.version>
  </configuration>
</plugin>
```

Your commands for deploying your server will also change.

To run a **local dev server**, you should no longer run this command:

~~`mvn appengine:devserver`~~

Run this command instead:

```bash
mvn package appengine:run
```

Similarly, to deploy your code to a **live server**, you should no longer run this command:

~~`mvn appengine:update`~~

Run this command instead:

```
mvn package appengine:deploy
```

See [Maven Plugin docs](https://cloud.google.com/appengine/docs/standard/java/maven-reference) for more info on the new Cloud SDK-based Google Cloud Maven plugin.

# Consider Stopping There

After changing your `pom.xml` file to use the new Maven plugin, the rest of your code should work fine, as long as you continue using the Java 8 environment.

If your only goal was to get your code working again, you can stop there.

But if you want to update your libraries or migrate to the Java 11 runtime, keep reading!

# Libraries

The [standalone App Engine SDK](https://cloud.google.com/appengine/docs/standard/java/legacy-services-overview) is a set of libraries that come with the Java 8 version of App Engine. You're using the standalone App Engine SDK if you have this dependency in your `pom.xml` file:

```xml
<dependency>
  <groupId>com.google.appengine</groupId>
  <artifactId>appengine-api-1.0-sdk</artifactId>
  <version>1.9.59</version>
</dependency>
```

These libraries still work in Java 8, but they're no longer recommended by Google, and they do not work in Java 11. Instead, Google recommends using the [Cloud SDK-based libraries](https://cloud.google.com/apis/docs/cloud-client-libraries).

Rather than being one big dependency that contains a bunch of libraries, each Cloud SDK-based library is its own Maven dependency. To migrate from the standalone App Engine SDK to a Cloud SDK-based library, delete the above dependency from your `pom.xml` file and add the dependency for the library you want to use.

For example, here's the dependency for the Cloud SDK-based [Datastore](/tutorials/google-cloud/datastore) library:

```xml
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-datastore</artifactId>
  <version>1.104.0</version>
</dependency>
```

Then change your code to use the packages and classes in this library.

Not every library from the App Engine SDK is available in the Cloud SDK, and some of the libraries behave differently.

- Datastore is mostly the same, although it's now officially called "Cloud Firestore in Datastore Mode". It still uses the `Entity` class, but the functions you call to create and retrieve entities changed a bit. Learn more in the [Datastore tutorial](/tutorials/google-cloud/datastore).
- Blobstore is no longer supported. Use [Cloud Storage](/tutorials/google-cloud/cloud-storage) instead.
- The Users API is no longer supported. Use [OAuth 2.0](/tutorials/google-cloud/oauth-2) instead.
- Libraries like [Cloud Vision](/tutorials/google-cloud/vision), [Cloud Natural Language](/tutorials/google-cloud/natural-language) and [Cloud Translation](/tutorials/google-cloud/translation) were already Cloud SDK-based libraries, so nothing changes for them.

If you want to migrate to the Cloud SDK-based libraries, then I suggest taking them one at a time. It might help to think about it in terms of reimplementing certain features from scratch, rather than trying to migrate your code line by line. For example, if you're migrating from the Users API to OAuth 2.0, I wouldn't think about it as trying to replace your code that uses the Users API with code that uses OAuth 2.0, because it's not a 1:1 mapping. Instead, I would take a step back and think about your end goal, and then approach that end goal with the OAuth 2.0 library from scratch.

Check out the [Google Cloud tutorials](/tutorials/google-cloud) for more information on the Cloud SDK-based libraries.

# Java 11

To switch to the Java 11 runtime, you need to do a few things:

1. Delete your `appengine-web.xml` file.

2. Create a new `src/main/appengine/app.yaml` file that contains a single line:

   ```yaml
   runtime: java11
   ```

3. Modify the `maven.compiler.source` and `maven.compiler.target` properties in your `pom.xml` file to use Java 11:

   ```xml
   <maven.compiler.source>11</maven.compiler.source>
   <maven.compiler.target>11</maven.compiler.target>
   ```

4. Add this property to your `pom.xml` file:

   ```xml
   <googleCloudProjectId>YOU_PROJECT_ID_HERE</googleCloudProjectId>
   ```

Go to [GitHub](https://github.com/KevinWorkman/HappyCoding/blob/gh-pages/tutorials/google-cloud/google-cloud-example-projects/app-engine-hello-world/pom.xml) for a full example `pom.xml` file.

At this point, you'll get errors when you try to deploy your code to a local or live server.

`mvn package appengine:run`

```
[ERROR] Failed to execute goal com.google.cloud.tools:appengine-maven-plugin:2.2.0:run (default-cli) on project:
Failed to run devappserver: java.nio.file.NoSuchFileException: WEB-INF/appengine-web.xml 
```

`mvn package appengine:deploy`

```
[INFO] GCLOUD: ERROR: (gcloud.app.deploy) Error Response: [9] Cloud build 1234 status: FAILURE
[INFO] GCLOUD: Error ID: 838926df
[INFO] GCLOUD: Error type: UNKNOWN
[INFO] GCLOUD: Error message: did not find any jar files with a Main-Class manifest entry
[ERROR] Failed to execute goal com.google.cloud.tools:appengine-maven-plugin:2.2.0:deploy (default-cli) on project: App Engine application deployment failed: com.google.cloud.tools.appengine.operations.cloudsdk.process.ProcessHandlerException: com.google.cloud.tools.appengine.AppEngineException: Non zero exit: 1
```

That's expected, and it's because Java 11 changes how you need to package your code and deploy your server.

To fix this problem, keep reading!

# Jetty

The biggest difference between the Java 8 runtime and  the Java 11 runtime for Google Cloud is that Java 8 included a Jetty server by default, which meant that you didn't have to worry about *how* your server was deployed. Java 11 does not include this server, so you have to include your own server code.

In theory, this means you have [more freedom](https://cloud.google.com/appengine/docs/standard/java11/java-differences#framework_flexibility) to deploy using any framework. But in practice, if you were relying on your code to "just work" in App Engine, you now have an extra hoop to jump through.

There are many ways to include your own server, and if you've heard about Java frameworks, this is where they fit into the picture.

I personally recommend using [Jetty](https://www.eclipse.org/jetty/) as your server, because A: it's what the Java 8 runtime used behind the scenes and B: I find it more obvious than more complicated frameworks.

The [official example repo](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/appengine-java11) includes a few examples for different approaches you could take, including a [hello world](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/appengine-java11/helloworld-servlet) example that uses Jetty to deploy a servlets-based web app.

That example splits the Jetty code into its own [project](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/appengine-java11/appengine-simple-jetty-main), and uses some clever Maven tricks to reference it from other projects that use it. That probably makes sense for code sharing reasons, but if you're trying to deploy a single existing web app, it's probably overkill.

Instead, I recommend including the Jetty code directly in the rest of your project. In other words, add this class to your project:

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

This code uses [Jetty](https://www.eclipse.org/jetty/) to create a server. It loads static resources from inside the project's jar file, and looks for servlet classes with the `@WebServlet` annotation.

This requires other changes to your `pom.xml` file, so keep reading.

# Packaging Your Code

With the Java 8 runtime, you could take advantage of the Jetty server that App Engine deployed automatically behind the scenes. But with Java 11, you're the one deploying the server, so the way you run your code also changes.

In other words, you define the **entry point** that sets up your server. With the above Jetty approach, that's the `ServerMain` class. Instead of **deploying a web app**, you deploy a main class that **serves a web app**. This is a subtle distinction, but it makes a big difference in how you think about your code.

First, you need to make sure that static resources like HTML files are included in the output executable `.jar` file.

Add this plugin to your `pom.xml` file:

```xml
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
          <resource>
            <directory>./src/main/webapp</directory
          </resource>
        </resources>
      </configuration>
    </execution>
  </executions>
</plugin>
```

This plugin copies all static resources into the output executable.

Next, you need to package your project into a single executable `.jar` file.

Add this to your `pom.xml` file:

```xml
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
```

Now, your project does a few things:

- Uses the Maven Shade plugin to package your whole project as a single jar.
- Uses the Maven Resources plugin to include static HTML files in that single jar.
- Uses the `ServerMain` class to run a `main()` method that deploys your server.

Because of these changes, the Maven command to run your server also changes.

You should no longer run this command:

~~`mvn appengine:run`~~

Instead, run this command:

```java
mvn package exec:java
```

This command tells Maven to run the main class specified in `pom.xml` (the `ServerMain` class), which then runs a server that deploys the rest of your code.

The command to deploy to your live server stays the same:

```bash
mvn package appengine:deploy
```

Putting it all together, your `pom.xml` file should look like this:

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>app-engine-hello-world</artifactId>
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

At this point you should have a server that deploys to a local dev server and to a live server using the Cloud SDK-based Maven plugin, the Cloud SDK libraries, Jetty, and the Java 11 runtime!

# Learn More

- [Migrating to Cloud SDK](https://cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration)
- [App Engine Maven Plugin (Cloud SDK-based) Goals and Parameters](https://cloud.google.com/appengine/docs/standard/java/maven-reference)
- [Google Cloud Client Libraries](https://cloud.google.com/apis/docs/cloud-client-libraries)
- [Client Libraries Explained](https://cloud.google.com/apis/docs/client-libraries-explained)
- [Official Example Repo](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/appengine-java11)