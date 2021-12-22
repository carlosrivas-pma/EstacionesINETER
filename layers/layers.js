var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Lluviaacumuladaltimas3hrs_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapserveride.ineter.gob.ni/geoserver/wsINETER-DGMT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Lluvia_3hrs",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lluvia acumulada últimas 3hrs",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lluviaacumuladaltimas3hrs_1, 0]);
var format_OPAs2020_2 = new ol.format.GeoJSON();
var features_OPAs2020_2 = format_OPAs2020_2.readFeatures(json_OPAs2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPAs2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPAs2020_2.addFeatures(features_OPAs2020_2);
var lyr_OPAs2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OPAs2020_2,
maxResolution:280.0446615226196,
 
                style: style_OPAs2020_2,
                interactive: true,
                title: '<img src="styles/legend/OPAs2020_2.png" /> OPAs 2020'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Lluviaacumuladaltimas3hrs_1.setVisible(true);lyr_OPAs2020_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Lluviaacumuladaltimas3hrs_1,lyr_OPAs2020_2];
lyr_OPAs2020_2.set('fieldAliases', {'Departamen': 'Departamen', 'Municipio': 'Municipio', 'OPA': 'OPA', 'Dirección': 'Dirección', });
lyr_OPAs2020_2.set('fieldImages', {'Departamen': '', 'Municipio': '', 'OPA': '', 'Dirección': '', });
lyr_OPAs2020_2.set('fieldLabels', {'Departamen': 'no label', 'Municipio': 'no label', 'OPA': 'no label', 'Dirección': 'no label', });
lyr_OPAs2020_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});