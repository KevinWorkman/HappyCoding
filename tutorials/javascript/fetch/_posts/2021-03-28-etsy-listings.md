---
title: Etsy API
layout: post
thumbnail: /tutorials/javascript/images/etsy-listings-2.png
tagline: Use the fetch function to get data from an API.
sort-key: 100
meta-title: Etsy Listings - JavaScript Example
meta-description: Use the fetch function to get data from an API.
meta-image: /tutorials/javascript/images/etsy-listings-3.png
tags: [example, html, javascript, fetch]
previousPost: /tutorials/javascript/fetch
redirect_from: /examples/javascript/etsy-listings
discourseEmbedUrl: /examples/javascript/etsy-listings
---


{% include youtube-embed.html slug="81qy8BTIj5M" %}

---


This code uses the [fetch()](/tutorials/javascript/fetch) function to get the JSON from [https://happycoding.io/api/etsy-listings.json](https://happycoding.io/api/etsy-listings.json) and then builds some HTML thumbnails from the data.

```javascript
async function getEtsyListings() {
  const containerDiv = document.getElementById('etsy-listings');

  const response = await fetch('https://happycoding.io/api/etsy-listings.json');
  const listings = await response.json();

  const indexes = [];
  while (indexes.length < 6) {
    const index = Math.floor(Math.random() * listings.length);
    if (!indexes.includes(index)) {
      indexes.push(index);
    }
  }

  for (const index of indexes) {
    const listing = listings[index];
    containerDiv.appendChild(buildEtsyThumbnail(listing));
  }
}

function buildEtsyThumbnail(listing) {
  const div = document.createElement('div');
  div.classList.add('etsy-thumbnail');
  div.innerHTML += `<a href="${listing.url}"><img src="${listing.imageSmallUrl}" /></a>`;
  div.innerHTML += `<a href="${listing.url}">${listing.title}</a>`;
  return div;
}
```

![etsy listings](/tutorials/javascript/images/etsy-listings-1.png)

{% include codepen-new.html slug-hash="abpZPEO" height="500" %}

# Remix Ideas

- If you have your own Etsy store, use the [Etsy API](https://www.etsy.com/developers/documentation/getting_started/api_basics) to build links to your own listings.
- Find another JSON API and use the `fetch()` function to get data from it, and then build a webpage based on that data.
