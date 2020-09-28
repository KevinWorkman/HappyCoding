---
layout: tutorial
title: Translation Standalone Hello World
thumbnail: /tutorials/google-cloud/images/translation-2.png
tagline:  Use Google Translate in your own code.
sort-key: 300
meta-title: Google Translation Standalone Hello World Example
meta-description: Use Google Translate in your own code.
meta-image: /tutorials/google-cloud/images/translation-3.png
previousPost: /examples/google-cloud/
tags: [example, java, google-cloud, translation]
---

This is a command line program that uses [Google Translate](/tutorials/google-cloud/translation) to translate some text.

View the code for this project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/translation-hello-world-standalone).

Download the code as a `.zip` from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/translation-hello-world-standalone).

This example prints out the Spanish translation for the string `"Happy coding!"`.

**pom.xml**

`pom.xml` is a Maven POM file that defines the project.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>google-cloud-translation-hello-world-standalone</artifactId>
  <version>1</version>

  <properties>
    <exec.mainClass>io.happycoding.translation.TranslationHelloWorld</exec.mainClass>
    <exec.cleanupDaemonThreads>false</exec.cleanupDaemonThreads>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>google-cloud-translate</artifactId>
      <version>1.95.2</version>
    </dependency>
  </dependencies>

</project>
```

**TranslationHelloWorld.java**

`TranslationHelloWorld.java` contains a `main()` method that sends a translation request and outputs the result.

```java
package io.happycoding.translation;

import com.google.cloud.translate.Translate;
import com.google.cloud.translate.Translate.TranslateOption;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;

public class TranslationHelloWorld {

  public static void main(String[] args) {

    String originalText = "Happy coding!";

    // Create an instance of Translate to send the translation request
    Translate translate = TranslateOptions.getDefaultInstance().getService();
    
    // Translate into Spanish (es)
    Translation translation =
        translate.translate(originalText, TranslateOption.targetLanguage("es"));

    // Get the translated text
    String translatedText = translation.getTranslatedText();

    // Print the translated text
    System.out.println("Translated text: " + translatedText);
  }
}
```

Run this project by executing this command:

```
mvn package exec:java
```

Learn more in these tutorials:

{% include url-thumbnail.html url="/tutorials/google-cloud/translation" %}
{% include url-thumbnail.html url="/tutorials/java/" %}