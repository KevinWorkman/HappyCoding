---
title: Washington DC Tour
layout: tutorial
thumbnail: /examples/javascript/libraries/images/washington-dc-tour-1.png
tagline: Take a tour of my favorite Washington DC places!
sort-key: 100
meta-title: Washington DC Tour
meta-description: Take a tour of my favorite Washington DC places!
meta-image: /examples/javascript/libraries/images/washington-dc-tour-2.png
tags: [example, javascript, libraries, maps]
---

<style>
  #map{
    width:500px;
    height:500px;
    float: left;
  }

  #info{
    width: 400px;
    margin-left: 520px;
    text-align:center;
    border: thin solid black;
  }
  
  .container{
    min-width: 970px;
  }
</style>


<div id="map"></div>
<div id="info">
  <h1 id="title"></h1>
  <p id="description">Click a marker for more info!</p>
</div>
<div style="clear:both; margin-bottom:50px;"></div>

This example uses the [Google Maps JavaScript library](https://developers.google.com/maps/documentation/javascript/tutorial) to create a tour of some of my favorite places in Washington DC. If you ever visit, check them out!

Here's the source code that created this map:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Washington DC Tour</title>
  <script src="http://maps.googleapis.com/maps/api/js"></script>
  <script>
    var map;

    var places = [
      {lat: 38.8893, lng: -77.0504,
        title: "Back of Lincoln Memorial",
        description: "Everybody sees the front of the Lincoln Memorial and goes inside to see Abraham Lincoln. But go around back for a cool place to watch the sunset over the Potomac."},
      {lat: 38.8924, lng: -77.0484,
        title: "Albert Einstein Memorial",
        description: "This is right next to the Lincoln Memorial, but nobody seems to know about it. It's a giant Albert Einstein reading a book. Pretty cool."},
      {lat: 38.8651, lng: -77.0391,
        title: "Gravelly Point Park",
        description: "A short bike ride (or a long walk) from DC, come here to watch the planes land."},
      {lat: 38.9044, lng: -77.0706,
        title: "Capital Crescent Trail",
        description: "This point is just the beginning (or end) of the trail, but it goes all the way from Silver Spring to Georgetown, and connects to a bunch of other bike trails."},
      {lat: 38.8724, lng: -77.0421,
        title: "Mount Vernon Trail",
        description: "This is just a random point on the Mount Vernon Trail, which goes from Arlington to Mount Vernon and connects to a bunch of other bike trails."},
      {lat: 38.8997, lng: -77.0217,
        title: "Chinatown",
        description: "I always thought of this as the Times Square of DC, and it has a bunch of food and bars. I love it here at night."},
      {lat: 38.8978, lng: -77.0231,
        title: "Art and Portrait Museums",
        description: "This is my favorite museum(s). It's free and usually not crowded with millions of screaming jam hand kids. Find the stairs that take you to the top floor, and that's my favorite room in DC. Turn left and check out the modern art section."},
      {lat: 38.9103, lng: -76.9675,
        title: "National Arboretum",
        description: "It's a huge park with a bunch of trees and walking trails. Getting here can be annoying, which means it's never crowded."},
      {lat: 38.8888, lng: -77.0444,
        title: "These Benches",
        description: "I don't know why, but the path between the Lincoln and WW2 memorials is my favorite place in DC. Sit on these benches and do some people watching."},
      {lat: 38.8967, lng: -77.0262,
        title: "House Where Lincoln Died",
        description: "This isn't a museum. It's just a room you walk into. It's free and takes 30 seconds, but it really stuck with me. Then notice there's a kitchy Lincoln's Waffles right next door, all in the shadow of the FBI building. Very DC."}
    ];
  
    function createMap() {
      var element = document.getElementById('map');
    
      var mapOptions = {
        center: {lat: 38.8899, lng: -77.0192},
        zoom: 12,
        mapTypeId: 'hybrid'
      };
    
      map = new google.maps.Map(element, mapOptions);
      
      for(var i = 0; i < places.length; i++){
        addPlace(places[i]);
      }
    }
    
    function addPlace(place){
      var marker = new google.maps.Marker({
        position: place,
        map: map
      });
      
      marker.addListener('click', function() {
        document.getElementById("title").innerHTML = place.title;
        document.getElementById("description").innerHTML = place.description;
      });
    }
  </script>
  
  <style>
    #map{
      width:500px;
      height:500px;
      float: left;
    }
    
    #info{
      width: 400px;
      margin-left: 520px;
      text-align:center;
      border: thin solid black;
    }
  </style>

