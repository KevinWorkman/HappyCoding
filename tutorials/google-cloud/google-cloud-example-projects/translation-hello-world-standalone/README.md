This project contains a "hello world" example for the Google Cloud Translation API.

The `pom.xml` file runs the `TranslationHelloWorld` class, which prints the translation of a hard-coded string.

To run this example, first make sure your `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set and that you've enabled the [Translation API](https://console.cloud.google.com/apis/library/translate.googleapis.com).

Then execute this command:

```
mvn clean package exec:java
```

Learn more at https://HappyCoding.io/tutorials/google-cloud/translation