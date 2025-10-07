"use client"

import { motion } from "framer-motion"

interface DoubleDiamondIndicatorProps {
  currentPhase: "discover" | "define" | "develop" | "deliver" | null
}

export function DoubleDiamondIndicator({ currentPhase }: DoubleDiamondIndicatorProps) {
  const diamondColor = "rgb(255, 107, 107)"
  const inactiveColor = "rgb(100, 100, 100)"
  const activeStroke = "rgb(96, 165, 250)" // Lighter blue for dark background
  const inactiveStroke = "rgb(71, 85, 105)"

  const phases = [
    { name: "Discover", x: 60, phase: "discover" },
    { name: "Define", x: 180, phase: "define" },
    { name: "Develop", x: 300, phase: "develop" },
    { name: "Deliver", x: 420, phase: "deliver" },
  ]

  return (
    <div className="flex justify-center pt-6 pb-4">
      <svg width="480" height="170" viewBox="0 0 480 170" className="drop-shadow-2xl">
        <defs>
          <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(255, 127, 127)" stopOpacity="1" />
            <stop offset="100%" stopColor="rgb(255, 87, 87)" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="inactiveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgb(120, 120, 120)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(80, 80, 80)" stopOpacity="0.6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.line
          x1="150"
          y1="60"
          x2="270"
          y2="60"
          stroke="url(#diamondGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        <motion.path
          d="M 30 60 L 90 10 L 150 60 L 90 110 Z"
          fill={
            currentPhase === "discover" || currentPhase === "define"
              ? "url(#diamondGradient)"
              : "url(#inactiveGradient)"
          }
          stroke={currentPhase === "discover" || currentPhase === "define" ? activeStroke : inactiveStroke}
          strokeWidth={currentPhase === "discover" || currentPhase === "define" ? "5" : "3"}
          filter={currentPhase === "discover" || currentPhase === "define" ? "url(#glow)" : "none"}
          initial={{ scale: 1 }}
          animate={{
            scale: currentPhase === "discover" || currentPhase === "define" ? 1.1 : 1,
            opacity: currentPhase === "discover" || currentPhase === "define" ? 1 : 0.5,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <motion.path
          d="M 270 60 L 330 10 L 390 60 L 330 110 Z"
          fill={
            currentPhase === "develop" || currentPhase === "deliver"
              ? "url(#diamondGradient)"
              : "url(#inactiveGradient)"
          }
          stroke={currentPhase === "develop" || currentPhase === "deliver" ? activeStroke : inactiveStroke}
          strokeWidth={currentPhase === "develop" || currentPhase === "deliver" ? "5" : "3"}
          filter={currentPhase === "develop" || currentPhase === "deliver" ? "url(#glow)" : "none"}
          initial={{ scale: 1 }}
          animate={{
            scale: currentPhase === "develop" || currentPhase === "deliver" ? 1.1 : 1,
            opacity: currentPhase === "develop" || currentPhase === "deliver" ? 1 : 0.5,
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        {phases.map((item) => (
          <motion.text
            key={item.phase}
            x={item.x}
            y="145"
            textAnchor="middle"
            fontSize="16"
            fontWeight={currentPhase === item.phase ? "800" : "600"}
            fill={currentPhase === item.phase ? "rgb(96, 165, 250)" : "rgb(200, 200, 200)"}
            initial={{ scale: 1, y: 145 }}
            animate={{
              scale: currentPhase === item.phase ? 1.15 : 1,
              y: currentPhase === item.phase ? 143 : 145,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {item.name}
          </motion.text>
        ))}
      </svg>
    </div>
  )
}
