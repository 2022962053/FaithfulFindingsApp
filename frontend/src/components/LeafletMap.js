// LeafletMap.js
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = ({ coordinates, markers }) => {
  const center = [coordinates.lat, coordinates.lng];
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
  };

  const handleDirectionsClick = () => {
    // Implement your logic to calculate and display directions
    if (selectedMarker) {
      console.log(`Show directions to ${selectedMarker.name}`);
      // You can use a library like react-router-dom to navigate to a directions page
    }
  };

  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={center} icon={customIcon}>
        <Popup>Your location</Popup>
      </Marker>

      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={[marker.lat, marker.lng]}
          icon={customIcon}
          onClick={() => handleMarkerClick(marker)}
        >
          <Popup>
            <div>
              <p>{marker.name}</p>
              <button onClick={handleDirectionsClick}>Get Directions</button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default LeafletMap;