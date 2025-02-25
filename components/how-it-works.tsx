"use client";

import { motion } from "framer-motion";
import { Wallet, ArrowRight, BarChart3, Coins } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Your Wallet",
    description:
      "Start by connecting your wallet to access the platform securely.",
    delay: 0.2,
  },
  {
    icon: Coins,
    title: "Deposit Assets",
    description:
      "Choose from multiple vaults and deposit your assets to start earning.",
    delay: 0.3,
  },
  {
    icon: BarChart3,
    title: "Earn Automated Yields",
    description:
      "Our smart vaults automatically optimize your yields across markets.",
    delay: 0.4,
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden bg-[#0a1229]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#ed796b]/5" />
        <div className="absolute h-[1000px] w-[1000px] -top-[500px] -right-[500px] bg-[#BB86FC]/10 rounded-full blur-3xl" />
        <div className="absolute h-[1000px] w-[1000px] -bottom-[500px] -left-[500px] bg-[#ed796b]/10 rounded-full blur-3xl" />
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
            <ArrowRight className="w-6 h-6 text-[#ed796b]" />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E6EDF3]">
            How It Works
          </h2>
          <p className="text-[#A8B2D1] text-lg max-w-2xl mx-auto">
            Start earning automated yields in three simple steps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-[#ed796b]/0 via-[#ed796b]/50 to-[#ed796b]/0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: step.delay }}
              className="relative"
            >
              <div className="p-6 rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229]/80 backdrop-blur-sm hover:border-[#ed796b]/50 transition-all duration-300 group">
                <div className="relative z-10">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ed796b]/20 to-[#BB86FC]/20 rounded-full blur-xl transform group-hover:scale-110 transition-transform" />
                    <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#0a1229] border border-[#ed796b]/50">
                      <step.icon className="w-8 h-8 text-[#ed796b] transform group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#A8B2D1]">{step.description}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-[#ed796b]/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
