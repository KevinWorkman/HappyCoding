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
---

{% include toc.md %}

[Cloud Translation](https://cloud.google.com/translate/) is a set of tools designed for translating text. These are the tools that [Google Translate](https://translate.google.com/) is built with, and the API allows us to programmatically translate text.

The Cloud Translation APIs use machine learning models that have already been trained, so you can skip straight to the fun stuff. It's also possible to train your own models (you can learn more about that [here](https://cloud.google.com/automl/)), but this guide is going to stick with the pre-trained models.

# Enable Cloud Translation API

Before we can use the Cloud Translation API, we have to enable it. Go here:

https://console.cloud.google.com/apis/library/translate.googleapis.com

Make sure your project is selected, and click the `Enable` button.

# Credentials

The Cloud Translation API requires your Cloud project's credentials to work. When you deploy to App Engine this will work ~magically~ automatically, but when running or deploying locally you have to set your credentials manually. Follow the steps [here](https://cloud.google.com/docs/authentication/getting-started) to set up your local credentials.

**Important:** Before proceeding, make sure you have your `GOOGLE_APPLICATION_CREDENTIALS` environment variable set. Nothing will work without this.

# Maven Dependency

As mentioned above, the Cloud Translation API allows us to write code that translates text. It's available as a web service, or as a library that can be called from many languages. We're going to use it as a Java library.

To add the library to our classpath, we can use this maven dependency:

```xml
<dependency>
  <groupId>com.google.cloud</groupId>
  <artifactId>google-cloud-translate</artifactId>
  <version>1.70.0</version>
</dependency>
```

You can read the documentation for the Java library [here](http://googleapis.github.io/google-cloud-java/google-cloud-clients/apidocs/com/google/cloud/translate/package-summary.html), but it's probably easiest to work through an example.

# Hello World

(You can view the full source of this example [here](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/translation/hello-world).)

```java
import com.google.cloud.translate.Translate;
import com.google.cloud.translate.Translate.TranslateOption;
import com.google.cloud.translate.TranslateOptions;
import com.google.cloud.translate.Translation;

public class TranslationHelloWorld {
  public static void main(String[] args) throws Exception {

    Translate translate = TranslateOptions.getDefaultInstance().getService();

    String originalText = "Happy coding!";

    Translation translation =
        translate.translate(originalText, TranslateOption.targetLanguage("es"));
    String translatedText = translation.getTranslatedText();

    System.out.println(translatedText);
  }
}
```

To run this example, first make sure your `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set and that you've enabled the [Translation API](https://console.cloud.google.com/apis/library/translate.googleapis.com), and then execute this command:

```
mvn clean compile exec:java
```

You should see this printed to the console:

```
¡Feliz codificación!
```

That's "Happy coding!" translated into Spanish!

# Language Codes

In the above example, we used `es` as the language code for Spanish. Where did this value come from?

This value comes from [ISO 639](https://en.wikipedia.org/wiki/ISO_639), a standard for language names. A language code is a 2-letter abbreviation that stands for a specific language. You can view a full list [here](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes), but here are some examples:

- `zh`: Chinese
- `en`: English
- `hi`: Hindi
- `es`: Spanish
- `ar`: Arabic

Try changing the above code to translate different strings into different languages.

# Web App

The above example performs sentiment analysis in a standard Java application. This is useful if you want to build a desktop application or analyze some text on your computer. But you can also use the Translation API in server code, which comes in handy if you want to build a web app.

(You can download the full code for this example [here](https://github.com/KevinWorkman/GoogleCloudExamples/tree/master/translation/minimal-google-translate).)

Let's start with the servlet:

```java
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
    // Get the request parameters.
    String originalText = request.getParameter("text");
    String languageCode = request.getParameter("languageCode");

    // Do the translation.
    Translate translate = TranslateOptions.getDefaultInstance().getService();
    Translation translation =
        translate.translate(originalText, Translate.TranslateOption.targetLanguage(languageCode));
    String translatedText = translation.getTranslatedText();

    // Output the translation.
    response.setContentType("text/html; charset=UTF-8");
    response.setCharacterEncoding("UTF-8");
    response.getWriter().println(translatedText);
  }
}
```

This servlet contains a `doPost()` function that's triggered when a `POST` request is sent to the `/translate` URL. This function gets the `originalText` and `languageCode` parameters from the request, translates the text, and then outputs the translation as the response.

We could trigger this from a form submission, but in this case we use the `fetch()` function to send the request from JavaScript.

**index.html**

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Translation</title>

    <script>
      function requestTranslation() {
        const text = document.getElementById('text').value;
        const languageCode = document.getElementById('language').value;

        const resultContainer = document.getElementById('result');
        resultContainer.innerText = 'Loading...';

        const params = new URLSearchParams();
        params.append('text', text);
        params.append('languageCode', languageCode);

        fetch('/translate', {
          method: 'POST',
          body: params
        }).then(response => response.text())
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
      <option value="es">English</option>
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

This HTML contains a text area, a language dropdown, and a button. When the user clicks the button, we call the `fetch()` function to get the translation from the server, and we use the response to populate the result element at the bottom of the page.

To run this example, first make sure your `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set and that you've enabled the [Translation API](https://console.cloud.google.com/apis/library/translate.googleapis.com), and then execute this command:

```
mvn appengine:devserver
```

![Minimal Google Translate page](/tutorials/google-cloud/images/translation-1.png)

# Learn More

- [Cloud Translation API documentation](https://cloud.google.com/translate/docs/)
- [Google Cloud Java API](https://googleapis.github.io/google-cloud-java/google-cloud-clients/apidocs/index.html)
- [List of language codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
