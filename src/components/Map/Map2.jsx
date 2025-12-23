import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { GeoJSON, MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import * as S from '../FeedbackCarousel/Feedback.styled';
import mapData from './data/countries.json';
import './map.css'; // to override leaflet styles

const Map2 = () => {
  const maxBounds = L.latLngBounds(
    // limiting map move at the max zoom out
    L.latLng(-57, -160), // Southwest corner
    L.latLng(90, 180) // Northeast corner
  );

  return (
    <S.Section>
      <S.Container>
        <MapContainer
          center={[44.0, 10.09]}
          zoom={2}
          minZoom={2}
          maxBounds={maxBounds}
          maxBoundsViscosity={1.0}
          scrollWheelZoom={false}
          style={{ height: '700px', width: '1030px' }}
        >
          <TileLayer
            attribution='&copy;
          <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <GeoJSON data={mapData.features} />
          <ZoomControl position="bottomright" />
        </MapContainer>
      </S.Container>
    </S.Section>
  );
};

export default Map2;
// Доступні елементи в Leaflet:
// AttributionControl, Circle, CircleMarker, FeatureGroup, GeoJSON,
// ImageOverlay, LayerGroup, LayersControl, MapContainer, Marker, Pane, Polygon, Polyline, Popup,
// Rectangle, SVGOverlay, ScaleControl, TileLayer, Tooltip, VideoOverlay, WMSTileLayer, ZoomControl,
// useMap, useMapEvent, useMapEvents)
