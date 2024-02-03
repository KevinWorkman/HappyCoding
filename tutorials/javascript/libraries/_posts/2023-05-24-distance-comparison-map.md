---
title: Distance Comparison Map
layout: post
thumbnail: /tutorials/javascript/libraries/images/distance-comparison-map-1.png
tagline: Compare distances on multiple maps.
sort-key: 300
meta-title: Distance Comparison Map
meta-description: Compare distances on multiple maps.
meta-image: /tutorials/javascript/libraries/images/distance-comparison-map-1.png
tags: [example, javascript, libraries, maps]
previousPost: /tutorials/javascript/libraries
---

I'm in the process of moving, and I mostly walk and bike to get around. I wanted to compare distances in my current neighborhood to distances in the place I'm moving to. I did a tab-switching between Google Maps, so I decided to build my own tool to help me visualize.

To use the tool:

1. Enter a place or address in the start and end fields of the **left** map. This sets the size of the **green** circle on both maps.
2. Enter a place or address in the start and end fields of the **right** map. This sets the size of the **blue** circle on both maps.
3. Compare the sizes of the green and blue circles. If the green circle is bigger, the left distance is larger. If the blue circle is bigger, the right distance is larger.
4. Drag the markers around to compare different distances.

<style>
  #left-nav {
    display: none;
  }

  #sections, .content {
    width: 100%;
    box-sizing: border-box;
  }

  #wrapper {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 100%;
  }

  #left-map, #right-map {
    border: thin solid black;
    width: 475px;
    height: 475px;
    margin-top: 25px;
  }

  #left-start-address, #left-end-address,
  #right-start-address, #right-end-address {
    width: 80%;
    font-size: 18px;
  }

</style>

<div id="wrapper">
  <div>
    <div id="left-map"></div>
    🏠 <input id="left-start-address"
              value="Rengstorff Park, Mountain View CA">
    <br>
    🍺 <input id="left-end-address"
              value="Computer History Museum, Mountain View CA">
  </div>

  <div>
    <div id="right-map"></div>
    🏠 <input id="right-start-address" value="College Hill, Eugene OR">
    <br>
    🍺 <input id="right-end-address" value="Level Up Arcade, Eugene OR">
  </div>
</div>

<br><br>

{% if site.data.local-keys.google-api-key %}
  {% assign key = site.data.local-keys.google-api-key %}
{% else %}
  {% assign key = site.data.live-keys.google-api-key %}
{% endif %}

