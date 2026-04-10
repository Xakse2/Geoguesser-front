import { useState, type JSX } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './miniMap.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export function MiniMapComponent({
  onLocationSelect,
}: {
  onLocationSelect: (lat: number, lng: number) => void;
}): JSX.Element {
  return (
    <MapContainer
      center={[53.9, 27.56]}
      zoom={6}
      zoomControl={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <LocationMarker onClick={onLocationSelect} />
    </MapContainer>
  );
}

function LocationMarker({
  onClick,
}: {
  onClick: (lat: number, lng: number) => void;
}): JSX.Element | null {
  const [position, setPosition] = useState<L.LatLng | null>(null);
  useMapEvents({
    click(e) {
      setPosition(e.latlng);
      onClick(e.latlng.lat, e.latlng.lng);
    },
  });
  return position ? <Marker position={position} /> : null;
}
