---
layout: tutorial
title: Build a Social App
thumbnail: /tutorials/processing/images/hour-of-code-11.png
tagline: How to build a social networking app.
sort-key: 200
meta-title: How to Build a Social Networking App
meta-description: I have an idea for an app! How do I get started?
meta-image: /tutorials/processing/images/hour-of-code-12.png
tags: [tutorial, how-to]
---

{% include toc.md %}

**Note:** I'm going to use the term "social app" to refer to any mobile app that allows people to interact with each other and requires an internet connection to work. Twitter, Lyft, and Tumblr are examples of social apps. Single-player games or private note-taking apps are not social apps. If you're just wondering how to make a local app that doesn't support multiple users or require an internet connection, then check out the [Android](/tutorials/android) tutorials.

I get a lot of messages like this:

> I have a great idea for an app. It's going to be a lot like Facebook or Instagram, but it's specific for cat sitters. The app lets cat sitters advertise their services, and lets cat owners post pictures of their cats. It's going to make money by connecting cat owners and cat sitters and charging a percentage, like Lyft for cat sitters. I'm going to call it Catstagram, and I even have a logo drawn out. I want it to have a green color scheme, and the pictures need to have filters like Instagram. I have all of the ideas, so now I just need somebody to code it since I don't know anything about code. I can't pay any money now but if you do the coding then I'll offer you 5% of any revenue we make! I'll also refer any of my contacts to you. This is a great way for you to get exposure!

