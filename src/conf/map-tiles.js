export default [
  {
    name: 'osm / mapnik',
    type: 'tiles',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  {
    name: 'osm / fr',
    type: 'tiles',
    url: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    attribution:
      '&copy; Openstreetmap France | &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  },
  {
    name: 'osm / hot',
    type: 'tiles',
    url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/">Humanitarian OpenStreetMap Team</a>'
  },
  {
    name: 'Géoportail / Cartes IGN',
    type: 'tiles',
    url:
      'https://wxs.ign.fr/ff8nyjqym1ym7bz3mw6mpehc/geoportail/wmts?&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}',
    attribution: 'IGN-F/Geoportail'
  },
  {
    name: 'Géoportail / Cartes SCAN Express Standard',
    type: 'tiles',
    url:
      'https://wxs.ign.fr/ff8nyjqym1ym7bz3mw6mpehc/geoportail/wmts?&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS.SCAN-EXPRESS.STANDARD&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}',
    attribution: 'IGN-F/Geoportail'
  },
  {
    name: 'Géoportail / Plan IGN',
    type: 'tiles',
    url:
      'https://wxs.ign.fr/ff8nyjqym1ym7bz3mw6mpehc/geoportail/wmts?&REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE=normal&TILEMATRIXSET=PM&FORMAT=image/jpeg&LAYER=GEOGRAPHICALGRIDSYSTEMS.PLANIGN&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}',
    attribution: 'IGN-F/Geoportail'
  },
  {
    name: 'BRGM / Cartes géologiques 1/50 000',
    type: 'wms',
    url: 'https://geoservices.brgm.fr/geologie',
    layers: 'SCAN_H_GEOL50',
    attribution: 'BRGM'
  }
]
