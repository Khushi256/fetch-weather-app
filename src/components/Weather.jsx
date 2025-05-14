import React, { useEffect, useState } from "react";
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
  const [city, setCity] = useState("Delhi");
  const [weatherData, setWeatherData] = useState({
    temp: 0,
    location: "",
    humidity: 0,
    windSpeed: 0,
  });

  const [searchInput, setSearchInput] = useState("");

  const handleSearchInput = async (city) => {
    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);

      setWeatherData({
        temp: data.main?.temp || 0,
        location: data.name || "Unknown",
        humidity: data.main?.humidity || 0,
        windSpeed: data.wind?.speed || 0,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    handleSearchInput(city);
  }, [city]);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      handleSearchInput();
    }
  };

  return (
    <div className="weather">
      <div className="search-bar">
        <input
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
          onClick={handleSearch}
        />
      </div>
      <div className="temp-loc">
        <img src={temp_icon} className="temp-icon" alt="" />
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
    </div>
  );
};

export default Weather;
