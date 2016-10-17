---
layout: blog-post
title: Twitter Cards and Open Graph
slug: twitter-cards-and-open-graph
meta-title: Twitter Cards and Open Graph
meta-description: Ever wonder how Twitter and Facebook figure out what to show when you share a link?
meta-image: /examples/processing/creating-classes/images/flyers-4.png
---
 
When you share a link to Twitter or Facebook, do you ever wonder how it knows what thumbnail and description to use? How does it know whether the page contains a video? Have you ever noticed that some websites seem to have better-looking links when you share them?
 
For example, this is what it looked like when I shared last week's blog:

![twitter before](/blog/images/twitter-cards-and-open-graph/twitter-before.png)

![facebook before](/blog/images/twitter-cards-and-open-graph/facebook-before.png)
 
And this is what it looks like when I share this blog:

![twitter after](/blog/images/twitter-cards-and-open-graph/twitter-after.png)

![facebook after](/blog/images/twitter-cards-and-open-graph/facebook-after.png)
 
Where are those images coming from? How does it know the title and description?
 
## Hmm, I wonder how this works...
 
I had a vague idea that Twitter and Facebook must be doing some kind of [web scraping](https://en.wikipedia.org/wiki/Web_scraping), where they send out bots to read the page and report back this information. But how do those bots choose the thumbnail and description?
 
One of the coolest things about programming is that you can start pulling on the "hmm, I wonder how this works..." thread and discover all kinds of interesting stuff going on behind the scenes. So after a little bit of Googling, I found out the basics: both Twitter and Facebook send out bots that look for specific [meta tags](http://www.w3schools.com/tags/tag_meta.asp) in a webpage's html.
 
Human beings never see these meta tags. But they allow me as a webpage author to let Twitter and Facebook know more about how links should behave when people share them. When you share a link, Twitter and Facebook send out a web crawler that reads these meta tags, and then that information is used to create the link preview.
 
For example, Twitter uses [Twitter Cards](https://dev.twitter.com/cards/overview), and here is what the meta tags for this blog page look like:
 
```html
<meta property="twitter:url" content="http://HappyCoding.io/blog/twitter-cards-and-open-graph" />
<meta name="twitter:site" content="@KevinAWorkman">
<meta name="twitter:creator" content="@KevinAWorkman">
<meta name="twitter:card" content="summary_large_image">
<meta property="twitter:image" content="http://HappyCoding.io/examples/processing/creating-classes/images/flyers-4.png" />
<meta name="twitter:title" content="Twitter Cards and Open Graph">
<meta property="twitter:description" content="Ever wonder how Twitter and Facebook figure out what to show when you share a link?" />
```
 
These tags generate this when you share this page on Twitter:

![twitter after](/blog/images/twitter-cards-and-open-graph/twitter-after.png)
 
Similarly, Facebook uses [Open Graph](https://developers.facebook.com/docs/sharing/webmasters), which looks like this:
 
```html
<meta property="og:url" content="http://HappyCoding.io/blog/twitter-cards-and-open-graph" />
<meta property="og:site_name" content="Happy Coding" />
<meta property="og:image" content="http://HappyCoding.io/examples/processing/creating-classes/images/flyers-4.png" />
<meta property="og:title" content="Twitter Cards and Open Graph" />
<meta property="og:description" content="Ever wonder how Twitter and Facebook figure out what to show when you share a link?" />
```
 
These tags generate this when you share this page on Facebook:

![facebook after](/blog/images/twitter-cards-and-open-graph/facebook-after.png)

If you want to play around with this, check out [the Twitter Card validator](https://cards-dev.twitter.com/validator) or [the Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/sharing/). Try plugging in random pages from this site (or any site!) to see what the crawlers see.
 
## Back and Forth
 
These tags allow you to do all kinds of cool things, like embedding parts of your website into other websites. This is how YouTube links are automatically shown as videos, for example. So I spent a little too much time trying to figure out exactly what our links should look like. Maybe they should show small thumbnails instead of big thumbnails?
 
![twitter small](/blog/images/twitter-cards-and-open-graph/twitter-small.png)

(I could still go either way on this one, so I'd be curious to hear from people on whether they like big thumbnails or small thumbnails more. Pedants of the world unite!)
 
I also spent a little too much time reading the recommended [best practices](https://developers.facebook.com/docs/sharing/best-practices) for these tags.
 
But in the end I just decided to go with a standard 600x300 thumbnail for each page. Then it was "just" a matter of going back and creating thumbnails and descriptions for every tutorial and example. This was pretty tedious, but now that it's done.. it's done! Now the site has nifty thumbnails!
 
## Nobody Notices but Everybody Cares
 
If you think this sounds like a lot of rigmarole for a tiny feature, then I mostly agree with you. A big part of me has trouble caring about this sort of thing. I got the site working, so who cares what it looks like? Who is even going to notice whether the links have thumbnails or not? The answer is that even though nobody will really notice little things like this, people do care (even if just on a subconscious level).
 
By that I mean, the little stuff adds up. Even if you don't **notice** which font a website uses, you'll **care** if the font isn't quite right (note to self: remember to spend time obesessing over whether the font is quite right or not). You might not even know that you care, you'll just "feel" like you don't really like the website. That can be frustrating for programmers like me who aren't artists and have to rely on [programmer art](https://en.wikipedia.org/wiki/Programmer_art) for everything, because we'd rather spend our time on the interesting bits instead of making it look nice.
 
The problem is that if you don't make it look nice, people assume that the interesting bits are crappy too. A smarter guy than me (hi Mr. B) described this as "signalling low quality" which is probably a better way to say it. The funny thing is that I'm not sure there's a way to signal high quality: people don't notice when everything looks good, they just notice when it looks bad. So you end up spending a lot of time on stuff that, hopefully, nobody will even notice!
 
Anyway, the point is that even though this is a very small feature that I don't *really* care about, I think little things like this add up to make a website "feel" like a "real website" so I'm trying to be more intentional about things like this. I don't care about [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization) at all (in fact, I think it's pretty boring and terrible), but back in the Static Void Games days, one of the complaints I had was that new visitors couldn't immediately tell what the website was for (which is fair, since it was trying to be about 5 different things). One of my goals with Happy Coding is to be pretty single-minded, so that you know exactly what the site is as soon as you see it. Little things like these link previews help with that.
 
And I think the single-mindedness is working. This was a pretty cool moment:
 
[![CodePen sharing HappyCoding.io](/blog/images/twitter-cards-and-open-graph/codepen-sharing.png)](https://www.facebook.com/CodePen/posts/556280147910004)
 
If only I had finished the meta tags before this happened!
