# EcoEngine Explorer

Stamen built a rich prototype search interface to explore the Berkeley Ecoengine API. Here's a screenshot:

![image](https://cloud.githubusercontent.com/assets/1423200/5288977/bd8c6db2-7aee-11e4-83e6-46ada43cab8c.png)

The prototype lives at http://studio.stamen.com/berkeley/show/ecoengine/explore (password protected, inquire with the Ecoengine team if you need access).

*Question: Can we post the final build at a public URL?*

Based on the [EcoEngine API](https://ecoengine.berkeley.edu/)

One possibility for the interface is for Berkeley to integrate with http://holos.berkeley.edu/explore/. Ths prototype is fully functional without a back-end, however, so it will work on any web server without any back-end dependencies (besides EcoEngine itself for the data).

## Features

* Search box
* Brushable time filter
* Faceted search with histograms *(currently only operates on Observation queries)*
* Raster map with multiple layers
* Marker map display of Observations, Sensors, Photos
* Polygon map display of Regions
* Advanced attribute search
* Bounding box search *(pending)*
* Footprint search *(pending, based on bounding box)*

## Configuration

Some parts of the interface can be configured in `config.js`. Those capabilities are detailed here.

### Endpoints

`ECO.endpoints` sets which API endpoints are queried to receive particular datasets. The latest prototype points to the following links:

```
ECO.endpoints = {
  search: 'https://dev-ecoengine.berkeley.edu/api/search/',
  observations: 'https://dev-ecoengine.berkeley.edu/api/observations/',
  photos: 'https://dev-ecoengine.berkeley.edu/api/photos/',
  sensors: 'https://dev-ecoengine.berkeley.edu/api/sensors/?page_size=5000&format=geojson',
  layers: 'https://dev-ecoengine.berkeley.edu/api/layers/',
  rasters: 'rstore.json',    // permissions issue at this endpoint
  reserves: 'https://dev-ecoengine.berkeley.edu/api/layers/reserves/features/?page_size=500',
  jepson: 'https://dev-ecoengine.berkeley.edu/api/layers/jepson-regions/features/?page_size=500'
};
```

For production, `dev-` should be removed from each URL.

### Basemaps

`ECO.basemaps` are tileset URLs that appear in the Basemap dropdown. Here is an example:

```
  'Stamen Terrain': {
    'url': 'http://{s}.tile.stamen.com/terrain-background/{z}/{x}/{y}.jpg',
    'attribution': 'Map tiles by <a href="http://stamen.com/">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org/">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
  }
```

The key is used as the name of the dropdown. URL and attribution values are both required for each tileset added to EcoEngine.

The four basemaps in the initial version of Explorer are `Light`, `Dark, `OpenStreetMap` and `Stamen Terrain` (which currently only covers part of North America).

### Advanced attribute search fields

`ECO.advancedSearch` fields show up in the "Advanced" tab. An `alias` can be provided to display as the label.

Currently only fields of type `text` are supported.

## Technical Details

### Dependencies

The interface does not require a backend to operate, aside from the EcoEngine APIs necessary to load the data Explorer exposes.

The following libraries are required to run the Explorer interface.

* `[d3.js](http://d3js.org/d3.v3.min.js)`
* `[leaflet.js](http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.js)`
* `[zoom-extras.js](/lib/zoom-extras.js)`
* `[hashnav.js](/lib/hashnav.js)`

As well as these stylesheets.

* `[leaflet.css](http://cdn.leafletjs.com/leaflet-0.7.3/leaflet.css)`
* `[bootstrap.css](//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css)`

### Data

* All data comes from the Berkeley Ecoinformatics API, documented at https://dev-ecoengine.berkeley.edu/docs/quickstart.html
* The Stamen prorotype uses the dev API at https://dev-ecoengine.berkeley.edu. See "Configuration" above for instructions for changing to the production version.

### Static Assets

* /explore/index.html
* /explore/config.js
* /explore/rstore.json          - temporary workaround file, should be removed in the future

## Photos

A basic fullscreen photo viewer sits in the `/photos` directory. A Photo Ribbon also appears in an early version of Explorer at `/prototypes/multi` which displays filtered photos.

In Phase 1, Photos is a secondary goal, so additional features may not be added if Explorer requires more work. If time permits, a desired feature is to link direct to the gallery from Explorer to view a filtered set of photos.

## How do I run the project locally?

Clone the repo and a run a web serve in the project directory to view the project, or deploy it to a web server.
