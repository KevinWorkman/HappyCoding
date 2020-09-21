---
layout: tutorial
title: Google Maps Tour
thumbnail: /examples/javascript/libraries/images/washington-dc-tour-1.png
tagline: Take a tour of Google's campus.
sort-key: 600
meta-title: Google Maps Tour Example
meta-description: Take a tour of Google's campus using the Google Maps JavaScript library.
meta-image: /examples/javascript/libraries/images/washington-dc-tour-2.png
previousPost: /examples/google-cloud/
tags: [example, javascript, google-cloud, maps]
---

This project uses the Google Maps JavaScript library to create a map that shows various landmarks around Google.

View the code for this project [here](https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/maps-google-tour).

Download the code as a `.zip` from DownGit [here](https://downgit.github.io/#/home?url=https://github.com/KevinWorkman/HappyCoding/tree/gh-pages/examples/google-cloud/google-cloud-example-projects/maps-google-tour).

![google tour map](/examples/google-cloud/google-cloud-example-projects/maps-google-tour/screenshot.png)

**index.html**

 `index.html` is an HTML file that contains JavaScript that creates a map using the Google Maps JavaScript library.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Google Tour</title>
  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
  <script>

    /** Creates a map that shows landmarks around Google. */
    function createMap(){

      const map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.422403, lng: -122.088073},
        zoom: 15
      });

      addLandmark(map, 37.423829, -122.092154, 'Google West Campus', 'Google West Campus is home to YouTube and Maps.')
      addLandmark(map, 37.421903, -122.084674, 'Stan the T-Rex', 'This is Stan, the T-Rex statue.')
      addLandmark(map, 37.420919, -122.086619, 'Permanente Creek Trail', 'Permanente Creek Trail connects Google to a system of bike trails.');
    }

    /** Adds a marker that shows an info window when clicked. */
    function addLandmark(map, lat, lng, title, description){

      const marker = new google.maps.Marker({
        position: {lat: lat, lng: lng},
        map: map,
        title: title
      });

      const infoWindow = new google.maps.InfoWindow({
        content: description
      });
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }
  </script>
  <style>
    #map{
      width: 500px;
      height: 500px;
      border: thin solid black;
    }
  </style>
</head>
<body onload="createMap();">
  <h1>Google Tour</h1>
  <p>Here are a few of my favorite places at Google!</p>
  <div id="map"></div>
</body>
</html>
```

Change `YOUR_API_KEY` to your actual API key and then open the file in your browser. You should see this:

![google tour map](/examples/google-cloud/google-cloud-example-projects/maps-google-tour/screenshot.png)

Learn more in these tutorials:

{% include url-thumbnail.html url="/tutorials/google-cloud/maps" %}
{% include url-thumbnail.html url="/tutorials/javascript/" %}