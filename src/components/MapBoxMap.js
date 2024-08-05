import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function MapBoxMap() {
  return (
    <Map
      initialViewState={{
        longitude: -79.35350827489158,
        latitude: 43.773404913278924,    
        zoom: 15
      }}
      style={{width: '100%', height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-79.35350827489158} latitude={43.773404913278924} color="red" />
    </Map>
  );
}