import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { motion } from "framer-motion";

function ForecastChart({ data }) {
  return (
    <motion.div
      className="card chart-card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="chart-title">🌡 Temperature Forecast</h3>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          {/* ✨ Define a glowing gradient for the line */}
          <defs>
            <linearGradient id="tempGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00E0FF" />
              <stop offset="50%" stopColor="#00FFA3" />
              <stop offset="100%" stopColor="#00E0FF" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ✨ Chart grid with faint lines */}
          <CartesianGrid stroke="rgba(255,255,255,0.05)" />

          {/* ✨ Axis styling */}
          <XAxis dataKey="date" stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
          <YAxis unit="°C" stroke="#94a3b8" tick={{ fill: "#94a3b8" }} />
          <Tooltip
            contentStyle={{
              background: "rgba(15,23,42,0.9)",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#f8fafc",
            }}
          />

          {/* ✨ Animated glowing line */}
          <Line
            type="monotone"
            dataKey="temp"
            stroke="url(#tempGradient)"
            strokeWidth={4}
            dot={false}
            filter="url(#glow)"
            isAnimationActive={true}
            animationDuration={2000}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default ForecastChart;
