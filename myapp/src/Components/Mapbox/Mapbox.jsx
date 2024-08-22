import React from 'react';
import { Map } from 'react-map-gl';
import { MdOutlineStarRate } from "react-icons/md";


const Mapbox = ({setCoordinates, setBounds, coordinates}) => {

    

  const handleMove = (event) => {
    const { latitude, longitude } = event.viewState;
    const bounds = event.target.getBounds();

    setCoordinates({ lat: latitude, lng: longitude });
    setBounds({
      sw: bounds.getSouthWest(),
      ne: bounds.getNorthEast()
    });

    // console.log("Center:", { lat: latitude, lng: longitude });
    // console.log("Bounds:", bounds);
    // console.log(bounds, coordinates)
  };



  return (
    <div className='mt-10'>
        <Map
      mapboxAccessToken='pk.eyJ1IjoidmlzaDIyMiIsImEiOiJjbTAyZ3ptcnQwMTZoMmtxcHRheWUyZG51In0.YtH2qRWxPAWjDU-bCKjuTQ'
      initialViewState={{

        latitude: coordinates.lat, 
        longitude:coordinates.lng,
       
        zoom: 14
        
      }}
      onMove={handleMove}

      style={{width: '', height: 500, borderRadius:10, }}
      mapStyle="mapbox://styles/mapbox/streets-v9"

      
    />


    </div>
  )
}

export default Mapbox