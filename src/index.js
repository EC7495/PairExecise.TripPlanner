const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1Ijoidm9zdGVycyIsImEiOiJjazV3b2UzbjkwOHlvM21uZXFyZ284aHpwIn0.un88saIlpUDz2HeES4wxpg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

// add new marker
buildMarker("restaurants", [-74.009, 40.705]).addTo(map); // FS
