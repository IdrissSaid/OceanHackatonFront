import React, {useEffect} from "react";

import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { useGeographic } from "ol/proj";
import {Point} from 'ol/geom.js';

const MapComponent = () => {
  useGeographic();

  const place = [55.5, -21.1];
  const point = new Point(place);
  
  useEffect(() => {
    // Create a new OpenLayers map
    const map = new Map({
      target: 'map', // The ID of the div element where the map will be rendered
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap as the base layer
        }),
      ],
      view: new View({
        center: place, // Initial center of the map (longitude, latitude)
        zoom: 9, // Initial zoom level
      }),
    });
    return () => {
      // Cleanup when the component is unmounted
      map.dispose();
    };
  }, []); // Empty dependency array to run the effect only once

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>;
};

export default MapComponent;