</head>
<body onload="createMap()">
  <div id="map"></div>
  <div id="info">
    <h1 id="title"></h1>
    <p id="description">Click a marker for more info!</p>
  </div>
  
</body>
</html>
```

First I load the Google Maps JavaScript library, and then I create an array of object literals that contain `lat`, `lng`, `title`, and `description` fields. I create the map, and then I loop over that array to add a marker for each place.

Check out this line of code:

```javascript
var marker = new google.maps.Marker({
  position: place,
  map: map
});
```

Notice that I pass the `place` directly into the `Marker` constructor. This is because my place objects all have a `lat` and a `lng` field, which means they can work as positions! This is an example of **duck typing** that we talked about in the [Creating JavaScript Objects](/tutorials/javascript/creating-objects) tutorial.

I then add a click listener to each marker, so when the user clicks I update the title and description elements based on what's in the place object. Enjoy the tour!

## Tweak Ideas

- Make a tour of your own town.
- Add pictures of each place!
- Instead of tossing markers on a map, create an itinerary and a walking (or driving) path that you show on the map.
- You could also work in street view, 45 degree tilt, or other Google Maps features.

<script src="http://maps.googleapis.com/maps/api/js"></script>
<script>

  var map;

  var places = [
    {lat: 38.8893, lng: -77.0504,
      title: "Back of Lincoln Memorial",
      description: "Everybody sees the front of the Lincoln Memorial and goes inside to see Abraham Lincoln. But go around back for a cool place to watch the sunset over the Potomac."},
    {lat: 38.8924, lng: -77.0484,
      title: "Albert Einstein Memorial",
      description: "This is right next to the Lincoln Memorial, but nobody seems to know about it. It's a giant Albert Einstein reading a book. Pretty cool."},
    {lat: 38.8651, lng: -77.0391,
      title: "Gravelly Point Park",
      description: "A short bike ride (or a long walk) from DC, come here to watch the planes land."},
    {lat: 38.9044, lng: -77.0706,
      title: "Capital Crescent Trail",
      description: "This point is just the beginning (or end) of the trail, but it goes all the way from Silver Spring to Georgetown, and connects to a bunch of other bike trails."},
    {lat: 38.8724, lng: -77.0421,
      title: "Mount Vernon Trail",
      description: "This is just a random point on the Mount Vernon Trail, which goes from Arlington to Mount Vernon and connects to a bunch of other bike trails."},
    {lat: 38.8997, lng: -77.0217,
      title: "Chinatown",
      description: "I always thought of this as the Times Square of DC, and it has a bunch of food and bars. I love it here at night."},
    {lat: 38.8978, lng: -77.0231,
      title: "Art and Portrait Museums",
      description: "This is my favorite museum(s). It's free and usually not crowded with millions of screaming jam hand kids. Find the stairs that take you to the top floor, and that's my favorite room in DC. Turn left and check out the modern art section."},
    {lat: 38.9103, lng: -76.9675,
      title: "National Arboretum",
      description: "It's a huge park with a bunch of trees and walking trails. Getting here can be annoying, which means it's never crowded."},
    {lat: 38.8888, lng: -77.0444,
      title: "These Benches",
      description: "I don't know why, but the path between the Lincoln and WW2 memorials is my favorite place in DC. Sit on these benches and do some people watching."},
    {lat: 38.8967, lng: -77.0262,
      title: "House Where Lincoln Died",
      description: "This isn't a museum. It's just a room you walk into. It's free and takes 30 seconds, but it really stuck with me. Then notice there's a kitchy Lincoln's Waffles right next door, all in the shadow of the FBI building. Very DC."}
  ];

  var element = document.getElementById('map');

  var mapOptions = {
    center: {lat: 38.8899, lng: -77.0192},
    zoom: 12,
    mapTypeId: 'hybrid'
  };

  map = new google.maps.Map(element, mapOptions);

  for(var i = 0; i < places.length; i++){
    addPlace(places[i]);
  }

  function addPlace(place){
    var marker = new google.maps.Marker({
      position: place,
      map: map
    });

    marker.addListener('click', function() {
      document.getElementById("title").innerHTML = place.title;
      document.getElementById("description").innerHTML = place.description;    
    });
  }
</script>