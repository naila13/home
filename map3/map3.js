var map3obj = L.map('map3id').setView([32.18, -99.14], 4)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map3obj)
var map3MarkerObject = L.marker([30, -90]).addTo(map3obj)
var map3PolygonObject = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(map3obj)
map3PolygonObject.bindPopup('Polygonpopuptext')
map3PolygonObject.bindPopup('Markerpopuptext')