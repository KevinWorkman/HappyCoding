---
layout: default
title: Replit Setup
thumbnail: /teaching/intro-to-web-dev/images/week-01-html/replit-setup.png
tagline: Set up your environment using Replit.
sort-key: 130
meta-title: Replit Environment Setup - Intro to Web Dev Week 01
meta-description: Set up your environment using Replit.
meta-image: /teaching/intro-to-web-dev/images/week-01-html/replit-setup.png
tags: [teaching]
---

# Replit Setup

{% include toc.md %}

This guide walks you through the process of using Replit to clone your
copy of the class's project repo.

This guide is designed for computers that don't let you install programs or download files (like a Chromebook), or if you're using a shared computer. If you have a computer that does let you install programs and download files, I reocommend working through the desktop setup guide instead.

{% include youtube-embed.html slug="xxHkVSOYp94" %}

---

# Replit

[Replit](https://replit.com) is an online editor and coding environment. You can use it to edit code and test your changes out before publishing them to your live GitHub Pages site.

Before you get started, [sign up for a Replit account](https://replit.com/signup).

# Connect your GitHub

From [Replit](https://replit.com), click the `Connect GitHub` button. You'll be asked to authorize GitHub, and the default `All repositories` setting is fine. Click `Install & Authorize`.

# Clone Your Repo

Back on [Replit](https://replit.com), you should see a `GitHub repos` section. If not, try refreshing the page.

Click your `intro-to-web-dev` repo. This automatically create a new Replit project (also called a repl) that contains all of the directories and files from your repo.

# Make a Change

Now that you have a copy of your repo in a Replit project, you're going to do the following:

1. Make a change to your Replit files.
2. Test it using Replit.
3. Push your change to your repo to make it public.

Click the `index.html` file in your `intro-to-web-dev` directory to open it in the Replit editor.

In the Replit editor, find this line:

```
<p>This site contains homework projects for Intro to Web Development.</p>
```

And change it to this:

```
<p>This site contains YOUR_NAME's homework projects for Intro to Web Development.</p>
```

**Note:** The exact change doesn't really matter. The important thing is to change *something* and to test that your change shows up.

# Test in Replit

You've just changed the content of the `index.html` file. You'll learn more about HTML as you continue through this week's content, but for now you can test that your change works by opening up the `index.html` file through Replit.

Click the `Run` button at the top of Replit to open your `index.html` file in the preview tab to the right.

You should see your change in the preview!

# Upload Changes

You now have a change that works in Replit, but nobody else can see it. It's possible to use Replit itself to host public webpages, but this class is going to use GitHub Pages.

With that in mind, to make your change public, you need to upload it back to your GitHub repo. (Also called **pushing** a change.)

Find the `Version control` tab on the left side. This should show you a list of the changes you've made: probably just one change to a single file right now.

Type a message in the `What did you change?` text box. This message will be shown in GitHub, and it's usually a short sentence explaining the change. `Add my name to index.html` is fine for this change.

Click the **Commit & push** button to upload your change back to GitHub.

# Test Live

Now that you've pushed your change to GitHub, you should see your change in your repo.

And because you're using GitHub Pages, your change will automatically deploy as
a webpage that anybody can access.

Navigate to your GitHub Pages URL- it should be something like `YOUR_USERNAME.github.io/intro-to-web-dev`. You should see your change!

**Note:** GitHub Pages can take a minute or two to update.**

When you can see your change on your GitHub Pages site, congratulations! You've successfully set up your GitHub repo and your Replit coding environment.

---

When you're finished, continue working through week 1:

{% include url-thumbnail.html url="/teaching/intro-to-web-dev/week-01-html" %}