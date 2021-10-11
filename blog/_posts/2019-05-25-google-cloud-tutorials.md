---
layout: blog-post
title: Google Cloud Tutorials
meta-title: Google Cloud Tutorials
meta-description: Happy Coding now has Google Cloud tutorials!
meta-image: /tutorials/google-cloud/images/google-cloud-icon-2.png
tags: [site-update]
---

{% include toc.md %}

Happy Coding now has [Google Cloud tutorials](/tutorials/google-cloud)!

Google Cloud is a set of tools, frameworks, and libraries that allow you to deploy code and store data using the same systems that run Google. It's pretty powerful, but it's not always beginner-friendly.

I've been learning about Google Cloud over the past couple years for [CodeU](https://code.likeagirl.io/my-summer-in-the-google-codeu-engineering-program-475666b322a2), and I finally found some time to write these tutorials up.

Check them out here:

{% include url-thumbnail.html url="/tutorials/google-cloud/" %}

Here are some random thoughts I had while writing these tutorials.

# Pros and Cons

Google Cloud includes a ton of tools that are extremely useful once you know how to use them. But that's the problem: you need to know how to use them before they really make sense. And because Google Cloud is primarily geared towards large enterprise companies, it can be hard for a single person to start learning about this stuff. Where do you start? What knowledge do you need to know beforehand?

It's not all bad though. Some of the documentation for Google Cloud is actually **very** good, some of the best documentation I've ever seen. For example, the Google Cloud's [hello wold Java servlet](https://cloud.google.com/java/getting-started/hello-world) page was super useful when I was getting started, and the [Google Cloud Vision](https://cloud.google.com/vision/) homepage is borderline beautiful. And that's not an accident: Google has a whole team called [developer relations](https://www.google.com/intl/km/about/careers/teams/client-facing/dev-rel/) (or DevRel) whose job it is to evangelize Google technologies, including writing tutorials. And their tutorials are honestly great.

But the official tutorials still aren't really designed for beginners, and the documentation gets a little spotty as you get further from the [happy path](https://en.wikipedia.org/wiki/Happy_path). I'm hoping that the tutorials I wrote can help bridge some of those gaps.

Before I started working at Google, one of my biggest criticisms of Google was that although they put out a lot of great products, they don't do a great job of telling people about them, or of linking between them. Now that I work there I have a better understanding of **why** that is, and that could be its own rambling blog post, but for now I'll just say that I really felt this as I was writing these tutorials and learning Google Cloud myself.

Another problem I encountered that surprised me was: the UI for setting up a new App Engine project changed, not once, but **twice** while I was writing these tutorials. That means I had to write them **three** times. Normally I'm not against change: whenever a popular site like Twitter changes the size of their buttons, people get upset. I tend to think that's a little silly. After all, [if Twitter still looked like it did when it launched](https://kottke.org/plus/misc/images/og-twitter-design.jpg), I'm not sure we'd still be using it. But I was pretty frustrated by the changes to the App Engine UI, in a way that I haven't thought about as a developer before. I'm afraid to go check whether it's changed again, because I really don't want to rewrite them a fourth time.

# Googling Google

When you're reading or watching tutorials, it can be easy to trick yourself into believing that the author has some secret expertise that you lack. And almost always, that's not the case at all.

To demonstrate that point, I thought it would be fun to post my google search history from the two days it took me to write the [client-server communication](/tutorials/java-server/client-server) tutorial. Without further ado, here's everything I googled while writing that tutorial:

```
coding train
password hunter2
url length limit
webpage chrome
chrome of a webpage
client server
google drawings
client and server
happy coding rest
lucid chart
online drawing site
online flowchart drawing

happy coding clients
web development client
web development client server
what is a web client?
google trends
example json endpoint
static html file
example of static website
example static html file
cats
github pages
web development dynamic content
unix time
server-side rendering
ajax
ajax mdn
server endpoint
marven morris
maren morris
stop trying to make fetch happen
fetch api
infinite scroll
url path variables
```

As you can see, I have to do a ton of research while writing just a single tutorial, even about stuff that might seem obvious to other people. And this is just the searching; not pictured is all of the reading that each of these searches led to. So if you're wondering "how do people learn all this stuff" the answer is- we don't.

# What's Next?

I tend to obsess over the organization (or lack thereof) of this site. As I was writing the Google Cloud tutorials, I debated where exactly things should go: should they go in the existing [server tutorials](/tutorials/java-server)? Should some of them go in the existing [JavaScript tutorials](/tutorials/javascript)? So I want to go back and revamp some of the existing tutorials so everything links between each other better. I also have a todo list of other tutorials, like Maven or other frameworks.

I also want to put together a potential curriculum that teachers could use. I don't know exactly what that looks like yet, but I think there's a lot of interesting work there.

I haven't forgotten about my [goal](/blog/happy-new-year-2018) of exploring Android again, and I might get back into that in the near future. I could also start playing around with more [artsy stuff](/blog/happy-arting). In the near future, CodeU is going to take up a lot of my time. I'm looking forward to talking about that more openly.

If you read through the new Google Cloud tutorials, let me know what you think!