
var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var myIcon = L.icon({
  iconUrl: 'https://carsonmays.github.io/GEOG456/leaflet_tutorial/pngkin.com_tree-icon-png_945008.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});


var markerClusters1 = L.markerClusterGroup();


for ( var i = 0; i < markers.length; ++i )
{
var popup = '<b>' + markers[i].COM_NAME +
            '</b><br/><i>' + markers[i].SPECIES +
            '</i><br/>Diameter (in): ' + markers[i].DBH +
            '<br/>Height (ft): ' + markers[i].HEIGHT +
            '<br/>Condition: ' + markers[i].CONDITION;

var m1 = L.marker( [markers[i].LATITUDE, markers[i].LONGITUDE], {icon: myIcon} )
                .bindPopup( popup )
                

markerClusters1.addLayer ( m1 );
}
;

var markerClusters2 = L.markerClusterGroup();

  for ( var i = 0; i < markers2020.length; ++i )
  {
    var popup = '<b>' + markers2020[i].COM_NAME +
                '</b><br/><i>' + markers2020[i].SPECIES +
                '</i><br/>Diameter (in cm): ' + markers2020[i].DIAMETER;
  
    var m = L.marker( [markers2020[i].LATITUDE, markers2020[i].LONGITUDE], {icon: myIcon} )
                    .bindPopup( popup )
                  
  markerClusters2.addLayer( m );
}
;

  var trees2013 = L.layerGroup([markerClusters1]);
  var trees2020 = L.layerGroup([markerClusters2]);

  var map = L.map( 'map', {
    center: [30.2675, -97.7425],
    minZoom: 2,
    zoom: 14,
    layers: [Esri_WorldTopoMap, trees2013]
  });


var overlayMaps = {
    "2013 Inventory": trees2013,
    "2020 Inventory": trees2020
};



L.control.layers(overlayMaps, null ).addTo(map);

