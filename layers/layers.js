var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_lotsdechaleur_1 = new ol.format.GeoJSON();
var features_lotsdechaleur_1 = format_lotsdechaleur_1.readFeatures(json_lotsdechaleur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotsdechaleur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotsdechaleur_1.addFeatures(features_lotsdechaleur_1);
var lyr_lotsdechaleur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotsdechaleur_1, 
                style: style_lotsdechaleur_1,
                popuplayertitle: "Îlots de chaleur",
                interactive: false,
    title: 'Îlots de chaleur<br />\
    <img src="styles/legend/lotsdechaleur_1_0.png" /> Chaud<br />\
    <img src="styles/legend/lotsdechaleur_1_1.png" /> Très chaud<br />'
        });
var format_Rseaulocaldesant_2 = new ol.format.GeoJSON();
var features_Rseaulocaldesant_2 = format_Rseaulocaldesant_2.readFeatures(json_Rseaulocaldesant_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rseaulocaldesant_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rseaulocaldesant_2.addFeatures(features_Rseaulocaldesant_2);
var lyr_Rseaulocaldesant_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rseaulocaldesant_2, 
                style: style_Rseaulocaldesant_2,
                popuplayertitle: "Réseau local de santé",
                interactive: false,
                title: '<img src="styles/legend/Rseaulocaldesant_2.png" /> Réseau local de santé'
            });
