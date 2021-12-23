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
var lyr_Lluviaacumuladaltimas72hrs_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapserveride.ineter.gob.ni/geoserver/wsINETER-DGMT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Lluvia_72hrs",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lluvia acumulada últimas 72hrs",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lluviaacumuladaltimas72hrs_1, 1]);
var lyr_Lluviaacumuladaltimas48hrs_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapserveride.ineter.gob.ni/geoserver/wsINETER-DGMT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Lluvia_48hrs",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lluvia acumulada últimas 48hrs",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lluviaacumuladaltimas48hrs_2, 1]);
var lyr_Lluviaacumuladaltimas24hrs_3 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapserveride.ineter.gob.ni/geoserver/wsINETER-DGMT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Lluvia_24hrs",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lluvia acumulada últimas 24hrs",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lluviaacumuladaltimas24hrs_3, 1]);
var lyr_Lluviaacumuladaltimas12hrs_4 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://mapserveride.ineter.gob.ni/geoserver/wsINETER-DGMT/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "Lluvia_12hrs",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Lluvia acumulada últimas 12hrs",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Lluviaacumuladaltimas12hrs_4, 1]);
var lyr_Lluviaacumuladaltimas3hrs_5 = new ol.layer.Tile({
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
              wms_layers.push([lyr_Lluviaacumuladaltimas3hrs_5, 1]);
var format_OPAs2020_6 = new ol.format.GeoJSON();
var features_OPAs2020_6 = format_OPAs2020_6.readFeatures(json_OPAs2020_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPAs2020_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPAs2020_6.addFeatures(features_OPAs2020_6);cluster_OPAs2020_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_OPAs2020_6
});
var lyr_OPAs2020_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_OPAs2020_6,
maxResolution:280.0446615226196,
 
                style: style_OPAs2020_6,
                interactive: true,
                title: '<img src="styles/legend/OPAs2020_6.png" /> OPAs 2020'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Lluviaacumuladaltimas72hrs_1.setVisible(true);lyr_Lluviaacumuladaltimas48hrs_2.setVisible(false);lyr_Lluviaacumuladaltimas24hrs_3.setVisible(false);lyr_Lluviaacumuladaltimas12hrs_4.setVisible(false);lyr_Lluviaacumuladaltimas3hrs_5.setVisible(false);lyr_OPAs2020_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Lluviaacumuladaltimas72hrs_1,lyr_Lluviaacumuladaltimas48hrs_2,lyr_Lluviaacumuladaltimas24hrs_3,lyr_Lluviaacumuladaltimas12hrs_4,lyr_Lluviaacumuladaltimas3hrs_5,lyr_OPAs2020_6];
lyr_OPAs2020_6.set('fieldAliases', {'Departamen': 'Departamen', 'Municipio': 'Municipio', 'OPA': 'OPA', 'Dirección': 'Dirección', });
lyr_OPAs2020_6.set('fieldImages', {'Departamen': '', 'Municipio': '', 'OPA': '', 'Dirección': '', });
lyr_OPAs2020_6.set('fieldLabels', {'Departamen': 'no label', 'Municipio': 'no label', 'OPA': 'no label', 'Dirección': 'no label', });
lyr_OPAs2020_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});