<script src="https://maps.googleapis.com/maps/api/js?key={{key}}"></script>
<script>

  const geocoder = new google.maps.Geocoder();

  const leftStartAddressInput = document.getElementById('left-start-address');
  const leftEndAddressInput = document.getElementById('left-end-address');
  const rightStartAddressInput = document.getElementById('right-start-address');
  const rightEndAddressInput = document.getElementById('right-end-address');

  let leftCenterLatLng = {lat: 37.4009242, lng: -122.0968814};
  let leftEndLatLng = {lat: 37.4142744, lng: -122.077409};
  let rightCenterLatLng = {lat: 44.0308897, lng: -123.0993226};
  let rightEndLatLng = {lat: 44.0456726, lng: -123.0915337};

  const leftMap = new google.maps.Map(document.getElementById('left-map'),
      {center: leftCenterLatLng, zoom: 13});
  const rightMap = new google.maps.Map(document.getElementById('right-map'),
      {center: rightCenterLatLng, zoom: 13});

  initializeAddress(
    'distance-comparison-map-left-start-address',
    leftStartAddressInput,
    leftStartGeocodeCallback);

  initializeAddress(
    'distance-comparison-map-left-end-address',
    leftEndAddressInput,
    leftEndGeocodeCallback);

  initializeAddress(
    'distance-comparison-map-right-start-address',
    rightStartAddressInput,
    rightStartGeocodeCallback);

  initializeAddress(
    'distance-comparison-map-right-end-address',
    rightEndAddressInput,
    rightEndGeocodeCallback);

  const leftCenterMarker =
    makeMarker(leftCenterLatLng, '🏠', leftMap,
      'left-start-address', setLeftStartLatLng);

  const leftEndMarker =
    makeMarker(leftEndLatLng, '🍺', leftMap,
      'left-end-address', setLeftEndLatLng);

  const rightCenterMarker =
    makeMarker(rightCenterLatLng, '🏠', rightMap,
      'right-start-address', setRightStartLatLng);

  const rightEndMarker =
    makeMarker(rightEndLatLng, '🍺', rightMap,
      'right-end-address', setRightEndLatLng);

  const leftHomeCircle = makeCircle(leftMap, leftCenterLatLng, '#00ff00',
    haversineDistance(leftCenterLatLng, leftEndLatLng));

  const leftCompareCircle = makeCircle(leftMap, leftCenterLatLng, '#0000ff',
    haversineDistance(rightCenterLatLng, rightEndLatLng));

  const rightHomeCircle = makeCircle(rightMap, rightCenterLatLng, '#0000ff',
    haversineDistance(rightCenterLatLng, rightEndLatLng));

  const rightCompareCircle = makeCircle(rightMap, rightCenterLatLng, '#00ff00',
    haversineDistance(leftCenterLatLng, leftEndLatLng));

  leftStartAddressInput.onblur = () => {
    setCookie(
      'distance-comparison-map-left-start-address',
      leftStartAddressInput.value);
    geocoder.geocode(
      {address: leftStartAddressInput.value}, leftStartGeocodeCallback);
  };

  leftEndAddressInput.onblur = () => {
    setCookie(
      'distance-comparison-map-left-end-address',
      leftEndAddressInput.value);
    geocoder.geocode(
      {address: leftEndAddressInput.value }, leftEndGeocodeCallback);
  };

  rightStartAddressInput.onblur = () => {
    setCookie(
      'distance-comparison-map-right-start-address',
      rightStartAddressInput.value);
    geocoder.geocode(
      {address: rightStartAddressInput.value }, rightStartGeocodeCallback);
  };

  rightEndAddressInput.onblur = () => {
    setCookie(
      'distance-comparison-map-right-end-address',
      rightEndAddressInput.value);
    geocoder.geocode(
      {address: rightEndAddressInput.value }, rightEndGeocodeCallback);
  };

  function initializeAddress (cookieName, input, geocodeCallback) {
    const address = getCookie(cookieName);
    if (address) {
      input.value = address;
    }
    geocoder.geocode(
      {address},
      (results, status) => {
        geocodeCallback(results, status);
      }
    );
  }

  function latLngPrimitive(latLng){
    return {
      lat: latLng.lat(),
      lng: latLng.lng()
    };
  }

  function setLeftStartLatLng(latLng){
    leftCenterLatLng = latLngPrimitive(latLng);
  }

  function leftStartGeocodeCallback(results, status) {
    setLeftStartLatLng(results[0].geometry.location);
    setMapsFromLatLngs();
  }

  function setLeftEndLatLng(latLng){
    leftEndLatLng = latLngPrimitive(latLng);
  }

  function leftEndGeocodeCallback(results, status) {
    setLeftEndLatLng(results[0].geometry.location);
    setMapsFromLatLngs();
  }

  function setRightStartLatLng(latLng){
    rightCenterLatLng = latLngPrimitive(latLng);
  }

  function rightStartGeocodeCallback(results, status) {
    setRightStartLatLng(results[0].geometry.location);
    setMapsFromLatLngs();
  }

  function setRightEndLatLng(latLng){
    rightEndLatLng = latLngPrimitive(latLng);
  }

  function rightEndGeocodeCallback(results, status) {
    setRightEndLatLng(results[0].geometry.location);
    setMapsFromLatLngs();
  }

  function setMapsFromLatLngs(){
    leftMap.setCenter(leftCenterLatLng);
    leftCenterMarker.setPosition(leftCenterLatLng);
    leftHomeCircle.setCenter(leftCenterLatLng);
    leftCompareCircle.setCenter(leftCenterLatLng);

    leftEndMarker.setPosition(leftEndLatLng);

    const leftDistance = haversineDistance(leftCenterLatLng, leftEndLatLng);
    leftHomeCircle.setRadius(leftDistance);
    rightCompareCircle.setRadius(leftDistance);

    const leftBounds = new google.maps.LatLngBounds();
    leftBounds.union(leftHomeCircle.getBounds());
    leftBounds.union(leftCompareCircle.getBounds());
    leftMap.fitBounds(leftBounds);

    rightMap.setCenter(rightCenterLatLng);
    rightCenterMarker.setPosition(rightCenterLatLng);
    rightHomeCircle.setCenter(rightCenterLatLng);
    rightCompareCircle.setCenter(rightCenterLatLng);

    rightEndMarker.setPosition(rightEndLatLng);

    const rightDistance = haversineDistance(rightCenterLatLng, rightEndLatLng);
    rightHomeCircle.setRadius(rightDistance);
    leftCompareCircle.setRadius(rightDistance);

    const rightBounds = new google.maps.LatLngBounds();
    rightBounds.union(rightHomeCircle.getBounds());
    rightBounds.union(rightCompareCircle.getBounds());
    rightMap.fitBounds(rightBounds);
  }

  function makeMarker(position, label, map, inputId, markerMoveCallback) {
    const marker = new google.maps.Marker({
      position,
      label,
      draggable: true,
      map,
    });

    google.maps.event.addListener(marker, 'dragend', () => {
      markerMoveCallback(marker.getPosition());
      geocoder.geocode(
        {latLng: marker.getPosition()},
          (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
              document.getElementById(inputId).value =
                results[0].formatted_address;
              setCookie(
                'distance-comparison-map-' + inputId,
                results[0].formatted_address);
          }
        });
      setMapsFromLatLngs();
    });

    return marker;
  }

  function makeCircle(map, centerLatLng, color, radius) {
    return new google.maps.Circle({
      strokeColor: color,
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: 0.25,
      map: map,
      center: centerLatLng,
      radius: radius
    });
  }

  function haversineDistance(pOne, pTwo) {
    // Radius of the Earth in meters
    const R = 6371071;
    const latOneRadians = pOne.lat * (Math.PI/180);
    const latTwoRadians = pTwo.lat * (Math.PI/180);
    const difflat = latTwoRadians - latOneRadians;
    const difflon = (pTwo.lng - pOne.lng) * (Math.PI/180);

    return 2 * R *
        Math.asin(
          Math.sqrt(
            Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(latOneRadians) * Math.cos(latTwoRadians) * Math.sin(difflon / 2) * Math.sin(difflon / 2)
          )
        );
    }

    function setCookie(name, value) {
      let expires = "expires=01 Jan 2100 00:00:00 UTC";
      document.cookie = name + "=" + value + ";" + expires + ";path=/";
    }

    function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return '';
    }
</script>
