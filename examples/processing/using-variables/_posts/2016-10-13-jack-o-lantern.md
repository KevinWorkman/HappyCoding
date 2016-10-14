---
layout: tutorial
title: Jack-o'-Lantern
slug: jack-o-lantern
thumbnail: /examples/processing/using-variables/images/jack-o-lantern-1.png
tag: Draw a Jack-o'-lantern.
categories: [examples,processing,using-variables]
sort-key: 300
meta-title: Jack-o'-lantern
meta-description: Use Processing to draw a Jack-o'-lantern!
meta-image: /examples/processing/using-variables/images/jack-o-lantern-5.png
---

:jack_o_lantern: 🎃 :jack_o_lantern:

This program uses the `width` and `height` variables to draw a Jack-o'-lantern that changes size according to the window size.

```java
size(200, 200);

//stem
stroke(0, 100, 0);
strokeWeight(10);
line(width/2, height/4, width*.6, height*.15);

//pumpkin
strokeWeight(2);
fill(255, 100, 0);
stroke(120, 60, 0);
ellipse(width/2, height/2, width*.75, height/2);
ellipse(width/2, height/2, width*.625, height/2);
ellipse(width/2, height/2, width*.5, height/2);
ellipse(width/2, height/2, width*.375, height/2);
ellipse(width/2, height/2, width*.25, height/2);
ellipse(width/2, height/2, width*.125, height/2);

//eyes
fill(0);
triangle(width*.4, height*.35, width*.35, height*.45, width*.45, height*.45);
triangle(width*.6, height*.35, width*.55, height*.45, width*.65, height*.45);

//mouth
arc(width*.5, height*.65, width*.4, height*.2, 3.14, 2*3.14);
line(width*.3, height*.65, width*.7, height*.65);

```

{% include codepen.html slug-hash="dpjGXK" height="275" %}

Try changing the parmaters passed into the `size()` function to change the size of the window, and the size of the Jack-o'-lantern will change automatically.

![🎃](/examples/processing/using-variables/images/jack-o-lantern-2.png) ![🎃](/examples/processing/using-variables/images/jack-o-lantern-3.png) ![🎃](/examples/processing/using-variables/images/jack-o-lantern-4.png)

🎃 :jack_o_lantern: 🎃

## Tweak Ideas

- Add teeth to the Jack-o'-lantern's mouth.
- If we change the ratio of the window (for example, to 500x100) then the Jack-o'-lantern will stretch to fit that new size. Make it so instead of stretching, the Jack-o'-lantern **scales** while maintaining its [aspect ratio](https://en.wikipedia.org/wiki/Aspect_ratio_(image)). 
- Draw a whole vine of Jack-o'-lantern.
- Change the design of the Jack-o'-lantern. Make it scarier, or more detailed, or draw a :cat: cat or a :ghost: ghost!
- Use a piece of paper and a pen to draw a Jack-o'-lantern by hand. Try to recreate that using code!
