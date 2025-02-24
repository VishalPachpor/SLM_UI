"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const stats = [
  { label: "Total Value Locked", value: "$5.4M+" },
  { label: "Average APY", value: "13.2%" },
  { label: "Active Vaults", value: "4" },
  { label: "Total Users", value: "1,000+" },
];

export function ReadyToMaximize() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a1229]">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#ed796b]/5" />
        <div className="absolute h-[1000px] w-[1000px] -top-[200px] -left-[500px] bg-[#BB86FC]/10 rounded-full blur-3xl" />
        <div className="absolute h-[1000px] w-[1000px] -bottom-[200px] -right-[500px] bg-[#ed796b]/10 rounded-full blur-3xl" />
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-[#ed796b]/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: 0,
            }}
            animate={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center p-2 rounded-full bg-[#ed796b]/10 mb-4"
            >
              <Sparkles className="w-6 h-6 text-[#ed796b]" />
            </motion.div>

            {/* Title and Description */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-[#E6EDF3]">
                Ready to Maximize Your Yields?
              </h2>
              <p className="text-xl text-[#A8B2D1] max-w-2xl mx-auto">
                Join thousands of users already earning optimized yields through
                our smart vaults
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/app">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg bg-[#ed796b] text-white hover:bg-[#ed796b]/90 transition-all duration-300 group"
                >
                  Launch App
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg border-[#ed796b] text-[#ed796b] hover:bg-[#ed796b]/10 transition-all duration-300"
                >
                  Read Documentation
                </Button>
              </Link>
            </div>

            {/* Stats Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ed796b]/20 to-[#BB86FC]/20 rounded-lg blur-xl transform group-hover:scale-110 transition-transform" />
                  <div className="relative p-6 rounded-lg border border-[#ed796b]/20 bg-[#0a1229]/80 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-[#ed796b] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[#A8B2D1]">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
