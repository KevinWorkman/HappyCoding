---
layout: tutorial
title: Motivation
thumbnail: /tutorials/interviewing/images/motivation-1.jpg
tagline: Some disclaimers and opinions before we dive into interviewing.
sort-key: 100
meta-title: Motivation
meta-description: Some disclaimers and opinions before we dive into interviewing.
meta-image: /tutorials/interviewing/images/motivation-1.jpg
previousPost: /tutorials/interviews
tags: [tutorial, interviewing]
---

{% include toc.md %}

<div id="forum-excerpt" style="display:none;">
  <p>I posted a new article that talks about my motivation for creating technical interviewing tutorials.</p>

  <p>Check it out here:</p>

  <a href="/tutorials/interviewing/motivation">
    <img src="{{ page.meta-image }}">
    <h2>{{ page.meta-title }}</h2>
  </a>

  <p>{{ page.meta-description }}</p>
</div>

Big tech's interviewing process is fundamentally broken.

There, I said it. Now that that's out of the way, let's talk about why I'm putting these tutorials together.

# About Me

If you don't know me yet, hi! I'm Kevin.

![Me in Riverside Iowa, future birthplace of captain James Kirk](/tutorials/interviewing/images/kevin-riverside.jpg)

I won't give you [my whole life story](/blog/checking-my-privilege), but if you're going to listen to my thoughts on interviewing, I figure I should first tell you who I am.

I grew up in a small town. Growing up, I thought of college as something for other people. Nobody in my family had ever gone to college, and I knew I couldn't afford it, so my "plan" was to join the military after high school.

![a field of cows](/blog/images/checking-my-privilege/backyard.jpg)

*My backyard growing up. Moo!*

At the last minute, I decided to be a high school English teacher instead. I made some very uneducated decisions about student loans and started at a college that mainly focuses on education majors. Long story short, I soon changed my major to computer science.

I graduated in 2008, put my resume on Monster.com, and took the first job that gave me an offer. I worked there (at an FAA subcontractor just outside of Washington DC) for 8 years. While there, I conducted a few interviews, and I interviewed at a couple other places over the years just to test the waters. I never took those attempts very seriously, and I flat out refused to "study" for an interview. I figured if they didn't want to test for the skills I actually used in my job, then I didn't want to work there anyway.

Then in 2016, a Google recruiter reached out to me. I had been thinking of getting more into "education stuff" for a while- after all, my original plan was to be a teacher! I knew that Google did some of that "education stuff", so I decided to take this interview seriously. I read all I could about the process, and I studied for months, every single day. And eventually I got the job.

![painting of a sign that says welcome to California](/tutorials/interviewing/images/welcome-to-california.jpg)

*Mural inside Google's Los Angeles office.*

Now I've been at Google for almost 7 years. In that time, I've been a Tech Lead, I got promoted to "senior" software engineer, and I've conducted over 50 interviews. Recently I joined a team that helps non-SWEs transfer into SWE roles. I've seen how the system works from the outside and from the inside.

These tutorials are my attempt at adding some transparency to what I've learned.

# Bad News / Good News

I've got some bad news for you, and I've got some good news for you.

I'll start with the bad news:

**Big tech interviews do not test for skills you actually use in your job, they test for algorithmic brain-teaser skills <span style="background:#fbb;">that you must study for.</span>**

But here's the good news:

**Big tech interviews do not test for skills you actually use in your job, they test for algorithmic brain-teaser skills <span style="background:#bfb;">that you CAN study for.</span>**

Is this annoying? Yes, absolutely. But it also means that big tech interviews are not impossible, as long as you're willing to put in the work to study for them.

# What's the Problem?

The obvious problem with big tech interviews is that they test for completely different skills than what the job requires. Software engineering involves a lot of *reading* code (and writing readable code), a lot of collaborating with other humans, and a lot of "nuts and bolts" coding on top of legacy systems. By contrast, big tech interviews involve a lot of coding "clever" (often unreadable) solutions to complex, academic algorithmic problems that you'll never encounter in your job.

