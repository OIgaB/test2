import React from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css'; // to override leaflet styles
import mapData from './data/countries.json';

export const Map2 = () => {
  const maxBounds = L.latLngBounds( // limiting map move at the max zoom out
      L.latLng( -57, -160 ), // Southwest corner
      L.latLng( 90, 180 ), // Northeast corner
  );

  return (
    <div style={ { marginTop: '10px', marginLeft: 'auto' } }>
      <MapContainer
        center={ [ 44.0, 10.09 ] }
        zoom={ 2 }
        minZoom={ 2 }
        maxBounds={ maxBounds }
        maxBoundsViscosity= { 1.0 }
        scrollWheelZoom={ false }
        style={ { height: '700px', width: '1030px' } }
      >
        <TileLayer
          attribution='&copy;
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={ mapData.features } />
      </MapContainer>
    </div>
  );
};
// Доступні елементи в Leaflet:
// AttributionControl, Circle, CircleMarker, FeatureGroup, GeoJSON,
// ImageOverlay, LayerGroup, LayersControl, MapContainer, Marker, Pane, Polygon, Polyline, Popup,
// Rectangle, SVGOverlay, ScaleControl, TileLayer, Tooltip, VideoOverlay, WMSTileLayer, ZoomControl,
// useMap, useMapEvent, useMapEvents)