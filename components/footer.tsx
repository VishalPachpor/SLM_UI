"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Github, DiscIcon, Mail } from "lucide-react";

const navigation = {
  product: [
    { name: "Features", href: "/#features" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Security", href: "/#security" },
    { name: "FAQ", href: "/#faq" },
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
                    className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
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
            <p className="text-[#A8B2D1]">
              © {new Date().getFullYear()} SLM. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
