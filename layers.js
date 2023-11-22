var littleton = L.marker([-10.627447, -53.29623]).bindPopup('This is Littleton, CO'),
    denver = L.marker([-12.123277, -52.649473]).bindPopup('This is Littleton, CO'),
    aurora = L.marker([-10.627447, -53.29623]).bindPopup('This is Littleton, CO'),
    golden = L.marker([-14.942029, -53.418718]).bindPopup('This is Littleton, CO')
;


var cities = L.layerGroup([littleton, denver, aurora, golden]);


var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'})
;


// var baseMaps = {
//     "OpenStreetMap": osm,
//     "OpenStreetMap.HOT": osmHOT
// };
    
var baseMaps = {
    "OpenStreetMap osm": osm,
    "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
};

var overlayMaps = {
    "Cidades": cities
};

var layerControl = L.control.layers(baseMaps, overlayMaps,
    // { posição do Layer control
    // position: 'topleft'
    // }
).addTo(map);

var crownHill = L.marker([-13.814294, -57.924292]).bindPopup('This is Crown Hill Park.'),
    rubyHill = L.marker([-15.111751, -58.122098]).bindPopup('This is Ruby Hill Park.');
    
var parks = L.layerGroup([crownHill, rubyHill]);

var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
});

var mapa1 = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
    foo: 'bar', attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
layerControl.addOverlay(parks, "Outras Cidades");
layerControl.addBaseLayer(mapa1, "Mapa 1");
