.. _reference-webmap-options:

Useful web map service providers for Leaflet.js and OpenLayers
==============================================================

Base maps are essential for contextualising spatial data in a web map. However, layer providers often change their terms or their APIs and this can result in a map layer becoming unavailable and leaving a blank base layer.

This page provides 2 options for default map providers that can be used according to their T&Cs allowing that our sites don't normally drive a huge volume of traffic.

Option 1 - OpenStreetMap
------------------------

OpenStreetMap provides a tile service with a usage policy detailed here: https://operations.osmfoundation.org/policies/tiles/

NB. This option should not be used if we anticipate heavy traffic, i.e through an app or very bust website.


.. code-block:: bash

    // By default subdomains denoted by {s} are [a,b,c], and are used to speed up tile loading
   
    newTileLayer = L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"© OpenStreetMap contributors"})
   
.. 

Option 2 - ArcServer
--------------------

There are several backdrops that can be selected from the list here: https://server.arcgisonline.com/ArcGIS/rest/services/

The `World Streets` layer can be used in web maps according to the terms found here https://www.arcgis.com/home/item.html?id=3b93337983e9436f8db950e38a8629af and should be attributed as follows:

`Sources: Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, NRCAN, Esri Japan, METI, Esri China (Hong Kong), NOSTRA, © OpenStreetMap contributors, and the GIS User Community`


Tile URL
^^^^^^^^^

https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}

.. code-block:: bash
   
    newTileLayer = L.TileLayer("http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",{attribution:'<a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">World Street Map</a> Esri, HERE, Garmin, USGS, Intermap, INCREMENT P, NRCAN, Esri Japan, METI, Esri China (Hong Kong), NOSTRA, © OpenStreetMap contributors, and the GIS User Community'})
   
..    



