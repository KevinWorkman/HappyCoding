---
layout: tutorial
title: Intro to Intro to Web Development
meta-title: Intro to Intro to Web Development
meta-description: I got a teaching job! Here are some ramblings about how the class might work. Feedback is appreciated!
meta-image: /teaching/guides/images/outreach-1.png
tags: [teaching]
---

{% include toc.md %}

I got a teaching job! Starting in a couple weeks, I’m going to be an adjunct professor at [my alma mater](https://www.millersville.edu/) teaching an Intro to Web Development course.

Depending on who you are and how much impostor syndrome I'm feeling, that might not sound like a big deal. But it's something I've been daydreaming about and working towards for a very long time now, so even through my grouchiness and self-deprecation, I'm pretty excited about it.

This post is my attempt to organize my thoughts and maybe get some feedback on how I'm currently thinking about the class.

# History

*Note: This section ended up quite a bit longer than intended. I'm going to leave it in for posterity, but feel free to [skip to reading about the class](#goals).*

I've wanted to be a teacher since high school- in fact, my original plan was to be a high school English teacher. [Millersville University](https://www.millersville.edu) is where you go if you want to be a teacher in Pennsylvania, so (long story short) that's where I went.

After a semester or two of suffering through English courses taught by professors who seemed to enjoy torturing students, I decided that I was too much of a descriptivist for those stuffy prescriptivists, and (another long story short) I changed my major to Computer Science. I was a huge fan of a CS professor named Dr. Schwartz, whose ideas about torturing students mostly involved throwing candy at them.

Millersville doesn't (or at least didn't) have a CS teaching degree, so I eventually graduated with a plain old degree in CS and got a job as a software engineer.

But I've always had an "itch" for teaching. Over the years it's taken [many forms](/blog/ten-years): Static Void Games, various forums and Stack Overflow, Happy Coding. I've always told people I'd like to do *something* in the teaching world, but I haven't always known what that meant.

Back in 2010 or so, I started daydreaming about becoming an adjunct professor. Maybe I could keep my job as a software engineer and teach part-time? But then I saw you had to have a master's degree for that. I'm really bad at thinking more than one step into the future, so off I went to grad school. Of course, by the time I finished grad school in 2015, I wasn't so sure about the whole professor thing anymore. I wasn't sure what I wanted to do. Stay at my current job? Settle down and buy a house? Try to figure out how to be a teacher?

