---
layout: tutorial
title: Translation
thumbnail: /tutorials/google-cloud/images/translation-2.png
tagline: ¡Feliz codificación!
sort-key: 800
meta-title: Google Translation API Tutorial
meta-description: Use machine learning to translate text.
meta-image: /tutorials/google-cloud/images/translation-3.png
tags: [tutorial, javascript, google, cloud, translation]
previousPost: /tutorials/google-cloud/natural-language
lastUpdated: 2020-09-13
---

{% include toc.md %}

[Cloud Translation](https://cloud.google.com/translate/) lets you translate text from one language to another. This is what [Google Translate](https://translate.google.com/) is built with, and the library lets you programmatically translate text.

The Cloud Translation API uses machine learning models that have already been trained, so you can skip straight to the fun stuff. It's also possible to train your own models (you can learn more about that [here](https://cloud.google.com/automl/)), but this guide is going to stick with the pre-trained models.

# Enable Cloud Translation API

Before you can use the Cloud Translation API, you have to enable it. Go here:

https://console.cloud.google.com/apis/library/translate.googleapis.com

Make sure your project is selected, and click the `Enable` button.

# Credentials

The Cloud Translation API requires your Cloud project's credentials to work. When you deploy to App Engine this works automatically, but when running or deploying locally you have to set your credentials manually. Follow the steps [here](https://cloud.google.com/translate/docs/setup#creating_service_accounts_and_keys) to set up your local credentials.

**Important:** Before proceeding, make sure you have your `GOOGLE_APPLICATION_CREDENTIALS` environment variable set. Nothing will work without this.

# Maven Dependency

The Cloud Translation API is available as a web service, or as a library that can be called from many languages. This tutorial uses it as a Java library.

To add the library to your classpath, add this maven dependency to your `pom.xml` file:

```xml
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-translate</artifactId>
  <version>1.95.2</version>
</dependency>
```

# Standalone Hello World

You can call the Cloud Translation library from any Java code, including standalone (non-server) code. To see how the library works, let's start with that.

You can view this example project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/translation-hello-world-standalone), or download it as a `.zip` file from DownGit [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/translation-hello-world-standalone).

First, create a `String` that contains the text you want to translate:

```java
String originalText = "Happy coding!";
```

Then create a `Translate` instance that you'll use to send the translation request:

```java
Translate translate = TranslateOptions.getDefaultInstance().getService();
```

Next, send the request to translate the text to a different language:

```java
Translation translation =
  translate.translate(originalText, TranslateOption.targetLanguage("es"));
```

This code translates the text into Spanish using its language code `es`. See the [Language Codes](#language-codes) section below for more information about language codes.

Finally, you can get the translated text:

```java
String translatedText = translation.getTranslatedText();
System.out.println("Translated text: " + translatedText);
```

Putting it all together, it looks like this:

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

To run this example, first make sure your `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set and that you've enabled the [Translation API](https://console.cloud.google.com/apis/library/translate.googleapis.com), and then execute this command:

```
mvn clean package exec:java
```

You should see this printed to the console:

```
¡Feliz codificación!
```

That's "Happy coding!" translated into Spanish!

# Language Codes

The above example used `es` as the language code for Spanish. Where did this value come from?

This value comes from [ISO 639](https://en.wikipedia.org/wiki/ISO_639), a standard for language names. A language code is a 2-letter abbreviation that stands for a specific language. You can view a full list [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), but here are some examples:

- `zh`: Chinese
- `en`: English
- `hi`: Hindi
- `es`: Spanish
- `ar`: Arabic

Try changing the above code to translate different strings into different languages.

# Web App Hello World

The above example performs sentiment analysis in a standalone Java application. This is useful if you want to build a desktop application or analyze some text on your own computer. But you can also use the Translation API in server code, which comes in handy if you want to build a web app.

You can view this example project from [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/translation-hello-world-webapp), or download it as a `.zip` file from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/translation-hello-world-webapp).

Let's start with the servlet:

```java
package io.happycoding.servlets;

import com.google.cloud.translate.Translate;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/translate")
public class TranslationServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    // Get the request parameters
    String originalText = request.getParameter("text");
    String languageCode = request.getParameter("languageCode");

    // Get the translation
    Translate translate = TranslateOptions.getDefaultInstance().getService();
    Translation translation =
        translate.translate(originalText, Translate.TranslateOption.targetLanguage(languageCode));
    String translatedText = translation.getTranslatedText();

    // Output the translation
    response.setContentType("text/html; charset=UTF-8");
    response.setCharacterEncoding("UTF-8");
    response.getWriter().println(translatedText);
  }
}
```

This servlet contains a `doPost()` function that's triggered when a `POST` request is sent to the `/translate` URL. This function gets the `originalText` and `languageCode` parameters from the request, translates the text, and then outputs the translation as the response.

You could trigger this from a form submission, but this example uses the `fetch()` function to send the request from JavaScript.

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Translation</title>

    <script>
      function requestTranslation() {
        // Get the user's input from the UI
        const text = document.getElementById('text').value;
        const languageCode = document.getElementById('language').value;

        // Show a placeholder while waiting for the response
        const resultContainer = document.getElementById('result');
        resultContainer.innerText = 'Loading...';

        // Build the request params
        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);

        // Send a POST request to the server
        fetch('/translate', {
          method: 'POST',
          body: params
        })
        // Convert the response to plain text
        .then(response => response.text())
        // Show the translated text in the page
        .then((translatedMessage) => {
          resultContainer.innerText = translatedMessage;
        });
      }
    </script>

    <style>
      #text {
        width: 500px;
        height: 125px;
      }

      #language {
        display: block;
        margin-top: 25px;
        margin-bottom: 25px;
      }
    </style>

  </head>
  <body>
    <h1>Translation</h1>
    <p>Type a message and select a language, then click submit to translate it.</p>

    <textarea id="text"></textarea>

    <select id="language">
      <option value="en">English</option>
      <option value="zh">Chinese</option>
      <option value="es">Spanish</option>
      <option value="hi">Hindi</option>
      <option value="ar">Arabic</option>
    </select>

    <button onclick="requestTranslation();">Translate</button>

    <hr/>
    <div id="result"></div>
  </body>
</html>
```

This HTML contains a text area, a language dropdown, and a button. When the user clicks the button, it calls the `requestTranslation()` function. That function then calls the `fetch()` function to get the translation from the server, and then uses the response to populate the result element at the bottom of the page.

To run this example, first make sure your `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set and that you've enabled the [Translation API](https://console.cloud.google.com/apis/library/translate.googleapis.com), and then execute this command:

```
mvn clean package exec:java
```

Then navigate to `localhost:8080/index.html`. You should see something like this:

![Minimal Google Translate page](/tutorials/google-cloud/images/translation-1.png)

# Learn More

- [Cloud Translation documentation](https://cloud.google.com/translate/docs/)
- [Cloud Translation Javadoc](https://googleapis.dev/java/google-cloud-translate/latest/index.html)
- [List of language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
