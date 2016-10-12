---
layout: tutorial
title: "NES Filter"
slug: nes-filter
thumbnail: "/examples/processing/images/images/nes-filter-2.png"
tag: "Color an image using the NES palette."
---

This code takes an image file and applies a filter that colors it using the [NES](https://en.wikipedia.org/wiki/Nintendo_Entertainment_System) color palette. In other words, it makes the image look like it's being displayed by a NES system!

```java
//all possible colors NES should show
//https://en.wikipedia.org/wiki/List_of_video_game_console_palettes
color[] nesPalette = {
  #7C7C7C, #0000FC, #0000BC, #4428BC, #940084, #A80020, #A81000,
#881400, #503000, #007800, #006800, #005800, #004058, #BCBCBC, #0078F8,
#0058F8, #6844FC, #D800CC, #E40058, #F83800, #E45C10, #AC7C00, #00B800,
#00A800, #00A844, #008888, #F8F8F8, #3CBCFC, #6888FC, #9878F8, #F878F8,
#F85898, #F87858, #FCA044, #F8B800, #B8F818, #58D854, #58F898, #00E8D8,
#787878, #FCFCFC, #A4E4FC, #B8B8F8, #D8B8F8, #F8B8F8, #F8A4C0, #F0D0B0,
#FCE0A8, #F8D878, #D8F878, #B8F8B8, #B8F8D8, #00FCFC, #F8D8F8, #000000
};

PImage butterflyImage;

void setup() {
  size(440, 346);
  butterflyImage= loadImage("butterfly.jpg");
  butterflyImage.resize(width, height);
  
  //loop over pixels and apply filter to each pixel
  for(int y = 0; y < butterflyImage.height; y++){
   for(int x = 0; x < butterflyImage.width; x++){
     color in = butterflyImage.get(x, y);
     color out = getClosestNesColor(in);
     butterflyImage.set(x, y, out);
   }
  }
  
  noLoop();
}

//given the in color, returns the color in the NES palette closest to that color
color getClosestNesColor(color in){
  
  float inRed = red(in);
  float inGreen = green(in);
  float inBlue = blue(in);
  
  color out = in;
  float minColorDistance = 100000;
  
  //loop over NES palette to find closest color
  for(color nesColor : nesPalette){
    
    float nesRed = red(nesColor);
    float nesGreen = green(nesColor);
    float nesBlue = blue(nesColor);
    
    //treat colors as 3D points and get distance between them to find closest color
    float colorDistance = dist(inRed, inGreen, inBlue, nesRed, nesGreen, nesBlue);
    
    if(colorDistance < minColorDistance){
      out = nesColor;
      minColorDistance = colorDistance;
    }
  }
  
  return out;
  
}

void draw() {
  image(butterflyImage, 0, 0);
}

```

![NES butterfly](/examples/processing/images/images/nes-filter-1.png)

{% include codepen.html slug-hash="RGyEQw" height="425" %}

If this seems complicated, take it one section at a time. I got the values for the `nesPalette` array by looking at [this Wikipedia article](https://en.wikipedia.org/wiki/List_of_video_game_console_palettes) (and then I was even lazier and googled "nes rgb values" and found [this page](http://www.thealmightyguru.com/Games/Hacking/Wiki/index.php?title=NES_Palette) which contained exactly the values I was looking for).

The `getClosestNesColor()` takes an input color and returns the closest color from the `nesPalette` array. It does this by treating the `R,G,B` values of both the `in` color and every color in the `nesPalette` array as 3D points (in other words, it treats the `R,G,B` values as `X,Y,Z` values). Then the code just uses the `dist()` function (which returns the distance between two points) to find the closest color.

Finally, the nested `for` loop inside the `setup()` function loops over every pixel in the image, gets the color of that pixel, finds the closest color in the `nesPalette`, and then changes the pixel to that color.

## Tweak Ideas

- Apply this filter to different images. Might make a good profile picture! :grin:
- Apply this filter to a screenshot from a different video game system. What would Sonic the Hedgehog look like on a NES?
- Check out [this Wikipedia article](https://en.wikipedia.org/wiki/List_of_video_game_console_palettes) and use the color palette from a different video game system.
- Instead of applying the filter to an image, can you apply this filter to one of your other Processing sketches?
- Make the filter look more "8 bit" by using blockier pixels.
- Generate a random color palette and use that instead of the NES palette.
- Use the colors from one image as a palette to filter another image. (Hint: Use a picture of your significant other's eye as a palette to color a picture of you. Print it out and frame it. You've got yourself a nerdy and artistic gift. :gift:)
