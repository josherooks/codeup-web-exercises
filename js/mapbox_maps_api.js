"use strict";
// var accessToken = MAPBOX_TOKEN;
mapboxgl.accessToken = MAPBOX_TOKEN; <!-- add in mapbox token -->
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 9,
    center: [ -115.14082720846635,36.19491096164248]
});

//adding a marker
var marker = new mapboxgl.Marker()
    .setLngLat([-115.16299272664513, 36.138461253328316])
    .addTo(map);

// adding a popup
var popup = new mapboxgl.Popup()
    .setLngLat([-115.16299272664513, 36.138461253328316])
    .setHTML("<h1>Peppermill</h1>")
    .addTo(map);

// add popup to marker
var peppermill = new mapboxgl.Popup()
    .setHTML("<img src='../images/%20fireside-lounge.jpg' alt=''><br><h2>Peppermill Restaurant and Fireside Lounge</h2><a href='http://www.peppermilllasvegas.com/'>Website</a>")

marker.setPopup(peppermill)

// the geocode method from mapbox-geocoder-utils.js
geocode("2985 Las Vegas Blvd S, Las Vegas, NV 89109", MAPBOX_TOKEN).then(function(result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(10);
});


// the reverse geocode method from mapbox-geocode-utils.js
reverseGeocode({lng: -115.16299272664513, lat: 36.138461253328316}, MAPBOX_TOKEN).then(function(results) {
    // logs the address for Founder's Square
    console.log(results);
});

var marker2 = new mapboxgl.Marker()
    .setLngLat([-115.1160828445268, 36.2182387063031])
    .addTo(map);

// adding a popup
var popup2 = new mapboxgl.Popup()
    .setLngLat([-115.1160828445268, 36.2182387063031])
    .setHTML("<h1>Hamburger Hut</h1>")
    .addTo(map);

// add popup to marker
var burgerHut = new mapboxgl.Popup()
    .setHTML("<img src='../images/burger-hut.jpg' alt=''><br><h2>Hamburger Hut</h2><a href='https://hamburgerhutlv.com/'>Website</a>")

marker2.setPopup(burgerHut)

geocode("2512 E Cheyenne Ave, North Las Vegas, NV 89030", MAPBOX_TOKEN).then(function(result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(10);
});


// the reverse geocode method from mapbox-geocode-utils.js
reverseGeocode({lng: -115.1160828445268, lat: 36.2182387063031}, MAPBOX_TOKEN).then(function(results) {
    console.log(results);

});

var marker3 = new mapboxgl.Marker()
    .setLngLat([-115.13676853694938, 36.112637046204156])
    .addTo(map);

// adding a popup
var popup3 = new mapboxgl.Popup()
    .setLngLat([-115.13676853694938, 36.112637046204156])
    .setHTML("<h1>Roberto's</h1>")
    .addTo(map);

// add popup to marker
var robertos = new mapboxgl.Popup()
    .setHTML("<img src='../images/robertos.jpg' alt=''><br><h2>Roberto's</h2><a href='http://www.robertostacoshop.com/'>Website</a>")

marker3.setPopup(robertos)

geocode("4700 S Maryland Pkwy #130, Las Vegas, NV 89119", MAPBOX_TOKEN).then(function(result) {
    console.log(result);
    map.setCenter(result);
    map.setZoom(10);
});


// the reverse geocode method from mapbox-geocode-utils.js
reverseGeocode({lng: -115.13676853694938, lat: 36.112637046204156}, MAPBOX_TOKEN).then(function(results) {

    console.log(results);

});
