---
layout: post
title: Truchet Tiles
thumbnail: /tutorials/p5js/images/images/truchet-tiles-1.png
tagline: Rotate interlocking images to create a pattern.
sort-key: 1190
meta-title: Truchet Tiles - p5.js Example
meta-description: Rotate interlocking images to create a pattern.
meta-image: /tutorials/p5js/images/images/truchet-tiles-1.png
tags: [example, p5.js, javascript, images, genuary]
includeP5jsWidget: false
previousPost: /tutorials/p5js/images
---

[Truchet tiles](https://en.wikipedia.org/wiki/Truchet_tiles) are a way to make art out of interlocking square images. Each square has connection points on all four sides, which lets them fit together in any rotation or configuration.

To celebrate [Genuary](https://genuary.art/) 6 which had a theme of "steal like an artist", I collaborated with the lovely and talented [Ariel](https://www.instagram.com/middle.bean.studio/), who drew these squares:

<img src="/tutorials/p5js/images/images/truchet-tiles-2.jpg" style="width:100px" />
<img src="/tutorials/p5js/images/images/truchet-tiles-3.jpg" style="width:100px" />
<img src="/tutorials/p5js/images/images/truchet-tiles-4.jpg" style="width:100px" />
<img src="/tutorials/p5js/images/images/truchet-tiles-5.jpg" style="width:100px" />
<img src="/tutorials/p5js/images/images/truchet-tiles-6.jpg" style="width:100px" />
<img src="/tutorials/p5js/images/images/truchet-tiles-7.jpg" style="width:100px" />

And then I wrote this sketch which randomly rotates the tiles and places them in a grid:

<iframe src="https://editor.p5js.org/KevinWorkman/full/7PvZ_jOrO" width="600" height="645"></iframe>

[Click here to edit this code in the p5.js editor.](https://editor.p5js.org/KevinWorkman/sketches/7PvZ_jOrO)

Here are some example outputs:

![randomly colored truchet tiles](/tutorials/p5js/images/images/truchet-tiles-8.png)
![small randomly colored truchet tiles](/tutorials/p5js/images/images/truchet-tiles-9.png)
![pastel truchet tiles](/tutorials/p5js/images/images/truchet-tiles-10.png)
![animated truchet tiles](/tutorials/p5js/images/images/truchet-tiles-11.gif)

# Remix Ideas

- Use your own images as tiles.
- Instead of drawing images randomly, use a `for` loop to position them in a grid.
- Instead of replacing images, start with one set and then rotate them over time.
