"use strict"

mapboxgl.accessToken = MAPBOX_TOKEN;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 12,
    center: [-147.3438448415888, 64.75725730373807]
});
var marker = new mapboxgl.Marker()
    .setLngLat([-147.3438448415888, 64.75725730373807])
    .addTo(map);


// var popup = new mapboxgl.Popup()
//     .setLngLat([-147.3438448415888, 64.75725730373807])
//     .setHTML("<h2>Santa's Workshop</h2>")
//     .addTo(map);


$(document).ready(function () {

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        q: "North Pole, US",
        units: "imperial"
    }).done(function (data) {
        console.log(data); // log all of JSON object
        for (let i = 0; i <= 39; i += 8) {
            console.log(data.list[i].main.temp_max);
        }
        //box 1 stats
        $("#temperature").html(data.list[0].main.temp +"F");
        $("#pressure").html("Pressure: " + data.list[0].main.pressure);
        $("#windSpeed").html("WindSpeed: " + data.list[0].wind.speed);
        $("#humidity").html("Humidity: " + data.list[0].main.humidity);

        //box 2 stats
        $("#temperature1").html(data.list[8].main.temp +"F");
        $("#pressure1").html("Pressure: " + data.list[8].main.pressure);
        $("#windSpeed1").html("WindSpeed: " + data.list[8].wind.speed);
        $("#humidity1").html("Humidity: " + data.list[8].main.humidity);

        //box 3 stats
        $("#temperature2").html(data.list[16].main.temp +"F");
        $("#pressure2").html("Pressure: " + data.list[16].main.pressure);
        $("#windSpeed2").html("WindSpeed: " + data.list[16].wind.speed);
        $("#humidity2").html("Humidity: " + data.list[16].main.humidity);

        //box 4 stats
        $("#temperature3").html(data.list[24].main.temp +"F");
        $("#pressure3").html("Pressure: " + data.list[24].main.pressure);
        $("#windSpeed3").html("WindSpeed: " + data.list[24].wind.speed);
        $("#humidity3").html("Humidity: " + data.list[24].main.humidity);

        //box 5 stats
        $("#temperature4").html(data.list[32].main.temp +"F");
        $("#pressure4").html("Pressure: " + data.list[32].main.pressure);
        $("#windSpeed4").html("WindSpeed: " + data.list[32].wind.speed);
        $("#humidity4").html("Humidity: " + data.list[32].main.humidity);



        // console.log(data.list[0].main.temp_max); //  pick out max temp - day 1
        // console.log(data.list[8].main.temp_max); // day 2
        // console.log(data.list[16].main.temp_max); // day 3
        // console.log(data.list[24].main.temp_max); // day 4
        // console.log(data.list[32].main.temp_max); // day 5
    });


});

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
