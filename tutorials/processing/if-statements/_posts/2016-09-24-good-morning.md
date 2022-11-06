---
layout: tutorial
title: Good Morning
slug: good-morning
thumbnail: /tutorials/processing/if-statements/images/good-morning-1.png
tagline: Say hello based on the time of day.
meta-title: Good Morning
meta-description: This example uses if statements to say hello based on the time of day.
meta-image: /tutorials/processing/if-statements/images/good-morning-2.png
tags: [example, processing, if]
sort-key: 510
previousPost: /tutorials/processing/if-statements
redirect_from: /examples/processing/if-statements/good-morning
discourseEmbedUrl: /examples/processing/if-statements/good-morning
---

```java
void setup() {
  size(500, 100);
}

void draw() {
  background(0);
  textSize(48);

  if (hour() < 5) {
    //between midnight and 5AM
    text("Go to sleep!", 20, height-20);
  }
  else if (hour() < 12) {
    //between 5AM and noon
    text("Good morning!", 20, height-20);
  }
  else if (hour() < 16) {
    //between noon and 4PM
    text("Good afternoon!", 20, height-20);
  }
  else if (hour() < 21) {
    //between 4PM and 9PM
    text("Good evening!", 20, height-20);
  }
  else {
    //between 9PM and midnight
    text("Good night!", 20, height-20);
  }
}

```

This program uses `if` statements to display a different message depending on what time of day it is:

![good morning](/tutorials/processing/if-statements/images/good-morning-1.png)

This program also uses the `draw()` function, so our code is run 60 times per second. This means that our message will change as soon as the time of day changes. Test this out by running this code and then changing the time on your computer.

If we didn't use the `draw()` function, our program would only check the time once, at the very beginning of the program.

{% include codepen.html slug-hash="YGAxWA" height="175" %}

## Tweak Ideas

- Change the background and text color based on the time of day. Show something bright in the morning, something dark at night, etc.
- Draw different scenes based on the time of day. Show a sunrise in the morning, show the moon at night, etc. You could even procedurally generate a random scene!
