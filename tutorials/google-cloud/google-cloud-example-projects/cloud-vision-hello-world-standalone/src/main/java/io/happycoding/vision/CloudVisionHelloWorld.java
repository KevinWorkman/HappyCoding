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