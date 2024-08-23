import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaDirections } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const PlaceDetail = ({ place }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 ">
      <img
        className="w-full h-48 object-cover"
        src={
          place?.photo?.images?.large?.url ||
          "https://via.placeholder.com/550x413"
        }
        alt={place.name}
      />
      <div className=" py-4">
        <div className="font-bold text-xl mb-2">{place.name} <span className="px-3 text-yellow-600"> Rating: {place.rating} ⭐</span></div>

       

        <div className="grid grid-cols-4">
        <p className="text-gray-700 text-sm col-span-1">Price:  </p>
        <p className="text-gray-700 text-sm col-span-3">{place.price_level} </p>
        </div>

        <div className="grid grid-cols-4">
        <p className="text-gray-700 text-sm col-span-1">Ranking: </p>
          <p className="text-gray-700 text-sm col-span-3">{place.ranking}</p>
        </div>

        <div className="flex justify-between">
          
        </div>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <div className="grid grid-cols-4">
          <FaPhone className="col-span-1" />
          <p className="text-sm col-span-3">{place.phone}</p>
        </div>


        <div className="grid grid-cols-4">
          <FaDirections className="col-span-1" />
          <p className=" text-sm col-span-3">{place.address}</p>
        </div>

        <div className="grid grid-cols-4 ">
          <FaGlobe className="" />
          <a className=" text-sm text-blue-900 cursor-pointer" href={place.website}> Visit Our site</a>
          
        </div>
        <a className="mt-3" href={place.web_url} ><button className="px-2 text-sm bg-blue-600 text-white font-bold hover:bg-white hover:text-blue-700 hover:border-[1px] hover:border-blue-700 rounded-md py-1" >TripAdvisor</button></a>
      </div>
    </div>
  );
};

export default PlaceDetail;
