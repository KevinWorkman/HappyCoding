---
layout: tutorial
title: How to Interview
thumbnail: /tutorials/how-to/images/interview-2.jpg
tagline: What to expect and how to approach tech interviews.
sort-key: 400
meta-title: How to Interview
meta-description: What to expect and how to approach tech interviews.
meta-image: /tutorials/how-to/images/interview-1.jpg
tags: [tutorial, how-to, interview, career]
---

{% include toc.md %}


# How to Interview

I don't consider myself an expert at interviewing (I don't consider myself an expert at anything), but I do have experience being both the interviewee and the interviewer at a few companies. I got through the Google interview, and now I conduct Google interviews myself. I've done mock interviews, I've attended hiring committees, and I've given talks about what to do (and what *not* to do) during interviews.

Interviews are terrifying, and awkward, and artificial. But they decide whether your coding passion turns into a coding career, so I believe that demystifying the interview process is an important part of improving access, equity, and diversity in tech.

I've talked about interviews with quite a few people coming from all sides of it, and this article is my attempt at collecting some of that into one place. If you're curious about the tech interview process, or if you're going through it yourself, hopefully this is helpful for you.

# Disclaimers

Like I said, I don't consider myself an expert. This article will introduce some of what you can expect from the process, as well as some advice I've given and received. But any source that claims to be the one true answer to interviewing is at best incomplete, and at worst an outright scam. So with all of that in mind, the first piece of advice I'll give is to take this article as just **one** source of information.

And although I work (and conduct interviews) at Google, all of this is just my personal observations. I'm not revealing any huge secrets here, and this is not an official Google endorsement of anything.

Interviewing is something I can ramble about for hours, and I have a lot of opinions about what makes a good interview/ee/er. I think talking about the process of interviewing, and what works or doesn't work, or what's flat-out broken about the system, is *really* interesting. But I'm going to try to resist the temptation to editorialize, and instead stick to the facts as much as possible.

Alright, let's dive in.

# Interview Processes

Not all interviews are the same. Different companies have different processes, and each process brings its own set of expectations. Knowing which process you're in can help you know what to expect.

Very roughly, I'd split interview processes up into two types:

## Stack-ranked

In **stack-ranked** interview processes, candidates are compared directly to each other. This is usually the case for smaller companies (or smaller departments within large companies) who don't hire new people very often, or for specialized roles with only a few potential applicants. Typically how this works is:

- A new position opens up in the company.
- The company advertises the position, accepts applications, and does interviews.
- Interviewers compare candidates to each other, **ranking** them in a **stack** (sometimes literally).
- The candidate(s) at the top of the stack get the job, and the rest go on file for the next time a position opens up.

Generally companies won't tell you directly whether you're being compared to other candidates, but you can get that information indirectly by asking questions like *"How many other candidates are applying to this position?"* and *"How many openings do you have for this position?"*

Stack-ranked interviews tend to be more subjective, so it's more important to talk about your personal experience. (See [Behavioral Interviews](#behavioral-interviews) below.)

## Rubric-based

In rubric-based interview processes, candidates are not compared directly to each other. Instead, they're measured against a **rubric**: a set of guidelines that map interviewee responses to a score. An example might be:

For a question about Java data structures:

- If the candidate was not familiar with any Java data structures, give them 1 star.
- If the candidate was familiar with arrays but no other data structures, give them 2 stars.
- If the candidate was familiar with ArrayLists, give them 3 stars.
- If the candidate was familiar with Maps, Sets, Queues, and Stacks, give them 4 stars.
- If the candidate compared and contrasted various data structures, and correctly explained the tradeoffs of each, give them 5 stars.

This is a simplified example, so don't get too hung up on the specifics here. The important takeaway is that instead of being compared directly to each other, candidates are given ratings, and the ratings are then used to make a decision about whether to hire them.

Bigger companies who are always hiring for many positions often use rubric-based interviews. The benefit (at least supposedly) is that these interviews are more objective and less prone to bias, but it is a bit harder to talk about your personal experience and what makes you unique when you're being measured against a rubric.

# Interview Formats

There are also several different formats for interviews, in both stack-ranked and rubric-based processes. Here's roughly what you might expect:

## Phone Screens

After a candidate submits their resume and applies to a position, this is the first thing that happens in the interview process.

Generally this starts with an informal phone call to gauge interest and to make sure the candidate meets the requirements (stuff like education, experience, and familiarity with a particular language). This is often with a recruiter or somebody in HR, rather than a software engineer. You might get a relatively short scripted question (something like comparing and contrasting arrays and ArrayLists in Java, or talking about ES6 in JavaScript).

From there, you'll often have a follow-up phone call that consists of more complex technical questions. You might do this over a Google Doc so the interviewer can see what you type. The interviewer is generally a software engineer and will ask technical questions. These are "medium strength" questions: they're a bit more complex than the initial phone screen, but not so complex that you'd need a whiteboard. If you're interviewing for a specific position, this conversation might also include domain-specific questions. For example, if you're applying for a frontend role, expect a frontend question here.

Depending on the company, you might have 1-3 phone interviews. Some of these might also be video calls.

![video call](/tutorials/how-to/images/interview-3.png)

