import React from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

function HighlightsChart({ data }) {
  // Example data format (for testing if backend doesn't provide):
  // const data = [
  //   { hour: "1 PM", humidity: 60, rain: 20 },
  //   { hour: "2 PM", humidity: 58, rain: 25 },
  //   { hour: "3 PM", humidity: 55, rain: 40 },
  // ];

  return (
    <motion.div
      className="card highlight-chart"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="chart-title">🌦 Today's Highlights</h3>

      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart data={data}>
          <defs>
           
            <linearGradient id="humidityGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00E0FF" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#0078FF" stopOpacity={0.3} />
            </linearGradient>

           
            <linearGradient id="rainGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#00FFA3" />
              <stop offset="100%" stopColor="#00E0FF" />
            </linearGradient>
          </defs>

         
          <CartesianGrid stroke="rgba(255,255,255,0.05)" />

        
          <XAxis dataKey="hour" stroke="#94a3b8" />
          <YAxis stroke="#94a3b8" />

          <Tooltip
            contentStyle={{
              background: "rgba(15,23,42,0.9)",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#f8fafc",
            }}
          />

        
          <Bar
            dataKey="humidity"
            fill="url(#humidityGradient)"
            barSize={25}
            radius={[6, 6, 0, 0]}
            animationDuration={1200}
          />

          
          <Line
            type="monotone"
            dataKey="rain"
            stroke="url(#rainGradient)"
            strokeWidth={3}
            dot={{ r: 5, stroke: "#00FFA3", fill: "#0f172a" }}
            isAnimationActive={true}
            animationDuration={1500}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

export default HighlightsChart;

