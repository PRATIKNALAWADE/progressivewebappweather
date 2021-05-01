import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'ea1c9f3233a8633c662ebfb67c8cf559';

export const fetchWeather = async(query)=>{
    const {data} = await axios.get(URL,{
        params:{
            q:query,
            units:'metric',
            APPID:API_KEY,
        }
    });

    return data;
}
