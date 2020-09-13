This project contains a "hello world" example for the Google Cloud Natural Language API.

The `pom.xml` file runs the `NaturalLangaugeHelloWorld` class, which prints the sentiment of a hard-coded string.

To run this example, first make sure your `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set and that you've enabled the [Natural Language API](https://console.developers.google.com/apis/library/language.googleapis.com). Then execute this command:

```
mvn clean package exec:java
```

Learn more at [HappyCoding.io/tutorials/google-cloud/natural-language](https://happycoding.io/tutorials/google-cloud/natural-language).