"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Define the milestones data
const milestones = [
  {
    id: 1,
    date: "Q4 2024",
    title: "Stable Vaults",
    description:
      "Single-sided stablecoin vaults with automated yield strategies",
    completed: true,
  },
  {
    id: 2,
    date: "Q1 2025",
    title: "Dynamic Vaults",
    description: "Dynamic asset allocation with market-adaptive strategies",
    completed: false,
  },
  {
    id: 3,
    date: "Q2 2025",
    title: "Options Vaults",
    description: "Structured Products using Options Strategies",
    completed: false,
  },
];

// Generate random stars for the background
const generateStars = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    size: Math.random() * 2 + 1,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    animationDuration: `${Math.random() * 3 + 2}s`,
  }));
};

export function RoadmapSection() {
  const [stars] = useState(() => generateStars(100));
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  return (
    <section id="roadmap" className="relative py-24 overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1229] via-[#1e1b4b] to-[#0a1229] overflow-hidden">
        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: parseFloat(star.animationDuration),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Glowing nebulas */}
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(237, 121, 107, 0.6), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(187, 134, 252, 0.6), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-[#E6EDF3] mb-16"
        >
          Our <span className="text-[#ed796b]">Roadmap</span>
        </motion.h2>

        {/* Rocket Journey */}
        <div className="relative mx-auto max-w-5xl">
          {/* Path Line */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-[#ed796b]/20 via-[#ed796b]/40 to-[#ed796b]/20 -translate-y-1/2 rounded-full hidden md:block" />

          {/* Dotted Path */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden md:block">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-1 w-1 rounded-full bg-[#ed796b]"
                style={{ left: `${i * 1}%`, opacity: i % 2 === 0 ? 0.8 : 0.4 }}
              />
            ))}
          </div>

          {/* Rocket positioned near Dynamic Vault (milestone 2) */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 z-20 hidden md:block"
            style={{ left: "35%" }}
            animate={{
              x: [0, 10, 0],
              y: [0, -5, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L8 21L12 19L16 21L12 2Z"
                fill="#ed796b"
                stroke="#ed796b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 14L4 17M16 14L20 17"
                stroke="#ed796b"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            {/* Add a subtle glow around the rocket */}
            <div className="absolute inset-0 -z-10 rounded-full blur-md bg-[#ed796b]/30 scale-150" />
          </motion.div>

          {/* Progress indicator line - shows completion up to the rocket */}
          <div
            className="absolute left-0 top-1/2 h-1.5 bg-gradient-to-r from-[#ed796b] to-[#ed796b]/80 -translate-y-1/2 rounded-full hidden md:block"
            style={{ width: "35%" }}
          />

          {/* Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mx-auto w-full max-w-xs"
                onMouseEnter={() => setHoveredMilestone(milestone.id)}
                onMouseLeave={() => setHoveredMilestone(null)}
              >
                {/* Planet */}
                <div className="mb-6 h-28 md:h-40 flex items-center justify-center">
                  <motion.div
                    className={`relative rounded-full border-2 ${
                      milestone.completed
                        ? "border-[#ed796b] bg-[#ed796b]/10"
                        : "border-[#BB86FC] bg-[#BB86FC]/10"
                    } w-20 h-20 md:w-28 md:h-28 flex items-center justify-center`}
                    animate={
                      hoveredMilestone === milestone.id
                        ? {
                            scale: [1, 1.1, 1],
                            boxShadow: [
                              `0 0 0 rgba(${
                                milestone.completed
                                  ? "237, 121, 107"
                                  : "187, 134, 252"
                              }, 0.4)`,
                              `0 0 20px rgba(${
                                milestone.completed
                                  ? "237, 121, 107"
                                  : "187, 134, 252"
                              }, 0.7)`,
                              `0 0 0 rgba(${
                                milestone.completed
                                  ? "237, 121, 107"
                                  : "187, 134, 252"
                              }, 0.4)`,
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: hoveredMilestone === milestone.id ? Infinity : 0,
                      ease: "easeInOut",
                    }}
                  >
                    {/* Planet rings */}
                    <div className="absolute inset-0 rounded-full border border-white/10 scale-[1.2] rotate-45" />
                    <div className="absolute inset-0 rounded-full border border-white/5 scale-[1.4] -rotate-12" />

                    {/* Indicator for completed milestones */}
                    {milestone.completed && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#ed796b] rounded-full border-2 border-[#0a1229] flex items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 12L10 17L19 8"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}

                    {/* Planet number */}
                    <span className="text-2xl font-bold text-white">
                      {milestone.id}
                    </span>
                  </motion.div>
                </div>

                {/* Date */}
                <motion.p
                  className="text-[#A8B2D1] text-sm md:text-base text-center mb-2"
                  animate={
                    hoveredMilestone === milestone.id
                      ? { color: milestone.completed ? "#ed796b" : "#BB86FC" }
                      : {}
                  }
                >
                  {milestone.date}
                </motion.p>

                {/* Title */}
                <h3
                  className={`text-xl md:text-2xl font-bold text-center mb-2 ${
                    milestone.completed ? "text-[#ed796b]" : "text-[#BB86FC]"
                  }`}
                >
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="text-[#A8B2D1] text-center">
                  {milestone.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
