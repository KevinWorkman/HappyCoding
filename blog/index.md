---
layout: default
title: Happy Blogging
meta-title: Happy Blogging
meta-description: Blogs about Happy Coding and random stuff I'm thinking about.
meta-image: /examples/processing/creating-variables/images/random-jack-o-lantern-2.png
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
{% include url-thumbnail.html url="/blog/locus-of-control-learned-helplessness" %}
{% include url-thumbnail.html url="/blog/ten-years" %}
{% include url-thumbnail.html url="/blog/my-quarantine" %}
{% include url-thumbnail.html url="/blog/checking-my-privilege" %}
{% include url-thumbnail.html url="/blog/the-power-of-boredom" %}
{% include url-thumbnail.html url="/blog/hello-world" %}
</div>

---

# Personal Blog Posts

Random ramblings about random topics I've found interesting.

<div class="thumbnail-link-container">
{% include url-thumbnail.html url="/blog/locus-of-control-learned-helplessness" %}
{% include url-thumbnail.html url="/blog/my-quarantine" %}
{% include url-thumbnail.html url="/blog/black-lives-matter-to-me" %}
{% include url-thumbnail.html url="/blog/what-is-happy-coding" %}
{% include url-thumbnail.html url="/blog/subjective-side-of-code" %}
{% include url-thumbnail.html url="/blog/quadrilateral-of-creativity" %}
{% include url-thumbnail.html url="/blog/checking-my-privilege" %}
{% include url-thumbnail.html url="/blog/stack-overflow-culture-wars" %}
{% include url-thumbnail.html url="/blog/the-power-of-boredom" %}
{% include url-thumbnail.html url="/blog/when-failing-isnt-failure" %}
{% include url-thumbnail.html url="/blog/code-can-bring-us-together" %}
</div>

---

# Dev Logs

Blog posts describing various projects I've worked on.

<div class="thumbnail-link-container">
{% include url-thumbnail.html url="/blog/ludum-memories" %}
{% include url-thumbnail.html url="/blog/ludum-dare-48" %}
{% include url-thumbnail.html url="/blog/ten-years" %}
{% include url-thumbnail.html url="/blog/happy-coding-is-built-with" %}
{% include url-thumbnail.html url="/blog/google-cloud-java-11" %}
{% include url-thumbnail.html url="/blog/ludum-dare-46" %}
{% include url-thumbnail.html url="/blog/happy-arting" %}
{% include url-thumbnail.html url="/blog/100-days-of-code" %}
{% include url-thumbnail.html url="/blog/ludum-dare-and-programming-without-a-computer" %}
</div>

---

# New Years

Every year I reflect on the state of Happy Coding.

<div class="thumbnail-link-container">
{% for post in site.categories.blog %}
  {% if post.tags contains "new-year" %}
    {% include url-thumbnail.html url=post.url %}
  {% endif %}
{% endfor %}
</div>

---

# Site Updates

Blog posts announcing new features.

<div class="thumbnail-link-container">
{% include url-thumbnail.html url="/blog/p5js-tutorials" %}
{% include url-thumbnail.html url="/blog/feliz-left-nav-idad" %}
{% include url-thumbnail.html url="/blog/debootstrapification" %}
{% include url-thumbnail.html url="/blog/google-cloud-tutorials" %}
{% include url-thumbnail.html url="/blog/android-libgdx-tutorials" %}
{% include url-thumbnail.html url="/blog/server-tutorials" %}
{% include url-thumbnail.html url="/blog/new-nav-font" %}
{% include url-thumbnail.html url="/blog/java-tutorials" %}
{% include url-thumbnail.html url="/blog/teaching-resources" %}
{% include url-thumbnail.html url="/blog/javascript-tutorials" %}
{% include url-thumbnail.html url="/blog/background-info" %}
{% include url-thumbnail.html url="/blog/tricks-and-treats-and-tags" %}
{% include url-thumbnail.html url="/blog/twitter-cards-and-open-graph" %}
{% include url-thumbnail.html url="/blog/happy-commenting" %}
{% include url-thumbnail.html url="/blog/the-codepen-is-mightier-than-the-sword" %}
{% include url-thumbnail.html url="/blog/por-ejemplo" %}
{% include url-thumbnail.html url="/blog/hello-world" %}
</div>

---

# All Blog Posts

Every blog post I've ever written.

<div class="thumbnail-link-container">
{% for post in site.categories.blog %}
  {% include url-thumbnail.html url=post.url %}
{% endfor %}
</div>