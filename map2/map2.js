var map2obj = L.map('map2id').setView([32.18, -99.14], 40)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2obj)
L.tileLayer.wms('http://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi', {
  layers: 'nexrad-n0r-900913',
  format: 'image/png',
  transparent: true,
  attribution: 'NOAA, Iowa State University'
}).addTo(map2obj)



/*var map2MarkerObject = L.marker([30, -90]).addTo(map2obj)
var map2PolygonObject = L.polygon([
  [31, -88],
  [35, -88],
  [32, -82]
]).addTo(map2obj)
map2PolygonObject.bindPopup('Polygonpopuptext')
map2PolygonObject.bindPopup('Markerpopuptext')*/