import './style.css';

// Coordinates for the tower of Pisa
var centerLat = 43.72301;
var centerLng = 10.39663;

var urlParams = new URLSearchParams(window.location.search);
centerLat = urlParams.get('lat');
centerLng = urlParams.get('long');
var zoom = urlParams.get('zoom');
console.log("***" + centerLat + "," + centerLng);

// Define a map
var aMap = L.map('mapid', {
  center: L.latLng(centerLat, centerLng),
  zoom: zoom,
  layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')]
});

