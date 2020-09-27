---
layout: tutorial
title: Natural Language Standalone Hello World
thumbnail: /tutorials/google-cloud/images/natural-language-3.png
tagline:  Use machine learning to analyze natural language.
sort-key: 300
meta-title: Google Cloud Natural Language Standalone Hello World Example
meta-description: Use machine learning to analyze natural language.
meta-image: /tutorials/google-cloud/images/natural-language-4.png
previousPost: /examples/google-cloud/
tags: [example, java, google-cloud, natural-language]
---

This is a command line program that uses [Google Cloud Natural Language](/tutorials/google-cloud/natural-language) to perform sentiment analysis on some text.

View the code for this project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/natural-language-hello-world-standalone).

Download the code as a `.zip` from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/natural-language-hello-world-standalone).

This example prints out the sentiment score for the string `"Happy coding!"`.

**pom.xml**

`pom.xml` is a Maven POM file that defines the project.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>google-cloud-natural-language-hello-world-standalone</artifactId>
  <version>1</version>

  <properties>
    <exec.mainClass>io.happycoding.naturallanguage.NaturalLanguageHelloWorld</exec.mainClass>
    <exec.cleanupDaemonThreads>false</exec.cleanupDaemonThreads>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>google-cloud-language</artifactId>
      <version>1.101.0</version>
    </dependency>
  </dependencies>

</project>
```

**NaturalLanguageHelloWorld.java**

`NaturalLanguageHelloWorld.java` contains a `main()` method that sends a sentiment analysis request and outputs the result.

```java
package io.happycoding.naturallanguage;

import com.google.cloud.language.v1.AnalyzeSentimentResponse;
import com.google.cloud.language.v1.Document;
import com.google.cloud.language.v1.Document.Type;
import com.google.cloud.language.v1.LanguageServiceClient;
import com.google.cloud.language.v1.Sentiment;
import java.io.IOException;

public class NaturalLanguageHelloWorld {

  public static void main(String[] args) throws IOException {

    String text = "Happy coding!";
    
    // Create a Document containing plain text content
    Document doc = Document.newBuilder()
      .setContent(text).setType(Type.PLAIN_TEXT).build();

    // Get the document's sentiment score
    LanguageServiceClient languageService = LanguageServiceClient.create();
    AnalyzeSentimentResponse response = languageService.analyzeSentiment(doc);
    Sentiment sentiment = response.getDocumentSentiment();

    // Close the service
    languageService.close();

    // Print the sentiment score
    float sentimentScore = sentiment.getScore();
    System.out.println("Score: " + sentimentScore);
  }
}
```

Run this project by executing this command:

```
mvn package exec:java
```

Learn more in these tutorials:

{% include url-thumbnail.html url="/tutorials/google-cloud/natural-language" %}
{% include url-thumbnail.html url="/tutorials/java/" %}