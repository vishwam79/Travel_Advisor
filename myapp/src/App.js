import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import Maps from "./Components/Mapbox/Mapbox";
import List from "./Components/List/List";
import PlaceDetail from "./Components/PlaceDetail/PlaceDetail";
import { getPlacesData } from "./api";

function App() {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  // console.log(bounds);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
        // console.log(coordinates, bounds);
      }
    );
  }, []);

  useEffect(() => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
    });
  }, [coordinates, bounds]);

  return (
    <div className="w-full h-full">
      <div className="bg-gray-100">
        <Header />
        <div className="lg:grid lg:grid-cols-3 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1 min-h-screen bg-gray-100 w-[95%] mx-auto">
          <div className="col-span-1 bg-gray-100 p-4 border-r">
            <List places={places} />
          </div>

          <div className="col-span-2 h-[calc(100vh-4rem)] sticky top-0 bg-gray-100">
            <Maps
              setCoordinates={setCoordinates}
              places={places}
              setBounds={setBounds}
              coordinates={coordinates}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
