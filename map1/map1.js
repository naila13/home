var map1obj = L.map('mymap1').setView([32.18, -99.14], 4)

L.tileLayer('map1-basemap-url').addTo(map1obj)

var map1MarkerObject = L.marker([30, -90]).addTo(map1obj)

var map1PolygonObject = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(map1obj)

