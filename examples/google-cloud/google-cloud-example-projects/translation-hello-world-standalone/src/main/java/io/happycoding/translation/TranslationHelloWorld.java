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

    // Print the trsnalted text
    System.out.println("Translated text: " + translatedText);
  }
}