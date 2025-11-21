import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const RevenueChart = () => {
  const [isVisible, setIsVisible] = useState(false);

  const dataPoints = [
    { month: 0, revenue: 0 },
    { month: 2, revenue: 1 },
    { month: 4, revenue: 3 },
    { month: 6, revenue: 5.5 },
    { month: 8, revenue: 9 },
    { month: 10, revenue: 12 },
  ];

  // Convert data points to SVG path
  const width = 300;
  const height = 150;
  const maxRevenue = 12;
  const maxMonth = 10;

  const points = dataPoints.map((point) => ({
    x: (point.month / maxMonth) * width,
    y: height - (point.revenue / maxRevenue) * height,
  }));

  const pathData = points
    .map((point, i) => `${i === 0 ? 'M' : 'L'} ${point.x} ${point.y}`)
    .join(' ');

  const pathLength = points.reduce((acc, point, i) => {
    if (i === 0) return 0;
    const prev = points[i - 1];
    return acc + Math.sqrt(Math.pow(point.x - prev.x, 2) + Math.pow(point.y - prev.y, 2));
  }, 0);

  return (
    <div className="absolute right-0 top-0 bottom-0 w-[350px] opacity-20 pointer-events-none overflow-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 10px rgba(6, 214, 160, 0.4))" }}
      >
        {/* Grid lines */}
        {[0, 3, 6, 9, 12].map((value) => (
          <line
            key={value}
            x1="0"
            y1={height - (value / maxRevenue) * height}
            x2={width}
            y2={height - (value / maxRevenue) * height}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
          />
        ))}

        {/* Gradient definition */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7209B7" />
            <stop offset="100%" stopColor="#06D6A0" />
          </linearGradient>
          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#06D6A0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06D6A0" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Area under the curve */}
        <motion.path
          d={`${pathData} L ${width} ${height} L 0 ${height} Z`}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Main line */}
        <motion.path
          d={pathData}
          stroke="url(#lineGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
        />

        {/* Data points */}
        {points.map((point, i) => (
          <motion.g key={i}>
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="6"
              fill="#06D6A0"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.3 + (i * 0.2) }}
            />
            <motion.circle
              cx={point.x}
              cy={point.y}
              r="8"
              fill="none"
              stroke="#06D6A0"
              strokeWidth="2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.3 + (i * 0.2),
              }}
            />
          </motion.g>
        ))}

        {/* Labels */}
        <text x="0" y="15" fill="rgba(255,255,255,0.4)" fontSize="12">
          ₹12 Cr
        </text>
        <text x={width - 35} y={height - 5} fill="rgba(255,255,255,0.4)" fontSize="12">
          10m
        </text>
      </svg>
    </div>
  );
};

export default RevenueChart;
