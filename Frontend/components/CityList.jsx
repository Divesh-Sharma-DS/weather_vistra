import React, { useState, useEffect } from "react";
import axios from "axios";

const cities = ["Delhi", "London", "Tokyo", "New York"];

function CityList() {
  const [cityData, setCityData] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const data = await Promise.all(
        cities.map(async (c) => {
          const res = await axios.get(`http://localhost:8080/api/weather?city=${c}`);
          return res.data;
        })
      );
      setCityData(data);
    };
    fetchCities();
  }, []);

  return (
    <div className="card city-list">
      <h3>Other Cities</h3>
      <div className="city-grid">
        {cityData.map((c) => (
          <div key={c.city} className="city-item">
            <h4>{c.city}</h4>
            <p>{Math.round(c.temperature)}°C</p>
            <p>{c.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityList;
