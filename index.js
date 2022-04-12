import './style.css';

// Coordinates for the tower of Pisa
// var centerLat = 44.0131;
// var centerLng = 10.3287;
// var zoom = 12;

var urlParams = new URLSearchParams(window.location.search);
var centerLat = urlParams.get('lat');
var centerLng = urlParams.get('long');
var zoom = urlParams.get('zoom');

// Define a map
var aMap = L.map('mapid', {
  center: L.latLng(centerLat, centerLng),
  zoom: zoom,
  zoomControl: false,
  dragging: false,
  scrollWheelZoom: false,
  layers: [L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
});
