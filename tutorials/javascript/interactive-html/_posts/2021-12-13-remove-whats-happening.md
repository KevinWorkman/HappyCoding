---
title: Remove What's Happening
layout: tutorial
thumbnail: /images/logo-800x400.png
tagline: Remove clickbait from the internet.
sort-key: 130
meta-title: Remove What's Happening from Twitter - JavaScript Example
meta-description: Remove clickbait from the internet.
meta-image: /images/logo-800x400.png
tags: [example, html, javascript]
previousPost: /tutorials/javascript/interactive-html
redirect_from: /examples/javascript/remove-whats-happening
discourseEmbedUrl: /examples/javascript/remove-whats-happening
---

{% include youtube-embed.html slug="nj3Hij5LUsg" %}

---

This line of code finds the "What's happening" section of Twitter and removes it from the page:

```
javascript:document.querySelector('[aria-label="Timeline: Trending now"]').remove();
```

You can drag this link to your browser's bookmarks bar to create a bookmarklet:

<a href="javascript:document.querySelector('[aria-label=&quot;Timeline: Trending now&quot;]').remove();">
  What's not happening
</a>

Then when you're on Twitter, click that bookmarklet to get rid of the "What's happening" section.

# Remix Ideas

- Modify the code to remove clickbait on other sites.
- Remove any tweets that contain annoying phrases like "buckle up".
- Replace phrases like "playing devil's advocate" with "being a jerk".
