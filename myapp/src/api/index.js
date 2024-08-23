import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        "x-rapidapi-key": "947515be42mshdd6732d121b8b7bp113d81jsnf18a95561572",
        "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
      },
    });
// console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
