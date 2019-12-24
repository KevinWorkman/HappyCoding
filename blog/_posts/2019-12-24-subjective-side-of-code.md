---
layout: blog-post
title: The Subjective Side of Code
meta-title: The Subjective Side of Code
meta-description: "You might be surprised to hear that a lot of decisions about code come down to a subjective, opinionated question: how does this code make you feel?"
meta-image: /blog/images/subjective-side-of-code/opinions-1.jpg
---

{% include toc.md %}

When most people think of computer science, they think of ones and zeroes. [Binary.](https://en.wikipedia.org/wiki/Binary_number) True or false, yes or no, correct or incorrect. They assume it's like grade school math, where there's only one correct answer to any question. One plus one is always two, so there must always be one best way to code... right?

But if you've written any code, you know it doesn't work that way. It turns out that one of the most interesting -and most difficult- things about coding is that there are always a million different ways to solve a particular problem. Why is that?

I've said before that coding is a **craft**, similar to painting, or woodworking, or film-making. There isn't a single "correct" way to write code, just like there isn't a single "correct" way to paint a picture. You might be surprised to hear that a lot of decisions about code come down to a subjective, opinionated question: **how does this code make you feel?**

# You be the Judge

Let's say you want to create an animation that shows a ball dropping. When the ball reaches the bottom, it should start back up at the top. Which code is better?

Option 1:

```java
float y = 0;

void setup(){
  size(300, 300);
}

void draw(){
  y += 2;
  if(y > height){
    y = 0;
  }

  background(0);
  ellipse(width/2, y, 20, 20);
}
```

{% include codepen-new.html slug-hash="wvBeGKz" height="300" %}

This code uses a `y` variable to remember where the ball is. Each frame, it increases the `y` variable. If the `y` variable becomes `> height`, then that means the ball is off the bottom edge of the screen, and `y` is set back to `0`.

**- or -**

Option 2:


```java
int animationDuration = 150;

void setup() {
  size(300, 300);
}

void draw() {
  float y = map(frameCount % animationDuration, 
    0, animationDuration, 0, height);

  background(0);
  ellipse(width/2, y, 20, 20);
}
```

{% include codepen-new.html slug-hash="wvBeGMo" height="300" %}

This code uses the `map()` function to figure out where the ball should be, based on the current `frameCount`.

Which one do you think is better?

The "answer" is that neither one is obviously better! They both create the exact same animation.

![falling ball animation](/blog/images/subjective-side-of-code/ball-1.gif)

Which option is "better" depends on who is deciding. Which option was easier for you to understand? Which option "felt" right to you?

# Context Matters

Your answer depends on your **context**: what you studied in school, how you think in general, what you ate for breakfast today.

My guess is that option 1 makes more sense to people who think about animation in terms of what changes between frames, and option 2 makes more sense to people who think about animation in terms of the overall effect.

In other words, when you think about the ball falling, do you imagine it moving a couple pixels at a time, or do you imagine it taking a certain amount of time to reach the bottom? Both understandings are correct, but they're slightly different perspectives. How you *think* about the ball falling changes how you *feel* about each option.

In addition to *your* context, the context of the project itself is also important. If you knew you would need to increase the height of the window, but have the animation take the same amount of time, which approach would feel more correct? If you needed to change the speed of the ball over time, which approach would feel more correct?

The challenge is that context changes over time, for both you and the code. As you learn more, you think differently, and as you gain more experiences, your perspective shifts. The project might get new requirements that change its context. Every time you implement an additional feature, you and the project both change.

This is one reason why it often feels strange to read code you wrote a long time ago. Part of that strangeness is that you're growing as a developer, but it's also because you're a different person than when you wrote it. This is also why old code often gets a bad rap. It's tempting to dismiss any code you don't understand: "This code is horrible! Why was it written this way?" But the answer is often that the original developer had a different context than you have now.

# Consistency Matters

Let's say you prefer option 1, but the person who worked on the code before you implemented option 2 instead. Now let's say you're given the task to make the ball move horizontally as well. Would it be okay to do this?

```java
float x = 0;
int animationDuration = 150;

void setup() {
  size(300, 300);
}

void draw() {
  x += 5;
  if (x > width) {
    x = 0;
  }
  float y = map(frameCount % animationDuration, 
    0, animationDuration, 0, height);

  background(0);
  ellipse(x, y, 20, 20);
}
```

This code *works* fine. It creates the intended animation:

![falling ball animation](/blog/images/subjective-side-of-code/ball-2.gif)

But chances are, no matter which option you preferred, this code is harder to read. Why? Because it's mixing two different ways of thinking about the problem! This code continues to use the `map()` approach from option 2 for the `y` variable, but it uses the `if` statement approach from option 1 for the `x` variable. To understand the code, you have to understand two different perspectives at the same time.

You might be tempted to [refactor](https://en.wikipedia.org/wiki/Code_refactoring) the code, but that can be difficult with more complicated projects. Plus, since a lot of this comes down to opinion, it's sometimes hard to justify changing the code just because you prefer a certain approach.

So even if you don't like the approach already used in a project, it's often better to stick with it when writing new code!

# How not to judge code

"But wait," I hear you say, "there must be a way to measure code quality!"

There is, but not in the way that most novice coders (or managers...) expect.

## Lines of Code

The most obvious, and most incorrect, measurement of code is: how long is it?

It's easy to measure: code is numbered by line, so to figure out how many lines of code you have, you just scroll down.

But it's also a terrible measurement. Is it better to have more lines of code because that must mean your project is complex? Or is it better to have fewer lines of code because that means your code is as succinct as possible?

The answer, of course, is neither.

We can change our sketch to have more lines of code:

```java
Animation animation;

void setup() {
  size(300, 300);
  animation = new TransformationAnimation(
    new Circle(), new FallingTransformation(), new WindowBounds());
}

void draw() {
  background(0);
  animation.nextFrame();
}

interface Transformation {
  void applyTransformation(Shape s);
}

class FallingTransformation implements Transformation {
  void applyTransformation(Shape s) {
    s.getLocation().add(0, 2);
  }
}

interface Shape {
  PVector getLocation();
  void paint();
}

class Circle implements Shape {
  private PVector location = new PVector(width/2, 0);

  PVector getLocation() {
    return location;
  }

  void paint() {
    ellipse(location.x, location.y, 20, 20);
  }
}

interface Bounds {
  void enforceBounds(Shape s);
}

class WindowBounds implements Bounds {
  void enforceBounds(Shape s) {
    if (s.getLocation().y > height) {
      s.getLocation().y = 0;
    }
  }
}

interface Animation {
  void nextFrame();
}

class TransformationAnimation implements Animation {
  Shape shape;
  Transformation transformation;
  Bounds bounds;

  public TransformationAnimation(Shape shape, Transformation transformation, Bounds bounds) {
    this.shape = shape;
    this.transformation = transformation;
    this.bounds = bounds;
  }

  void nextFrame() {
    transformation.applyTransformation(shape);
    bounds.enforceBounds(shape);
    shape.paint();
  }
}
```

Wow, look at this code! It has lots of [abstraction](https://en.wikipedia.org/wiki/Abstraction_(computer_science)), it uses various [design patterns](https://en.wikipedia.org/wiki/Software_design_pattern), it's [extensible](https://en.wikipedia.org/wiki/Extensibility)... and it's impossible to read.

In other words, this code is [over-engineered](https://en.wikipedia.org/wiki/Overengineering) to the point of being hard to read for no good reason. If I had used this code as my first example, how long would it have taken you to understand what it did?

> *"Measuring programming progress by lines of code is like measuring aircraft building progress by weight." - Bill Gates*

Alternatively, we can make our code as short as possible:

```java
void setup(){
  size(300, 300); 
}

void draw(){
  background(0);
  ellipse(width/2, (frameCount * 2) % height, 20, 20);
}
```

This code is [idiomatic](https://en.wikipedia.org/wiki/Programming_idiom) and boils down the rendering and updating of our animation to a single line of code... which makes it hard to read.

Would you understand what this code was doing just by reading it? If you had to make a change like increasing the speed of the circle, how would you do it?

> *In every field of inquiry, it is true that all things should be made as simple as possible - but no simpler. (And for every problem that is muddled by over-complexity, a dozen are muddled by over-simplifying.) - [Sydney J. Harris](https://quoteinvestigator.com/2011/05/13/einstein-simple/)*

Hopefully these examples show that measuring code by length is meaningless at best, and likely encourages writing **worse** code!

## Efficiency

Another common misconception is that the best way to measure code is by "efficiency" - surely code that runs faster is always better, right?

Let's try to speed up our example:

```java
FrameNode currentNode;

void setup() {
  size(300, 300);
  FrameNode nextNode = null;
  FrameNode lastNode = null;
  for (int frameIndex = height; frameIndex >= 0; frameIndex -= 2) {
    PGraphics frame = createGraphics(width, height);
    frame.beginDraw();
    frame.background(0);
    frame.ellipse(width / 2, frameIndex, 20, 20);
    frame.endDraw();

    FrameNode node = new FrameNode(frame, nextNode);
    if (lastNode == null) {
      lastNode = node;
    } else if (frameIndex == 0) {
      lastNode.next = node;
      currentNode = node;
    }
    nextNode = node;
  }
}

void draw() {
  image(currentNode.frame, 0, 0);
  currentNode = currentNode.next;
}

class FrameNode {
  PGraphics frame;
  FrameNode next;

  public FrameNode(PGraphics frame, FrameNode next) {
    this.frame = frame;
    this.next = next;
  }
}
```

Holy technical interview, [Batman](https://tick.fandom.com/wiki/Die_Fledermaus)! This code implements a [circular linked list](https://en.wikipedia.org/wiki/Linked_list#Circular_linked_list) to [cache](https://en.wikipedia.org/wiki/Cache_(computing)) all of the frames ahead of time. Instead of calculating the position of the ball and redrawing it each frame, this code retrieves the pre-drawn canvas and draws that to the screen.

This code must be better because it's more efficient, right?

Not really.

First off, if you inherited this code, how long would it take you to understand it, compared to the first version? Is the amount of time you spend being confused and frustrated worth the improved efficiency?

Second, are you sure that this code is more "efficient" than the first example? I told you it was, but do you believe me? Did you measure it?

The funny thing is, I have **no idea** whether this version is more "efficient" than my first attempt. I do know that it uses a lot more memory, because it stores all of the frames instead of calcualting each one on the fly. But I didn't measure it.

The (incorect) assumptions built into this code exemplify the problems with most discussions around efficiency: nobody has measured anything, we haven't defined our context, our constraints, or what we care about, and we're all making assumptions without confirming anything.

> *"Premature optimization is the root of all evil." - [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth)*

To be fair, I'm oversimplying. For a more nuanced discussion on efficiency, read more info [here](https://softwareengineering.stackexchange.com/q/80084/114262). But the point is that if you're worried about "efficiency" before you've defined what that means in your context and what your current measurements are, then you're worrying about the wrong things.

Even **if** this code was somehow faster, it's a **tradeoff** between memory usage and speed. And depending on your **context**, that might be an improvement, or it might not be. For starters, our animation is rendered at 60 frames per second, so anything that's faster than that is unnecessary anyway.

So if you're asking yourself how to improve the efficiency of your code, you have to answer a few questions first:

- What do you mean by efficiency? Are you talking about memory usage, processing time, storage space, project velocity, or something else?
- What's the current "efficiency" of your code?
- What are your constraints?
- Are any improvements worth an increased chance of bugs, or making the code more difficult to maintain?

So although it's easy to ask "how can I improve the efficiency of this code", the answer is not an obvious one-dimensional modification.

# Readability

Hopefully I've shown that the "obvious" objective ways you might measure code aren't so obvious after all. This leaves us with the subjective question: **how does this code make you feel?**

Is the code confusing and hard to undertand, or is it intuitive and easy to follow? Is it obvious how you'd make a change? Are you confident you know what the code does? Does changing the code sound like work, or does it sound like fun?

In other words, how **readable** is the code?

Readability means many different things to many different people, but it comes down to a subjective opinion: how does the code *feel* to you? Like the example above, two different approaches can be equally valid, but *feel* different depending on your context. The approach that makes sense to one person might not make sense to another person.

There are a few obvious ways you can make your code more readable: follow standard [naming conventions](https://en.wikipedia.org/wiki/Naming_convention_(programming)#Java), add informative comments, use whitespace to organize your code into logical blocks.

But a lot of readability comes down to how it makes the reader feel.

# Maintenance

Readability might not seem like a big deal, especially if you've only worked on code by yourself. But it becomes very important when you're working on code with a team, reading code written by other people, and writing code that other people need to understand.

Think about it this way: code is written once, but it's *read* and *modified* dozens, if not hundreds of times after it's initially written. You, or somebody on your team, will spend WAY more time maintaining your code than the time it took you to write it.

> *"Indeed, the ratio of time spent reading versus writing is well over 10 to 1. We are constantly reading old code as part of the effort to write new code... Making it easy to read makes it easier to write." - [Robert C. Martin](https://en.wikipedia.org/wiki/Robert_C._Martin)*

That means that even if you **can** find a clever trick to minimize the time you spend coding now, you're just costing yourself time in the future. So it's almost always better to spend an hour making your code readable now, rather than spending a week trying to figure it out later.

# The Philosophies of Code

All of these differences in context, perspectives, and opinions have led to the creation of thousands of [programming languages](https://en.wikipedia.org/wiki/List_of_programming_languages), [frameworks](https://en.wikipedia.org/wiki/Software_framework), and [libraries](https://en.wikipedia.org/wiki/Library_(computing)). Each one represents a different way of viewing the world. This is probably why debates about which choice is "better" are so passionate! We aren't arguing about Java vs JavaScript, we're arguing about how our brains process the world around us.

In fact, there are entire [philosophies](https://en.wikipedia.org/wiki/List_of_software_development_philosophies) and [paradigms](https://en.wikipedia.org/wiki/Programming_paradigm) built around code. Should you follow the [don't repeat yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) rule or the [rule of three](https://en.wikipedia.org/wiki/Rule_of_three_(computer_programming))? Do you prefer [functional](https://en.wikipedia.org/wiki/Functional_programming) or [object-oriented](https://en.wikipedia.org/wiki/Object-oriented_programming) programming? Are you a [neat or a scruffy](https://en.wikipedia.org/wiki/Neats_and_scruffies)? How do you know when you're following a reasonable [pattern](https://en.wikipedia.org/wiki/Software_design_pattern) and not an [anti-pattern](https://stackoverflow.com/questions/980601/what-is-an-anti-pattern)? How do you know you aren't just [cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming)? Do your answers change depending on the project you're working on? Do they change over time?

This opens up a lot of creativity, but it can also be frustrating. It's hard to get an answer to questions like "[how do I build a website?](/tutorials/html)" because there are too many options, and which one you should choose depends more on how you think about the world than it does on anything else.

Experienced coders develop a [spider-sense](https://tvtropes.org/pmwiki/pmwiki.php/Main/SpiderSense) around code. When we talk about code, more often than not we end up talking about how we feel. We can often tell you that a piece of code *feels* weird to us, but it takes more effort to explain *why* it feels that way.

I think this is interesting because it gets at one of my favorite things about code: it's introspective. ([This kind](https://en.wikipedia.org/wiki/Introspection), not [that kind](https://en.wikipedia.org/wiki/Type_introspection).) To understand how you should approach a problem in code, you first have to understand how you think about the problem. You have to [think about thinking](https://en.wikipedia.org/wiki/Metacognition). This is not at all obvious to novices or to people who don't code.

But I think many people would be surprised at how often a discussion about code comes down to how it feels. Or how it [smells](https://en.wikipedia.org/wiki/Code_smell).