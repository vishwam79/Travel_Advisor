import React, { useCallback } from 'react';
import { Map, Marker } from 'react-map-gl';
import { FaLocationDot } from 'react-icons/fa6';
import useMediaQuery from '../mediaQuary/Media';

const Mapbox = ({ setCoordinates, setBounds, coordinates, places }) => {
  const isMobile = useMediaQuery('(min-width: 600px)');

  // Handle map movement
  const handleMove = useCallback((event) => {
    const map = event.target;
    const center = map.getCenter();

    // Update coordinates based on map's center
    setCoordinates({
      lat: center.lat,
      lng: center.lng,
    });

    // Update bounds if needed
    const bounds = map.getBounds();
    setBounds({
      sw: bounds.getSouthWest(),
      ne: bounds.getNorthEast(),
    });
  }, [setCoordinates, setBounds]);

  return (
    <div className='mt-10'>
      <div style={{ width: '100%', height: 500 }}>
        <Map
          mapboxAccessToken='pk.eyJ1IjoidmlzaDIyMiIsImEiOiJjbTAyZ3ptcnQwMTZoMmtxcHRheWUyZG51In0.YtH2qRWxPAWjDU-bCKjuTQ'
          initialViewState={{
            latitude: coordinates.lat,
            longitude: coordinates.lng,
            zoom: 14,
          }}
          onMove={handleMove} // Update coordinates on map move
          style={{ width: '100%', height: '100%', borderRadius: 10 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        >
          {places?.map((place, i) => {
            const lat = Number(place.latitude);
            const lng = Number(place.longitude);

            // Skip invalid places
            if (isNaN(lat) || isNaN(lng)) return null;

            return (
              <Marker
                key={i}
                latitude={lat}
                longitude={lng}
                anchor="bottom" 
              >
                {isMobile ? (
                  <FaLocationDot size={24} color="red" />
                ) : (
                  <div className="flex flex-col items-center">
                    <img
                      src={
                        place.photo.images.small.url ||
                        "https://via.placeholder.com/150x150"
                      }
                      alt={place.name}
                      className="w-16 h-16 rounded-full border-2 border-gray-400"
                    />
                    <p className="text-sm">{place.name}</p>
                  </div>
                )}
              </Marker>
            );
          })}
        </Map>
      </div>
    </div>
  );
};

export default Mapbox;
