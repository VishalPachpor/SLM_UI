"use client";

import { motion } from "framer-motion";
import { Shield, Lock, CheckCircle } from "lucide-react";
import Image from "next/image";

const partners = [
  { name: "StarkNet", logo: "/starknet.png", width: 150, height: 50 },
  { name: "Nostra", logo: "/nostra.png", width: 140, height: 50 },
  { name: "Vesu", logo: "/vesu.png", width: 120, height: 40 },
];

const trustPoints = [
  {
    icon: Shield,
    title: "Security Audited",
    description: "Smart contracts audited by leading security firms",
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description: "Maintain full control of your assets at all times",
  },
  {
    icon: CheckCircle,
    title: "Transparent",
    description: "All operations are verifiable on-chain",
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

export function TrustSignals() {
  return (
    <section className="py-24 bg-[#0a1229]">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#E6EDF3]">
            Trusted by Leading Partners 
          </h2>
          <p className="text-[#A8B2D1] text-lg max-w-2xl mx-auto">
            Built on secure foundations with industry-leading partners
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-12 md:gap-24 mb-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex items-center justify-center p-6 rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229]/50 hover:border-[#ed796b]/50 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="opacity-80 hover:opacity-100 transition-opacity"
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-6 rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229]/50 hover:border-[#ed796b]/50 transition-all duration-300 group"
            >
              <point.icon className="h-10 w-10 text-[#ed796b] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-[#E6EDF3] mb-2">
                {point.title}
              </h3>
              <p className="text-[#A8B2D1]">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
