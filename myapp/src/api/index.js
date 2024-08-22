


import axios from 'axios';

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async(sw,ne)=>{
    try {

        const { data: { data }} = await axios.get(URL, {

            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-key': '8a732fa210msh8490bc5b74ad3d7p1392dbjsnce7fddcea434',
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
          });

          

        return data;
        
    } catch (error) {
        console.log(error)
        
    }
}

