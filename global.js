// Map initialization
var map = L.map('map',{
    preferCanvas: true
}).setView([-12.6953132,-55.9290946], 6);

// Marcação no mapa
var marker = L.marker([-12.6953132,-55.9290946]).addTo(map);

// Adicionando Circulo no mapa
var circle = L.circle([-12.6953132,-55],{
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

let polygonn = L.polygon([
    [-12.6953132,-55.9290946],
    [-11.6953132,-54.9290946],
    [-10.6953132,-55.9290946]
]).addTo(map);

L.control.zoom();


// adicioando popUp no marker
marker.bindPopup("<b>Hello World!</b><br> I am a popup.").openPopup();

// adicioando popUp no circle
circle.bindPopup("I am a circle.");

// adicioando popUp no polygon
polygonn.bindPopup("I am a polygon");

let popup = L.popup()
    .setLatLng([-12.6953132,-55.9290946])
    .setContent("I am a standalone popup.")
    .openOn(map);


// osm layer
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // maxZoom: 2,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

osm.addTo(map);

// funcao que mostra a latitude de onde eu estou clicando
function onMapClick(e){
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);


var popup2 = L.popup();

function onMapClick(e){
    popup2
        .setLatLng(e.latlng)
        .setContent("You clicked the map at" + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

