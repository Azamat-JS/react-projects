import React, { useEffect, useState } from "react";
import Search from "../search/Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=afff6d02c35346a33bbf5746ff39847b`
      );
      const data = await response.json();
      console.log(data);
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  function handleSearch() {
    fetchWeatherData(search);
  }

  function getCurrentDate(){
    return new Date().toLocaleDateString('en-us', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
  }

// Converting into Celsius

useEffect(() => {
    fetchWeatherData("Urgench");
}, []);
console.log(weatherData);
const kelvin = weatherData?.main?.temp;
const celsius = kelvin - 273.15;
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2>
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temperature">{Math.round(celsius)}°C</div>
          <p className="weather-desc">
            {
                weatherData && weatherData.weather && weatherData.weather[0] ? weatherData.weather[0].description : ''
            }
          </p>
          <div className="weather-info">
            <div className="column">
                <div>
                    <p>Wind Speed</p>
                    <p className="wind">{weatherData?.wind?.speed}</p>
                </div>
            </div>
            <div className="column">
                <div>
                    <p>Humidity</p>
                    <p className="humidity">{weatherData?.main?.humidity}%</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
