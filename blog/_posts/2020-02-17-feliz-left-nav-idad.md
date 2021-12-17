---
layout: blog-post
title: Feliz Left Nav-idad
meta-title: Feliz Left Nav-idad
meta-description: Here's a list of everything I googled while I added a left nav to the site.
meta-image: /blog/images/feliz-left-nav-idad/thumbnail.png
tags: [site-update]
---

One of my [goals](/blog/what-is-happy-coding) this year is to make this site feel more like a journey rather than a collection of disconnected tutorials. I fall asleep as soon as anybody starts talking about "user retention" or [funnels](https://en.wikipedia.org/wiki/Funnel_analysis), but I wanted to make it more obvious how everything fits together, the order of things, and what you should do next after you finish reading a page.

So, I spent this long weekend adding a left nav to the site. Here's a timelapse of the process:

![left nav process animation](/blog/images/feliz-left-nav-idad/left-nav-process-animation.gif)

This came together relatively quickly, mostly thanks to the magic of [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox). I briefly considered going with a full-width top nav, but decided to stick with having different sections centered in the page. I fall back to this pattern pretty often, but I think it works pretty well.

When all you see is the finished product, it's easy to assume that its creation was a one-step process. This can be especially unhealthy for beginners who take that as evidence they don't belong. *"I don't know how to add a left nav to a website, therefore I must be bad at web development!"* As a creator, it's also easy to hide behind this misconception, to only show the polished end result to the world. But I think it's important to demystify [the process of problem-solving](/tutorials/how-to/program), and to show that research and debugging is a natural part of [coding](https://xkcd.com/1146/).

With that in mind, here's everything I googled while implementing the new left nav:

```
html newline between css classes
jekyll check if variable exists
jekyll double curly brackets
jekyll previous and next
css flex left and right
jekyll or
jekyll comments
jekyll code comments
jekyll functions
jekyll null
jekyll where cache
jekyll "where" cache
happy coding
jekyll previous and next
ruby update jekyll
github pages jekyll version
update ruby
ruby
"gem update jekyll" doesn't work
Dependency Error: Yikes! It looks like you don't have jemoji or one of its dependencies installed. In order to use Jekyll as currently configured
jemoji
jekyll jemoji not installed
"Could not locate Gemfile or .bundle/ directory"
jekyll create gemfile for existing site
jekyll gemfile
"Could not find gem 'jemoji x64-mingw32' in any of the gem sources listed in your Gemfile."
windows disable "terminate batch job" prompt
zombies run play two missions
should I eat after running?
running calorie calculator
dreams ps4
is we first person
second person
should tutorial be written in first or second person
how wide should a website be
website how many characters per line
flexbox left nav
jekyll where cache
jekyll "where" cache
coding horror
css flex left and right width
css flex width
css flex ignores width of child
jekyll liquid comment
html nav tag
html nested nav tag
jekyll liquid string contains
css select element after class
css list style
css list-style dash
Ashwin Maroli jekyll
flexbox div height fit content
css select style of nesting
css indent wrapped text
css text-indent
css detect mobile
css hide div on mobile
css visibility hidden vs display none
css visibility collapse
css flexbox ignores viewport
flexbox default flex-grow
css ul inside flexbox div shows as inline
melanie martinez copycat
happy coding
image magick decrease gif file size
1920/600
600/1923
1040*600/1923
imagemagick gif reduce colors
image magick gif first and last frame longer
resting heart rate
weather
google search history
jekyll post not showing up but url works
jekyll post direct url works but not included in posts
jekyll incremental doesn't see new posts
flexbox prevent overflow
css flexbox
define: timelapse
xkcd scared all the time
```

I googled 80 things this weekend, ranging from fundamental concepts, to syntax quirks, to error messages. You can see me get distracted by going down a rabbit hole of updating Jekyll, which ended up improving my build time by [100x](https://twitter.com/TheKevinWorkman/status/1229188608222887937)! I also spent a couple hours debugging the layout on mobile devices, which ended up being an existing problem caused by a single line of CSS on the blog homepage. And just to be meta, I've included what I searched while writing this post.

In the name of demystifying this process, I want to point out that I do the same kind of research at my job. I've been programming for almost 15 years, I've been a "software engineer" for over 11 years, and I'm currently the TL of a frontend team at Google. But I still have to google every time I want to align two divs. So if you feel like you have to research everything, or like you encounter errors every 5 minutes, don't worry- that's normal!

Anyway, I'm pretty happy with the end result. Flexbox is magic to me, so I'm still getting used to not specifying every width myself and trusting the layout to do all the work for me. I'll probably keep tinkering with it, but for now I think it improves the overall flow of the site.

Let me know what you think, and feel free to post your own google search history if you're brave enough!