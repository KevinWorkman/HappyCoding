---
layout: post
title: GitHub Desktop
thumbnail: /tutorials/html/images/github-desktop-1.png
tagline: Work with GitHub files on your computer.
sort-key: 650
meta-title: GitHub Desktop
meta-description: Work with GitHub files on your computer.
meta-image:  /tutorials/html/images/github-desktop-1.png
tags: [tutorial, html, github-pages]
previousPost: /tutorials/html/github-profile-readme
nextPost: /tutorials/html/github-pages
updated: 2024-11-03
forumExcerpt: I posted a new article about GitHub Desktop. This ties into a bunch of other tuts about GitHub and web development.
---

{% include youtube-embed.html slug="T03YpoGpt4g" %}

---

{% include toc.md %}

By now, you've created a GitHub repository, and you've edited files in your repo using GitHub's web editor.

That works fine for small projects, but as you start working with more files, you'll likely want to work with them on your own computer.

# GitHub Desktop

[GitHub Desktop](https://desktop.github.com/) is an application that lets you store your files in GitHub and work with them locally, without needing to know anything about Git or the command line.

Download GitHub Desktop from the [GitHub Desktop page](https://desktop.github.com). Install it, open it, and login with your GitHub username and password.

# Clone Your Repo

Back in GitHub's webpage, navigate to your GitHub profile README repository's homepage.

Clone your repo by clicking the **Code** button and then the **Open with GitHub Desktop** option. That should automatically open GitHub Desktop, and then click the **Clone** button to download your repo to your computer.

![Open GitHub Desktop](/tutorials/html/images/github-profile-readme-4.png)

![GitHub Desktop](/tutorials/html/images/github-profile-readme-5.png)

This downloads a copy of your repo onto your computer, so you can work with them locally.

# Modify a File

Now that your `README.md` file is on your computer, you can use your favorite text editor to modify it.

You can edit your `README.md` file using any text editor. You can use whatever text editor came with your computer, like [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) on Windows or [TextEdit](https://en.wikipedia.org/wiki/TextEdit) on Mac.

If you want additional features, you can download a [text editor](https://en.wikipedia.org/wiki/List_of_text_editors) like [Atom](https://atom.io/) or [Notepad++](https://notepad-plus-plus.org/). But make sure you are **not** using a word processor like Microsoft Word, because it’ll try to add its own formatting to your text.

Don't stress out too much about finding the exactly correct text editor. Use whatever came with your computer for now, and you can always try a few text editors out and see which one you like the best later.

Open your `README.md` file in your text editor, change its contents, and then save the file.

# Upload Your Changes

Save your `README.md` file, and then open GitHub Desktop. You should see your changes, like this:

![GitHub Desktop add changes](/tutorials/html/images/github-profile-readme-6.png)

To upload your changes, you need to do three things:

1. **Add** your changes by selecting the checkbox next to the `README.md` file.
2. **Commit** your changes by typing a message in the text box and then clicking the `Commit to main` button.
3. **Push** your changes by clicking the `Push origin` button in the upper-right corner.

![GitHub Desktop push changes](/tutorials/html/images/github-profile-readme-7.png)

Now you should see your changes in GitHub, both in your repo and on your profile!

![GitHub profile](/tutorials/html/images/github-profile-readme-8.png)

Congratulations, now you know how to  clone a repo, make changes to the files in that repo, and then upload those changes back to the repo!

# Next Steps

Right now, it might not be obvious what the benefit of GitHub Desktop is over the web editor. But as your projects become more complex, being able to edit your files locally and see your changes immediately is very handy!

Next, you can start creating your own webpages using [GitHub Pages](/tutorials/html/github-pages)!
