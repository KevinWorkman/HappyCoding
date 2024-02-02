---
layout: left-and-right-navs
title: Blog
meta-title: Happy Coding Blog
meta-description: Blogs about Happy Coding and random stuff I'm thinking about.
thumbnail: /images/logo-800x400.png
meta-image: /images/logo-800x400.png
---

<style>
.blog-thumbnail{
  width: 600px;
}
</style>

# Happy Blogging

Welcome to the Happy Coding blog!

---

# Latest Blog Post

{% for post in site.categories.blog limit:1 %}
<div>
  <a href="{{ post.url }}" title="{{ post.title }}">
    <h2>{{ post.title }} - {{ post.date | date: "%B %-d, %Y" }}</h2>
    {% if post.meta-image %}
      <img class="blog-thumbnail" src="{{ post.meta-image }}" />
    {% endif %}
  </a>
  <p>{{ post.meta-description }}</p>
  <p>(<a href="{{ post.url }}">read more</a>)</p>
</div>
{% endfor %}

---

# Favorite Blog Posts

Some of my favorite blog posts.

<div class="thumbnail-link-container">
{% for post in site.categories.blog %}
  {% if post.tags contains "favorite" %}
    {% include url-thumbnail.html url=post.url showDate=true %}
  {% endif %}
{% endfor %}
</div>

---

# Personal Blog Posts

Random ramblings about random topics I've found interesting.

<div class="thumbnail-link-container">
{% for post in site.categories.blog %}
  {% if post.tags contains "personal" %}
    {% include url-thumbnail.html url=post.url showDate=true %}
  {% endif %}
{% endfor %}
</div>

---

# Dev Logs

Blog posts describing various projects I've worked on.

<div class="thumbnail-link-container">
{% for post in site.categories.blog %}
  {% if post.tags contains "dev-log" %}
    {% include url-thumbnail.html url=post.url showDate=true %}
  {% endif %}
{% endfor %}
</div>

---

# New Years

Every year I reflect on the state of Happy Coding.

<div class="thumbnail-link-container">
{% for post in site.categories.blog %}
  {% if post.tags contains "new-year" %}
    {% include url-thumbnail.html url=post.url showDate=true %}
  {% endif %}
{% endfor %}
</div>

---

# Site Updates

Blog posts announcing new features.

<div class="thumbnail-link-container">
{% for post in site.categories.blog %}
  {% if post.tags contains "site-update" %}
    {% include url-thumbnail.html url=post.url showDate=true %}
  {% endif %}
{% endfor %}
</div>

---

# All Blog Posts

Every blog post I've ever written.

<div class="thumbnail-link-container">
{% for post in site.categories.blog %}
  {% include url-thumbnail.html url=post.url showDate=true %}
{% endfor %}
</div>