This guide is a collection of the advice I've given in reply to these messages, and I'm hoping it helps people with similar questions in the future. (Hey that's you!)

My hope is that after you read this tutorial, you'll have a more specific idea of what you need to do next. I hope this makes you more excited about your idea instead of talking you out of it.

# Disclaimers

I'm not saying any of this out of annoyance or to be judgmental or dismissive. But there are a few misconceptions that need to be cleared up before we can talk about how to proceed with your vision.

## Building a House

The example message about Catstagram is a little bit like going to a carpenter and saying:

> I have a great idea for a house. It's going to be a log cabin, but with a really modern inside. I want a fireplace and a movie theater in the basement. I even know what color couch I want to have in the living room. I have all of the ideas, so now I just need somebody to build it since I don't know anything about carpentry. I can't pay any money now, but if you do the construction then I'll pay you back with the money I make from renting out the attic. I'll also let you put a sign out in the front lawn with your name on it. This is a great way for you to get exposure!

Hopefully this demonstrates why saying you "just need somebdoy to code it" is not a very meaningful statement. You're busy thinking about what color couch you want, before you have a house to put it in. This is exactly what you're doing if you have a logo before you have any of the "technical stuff" figured out.

## Ideas are Cheap

Ideas are the easy part. This can be hard to hear if you've been thinking about a project for a while, if you're excited and hopeful about it. But it's true. A million dollar idea isn't worth anything if you don't have anything to prove your concept or to show that you're serious.

With that in mind, try to drop language like "I just need somebdoy to code it" or "I'll give you 5% of any revenue we make" or any mention of "exposure" - programmers and artists hear this all the time, to the point where sites like [Should I Work for Free](http://www.shouldiworkforfree.com) are a go-to response.

Spend some time researching the different components your app will require (reading this guide is a good start). Come up with a more specific list of things that need done. You don't need somebody to code it. You need a database, a server, a framework, a frontend, graphic design, etc. We'll talk more about these pieces in the rest of the tutorial.

The point is, your job isn't done when you come up with an idea. You then have to do your homework and break your goal down into much smaller steps. Then you can take those individual steps to a programmer, or better yet you can build out a proof of concept yourself.

## Nobody is as Excited as You

This can also be hard to hear if you've been living with an idea for a while. But I think it's an important thing to keep in mind: you might be motivated and energized just by thinking about your idea, but nobody else is.

I'm not saying this to be critical. I'm saying it to explain why you probably get a lukewarm reaction from programmers or artists when you approach them with your idea. They have their own jobs, their own freelance work, their own personal projects going on. They have their own things they're excited about. So when you come to them with your idea, you're asking them to spend their spare time (for free?) on your dream.

This is why it's important to do your homework ahead of time. It's hard to get excited about somebody else's project if all they have is a vague idea of what they want. You'll have more luck if you break it down into specific steps and come to the table with a specific problem, specific goal, specific time table, and a specific amount of money you're willing to pay for it.

## You get what you pay for

Speaking of payment, the cliche is true: you get what you pay for. You might be able to find a programmer or an artist willing to work for free, but chances are these folks are novices themselves.

My advice is that anybody you're working with should be able to show you a portfolio, or a list of similar jobs they've done in the past. You should come to them with a specific goal ("code the app" is not a specific goal) and they should be able to tell you how they'd solve that goal in a way that you understand.

There's nothing wrong with working with somebody just starting out in their career, but think about it this way: if you needed somebody to build you a house, would you trust somebody who has never built a house before and agreed to do it for free?

Serious programmers and artists have a lot going on. They don't have time to work for free. So if you want somebdoy to take your idea seriously, you're going to have to pay for it.

### How much?

It's not really possible to answer a question like "how much does it cost to build an app?" in the same way that it's not really possible to answer a question like "how much does it cost to build a house?" - it depends on a bunch of questions that haven't even been asked yet.

Building a shack with no plumbing or electricity is a different project than building a mansion. Instead of asking "how much does it cost to build a house?" you should ask about the individual parts: how much does it cost to buy land where you want the house, how much does it cost to build this specific foundation, how much does it cost to build the frame, the walls, the roof, etc. You have to break it down into smaller steps and know exactly what you want from each step before you can get an accurate number.

But just to give you an idea of some ballpark estimates, here are some numbers:

- If somebody came to me with a too-broad goal like "just do the coding for a social app" like Catstagram, I'd say it will cost about $100,000 and a few months just for the initial version.
- If somebody came to me with a slightly more specific but still too broad goal like "set up the server part" then I'd say it will cost about $50,000 and a couple months for the initial version.
- If somebody came to me with a more specific goal like "connect to this database and provide these 5 endpoints to provide access to the data" then I'd say it will cost about $10,000 for the initial version.
- If somebody came to me with a much more specific goal like "modify this existing server to add an endpoint to provide access to a new type of data that's already in the database" then I'd say it will cost about $1,000 for the initial version.

Hopefully this shows you that you'll save money by having more specific goals with a smaller scope. You'll save money if you already have the basics set up and can ask for specific additions to that framework.

Think about it this way: you don't hire somebody to "build a house" without any further input. You hire an architect to design something based on your specific input, and then you hire a construction crew to build the foundation. After that's built, then you hire a carpenter to build the frame, or maybe you spend some time learning how to build the frame yourself. Then you hire somebody to put in plumbing and electricity in specific rooms.

If these numbers seem high, keep in mind that the apps you usually use have entire teams behind them and cost millions or billions of dollars to develop!

If you don't have that kind of money to spend, then don't worry: you can put together a prototype yourself for free.

# You can Code

Even if you don't consider yourself a "technical" person (whatever that means), you can still lay a lot of the groundwork, which will make everybody's life (especially yours) easier.

Think about it this way: even if you don't know anything about construction, you can still spend some time learning about it, to the point where you know more specifically what you need. You can learn about architecture and draw up a plan. You can learn enough about carpentry and plumbing and electricity to understand that they're usually three separate jobs. This level of understanding will help you understand the type of work you need done. The same thing is true of software.

As you read through the rest of this guide, take some time to do some research. If you're serious about your idea, then spending a week learning about database systems or the difference between a server and a client shouldn't be that daunting of a task. You don't have to be an expert programmer to set up a simple database, or to learn the basics of server-side development, or to put together a Hello World app.

I'd also encourage you to avoid language like "you're a coder, so this stuff is so easy for you" or "I'm not a coder, so I could never do this". This trivializes the work that programmers and artsits have put in to learn their craft. It's not easy for anybody, and the truth is that you can absolutely do it, you just might not want to put the time in. That's okay, but try not to minimize the work that others have put in, and try not to use self-defeating language.

You'll make your life, and the lives of anybody you work with, much easier if you attempt to put together a prototype of what you're trying to do.

# Break things down into smaller pieces

Like I mentioned above, one of the most important things you need to do is to [break your idea down into smaller specific tasks that need to get done](/tutorials/how-to/program). Even if you don't consider yourself "technical", you need to understand the individual pieces that make up your bigger idea. This is a rough idea of the kinds of things you should be learning about, but keep in mind that each of these pieces should be further broken down into smaller sub-steps as you learn more about them.

## Databases

This might come as a surprise if you've been thinking about stuff like what your app should look like, but if you're going to build an app that shows data, the first thing you need to think about is how you're going to store that data.

It doesn't really matter what your app looks like if you don't have any data, just like it doesn't matter what color your couch is if you don't have a house to put it in. And you can't have data without knowing how you're going to store it. In other words, you need a database.

Spend some time thinking about the data you need to store. Break your data down into its individual fields. Learn about [UML diagrams](https://en.wikipedia.org/wiki/Unified_Modeling_Language) and understand the relationships between pieces of data. Who owns what? Who can change what?

Put together a basic database and write some simple SQL to understand how it works. Create a prototype database that provides access to all of the data you're going to need. Not sure how to do that? Start [here](http://happycoding.io/tutorials/java-server/databases).

Then you can take that prototype to a programmer and ask them to add new data types or to set up scalable hosting.

## Servers

Now that you have data, you need code that accesses and modfies that data. In other words, you need a server.

A server is a computer that lives on the internet, serves requests, and provides access to view or change data in a database.
 
There are many ways to approach server programming. I come from a Java background so I'd personally use [servlets](/tutorials/java-server) or a Java web framework like [Struts](/tutorials/java-server/struts) or [Spring](https://spring.io/). But that doesn't mean that's the right approach for you.

Do some research and write some very simple example servers to understand the difference between the approaches. Build a prototype that provides access to your database. Then you can take that prototype to a programmer and ask them to add a new endpoint or to improve the efficiency of a particular function.

## Web Clients

Now that you have a database that stores data and a server that provides access to that data, the next thing you'll want to think about is putting together a basic website that uses that server and shows your data.

"But wait," I hear you say, "I don't want a website! I want an app!" Although I disagree with that sentiment, it doesn't really matter. Even if your end goal is an app, you'll still want to create a web client to test your server. You'll want URLs that show or allow you to modify your data.

You might think about creating a [REST API](/tutorials/java-server/rest-api) to provide access to your data, and one of the easiest ways to test that is in a web client / browser.

From there you can flesh out your website into something more functional, or you can leave it as a REST API for your app to use.

Also note that one of the easiest ways to create an app that works as a website and on both Android and iOS is to create a webpage that you then embed into a native app using something like a [WebView component](https://developer.android.com/guide/webapps/webview). So you can often get away with not creating separate mobile apps, at least for the first version of your app.

## Mobile Clients

Now that you have a database that stores your data, a server that provides access to that data, and you've tested the basics with a web client, you can finally think about building a mobile app that allows real users to interact with your data.

Learn about [Android](/tutorials/android) or iOS development. Put together a prototype that shows the data and provides some basic functionality. Then you can take that to a graphic designer or UX expert to help understand what you actually need in terms of a user interface, or to a mobile developer to add a new button or screen.

The important thing to understand is that if you want to design a social app, the actual mobile app is the **last** thing that you need to think about. I say this as a frontend developer: the frontend doesn't matter if you don't have any data. The color of the couch doesn't matter if you don't have a house yet.

## Buzzwords

As you do research into each of these smaller pieces, you're going to run into a lot of buzzwords. Sentences like "forget servers, serverless nosql microservices are the future" are going to confuse you. Ignore them.

The fact is that there is no single correct way to do anything in software. That's a beautiful thing, but it can be frustrating for somebody who just wants to know how to accomplish a particular goal.

Don't bother asking "what's the best way to do XYZ" because you won't get a real answer. Just **get something working** and iterate on that. Having something that works is better than going on a wild goose chase for The Best Way, which doesn't exist.

## Teams

Just like building a house takes lots of different jobs (an architect to design the plan, a construction crew to build the foundation, a carpenter to build the frame, an electrician, a plumber...), building a social app also takes lots of different jobs.

Each of the individual pieces I mentioned above is its own field of study. A "real" company will have an entire team devoted to developing and maintaining the database, separate from the team or teams devoted to developing and maintaining the server, separate from the web team, separate from the Android team.

So if you're looking for somebody to help write some code, you're actually looking for a bunch of different people. You're looking for somebody to help with the database. You're looking for a different person to help with the server. You're looking for a different person to help with the actual app.

You're most likely not going to find one person who can [do it all](https://www.atlanticbt.com/blog/myth-full-stack-unicorn-developer/). Instead, break your goal down into more specific steps and take those steps to specific people.

# Keep it Simple

If all of the above seems like a lot, that's because it is. But don't let that overwhelm you. Instead, focus on getting something working. Work on a [prototype](https://en.wikipedia.org/wiki/Prototype) and then a [minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product). Avoid [feature creep](https://en.wikipedia.org/wiki/Feature_creep) and narrow your idea down to the smallest set of features you absolutely need.

For example, maybe our Catstagram app doesn't need image filters after all. Maybe the very first version doesn't even have pictures, just text. If you have an app that connects to a server and accesses data from a database, it's much easier to add stuff on top of that than it is to take everything on all at once. So get the simple ugly version working first, and then worry about adding the bells and whistles.

# Building a Community

Another thing that I think is important to talk about is that software doesn't work on an "if you build it, they will come" principle. You need a community that you're already working with if you want your app to be successful. Your community should have a specific problem that your app would solve.

The way I look at it is: you don't open a bakery because you think you might make money baking cupcakes. You open a bakery after you've already been selling cupcakes out of your kitchen and need more room to keep up with demand.

Creating an app is the same. You should already be a part of online forums, or facebook groups, or whatever the kids are using these days. You should already have a community with a problem that you're trying to solve.

For example, I wouldn't design Catstagram because I thought I could make money off of cat sitters. I would design Catstagram if I was part of an online community of cat sitters and we were frustrated with the old buggy website we've been using for finding customers and processing payments.

It's a ridiculous example, but the point is that you shouldn't build an app until you know you have an audience. Be genuine with that audience instead of trying to just using them for your own profit.

# Get to Work

I hope this guide got you more excited about your idea. I hope you have a little better understanding of everything that goes into making a social app, and I hope you're eager to learn more about all of the individual pieces.

If you still have questions or want to talk more about what you should be doing next, I'm happy to talk about it on [the forum](http://forum.happycoding.io)!