Then in 2016, a Google recruiter found me on [GitHub](https://github.com/KevinWorkman) while I was creating the first few pages of Happy Coding. I had a vague idea that Google did "education stuff" so I figured this was my chance. I [studied for the interview](/tutorials/how-to/interview), took the first job they offered me, and had the big plan of moving to one of those "education things" as soon as possible.

On pretty much my first day, I did an internal search, found Google's [Software Product Sprint](https://buildyourfuture.withgoogle.com/programs/softwareproductsprint/) program, and volunteered to help. I weaseled my way into the core team, and over the past few years, I've been the primary author of most of the curriculum. It's been wild to see thousands of students and volunteers from all over the world using stuff I've written.

I truly love SPS, the work I've done with them, and most importantly, the people I've gotten to know through it. But Google is a weird place, so I was never able to figure out how to turn it into an actual job. Google relies on volunteers for a lot of this kind of work, but doesn't really incentivize spending any time on it. [Google's obsession with metrics and performance reviews](https://mtlynch.io/why-i-quit-google/) means that any time you spend on stuff like education actually *hurts* your career. After all, that's time you could have spent increasing how many lines of code you wrote in a quarter, or how many design docs you emailed out to the team. The idea of a "20% project" sounds great in theory, but in practice it meant working 10 hours a day on my "real job" before I even got to my "volunteer" work on SPS.

I'm being a little grumpy there, and to be fair it has changed a bit over the years. But this "balance" has been a big part of my journey in figuring out how to do education stuff. I'll stop complaining, but I recommend reading [Keep your receipts: when doing the Diversity & Inclusion (D&I) work is still not enough](https://medium.com/@coligadinha/keep-your-receipts-when-doing-the-diversity-inclusion-d-i-work-is-still-not-enough-dcaab9e912e0) by Lea Coligado.

Anyway, the past 5 years have mostly been working as a software engineer for Google Maps by day, working on SPS by night, and working on Happy Coding by later night. I've also done a few things like [CC Fest](https://ccfest.rocks/), and it's been fascinating to realize how small some of these worlds are.

Then the world ended.

Like many folks, I started working from home in March 2020, and I haven't really been back to the office since. I'm not sure I ever really will be. Almost two years later, I think we're in "the new normal" that people kept talking about back in early 2020. I don't want to take that too lightly- it's been hard in so many different ways for so many different people. But it also opened up new opportunities.

In October of 2020, Dr. Schwartz (yes, the same Dr. Schwartz who saved me from the clutches of the English department back in college) invited me to do an "ask me anything" session for a CS class at Millersville. This was only really possible because of that new normal- after a few months of virtual classes, I think they were trying to find ways to capture the feeling of hanging out in the computer lab in person. I'm not a nostalgic person, but spending an hour just talking to a few students from Millersville made me feel a lot of feelings. I also did a couple one-off guest lectures in 2021. One challenge I've had with SPS is that it generally engages with students who are already on Google's radar, so I haven't always felt like I'm making much of a difference. I've missed connecting with folks like me, who didn't even know what an internship was, let alone imagining working somewhere like Google.

In January of 2021, I started recording code-along videos, and I ended up creating [45 new videos](https://www.youtube.com/playlist?list=PLty5Qt07EFvCRZ79uzn7ofzwPdlKpLH4h) in 2021. I don’t think I’ve unlocked any great mysteries of video production, but it’s been fun to figure out the little stuff: how do I record myself and my screen at the same time? Where in my apartment is the best place for recording? What’s the right balance between showing everything but not taking too long? I still have a lot to learn, but it’s been interesting to see little improvements over time.

I also changed jobs in June of 2021. I had been working for Google Maps for almost 5 years, but after a series of particularly frustrating management decisions, I decided to finally find a new day job. I briefly considered pursuing a teaching position, but I eventually moved to engEDU, which is basically Google’s education department (or at least one of them). I'm still a software engineer, but engEDU is going to be a lot more amenable to stuff like teaching on the side without worrying too much about how many lines of code I'm writing during the day.

Then in August of 2021, I helped teach a week-long virtual p5.js class for [Seizing Every Opportunity](https://www.seo-usa.org/) through [Upperline Code](https://www.upperlinecode.com/). Again, this was only possible thanks to the new normal of virtual classes and working from home. Watching my co-teacher Taylor do her thing was truly inspiring and taught me so much about being a “real” teacher. I felt a little like one of those people who spends one week in another country and then talks about how inspiring it was for the rest of their life, but that one week really did help click a bunch of things into place for me. Specifically it helped me understand what a virtual class actually looks like (breakout rooms to the rescue) and helped me understand that accountability and inclusiveness are not at odds with each other.

This section is a lot longer than I originally intended, but I'm trying to capture a feeling that's really hard for me to explain. When Dr. Schwartz (yes, that same Dr. Schwartz) invited me to interview for the adjunct professor position, I felt like all of the above had been leading to this. "Ohhh so THIS is what it's all been about!"

# Goals

Okay, enough rambling about my life story. Let's talk about the actual class.

It's a computer science course, but it's intended for non-CS students. Specifically, it sounds like many of the students will be design majors who are curious about making websites. This is extremely close to the "target audience" of Happy Coding, and I'm really excited about the idea of demystifying coding for folks who aren't sure it's something they're interested in.

With all of that in mind, I have a few main goals:

I want students to learn **practical knowledge** about making real websites. That might sound obvious, but I remember being frustrated by too much theory in school. "This is interesting, but how do I actually build something with it?" For example, I'm not going to spend a ton of time explaining all of the various theoretical ways that CSS cascades. Instead, I'm going to show the fundamentals of how CSS works, show some examples of it in action, point to some resources for learning more, and then give the students a goal that can be solved with CSS.

I want to **demystify** concepts rather than explain every little detail about them. For me, the hardest part about learning a new concept is getting over the initial hurdle, when it seems scary and intimidating. I've spent years avoiding concepts (in fact, web development was one of them) just to find out after a weekend of tinkering that it's not so bad after all. Stuff like setting up your coding environment and knowing where to find more information might seem small in the grand scheme of things, but I actually think they're some of the hardest and most important things to learn.

I want to value **fundamentals** over shiny new frameworks. Ask 5 people which web development framework you should use, and you'll get 6 different opinions. I do think it's important to demystify the idea of frameworks, but I don't want the whole thing to be tied to a single framework. Similarly, I don't want to tie the class to a single coding environment.

I want students to learn [**the process of problem solving**](/tutorials/how-to/program) rather than memorizing a bunch of syntax. Folks who haven't coded before assume that writing code is mostly typing: you have a thing you want to do, your brain knows what code to write, and your fingers type it. But that's not true at all. Coding is mostly searching, reading through documentation, trying random stuff out, debugging when something goes wrong, and iterating. Those skills are much more important than memorizing which HTML tag creates a list, or which JavaScript function gives you a particular element on the page.

I want homework and projects to be **personally meaningful** to students, or at least personally interesting. I don't want to give homework that's just me telling folks what to do. I want to leave room for creativity and self-expression, without leaving it so wide open that nobody knows what to do. I want students to come away with something unique to them, that they can be proud of sharing with the world. In a perfect world, projects would be so unique to each student, that they'd want to do their own remixing even if they started with the source code of another student's project. I'm not very concerned about "cheating", but if a project can be finished by just copy-pasting, I don't think it's a very interesting project.

I also love the idea of low floors, high ceilings, and wide walls in education, where a class should be accessible, lead to advanced topics, and have a little something for everybody to explore.

# Format

Because Millersville is in Pennsylvania and I live in California, the class is going to be completely virtual. But it's up to me what that looks like. I could do it completely asynchronously by recording videos ahead of time and having students work on their own, or I could do it completely synchronously over video chat.

I went back and forth on this for a while. I'm pretty comfortable writing tutorials and recording videos, but is that what students want from a class they're paying for? On the other hand, are they going to want to sit through me explaining HTML, or are they going to wish it was a video they could set to 2X speed, or a tutorial they could read instead?

I thought about giving students the option of either watching pre-recorded videos or coming to class, but my guess is that nobody would show up for an optional class. So I eventually decided on a hybrid approach:

- Each week will have pre-recorded videos and tutorials that introduce a new concept.
- Students will work on their own through the content, and then complete a different project each week.
- We'll also have a single synchronous class each week. Rather than introducing any new concepts, this time will mostly be a chance for students to share what they worked on over the past week.
- I'll also have optional office hours throughout the week for anybody who wants to chat more about that week's topic, or about anything really!

This particular class will be on Fridays which works out nicely, but the exact timing isn't super important to the format. So a typical week will start with reading and watching some content that introduces a new topic, then working on a project to practice that topic, maybe going to office hours if you have questions, and then presenting your project in class on Friday.

Two things decided this for me. First, I've never taught a semester-long course before, so I'm going to be in my "strain zone" a lot and will probably make a bunch of mistakes. But if I can rely on writing tutorials and recording videos, which I already know how to do, then that'll be one less thing that I might screw up too badly.

Second, and maybe most importantly, I love the idea of the course content living after the course itself ends in May. Using the course as a motivation to create content that then lives on Happy Coding afterward *feels* like a culmination of everything I've been building over the past 10 years. That might be a little selfish, but I'd love for other teachers to be able to use it in their own courses, or for folks to take the course without being officially enrolled in a specific school. So starting the course with pre-recorded and pre-written content feels like the right move.

# Content

Like I mentioned above, each week will start with a pre-recorded video explaining that week's topic. I'm going to try to keep these short, maybe 15 minutes or so. Then I'll have an example code-along that uses that topic, probably another 30 minutes or so. I'll also link to written tutorials, similar to how other classes might assign a chapter of a text book. Finally, each week will have its own project that students work through on their own, and then present in class.

## Environment

There are a million different ways to deploy a webpage. I'm going to use [GitHub Pages](https://pages.github.com/), mostly because it's what I actually use to deploy most of my actual websites (including Happy Coding). I thought about using something like Glitch or Replit, but I wanted students to see how the different files fit together without too much happening automagically.

I'm going to be pretty agnostic about everything else. I want students to feel like they're learning web development, not like they're learning a specific environment. I am going to recommend a couple different setups: Atom and GitHub Desktop for folks with a computer they can install stuff on, and Replit (which has nice integration with GitHub) for folks with chromebooks or shared computers.

For the projects, I'm going to ask students to fork the [intro to web dev repo](https://github.com/KevinWorkman/intro-to-web-dev). That's still under construction, but it'll contain instructions and starter code for each week. Each week, students will modify that week's files and then deploy using [GitHub Pages](https://pages.github.com/). I'm not going to get into git at all, other than to explain how to push changes to the repo using either GitHub Desktop or Replit.

## Topics

With that format in mind, here are the topics I'm thinking of introducing each week:

### Week 01: HTML

This week is mostly about setting up your environment and making sure everything is connected, but I'm also going to introduce the fundamentals of HTML tags. My understanding is that most students will have seen a bit of HTML before, but I want to make sure I cover it so I'm not assuming any prior knowledge.

For the project, we'll create a webpage that introduces ourselves.

### Week 02: CSS

I could spend more time on HTML, but my philosophy is going to be: introduce the fundamentals, point out where to go for more information, get some practice, and then move on.

The next logical thing to learn is CSS. Again, I think most of the students in this particular class will have seen a little CSS before, but I'm not assuming any prior knowledge.

For the project, we'll pick some text (e.g. a poem, song lyrics, an excerpt from a book) and then style it using CSS. This is what I meant above about projects being personally interesting and copy-paste proof. Even if I see the source code for your text, I'm still (hopefully) going to want to come up with my own thing.

### Week 03: Layout

Flexbox, and layout in CSS in general, is one of those things that seems scary at first, but makes a lot more sense after a couple hours of tinkering. I might have included this in week 2, but I want to give it enough time to properly demystify it.

For the project, we'll create websites for businesses. The business can be real, imaginary, or aspirational. Again, the idea is that everybody is practicing the same skills, but doing something unique that's interesting to them.

### Week 04: JavaScript and DOM Manipulation

Next comes JavaScript. This is the first big step up in terms of complexity. I think most students will have seen HTML and CSS before, but not many will have seen JavaScript, so I want to spend a week on the fundamentals of how it all fits together.

For the project, we'll create interactive [mad libs](https://en.wikipedia.org/wiki/Mad_Libs) games. Something like a webpage with 5 inputs that ask for a single word each, which then get inserted into a string to create a story.

### Week 05: If Statements

Now that we know some fundamentals of JavaScript, it's time to learn about conditionals.

For the project, we'll create our own quizzes. Each quiz can be about anything- you, your pet, or any topic you find interesting.

### Week 06: For Loops and Arrays

Next up is `for` loops. I've gone back and forth a little bit on exactly what to introduce, and how to introduce it. Should I talk about `while` loops at all? Should I talk about `for of` loops?

One thing that surprised me, which in hindsight is not a surprise at all, is how important time is while planning a course. Usually when I write tutorials, I don't worry about how long each one takes, or how long they take in total. I figure that people will work through them at their own pace, and I lean towards focusing on one thing at a time rather than trying to rush through a bunch of different things as quickly as possible.

But that's not always doable with a class. A semester only has a certain number of weeks, and each week only has a certain number of hours. I know this is Real Teacher 101, but it was one of the biggest challenges for me.

All of that to say, I'm also introducing arrays this week. Arrays and `for` loops go together naturally enough, but I still don't love cramming too much into one week. But it's either that or cut one of the other topics.

For the project, we'll be picking a speech (anything with more than 100 words) and then outputting a few different sections: words with less than 4 characters, the longest word, words that start with a certain letter, etc.

Honestly, this feels like the weakest project to me, but I hate almost every `for` loop exercise I found on the internet. Who cares about computing the average of a list of numbers? And this [Fizz Buzz page](https://wiki.c2.com/?FizzBuzzTest) is a great example of pretty much everything I hate about engineer-y approaches to education. But I admittedly struggled to come up with something much more compelling myself. I'm open to ideas if anybody has them.

### Week 07: p5.js

I love [p5.js](/tutorials/p5js), and I originally considered teaching the whole class with it. But that felt a little unfair for students who signed up wanting to make traditional websites. I know I could start in p5.js and then branch out to HTML, but ultimately I decided to go the other way. I'm as surprised as you are.

But I couldn't resist at least including one week of p5.js, and this felt like the right time to do it. My guess is by this point in the class, at least some students will feel a little overwhelmed by new JavaScript syntax, and p5.js is one of the best ways to practice that. So the idea this week is to talk about libraries a bit, introduce the fun and magic of p5.js, and then use that as an opportunity to practice everything we've learned up until this point.

I mentioned struggling with time constraints, but the other interesting challenge that made planning this course different from writing tutorials was knowing that spring break was right in the middle. I don't want to assign a ton of work over a break, but I did want to make sure that this content left a lot of room for exploration for folks who did want to use that time.

I originally planned to get all the way to `fetch()` before spring break, and I thought that the Wikipedia project (which is now in week 9) would make a good longer midterm project. But I couldn't find a way to fit it all in without combining way too much, so in the end I decided to move p5.js up a little so that folks could play with that through break if they wanted to.

The project this week is pretty free-form: use p5.js to make something, with a list of different types of code to include.

### Week 08: Objects

Back from spring break, it's time to talk about objects. This is mostly a means to an end, because I want to talk about `fetch()` and JSON and can't really talk about that without talking about objects. This will be the second big step up in complexity (objects really confused me when I first learned about them), so I want to spend a week introducing them before really getting into the weeds.

The project this week is creating an array of objects to represent a list of data. The data can be your favorite movies, books, places, whatever, as long as there are at least 10 of them and they have at least 3 fields. Then we'll write JavaScript that builds a page from that data.

### Week 09: Fetch

The `fetch()` function unlocks a lot of really cool features, and it's one of those things that seems scary at first until you play with it a bit, so I wanted to make sure to include it.

Most APIs require some confusing setup and authorization, so I thought about putting together a simple API myself that we could use. But that felt a little too artificial, so in the end I decided to use the Wikipedia API. You can use (parts of) it without any authorization at all, and it's something that folks will have some familiarity with.

This week's project is to use the `fetch()` function and the Wikipedia API to create an alternative visualization of a Wikipedia page. I think this is the project I'm most excited about.

### Week 10: Bootstrap

I personally have a bit of an aversion to Bootstrap because I think it prevents people from learning the fundamentals of CSS, but it also felt disingenuous to leave it out since it's so popular. Again, the idea is to demystify the fundamentals so that the idea of frontend toolkits isn't scary anymore.

I was originally planning on covering both JQuery and Bootstrap this week, but it turns out that as of Bootstrap 5 (released June 2020), Bootstrap is no longer built with JQuery. Who knew! I could still introduce JQuery separately, but I have an even bigger aversion to that, so I think I'm just going to leave it out.

This week's project is to revisit the websites we built in week 3 and "Bootstrapify" them.

### Week 11: React

I've refused to learn React for years, and originally I had no plans to include it in this class. But every single web developer I talked to about this class told me I should, so here we are. [Tania Rascia's React tutorial](https://www.taniarascia.com/getting-started-with-react/) was an epiphany for me, and is a great example of the demystification effect I've mentioned a few times now.

One of the things I don't like about React is that it wants to be your whole world. I know there are benefits to that, but I think it has the downside of locking people (especially new coders) into one way of thinking. So I was relieved to figure out a way to get the functionality of React without going all-in on the entire environment.

After a weekend of tinkering, I can say that I still don't love React, but I understand the fundamentals, and that's what I'm hoping to pass on this week. This is the third and final big step up in complexity- I'm still debating whether I should try to talk about extending classes, or just leave it as some magic that can be mostly ignored. But React is impossible to avoid, and students will likely encounter it if they continue learning about web development after the class ends, so I think it's worth spending a week on.

This week's project is to revisit the data-driven UI from week 8, and rebuild it using React.

### Week 12: Accessibility

Accessibility is another topic that feels scary at first. What's an ARIA role? How do I use a screen reader? Why is this important? But I also feel like after just a couple hours of playing around, you can be familiar enough with the fundamentals to participate pretty meaningfully in conversations about accessibility.

So this week is about demystifying accessibility and building empathy. This week's project is to do an accessibility audit of the previous projects, and to fix at least *X* different issues.

### Week 13: Final Project

I want to give folks a solid two weeks at the end of the course to create a final project using everything we learned so far. So instead of trying to introduce another new topic, I'm currently planning on devoting most of this class to introducing the final project. This might also end up being spillover for any other topics that come up throughout the course.

The biggest thing that's missing from the current curriculum is a lesson on server-side development. I would have loved to spend a week on that, but I don't think it's going to fit. Maybe I'll include it in version 2.0 of the class.

### Week 14: Q&A

Similar to week 13, I don't want to introduce any new concepts in the last week. Instead, I'm thinking of maybe having a couple of my coworkers join the class for a Q&A session.

Part of my goal with this course, and Happy Coding, and really my life in general, is to pay forward some of the privilege I've accumulated. I know when I was in college I didn't have much contact with people at companies at Google, and I wonder how much that would have changed my career trajectory. I don't think I'm any great savior or anything, but if I can use my day job to make the industry just a little more accessible for folks who might not otherwise have access, then I'm absolutely going to do it.

### Final Week: Project Presentation

Then the last class during finals week will be all about presenting the projects that folks have been working on for the past couple weeks. I don't actually know how finals work with a virtual class, so I might end up moving this to week 14 and then having the Q&A session in week 13, or something like that.

# Grading

I think I've been convinced that grades a generally a bad thing, but I do see the value in getting frequent, actionable feedback during a class. In fact, that might be one of the main benefits of attending a class instead of watching a tutorial video.

I also see that feedback working both ways- students should know whether they've used a new concept correctly, and I should know how the class is doing, who needs more help, what I should explain better, etc.

Each project contains a checklist of requirements: stuff like "use at least 5 if statements" that students will know ahead of time when they've finished. I haven't finalized exactly what that checklist is for each week, but my general idea is to assign a point value to each item on a list and come up with grades that way.

I've also thought about coming up with a list of possible topics that students can cover in 5-minute lightning talks for extra credit. Stuff like HTML colors, the history of the world wide web, dark patterns, etc. I'm not sure about the logistics of that though, so I might axe it.

I'd also like to incorporate weekly surveys to see how things are going, and I might mix some open quiz-type questions into that as well. So at the end of the week, maybe students are filling out a survey with questions like "What was the hardest part about this week?" along with "Describe for loops in your own words". I need to put a little more thought into this, and I need to ask my boss for some feedback on it, but that's what I'm currently thinking.

# Releasing Publicly

One of the most exciting things about this course is that I'm hoping to release everything publicly, but I want to make sure I do it right. I want to find the balance between my belief that information should be free while also respecting students who paid good money to take a class. Is it going to feel fair to somebody who paid for the course to see the content freely available online?

I think there's an argument to be made that what you pay for in school is direct access to the instructor and other students. I'm probably not going to have office hours for the general public, and the synchronous class is certainly only for official students. I'm not sure if that's enough to make it feel fair to everybody though, but I still want to try.

So I am planning on releasing everything publicly, the only question is how public. I could quietly put it up on Happy Coding, or I could start a Twitter thread inviting folks to participate each week, or something in between. More thought is required here.

# Next Steps

My goal with this blog post was to collect my thoughts and solidify a bunch of things I've had swirling around in my brain, and I think I've done that. If you've read this far, thanks for listening to my rambling.

I've already put together the [intro to web dev repo](https://github.com/KevinWorkman/intro-to-web-dev) containing starter code for each weekly project. That still needs some adjustments, but the bulk of the content is there.

Next, I'm going to start building the core content, the videos and tutorials that folks will be working through each week. I think I've decided to put the structure in the [teaching section](/teaching), and to link out to the [tutorials](/tutorials) and [examples](/examples) instead of trying to put everything all in one place. That's getting pretty into the weeds, but it's stuff I can get a little obsessive with.

In a perfect world I'd be done with all of the content before class starts on January 21st, but realistically I figure as long as I'm a few weeks ahead I should be fine.

I'd love to hear any feedback y'all have, either on the format of the course, the content, or the ethics around posting course content publicly. I still mostly have no idea what I'm doing, but I'm excited about figuring it out!
