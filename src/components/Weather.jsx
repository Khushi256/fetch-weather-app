import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import temp_icon from '../assets/sun-cloud.png'
import humidity_icon from '../assets/humidity.png'
import wind_icon from '../assets/wind.png'

const Weather = () => {
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type="text" placeholder='Search' />
        <img src={search_icon} id="search-icon"alt=""/>
      </div>
      <div className='temp-loc'>
        <img src={temp_icon} className="temp-icon"alt=""/>
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