Laszlo Bock, the former head of People Operations (HR) at Google, summed it up pretty nicely in his book [Work Rules!](https://www.workrules.net/):

> *"Performance on these kinds of questions is at best a discrete skill that can be improved through practice, eliminating their utility for assessing candidates. At worst, they rely on some trivial bit of information or insight that is withheld from the candidate, and serve primarily to make the interviewer feel clever and self-satisfied. They have little if any ability to predict how candidates will perform in a job."* - Laszlo Bock, the former head of People Operations (HR) at Google, quote taken from his book [Work Rules!](https://www.workrules.net/)

He was talking about eliminating brain-teaser questions like *"why are manhole covers round?"*, but I can't help but apply it to the kinds of questions we still ask today.

By itself, this is annoying enough. But I can *almost* understand arguments in favor of this model. Surely by creating a complicated process that candidates have to study for, we're selecting for candidates that work hard and are smart enough to learn complicated concepts, right? Does it really matter *what* they're studying, as long as they're proving they *can* study? That means when they get the job, they can study for anything we throw at them, right?

I've also heard people say that algorithmic brain-teaser questions test for other skills like asking questions before coding, thinking through corner cases, and navigating uncertainty. But I'd argue at best there are *much* better ways to test for those skills than having people balance binary search trees in a text editor. And at worst what you're really testing for is whether a question makes you, as an interviewer, feel smart.

![Google bikes in a parking lot](/tutorials/interviewing/images/google-bikes-2.jpg)

*Google bikes. In a parking spot marked Google. On Google's campus. In case you forgot.*

But the real problem is that because the interview process tests for separate skills that you have to study for, this restricts the process to people who **A:** know they need to study, and **B:** have the time (privilege) to spend on studying.

If you don't have access to somebody in big tech telling you how to navigate the interviewing process, you're out of luck. If you don't have time to study (because you already have a job, because you're taking care of somebody else, because you have other responsibilities), you're out of luck. In other words: if you aren't already on the path to a big tech job, you're out of luck.

So the real problem with big tech interviews is that they enforce the inequities already present in big tech.

# Access

This issue of *access* in big tech is something I think about a lot. For most of my life, not only did I write off working in big tech as an option, *I didn't even think to consider it as an option in the first place*.

It wasn't until a Google recruiter reached out to me in 2016 that I seriously considered it. I was thirty years old at the time.

There's a lot about the process that seems obvious in hindsight. Of course questions are purposely vague. Of course you shouldn't start coding right away. Of course grinding Leetcode is how everybody studies.

But I didn't know any of that stuff ahead of time. I didn't know anybody in big tech who could tell me any of that. I didn't have _access_ to the tech industry.

Compare that to somebody who went to Stanford, took [Stanford's class that teaches about big tech interviews](https://web.stanford.edu/class/cs9/), and knows a bunch of people who work in big tech. I'm not saying that people who go to Stanford do anything wrong, but the level of _access_ is very different depending on where you come from, what support you had, and who you know.

Now that I work at Google, I have a ton of access to big tech. I have a front row seat to how it all works. I can ask questions and have conversations with "insiders" in a way that most people can't. I've learned a lot just from talking to other people who work in big tech. And it's honestly still pretty surreal for a kid from the cornfields of Lancaster county.

![hallway inside a Google building](/tutorials/interviewing/images/google-1395.jpg)

*My desk is down this hall and to the right.*

I really don't like mythologizing myself too much, or making any of this too grandiose. But I'm hoping that these tutorials improve _access_ to big tech for other people. And not just for people who are already on the inside.

# Disclaimers

Although I work at Google, these are very much my personal opinions. I'm going to try my best to be transparent about what I know, but I'm not going to give away anything that's confidential. Everything I say is either public knowledge, or my own personal opinion.

# Why Big Tech

My goal is to improve access to big tech, but I'm not really encouraging anyone to seek out a job in the industry if they don't want to. Once upon a time, FAANG companies (Facebook, Amazon, Apple, Netflix, Google) were objectively amazing places to work. But after years of chasing short-term profit, building up dystopian surveillance states, fumbling with forced return to office, and laying off tens of thousands of people to appease billionaire shareholders, I'm not so sure anymore.

I know that complaining about working in big tech is a very privileged take, but my goal is to be as honest and transparent as I can be. If a friend asked me if they should work at Google, my honest answer would be: I don't know.

![dinosaur having a cookout](/tutorials/interviewing/images/google-dinosaur-1.jpg)

*Google's dinosaur dressed for summer.*

I'm not sure if big tech is a good place to work. However, one thing that's hard to argue with is that working in big tech is good for your resume. For better and worse, having a big tech company on your resume still gives you a certain amount of credibility, which can help you get through the "foot in the door" stage at other companies. So even if big tech isn't your end goal, it's still a pretty surefire way to end up wherever you want.

So my advice is to go into it with your eyes open. Working in big tech has some serious benefits, and some serious drawbacks. But my goal is to help make it your choice.

# Am I Helping?

While I'm rambling about the existential pros and cons of big tech, I'll close this out by naming a deep uncertainty I have: I don't know if these tutorials, or the class I'm teaching, are making the world a better place, or a worse place.

That probably sounds melodramatic. I know that online tutorials aren't going to make or break society. But it's what I spend my time on, and I want to spend that time doing more good than bad.

![sign that says google can't satisfy every search](/tutorials/interviewing/images/google-search-sign.jpg)

*Sign in Mountain View, a couple miles from Google's headquarters.*

I think the current interview process is at best broken, and at worst evil. I pretty openly hate the current process itself. And although I don't blame the meta-industry of interview prep that sprung up as a result, the fact that it exists is a symptom of some pretty deep problems in our society.

I don't love that Stanford has a class devoted to teaching wealthy private school students, who already have a ton of access, how to get through big tech interviews. So I have mixed feelings about offering the same content myself. But my hope is that by doing so, I can help people navigate that same process.

Alright, enough rambling. Let's start balancing binary search trees.

# Other Links

- [We Hire the Best, Just Like Everyone Else - Coding Horror](https://blog.codinghorror.com/we-hire-the-best-just-like-everyone-else/)
