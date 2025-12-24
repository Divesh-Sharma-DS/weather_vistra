import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MainWeatherCard from "./components/MainWeatherCard";
import Highlights from "./components/Highlights";
import ForecastChart from "./components/ForecastChart";
import CityList from "./components/CityList";
import HighlightsChart from "./components/HighlightsChart";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState({ tempData: [], highlightsData: [] });
  const [error, setError] = useState("");

  const fetchWeatherData = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      const weatherRes = await axios.get(`http://localhost:8080/api/weather?city=${city}`);
      const forecastRes = await axios.get(`http://localhost:8080/api/weather/forecast?city=${city}`);

      const forecastList = forecastRes.data.list.slice(0, 8).map((item) => ({
        date: item.dt_txt.split(" ")[1].slice(0, 5),
        temp: item.main.temp,
      }));

      const highlightsData = forecastRes.data.list.slice(0, 8).map((item) => ({
        hour: item.dt_txt.split(" ")[1].slice(0, 5),
        humidity: item.main.humidity,
        rain: item.pop ? Math.round(item.pop * 100) : 0,
      }));

      setWeather(weatherRes.data);
      setForecast({ tempData: forecastList, highlightsData });
      setError("");
    } catch (err) {
      setError("City not found or server error");
      setWeather(null);
      setForecast({ tempData: [], highlightsData: [] });
    }
  };
console.log("MainWeatherCard:", typeof MainWeatherCard);
console.log("Highlights:", typeof Highlights);
console.log("HighlightsChart:", typeof HighlightsChart);

  return (
    <div className={`app ${weather ? weather.description.split(" ")[0].toLowerCase() : ""}`}>
      <SearchBar city={city} setCity={setCity} onSearch={fetchWeatherData} />
      {error && <p className="error">{error}</p>}
      {weather && (
        <>
          <div className="dashboard">
            <MainWeatherCard weather={weather} />
            <Highlights weather={weather} />
          </div>

          <ForecastChart data={forecast.tempData} />
          <HighlightsChart data={forecast.highlightsData} />
          <CityList />
        </>
      )}
    </div>
  );
}

export default App;
