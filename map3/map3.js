var map3obj = L.map('map3id').setView([42.18, -93.14], 10)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map3obj)
var map3url = 'https://geog4046.github.io/assignment-resources/data/us_state_demographics_ESRI_2010A.geojson'

// this should replace the original line in the example: var renameThisStyleObject = { color: 'green' }
var map3styleobj = function () {
  return {
    color: 'green',
    weight: 1,
    fillOpacity: 0.2
  }
}

// this should replace the original line in the example: var renameThisStyleObject = { color: 'green' }
var map3stylefunction = function (feature) {
  var map3AgeInteger = feature.properties.MED_AGE // get the current state's Median Age attribute
  var map3ColorString = 'olive' // let the initial color be a darker green
  if (map3AgeInteger < 38) { map3ColorString = 'green' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: map3ColorString, // use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
}

 var map3OnEachFeatureFunction = function (feature, layer) {
   var name = feature.properties.STATE_NAME
   var age = feature.properties.MED_AGE
   layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
 }


var map3geojasonoptionobj = {
  style: map3stylefunction,
  onEachFeature: map3OnEachFeatureFunction
}


jQuery.getJSON(map3url, function (data) {
  L.geoJSON(data, map3geojasonoptionobj).addTo(map3obj)
})



/*var map3MarkerObject = L.marker([30, -90]).addTo(map3obj)
var map3PolygonObject = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(map3obj)
map3PolygonObject.bindPopup('Polygonpopuptext')
map3PolygonObject.bindPopup('Markerpopuptext')*/