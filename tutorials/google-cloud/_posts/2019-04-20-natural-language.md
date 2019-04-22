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
---

{% include toc.md %}

[Cloud Natural Language](https://cloud.google.com/natural-language) is a set of tools designed for parsing and understanding **unstructured text**, aka [natural language](https://en.wikipedia.org/wiki/Natural_language). For example:

- [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis) measures the positivity or negativity of text. *Is this text happy or unhappy?*
- [Entity recognition](https://en.wikipedia.org/wiki/Named-entity_recognition) extracts entities (people, places, things) from text. *Who or what does this text mention?*
- [Content classification](https://en.wikipedia.org/wiki/Document_classification) categorizes topics form text. *What topics does this text contain?*

The Cloud Natural Language APIs use machine learning models that have already been trained, so you can skip straight to the fun stuff. It's also possible to train your own models (you can learn more about that [here](https://cloud.google.com/automl/)), but this guide is going to stick with the pre-trained models.

# Enable Cloud Natural Language API

Before we can use the Cloud Translation API, we have to enable it. Go here:

<https://console.developers.google.com/apis/library/language.googleapis.com>

Make sure your project is selected, and click the `Enable` button.

# Credentials

The Cloud Natural Language API requires your project's credentials to work. When you deploy to App Engine this will work ~magically~ automatically, but when running or deploying locally you have to set your credentials manually. Follow the steps [here](https://cloud.google.com/docs/authentication/getting-started) to set up your local credentials.

**Important:** Before proceeding, make sure you have your `GOOGLE_APPLICATION_CREDENTIALS` environment variable set. Nothing will work without this.

# Maven Dependency

As mentioned above, the Cloud Natural Language API allows us to write code that analyzes text. It's available as a web service, or as a library that can be called from many languages. We're going to use it as a Java library.

To add the library to our classpath, we can use this maven dependency:

```
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-language</artifactId>
  <version>1.55.0</version>
</dependency>
```

You can read the documentation for the Java library [here](http://www.google.com/url?q=http%3A%2F%2Fgoogleapis.github.io%2Fgoogle-cloud-java%2Fgoogle-cloud-clients%2Fapidocs%2Fcom%2Fgoogle%2Fcloud%2Flanguage%2Fv1%2Fpackage-summary.html&sa=D&sntz=1&usg=AFQjCNFQUEhyKI7yc-Wx-ngVnasc0MAD6Q), but it's probably easiest to work through an example.

# Hello World

(You can view the full source of this example [here](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/natural-language/hello-world).)

```java
import com.google.cloud.language.v1.Document;
import com.google.cloud.language.v1.Document.Type;
import com.google.cloud.language.v1.LanguageServiceClient;
import com.google.cloud.language.v1.Sentiment;
import java.io.IOException;

public class NaturalLanguageHelloWorld {

  public static void main(String[] args) throws IOException {

    String text = "I love coding!";
    Document doc = Document.newBuilder()
        .setContent(text).setType(Type.PLAIN_TEXT).build();

    LanguageServiceClient languageService = LanguageServiceClient.create();
    Sentiment sentiment = languageService.analyzeSentiment(doc).getDocumentSentiment();
    languageService.close();

    System.out.println("Score: " + sentiment.getScore());
  }
}
```

This code creates a new `Document` that contains `"I love coding!"` and passes it into a `LanguageServiceClient`, which returns the analysis in a `Sentiment` instance.

We can then get the **score** of the sentiment, which is a value between `-1` and `1`, representing how negative or positive the text is.

Try running this code with a few different values for the `text` variable. Can you generate a negative score?

# Web App

The above example performs sentiment analysis in a standard Java application. This is useful if you want to build a desktop application or analyze some text on your computer. But you can also use the Natural Language API in server code, which comes in handy if you want to build a web app.

(You can download the full code for this example [here](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/natural-language/web-app).)

We can start with some HTML:

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

This HTML file renders a `<form>` element that contains a single text area. 

![sentiment analysis form](/tutorials/google-cloud/images/natural-language-1.png)

When the user clicks the `Submit` button, the form sends a `POST` request to the `/sentiment` URL. This request is then handled by a servlet:

**SentimentAnalysisServlet**

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
    float score = sentiment.getScore();
    languageService.close();

    // Output the sentiment score as HTML.
    // A real project would probably store the score in Datastore.
    response.setContentType("text/html;");
    response.getOutputStream().println("<h1>Sentiment Analysis</h1>");
    response.getOutputStream().println("<p>You entered: " + message + "</p>");
    response.getOutputStream().println("<p>Sentiment analysis score: " + score + "</p>");
    response.getOutputStream().println("<p><a href=\"/\">Back</a></p>");
  }
}
```

This servlet gets the sentiment analysis score of the text entered by the user. In a real project, we'd probably store the score in Datastore or do some additional processing, but this example outputs the score directly as HTML.

![sentiment analysis result](/tutorials/google-cloud/images/natural-language-2.png)

# Learn More

- [Cloud Natural Language](https://cloud.google.com/natural-language)
- [Analyzing Entities](https://cloud.google.com/natural-language/docs/analyzing-entities)
- [Classifying Content](https://cloud.google.com/natural-language/docs/classifying-text)
- [Interpreting Sentiment Analysis Values](https://cloud.google.com/natural-language/docs/basics#interpreting_sentiment_analysis_values)
