---
layout: blog-post
title: The CodePen is Mightier than the Sword
slug: the-codepen-is-mightier-than-the-sword
meta-title: The CodePen is Mightier than the Sword
meta-description: All of the tutorials and examples now have a code editor embedded directly in them!
meta-image: /examples/processing/images/images/nes-filter-3.png
tags: [site-update]
---

All of the [tutorials](/tutorials) and [examples](/examples/processing) now have a code editor embedded directly in them. This means that as you're reading a tutorial or example, you can play with the code right in the website! It looks like this:

{% include codepen.html slug-hash="zKEkKA" height="275" %}

(Click the `Run Pen` button, then click around in the gray area. Then try changing the `mousePressed()` function into a `mouseDragged()` function!)

This was **much** easier than I thought it was going to be, mostly thanks to [CodePen's](http://codepen.io/) awesome [embedding feature](https://blog.codepen.io/documentation/features/embedded-pens/). This is really cool to see. Not too long ago something like this would have been **really difficult** to do, but it took me less than a day of work- and most of that was just going through and copy-pasting the code into pens.

And more importantly, this **feels correct**. It seemed like a small feature (especially back when I thought it was going to be a lot of work), because of course people can just copy and paste code into their own Processing editor. But now that this is implemented, it's so much better to be able to run the code directly in the browser. I've already caught myself just playing around with the code and seeing what happens, which is exactly what I'm hoping people do.

Another cool thing was how clean [Jekyll](https://jekyllrb.com/) (the software I use to generate this site) made this. CodePen gives me some HTML and JavaScript that I can paste into a post to create the editor. For example, the above embed is created using this HTML and JavaScript:

```html
<div class="panel panel-default">
	<div class="panel-heading">Code Editor <a href="/about/codepen" class="pull-right"><span class="glyphicon glyphicon-question-sign"></span></a></div>
	<div class="panel-body">
		<p data-height="275" data-theme-id="dark" data-slug-hash="zKEkKA" data-default-tab="html,result" data-user="KevinWorkman" data-embed-version="2" data-preview="true" data-editable="true" class="codepen">
		See the Pen <a href="http://codepen.io/KevinWorkman/pen/zKEkKA/"></a> by Happy Coding (<a href="http://codepen.io/KevinWorkman">@KevinWorkman</a>) on <a href="http://codepen.io">CodePen</a>.
		</p>
	</div>
</div>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
```

And that's relatively easy, but it's a little bit cumbersome to have to paste that every time I want to embed some code. Plus, if later I want to change how these work, I'd have to change it every place I've ever used an embed. That sounds annoying!

After doing a little poking, I realized that only two things really change in the above chunk of HTML: the `data-height` attribute and the `slug-hash` attribute. Was there a way for me to put the rest in a single place, that way I could just pass **parameters** when I want to change those two things?

That's exactly what Jekyll's [include](https://jekyllrb.com/docs/templates/) tag is for! Now I can put the above chunk into an include file, and then "call" that file with the parameters for a particular pen. This ends up being one clean little line:

```javascript
{% raw %}
{% include codepen.html slug-hash="zKEkKA" height="275" %}
{% endraw %}
```

How cool is that? Now whenever I want to embed some code, I just copy that one line, and then change the `slug-hash` and the `height` attributes.

One more neat thing is that thanks to [some cooperation](https://meta.discourse.org/t/embedding-pens-from-codepen/13578) between Discourse and CodePen, this automagically works with [the forum](http://forum.HappyCoding.io). You don't even have to get the embedding HTML and JavaScript. Just paste the url of a pen (like [http://codepen.io/KevinWorkman/pen/zKEkKA](http://codepen.io/KevinWorkman/pen/zKEkKA)) into a forum post, and it will automatically become an embedded code editor. Check it out on the [Happy Coding Forum](http://forum.happycoding.io/t/testing-codepen/21/1)!

I love everything I've seen so far about CodePen, and it's under [active development](https://blog.codepen.io/2016/10/03/auto-autocomplete/) so I'm excited to see what they come up with next. Plus fellow Processing developer Dave Whyte (of [Bees & Bombs](https://beesandbombs.tumblr.com/) fame) [just joined CodePen](https://blog.codepen.io/2016/09/16/bees-bombs-codepen/) too, so we're in good company!

I'd love to hear what people think of this new feature (Does it work on your browser? What about on your phone?), and if you're also on CodePen then you can follow me on [CodePen](http://codepen.io/KevinWorkman/) if you want.

Next I'm going to work on adding a comments section to these blog posts, then I want to maybe try adding some Open Graph tags to make linking to the site a little prettier.

Until then, Happy Coding! :cat2:
