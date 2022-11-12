---
layout: tutorial
title: Natural Language
thumbnail: /tutorials/google-cloud/images/natural-language-3.png
tagline: Use machine learning to analyze natural language.
sort-key: 700
meta-title: Google Natural Language API Tutorial
meta-description: Use machine learning to analyze natural language.
meta-image: /tutorials/google-cloud/images/natural-language-4.png
tags: [tutorial, javascript, google, cloud, natural-language]
previousPost: /tutorials/google-cloud/cloud-storage
nextPost: /tutorials/google-cloud/translation
updated: 2020-09-13
---

{% include toc.md %}

[Cloud Natural Language](https://cloud.google.com/natural-language) is a set of tools designed for parsing and understanding **unstructured text**, aka [natural language](https://en.wikipedia.org/wiki/Natural_language). For example:

- [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis) measures the positivity or negativity of text. *Is this text happy or unhappy?*
- [Entity recognition](https://en.wikipedia.org/wiki/Named-entity_recognition) extracts entities (people, places, things) from text. *Who or what does this text mention?*
- [Content classification](https://en.wikipedia.org/wiki/Document_classification) categorizes topics form text. *What topics does this text contain?*

The Google Cloud Natural Language library uses machine learning models that have already been trained, so you can skip straight to the fun stuff. It's also possible to train your own models (you can learn more about that on the [Google Cloud docs](https://cloud.google.com/automl/)), but this guide is going to stick with the pre-trained models.

# Enable Cloud Natural Language API

Before you can use the Cloud Translation API, you have to enable it. Go here:

<https://console.developers.google.com/apis/library/language.googleapis.com>

Make sure your project is selected, and click the `Enable` button.

# Credentials

The Cloud Natural Language API requires your project's credentials to work. When you deploy to App Engine this works automatically, but when running or deploying locally you have to set your credentials manually. Follow the steps on [Natural Language docs](https://cloud.google.com/natural-language/docs/setup#sa-create) to set up your local credentials.

**Important:** Before proceeding, make sure you have your `GOOGLE_APPLICATION_CREDENTIALS` environment variable set. Nothing will work without this.

# Maven Dependency

The Cloud Natural Language library is available as a web service, or as a library that can be called from many languages. This tutorial uses it as a Java library.

To add the library to your classpath, add this maven dependency to your `pom.xml` file:

```
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-language</artifactId>
  <version>1.101.0</version>
</dependency>
```

# Standalone Hello World

You can call the Cloud Natural Language library from any Java code, including standalone (non-server) code. To see how the library works, let's start with that.

You can view this example project on [GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/google-cloud/google-cloud-example-projects/natural-language-hello-world-standalone), or download it as a `.zip` file from [DownGit](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/google-cloud/google-cloud-example-projects/natural-language-hello-world-standalone).

First, create a `String` that contains the text you want to analyze:

```java
String text = "Happy coding!";
```

Then create a `Document` that contains your text:

```java
Document doc = Document.newBuilder()
  .setContent(text).setType(Type.PLAIN_TEXT).build();
```

This code uses `Type.PLAIN_TEXT` because the string contains plain text, but you can use `Type.HTML` if you're analyzing HTML content.

Next, get the document's sentiment score:

```java
LanguageServiceClient languageService = LanguageServiceClient.create();
AnalyzeSentimentResponse response = languageService.analyzeSentiment(doc);
Sentiment sentiment = response.getDocumentSentiment();
```

This code creates a `LanguageServiceClient` instance for sending requests to the Natural Language API, then sends the request and gets the response, and finally gets the sentiment from the response.

Don't forget to close the service when you're done with it:

```java
languageService.close();
```

Finally, you can get the sentiment score:

```java
float sentimentScore = sentiment.getScore();
System.out.println("Score: " + sentimentScore);
```

The sentiment score is a value between `-1.0` and `1.0` depending on how negative or positive the text is.  Here are some examples:

| Text                      | Sentiment Score |
| ------------------------- | --------------- |
| I love lima beans         | 0.9             |
| Lima beans are okay       | 0.2             |
| Lima beans are vegetables | 0.1             |
| Lima beans are gross      | -0.6            |
| I hate lima beans         | -0.8            |

Putting it all together, it looks like this:

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

Try running this code with a few different values for the `text` variable!

# Web App Hello World

The above example performs sentiment analysis in a standalone Java application. This is useful if you want to build a desktop application or analyze some text on your own computer. But you can also use the Natural Language API in server code, which comes in handy if you want to build a web app.

You can view this example project from [GitHub](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/google-cloud/google-cloud-example-projects/natural-language-hello-world-webapp), or download it as a `.zip` file from [DownGit](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/tutorials/google-cloud/google-cloud-example-projects/natural-language-hello-world-webapp).

Let's start with the HTML:

**index.html**

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

This HTML shows a `<form>` element that contains a single text area. 

![sentiment analysis form](/tutorials/google-cloud/images/natural-language-1.png)

When the user clicks the `Submit` button, the form sends a `POST` request to the `/sentiment` URL. This request is then handled by a servlet:

**SentimentAnalysisServlet.java**

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

This servlet gets the sentiment analysis score of the text entered by the user. In a real project, you'd probably store the score in Datastore or do some additional processing, but this example outputs the score directly as HTML.

![sentiment analysis result](/tutorials/google-cloud/images/natural-language-2.png)

# Other Analysis Types

These examples used the Cloud Natural Language library to perform sentiment analysis, but that's not the only type of analysis you can do.

Check out [Natural Language documentation](https://cloud.google.com/natural-language/docs/how-to) for some other options, including entity analysis, syntax analysis, and content classification.

# Learn More

- [Cloud Natural Language](https://cloud.google.com/natural-language)
- [Cloud Natural Language documentation](https://cloud.google.com/natural-language/docs)
- [Analyzing Entities](https://cloud.google.com/natural-language/docs/analyzing-entities)
- [Classifying Content](https://cloud.google.com/natural-language/docs/classifying-text)
- [Interpreting Sentiment Analysis Values](https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values)
- [Cloud Natural Language How-to Guides](https://cloud.google.com/natural-language/docs/how-to)
- [Cloud Natural Language Javadoc](https://googleapis.dev/java/google-cloud-language/latest/index.html)
