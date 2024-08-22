import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Maps from "./Components/Mapbox/Mapbox";
import List from "./Components/List/List";
import PlaceDetail from "./Components/PlaceDetail/PlaceDetail";
import { getPlacesData } from "./api";

function App() {

  const [places, setPlaces]=useState([]);
  const [coordinates, setCoordinates]=useState({lat: 28.63869993986512, lng:77.28653798669914 });
  const [bounds, setBounds]=useState({
    sw: { lat: 0, lng: 0 },
    ne: { lat: 0, lng: 0 },
  });

  // console.log(bounds);

  


  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(({coords:{latitude, longitude}})=>{
      setCoordinates({lat: latitude, lng: longitude})
      // console.log(coordinates);
    })
  },[])

  useEffect(()=>{

    // console.log(coordinates, bounds);

  getPlacesData(bounds.sw, bounds.ne).then((data)=>{
console.log(data);
  setPlaces(data);
  
})

  },[coordinates, bounds])


  return (
    <div className="bg-gray-200">
      <Header />
      <div className="lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1  md:grid md:grid-cols-1 h-screen bg-gray-200 w-[95%] mx-auto">
       <div className="col-span-1">
        <List places={places} />
        </div>

         <div className="col-span-2">
         <Maps 
         setCoordinates={setCoordinates}
         setBounds={setBounds}
         coordinates={coordinates}
         
         />
         </div>

      </div>
    </div>
  );
}

export default App;
