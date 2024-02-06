---
title: Google Cloud Tutorials
layout: single-content-section
thumbnail: /tutorials/google-cloud/images/google-cloud-icon-1.png
categories: [tutorials, java]
meta-title: Google Cloud Tutorials
meta-description: Learn how to use Google Cloud to create apps and websites!
meta-image: /tutorials/google-cloud/images/google-cloud-icon-2.png
redirect_from: /examples/google-cloud
previousPost: /tutorials/
nextPost: /tutorials/google-cloud/setup
sort-key: 700
---

# Google Cloud Tutorials

[Google Cloud](https://cloud.google.com/) is a collection of tools, libraries, frameworks, and services that allow you to run code using the power of Google's infrastructure.

Google Cloud contains a lot of really fun stuff, but it's not exactly friendly to novices. Before jumping into these tutorials, make sure you're familiar with [Java](/tutorials/java). Specifically, make sure you're comfortable with [OOP and inheritance](/tutorials/java/inheritance) and [classpath and libraries](/tutorials/java/libraries).

The full code for the examples used in these tutorials is available on [GitHub](https://github.com/KevinWorkman/GoogleCloudExamples).

These tutorials have been updated to use Java 11 and the latest Cloud SDK.

{% include tutorial-chapter.html url="/tutorials/google-cloud/setup" chapter=1 %}
{% include tutorial-chapter.html url="/tutorials/google-cloud/app-engine" chapter=2 %}
{% include tutorial-chapter.html url="/tutorials/google-cloud/datastore" chapter=3 %}
{% include tutorial-chapter.html url="/tutorials/google-cloud/oauth-2" chapter=4 %}
{% include tutorial-chapter.html url="/tutorials/google-cloud/cloud-storage" chapter=5 %}
{% include tutorial-chapter.html url="/tutorials/google-cloud/vision" chapter=6 %}
{% include tutorial-chapter.html url="/tutorials/google-cloud/natural-language" chapter=7 %}
{% include tutorial-chapter.html url="/tutorials/google-cloud/translation" chapter=8 %}
{% include tutorial-chapter.html url="/tutorials/google-cloud/maps" chapter=9 %}

# Migrating Google Cloud from Java 8 to Java 11

Have an existing Java 8 Google Cloud project that you want to migrate to Google Cloud's Java 11 runtime? Follow this guide:

{% include tutorial-chapter.html url="/tutorials/google-cloud/migrating-to-java-11" %}

# Legacy Java 8 Tutorials

These tutorials use Java 8 and the standalone App Engine SDK, which is now deprecated. I'm leaving these for reference.

<div class="thumbnail-link-container">
{% include url-thumbnail.html url="/tutorials/google-cloud/java-8/setup" %}
{% include url-thumbnail.html url="/tutorials/google-cloud/java-8/app-engine" %}
{% include url-thumbnail.html url="/tutorials/google-cloud/java-8/datastore" %}
{% include url-thumbnail.html url="/tutorials/google-cloud/java-8/authentication" %}
{% include url-thumbnail.html url="/tutorials/google-cloud/java-8/blobstore" %}
</div>
