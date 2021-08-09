---
layout: blog-post
title: Ludum Memories
meta-title: Ludum Memories
meta-description: 10 years of Ludum Dare.
meta-image: /blog/images/ludum-memories/thumbnail.png
updated: 2021-06-15
tags: [dev-log]
---

[Ludum Dare](https://ldjam.com/) is a [game jam](https://en.wikipedia.org/wiki/Game_jam) (similar to a hackathon, but with a focus on celebration rather than competition) where participants have 48 hours to make a game based on a theme that's announced at the beginning of the event.

I've participated in a bunch of Ludum Dare events over the years. Since then, the Ludum Dare website has changed a couple times, and my own hosting has changed a couple of times. So thanks to the ephemeral nature of the internet, I thought most of my entries had been lost to history.

I recently discovered [LudumData](https://ludumdata.openfu.com/) which collects the entries from past Ludum Dare events. Before that goes away, I thought I'd put all of my previous entries in one place: this page!

Shockingly, most of these are still playable, as long as you don't mind downloading a Java jar file. (Double-click to run, or run `java -jar NameOfGame.jar` in your command line.) But keep in mind these were all done within 48 hours, so set your expectations accordingly!

{% include toc.md %}

# Escape from Monster City - LD21

*August 2011, Escape*

![Escape from Monster City](/blog/images/ludum-memories/escape-from-monster-city.jpg)

This was my first Ludum Dare, and the first time I learned [Processing](/tutorials/processing). In this game, [Escape from Monster City](https://ludumdata.openfu.com/game/32578) dropped the admittedly frog-looking player in the middle of a dark city, and the goal was to sneak passed the sleeping monsters that inhabited its corners. If you got too close to a monster, it would wake up and chase you.

Appropriately enough, this first Ludum Dare was the first time the "give up on Friday night, then wake up Saturday morning with a full game in your brain" strategy paid off for me, and it's one I've reused many time since then.

You can download the jar [here](http://s3.staticvoidgames.com/games/EscapeFromMonsterCity/EscapeFromMonsterCity.jar).

# Let's Bounce - LD23 Warm-Up

*April 2012*

After learning Processing with the previous game, I wanted to make sure I could create a game with the fundamentals: animation, rudimentary physics (read: trig), collision detection, game transitions, different levels, sounds, etc.

[Let's Bounce](https://ludumdata.openfu.com/game/34719) was also the first new game that I uploaded to the brand-new-at-the-time [Static Void Games](https://staticvoidgames.com). This was in my description of the game:

> *Also, shameless self-promotion: this game is hosted on a project I've been throwing together, StaticVoidGames.com. The website is designed for Java and Processing developers with competitions like Ludum Dare in mind. Just upload a jar and a thumbnail, and you have a decent-looking website showcasing applet, webstart, and jar versions of your game without wasting any precious development time on web design. I'm working on adding tutorials and ad revenue sharing, but for now, it's an easy way to deploy your Ludum Dare games!*

Almost 10 years later, I feel a few emotions reading that. 😭

Anyway, in this game you played as a bouncing ball that had to reach a certain height while fighting enemy bouncing balls.

![Let's Bounce](/blog/images/ludum-memories/lets-bounce-1.jpg)

![Let's Bounce](/blog/images/ludum-memories/lets-bounce-2.jpg)

You can download the jar [here](http://s3.staticvoidgames.com/games/LetsBounce/LetsBounce.jar).

# Pale Blue Dot - LD23

*April 2012, Tiny World*

![Pale Blue Dot](/blog/images/ludum-memories/pale-blue-dot.jpg)

Inspired by [this image](https://en.wikipedia.org/wiki/Pale_Blue_Dot) and the corresponding speech by [Carl Sagan](https://en.wikipedia.org/wiki/Carl_Sagan), [Pale Blue Dot](https://ludumdata.openfu.com/game/30580) had you controlling the Earth, colliding with smaller objects (like the moon and space stations) to grow and eventually encompass other galaxies. It's a simple idea, but it was backed by a soundtrack that played Carl Sagan speeches as you moved around in space.

I don't really participate in Ludum Dare for the competition, but this game got 21st for theme, 38th for mood, and 46th for humor. Not bad considering there are usually hundreds if not thousands of entries!

Years later, a game called [Everything](http://www.everything-game.com/) captured the mood I was going for, much better than I could.

You can download the jar [here](http://s3.staticvoidgames.com/games/PaleBlueDot/PaleBlueDot.jar).

# Radar Defense - Mini-LD34

*May 2012*

I believe the theme here was to use a circle as your game instead of a rectangle, so [Radar Defense](https://ludumdata.openfu.com/game/35229) was a radar circle that showed incoming enemies that you had to blow up. I think I remember playing with Processing Android with this, but I don't have any evidence that I ever deployed that version.

![Radar Defense](/blog/images/ludum-memories/radar-defense.jpg)

You can download the jar [here](http://s3.staticvoidgames.com/games/RadarDefense/RadarDefense.jar).

# Black Sheep - Mini-LD36

*July 2012*

[Black Sheep](https://ludumdata.openfu.com/game/35313) was my attempt at making a puzzle game. You controlled a black sheep who had to use other sheep to reach its goal. Was this a commentary on how I was feeling at the time? I'm not sure, but it did have some pretty cute crayon art.

![Black Sheep](/blog/images/ludum-memories/black-sheep-1.jpg)

![Black Sheep](/blog/images/ludum-memories/black-sheep-2.png)

You can download the jar [here](http://s3.staticvoidgames.com/games/BlackSheep/BlackSheep.jar).

# The Debate - LD24

*August 2012, Evolution*

I almost didn't enter this Ludum Dare, but with 4 hours left I couldn't resist throwing something together. I was inspired by somebody reacting with *"Evolution? That's not real!"* when I told them the theme. (If that doesn't make sense to you, keep in mind that I'm from [rural Pennsylvania](https://www.youtube.com/watch?v=lOfZLb33uCg).)

[The Debate](https://ludumdata.openfu.com/game/29039) is pretty much [Pong](https://en.wikipedia.org/wiki/Pong), where the paddles are Charles Darwin and Jesus, and hitting the ball causes a quote from your "side" to display in the background.

![The Debate](/blog/images/ludum-memories/debate.jpg)

Like most of my Ludum Dare entries, I honestly don't know whether this is a game, a statement, or evidence of my laziness. Maybe a mix of all of the above. But it got 20th for humor and 75th for theme, which I was pretty happy with.

You can download the jar [here](http://s3.staticvoidgames.com/games/TheDebate/TheDebate.jar).

# MazEvolution - F This Jam 2012

*November 2012*

[F This Jam](https://twitter.com/fuckthisjam) is another game jam, where the goal is to create a game in a genre you hate. I also happened to be in a Natural Language class in grad school at the time, so I used evolutionary computation to create a game with mazes that got harder over time. This doubled as my final project for the class.

![MazEvolution](/blog/images/ludum-memories/mazevolution.png)

You can download the jar [here](http://s3.staticvoidgames.com/games/MazEvolution/MazeEvolution.jar).

# Menorah - LD25 Warm-Up

*December 2012*

[This](https://ludumdata.openfu.com/game/34671) was my first attempt at [libGDX](/tutorials/libgdx). Definitely not a game, but I used libGDX to get a particle system working on a bunch of platforms, which was really cool.

![Menorah](/blog/images/ludum-memories/menorah.jpg)

I would later create a [Kwanzaa](https://en.wikipedia.org/wiki/Kwanzaa) version of this that I uploaded to the Google Play store as an Android app. That got over 10,000 installs which I thought was cool, until Google decided to take it down for Google reasons.

It looks like I did the warm-up but didn't actually do the actual event, which is a pretty funny Kevin thing to do.

# Avalanche Rider - Mini-LD39

*January 2013*

I originally wanted to make a game where you controlled an avalanche, but that idea evolved into [Avalanche Rider](https://ludumdata.openfu.com/game/35416) where you played as a penguin sliding down a mountain to avoid the avalanche.

![Avalanche Rider](/blog/images/ludum-memories/avalanche-rider.jpg)

You can download the jar [here](http://s3.staticvoidgames.com/games/AvalancheRider/AvalancheRider.jar). Or better yet, go play [Dino Run](https://www.pixeljam.com/dinorun/index2.html).

# Type Your Heart Out - Global Game Jam 2013

*January 2013, sound of a beating heart*

This was for the [Global Game Jam](https://globalgamejam.org/) instead of Ludum Dare, but I figured it belongs on this list. In this game, players had to type words while also keeping time to a beating heart. It's a little like patting your head with one hand while rubbing your stomach with the other.

![Type Your Heart Out](/blog/images/ludum-memories/type-your-heart-out.png)

I ended up not loving the Global Game Jam. It's a little more serious than Ludum Dare, and it's in-person instead of online. But it was cool to work with somebody I met at the event- thanks Tery for providing the art!

You can download the jar [here](http://s3.staticvoidgames.com/games/TypeYourHeartOut/TypeYourHeartOut.jar).

# The Shadows - LD26

*April 2013, Minimalism*

[The Shadows](https://ludumdata.openfu.com/game/25178) was a simulation of [sleep paralysis](https://en.wikipedia.org/wiki/Sleep_paralysis) which I was experiencing quite a bit at the time. You typed letters to close your eyes, and then you had to wake up fast enough to avoid being devoured by [shadow people](https://en.wikipedia.org/wiki/Shadow_person). Maybe a bit melodramatic, but it was a melodramatic time in my life. Creating this one involve some ridiculous infrared photography, which was pretty fun.

![The Shadows](/blog/images/ludum-memories/shadows-1.jpg)

![The Shadows](/blog/images/ludum-memories/shadows-2.jpg)

![The Shadows](/blog/images/ludum-memories/shadows-4.png)

# Defuse - LD27

*August 2013, 10 Seconds*

[Defuse](https://ludumdata.openfu.com/game/24199) gave the player 10 seconds to figure out which wire to cut to defuse a bomb. The wires got more complicated as the levels increased. This one was done with good old fashioned [Swing](/tutorials/java/swing), and it got 59th for theme.

![Defuse](/blog/images/ludum-memories/defuse.jpg)

One of my favorite things about Ludum Dare is when people make Let's Play videos of themselves playing through the games. Check out [this video](https://www.youtube.com/watch?v=pUlP6yTNfFw) to see [Claus Aranha](https://twitter.com/caranha) play this game.

You can download the jar [here](http://s3.staticvoidgames.com/games/Defuse/Defuse.jar).

# Firefly - LD29

*April 2014, Beneath the Surface*

[Firefly](https://ludumdata.openfu.com/game/20582) was an artsy little meditative toy where you controlled a yellow firefly, looking for another yellow firefly amongst a bunch of other colored fireflies. I used [libGDX](/tutorials/libgdx) to deploy as an Android app, and you controlled the firefly by tilting your phone. I played random piano notes whenever a firefly lit up, making it feel a little melancholy without actually syncing a particular song up with the animation.

![Firefly](/blog/images/ludum-memories/firefly-1.jpg)

![Firefly](/blog/images/ludum-memories/firefly-2.jpg)

Check out [this video](https://youtu.be/K5ATRciKj24?t=816) to watch [Jupiter Hadley](https://twitter.com/Jupiter_Hadley) play the game!

You can download the jar [here](http://s3.staticvoidgames.com/games/Firefly/Firefly.jar).

# The Tour - LD33

*August 2015, You are the Monster*

[The Tour](https://ludumdata.openfu.com/game/9224) was more a data visualization than it was a game. I used the [Arlington Cemetery API](https://www.arlingtoncemetery.mil/Developers) (yes, apparently that's a thing) to show information about the graves in [Arlington Cemetery](https://en.wikipedia.org/wiki/Arlington_National_Cemetery). The "player" could walk through the cemetery using the map, and information about the person buried in that location displayed to the right.

![The Tour](/blog/images/ludum-memories/tour.jpg)

You can take what you will from the connection to the theme, but back when I lived around DC, walking through Arlington in real life always left me with a feeling of... complicity... that I can't quite explain in words, and this "game" was my attempt at capturing that emotion.

I think this is probably the entry that stuck with me the most, and I might try to redo it. I was particularly proud of a few commenters who understood what I was going for:

- *"This is great. Chilling and pointed interpretation of the theme." - [Quij](https://ludumdata.openfu.com/~55430)*
- *"This is really powerful. I can't say I enjoy it, but it really nailed the theme." - [Gigaraptor](https://ludumdata.openfu.com/~55844)*
- *"Leaving the theme up to the "player" was the right thing to do. There's a lot to take from this if you give yourself some time to think it over. I'd expect anyone who did so would likely find something different than the next person." - [merrak](https://ludumdata.openfu.com/~46508)*

# SSSNAKESSS! - LD39

*July 2017, Running out of Power*

Instead of paying attention to the theme, I used this as an excuse to play with a data visualization idea I had: what would it look like if you overlaid a bunch of games of [Snake](https://en.wikipedia.org/wiki/Snake_(video_game_genre)) on one screen?

[SSSNAKESSS!](https://ludumdata.openfu.com/game/49862) does that by recording your movements, storing them in a database, and replaying them in the background the next time somebody plays. Over time, the game contained dozens or hundreds of snakes slithering around in the background.

![SSSNAKESSS!](/blog/images/ludum-memories/sssnakesss-1.png)

![SSSNAKESSS!](/blog/images/ludum-memories/sssnakesss-2.gif)

# When Failing isn't Failure - LD42

*August 2018, Running out of Space*

This is by no means the only Ludum Dare that I dropped out of, but it is the only one I wrote a blog post about. You can read it [here](/blog/when-failing-isnt-failure).

# \#000000 - LD45

*October 2019, Start with Nothing*

[\#000000](/gallery/ludum-dare-45/index) starts the player with black (`#000000`), and you make choices to change your color to white (`#ffffff`). Different choices result in a different path through the color space, which gives each player their own gradient that they can download as a souvenir.

This game got 13th for innovation, and seeing everyone [post their gradients](https://ldjam.com/events/ludum-dare/45/$170999) was super cool.

![LD 45](/blog/images/ludum-memories/ld45-1.png)

![LD 45](/blog/images/ludum-memories/ld45-2.png)

You can play in your browser [here](/gallery/ludum-dare-45/index), and read more about it [here](/gallery/ludum-dare-45/about).

# The Next Generation - LD46

*April 2020, Keep it Alive*

[The Next Generation](/gallery/the-next-generation-ld-46/index) is a puzzle game where the player needs to come up with the starting pattern that generates a goal pattern using the [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) rules.

[![The Next Generation](/blog/images/ludum-memories/next-generation.png)](/gallery/the-next-generation-ld-46/index)

You can play in your browser [here](/gallery/the-next-generation-ld-46/index), and read more about it [here](/blog/ludum-dare-46).

# EmojAvoid - LD47

*October 2020, Stuck in a Loop*

[EmojAvoid](/gallery/emojavoid-ld-47/index) is a game where the player navigates through a level, and then 2 levels at the same time, and then 3 levels at the same time, until eventually they're playing 5 levels at once.

[![EmojAvoid](/blog/images/ludum-memories/emojavoid.png)](/gallery/emojavoid-ld-47/index)

You can play in your browser [here](/gallery/emojavoid-ld-47/index).

# The Rabbit Hole - LD48

*April 2021, Deeper and Deeper*

[The Rabbit Hole](/gallery/rabbit-hole/index) explores the idea of [Wikipedia rabbit holes](https://en.wikipedia.org/wiki/Wiki_rabbit_hole). You start on one Wikipedia article, and have to click through the links to get to a goal article. This game got 13th place in the theme category!

[![The Rabbit Hole](/blog/images/ludum-memories/rabbit-hole.png)](/gallery/rabbit-hole/index)

You can play in your browser [here](/gallery/rabbit-hole/index), and read more about it [here](/blog/ludum-dare-48).

---

Thank you for taking a trip down memory lane with me. Thinking back on these games was surprisingly bittersweet. Each one gives me a window into my life at the time, remembering where I was living and what I was going through.

If Ludum Dare sounds fun, you should consider participating! Find out when the next one is on the [Ludum Dare website](https://ldjam.com/)!