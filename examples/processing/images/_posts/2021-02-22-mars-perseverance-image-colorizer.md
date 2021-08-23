---
layout: tutorial
title: Mars Perseverance Image Colorizer
thumbnail: /examples/processing/images/images/mars-6.png
tagline: Colorize images coming from Mars!
meta-title: Mars Perseverance Image Colorizer
meta-description: Use Processing to colorize raw images coming from Mars!
meta-image: /examples/processing/images/images/mars-5.png
tags: [example, processing, image]
sort-key: 1320
---

{% include youtube-embed.html slug="kn0CqRohqxQ" %}

---

[Perseverance](https://en.wikipedia.org/wiki/Perseverance_(rover)) is a rover that recently [landed](https://www.youtube.com/watch?v=4czjS9h4Fpg) on Mars.

THAT IS SO COOL. Sorry, had to get that out of my system.

One of the many cool things is that all of the pictures it takes are available on [NASA's website](https://mars.nasa.gov/mars2020/multimedia/images/). You can even view [raw images](https://mars.nasa.gov/mars2020/multimedia/raw-images/) that haven't been processed yet!

You might notice that some of these raw images look very similar.

<a href="https://mars.nasa.gov/mars2020/multimedia/raw-images/NRR_0002_0667129844_352ECM_N0010052AUT_04096_00_2I3J01">
  <img src="/examples/processing/images/images/mars-1-r.png" />
</a>
<a href="https://mars.nasa.gov/mars2020/multimedia/raw-images/NRG_0002_0667129855_072ECM_N0010052AUT_04096_00_2I3J01">
  <img src="/examples/processing/images/images/mars-1-g.png" />
</a>
<a href="https://mars.nasa.gov/mars2020/multimedia/raw-images/NRB_0002_0667129875_554ECM_N0010052AUT_04096_00_2I3J01">
  <img src="/examples/processing/images/images/mars-1-b.png" />
</a>

As cool as Mars is, why do we need three copies of the same image with slightly different lighting?

The answer is that to create a color image, the rover's camera takes three pictures: one with a red filter, one with a green filter, and one with a blue filter. Each picture appears to be grayscale, but they're really giving you the R, G, and B values you need to create a color image. You can read more about this [here](https://mars.nasa.gov/mer/mission/instruments/pancam/), but the idea is that you can combine the three grayscale images to get a color image!

Here's what happens when you combine the above three images into a single colored image:

![mars color image](/examples/processing/images/images/mars-1.png)

Here's the code I used to create that image. This code takes 3 of the "grayscale" images from NASA's raw image feed, and combines them to output a full color image.

```java
int imageWidth = 1280;
int imageHeight = 960;

PImage rImage = loadImage("m/m-1-r.png");
PImage gImage = loadImage("m/m-1-g.png");
PImage bImage = loadImage("m/m-1-b.png");

PGraphics pg = createGraphics(imageWidth, imageHeight);

pg.beginDraw();

for(int y = 0; y < imageHeight; y++) {
 for(int x = 0; x < imageWidth; x++){
   float r = red(rImage.get(x, y));
   float g = green(gImage.get(x, y));
   float b = blue(bImage.get(x, y));
   
   pg.set(x, y, color(r, g, b));
 }
}

pg.endDraw();

size(640, 480);
image(pg, 0, 0, width, height);

pg.save("m-1.png");
```

In this code, `m-1-r.png`, `m-1-g.png`, and `m-1-b.png` correspond to the red, green, and blue channel images from NASA's [raw image feed](https://mars.nasa.gov/mars2020/multimedia/raw-images/). You can tell which color an image represents from its URL:

- Red: `https://mars.nasa.gov/mars2020/multimedia/raw-images/NRR_0002_0667129844_352ECM_N0010052AUT_04096_00_2I3J01`
- Green: `https://mars.nasa.gov/mars2020/multimedia/raw-images/NRG_0002_0667129855_072ECM_N0010052AUT_04096_00_2I3J01`
- Blue: `https://mars.nasa.gov/mars2020/multimedia/raw-images/NRB_0002_0667129875_554ECM_N0010052AUT_04096_00_2I3J01`

In this case, "NR" stands for "navigation right", followed by R, G, or B.

Try finding other channeled images on NASA's [raw image feed](https://mars.nasa.gov/mars2020/multimedia/raw-images/) and send them through the above code to create full color images yourself!

<img src="/examples/processing/images/images/mars-2-r.png" style="width: 31.5%" />
<img src="/examples/processing/images/images/mars-2-g.png" style="width: 31.5%" />
<img src="/examples/processing/images/images/mars-2-b.png" style="width: 31.5%" />

<img src="/examples/processing/images/images/mars-2.png" />

---

<img src="/examples/processing/images/images/mars-3-r.png" style="width: 31.5%" />
<img src="/examples/processing/images/images/mars-3-g.png" style="width: 31.5%" />
<img src="/examples/processing/images/images/mars-3-b.png" style="width: 31.5%" />

<img src="/examples/processing/images/images/mars-3.png" />

---

<img src="/examples/processing/images/images/mars-4-r.png" style="width: 31.5%" />
<img src="/examples/processing/images/images/mars-4-g.png" style="width: 31.5%" />
<img src="/examples/processing/images/images/mars-4-b.png" style="width: 31.5%" />

<img src="/examples/processing/images/images/mars-4.png" />

---

# Remix Ideas

- Find other channeled images on NASA's [raw image feed](https://mars.nasa.gov/mars2020/multimedia/raw-images/) and send them through the above code to create full color images yourself!
- Increase the red value of the pixels in the output image.
- Create an animation that starts with the input images and ends with the full color image.

If you find an interesting picture, or if you make a remix of the code, I'd love to hear about it in [the Happy Coding forum](https://forum.happycoding.io)!
