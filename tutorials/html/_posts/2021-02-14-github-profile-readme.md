---
layout: tutorial
title: GitHub Profile README
thumbnail: /tutorials/html/images/github-profile-readme-11.png
tagline: Make your GitHub profile your own.
sort-key: 600
meta-title: How to Create a GitHub Profile README
meta-description: Learn how to make your GitHub profile your own using a GitHub Profile README!
meta-image:  /tutorials/html/images/github-profile-readme-12.png
tags: [tutorial, html, github-pages]
previousPost: /tutorials/html/
nextPost: /tutorials/html/github-pages
---

{% include youtube-embed.html slug="_G2gTWtyonQ" %}

---

{% include toc.md %}

[GitHub](https://github.com/) is a website that lets you post your code so you can keep it organized and share it with other people. It's a little bit like social media for coders, and it's a great way to show off your code and to see what other folks are working on.

[GitHub profile READMEs](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme) let you customize your GitHub profile and make it your own. They're also a great way to introduce yourself to GitHub and HTML!

This tutorial walks you through the process of creating a GitHub profile README, and ends on some next steps for creating your own webpage using GitHub Pages!

Before you get started, [sign up for a GitHub account](https://github.com/join).

# Git

[Git](https://git-scm.com/) is a tool that lets you store your files so you can work from multiple computers, or with other people. It's commonly used by people working on code projects together, since it lets everybody work with the same files. It's also handy when you're working on your own, because it lets you track your changes over time.

Git is a **version control system** which is a fancy way of saying that Git helps you track different versions of files. If you've ever written a paper and then saved a file called `my-paper-final.txt` and then realized you needed to change it, so you saved a file called `my-paper-final-2.txt` and then made even more changes, eventually saving a file called `my-paper-final-really-final-this-time-3.txt`, then that's another kind of version control system. Git is a way of automating that.

I'm mentioning Git because GitHub uses it behind the scenes. You can [download the command line version of Git](https://git-scm.com/downloads), but if you're new to Git and GitHub, it might be easier to use GitHub Desktop.

# GitHub Desktop

[GitHub Desktop](https://desktop.github.com/) is an application that lets you store your files in GitHub, without needing to know anything about Git or the command line.

I personally use GitHub Desktop for everything I do by myself on GitHub. For group projects I usually use the command line, but for now I would recommend using GitHub Desktop.

You can use whichever approach you're most comfortable with: GitHub Desktop or Git through the command line. I recommend using GitHub Desktop for now, but I'll include instructions for both below!

# Create a Repo

GitHub uses the concept of **repositories** to organize your files. A repository (also called a **repo**) is a top-level directory that contains your files and folders. A repo also gives you control over who can make changes to your files, as well as ways to track feature requests and bug reports, and a bunch of other features that are useful for working on code with a group.

Eventually you might create a repo that holds the code you've written in [p5.js](/tutorials/p5js) or [Processing](/tutorials/processing), but for now let's focus on creating a repo that contains your profile README file.

GitHub profile READMEs require a repo with a special name: your username! For example, my GitHub username is `KevinWorkman`, so I would create a repo named `KevinWorkman`.

[Create a new repo](https://github.com/new) with a name that matches your GitHub username. Make sure your new repo is public, and check the `Add README file` box. You should see something like this:

![GitHub repo creation screen](/tutorials/html/images/github-profile-readme-1.png)

Click the `Create repository` button, and you should see a new repo with a single file in it:

![GitHub repo](/tutorials/html/images/github-profile-readme-2.png)

And here's the magic part: whatever is in that file will show up in your GitHub profile!

![GitHub profile](/tutorials/html/images/github-profile-readme-3.png)

# Clone Your Repo

You can edit your profile README file directly in GitHub in your browser, but one of the things I love about the profile README feature is that it's a good way to practice the whole GitHub process, so let's do that!

Instead of editing your README file in the browser, clone your repo by clicking the `Code` button and then the `Open with GitHub Desktop` option. That should automatically open GitHub Desktop, and then click the `Clone` button to download your repo to your computer.

![Open GitHub Desktop](/tutorials/html/images/github-profile-readme-4.png)

![GitHub Desktop](/tutorials/html/images/github-profile-readme-5.png)

If you're using the command line instead of GitHub Desktop, run this command to clone your repo:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

# Modify Your README File

Now that your `README.md` file is on your computer, you can use your favorite text editor to modify it.

You can edit your `README.md` file using any text editor. You can use whatever text editor came with your computer, like [Notepad](https://en.wikipedia.org/wiki/Microsoft_Notepad) on Windows or [TextEdit](https://en.wikipedia.org/wiki/TextEdit) on Mac.

If you want additional features, you can download a [text editor](https://en.wikipedia.org/wiki/List_of_text_editors) like [Atom](https://atom.io/) or [Notepad++](https://notepad-plus-plus.org/). But make sure you are **not** using a word processor like Microsoft Word, because it’ll try to add its own formatting to your text.

Don’t stress out too much about finding the exactly correct text editor. Use whatever came with your computer for now, and you can always try a few text editors out and see which one you like the best later.

Open your `README.md` file in your text editor and change its contents to describe yourself. Here's what I might start with:

```markdown
# Hello World!

My name is Kevin, and here are a few things I'm working on:

- Happy Coding
- Software Product Sprint
- Google Maps

I **love** nerding out about creative coding, so don't hesitate to reach out!
```

Don't worry too much about making this perfect. You can always change it later. For now, focus on making a tiny change so you can test out uploading your changes!

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

If you're using the command line instead of GitHub Desktop, you'd run these commands:

```bash
git add README.md
git commit README.md "introducing myself in my profile READEME file"
git push origin main
```

Congratulations, you've practiced the fundamentals of using GitHub! Now you know how to  clone a repo, make changes to the files in that repo, and then upload those changes back to the repo!

# Markdown

At this point you might be wondering what the `.md` part of the `README.md` file means, or why the `**love**` in my file is rendered as bold in my profile. The answer to both is that `README.md` is a [Markdown](https://en.wikipedia.org/wiki/Markdown) file!

Markdown is a way to format text that is then converted into HTML. It's used on sites like GitHub, Stack Overflow, and [the Happy Coding forum](https://forum.happycoding.io)!

For example, `**this**` Markdown is converted to `<strong>this</strong>` HTML, which your browser renders as bold text. My `README.md` file above also contains `# Hello World` which is rendered as an `<h1>` heading, and a list specified by multiple lines that start with a `-` dash.

You can learn more about Markdown using guides like [Basic writing and formatting syntax](https://docs.github.com/en/github/writing-on-github/basic-writing-and-formatting-syntax) and [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

Try using markdown to add a link to your Instagram feed, or to your favorite Spotify playlist. Try adding a picture of yourself or a screenshot of what you're working on! Don't forget that google is your friend: try googling "markdown images" for more resources. Upload your changes to GitHub and double-check that they work on your profile!

# HTML

Markdown is nice if you have a lot of text and you don't want to clutter it up with HTML tags. I write all of Happy Coding's posts (including this one) in Markdown! But if you want more control over your final output, you'll probably need to use HTML.

Markdown files are converted to HTML, which means you can also put HTML directly in a Markdown file. The converter will see that it's already HTML and will leave it alone.

So if you're new to HTML, your GitHub profile README is a great place to practice! For example, here's the HTML I might use:

```html
<h1 align="center">Hello World!</h1>

<p>My name is Kevin, and here are a few things I'm working on:</p>

<ul>
  <li>Happy Coding</li>
  <li>Software Product Sprint</li>
  <li>Google Maps</li>
</ul>

<hr>

<p>I <strong>love</strong> nerding out about creative coding, so don't hesitate to reach out!</p>
```

In general, Markdown itself doesn't have any rules about what you can or can't include in the file. But GitHub profile READMEs use [GitHub Flavored Markdown](https://github.github.com/gfm/), which has its own restrictions. Specifically:

- You can use many HTML tags, but not all of them. For example, `<p>`, `<ul>`, and `<img>` are allowed, but `<input>`, `<textarea>`, and `<button>` are not. Those are just examples, so make sure to double check whether GitHub Flavored Markdown supports the tag you're trying to use!
- You can't use CSS at all! You can sometimes rely on old tricks (like the `align` attribute in my above example), but you can't style your content like you could with a full webpage. If you see some fancy styling in a GitHub profile README, chances are it's actually an image!
- You can't use JavaScript at all!

GitHub profile READMEs are a great way to dip your toes into HTML, and if you're curious, you can read more in the [HTML tutorials](/tutorials/html).

# Next Steps

You now know everything you need to make your GitHub profile README your own! Create a repo, clone it, modify your `README.md` file, and then upload it to see the changes in your GitHub profile!

Check out the [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme) repo for a ton of examples of what other folks have done with their GitHub profile READMEs.

Some of those examples get pretty fancy, using things like [GitHub actions](https://docs.github.com/en/actions) to automatically update the `README.md` file, or [server-side coding](/tutorials/java-server/) to make interactive links and images. But don't let that intimidate you! Start with customizing your profile, and branch out from there!

As you get more familiar with GitHub and [HTML](/tutorials/html/), you might want to branch out into creating your own webpage using [GitHub Pages](/tutorials/html/github-pages). You might also create separate repos for your code projects.

Whatever you decide to do next, please post a link in [the Happy Coding forum](https://forum.happycoding.io) - I'd love to see what you're working on!