---
layout: tutorial
title: Cloud Vision Standalone Hello World
thumbnail: /tutorials/google-cloud/images/vision-3.png
tagline: Use machine learning to analyze images.
sort-key: 300
meta-title: Google Cloud Vision Standalone Hello World Example
meta-description: Use machine learning to analyze images.
meta-image: /tutorials/google-cloud/images/vision-4.png
previousPost: /examples/google-cloud/
tags: [example, java, google-cloud, cloud-vision]
---

This is a command line program that uses [Google Cloud Vision](/tutorials/google-cloud/vision) to analyze an image.

View the code for this project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/cloud-vision-hello-world-standalone).

Download the code as a `.zip` from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/cloud-vision-hello-world-standalone).

For example, here is the result for analyzing this image:

<img src="/tutorials/google-cloud/images/stanley.jpg" style="width:300px" />

```bash
Cat: 0.99598557
Mammal: 0.9890478
Vertebrate: 0.9851104
Whiskers: 0.9777251
Small to medium-sized cats: 0.97744334
Felidae: 0.96784574
Carnivore: 0.9342105
```

**pom.xml**

`pom.xml` is a Maven POM file that defines the project.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>

  <groupId>io.happycoding</groupId>
  <artifactId>google-cloud-vision-hello-world-standalone</artifactId>
  <version>1</version>

  <properties>
    <exec.mainClass>io.happycoding.vision.CloudVisionHelloWorld</exec.mainClass>
    <exec.cleanupDaemonThreads>false</exec.cleanupDaemonThreads>
    <maven.compiler.source>11</maven.compiler.source>
    <maven.compiler.target>11</maven.compiler.target>
  </properties>

  <dependencies>
    <dependency>
      <groupId>com.google.cloud</groupId>
      <artifactId>google-cloud-vision</artifactId>
      <version>1.100.0</version>
    </dependency>
  </dependencies>

</project>
```

**CloudVisionHelloWorld.java**

`CloudVisionHelloWorld.java` contains a `main()` method that sends an image analysis request and outputs the result.

```java
package io.happycoding.vision;

import com.google.cloud.vision.v1.AnnotateImageRequest;
import com.google.cloud.vision.v1.AnnotateImageResponse;
import com.google.cloud.vision.v1.BatchAnnotateImagesResponse;
import com.google.cloud.vision.v1.EntityAnnotation;
import com.google.cloud.vision.v1.Feature;
import com.google.cloud.vision.v1.Feature.Type;
import com.google.cloud.vision.v1.Image;
import com.google.cloud.vision.v1.ImageAnnotatorClient;
import com.google.protobuf.ByteString;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class CloudVisionHelloWorld {

  public static void main(String[] args) throws IOException {

    String filePath = "C:\\Users\\kevin\\Desktop\\Stanley.jpg";

    // Load the file
    ByteString imageBytes = ByteString.readFrom(new FileInputStream(filePath));
    Image image = Image.newBuilder().setContent(imageBytes).build();

    // Create a label detection request for the image
    Feature feature = Feature.newBuilder().setType(Type.LABEL_DETECTION).build();
    AnnotateImageRequest request =
        AnnotateImageRequest.newBuilder().addFeatures(feature).setImage(image).build();
    List<AnnotateImageRequest> requests = new ArrayList<>();
    requests.add(request);

    // Send the request and get the response
    ImageAnnotatorClient client = ImageAnnotatorClient.create();
    BatchAnnotateImagesResponse batchResponse = client.batchAnnotateImages(requests);
    List<AnnotateImageResponse> imageResponses = batchResponse.getResponsesList();
    AnnotateImageResponse imageResponse = imageResponses.get(0);

    // Handle errors
    if (imageResponse.hasError()) {
      System.out.println("Error: " + imageResponse.getError().getMessage());
    }

    // Print the labels extracted from the image
    for (EntityAnnotation annotation : imageResponse.getLabelAnnotationsList()) {
      System.out.println(annotation.getDescription() + ": " + annotation.getScore());
    }

    client.close();
  }
}
```

Change the `filePath` variable to point to an image on your computer.

<img src="/tutorials/google-cloud/images/stanley.jpg" style="width:300px" />

Then run the project by executing this command:

```
mvn package exec:java
```

You should see something like this:

```bash
Cat: 0.99598557
Mammal: 0.9890478
Vertebrate: 0.9851104
Whiskers: 0.9777251
Small to medium-sized cats: 0.97744334
Felidae: 0.96784574
Carnivore: 0.9342105
```

Learn more in these tutorials:

{% include url-thumbnail.html url="/tutorials/google-cloud/vision" %}
{% include url-thumbnail.html url="/tutorials/java/" %}