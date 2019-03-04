---
layout: blog-post
title: The Stack Overflow Culture Wars
meta-title: The Stack Overflow Culture Wars
meta-description: Stack Overflow's identity crisis.
meta-image: /blog/images/stack-overflow-culture-wars/stack-overflow-logo.png
---

{% include toc.md %}

If you've written code, chances are you've used [Stack Overflow](https://stackoverflow.com) before. Stack Overflow is a [question-and-answer site](https://en.wikipedia.org/wiki/Q%26A_software) where anybody can ask or answer questions about programming. A lot of programming involves Googling error messages, clicking a Stack Overflow link, and seeing how other people solved similar problems before. It's one of the most useful resources for everybody from students to hobbyists to professional engineers.


![Copying and Pasting from Stack Overflow book cover](/blog/images/stack-overflow-culture-wars/copyingandpasting.png)

*(Almost believable book cover by [The Practical Dev](https://github.com/thepracticaldev/orly-full-res))*

Recently, Stack Overflow has been going through a bit of an [identity crisis](https://en.wikipedia.org/wiki/Identity_crisis). Debates have been raging about who the site is for, what type of content it should include, and what that means for future generations of coders.

I find these debates super interesting. It might be pedantic and nerdy, but I also think that this type of conversation is important when thinking about issues like representation and diversity in the industry, so I'll try to give some background on what's happening and offer my two cents.

# Some Background

Before Stack Overflow, if you had a question about programming, chances are you'd end up on an old-school [forum](https://en.wikipedia.org/wiki/Internet_forum). These forums were notoriously frustrating: the content was buried under a ton of obnoxious advertisements, annoying signatures, outdated information, broken links, off-topic conversations, and [everything else](https://en.wikipedia.org/wiki/Dancing_baby) that came with the internet in the early 2000s.

Stack Overflow was [created](https://blog.codinghorror.com/introducing-stackoverflow-com/) by [Jeff Atwood](https://blog.codinghorror.com/) and [Joel Spolsky](https://www.joelonsoftware.com/) in 2008 to help solve this problem. Jeff and Joel were (and still are) popular tech bloggers, so the site gained traction in the programming community pretty fast.

The rest is [history](https://www.joelonsoftware.com/2018/04/06/the-stack-overflow-age/): Stack Overflow is now the most popular programming Q&A site in the world, and has even grown to include sections for Q&A on everything from [science fiction](https://scifi.stackexchange.com/) to [Lego](https://bricks.stackexchange.com/).

## Gamification

One of the ideas that made Stack Overflow interesting was its use of [gamification](https://en.wikipedia.org/wiki/Gamification): users have a score (called [reputation](https://stackoverflow.com/help/whats-reputation)), which can be earned by getting upvotes - or lost by getting downvotes - on questions and answers. You get points for asking good questions or posting good answers, and those points allow you to do [more stuff](https://stackoverflow.com/help/privileges) on the site. [This article](https://blog.codinghorror.com/the-gamification/) sums it up pretty well.

> I play the Stack Exchange game happily alongside everyone else, collecting reputation and badges and rank and upvotes, and I am proud to do so, because I believe it ultimately helps me become more knowledgeable and a better communicator while also improving the very fabric of the web for everyone.
>
>\- [Jeff Atwood](https://blog.codinghorror.com/the-gamification/)

The other side of that is you can also **lose** points for asking "bad" questions or posting incorrect answers.

## Community Moderation

Stack Overflow's reputation system is a form of [community moderation](https://stackoverflow.blog/2009/05/18/a-theory-of-moderation/), where the community as a whole decides what's on- or off- topic by voting on it, rather than one person at the top making all of the rules.

> Stack Overflow is run by you! If you want to help us run Stack Overflow, you’ll need reputation first. Reputation is a (very) rough measurement of how much the Stack Overflow community trusts you. Reputation is never given, it is earned by convincing other Stack Overflow users that you know what you’re talking about.
>
>\- [Stack Overflow's first FAQ](https://stackoverflow.blog/2009/05/18/a-theory-of-moderation/)

For example, questions like *"how do I build a website?"* are considered off-topic because they're too broad and have too many possible answers. Questions like that will be downvoted, closed, and deleted pretty quickly. Similarly, answers that are just a link without any explanation are also usually downvoted or deleted by the community.

## Built for Answerers

That might sound harsh, but this means that people who **answer** questions can spend more of their time answering "good" questions instead of reading through a bunch of "bad" questions.

Many people who answer questions do so in their [down time](https://xkcd.com/303/) at work, so their time is limited. So if somebody is going to spend 10 minutes answering qestions, which is a better use of that time: posting one answer to a good question, or reading through 5 posts that ask questions that don't really have good answers?

The trade-off is intentional: by making it harder to **ask** questions (by requiring research, an explanation of the problem, and [code that reproduces the issue](https://stackoverflow.com/help/mcve)), Stack Overflow makes it easier to **answer** those questions.

## Wiki

Another founding principle of Stack Overflow is that [it was meant to be a wiki](https://www.joelonsoftware.com/2008/12/28/stack-overflow-is-a-wiki/): a repository of information that people could use as a general reference. The idea is that you can ask a question and get an answer for your particular problem, and then the next person to have that problem will Google it, find your question and its answers, and use that to [fix their own problems](https://stackoverflow.blog/2011/01/05/the-wikipedia-of-long-tail-programming-questions/).

> The editing feature is there so that old question/answer pairs can get better and better. For every person who asks a question and gets an answer on Stack Overflow, hundreds or thousands of people will come read that conversation later. Even if the original asker got a decent answer and moved on, the question lives on and may continue to be useful for decades.
>
> This is *fundamentally different* from Usenet or any of the web-based forums. It means that Stack Overflow is not just a historical record of questions and answers. It’s a lot more than that: it’s actually a community-edited wiki of narrow, “long-tail” questions — questions that aren’t quite important enough to deserve a page on Wikipedia, but which come up over and over again.
>
> When you see a question that seems like it might reflect a common problem, don’t just answer it to get a few points. That doesn’t make the Internet any better. Instead, help us build up a library of canonical questions and answers that are more generic versions of the same question, and then start closing all the exact duplicates.
>
> \- [Joel Spolsky](https://stackoverflow.blog/2011/01/05/the-wikipedia-of-long-tail-programming-questions/)

This means that the value of questions and answers is not measured by whether they help a single person. They're measured by how many **other** people they can help. This is a subtle distinction, but it makes a big difference in the kinds of questions and answers the system will accept.

This also means that, in theory, nobody should post a question that's already been answered. [Duplicate questions](https://stackoverflow.com/help/duplicates) are generally closed and deleted pretty quickly.

# Stack Overflow's Reputation Problem

All of the above led to Stack Overflow having a reputation for being a [doubled-edged sword](https://english.stackexchange.com/questions/60728/why-is-the-term-double-edged-sword-used-for-something-that-can-be-favorable-an): on one hand, it is one of the best sources of information for anybody writing code; but on the other hand, Stack Overflow can feel like a pretty unforgiving place - especially for beginners or for people who already feel unwelcome in computer science.

[This article](https://hackernoon.com/the-decline-of-stack-overflow-7cb69faa575d) is a good collection of the kinds of experiences many people have with Stack Overflow: their questions are downvoted, closed, or deleted; they receive rude or snarky comments; and they're at the mercy of the strict rules enforced by thousands of other users.

Here are a few questions about this reputation problem posted on Stack Overflow. (More specifically, most of them were posted on [Meta Stack Overflow](https://meta.stackoverflow.com/) or [Meta Stack Exchange](https://meta.stackexchange.com/), which are like Stack Overflow for questions about Stack Overflow itself.)

- [Why are SO participants so unfriendly?
](https://meta.stackexchange.com/questions/138657/why-are-so-participants-so-unfriendly)
- [A SWAT team of nice](https://meta.stackoverflow.com/questions/336264/a-swat-team-of-nice)
- [Why some repliers are being so unfriendly on stackoverflow?](https://meta.stackexchange.com/questions/300634/why-some-repliers-are-being-so-unfriendly-on-stackoverflow)
- [Why does Stack Exchange have to feel so unfriendly now?](https://meta.stackexchange.com/questions/263833/why-does-stack-exchange-have-to-feel-so-unfriendly-now)
- [Beginners unwelcome on Stack Overflow?](https://meta.stackexchange.com/questions/211521/beginners-unwelcome-on-stack-overflow)
- [The rudeness on Stack Overflow is too damn high](https://meta.stackoverflow.com/questions/262791/the-rudeness-on-stack-overflow-is-too-damn-high)
- [Why is Stack Overflow so negative of late?](https://meta.stackoverflow.com/questions/251758/why-is-stack-overflow-so-negative-of-late)  
- [Stack Exchange is not a forum: the role of “niceness” on a Q&A site](https://stackoverflow.blog/2012/08/08/stack-exchange-is-not-a-forum-the-role-of-niceness-on-a-qa-site/)

Check out the scores of some of these questions to get an idea of the community's reaction.

Another criticism of Stack Overflow is that it feels especially unwelcoming to people from under-represented groups in computer science. [Here](https://medium.com/@glitterwitch/stack-overflow-s-developer-survey-analysis-hurts-women-ec4d568e2352) and [here](http://www.banane.com/2012/06/20/there-are-no-women-on-stackoverflow-or-are-there/) are articles discussing the experience women have on Stack Overflow, and [here](https://meta.stackoverflow.com/questions/309908/declining-numbers-of-women-in-programming-what-can-so-do-to-help) and [here](https://meta.stackexchange.com/questions/30411/what-can-stack-overflow-do-to-persuade-female-programmers-to-participate-more) are questions about it posted on Meta.

# The Unwelcoming

All of this came to a head in April 2018, when [Jay Hanlon](https://twitter.com/jayhanlon), the EVP of Culture and Experience at Stack Overflow, posted this to Stack Overflow's blog: [Stack Overflow Isn’t Very Welcoming. It’s Time for That to Change.](https://stackoverflow.blog/2018/04/26/stack-overflow-isnt-very-welcoming-its-time-for-that-to-change/)

This blog post included a lot of what I summarized above, and ended with a few calls to action:

> **Let's reject the false dichotomy between quality and kindness.** Quality matters because it means posts can *help more people*. But a larger, more diverse community produces better artifacts, not worse ones. We need to stop justifying condescension with the pursuit of quality, and we need better tools and queues to help power users trying to keep quality high.
>
>\- [Jay Hanlon](https://stackoverflow.blog/2018/04/26/stack-overflow-isnt-very-welcoming-its-time-for-that-to-change/)

At this point, Stack Overflow [broke in half](https://www.youtube.com/watch?v=ypot3CYECwE).

Okay that's a slight exaggeration, but this blog post did spark a ton of debate that's **still** happening almost a year later. Here are a few random posts, in no particular order:

- [Please ask if there is a problem before telling us there is a problem](https://meta.stackoverflow.com/questions/366645/please-ask-if-there-is-a-problem-before-telling-us-there-is-a-problem)
- [A SWAT team of nice II: temporarily show new questions only to designated “guide” users, allowing for fixing problems](https://meta.stackoverflow.com/questions/366891/a-swat-team-of-nice-ii-temporarily-show-new-questions-only-to-designated-guide)
- [Does Stack Exchange really want to conflate newbies with women/people of color?](https://meta.stackoverflow.com/questions/366665/does-stack-exchange-really-want-to-conflate-newbies-with-women-people-of-color)
- [How do you know Stack Overflow feels unwelcoming?](https://meta.stackoverflow.com/questions/366692/how-do-you-know-stack-overflow-feels-unwelcoming)
- [On the false dichotomy between quality and kindness](https://meta.stackoverflow.com/questions/366757/on-the-false-dichotomy-between-quality-and-kindness)
- [When is Stack Overflow going to stop demonizing the quality-concerned users who have made the site a success?](https://meta.stackoverflow.com/questions/366858/when-is-stack-overflow-going-to-stop-demonizing-the-quality-concerned-users-who)
- [What examples are there for Not Being Very Welcoming?](https://meta.stackoverflow.com/questions/366867/what-examples-are-there-for-not-being-very-welcoming)
- [Policing in the aftermath of The Blog Post of Welcomingness](https://meta.stackoverflow.com/questions/366875/policing-in-the-aftermath-of-the-blog-post-of-welcomingness)
- [Can we make it more obvious to new users that downvotes on the main site are not insults and in fact can help them help themselves?](https://meta.stackoverflow.com/questions/366889/can-we-make-it-more-obvious-to-new-users-that-downvotes-on-the-main-site-are-not)
- [Please don't force new users into a debugging-specific form on the /ask page](https://meta.stackoverflow.com/questions/366936/please-dont-force-new-users-into-a-debugging-specific-form-on-the-ask-page)
- [Is Stack Overflow really racist/sexist?](https://meta.stackoverflow.com/questions/366937/is-stack-overflow-really-racist-sexist)
- [Request: edit/clarify the “Stack Overflow Isn’t Very Welcoming” blog post](https://meta.stackoverflow.com/questions/366954/request-edit-clarify-the-stack-overflow-isn-t-very-welcoming-blog-post)
- [Curation and cynicism: Or why Stack Overflow sometimes doesn't seem welcoming](https://meta.stackoverflow.com/questions/367016/curation-and-cynicism-or-why-stack-overflow-sometimes-doesnt-seem-welcoming)
- [How can we as a community put more of an emphasis on learning?](https://meta.stackoverflow.com/questions/367081/how-can-we-as-a-community-put-more-of-an-emphasis-on-learning)
- [Changing new users' expectations of this site *before* they ask their question by requiring them to pass a test](https://meta.stackoverflow.com/questions/367092/changing-new-users-expectations-of-this-site-before-they-ask-their-question-b)
- [What community actions is the “Welcoming” blog post advocating?](https://meta.stackoverflow.com/questions/367184/what-community-actions-is-the-welcoming-blog-post-advocating)
- [A Welcoming Change: What do we have to lose?](https://meta.stackoverflow.com/questions/367220/a-welcoming-change-what-do-we-have-to-lose)
- [“Stack Overflow Isn't Very Welcoming” especially […] marginalized groups?](https://meta.stackexchange.com/questions/309513/stack-overflow-isnt-very-welcoming-especially-marginalized-groups)
- [What if they COULD google their question in 5 seconds?](https://meta.stackoverflow.com/questions/371347/what-if-they-could-google-their-question-in-5-seconds)
- [Should we stop commenting altogether?](https://meta.stackoverflow.com/questions/371845/should-we-stop-commenting-altogether)
- [Can we be more welcoming by managing expectations?](https://meta.stackoverflow.com/questions/377101/can-we-be-more-welcoming-by-managing-expectations)
- [A fact-based refutation of an assertion from that “Stack Overflow Isn't Very Welcoming” blog post](https://meta.stackoverflow.com/questions/380437/a-fact-based-refutation-of-an-assertion-from-that-stack-overflow-isnt-very-wel) 

Some of these posts propose changes to make Stack Overflow more welcoming, some of them criticize the blog post, and some of them reject the idea altogether. There is a ton of disagreement and debate in all of these, and new posts are made pretty much every day.

Since the blog post, Stack Overflow has rolled out a few changes in the name of being more welcoming. They rolled out a new [code of conduct](https://stackoverflow.blog/2018/08/07/get-to-know-our-new-code-of-conduct/). They added an icon for [new users](https://meta.stackexchange.com/questions/314287/come-take-a-look-at-our-new-contributor-indicator) in the hope that this would inspire a more welcoming environment. They built a tool that [detected snarky comments](https://stackoverflow.blog/2018/07/10/welcome-wagon-classifying-comments-on-stack-overflow/).

But the debate rages on. Start [here](https://meta.stackoverflow.com/questions/tagged/welcoming) if you want to go down the rabbit hole.

# What is Stack Overflow?

I think the reason that so many people have so many opinions on this topic comes down to a fundamental question: what is Stack Overflow?

Sure, it's a Q&A site. But who is it for? Is it for novices, or for experts? Is it for students looking for help on their homework, or for professionals looking for help with something they're building? Is it a repository of information, or is it a place to get debugging help? Is it meant to make it easy to ask a question, or easy to answer a question?

So far, the answer has been: Stack Overflow is built for all of the above. And I think that's where the friction comes from.

## Types of Users

One source of this friction is that different people approach Stack Overflow for completely different reasons. There are different types of askers:

- **Moochers** who want help on a very specific problem (usually a homework assignment) and don't want to do their own research. These posts are often just copy-pastes of assignments, or a request for somebody to do their homework for them. These users have been called [help vampires](https://meta.stackexchange.com/questions/19665/the-help-vampire-problem) because [they feed on generous individuals who tend towards helping others, and leave their victims exhausted, bitter and dispirited.](http://slash7.com/2006/12/22/vampires/). Note: I'm not saying that every student is in this group! But the truth is, it's very common to see *"please do my assignment for me"* posts.
- **Experts** who are stuck on an advanced problem. They've researched the problem, they've done their own debugging, and they've isolated the problem into one small example that they can't explain. These questions are usually very high in quality, but are also very hard to answer.
- **Most people** are somewhere in the middle of the above two extremes. These users want to do their own work, but often don't have the experience needed to debug their problem. These users mean well, but their questions usually need to be edited before they're answerable. 

And different types of answerers:

- **Reputation seekers** (previously called [something else](https://meta.stackexchange.com/questions/281787/it-s-time-to-retire-the-term-rep-whore)) who are primarily motivated by the number next to their username. These folks tend to [race](https://meta.stackexchange.com/questions/9731/fastest-gun-in-the-west-problem) to answer low-quality questions, often incorrectly.
- **Cops** who enjoy enforcing Stack Overflow's rules, often because they're motivated by the idea that Stack Overflow is a wiki of information. They will close questions as duplicates of older questions, edit questions and answers to improve them, and delete low-quality posts.
- **Teachers** who want to answer high-quality questions. These users tend to rely on "cops" to take care of low-quality questions (either by editing them or deleting them) so they can focus on answering the high-quality questions.

Not all of these groups always get along. For example, "cops" tend to get very frustrated by [gimme teh codez](https://meta.stackoverflow.com/questions/308837/make-it-easier-to-close-job-shop-gimme-teh-codez-questions) type questions, and by reputation seekers who attempt to answer these posts instead of closing them. Teachers get frustrated by cops who close questions that might have been interesting to answer.

And not all of these groups reacted to the blog post the same way. For example, many "cops" feel like efforts to be more welcoming cater to moochers and put the wiki-ness of Stack Overflow at risk. There is an argument that certain questions **shouldn't** be welcomed, depending on which group you're in.

## Stack Galápaflow 

The [Galápagos islands](https://biology.stackexchange.com/questions/5164/why-are-the-gal%C3%A1pagos-islands-so-special) are a famous example of evolution in action: each island is its own ecological niche, which caused animals and plants to evolve differently on each island.

Stack Overflow is similar. Stack Overflow is not just **one** thing: it's a collection of separate communities that interact with each other in various ways. Specifically, Stack Overflow is divided into **[tags](https://stackoverflow.com/tags)**, and each tag has its own set of users, which means that each tag has its own set of unwritten rules.

For example, the [Java tag](https://stackoverflow.com/questions/tagged/java) can get several questions every minute. Because there are so many eyeballs on this tag, it tends to move a lot faster: questions get downvoted or closed by Stack Overflow cops within a couple minutes, while rep seekers [race](https://meta.stackexchange.com/questions/9731/fastest-gun-in-the-west-problem) to be the first one to answer a question.

Compare that to the [Processing](https://stackoverflow.com/questions/tagged/processing) or [p5.js](https://stackoverflow.com/questions/tagged/p5.js) tags. These tags only get a few questions per day, and generally only a [few people](https://stackoverflow.com/tags/processing/topusers) lurk and answer questions. This means that more time is spent on each answer, which leads to a different ecosystem than more popular tags. As a result, the Processing tags tend to have higher quality answers (imho), and are friendlier to novices than the Java tag.

It's slightly more complicated than that. Questions usually contain multiple tags, so there's an interesting collision between these ecosystems. For example, when a Processing question gets tagged with the Java tag, all of a sudden it has all those Java eyeballs on it. These questions are often closed because they don't have a `main()` method, or as duplicates of the [canonical NullPointerException question](https://stackoverflow.com/questions/218384/what-is-a-nullpointerexception-and-how-do-i-fix-it). This gets pretty frustrating, because these are **not** valid reasons to close a Processing question: Processing does not require a `main()` method and can throw a `NullPointerException` from Processing's internal code. I got so frustrated by Java users incorrectly closing Processing questions that I made [this](https://meta.stackoverflow.com/questions/321127/processing-java) Meta post. The point is: the rules and regulations of one part of Stack Overflow often don't make sense in other parts of Stack Overflow.

I think this is a big cause of friction. When we talk about what Stack Overflow is, or what it should be, we're casting a net over 1000 different corners, all with their own users, rules, and expectations.

I'm not arguing that we **shouldn't** talk about making improvements to Stack Overflow. But these are the issues that make that conversation so controversial.

## In the Beginning

This dichotomy (multichotomy?) goes back to the earliest days of Stack Overflow. While researching (aka opening up a bunch of Meta posts in new tabs) for this blog, I wanted to figure out what Stack Overflow was supposed to be in its original form. Turns out, it depends who you ask.

As I mentioned above, Stack Overflow was created by Jeff Atwood and Joel Spolsky. Even they have very different views on what Stack Overflow was meant to be.

Jeff Atwood [has said](https://blog.codinghorror.com/what-does-stack-overflow-want-to-be-when-it-grows-up/) that Stack Overflow was originally designed for professional programmers, not novices:

> Yes, in case you're wondering, part of this was an overt business decision. To make money you must have an audience of people already on a programmer's salary, or in the job hunt to be a programmer. The entire Stack Overflow network may be Creative Commons licensed, but it was never a non-profit play. It was planned as a sustainable business from the outset, and that's why [we launched Stack Overflow Careers](https://blog.codinghorror.com/stack-overflow-careers-amplifying-your-awesome/) only one year after Stack Overflow itself ... to be honest far sooner than we should have, in retrospect. Careers has since been smartly subsumed into Stack Overflow proper at [stackoverflow.com/jobs](https://stackoverflow.com/jobs) for a more integrated and most assuredly way-better-than-2009 experience.
>
> The choice of audience wasn't meant to be an exclusionary decision in any way, but Stack Overflow was definitely designed as a fairly strict system of peer review, which is great (IMNSHO, obviously) for already practicing professionals, but **pretty much everything you would not want as a student or beginner.** This is why I cringe so hard I practically turn myself inside out when people on Twitter mention that they have pointed their students at Stack Overflow. What you'd want for a beginner or a student in the field of programming is almost the exact opposite of what Stack Overflow does at every turn:
>
> - one on one mentoring
> - real time collaborative screen sharing
> - live chat
> - theory and background courses
> - starter tasks and exercises
> - playgrounds to experiment in
>
> These are all very fine and good things, but Stack Overflow does *NONE* of them, by design.
>
> \- [Jeff Atwood](https://blog.codinghorror.com/what-does-stack-overflow-want-to-be-when-it-grows-up/)

He has also mentioned this on Twitter, e.g. [here](https://twitter.com/codinghorror/status/983150210074341376) and [here](https://twitter.com/codinghorror/status/1006618014584745984).

Compare that to Joel Spolsky, who [says](https://www.joelonsoftware.com/2018/04/23/strange-and-maddening-rules/):

> We decided that newbies had to be welcome. Nothing was too “beginner” to be a reasonable question on Stack Overflow… as long as you did some homework before asking the question.
>
> We understood that this might mean that some of the more advanced people might grow bored with duplicate, simple questions, and move on. We thought that was fine: Stack Overflow doesn’t have to be a lifetime commitment. You’re welcome to get bored and move on if you think that the newbies keep asking why they can’t return local char arrays (“but it works for me!”) and you would rather devote the remaining short years of your life to something more productive, like sorting your record albums.
>
> The mere fact that you are a newbie doesn’t mean that your question doesn’t belong on Stack Overflow. To prove the point, I asked “[How do you move the turtle in Logo](https://stackoverflow.com/questions/1003841/how-do-i-move-the-turtle-in-logo),” hoping to leave behind evidence that the site designers wanted to allow absolute beginners.
>
> \- [Joel Spolsky](https://www.joelonsoftware.com/2018/04/23/strange-and-maddening-rules/)

Interestingly enough, the question about moving the turtle has since been closed.

# My Two Cents

I love Stack Overflow. I think it has its share of problems, especially where it comes to under-represented groups, but when it's at its best, it's a beautiful thing.

I won't claim to have all the answers, but here are some of my random thoughts:

## The Process

I've been doing this "online mentoring" thing (read: procrastinating from my day job by posting on the internet) for a while now. And I firmly believe that the best way to help people is **not** to just dump a bunch of code in their lap. Instead, the best thing you can do is walk them through **the process** of breaking a problem down into smaller steps and approaching each step one at a time. [Teach somebody to fish](https://en.wiktionary.org/wiki/give_a_man_a_fish_and_you_feed_him_for_a_day;_teach_a_man_to_fish_and_you_feed_him_for_a_lifetime), and all that.

### First and Last Resorts

I think one major difference between beginners and more experienced developers is that beginners tend to treat Stack Overflow as the **first** thing they should do, whereas people with more experience treat it as the **last** thing they should do.

For example, if I encounter a problem in my code, I know that I should first debug it, then read the documentation for whatever I'm working on, then try to isolate the problem... and only if I have the smallest piece of code that reproduces the problem, **that** is when I'll ask a question on Stack Overflow.

But beginners don't always have the experience needed to go through that process, or to even know that they **should** go through that process. They might not know how to debug code, or how to isolate the problem.

So when somebody asks a question like *"How do I build a website?"* or *"Why doesn't this code work?"* - what they're really asking is *"How do I research how to build a website?"* or *"How do I debug code?"* It's like the ultimate [XY problem](https://meta.stackexchange.com/questions/66377/what-is-the-xy-problem): you think you're asking about code, but you're actually asking about general problem solving.

This is one of the hardest things to learn, and it's one of the hardest things to teach. The only way to learn it is by practicing it over and over again. A lot of beginners don't even know what questions to ask, or how to ask those questions, because they haven't broken the problem down into small enough steps yet.

Think about it this way: if you were planning on building yourself a house, it wouldn't be reasonable to call up a professional carpenter and ask *"How do I build a house?"*. Instead, you'd need to break it down into more specific goals: where do I get lumber, what nails do I need to build a frame, how deep should my foundation be, etc. (I know nothing about building a house, so I'm sure these questions could be further broken down into smaller parts.)

And I think this is what lies at the core of Stack Overflow's identity crisis. Should Stack Overflow answer these general questions with code? Should they answer them with a meta-explanation about how to solve the problem? Or should they close the question until the poster can narrow the problem down themselves?

Right now, there is no single answer to that question. Some people will vote to close, some people will post a full code solution, and others (like me) will attempt to walk the poster through the process of solving their own problem.

So I think Stack Overflow needs to A: definitively answer the question, in a top-down way, not in a "the community decides" way, and B: provide tools to help with that process.

### Canonical General Problem-Solving Questions

For example, Stack Overflow uses the concept of [canonical questions](https://meta.stackoverflow.com/questions/291992/what-is-a-canonical-question-answer-and-what-is-their-purpose). I mentioned Java's [canonical NullPointerException question](https://stackoverflow.com/questions/218384/what-is-a-nullpointerexception-and-how-do-i-fix-it) above. The idea is that any question that boils down to debugging a `NullPointerException` should be closed as a duplicate of that question.

What if Stack Overflow had a canonical *"How do I debug code?"* question? The question could talk about the process of breaking things down, Googling error messages, stepping through code, using print statements and debuggers, and isolating the problem into a smaller example.

What if, when a user asked a too-broad question, they were (politely) directed to a general *"how to break your problem down into smaller steps"* resource, where people could help them one-on-one through the process?

This is why I wrote the general [How to Program](/tutorials/how-to/program) guide and the [Processing Debugging](/tutorials/processing/debugging) tutorial. I often link to these resources in the comments I leave on Stack Overflow, instead of just closing and moving on. I like to think that this makes the Processing tags a friendlier place than the rest of Stack Overflow. But this only works if the whole community is on board.

## Closing is Good

Before I joined Stack Overflow, I spent a ton of time on various programming forums. I started out on the old [Sun Microsystems](https://en.wikipedia.org/wiki/Sun_Microsystems) forums, and I racked up something like 15,000 posts before [Oracle](https://en.wikipedia.org/wiki/Oracle_Corporation) bought Java and shut those forums down. From there I went on to moderate two other Java forums, and I'm pretty active on the [Processing forum](https://discourse.processing.org/) as well.

Here are a couple things I've found to be true:

- People **asking** questions outnumber the people **answering** them. By a lot.
- People on the internet are mean. This goes for people asking questions as well as answering them.
- There are no bad questions, but there are bad places or times to ask a question.

Most questions that people ask are general questions like *"How do I make a website?"* or even *"Can somebody do my homework for me?"* - questions that either **shouldn't** be answered, or questions where the only real answer is to Google it. On most forums, almost every question is one of these unanswerable questions. And many of the people posting these questions get **really mean** if you ask them for more details or suggest that they might start by Googling the error message.

So as an answerer, your "job" becomes more about community management than about helping people. You wade through 10 *"gimme teh codez"* posts to get to 1 interesting question, which takes a ton of time. This actually gets very depressing: I absolutely love helping people learn how to code, but it's extremely demoralizing to wade through all the bad.

This is the problem that Stack Overflow solves. For the most part, these types of low quality questions are very quickly downvoted and deleted from Stack Overflow, so as an answerer, you can get right to the "good" questions without wasting a lot of your time and mental health. This is why I've quit almost every forum I used to visit (the exceptions are [the Processing forum](https://discourse.processing.org/) and of course [the HappyCoding.io forum](https://forum.happycoding.io)).

The fact that questions are so easily removed is a **good** thing for Stack Overflow. It means that if you take the time to ask a meaningful question, you're more likely to get a meaningful answer.

## Reopening Should be Easier

On the other hand, I understand how it feels to have your question downvoted or closed, especially if you're new to coding. It's hard not to take personally, especially since you're already feeling frustrated from banging your head against your problem in the first place. And it doesn't help if people leave snarky comments.

The problem with closing is that we lose a lot of people who mean well, but who don't have the experience necessary to properly debug their problem. These aren't *"gimme teh codez"* questions- they're often *"how do I debug this?"* questions. These questions are usually too broad in their original form, but with some coaching could be made to be more answerable.

The problem is, right now if you post this type of question, you're inundated with downvotes, and your question is closed and then quickly forgotten. Even if you go through the trouble of editing your post to improve your question, the people who originally downvoted or closed it are long gone.

So I think one way to alleviate the frustration - without sacrificing the overall quality - is reframing the closing process. Stack Overflow should make it easier to **reopen** questions after they've been closed. I strongly believe there should be an easy way to notify users who downvoted or closed a question after that question is then edited. Some of this happens in the [Reopen Review Queue](https://stackoverflow.com/review/reopen/), but it's not very obvious, especially for people who are new to Stack Overflow.

In its current form, your question being closed feels like a dead end. But in reality, this is where the learning process **starts**. Picture a classroom environment, where a student raises their hand and tells the teacher their code doesn't work. The teacher rightfully doesn't just take the keyboard from the student's hands and fix the problem for them. Instead, they ask the student for more details: What error are you getting? What research have you done? What did your debugging tell you?

That is how it **should** feel when a question is closed, but right now it feels like an insult.

## Conversations

Another thing that makes Stack Overflow hard for beginners is that it purposely makes it **harder** to have conversations. It says so right at the top of [the tour](https://stackoverflow.com/tour):

> This site is all about **getting answers**. It's not a discussion forum. There's no chit-chat. - [Stack Overflow Tour](https://stackoverflow.com/tour)

This is great for people scouring the internet for solutions to their problems: you don't have to read through a bunch of off-topic banter just to get to the line of code you're looking for. But it makes it harder to have the back-and-forth required for the kind of problem solving help that beginners need.

Stack Overflow does have a chat feature, but it's not really used by newbies. Just thinking out loud here, but if the friendlier closing process above was coupled with an easier chat feature, then people could get the kind of one-on-one help they need.

## Stack Underflow

There are places on the internet specifically designed for beginners. [Java Ranch](https://javaranch.com/) and the [Processing forum](https://discourse.processing.org/) come to mind. So taking a step back, the question becomes: should Stack Overflow even try to be more welcoming to beginners, or should they leave that up to these other places?

There is some interesting discussion on this on Jeff Atwood's Twitter [here](https://twitter.com/codinghorror/status/1055060886908358657) and [here](https://twitter.com/codinghorror/status/989609125318344704). The argument is that different tools should try to solve different problems: one place for experts, and another place for beginners.

Interestingly, this already happens on other Stack Exchange sites, like [English Language Learners](https://ell.stackexchange.com/) for basic English questions, and [English Language and Usage](https://english.stackexchange.com/) for more advanced questions.

So, should Stack Overflow try to be more welcoming, or should it create a new site for beginner programming questions, or should it leave it up to other places on the internet?

I honestly don't know which side of this argument I land on. On one hand, I do think that solving beginner problems is different from solving advanced technical questions, and requires different tools. But on the other hand, it feels pretty gatekeeper-y to draw a line between beginners and experts. After all, we're all beginners at something, right?

But I do think that Stack Overflow, as a company, needs to decide which of the options it's going for **and then do something about it** if it wants to solve the problem.

# Summary

I find this topic super interesting. This post is much longer than I originally planned, so let me try to summarize:

- Stack Overflow has strict rules that make it harder to ask questions, but easier to answer questions.
- These rules can come across as unwelcoming or downright rude, especially if the people who enforce these rules leave snarky comments.
- At least some people at Stack Overflow seem to want to be more welcoming, but the community is pretty divided.
- I think Stack Overflow needs to officially decide exactly what it means to be more welcoming, and they need to provide tools that help with that goal.
- One way they could do this is by "rebranding" the closing process as the beginning of a conversation instead of a dead end. I also think they should simplify the reopening process.
- Beginners need more help with "the process" of solving a problem rather than having syntax spoon-fed to them. If Stack Overflow wants to cater to these questions, then they should create and surface these general resources.

What do you think? What has been your experience with Stack Overflow? What's your take on the debate? What changes would you make?