---
layout: tutorial
title: Google Maps Hello World
thumbnail: /examples/javascript/libraries/images/washington-dc-tour-1.png
tagline: Add a Google map to your page.
sort-key: 550
meta-title: Google Maps Hello World Example
meta-description: Add a Google map to your page using the Google Maps JavaScript library.
meta-image: /examples/javascript/libraries/images/washington-dc-tour-2.png
previousPost: /examples/google-cloud/
tags: [example, javascript, google-cloud, maps]
---

This project uses the Google Maps API to add a map to the page.

View the code for this project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/maps-hello-world).

Download the code as a `.zip` from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/maps-hello-world).

![google map](/examples/google-cloud/google-cloud-example-projects/maps-hello-world/screenshot.png)

**index.html**

 `index.html` is an HTML file that contains JavaScript that creates a map using the Google Maps JavaScript library.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Hello Google Maps</title>
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
  <script>
    function createMap(){
      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.422, lng: -122.084},
        zoom: 16
      });
    }
  </script>
  <style>
    #map {
      width: 500px;
      height: 500px;
      border: thin solid black;
    }
  </style>
</head>
<body onload="createMap();">
  <h1>Hello Google Maps</h1>
  <div id="map"></div>
  <p>This page shows a Google Map!</p>
</body>
</html>
```

Change `YOUR_API_KEY` to your actual API key and then open the file in your browser. You should see this:

![google tour map](/examples/google-cloud/google-cloud-example-projects/maps-hello-world/screenshot.png)

Learn more in these tutorials:

{% include url-thumbnail.html url="/tutorials/google-cloud/maps" %}
{% include url-thumbnail.html url="/tutorials/javascript/" %}