This project contains a "hello world" example for the Google Cloud Vision API.

The `pom.xml` file runs the `CloudVisionHelloWorld` class, which fetches the labels of a hard-coded image.

To run this example, first make sure your `GOOGLE_APPLICATION_CREDENTIALS` environment variable is set and that you've enabled the [Vision API](https://console.cloud.google.com/flows/enableapi?apiid=vision.googleapis.com). Then modify the `filePath` variable in the `CloudVisionHelloWorld` class and then execute this command:

```
mvn clean compile exec:java
```

Learn more at [HappyCoding.io/tutorials/google-cloud/vision](https://happycoding.io/tutorials/google-cloud/vision).