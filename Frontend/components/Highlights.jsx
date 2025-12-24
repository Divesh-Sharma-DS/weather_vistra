import React from "react";
import { WiHumidity, WiStrongWind, WiDaySunny, WiBarometer } from "react-icons/wi";

function Highlights({ weather }) {
  return (
    <div className="card highlights">
      <h3>Today's Highlights</h3>
      <div className="highlight-grid">
        <div className="highlight-item"><WiHumidity /> <p>Humidity: {weather.humidity}%</p></div>
        <div className="highlight-item"><WiStrongWind /> <p>Wind Speed: {weather.windSpeed} m/s</p></div>
        <div className="highlight-item"><WiDaySunny /> <p>Condition: {weather.description}</p></div>
        <div className="highlight-item"><WiBarometer /> <p>High: {weather.high}° | Low: {weather.low}°</p></div>
      </div>
    </div>
  );
}

export default Highlights;
