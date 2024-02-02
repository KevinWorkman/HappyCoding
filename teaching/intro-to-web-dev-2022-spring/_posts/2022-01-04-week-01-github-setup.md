---
layout: left-and-right-navs
title: GitHub Setup
thumbnail: /teaching/intro-to-web-dev-2022-spring/images/week-01-setup-and-html/github-logo.png
tagline: Set up GitHub and get ready to code!
sort-key: 110
meta-title: GitHub Setup - Intro to Web Dev Week 01
meta-description: Set up GitHub and get ready to code!
meta-image: /teaching/intro-to-web-dev-2022-spring/images/week-01-setup-and-html/github-logo.png
hide-video-icon: true
tags: [teaching]
---

# GitHub Setup

{% include toc.md %}

# GitHub

[GitHub](https://github.com) is a website that lets you post your code so you can keep it organized and share it with other people. It’s a little bit like social media for coders, and it’s a great way to show off your code and to see what other folks are working on.

We'll be using GitHub to share code with each other. Before you get started, [sign up for a GitHub account](https://github.com/join).

---

{% include youtube-embed.html slug="hXZW0PEYYVk" %}

---

## Git

[Git](https://git-scm.com) is a tool that lets you store your files so you can work from multiple computers, or with other people. It’s commonly used by people working on code projects together, since it lets everybody work with the same files. It’s also handy when you’re working on your own, because it lets you track your changes over time.

Git is a **version control system** which is a fancy way of saying that Git helps you track different versions of files. If you’ve ever written a paper and then saved a file called `my-paper-final.txt` and then realized you needed to change it, so you saved a file called `my-paper-final-2.txt` and then made even more changes, eventually saving a file called `my-paper-final-really-final-this-time-3.txt`, then that’s another kind of version control system. Git is a way of automating that.

We won't use Git directly in this class, but I’m mentioning Git because GitHub uses it behind the scenes.

# Fork the Class's Project Repository

GitHub organizes code into [repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories), or repos, which you can think of as a directory full of files.

The [Intro to Web Dev repo](https://github.com/KevinWorkman/intro-to-web-dev) contains starter code and instructions for each week's project.

Make a copy of the repo (also called [forking](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) the repo) by clicking the `Fork` button in the upper-right corner of the [Intro to Web Dev repo](https://github.com/KevinWorkman/intro-to-web-dev).

![fork button](/teaching/intro-to-web-dev-2022-spring/images/week-01-setup-and-html/fork-1.png)

![forking repo](/teaching/intro-to-web-dev-2022-spring/images/week-01-setup-and-html/fork-2.gif)

This should create another repo called `YourName/intro-to-web-dev`.

# GitHub Pages

[GitHub Pages](https://pages.github.com) lets you take a GitHub repository and turn it into a website.

Enable GitHub Pages for your project repo. Starting at your repo's homepage, go to the `Settings` tab, and then select `Pages` in the left nav.

In the `Source` section, select the `main` branch. Then click the `Save` button.

![GitHub Pages setting](/teaching/intro-to-web-dev-2022-spring/images/week-01-setup-and-html/pages-1.png)

![GitHub Pages process](/teaching/intro-to-web-dev-2022-spring/images/week-01-setup-and-html/pages-2.gif)

![GitHub Pages result](/teaching/intro-to-web-dev-2022-spring/images/week-01-setup-and-html/pages-3.png)

When you're done, GitHub will give you a URL like `YourUsername.github.io/intro-to-web-dev`. This URL won't work yet, but remember it because you'll need it in a minute.

---

When you're finished, continue working through week 1:

{% include url-thumbnail.html url="/teaching/intro-to-web-dev-2022-spring/week-01-setup-and-html" %}