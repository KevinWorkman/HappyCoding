---
layout: blog-post
title: Ludum Dare and Programming Without a Computer
slug: ludum-dare-and-programming-without-a-computer
meta-title: Ludum Dare and Programming Without a Computer
meta-description: Here's how I entered Ludum Dare by programming a game without using a computer.
meta-image: https://pbs.twimg.com/media/CzWVc-ZUAAAVoBA.jpg
tags: [dev-log]
---

I just moved to California (more on that in a different blog post). I flew out, and my stuff was shipped separately. So there was a two week period where I didn't have a computer, or internet, or... anything.

Right in the middle of that two weeks was [Ludum Dare](http://ludumdare.com/compo/). Ludum Dare is a programming competition (but a little more relaxed, more of a "game jam" than a competition) where you have 48 hours to make a game around a theme that's announced Friday night.

But I didn't have a computer or even a reliable internet connection, so surely I couldn't enter... right?

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Seriously considering doing <a href="https://twitter.com/ludumdare">@ludumdare</a> on a 5 year old phone, no internet, in middle of moving to California. Somebody talk sense into me!</p>&mdash; Kevin Workman (@KevinAWorkman) <a href="https://twitter.com/KevinAWorkman/status/807351235477061632">December 9, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

And, well, that's exactly what I did. This blog posts explains "the process" I went through in case anybody is interested.

## Step One: I can has internet??

One of the most annoying parts of this was going to be my lack of internet connection. Normally that wouldn't be a problem, but apparently my new apartment is reinforced by some kind of hyperdense lead isotope, the kind that Superman's x-ray vision can't penetrate. In other words, I get about negative ten service in my apartment.

That might not be the end of the world. After all, this is California and spending a weekend outside probably wouldn't kill me. But the other half of this is that my phone is about a million years old (okay it's like six years old, which in phone years might as well be a million) and uses about 25% of its battery every time I look at its screen, let alone open an editor or upload and run code over the internet. And despite my slightly creepy traipsing around the pool area, there were no power outlets to be found.

Then in a perhaps anti-climactic discovery, I realized that I could reach a comcast wifi hotspot from inside my apartment. Alright, now we're cooking with gas! Or, cooking with the internet... or something?

## Step Two: how to edit code on phone?

Now that I had an internet connection, I needed a way to edit code on my phone. I didn't need a way to compile or run my code, just a way to edit it.

I briefly thought about doing it all in a text message draft, but I knew that way lies [madness](https://www.youtube.com/watch?v=OkidhcHDhkc). So I did a few google searches for stuff like "android simple text editor", tried a few out, and eventually landed on [Quoda](https://play.google.com/store/apps/details?id=com.henrythompson.quoda&hl=en).

Quoda is free, has all the basics of a simple code editor, and perhaps most importantly has quick shortcuts for saving, selecting all, and copying. Since ctrl+s, ctrl+a, ctrl+c was going to be a fundamental part of my "development workflow", that was a huge plus.

This is what most of my weekend looked like:

![editing code on phone](https://pbs.twimg.com/media/CzWVc-ZUAAAVoBA.jpg:small)

Hey, at least it's not [T9](https://en.wikipedia.org/wiki/T9_(predictive_text))!

## Step Three: Running the Code

This was actually the simplest part of the whole process: I just let [CodePen](http://codepen.io/) do all the work.

I already had a Processing.js template from doing the tutorials and examples here, so all I had to do was copy the code from my editor into CodePen, and it automatically ran there. Hooray!

You might be asking why I didn't just edit the code in CodePen directly, and the reason for that is, well, editing through CodePen on my phone was pretty terrible. Maybe because my phone is a [dinosaur](https://en.wikipedia.org/wiki/Oviraptor), but trying to edit through CodePen was slow, never the right size, froze all the time... and whatever, I had a text editor that worked just fine.

So my workflow looked like this: type a line of code in Quoda, ctrl+s, ctrl+a, ctrl+c, then switch to CodePen in the browser. Do a refresh to clear out the old code, long press to paste, then cross my fingers. Most of the time that worked perfectly!

![running code on CodePen on phone](https://pbs.twimg.com/media/CzXORjbWQAEmHVG.jpg:small)

## Don't try this at home.

That being said, I really don't recommend the above workflow. I did it out of desperation, boredom, and for the sake of ridiculousness, just to see if I could do it. But it was definitely a very cumbersome process. I only ended up writing 287 lines of code, which should have only taken a couple hours on a real computer.

One important thing that was missing was the ability to debug. Normally I program in Processing's Java mode to get type safety and compiler errors, and then only switch to Processing.js to deploy. But I couldn't use Java mode on my phone- in fact, I couldn't even see the JavaScript console (there's probably a way to do it, but I don't know how to do it off the top of my head). So I spent more time than I should have on dumb bugs like missing semicolons. Whenever the code stopped working I'd have to debug by hand, going through it line by line. I lost a couple hours because a dot looked like a comma.

## Do try this at home.

On the other hand, I got something working! All on my phone! Hooray!

You can check out the [Ludum Dare entry page](http://ludumdare.com/compo/ludum-dare-37/?action=preview&uid=5364), or on my [CodePen page](http://codepen.io/KevinWorkman/pen/ENpwLg). Or you can just play it here:

{% include codepen.html slug-hash="ENpwLg" height="575" %}

(you might have to click the HTML tab to hide the code and make room for the game)

This Ludum Dare's theme was "One Room", and the idea behind my game is that you're one [Roomba](https://en.wikipedia.org/wiki/Roomba) (because circles are easy to draw) trapped in a world with red badguys and existential angst. Whether that's a window into how I was feeling after moving across the country, I leave up to the reader!

Anyway, I consider this a success, but I hope I never have to do it again. The next Ludum Dare is in April if this sounds fun to you!
