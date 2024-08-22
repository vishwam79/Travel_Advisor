import React, { useState } from "react";

import PlaceDetail from "../PlaceDetail/PlaceDetail";

const List = ({places}) => {
  const [type, setType] = useState("Restautents");
  const [rating, setRating] = useState("4");


 

  return (
    <div className="ml-">
      <h4 className="lg:text-3xl md:text-2xl text-2xl font-semibold mt-6 mb-6  ">
        Restaurents, Hotels & Attractions around you...
      </h4>
      <div className="flex justify-start  gap-5 mb-5">
        <form action="">
          <label className="mr-2" htmlFor="">
            Type
          </label>

          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            name=""
            id=""
            className="py-1 text-gray-700 px-3 rounded-md outline-none border-sky-800 border-b-2"
          >
            <option value="Restaurents">Restaurents </option>
            <option value="Hotel">Hotel</option>
            <option value="Attractions">Attractions</option>
          </select>
        </form>

        <form action="">
          <label className="mr-2 text-gray-700" htmlFor="">
            Ratings
          </label>

          <select
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            name=""
            id=""
            className="py-1 px-3 rounded-r-md outline-none border-sky-800 border-b-2 "
          >
            <option value={0}>All</option>
            <option value={3}>Above 3.0</option>
            <option value={4}>Above 4.0</option>
            <option value={4.5}>Above 4.5</option>
          </select>
        </form>
      </div>

      <div className="grid gap-3">
        {places?.map((place, i) => (
          <div item key={i} className="grid">
            <PlaceDetail place={place} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
