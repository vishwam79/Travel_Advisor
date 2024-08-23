import React from "react";
import GoogleMapReact from 'google-map-react';
import { FaLocationDot } from "react-icons/fa6";

export default function Mapbox({ setCoordinates, coordinates, places, setBounds }) {
  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDSNpQuWmW6x3msKKIcg9Y82WS-7Z8z4VQ" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map((place, i) => {
          const lat = Number(place.latitude);
          const lng = Number(place.longitude);

          // Log the lat and lng values
          console.log(`Marker ${i}: Latitude: ${lat}, Longitude: ${lng}`);

          return (
            <Marker
              key={i}
              lat={lat}
              lng={lng}
            >
              <FaLocationDot size={32} />
            </Marker>
          );
        })}
      </GoogleMapReact>
    </div>
  );
}

// Marker component
const Marker = ({ lat, lng, children }) => (
  <div style={{
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    color: 'red',
  }}>
    {children}
  </div>
);
