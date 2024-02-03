---
layout: post
title: Google Cloud Java 11 Migration
meta-title: Google Cloud Java 11 Migration
meta-description: Some ranting and rambling about the surprisingly painful Google Cloud Java 11 migration.
meta-image: /tutorials/google-cloud/images/google-cloud-icon-2.png
tags: [site-update, dev-log]
---

{% include toc.md %}

I spent the last couple months updating the [Google Cloud tutorials](/tutorials/google-cloud) from Java 8 to Java 11. I went into this expecting it to be relatively straightforward. After all, Java is backwards compatible, and Google wouldn't completely change how Cloud works, right?

Riiight.

To be fair, I'm not saying I spent 8 hours every day over two months on this, but the migration took way longer than it should have, for reasons that I've been frustrated with for a while now.

# Why Migrate to Java 11?

I originally wrote the Google Cloud tutorials as an excuse to teach myself about Google Cloud, which I wanted to use for the [Software Product Sprint](https://buildyourfuture.withgoogle.com/programs/softwareproductsprint/) curriculum. That worked out pretty well: I wrote the tutorials, then wrote the curriculum using what I had learned. And everybody lived happily ever after.

Well, until earlier this year when Google Cloud started blocking the Maven plugin. All of a sudden, we were no longer able to deploy our code, which, y'know, is a pretty important part of the process. Luckily this happened between SPS sessions so we were able to patch in the new Maven plugin without disrupting anybody, but it was a pretty abrupt wakeup call.

On top of that, the official documentation started showing a big scary warning at the top of every page:

![big scary Datastore warning](/blog/images/google-cloud-java-11/datastore-warning.png)

The [deprecation schedule](https://cloud.google.com/appengine/docs/standard/java/sdk-gcloud-migration) says that the standalone App Engine SDK (which is what most of the tutorials used, and what the SPS curriculum used) will become unavailable on August 30th and **might** not work after that.

What does that mean?? I asked around Google internally, and nobody could tell me for sure whether my stuff will keep working or not, or when it would stop working.

So okay, time to upgrade.

# One Step Forward, Two Steps Back

I hit a brick wall pretty much immediately, because it turns out that Google Cloud's Java 11 runtime is **very** different from Java 8.

Specifically, Java 8 used Jetty behind the scenes to automatically deploy a server for you. You didn't have to worry about how your server was deployed; all of that was handled for you.

But with Java 11, you now have to deploy a server yourself. I found this [super confusing](https://stackoverflow.com/questions/63333073/app-engine-java-11-could-not-find-or-load-main-class-on-live-server), and it took me a couple weeks to wrap my head around it. The [official example repo](https://github.com/GoogleCloudPlatform/java-docs-samples/tree/master/appengine-java11/appengine-simple-jetty-main) was helpful, but it has the same flaw that most references have: it assumes the reader already knows a ton of stuff, when my guess is most people are stuck on the ground floor.

And honestly, the most frustrating thing is that [the official migration guide](https://cloud.google.com/appengine/docs/standard/java11/java-differences) talks about this like Google Cloud is doing us a favor by removing features:

> *"Removing the bundled App Engine services enables the Java 11 runtime to support a fully idiomatic Java development experience. In the Java 11 runtime, you write a standard Java app that is fully portable and can run in any standard Java environment, including App Engine."*

All of that might be true, but they purposely neglect to mention the many downsides of this. A single sentence saying *"we know this will make migration more difficult, but we decided it was worth it because..."* would have gone a long way here, but as-is I just feel like I'm being manipulated by [marketing speak](https://en.wikipedia.org/wiki/Corporate_jargon).

This reminds me of the ["Advancing our amazing bet"](https://fiber.google.com/blog/2016/advancing-our-amazing-bet/) blog post where Google buried an announcement about putting Fiber on hold under sentences like *"Now, just as any competitive business must, we have to continue not only to grow, but also stay ahead of the curve — pushing the boundaries of technology, business, and policy — to remain a leader in delivering superfast Internet."*

And I get it, Google is a company, marketing matters, all of that. But it's really frustrating to feel like I'm being lied to by documentation that's supposed to help me.

# Deprecation vs Availability

There's a joke about Google where everything is either deprecated or not finished yet, and that was painfully applicable here. The "old" App Engine SDK included [Blobstore](/tutorials/google-cloud/java-8/blobstore), [the Users API](/tutorials/google-cloud/java-8/authentication), and [Datastore](/tutorials/google-cloud/java-8/datastore), and it all worked magically together. And since Google is telling us that the App Engine SDK is no longer recommended, that must mean the "new" Cloud SDK we're supposed to switch to contains all of the above, right?

Wrong. Blobstore and the Users API are simply no longer available. Datastore has changed, and no longer runs a dev instance by default. Cloud Storage (Blobstore's replacement) doesn't support a dev instance at all.

I know it sounds like I'm complaining, and maybe I am, but each of these inconsistencies and incompatibilities made the migration harder. And for what reason? From my perspective, I didn't get any benefits from this migration, other than doing what Google told me to do.

On the bright side, I did feel validated when I read [this Medium blog](https://medium.com/@steve.yegge/dear-google-cloud-your-deprecation-policy-is-killing-you-ee7525dc05dc) complaining about the same things.

# Focus on the User

The first item on Google's list of [ten things we know to be true](https://www.google.com/about/philosophy.html) is *focus on the user and all else will follow.*

I wonder what user they (we?) had in mind when the decision to drop support for these features was made. It's certainly not me, and it's certainly not teachers who used Google Cloud in their classes, and it's certainly not small indie startups.

The answer is that Google Cloud only *really* cares about enterprise customers who have teams of engineers to handle this kind of migration, not one guy spending his weekends on it. And again, maybe that's a fine business decision, but I wonder if anybody in the meetings where these decisions were made brought up how hard it would be for teachers who used Google Cloud in their curriculum. Especially because Google is [all about education](https://edu.google.com).

I'm at a point where I don't think I can honestly recommend any teachers use Google Cloud as the basis for their curriculum. Even after you do this migration, how long will it be before you have to do the next one?

Teachers have better things to do than make sure they're using the latest version of some Maven plugin, and expecting them to spend weeks or months of their free time doing an arbitrary migration is totally unreasonable. It makes me sad to think that not a single person raised this issue when they made the decision to break all of this existing code. How many people are just out of luck because of that decision? Does anybody care?

If you're a teacher who wants to teach server-side cloud technology in your classroom: use AWS instead of Google Cloud.

And even if Google only cares about huge enterprise customers, how does Google expect those companies to decide to use Google Cloud in the first place, when everybody inside that company has only used AWS in school? I guess that's why we have an army of sales people.

During my "Noogler" training, this [list of discontinued Google products](https://en.wikipedia.org/wiki/List_of_Google_products#Discontinued_products_and_services) was touted as proof that Google was always trying new things. But now when I look at that list, I can't help but think how many real people were disappointed, inconvenienced, or frustrated.

# Perf-Driven Development

I've worked at Google for 4 years now, so I have some theories about why Google is constantly deprecating and disabling services and features: it's because employees are not incentivized to maintain existing projects.

Every Google employee's salary, promotion level, and entire career is determined by a process called perf. And the only thing perf cares about is numbers. And the easiest way to get numbers is to count how many new users you got.

The key word there is *new*. You won't get promoted for keeping an existing feature alive, or for fixing a bunch of bugs in an existing service. You won't get paid more because you made your existing users happier. The only thing that matters is new features, new users, new projects. I know how it works, and in fact I just got promoted this week, but the system is super broken. I won't harp on this too much, but [here](https://mtlynch.io/why-i-quit-google/) is another person talking about the same problems.

So it's not at all surprising to me that many of the features I relied on in Google Cloud just *went away*. There are a couple migration guides and example projects, and I'm grateful for the work that went into them. In fact, I'm a big fan of the [devrel](https://www.google.com/intl/tr/about/careers/teams/client-facing/dev-rel/) team! But I can't help but imagine how much easier the last few months would have been if Google had decided to maintain the existing functionality I was relying on, or had invested the resources needed to make sure the migration was as easy as possible.

It's nobody's fault, really. Every individual person I've met at Google has been great. I don't want to complain about my job, and I know how privileged I am. But the systems that make these decisions are super frustrating, especially since I'm seeing it from both sides.

Given how powerful tech companies are, I honestly believe that this system of incentivizing easy metrics makes the world a worse place. I think we'd see a huge difference if we incentivized things like user trust, happiness, and mental health instead.

# The Bright Side

I feel a little better after getting that out of my system, but that's enough complaining.

The [Google Cloud tutorials](/tutorials/google-cloud) have been updated to the latest Maven plugin, to Cloud SDK-based libraries, and to the Java 11 runtime. I put together [this migration guide](/tutorials/google-cloud/migrating-to-java-11) so hopefully nobody struggles quite as much as I did. I'm ready to update the SPS curriculum, and I'm excited for next year's sessions.

Let's just hope this version of Google Cloud is supported by Google for more than a year.