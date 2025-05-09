import React ,{ useEffect }  from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import temp_icon from '../assets/sun-cloud.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'
import cloud_snow_icon from '../assets/cloud-snow.png'
import cloud_thunder_icon from '../assets/cloud-thunder.png'
import cloud_icon from '../assets/cloud.png'
import moon_icon from '../assets/moon.png'
import rain_icon from '../assets/rain.png'
import sun_cloud_icon from '../assets/sun-cloud.png'
import sun_icon from '../assets/sun.png'


const Weather = () => {
  
  const search = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`

  
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

   useEffect (() => {
    search("Delhi");
   },[])

  
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type="text" placeholder='Search' />
        <img src={search_icon} className="search-icon"alt=""/>
      </div>
      <div className='temp-loc'>
        <img src={temp_icon} className="temp-icon" alt=""/>
        <p className='temprature'>24&deg;c</p>
        <h1 className='location'>City</h1>
      </div>
      <div className='wind-humidity'>
        <div className='humidity'>
          <img src={humidity_icon} id="humidity-icon"alt=""/>
        </div>
        <div>
          <p className='value1'>64%</p>
          <p>Humidity</p>
        </div>
        <div className='wind'>
          <img src={wind_icon} id="wind-icon"alt=""/>
        </div>
        <div>
          <p className='value2'>18 km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  )
}

export default Weather