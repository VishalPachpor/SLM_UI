"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Github, DiscIcon, Mail } from "lucide-react";

const navigation = {
  product: [
    { name: "Features", href: "/#features", id: "features" },
    { name: "How it Works", href: "/#how-it-works", id: "how-it-works" },
    { name: "Security", href: "/#security", id: "security" },
    { name: "FAQ", href: "/#faq", id: "faq" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/api" },
    { name: "Status", href: "/status" },
    { name: "Terms of Service", href: "/terms" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
    },
    {
      name: "Discord",
      href: "https://discord.gg",
      icon: DiscIcon,
    },
  ],
};

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

export function Footer() {
  return (
    <footer className="bg-[#0a1229] border-t border-[#ed796b]/10">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand and Description */}
          <motion.div variants={item} className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-[#E6EDF3]">
              SLM
            </Link>
            <p className="text-[#A8B2D1] max-w-xs">
              Smart Liquidity Commander - Automated yield optimization platform
              on StarkNet
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div variants={item}>
            <h3 className="text-[#ed796b] font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {navigation.product.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    scroll={false}
                    className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
                    onClick={(e) => {
                      if (item.id) {
                        e.preventDefault();
                        document
                          .getElementById(item.id)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={item}>
            <h3 className="text-[#ed796b] font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div variants={item}>
            <h3 className="text-[#ed796b] font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Newsletter and Copyright */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-[#ed796b]/10"
        >
          <motion.div
            variants={item}
            className="flex flex-col md:flex-row justify-between items-center gap-8"
          >
            <div className="flex items-center gap-2 text-[#A8B2D1]">
              <Mail className="h-5 w-5" />
              <span>contact@slm.finance</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1229]/80 border border-green-500/20 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                <span className="text-green-400 text-xs font-medium">
                  USDC Vault
                </span>
                <span className="text-white/80 bg-green-500/20 text-xs px-2 py-0.5 rounded-full">
                  4 active
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1229]/80 border border-blue-500/20 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
                </span>
                <span className="text-blue-400 text-xs font-medium">
                  ETH Vault
                </span>
                <span className="text-white/80 bg-blue-500/20 text-xs px-2 py-0.5 rounded-full">
                  2 active
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#0a1229]/80 border border-purple-500/20 rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                </span>
                <span className="text-purple-400 text-xs font-medium">
                  STRK Vault
                </span>
                <span className="text-white/80 bg-purple-500/20 text-xs px-2 py-0.5 rounded-full">
                  3 active
                </span>
              </div>
            </div>
            <p className="text-[#A8B2D1]">
              © {new Date().getFullYear()} SLM. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
