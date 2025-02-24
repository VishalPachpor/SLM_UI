"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Shield,
  TrendingUp,
  Lock,
  BarChart3,
  RefreshCcw,
} from "lucide-react";

const features = [
  {
    icon: TrendingUp,
    title: "High Yield Generation",
    description:
      "Maximize returns through automated yield optimization across multiple markets",
    stats: "Up to 24.61% APY",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description:
      "Enterprise-level security with multi-sig controls and regular audits",
    stats: "100% Secure",
  },
  {
    icon: RefreshCcw,
    title: "Auto-Compounding",
    description:
      "Yields are automatically reinvested to maximize your earning potential",
    stats: "24/7 Optimization",
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description:
      "Maintain full control of your assets with complete transparency",
    stats: "Your Keys, Your Crypto",
  },
  {
    icon: Zap,
    title: "Instant Liquidity",
    description: "Deposit and withdraw at any time with no lockup periods",
    stats: "Zero Lock-up",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description:
      "Track your portfolio performance with detailed analytics and insights",
    stats: "Live Monitoring",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a1229]">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#ed796b]/5" />
        <div className="absolute h-[1000px] w-[1000px] -top-[200px] -left-[500px] bg-[#BB86FC]/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 rounded-full bg-[#ed796b]/10 mb-4"
          >
            <Zap className="w-6 h-6 text-[#ed796b]" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E6EDF3]">
            Built for Performance
          </h2>
          <p className="text-[#A8B2D1] text-lg max-w-2xl mx-auto">
            Advanced features designed to maximize your yields while ensuring
            security and transparency
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ed796b]/20 to-[#BB86FC]/20 rounded-lg blur-xl transform group-hover:scale-105 transition-transform" />
              <div className="relative p-6 rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229]/80 backdrop-blur-sm hover:border-[#ed796b]/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-lg bg-[#ed796b]/10">
                      <feature.icon className="w-6 h-6 text-[#ed796b] transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#A8B2D1] mb-4">{feature.description}</p>
                    <div className="text-[#ed796b] font-medium">
                      {feature.stats}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
