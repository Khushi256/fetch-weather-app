import React, { useEffect, useState, useRef } from "react";
import "./Weather.css";
import search_icon from "../assets/search.png";
import temp_icon from "../assets/sun-cloud.png";
import humidity_icon from "../assets/humidity.png";
import wind_icon from "../assets/wind.png";
import cloud_snow_icon from "../assets/cloud-snow.png";
import cloud_thunder_icon from "../assets/cloud-thunder.png";
import cloud_icon from "../assets/cloud.png";
import moon_icon from "../assets/moon.png";
import rain_icon from "../assets/rain.png";
import sun_cloud_icon from "../assets/sun-cloud.png";
import sun_icon from "../assets/sun.png";

const Weather = () => {

  const inputRef = useRef()
  const [city, setCity] = useState("Bhopal");
  const [weatherData, setWeatherData] = useState({
    temp: 0,
    location: "",
    humidity: 0,
    windSpeed: 0,
  });

  const allIcons ={
    "01d" : sun_icon,
    "01n" : sun_icon,
    "02d" : sun_cloud_icon,
    "02n" : cloud_icon,
    "03d" : sun_cloud_icon,
    "03n" : cloud_icon,
    "04d" : cloud_icon,
    "04n" : cloud_icon,
    "09d" : rain_icon,
    "09n" : rain_icon,
    "10d" : cloud_thunder_icon,
    "10n" : cloud_thunder_icon,
    "13d" : cloud_snow_icon,
    "13n" : cloud_snow_icon,
  }

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = async (city) => {
    if(city === "") {
      alert("Please enter a city name");
      return;
    }
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if(!response.ok) {
        alert("City not found");
        return;
      }
      console.log(data);
      const icon = allIcons[data.weather[0].icon]|| sun_icon;
      setWeatherData({
        temp: Math.floor(data.main?.temp) || 0,
        location: data.name || "Unknown",
        humidity: data.main?.humidity || 0,
        windSpeed: data.wind?.speed || 0,
        icon: icon,
      });
    } catch (error) {
      setWeatherData(false);
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    handleSearchInput(city);
  }, [ city ]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      handleSearchInput( inputRef.current.value);
    }
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
          ref = {inputRef}
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleSearch}
        />
        <img
          src={search_icon}
          className="search-icon"
          alt=""
          onClick={() => searchInput(inputRef.current.value)}
        />
      </div>
      { weatherData? <>
      <div className="temp-loc">
        <img src={weatherData.icon} className="temp-icon" alt="" />
        <p className="temprature">{weatherData.temp}&deg;c</p>
        <h1 className="location">{weatherData.location}</h1>
      </div>
      <div className="wind-humidity">
        <div className="humidity">
          <img src={humidity_icon} id="humidity-icon" alt="" />
        </div>
        <div>
          <p className="value1">{weatherData.humidity}%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          <img src={wind_icon} id="wind-icon" alt="" />
        </div>
        <div>
          <p className="value2">{weatherData.windSpeed} km/h</p>
          <p>Wind Speed</p>
        </div>
      </div>
      </>: <></>}
    </div>
  );
};

export default Weather;