*(Art by [SaKo](https://twitter.com/_IAmSaKo_)!)*

You won't be able to use an IDE or Google during this conversation, so to prepare for a phone interview, I recommend practicing the **fundamentals** of whatever language you're using. You can read moure about this in the [Fundamentals](#fundamentals) section below, but in general this means you should be able to write a complete "hello world" program that compiles and runs (or loads in an HTML page and runs), from scratch, without the help of an IDE, Google, or Stack Overflow. You should be familiar with control flow and data structures, as well as any "gotchas" that come with your language.

**Note:** Interns are often interviewed over the phone or a video call instead of in person. In terms of complexity, these interviews are between a phone screen and an in-person interview: they're a little more involved than what I described above, but not quite as involved as what I'll describe below.

## In-person Interviews

From there, generally you'll be brought to the company for on-site, in-person interviews. Here you'll be interacting with people face-to-face, on a whiteboard, or pair programming on a real computer (but generally not in an IDE).

You might have multiple interviews with different people throughout the day, or you might have one interview with a panel of multiple interviewers.

These will be a mix of behavioral and technical questions. (See [Interviews](#interviews) below.)

## Project-based

Another type of interview is a **project-based** interview, where instead of getting a set of questions, you're given a project to work on. Admittedly I have the least experience with this one, but you can go [here](https://techcrunch.com/2019/07/17/googles-area-120-launches-byteboard-to-improve-technical-interviews/) to read more about it.

## Team Fit Interviews

One more type of interview that often goes overlooked is a **team fit interview** - different companies call this different things, but this is the part of an interview where a candidate gets matched to a specific position. For small companies with only a few open posiitons, this might be part of the in-person interview process. For larger companies, this is a separate process that comes after the technical interviews. You also might not even know this is happening, because it could be built into the rest of the interviews: this is the *"Would I enjoy working with this person?"* and *"Would this person enjoy working here?"* parts of the interview.

I don't think there's an exact science to this, and how you approach this depends on what you're looking for. So some meta-advice is: **know what you're looking for.** What kind of position are you interested in? What type of work do you **not** want to do? What are you looking for in a team? What's important to you?

There's a balancing act here, between finding a role you'll enjoy, without restricing yourself too much. For example, if you make it clear from your resume and interviews that you're interested in a machine learning role, you might be turned down for a role that doesn't involve machine learning, even if you nail the rest of the interviews. You might also be eliminated very early in the process, not because you did anything "wrong" but because the person reading your resume assumed you wouldn't be interested in the available role. Maybe that's okay if you really are only interested in machine learning jobs! But if you're open to other types of work, make sure you communicate that, both on your resume and in person.

One of the most important things to do during this type of interview is **ask questions**. Ask questions about the company, about the interviewer, about the role you're applying for, about the team you'd work with.

It's okay to ask the obvious questions:

- What does a typical day look like?
- What languages / frameworks do you use?
- How many people are on the team?

But don't be afraid to ask more interesting questions, especially if you actually care about the answers! Here are a few that I like:

- How do you measure success or failure? How are successes celebrated? How are failures handled?
- What's the onboarding process for a new team member?
- If you could change one thing about the team, what would it be?

The important thing here is to seem both interest**ed** and interest**ing**. I've recommended not hiring candidates who didn't ask any questions, and I've been rejected from positions myself for not seeming interested enough.

(Side note: asking questions is not as important during technical interviews, I'm specifically talking about the "team fit" part of the interview process here.)

# Interviewers

Just like there are different types of interviews, there are also different types of intervier**ers**. I'll break them down into four broad categories:

- **Buddies** are generally very friendly and agreeable. This is probably the "easiest" type of interviewer to interact with, but the downside is that you can lull yourself into a false sense of complacency. Buddies will often reply with "okay cool, that sounds good!" no matter what you say, even if it's wrong. They aren't trying to lie to you, but they'll leave it up to you to catch and fix your mistakes. So even though it sounds paradoxical, make sure you're checking yourself, *especially* if you have a friendly interviewer.
- **Quiet types** are, well, quiet. They'll leave long pauses that you'll feel the need to fill in, and they won't provide a lot of feedback. Sometimes this is because the interviewer is shy, other times it's a tactic they're using on purpose: one of the easiest ways to make somebody talk is to create an awkward silence. If you encounter this type of interviewer, make sure you ask for feedback specifically, especially during technical interviews. Also try to resist the urge to babble just to fill in awkward pauses. Take a few moments to think about what you want to say before you say it, and try to steer the conversation towards talking about your strengths.
- **Contrarians** are purposely disagreeable. They'll try to poke holes in your answers, and you'll feel defensive. This can be pretty uncomfortable, but on the other hand it can be easier to get feedback from this type of interviewer. If you make a mistake, they'll tell you immediately, and you can fix it and move on.
- Then there are interviewers with **something to prove**. I said at the top that I wasn't going to editorialize, but I feel like I'd be lying if I didn't mention this type of interviewer. These are often inexperienced interviewers who have their own share of [impostor syndrome](https://en.wikipedia.org/wiki/Impostor_syndrome) and think that "stumping" a candidate is a way to prove how smart they are. (Or to put it more optimistically, they don't have an accurate sense of what makes a "good" interview question yet, so they overcompensate.) This is a source of trick questions and can feel pretty belittling. I'm not trying to scare anybody or complain too much, but honestly, this is an unfortunate part of the interview process. If you find yourself in one of these interviews, try to roll with the punches and just know that the people who look at the ratings will probably recognize what happened.

The takeaway here is that your interviewer is a human, with all of the good and bad that comes with that. I want to say that most interviewers are not trying to make you fail, but interviewing is an art that each person approaches in their own way. It's up to luck whether a particular interviewer jives with your personality as an interviewee. So try to recognize that either way, and use that to take the interview in the direction you want it to go.

# Interviews

Alright, we've talked about what to expect from the interview process, and some of the interviewers you might encounter. Finally, let's talk about the interview itself.

These will generally be in-person or over a video call, and they'll be a mix of **behavioral** and **technical** interviews. Depending on the company and position, you might have more of one type or the other. Smaller companies might focus more on behavioral interviews, with only a couple technical questions. Bigger companies generally have more technical questions, with less of a focus on the behavioral side.

But you should be ready for both types.

# Behavioral Interviews

Behavioral interviews are the general questions you might expect:

- Can you tell me about yourself?
- What are your strengths and weaknesses?
- Where do you see yourself in 5 years?

It can be hard to know how to answer these questions, because they don't really have right or wrong answers. But there are better or worse *ways* to answer them. Let's say we have a question:

> What's something you're learning about?

Which of these answers is better?

- I'm learning about videography. It's pretty cool!
- I'm learning about advanced programming patterns. I've been reading a book on programming patterns, and I really like the decorator pattern.
- The first example that comes to mind is videography. Recently I was tasked with creating some documentation for an open source library, and somebody who read my documentation requested I make a video explaining it. I never made a video like that before, so I was excited to learn about it. I recently released a video for the introduction to the topic, and next I'm going to work on a video for the more advanced parts of the topic.

The first answer isn't really *wrong*, but it doesn't give the interviewer much to work with. It could mean anything, so it doesn't really tell them much about you. And with only a limited amount of time to paint a picture of who you are, you want every answer to add something to that picture.

The second answer is another common approach I see a lot. You might be tempted to answer every question in a way that makes you sound like a programming wiz, but a lot of these answers end up sounding artificial. If you spend your weekends on a hobby project, you should absolutely bring that up, but make sure you do it in a genuine way. Talk about real projects you work on, rather than listing buzzwords.

Maybe not surprisingly, the third answer is best. Even though it's not directly related to the job you're applying to, it comes across as genuine, and it gives specific details that paint a picture about who you are. You could tie it back into the job, but honestly that's not as important as you might think. This answer tells me that you respond to feedback well, that you're comfortable taking on new challenges, and that you do more than just what you're told.

To make this advice a little more concrete:

- **Be specific.** Behavioral questions are usually pretty general, but it's up to you to provide specific answers. *"I'm good at JavaScript"* doesn't really give the interviewer much info. *"I've been developing a website that uses JavaScript to visualize data related to endangered species. Right now the data is hard-coded but I'm working on using an API to fetch live data"* contains much more information.  
- **Be honest.** Don't try to fill your answers with what you think the interviewer wants to hear, because it comes off as artificial and does more harm than good. Certainly figure out what you want to highlight, but frame those highlights around genuine answers.
- **Use examples.** The easiest way to make sure you're being specific and honest is to use examples as often as possible. Train yourself to follow your initial answer up with *"For example..."* and then have a list of potential examples that demonstrate that answer. The same story might apply to multiple answers, and that's okay. So try thinking to yourself: When have I been proud of myself? When did I turn a bad situation into a good result? When did I take the lead on a project? Keep those stories in the back of your mind, and be ready to use them as examples.
- Focus on what **you** specifically did. *"My team worked on a shopping website"* doesn't tell me much about you. *"My team worked on a shopping website, and I was responsible for the backend that stores data about the products. When I started I was new to SQL, so I took an online course to get up to speed"* tells a much better story.
- Highlight your ability to **work with a team**. While you're talking about all the great stuff you've done, make sure you include examples of what a great teammate you are. Bonus points for examples about how you helped mentor or teach your teammates.
- **Look forward.** This one is a little subtle, but it's the "trick" to a lot of behavioral questions. The correct answer to *"What's your biggest weakness?"* is not *"I'm a perfectionist!"* - the correct answer to that question is to provide an honest example of something you're improving, and how you're improving it. *"I had trouble on a previous project because I wasn't familiar with unit testing. I signed up for an online course, so although I'm learning, it still takes me a bit longer than I'd like to write a good unit test."* This technique applies to many behavioral questions. Try to include the answers to questions like *"What would you do differently next time?"* and *"What did you learn from that?"* without being prompted.
- **Time your answers.** Make sure your answers are not too short, but not too long. I'd say 60 - 120 seconds is a good length to aim for. Shorter answers are probably missing specific examples (and that's okay for a few of your answers, but it shouldn't be all of them). Anything longer than 2 minutes probably means you're repeating yourself or going off-topic. (Also think about how you feel when somebody talks for 5 minutes without checking in with you.) You might think that it's difficult to talk for 2 minutes, but when you're nervous it's really easy to ramble. This is especially true if you have a "silent type" interviewer.

To practice this, I'd recommend trying to think of 5-10 stories that demonstrate who you are as a person, coder, and coworker. These should be real stories, but they can come from school assignments, group projects, stuff not related to coding, whatever, as long as they tell your story. Then practice telling those stories. Time yourself to make sure you're at about the 90 second mark. Do a search for [behavioral interview questions](https://duckduckgo.com/?q=behavioral+interview+questions) and read through as many examples as you can find. As you read them, think about how your stories could apply to those questions, and then practice answering them, out loud. Try this by yourself at first. Try recording yourself and listening back. And then try doing this in front of another person. If you have a partner, take turns asking these kinds of questions and giving feedback on the answers.

![person thinking](/tutorials/how-to/images/interview-4.png)

*(Art by [SaKo](https://twitter.com/_IAmSaKo_)!)*

Behavioral interviews have a bit of a bad rap as being annoying general questions with no real answers. But if you take those general questions and answer them with specific examples, you can paint a pretty good picture of yourself.

# Technical Interviews

This is probably why most of you are here. Tech companies have a reputation for their terrifying interviews. You're grilled, for hours, on advanced algorithms and data structures, on a whiteboard! And while some of that is true, I also think there are a lot of misconceptions about what to expect (and how to approach) these interviews.

The most important takeaway is this: technical interviews are meant to be  a conversation, not a test. If you remember nothing else from this whole article, remember that.

Technical interviews usually start with a question or a problem:

- Can you write a function that returns the average of a bunch of numbers?
- Let's say you're tasked with creating a program that shows a person's age in dog years. How would you start?
- Please write some code that tells me what day of the week a particular date was.

After that, it's up to you to drive the conversation. Here's a roughly chronological list of things to keep in mind during the interview:

## Get Examples

You just heard the question, and now you're holding a marker, staring at the whiteboard. How do you even start?

One of the cheapest ways to buy yourself some time is to ask for an example. "Can you show me an example input and its expected output?"

This is not just buying time. In fact, most technical interview questions are purposely a little vague, or leave parts up to interpretation. Some interviewers include an example as part of their question, but many do not. They want to see whether you dive into code before understanding the problem (bad!), or if you take the time to make sure you understand the question first (good!).

Make sure you understand the example your interviewer gives you, and ask questions if you don't. You should also follow this up with your own input and output examples. *"Just to make sure I understand, if I have input ABC, my program should output XYZ, right?"*

One approach I like is dedicating a small corner of the whiteboard to a list of input and output. First ask your interviewer for an example of some input and its corresponding output. Then add your own example input and output to that list, and ask your interviewer if it makes sense. Keep this corner of examples, because you're going to use it later. (See [Test your Code](#test-your-code) below.)

## Decide on Representation

Many questions involve taking some input, processing that input, and returning some output. The **representation** of that input and output is crucial to figuring out what that processing looks like, so make sure you have the representation nailed down before moving on to the logic.

In other words: make sure you understand what **type** any arguments or return values will be. You can ask this directly (*"What type can I expect as input?"*), or you can suggest a representation yourself (*"I'd like to return a set here so I know it won't contain duplicates."*).

Make sure you understand the representation **before** you start coding the logic! That might mean you spend an extra few minutes up front asking more questions and walking through more examples. That's fine! It's much better to spend a few minutes making sure you know what the question is asking, rather than spend most of the interview solving the wrong problem.

## Identify Corner Cases

[Corner cases](https://en.wikipedia.org/wiki/Corner_case) are input or situations that cause your code to behave differently from what you expected. Some common examples are empty or null input, very long input, negative numbers, invalid input, input that's already processed, handling multiple requests simultaneously... and many others.

To think about corner cases, ask yourself: How could somebody break my code if they tried? Assume you gave your code to your worst enemy. What could they do to generate an error, or to make your logic not work?

You should identify as many of these as possible up front, and you should continue thinking about them as you work through your answer. You don't have to write code that handles every single case as soon as you think about it, but you should at least mention them. *"I'm going to take a String parameter here, so now I'm thinking about how I should handle null values. I could throw a NullPointerException, or I could return a result of 0. Let's just return 0 for now."*

Remember that corner of the whiteboard where you listed a few examples of input and output? As you think of corner cases, add them to the list! You don't even have to decide what the proper output is for all of them, just list them as potential input examples. Later, after you've written your code, you can circle back and make sure you've handled all of the example inputs, including the corner cases. (See [Test Your Code](#test-your-code) below.)

## Talk

One of the interviewer's primary goals is to learn how you think about solving problems, and they can't do that if you don't tell them what you're thinking. This means you have to think out loud.

Talk through your code as you write it. Don't just write `if(input == null)` on the board. Tell the interviewer **why** you wrote it. *"I'm checking if the input is null here so we can return gracefully instead of hitting a NullPointerException."*

This is a lot harder than it sounds, but you can get better at this with practice. (See [Practice Interviews](#practice-interviews) below.)

If you need a minute to think, that's okay, but tell your interviewer that. If you go quiet without any warning, you're leaving the interviewer behind. But if you say *"I just realized I actually need the previous value at this point in the code, but I already changed it. Let me think about this for a minute..."* then you've defused all of the awkwardness ahead of time.

A general rule of thumb is that you should talk about each line of code as you write it. Don't write 5 lines of code and then go back and explain it from the top. Talk as you write. If your interviewer asks you questions like *"Can you tell me what you're thinking?"* or *"What does this line of code do?"* then that's a sign that you're not talking enough.

## Ask Questions

It's tempting to approach these interviews the same way you would approach a final exam in school: you're given a question, and it's your job to answer it. And while there is some truth to that, you won't get very far if you're trying to recite an answer rather than have a conversation.

For example, many people start an interview by turning around and immediately writing code on the whiteboard. **This is almost always the wrong thing to do.** Instead, the first thing you should do is **ask a question.** That might sound wrong, especially if you're thinking in terms of school tests, but I promise: you only gain points by asking a clarifying question.

In fact, most technical interview questions are purposely a little vague, or leave parts up to interpretation. If you start coding without identifying your assumptions, you're almost definitely missing something. I mentioned above that you should **ask for examples** and **ask about representation**. More generally, you should **ask questions until you understand the problem**, and you should continue asking questions as you reach decision points in the process of solving the problem.

You can also phrase your questions as statements. *"I'm going to take the input as a HashMap so I can take advantage of its constant-time lookup, does that sound good?"* &nbsp; You can use this technique to steer the question a bit. If a certain data structure makes your life easier, then **say that** up front. Recognizing these types of "shortcuts" is a **very good thing**, but you have to make it a decision, not an assumption.

Many people think asking questions during an interview is bad because it shows that you don't know something, but the opposite is true! I don't want to belabor the point too much, but I think it's one of the most important takeaways, so to be honest: When I'm giving an interview, I write down whether the person asks clarifying questions before coding. If they do, that's a good sign. If not, that's a bad sign. ASK QUESTIONS.

Think about it this way: at my job, it's almost never the case that my boss tells me "go do the thing" and then I go do the thing without any further interactions. Instead, my job is a series of conversations. If I don't ask questions, I'm pretty bad at my job. The same thing is true in an interview.

When you ask a question, the worst thing that can happen is that the interviewer says it's up to you, at which point you've lost nothing. The best case scenario is that you uncover something that makes the question click for you. You won't know if you don't ask questions.

## Drive the Conversation

Another common misconception about interviews is that it's the interviewer's job to keep the conversation moving. In fact, it's **your** job to drive the conversation. Try to be the owner of the conversation.

To demonstrate what I mean, let's think about three potential approaches an interviewee might use to move the interview forward:

- What should I use here?
- Should I use an array here?
- I'm thinking of using an array here. That will allow me to access the elements at a specific index. Does that sound good?

The first approach is common for people who are new to interviewing, as they tend to treat the interviewer as an authority figure or teacher rather than as an equal. The second approach is a little bit better, but questions like that make it seem like you're guessing rather than making a decision. The third approach is best: it tells the interviewer what you're thinking, shows them *why* you're thinking it, and gives them a chance to provide feedback.

So although asking questions is a **very good** thing to do in interviews, you have to make sure they're the right *kind* of questions. Your questions shouldn't be asking how to do something, or asking for permission to do something. Your questions should be you talking to your interviewer as an equal, to clarify anything that's not clear or to check your assumptions. **You** are the driving force of the interview.

## Syntax

Another question I get a lot is: should I write syntactically perfect code, or should I use pseudocode?

Keeping in mind the fact that an interview is meant to be a conversation, the meta-answer I'll give you is: ask your interviewer. *"Just to make sure we're on the same page: are you looking for a high-level design using pseudocode, or would you rather this be syntactically correct code?"*

My personal answer to this question is that syntactically correct code is always better. One common pitfall I see people fall into is they'll start writing pseudocode, and then they'll lose a ton of time when they try to convert that pseudocode into a real solution. You might think pseudocode saves you time, but I've only seen it work against people.

This is why I recommend focusing on the fundamentals: if you practice coding until writing syntactically correct code is easier for you than writing pseudocode, the question of whether to use code or pseudocode answers itself.

That being said, don't stress too much about making tiny errors like missing a semicolon or a curly bracket. You should certainly look for those kinds of mistakes (see [Test your Code](#test-your-code) below), but one missing semicolon isn't going to tank your whole interview.

## Break problems down into smaller steps

I strongly believe that one of the most important skills a person can have when coding (and even more generally than that) is the ability to take a large problem, break it down into smaller steps, and then approach those steps one at a time. I've talked about that at length [here](/tutorials/how-to/program), but it's especially important in interviews.

![breaking a problem down](/tutorials/how-to/images/interview-5.png)

*(Art by [SaKo](https://twitter.com/_IAmSaKo_)!)*

When you encounter an interview question, chances are you'll have no idea how to start. That's normal! Take a breath, and start thinking (and talking) about these questions:

- What are the **different parts** of this problem? Can I break it up into an input, processing, and output step? What other steps can I break it down into?
- What's the **smallest thing** I know I need to do **next**? Often that's something like "write a function declaration" or "draw out an example input" - by itself that step is more approachable, and by repeating that process a few times, you'll build up a solution one small piece at a time.
- How would I do this **without a computer**? Think about the problem in terms of a real-life scenario. If the problem involves an array, think about it as a deck of index cards. If a problem involves a graph, think about it as a group of people pointing at each other. (If that doesn't make sense, that's okay, the real goal is to come up with **your own** real-life metaphor for the problem.)
- What **specific steps** would I take to figure this out **in my head**? When humans solve problems, we do a lot of stuff "automatically" - think about how you'd find the largest number in a stack of index cards. Many people would say "I don't know, I'd look through the cards and find the biggest number" - but that's skipping over a lot of steps. How do you know whether a number is the biggest? What steps are you doing without thinking about it?

Check out the [How to Program](/tutorials/how-to/program) guide for more info on this process.

## Use Helper Functions

As you talk through your code, it's tempting to code every single thing you think of, as soon as you think of it. This might mean spending a lot of time on boilerplate code, or defining objects that you're going to need, or manipulating data into a particular format. The problem is that if you spend too much time on this stuff, you don't have as much time for the "meat and potatoes" of the problem.

Instead, I recommend using **helper functions** pretty liberally. A helper function is a function, defined by you, that encapsulates one small part of the logic. Instead of doing all of your logic in one huge function, split the logic up into smaller helper functions, which you then call from your answer's logic. You don't even have to implement these helper functions right away! You can use them first, then fill in the missing pieces as you go.

*"I know I need to create a HashMap out of this List. For now let's assume there's a helper function called convertListToMap that does that conversion. I can fill out the body of that helper function after I get the main logic down, but for now I'll just call it to create a new variable here. Anyway, now that I have a HashMap..."*

You can circle back to those helper functions later, but many interviewers will tell you to skip them if they're mostly boilerplate. That gives you more time for the "real" parts of the question.

This is also a handy trick if you don't remember something: leave it up to a helper function! *"I need to generate a random number between 1 and 100 here. I don't completely remember the syntax for that, but for now let me use a helper function..."* If you spend 5 minutes trying to remember something you forgot, that's 5 minutes you can't spend on the stuff you *do* remember. It's better to delegate to a helper function so you can focus on the core of the problem.

Another approach is to use helper functions to structure the whole answer, and then fill out those functions iteratively. *"At a high level, I need to convert the input into a structure I can use, then use that structure to calculate the output, and then format that output into a human-readable format. I'll get to the implementation in a second, but just to structure my plan, let me write a function that calls those three helper functions. Okay, now the implementation of the first helper function would be..."*

## Get Something Working

Many interview questions involve the concept of complexity: does your algorithm run in O(n) time or O(n^2) time? Can you make it faster?

Thinking about complexity is a good thing, but don't become so obsessed with it that you end up with no solution at all. It's pretty common for interviewees to spend almost the whole interview trying to come up with an "optimal" approach, and then in the end they have no code to show.

So, my advice is to get something working first, before you worry too much about complexity.

I'm not saying you should not spend any time thinking about complexity, but if you don't have a better solution within a couple minutes, stop stalling and start writing code! Of course, interviews are a conversation, so you should be talking through all of this with your interviewer. Tell them that you're trying to think of a more optimal solution, and ask them whether they think it would be better to start coding or to keep brainstorming for more optimal approaches.

Anyway, now you're coding, and you're talking through what you're thinking. You've identified some corner cases, and you've offloaded some work to helper functions. You've made some progress, and the end is in sight. But wait! You just realized there's a different approach that's more efficient!

It's tempting to stop what you're doing, grab the eraser, and frantically start over from scratch. **Don't do this.**

Instead, let your interviewer know what you're thinking, and ask them for advice. *"I just realized if I represent this as a `LinkedHashSet`, the lookup time is O(1) and I can still iterate over the elements in the same order I added them. I'm thinking about starting over, but I want to be mindful of time. Would you rather I finish what I've written so far, or do you think it's better to start over with this more optimal approach?"*

The answer could be that you should start over, especially if you still have a lot of time left. But generally I think it's better to have a full working solution even if it's not the most efficient approach, rather than an optimal solution that's only half-implemented. You could also finish your implementation and then discuss at a high level how you'd improve the code. (See [Iterate](#iterate) below.)

## Test your Code

After you've written your last line of code, you might be tempted to put the marker down, turn around, and announce: I'm done!

Instead, you should always follow up by testing your code. **Step through your code line by line** and explain what it does again. Don't skip over sections of your code and hand-wave it away *"oh this part calculates the average"* - instead, take it one line at a time, and triple-check that your logic does what you intended.

Remember that example input and output and the corner cases you wrote on the board at the beginning? Use those now. Step through the code with each case to confirm that it does the right thing. Try to think of new corner cases, and test those as well. Check for off-by-one errors.

Fix minor typos, make sure your semicolons and curly braces are in order, and improve any variable or function names that are unclear.

At this point, you could also talk about unit testing if you're familiar with it. How would you unit test this code? What input and output would you use? What would you mock out? (This is more for bonus points, if you don't know what I'm talking about it's okay. If you want to learn more, check out the [JUnit tutorial](/tutorials/java/unit-testing)!)

After you've tested your code, instead of announcing that you're done, ask your intervierwer if there's anything you've missed.

## Iterate

After you have a solution on the board, one of the most common follow-up questions you'll get is: **is there any way to improve this?**

The answer is almost always yes, and that's okay. Start thinking about different approaches: Are there other data structures you could use? Does the input have some special property you could manipulate? Is there a way to improve speed or memory?

Talk through those questions out loud. Even if you don't know the exactly correct answer, the fact that you're asking the questions is a good sign. With practice you'll notice certain patterns emerging, where certain types of problems lend themselves to particular data structures.

## Manage your Time

It's way too easy to talk for 20 minutes and then realize you're almost out of time but you haven't even started the problem.

Keep an eye on time, and make sure you're hitting certain milestones. Exactly what those milestones are depends on the question and how much time you have, but a very rough timeline for an hour-long interview would be:

- 5 minutes for introductions and general background questions.
- Then you get the initial question.
- 5 minutes for specifying the input and output and corner cases.
- 5 minutes to define your plan at a high level
- 30 minutes for coding
- 5 minutes for testing
- 10 minutes for iterating

Again, this is for an hour-long interview, so adjust accordingly depending on the length of your interview. But roughly speaking, the first 25% of the interview should be introductions, getting the question, nailing down the representation of the input and output, identifying corner cases, and coming up with a high-level plan. The middle 50% should be spent coding, and the last 25% should be testing and iterating.

If there's a clock in the room, pay attention to it. Consider setting a "start coding" alarm and a "wrap it up" alarm on your phone. You could ask your interviewer to stop you at certain times.

Another thing to keep in mind is that many interviewers will ask a "warm up" question before they get to their "real" question. This is usually something relatively small, like *"Can you find the maximum of an array?"* or *"What's the difference between var and let?"* &nbsp; You should **not** go through all of the rigmarole for this type of question. Answer it quickly and move on to the real question.

If you aren't sure, you can ask. *"Is this the question I should spend most of my time on, or do you want a quick answer for this one?"*

On the other hand, most interview questions have many levels. Think about it this way: as an interviewer, my worst nightmare is that I run out of questions to ask. (Actually my worst nightmare is that we switch places and I'm the one being interviewed. Sorry.) I do **not** want to have to fill a half hour of awkward silence, so I have **many** ways to build on my original question.

My point is, you're almost definitely going to run out of time while you're answering a question. Don't let that freak you out too much- the question you didn't finish could be the 3rd or 4th "level" of the question.

# Studying for Interviews

I said above that interviews are **not** like tests in school, but there's one caveat to that: **you have to study for interviews.**

Without editorializing too much, I want to acknowledge how ridiculous that sounds. Especially if you've been a programmer for a while, this can be pretty frustrating. Why should I memorize how to balance a binary tree, which I'll never actually use in real life? Why don't they test for real-world skills?

The go-to answer to that question is: technical interview questions are meant to provide a window into how interviewees think about solving problems. Whether you're convinced by that answer is up to you, but the truth is that to do well at a technical interview, you have to study.

Honestly, this was really surprising to me when I started seriously considering Google as a career. Before that, I assumed I could rely on my experience at my current job, and the experience I got from posting on Stack Overflow and various programming forums. Surely if I can write code and can even answer questions about code, then an interview should be easy, right?

Wrong. Interviews, especially interviews for the big tech companies, are about more than just coding experience. They're also about communication, problem solving, and knowing how to approach questions. These are not skills you can learn just by coding by yourself. These are skills you have to **practice**.

To give you a real example, I studied and practiced pretty much every single day, a couple hours each day, for about a month before my Google interview. That was after I already had 8 years of job experience, and after I got a master's degree in computer science. I know how ridiculous it sounds to "study for an interview", but honestly that's exactly what you have to do.

This probably means refreshing yourself on what you learned in school. If you're self-taught or went through a bootcamp that focused on practical skills rather than computer science theory, you might want to spend some extra time on the "theoretical" topics that would normally be covered by data structures and algorithms courses.

It's impossible to list every topic that could possibly come up in an interview, and honestly I get a little annoyed by these kinds of lists because I think they focus on the wrong thing. Interviewing is not a list of things you can memorize, and I believe thinking about it that way is a mistake. Familiarizing yourself with the **process** of breaking a problem down into smaller steps will get you much further than any list of topics that **might** come up in an interview.

During a day of interviews, you **will** encounter a question you don't know how to answer, and that question is the one that decides the day. So knowing how to respond to questions you **don't** know the answer to is more important than trying to memorize a bunch of algorithms.

That being said, I also recognize how handy lists are. So here's a **very incomplete** list of things to study.

## Fundamentals

Programming fundamentals are the core set of skills you use while coding.

I mentioned above that you should be able to code "hello world" in any language on your resume, without the help of an IDE, copy-paste, Google, or Stack Overflow. For Java that's a class with a `main()` method. For server-side Java that's something like a servlet or an action class. For JavaScript that's a skeleton HTML file with a `<script>` tag and an `onload` callback.

![hello world](/tutorials/how-to/images/interview-6.png)

*(Art by [SaKo](https://twitter.com/_IAmSaKo_)!)*

If you aren't already comfortable with this, one way to practice is through [programming kata](https://en.wikipedia.org/wiki/Kata_(programming)). The idea comes from martial arts, where you repeat an action over and over again, until you can do it [without thinking about it](https://www.youtube.com/watch?v=Bg21M2zwG9Q). That sounds a little silly, but if you're struggling to remember the syntax to define a function, you aren't going to get to the real parts of the question.

You should also be comfortable with [control flow](https://en.wikipedia.org/wiki/Control_flow): stuff like `if` statements, loops, calling functions, try / catch blocks, anonymous classes and functions. The best way to learn this stuff is writing real code.

I honestly don't consider myself a very "algorithmic" person, and I find it difficult to think in terms of big-O or in graphs and nodes. But I do think I'm pretty strong in the fundamentals of Java, and I think that's what got me through the Google interview process.

Think about it this way: during a day of interviews, you *might* get a question about binary trees. If you don't know the answer, you *might* not get the job. But during that day you will **definitely** have to write code using `if` statements and `for` loops, so if you don't have those down then you will **definitely** not get the job. This is why I strongly believe that the fundamentals are the most important thing to study, by writing as much real code as possible.

(To improve your fundamentals, see [Practice Coding](#practice-coding) below.)

## Object Oriented Programming

Know the syntax for defining classes and creating instances. Know the terminology: class, instance, object, abstraction, polymorphism, inheritance, encapsulation.

Chances are you won't be grilled on OOP, but you should be comfortable talking in terms of objects.

## Data Structures

Know the general types of [data structures](https://en.wikipedia.org/wiki/Data_structure), and their specific implementations in your language. For Java, you should know the [collections framework](https://en.wikipedia.org/wiki/Java_collections_framework) like the back of your hand. For JavaScript, be comfortable using the [built-in data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures), including ES6 stuff.

You should know all of the methods provided by these implementations, as well as their time and space complexities (see [Complexity](#complexity) below.). Know the tradeoffs between them, and when you'd use one over the other.

Again, the best way to practice this is by writing real code. It's much easier to remember which data structure to use in a certain situation if you've been in that situation before, rather than trying to remember something you read in a tutorial or book.  In a "real" data structures class, students implement their own versions of these data structures to understand how they work behind the scenes. This is a pretty great way to practice.

### Arrays

While studying up on data structures, don't forget arrays! Many interviews use arrays, so be comfortable working with them. Know how to move elements around, including swapping elements. Know how to resize, split, and merge arrays. Be comfortable iterating over the elements in an array. Don't forget multidimensional arrays!

### Graphs

Graphs are a type of data structure that uses nodes to represent data. (This definition includes [trees](https://en.wikipedia.org/wiki/Tree_(graph_theory)).) Because graphs require an understanding of OOP and the ability to map abstract concepts to a concrete implementation, many technical interview questions boil down to questions about graphs. So I'd recommend spending some time studying graphs, especially if you haven't worked with them as much as other more common data structures.

## Algorithms

Be familiar with popular algorithms. Stuff like sorting a list, reversing a linked list, finding a cycle, flood fill, finding a path between two points, etc.

Sources like Interview Cake and Cracking the Coding Interview are good introductions to the kinds of algorithms you should be familiar with, but it's not enough to just be familiar with them. Many interviews boil down to implementing one of these algorithms from scratch, so one of the best ways to practice is to do just that: implement these algorithms from scratch. (This kind of practice also has the benefit of honing your fundamental skills.)

### Dynamic Programming

Similar to how graph data structures are very common in interview questions, [dynamic programming](https://en.wikipedia.org/wiki/Dynamic_programming) is a very common family of algorithms in interview questions. (Dynamic programming is often the 2nd or 3rd "level" of a question.)

## Complexity (big-O)

You'll want to talk about the complexity of any solution you come up with, and that means thinking in terms of [big-O notation](https://en.wikipedia.org/wiki/Big_O_notation).

Instead of trying to memorize the big-O of every function in every data structure, I recommend trying to understand **why** each data structure behaves the way it does. It's easier to remember that HashMap has a lookup of O(1) if you remember **why** that's the case. That means understanding how things work behind the scenes. Implementing your own version of a data structure or algorithm really helps with this!

## Language Gotchas

For every language on your resume, you should be familiar with the concepts that often trip people up in that language.

For Java, that's stuff like [exception handling](/tutorials/java/errors), generics, and reflection. [Java Puzzlers](http://www.javapuzzlers.com/) by Josh Bloch and Neal Gafter is a great start for this. For JavaScript, that's stuff like closures, prototype chaining, equality, and type coercion.

You should also be familiar with whatever latest features have been added to any language on your resume.

## Debugging

Get into the habit of stepping through your code line-by-line. (This is a good habit in general, not just for interviewing.) Understand the difference between a compiler error and a runtime error. Understand common error types, some typical causes, and how you'd isolate the problem.

## Binary

Understand binary, how it's used to represent data, and the various binary operators. Understand how an integer, a string, and an array can all be used to work with binary values.

## System Design

Be ready to talk about [system design](https://en.wikipedia.org/wiki/Systems_design). It's okay to keep this at a pretty high level, but you might encounter questions like: How would you design this product? What would you do if your program was called by millions of users? Can we parallelize any of this? What if the input was too big to fit in memory, or on a hard drive?

The answers are generally stuff like:

- Throttling requests, especially for parts of the problem that are less important.
- Parallelizing the work by splitting the processing up onto multiple computers. How could you split the data? How would you combine the result?
- Storing data. If you have to store the data in a database instead of in a data structure, what would change?

Something like this gets you pretty far: *"Here I'm storing the results as a map of search terms to lists of pages, so what I could do is send off each search term to its own server and have that server calculate the list of pages for that search term. Or I could store these in a database where the key is the search term."*

You should also know roughly how much memory or hard drive space your code will use.

## Real World Programs

A lof of my examples so far have been pretty heavy on theory, but you'll also encounter more practical questions as well. (This is especially true if you're applying for a specific role.)

These depend heavily on the role, but for example if you're applying for a desktop application developer position, you can expect questions like *"Let's create a desktop application that allows a user to calculate their age in dog years."*

The general process I outlined above still applies to this type of question: treat it as a conversation, ask questions, take ownership, and break it down into smaller steps. The main difference is that the focus here is on creating something that works (even if it's all on the whiteboard) rather than focusing on the theory.

(Side note: this is usually the type of interview question I ask.)

## Coding without a computer

You're probably going to be coding on a whiteboard, or maybe on something like a shared doc, so you won't be able to use IDE features like autocomplete or error highlighting. You also won't be able to use Google or StackOverflow, or even copy-paste.

If you've relied on these tools, writing code without them can be pretty challenging. So as you practice, try to do it without these tools. Write code in a simple text editor, and code as much as possible without looking stuff up.

# Practicing Interviews

It's important to study the topics that might come up in an interview, but the best way to prepare for an interview is by doing practice interviews and writing real code.

## Practice Interviews

Technical interviews involve a lot of skills you probably don't get to practice very often: writing code on a whiteboard, talking out loud about what you're thinking, time management. The best way to practice these things is to do "fake" interviews- with your friends, your family, your pets, whoever. 

Give yourself a question, and answer that question on a whiteboard (or on a piece of paper if you don't have a whiteboard). Talk out loud (even if nobody else is in the room), and time yourself.

If you have access to people to practice with, take turns being the interviewer and the interviewee. I honestly learned a **ton** about interviewing by conducting them, so make sure you practice both sides. Give each other feedback: What went well? What could be improved? Do this multiple times, even with the same question.

**Practice interviews are the most effective way to prepare for technical interviews.**

If you don't have people to practice with in real life, try looking online for communities to practice with over video chat.

## Practice Coding

I've said this a few times: the best way to practice most of this stuff is by writing real code.

I personally enjoy coding [small projects](/gallery) for fun over the weekend, and I believe that these types of small projects helped cement the fundamentals for me. I've also spent a lot of time asking and answering questions on various forums and Stack Overflow, which helped me learn about the more advanced topics. I've also enjoyed [game jams](https://en.wikipedia.org/wiki/Game_jam) like [Ludum Dare](https://ldjam.com/). (See [here](https://itch.io/jams) and [here](http://www.indiegamejams.com/) for lists of game jams happening now!)

Other people enjoy more directed practice doing [competitive programming](https://en.wikipedia.org/wiki/Competitive_programming) on websites like [LeetCode](https://leetcode.com/), [HackerRank](https://www.hackerrank.com/), [Topcoder](https://www.topcoder.com/), and [Kaggle](https://www.kaggle.com/).

The important thing is to figure out what **you** enjoy. That might be weekend projects, or code competition websites, or game development, or creative coding, or something else. It doesn't really matter what the thing is, as long as you're writing real code.

One thing I encourage everybody to do is create a portfolio page. Spend a weekend putting together a simple homepage for yourself. (Shameless self-promotion: Not familiar with HTML? Start [here](/tutorials/html)!) Then spend the next weekend creating a hello world program. Put that up on your portfolio. Then spend the weekend after that exploring some other topic, publish it to your portfolio, rinse and repeat. Keep each project small enough to finish in just a few days, and use this process as an excuse to explore the various concepts you're interested in. Spend a weekend implementing your own HashMap, and put that up on your portfolio. Spend a weekend implementing A\* search, and put that up on your portfolio. Bonus: as you get into more advanced topics, you can add this portfolio to your resume!

No matter what motivates you, the goal is to get practice coding the fundamentals and the other topics you'd use in an interview.

# Bootcamps

Just a quick note on bootcamps: I'm all for them! In fact one of the reasons I started this site is because I really like the idea of different kinds of education, not just typical 4-year degrees. I think bootcamps can be a great way to get practical knowledge.

That being said, I think it's also important to understand what's not included in most bootamps, so you can direct your self-learning to focus on those areas. Here are a few things to consider:

- Fundamentals. Like I said above, the fundamentals are very important, and the best way to practice them is by writing real code. This often takes years of practice, so if you've gone through a bootcamp and have been coding for a few weeks, you might want to pay special attention to your fundamentals.
- Vanilla code, without any frameworks or libraries. Bootcamps often focus on a specific framework, so if you're applying for general positions, make sure you can write code without that framework as well.
- Data structures and algorithms. Bootcamps focus on real-world code, which is great. But that often means they don't get into the theory behind data structures and algorithms. Consider seeking this information out, maybe in an online course.
- Generalization. Another thing bootcamps do is focus on a very specific problem. They might teach you how to make a particular type of website using a particular framework. That's a good start, but you should use that as a foundation to build up a more general skillset.

The [Practice Coding](#practice-coding) section above might help with some of this.

# General Tips

Here are a few random tips that didn't fit anywhere else:

- **Drink water.** Honestly this is one of the best meta-lessons I've ever learned. Bring a bottle of water with you. Whenever you need a minute to think, pause to take a drink. That sounds funny, but it's an easy way to buy yourself some precious time. Freezing up or saying *"uhhhh...."* can be pretty awkward, but saying *"Hmm, let me think about that for a second..."* and then pausing to take a sip of water comes across as really natural. I seriously bring a bottle of water to every meeting I attend, for exactly this reason.
- **Don't criticize questions.** Even if the question is terrible, even if you're very frustrated. No good can come of this. Don't ask your interviewer if they ever use this in their real job. Similarly, a lot of candidates go out of their way to praise a question. This isn't really a bad thing, but it's not really a good thing either. Personally I recommend not commenting either way. Focus on answering it!
- **One bad interview won't kill you.** Throughout the interview process, you'll probably be asked many questions by many people. It's impossible to answer all of them perfectly. You're going to have one go south, and that's okay. Shake yourself off, take a sip of that water, and focus on nailing the next question.
- **Don't ask for hints**, at least not directly. Instead, explain what you're thinking and why you're stuck. *"I need a way to store this data so it's sorted, but I also need constant time lookup. ArrayList will allow me to sort it, but doesn't have constant-time lookup. HashMap has constant time lookup, but its keys aren't sorted."* Use helper functions (or helper classes) for anything you don't remember.
- **Manage whiteboard space.** Write small enough to give yourself plenty of room. Leave space between lines so you can add more code later. This is **much harder** than it sounds, so practice on a real whiteboard if at all possible.

# What if I have no idea how to start?

This is probably the biggest fear around technical interviews, and it's one of the most common questions people have. You aren't alone. There are a few approaches to get yourself unstuck:

- **Ask questions.** If I sound like a broken record, that's because this is one of the best things you can do in an interview. Ask about the input and output. Ask for an example. Repeat what they said in your own words. If you don't know what the question is asking, tell the interviewer! *"So I need to calculate a path between every cat and a mouse. How will that be represented?"*
- **Talk.** Again, broken record time. Talk about what you're stuck on. *"Okay so it's a 2D array of characters. I'm trying to figure out which cat to start with. Or I could start with a mouse..."* This is infinitely better than awkward silence.
- **Brainstorm.** Rapid-fire potential data structures and algorithms. If you can't decide which option to go with, talk out loud as you ask yourself questions and cross potential options off the list. *"To represent a path, could I use an array? Maybe, but then I'd need to store a path as a set of points. Could I use a HashMap? Maybe I could create a multimap of each cat's position to the best path to each mouse. Would sorting the positions help at all?"* &nbsp; Think of this as a brainstorming session: it's fine to say an idea and then immediately reject it and move on to something else.
- **Break the problem down into smaller steps.** I talked about this [above](#break-problems-down-into-smaller-steps), and I think it's the most important skill in programming, and maybe more generally than that. Big questions can be paralyzing. How do you even start? You start by breaking the big question down into a few smaller steps, and then taking those steps on one at a time. Helper functions can make this process more concrete. *"I know I eventually need to calculate the paths for every cat. Before I can do that, I need to calculate the path for a single cat. Let's put that in a helper function..."*
- **Oversimplify.** If you're still having trouble breaking the problem down, don't be afraid to oversimplify. *"The real problem has multiple mice, but what if it was just a single cat and a single mouse?"* &nbsp; Starting with that problem is much more reasonable than facing the whole problem.

This approach can also be helpful if you freeze while writing your code. Ask questions, talk, run through a brainstorming session, break the problem down, and oversimplify. Then build on that to come up with your solution to the full problem.

# Resumes

One quick note on resumes: I know it's easy to obsess over them, but in reality their importance varies from company to company.

Smaller companies tend to look at resumes a little more closely: in the stack-ranking process, resumes are used to "break ties" between candidates. In larger companies that aren't stack-ranking candidates, resumes are less important than your interview performance.

Don't get me wrong: resumes are still important for getting your foot in the door in the first place. I'd also recommend putting your info out there on sites like LinkedIn, [Monster.com](https://www.monster.com), and [Stack Overflow Jobs](https://stackoverflow.com/jobs). But your resume is only one part of what you should be focusing on.

You're also **optimizing for multiple metrics** with a resume. To demonstrate what I mean, let's use an extreme example: one way to get the attention of a bunch of recruiters on LinkedIn is to add every possible language and framework, even if you've never used them. The recruiters will do a keyword search, you'll show up in the results, and *you're in*. But not quite: when you get to the interview, it's going to be pretty obvious that your resume wasn't accurate.

More realistically, I've seen resumes that listed every language or tool the interviewee ever used, even if they only used it once. On one hand this might have helped them get the attention of a recruiter, but on the other hand it ends up looking a little unprofessional in the later stages of the process.

So it's a bit of a balancing act: you want to build your resume in a way that attracts attention, but doesn't list anything that isn't true.

In other words, **anything you put on your resume is fair game in an interview**. If you put C++ on your resume, expect a question about C++. So if the only time you used C++ was in a class years ago, maybe just leave it off. You don't lose points for admitting you aren't familiar with something, as long as it's not on your resume. In fact, you gain points for honesty, and you come across as more competent in what you **do** know.

# Other Resources

Like I mentioned above, I don't think any one resource is the end-all-be-all of interview prep. The **process** of breaking a problem down into smaller steps is way more important than memorizing a bunch of algorithms, and writing real code is better practice than reading a bunch of theory.

That being said, here are a few other resources worth checking out:

- [Cracking the Coding Interview](http://www.crackingthecodinginterview.com/) is pretty much required reading for anybody going through the interview process. This book is basically a big list of potential interview questions, which can help you understand the kinds of questions to expect. But like I said above, the ability to break a problem down into smaller steps is much more important than memorizing a bunch of possible questions!
- [Interview Cake](https://www.interviewcake.com/) is my favorite interview prep resource. It focuses on the **process** of working through a problem, rather than presenting a one-size-fits-all solution. It's a little pricey, so I feel a little weird about endorsing it. But honestly this was the most helpful resource I found when preparing for the Google interview.
- [Here's How to Prepare for Tech Interviews](https://www.reddit.com/r/cscareerquestions/comments/1jov24/heres_how_to_prepare_for_tech_interviews/) is a reddit thread that talks about some of the topics you should study before interviewing.
- [Teach Yourself Programming in Ten Years](https://norvig.com/21-days.html) is a response to the many "teach yourself coding in 24 hours" resources out there. It's slightly tongue-in-cheek, but it raises a ton of good points worth considering.
- [Glassdoor](https://www.glassdoor.com/Interview/index.htm) has a bunch of interview questions, but again, I recommend **against** thinking in terms of memorizing "answers" to interview questions. Think in terms of **the process** instead.

You should also check whether the company you're interviewing with has its own resources. For example, [here](https://careers.google.com/how-we-hire/interview/) is a guide on Google interviews, [here](https://www.facebook.com/careers/life/preparing-for-your-software-engineering-interview-at-facebook/) is a guide on Facebook interviews, and [here](https://www.amazon.jobs/en/landing_pages/interviewing-at-amazon) is a guide on Amazon interviews.

# The Journey

One last thing I'll note is that not every company has these big technical interviews.

Honestly, right out of college I wasn't ready for a huge technical interview. I got a job anyway (at a smaller company that had mostly behavioral interviews), and I learned a ton from working there. I spent **years** coding hobby projects, working on my portfolio, posting on forums and Stack Overflow, all of which led to me creating this site. Eventually I got through the big scary Google interview, and it's **because** I worked at a smaller company first.

Many people, especially students and recent bootcamp graduates, have an all-or-nothing approach where the only options they see are the huge tech companies. I understand the appeal, but I also think you should keep your options open. Apply to big companies **and** to small companies. The world is a big place, and there's more to software development than the [Big Four](https://en.wikipedia.org/wiki/Big_Four_tech_companies).

# Try Again

Preparing for an interview is a lot of work, and there's a lot riding on that one day, so it's pretty crushing when you don't get the job.

But I think it's important to understand that **most** candidates don't get the job. The default answer is no. It's a numbers thing: there are more applicants than open posiitons. Not getting a particular role doesn't mean you're a failure, or a bad programmer, or that you'll never find a job. You can read [plenty of stories](https://rejected.us/) about people who "failed" an interview at one company, and then went on to have a successful career. (This includes me!)

Bigger companies have an assumption built into their system that the interview process purposely contains a lot of [false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives) (rejecting good candidates) and that good candidates will reapply multiple times until they eventually get the job. So even if you're rejected, if you really want the job, you can keep studying and then reapply in 6 months or a year.

---

All of that said, hopefully this guide helped you know what to expect from interviews and how to approach them, at both big and small companies.

I'd love to hear your thoughts: Was any of this surprising? Did I miss any advice you'd give? Don't hesitate to say hi on [the forum](https://forum.happycoding.io)!