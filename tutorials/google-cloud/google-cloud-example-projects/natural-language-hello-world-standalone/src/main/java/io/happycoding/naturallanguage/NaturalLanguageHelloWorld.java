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