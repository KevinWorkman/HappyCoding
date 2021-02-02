---
layout: tutorial
title: Multi-Year Curriculum
thumbnail: /teaching/guides/images/curriculum-3.png
tagline: Plan a multi-year curriculum with Happy Coding.
sort-key: 500
meta-title: Multi-Year Curriculum
meta-description: Plan a multi-year curriculum with Happy Coding.
meta-image: /teaching/guides/images/curriculum-3.png
tags: [teaching]
updated: 2020-12-26
---

{% include toc.md %}

My goal with Happy Coding is to document every topic I've learned over the years, and to organize those topics into a path that helps folks learn things in a logical order, rather than the haphazard trial-and-error order I originally learned them. It can be difficult to know how everything fits together, especially when you're first starting out! I'm hoping Happy Coding helps with that.

So if you're a teacher thinking about creating a multi-year curriculum, or if you're curious about how everything fits together, here's the order I'd recommend learning and teaching various concepts:

<!-- <object> --><object data="/tutorials/images/tutorial-path.svg" type="image/svg+xml" alt="tutorial path"></object><!-- </object> -->

If I were planning a multi-year curriculum, I would start with p5.js or Processing (for the pros and cons of each, see the [intro to computer science teaching guide](/teaching/guides/semester)). Then I would organize  the rest of the concepts in a few follow-up courses, grouped by different tracks that culminate in more advanced topics. I'll briefly describe each track and course below.

# Younger Students

Most of the content on Happy Coding is designed for high school or college students, or adult self-learners. I've also met middle school teachers who use p5.js and Processing in their classrooms. 

But in a perfect world, students would start learning about computer science at an early age, as early as primary / elementary school. I don't have any experience with that age group, but if you're looking for resources for teaching younger students, you might want to check out these links:

- [Code.org](https://code.org/learn) has a ton of tutorials organized by subject, whether you have computers in your classroom, your own experience level, and by grade level- including resources for students who can’t even read yet!
- [Scratch](https://scratch.mit.edu/) is a visual programming language designed for younger students. The Scratch website contains a ton of resources, and lets students share their creations.
- [Alice](http://www.alice.org/index.php) is a 3D scene creator that lets students create stories about characters interacting with the world. Alice focuses on story telling rather than creating games, with the goal of being as inclusive as possible.
- [Twine](https://twinery.org/) lets you create “choose your own adventure” stories. This requires typing out a story and all of its branches, so it might not be the right thing for very young students. But it’s a cool way to get those English nerds (I’m allowed to say that because I was one of them) interested in computer science.
- [Lightbot](http://lightbot.com/) is a game where students write instructions that a robot follows to get through a maze.
- [Secret Coders](http://www.secret-coders.com/) is an illustrated book series about students solving mysteries and learning about code. The website also has resources for learning more!

# Web Development Track

The web development track uses p5.js to introduce the fundamentals of coding, and follows it up with a course on HTML, JavaScript, and CSS.

## p5.js

[p5.js](/tutorials/p5js) is perfect for introducing the fundamentals of coding, since it's designed with accessibility in mind. New coders can start coding animated and interactive programs right in their browser, without downloading or installing anything. Programs written in p5.js can also easily be shared, which I personally think is super important for new coders. (And I imagine makes it easier to grade!)

{% include url-thumbnail.html url="/tutorials/p5js/" %}

See the  [intro to computer science teaching guide](/teaching/guides/semester) for more information on how you might organize a p5.js course.

## HTML, JavaScript, and CSS

Because p5.js is written in JavaScript, it leads pretty naturally to learning about HTML, JavaScript, and CSS. All of these could be combined into a single web development course that follows the p5.js course.

{% include url-thumbnail.html url="/tutorials/html/" %}
{% include url-thumbnail.html url="/tutorials/javascript/" %}
{% include url-thumbnail.html url="/tutorials/html/css" %}

# Java Track

The Java track uses Processing to introduce the fundamentals of coding, and follows it up with a course on Java.

## Processing

Similar to p5.js, Processing is great for introducing the fundamentals of coding.

{% include url-thumbnail.html url="/tutorials/processing/" %}

See the  [intro to computer science teaching guide](/teaching/guides/semester) for more information on how you might organize a Processing course.

## Java

Because Processing is built with Java, it leads pretty naturally to learning about Java. I'd use a Java course to introduce more advanced topics like inheritance, data structures and algorithms, and interacting with complicated libraries.

{% include url-thumbnail.html url="/tutorials/java/" %}

This course would also work as the [Advanced Placement Computer Science A](https://en.wikipedia.org/wiki/AP_Computer_Science) course.

# Server Track

After students have learned both web development and Java, they can build on both concepts to learn about server-side programming.

I split server-side coding and Google Cloud into two tutorial tracks because I learned server-side Java before learning Google Cloud, and because I don't think folks *need* to learn Google Cloud (which costs money) to learn about server coding.

But realistically, if you're going to teach server-side coding and Google Cloud, I would probably combine them into a single course rather than splitting it into two separate courses. Or it's totally fine to teach server-side coding without mentioning Google Cloud.

{% include url-thumbnail.html url="/tutorials/java-server/" %}
{% include url-thumbnail.html url="/tutorials/google-cloud/" %}

# Advanced Topics

That's already probably too many courses to fit into a high school program, but if you're looking for upper-level electives, I'd consider Android and libGDX.

## Android

After students have seen concepts like OOP and can understand the flow of a Java application, they can branch out into Android development.

{% include url-thumbnail.html url="/tutorials/android/" %}

## libGDX

libGDX is a game development framework written in Java.

{% include url-thumbnail.html url="/tutorials/libgdx/" %}

# Accelerated Track

I wrote all of the above without worrying too much about time and resource constraints, with a goal of showing how everything fits together.

But I know realistically it probably doesn't make sense to split these concepts up into so many individual courses. With that in mind, here's another way to think about it that covers a breadth of concepts without taking 7 years.

## Course 1: Intro to Coding and Web Development

Instead of splitting up the p5.js course and the web development course, you could combine them into a single course that starts out in p5.js and transitions into HTML, JavaScript, and CSS.

## Course 2: Processing and Java

Similarly, instead of splitting up the Processing course and the Java course, you could combine them into a single course that starts out in Processing and transitions into Java.

If your first course teaches the fundamentals of coding in p5.js, you don't have to spend a ton of time on the Processing part here, and this course would also work as the [Advanced Placement Computer Science A](https://en.wikipedia.org/wiki/AP_Computer_Science) course.

## Electives

From there, you can pick and choose other advanced courses. If you're looking for a third class, I would probably go with server-side coding, but Android or libGDX would work as upper-level electives as well.

# Focus on Fundamentals

If you're feeling overwhelmed by how many different concepts and courses are listed above, don't worry! These courses range from introductory middle school and high school courses, to upper-level college courses. So don't feel like you have to offer all of these concepts in your class!

Instead, I see a ton of value in focusing on the fundamentals. If you offer a single course that introduces the fundamentals of coding with p5.js, that by itself is huge! Students can then build on that in college or with their own self-learning. I think the best teachers have been those who taught me how to teach myself. One class like that is more valuable than ten classes that teach a bunch of facts.

# Contact Me

I love *love* **love** hearing from teachers. So whether you're still figuring out what works for you, or if you're actively using Happy Coding in your class, please don't hesitate to [contact me](/about/contact)! I'd love to hear from you.