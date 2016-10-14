---
layout: default
---

Pages:

{% for page in site.pages %}
- [{{page.title}} - {{page.url}}]({{page.url}})
{% endfor %}

Posts:

{% for post in site.posts %}
- [{{post.title}} - {{post.url}}]({{post.url}})
{% endfor %}