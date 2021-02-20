---
layout: tutorial
title: GitHub Pages
thumbnail: /tutorials/html/images/github-pages-8.png
tagline: Create your own webpage using GitHub Pages.
sort-key: 700
meta-title: GitHub Pages Tutorial
meta-description: Create your own webpage using GitHub Pages.
meta-image:  /tutorials/html/images/github-pages-9.png
tags: [tutorial, html, github-pages]
previousPost: /tutorials/html/github-profile-readme
---

{% include toc.md %}

[GitHub](https://github.com/) is a website that lets you post your code so you can keep it organized and share it with other people. It's a little bit like social media for coders, and it's a great way to show off your code and to see what other folks are working on.

[GitHub Pages](https://pages.github.com/) lets you take a GitHub repository and turn it into a webpage. In other words, you can use a GitHub repository to host your HTML, CSS, and JavaScript files. This tutorial walks you through the process of creating a GitHub Pages site!

I'm assuming you've already worked through the [GitHub profile README tutorial](/tutorials/html/github-profile-readme) and that you've created your first GitHub repository and practiced some HTML with your GitHub profile README. If not, go do that now and then come back!

# Create a Repository

There are two different types of GitHub Pages repositories:

**User sites** are hosted at `https://YOUR_USERNAME.github.io` and are used for things like personal homepages, portfolio pages, and other sites associated with you as a user. To create a user site GitHub Pages repository, create a repo named `YOUR_USERNAME.github.io`.

**Project sites** are hosted at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME` and are used for documentation related to a specific repo, or standalone pages. To create a project site GitHub Pages repository, create a repo with any name, and then either:

- Create a branch in that repo named `gh-pages`.
- Go to the `Settings` tab of your repo and enable GitHub Pages for the `main` branch (or any branch you want).

(There's a third type of GitHub Pages repository called an **organization site**, but you probably don't need that right now.)

For now, create a user site GitHub Pages repository by creating a repo named `YOUR_USERNAME.github.io`. When you create your repo, check the `Add a README file` box.

![GitHub repo creation](/tutorials/html/images/github-pages-1.png)

Click the `Create repository` button to create your repo!

![GitHub repo homepage](/tutorials/html/images/github-pages-2.png)

# GitHub Pages Settings

Next, go to the `Settings` tab of your repo and scroll down to the `GitHub Pages` section.

![GitHub Pages settings](/tutorials/html/images/github-pages-3.png)

Creating a repo named `YOUR_USERNAME.github.io` automatically activates the GitHub Pages feature and enables these settings. If you wanted to turn a different repo into a GitHub Pages site, this is where you'd do that!

But if you're working from a `YOUR_USERNAME.github.io` repo, you don't have to change any settings. Go back to your repo's homepage (the `Code` tab).

# Test Your URL

Right now, your GitHub Pages site is hosted at `https://YOUR_USERNAME.github.io`, but your repo only contains a single `README.md` file. To test that everything is working point your browser to `https://YOUR_USERNAME.github.io/READEME.me`. You should see something like this:

![GitHub Pages website](/tutorials/html/images/github-pages-4.png)

This is the raw content of the `README.md` file, hosted on GitHub Pages. Unlike the GitHub profile README feature, GitHub Pages does **not** convert markdown into HTML by default, which is why you see the raw markdown in your browser.

# Add an HTML File

Next, follow the flow you learned in the [GitHub profile README tutorial](/tutorials/html/github-profile-readme) to add an `index.html` file to your repo.

1. Clone your repo. You can use [GitHub Desktop](https://desktop.github.com/) or the [git](https://git-scm.com/) command line tool.

2. Create an `index.html` file containing some HTML content and save it to the local copy of your repo. You can use any text editor to do this step.

   Here's some HTML content to start with.

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>My GitHub Pages Site</title>
     </head>
     <body>
       <h1>Hello world!</h1>
       <p>Welcome to my GitHub Pages site!</p>
     </body>
   </html>
   ```

   Save this to your `index.html` file in your repo, right next to your `README.md` file.

3. Add, commit, and push your `index.html` file. Again, you can use either GitHub Desktop or the git command line tool.

![GitHub Desktop](/tutorials/html/images/github-pages-5.png)

Go back to your repo in GitHub, and you should now have an `index.html` file in your repo.

![GitHub repo](/tutorials/html/images/github-pages-6.png)

# View Your HTML File

Now here's the magic part! Point your browser to `https://YOUR_USERNAME.github.io/index.html` and you'll see your HTML rendered by the browser.

![index.html webpage](/tutorials/html/images/github-pages-7.png)

The `index.html` file is also a bit magical. By default, most web servers will automatically show `index.html` if you don't specify a file. That means you can also navigate to `https://YOUR_USERNAME.github.io` without the `index.html` part to see your page!

You can send this link to your friends, add it to your [GitHub profile README](/tutorials/html/github-profile-readme), or post it in [the HappyCoding.io forum](https://forum.happycoding.io)!

# Updating Your GitHub Pages Site

Now that you have everything connected, you can update your repo whenever you want to make changes to your site. Try  these out:

- Add [HTML](/tutorials/html) to describe yourself and link to projects you've worked on.
- Add an image like a picture of yourself, of your pet, or a screenshot of what you're working on.
- Add [CSS](/tutorials/html/css) to style your webpage and make it prettier. (You can also use a theme, but writing your own CSS is a better way to understand what's happening behind the scenes!)
- Add [JavaScript](/tutorials/javascript) to make your webpage interactive.

You can make changes locally and test them before deploying them by opening the local files in your browser using `file://` URLs, and then push your changes whenever you're ready to show them to the world.

GitHub Pages is nice because it means your repo and your live site are always in sync. Whenever you update your repo, GitHub Pages automatically updates your live site. Happy Coding itself is built using GitHub Pages!

Have fun making your GitHub Pages site, and don't be afraid to get creative! And make sure to post a link in [the HappyCoding.io forum](https://forum.happycoding.io) so we can check it out!

# Learn More

- [About GitHub Pages](https://docs.github.com/en/github/working-with-github-pages/about-github-pages)
- [Creating a GitHub Pages site](https://docs.github.com/en/github/working-with-github-pages/creating-a-github-pages-site)
- [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site)
