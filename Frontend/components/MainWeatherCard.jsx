import React from "react";
import {
  WiDaySunny,
  WiCloudy,
  WiRain,
  WiStrongWind,
  WiHumidity,
} from "react-icons/wi";
import { motion } from "framer-motion";

const getIcon = (desc) => {
  const d = desc.toLowerCase();
  if (d.includes("rain"))
    return (
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        <WiRain size={80} color="#00BFFF" />
      </motion.div>
    );
  if (d.includes("cloud"))
    return (
      <motion.div
        animate={{ x: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <WiCloudy size={80} color="#B0C4DE" />
      </motion.div>
    );
  return (
    <motion.div
      animate={{ rotate: [0, 10, 0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
    >
      <WiDaySunny size={80} color="#FFD700" />
    </motion.div>
  );
};

function MainWeatherCard({ weather }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="card main-card"
    >
      <h2 className="city-name">{weather.city}</h2>

      <div className="weather-info">
        <div>{getIcon(weather.description)}</div>

        <div>
          <h1 className="temp-text">{Math.round(weather.temperature)}°C</h1>
          <p className="desc">{weather.description}</p>
        </div>
      </div>

      <motion.div
        className="extra-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          <WiHumidity size={24} color="#00E0FF" />{" "}
          <span>{weather.humidity}% Humidity</span>
        </p>
        <p>
          <WiStrongWind size={24} color="#00E0FF" />{" "}
          <span>{weather.windSpeed} m/s Wind</span>
        </p>
      </motion.div>
    </motion.div>
  );
}

export default MainWeatherCard;