var format_colespubliques_3 = new ol.format.GeoJSON();
var features_colespubliques_3 = format_colespubliques_3.readFeatures(json_colespubliques_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_colespubliques_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_colespubliques_3.addFeatures(features_colespubliques_3);
var lyr_colespubliques_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_colespubliques_3, 
                style: style_colespubliques_3,
                popuplayertitle: "Écoles publiques",
                interactive: true,
    title: 'Écoles publiques<br />\
    <img src="styles/legend/colespubliques_3_0.png" /> Éducation aux adultes<br />\
    <img src="styles/legend/colespubliques_3_1.png" /> Formation professionnelle<br />\
    <img src="styles/legend/colespubliques_3_2.png" /> Préscolaire - Primaire<br />\
    <img src="styles/legend/colespubliques_3_3.png" /> Préscolaire - Primaire - Secondaire<br />\
    <img src="styles/legend/colespubliques_3_4.png" /> Primaire<br />\
    <img src="styles/legend/colespubliques_3_5.png" /> Primaire - Secondaire<br />\
    <img src="styles/legend/colespubliques_3_6.png" /> Secondaire<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_lotsdechaleur_1.setVisible(true);lyr_Rseaulocaldesant_2.setVisible(true);lyr_colespubliques_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_lotsdechaleur_1,lyr_Rseaulocaldesant_2,lyr_colespubliques_3];
lyr_lotsdechaleur_1.set('fieldAliases', {'DN': 'DN', });
lyr_Rseaulocaldesant_2.set('fieldAliases', {'RLS_code': 'RLS_code', 'RLS_nom': 'RLS_nom', 'RTS_code': 'RTS_code', 'RSS_code': 'RSS_code', 'RUIS_code': 'RUIS_code', 'Etiquette': 'Etiquette', 'Version': 'Version', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_colespubliques_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DT_MAJ': 'DT_MAJ', 'COMBINE_ID': 'COMBINE_ID', 'CD_ORGNS': 'CD_ORGNS', 'NOM_CRT_O': 'Nom de l\'école', 'NOM_OFF_O': 'NOM_OFF_O', 'ADRS_ORG_1': 'Adresse de l\'école', 'ADRS_ORG_2': 'ADRS_ORG_2', 'CD_POSTL_O': 'CD_POSTL_O', 'CD_MUNCP_O': 'CD_MUNCP_O', 'NOM_MUN_O': 'NOM_MUN_O', 'CD_IMM': 'CD_IMM', 'NOM_IMM': 'NOM_IMM', 'ADRS_IMM_1': 'ADRS_IMM_1', 'ADRS_IMM_2': 'ADRS_IMM_2', 'CD_MUNCP_I': 'CD_MUNCP_I', 'NOM_MUN_I': 'NOM_MUN_I', 'CD_POSTL_I': 'CD_POSTL_I', 'PRESC': 'PRESC', 'PRIM': 'PRIM', 'SEC': 'SEC', 'FORM_PRO': 'FORM_PRO', 'ADULTE': 'ADULTE', 'SITE_WEB_O': 'SITE_WEB_O', 'COORD_X_LL': 'COORD_X_LL', 'COORD_Y_LL': 'COORD_Y_LL', 'ORDRE_ENS': 'Niveau d\'enseignement', 'CD_CS': 'CD_CS', 'TYPE_CS': 'TYPE_CS', 'STYLE_CART': 'STYLE_CART', 'CD_ORGNS_I': 'CD_ORGNS_I', });
lyr_lotsdechaleur_1.set('fieldImages', {'DN': 'Range', });
lyr_Rseaulocaldesant_2.set('fieldImages', {'RLS_code': 'TextEdit', 'RLS_nom': 'TextEdit', 'RTS_code': 'TextEdit', 'RSS_code': 'TextEdit', 'RUIS_code': 'TextEdit', 'Etiquette': 'TextEdit', 'Version': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_colespubliques_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'DT_MAJ': 'TextEdit', 'COMBINE_ID': 'TextEdit', 'CD_ORGNS': 'TextEdit', 'NOM_CRT_O': 'TextEdit', 'NOM_OFF_O': 'TextEdit', 'ADRS_ORG_1': 'TextEdit', 'ADRS_ORG_2': 'TextEdit', 'CD_POSTL_O': 'TextEdit', 'CD_MUNCP_O': 'TextEdit', 'NOM_MUN_O': 'TextEdit', 'CD_IMM': 'TextEdit', 'NOM_IMM': 'TextEdit', 'ADRS_IMM_1': 'TextEdit', 'ADRS_IMM_2': 'TextEdit', 'CD_MUNCP_I': 'TextEdit', 'NOM_MUN_I': 'TextEdit', 'CD_POSTL_I': 'TextEdit', 'PRESC': 'TextEdit', 'PRIM': 'TextEdit', 'SEC': 'TextEdit', 'FORM_PRO': 'TextEdit', 'ADULTE': 'TextEdit', 'SITE_WEB_O': 'TextEdit', 'COORD_X_LL': 'TextEdit', 'COORD_Y_LL': 'TextEdit', 'ORDRE_ENS': 'TextEdit', 'CD_CS': 'TextEdit', 'TYPE_CS': 'TextEdit', 'STYLE_CART': 'TextEdit', 'CD_ORGNS_I': 'TextEdit', });
lyr_lotsdechaleur_1.set('fieldLabels', {'DN': 'no label', });
lyr_Rseaulocaldesant_2.set('fieldLabels', {'RLS_code': 'no label', 'RLS_nom': 'no label', 'RTS_code': 'no label', 'RSS_code': 'no label', 'RUIS_code': 'no label', 'Etiquette': 'no label', 'Version': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_colespubliques_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'DT_MAJ': 'hidden field', 'COMBINE_ID': 'hidden field', 'CD_ORGNS': 'hidden field', 'NOM_CRT_O': 'header label - always visible', 'NOM_OFF_O': 'hidden field', 'ADRS_ORG_1': 'inline label - always visible', 'ADRS_ORG_2': 'hidden field', 'CD_POSTL_O': 'hidden field', 'CD_MUNCP_O': 'hidden field', 'NOM_MUN_O': 'hidden field', 'CD_IMM': 'hidden field', 'NOM_IMM': 'hidden field', 'ADRS_IMM_1': 'hidden field', 'ADRS_IMM_2': 'hidden field', 'CD_MUNCP_I': 'hidden field', 'NOM_MUN_I': 'hidden field', 'CD_POSTL_I': 'hidden field', 'PRESC': 'hidden field', 'PRIM': 'hidden field', 'SEC': 'hidden field', 'FORM_PRO': 'hidden field', 'ADULTE': 'hidden field', 'SITE_WEB_O': 'hidden field', 'COORD_X_LL': 'hidden field', 'COORD_Y_LL': 'hidden field', 'ORDRE_ENS': 'header label - always visible', 'CD_CS': 'hidden field', 'TYPE_CS': 'hidden field', 'STYLE_CART': 'hidden field', 'CD_ORGNS_I': 'hidden field', });
lyr_colespubliques_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});