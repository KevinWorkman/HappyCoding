---
layout: single-content-section
title: "CodePen"
meta-title: About CodePen
meta-description: Learn more about how HappyCoding.io uses CodePen!
meta-image: /images/random-walkers-1.png
---

This site uses [CodePen.io](http://codepen.io/) to embed runnable code directly into the tutorials and examples.

This means that you can run any code from the tutorials or examples directly in the page. You don't need a CodePen account or to do anything special. Here's an example:

{% include codepen.html slug-hash="zKEkKA" height="275" %}

To run the code, first click the `Run Pen` button. This loads the code and starts executing it.

This example shows a single ball flying around the screen. You can click inside the gray area on the right to add another ball.

At its core, that's it! You can execute code directly in the page. Neat! :hamster:

## Editing Code

If you find yourself wondering "what would happen if I changed this variable..." then great news: you can also edit the code that's running!

Just click anywhere in the code and start typing. The right side will update automatically and run your new code!

Try changing the `void mousePressed(){` line to say `void mouseDragged(){` instead. Then try dragging your mouse around the gray area!

If you mess anything up and break the code, that's okay! Just refresh the page and you can start over.

## Forking Code

You can also edit the code on CodePen. Just click the `Edit on CodePen` link in the upper-right corner of the editor. This takes you to a [CodePen.io](http://CodePen.io) page containing the code.

The main benefit of this is that you can save your own version of the code. First go to the `Fork` button, and then save (you can save anonymously or you can use your own CodePen account). Now you can use the URL to share your code. This is especially useful if you want to post something on [the forum](http://forum.HappyCoding.io). I'd love to see any cool Pens you come up with!

When posting on the forum, you can just paste the URL into your post, and the forum will automatically create an embed for you. Cool!

## Mobile Devices

For the most part, all of the above should work fine on mobile devices, with two main exceptions:

- Old browsers: Some older mobile browsers (like the default Android browser) don't render the editor at all. If you encounter this issue, try downloading Chrome instead.
- Events: If the code uses input event functions (like `keyPressed()` or `mouseDragged()`), then the code might not work very well on a mobile device.

## Processing vs HTML

You might notice that the editor says `HTML`, and it contains some HTML tags. This is because we're using `Processing.js` to allow us to run Processing code inside the web browser.

Don't worry too much that it says HTML. You're really editing Processing code.

Similarly, you can ignore these lines:

```html
<script type="application/processing">
</script>
<canvas> </canvas>
```

The CodePen browser editor needs these to run the code inside the browser, but you wouldn't include these lines if you copy the code into the Processing editor.

## I have another question!

If you have any other questions, please post in [the forum](http://forum.HappyCoding.io) or [contact me](/about#contact.html).
