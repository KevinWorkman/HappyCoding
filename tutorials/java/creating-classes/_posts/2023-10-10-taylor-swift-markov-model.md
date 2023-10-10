---
layout: tutorial
title: Taylor Swift Markov Model
thumbnail: /tutorials/java/images/taylor-swift-2.png
tagline: Teach an AI to write Taylor Swift lyrics.
sort-key: 200
meta-title: Taylor Swift Markov Model - Java Example
meta-description: Teach an AI to write Taylor Swift lyrics.
meta-image: /tutorials/java/images/taylor-swift-2.png
tags: [example, java]
previousPost: /tutorials/java/creating-classes
forumExcerpt: I posted a new Java code-along that uses a Markov model to generate Taylor Swift lyrics!
---

{% include youtube-embed.html slug="tXREsANHN8A" %}

---

This example uses Java to build a [Markov chain model](https://en.wikipedia.org/wiki/Markov_chain). It trains the model on Taylor Swift lyrics, and then generates new Taylor Swift songs.

Markov models work by reading in a set of text data (in this case, all Taylor Swift lyrics) and then storing every word pair it can find. Once it has a list of word pairs, it can chain word pairs together to create new sequences.

For example, take these random lines from Taylor Swift songs:

```
I just wanna know you better
I don't know about you
Just you and me
All I know
```

Markov models work by reading the text, and for each word in the text, storing which other words come after it.

- `I` is followed by `just`, `don't`, and `know`
- `just` is followed by `wanna` and `you`
- `wanna` is followed by `know`


So what’s actually stored looks something like this:

```
I: [just, don't, know]
just: [wanna, you]
wanna: [know]
know: [you, about]
you: [better, newline, and]
better: [newline]
don't: [know]
about: [you]
just: [you]
and: [me]
me: [newline]
all: [I]
```

And now that you have that model, you can construct new similar-sounding lines by starting with a word, asking the model for a random word that followed it, and repeating that process until you build sentences like this:

- I don't know you better
- I know you and me
- All I just you better

These are **new** sentences formed by linking word pairs together. They don't appear in the input text, but they "feel" similar to the input. Some of the output doesn't really make sense, because the model isn't applying any grammar rules. But if you squint, it's almost like the model is showing creativity.

I like Markov models, because they exhibit some of the interesting concepts behind tools like [ChatGPT](/blog/coding-and-coping-with-chatgpt), which are built using [Large Language Models](https://en.wikipedia.org/wiki/Large_language_model). I like to think of Markov models as Small Language Models.

Here's the code:

**TaylorSwiftMain.java**

```java
package io.happycoding;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;

public class TaylorSwiftMain {

  MarkovModel model = new MarkovModel();

  public static void main(String... args) {
    TaylorSwiftMain main = new TaylorSwiftMain();
    main.process();
    main.generate();
  }

  private void process() {
    List<String> lines = readFile();
    for(String line : lines){
      processLine(line);
    }
  }

  private void processLine(String line) {
    // Remove " quotation marks
    line = line.replace("\"", "");

    String[] words = line.split("\\s");

    model.addWordPair("\n", words[0]);

    for (int i = 0; i < words.length - 1; i++) {
      model.addWordPair(words[i], words[i+1]);
    }

    model.addWordPair(words[words.length - 1], "\n");
  }

  private List<String> readFile() {
    try {
      return Files.readAllLines(Path.of("taylor-swift-lyrics.txt"));
    } catch (IOException e) {
      throw new RuntimeException(e);
    }
  }

  private void generate() {
    String previousWord = "\n";
    System.out.print(previousWord);

    int linesToPrint = 4;
    int linesCount = 0;

    while (linesCount < linesToPrint) {
      String nextWord = model.nextWord(previousWord);
      System.out.print(nextWord);

      if (nextWord.equals("\n")) {
        linesCount++;
      } else {
        System.out.print(" ");
      }
      previousWord = nextWord;
    }
  }
}
```

**MarkovModel.java**

```java
package io.happycoding;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MarkovModel {

  Map<String, List<String>> wordMap = new HashMap<>();

  public void addWordPair(String firstWord, String secondWord) {
    if(!wordMap.containsKey(firstWord)){
      wordMap.put(firstWord, new ArrayList<>());
    }

    wordMap.get(firstWord).add(secondWord);
  }

  public String nextWord(String firstWord) {
    if(!wordMap.containsKey(firstWord)) {
      throw new IllegalArgumentException("No pair for: " + firstWord);
    }

    List<String> words = wordMap.get(firstWord);
    return words.get((int)(Math.random() * words.size()));
  }
}
```

And if I run that on [every Taylor Swift lyric](https://raw.githubusercontent.com/shaynak/taylor-swift-lyrics/main/lyrics.csv), I get output like this:

```
I'll meet you they told me home
I got that everyone disappear, and again
Through it was a Wednesday in comparison is comin')
Don't you figured out here
```

```
Instead of belief
I'm never easy for not a bottle is up with me
How's your name
And say, the moment in your jacket on my street, that's when we'd grown together
```

```
And I start
Growing up that I thought twice
You were trouble when we are so quiet
And make it makes you get even
```

```
You ended it off
It must look at me, mine
Cause I would
I still be fun
```

# Remix Ideas

- Train a Markov model on your own text file. Try lyrics from other musicians, movie scripts, historical speeches.
- Think about how you want to handle punctuation, or capitalization.
- Add code that imports a thesaurus file, and then swap out random words for their synonyms.
- Add code that imports a rhyme file, and then make sure your songs rhyme.
- Instead of mapping every individual word to the word that follows, take words in groups of three. Map the first two words to the third word that follows it. This helps with more logical and consistent output.
- Add [stemming](https://en.wikipedia.org/wiki/Stemming) logic so words like jumping, jumps, and jumped all map to the same root word *jump*.
