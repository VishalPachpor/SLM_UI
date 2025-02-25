"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  ArrowRight,
  WalletIcon,
  Coins,
  BarChart2,
  TrendingUp,
  LineChart,
  PieChart,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useWallet } from "@/hooks/use-wallet";
import { WalletModal } from "@/components/ui/wallet-modal";

const floatingBubbles = [
  // Left side bubbles
  {
    Icon: Coins,
    delay: 0,
    size: 40,
    duration: 15,
    position: { left: "5%", top: "20%" },
  },
  {
    Icon: BarChart2,
    delay: 2,
    size: 30,
    duration: 12,
    position: { left: "15%", top: "30%" },
  },
  {
    Icon: TrendingUp,
    delay: 4,
    size: 35,
    duration: 18,
    position: { left: "8%", top: "45%" },
  },
  {
    Icon: LineChart,
    delay: 1,
    size: 25,
    duration: 20,
    position: { left: "20%", top: "15%" },
  },
  {
    Icon: PieChart,
    delay: 3,
    size: 45,
    duration: 16,
    position: { left: "12%", top: "60%" },
  },
  {
    Icon: ArrowUpRight,
    delay: 5,
    size: 28,
    duration: 14,
    position: { left: "25%", top: "40%" },
  },
  {
    Icon: Coins,
    delay: 6,
    size: 32,
    duration: 17,
    position: { left: "18%", top: "75%" },
  },
  {
    Icon: BarChart2,
    delay: 2.5,
    size: 38,
    duration: 19,
    position: { left: "30%", top: "25%" },
  },

  // Center-left bubbles
  {
    Icon: TrendingUp,
    delay: 1.5,
    size: 42,
    duration: 16,
    position: { left: "35%", top: "55%" },
  },
  {
    Icon: LineChart,
    delay: 3.5,
    size: 28,
    duration: 18,
    position: { left: "40%", top: "35%" },
  },
  {
    Icon: PieChart,
    delay: 4.5,
    size: 36,
    duration: 15,
    position: { left: "45%", top: "70%" },
  },
  {
    Icon: Coins,
    delay: 2.8,
    size: 34,
    duration: 17,
    position: { left: "50%", top: "25%" },
  },

  // Additional center bubbles
  {
    Icon: BarChart2,
    delay: 1.2,
    size: 30,
    duration: 19,
    position: { left: "55%", top: "45%" },
  },
  {
    Icon: TrendingUp,
    delay: 3.2,
    size: 38,
    duration: 16,
    position: { left: "48%", top: "65%" },
  },
  {
    Icon: LineChart,
    delay: 4.8,
    size: 32,
    duration: 18,
    position: { left: "52%", top: "15%" },
  },
  {
    Icon: PieChart,
    delay: 2.2,
    size: 40,
    duration: 15,
    position: { left: "58%", top: "80%" },
  },
  // Add right side bubbles
  {
    Icon: Coins,
    delay: 1.8,
    size: 36,
    duration: 18,
    position: { left: "65%", top: "35%" },
  },
  {
    Icon: BarChart2,
    delay: 3.5,
    size: 32,
    duration: 15,
    position: { left: "72%", top: "55%" },
  },
  {
    Icon: TrendingUp,
    delay: 2.5,
    size: 38,
    duration: 17,
    position: { left: "80%", top: "25%" },
  },
  {
    Icon: LineChart,
    delay: 4.2,
    size: 30,
    duration: 16,
    position: { left: "85%", top: "60%" },
  },
];

export function Hero() {
  const router = useRouter();
  const {
    connectWallet,
    disconnectWallet,
    isConnected,
    formattedAddress,
    isConnecting,
    showWalletModal,
    handleModalClose,
  } = useWallet();

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1229]/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <Image src={logo} alt="" width={120} height={120} />
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="/"
                className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
              >
                HOME
              </Link>
              <Link
                href="#features"
                className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
              >
                FEATURES
              </Link>
              <Link
                href="#how-it-works"
                className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
              >
                HOW IT WORKS
              </Link>
              <Link
                href="#roadmap"
                className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
              >
                ROADMAP
              </Link>
              <Link
                href="#faq"
                className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
              >
                FAQ's
              </Link>
              {isConnected ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="gap-2">
                      <WalletIcon className="h-4 w-4" />
                      {formattedAddress}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={disconnectWallet}>
                      Disconnect
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  variant="default"
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="gap-2 bg-[#1a1b23] text-[#ed796b] hover:bg-[#1a1b23]/80"
                >
                  <WalletIcon className="h-4 w-4" />
                  {isConnecting ? "Connecting..." : "Connect Wallet"}
                </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1229] pt-16">
        {/* Enhanced Animation Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient background with enhanced animation */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 30% 30%, rgba(237, 121, 107, 0.1), transparent 50%)",
                "radial-gradient(circle at 70% 70%, rgba(237, 121, 107, 0.1), transparent 50%)",
                "radial-gradient(circle at 30% 30%, rgba(237, 121, 107, 0.1), transparent 50%)",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#ed796b]/10 via-[#BB86FC]/10 to-[#ed796b]/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#ed796b]/5 to-transparent" />
          </motion.div>

          {/* Floating bubbles with enhanced animations */}
          {floatingBubbles.map((bubble, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
                x: [0, Math.sin(index) * 30, 0],
                y: [0, Math.cos(index) * 30, 0],
              }}
              transition={{
                duration: bubble.duration,
                repeat: Infinity,
                delay: bubble.delay,
                ease: "easeInOut",
              }}
              className="absolute"
              style={bubble.position}
            >
              <div className="relative group">
                <motion.div
                  className="absolute inset-0 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background: `radial-gradient(circle, ${
                      index % 2 === 0 ? "#ed796b" : "#BB86FC"
                    }33, transparent)`,
                    transform: "scale(1.8)",
                  }}
                />
                <div className="relative bg-[#0a1229]/40 backdrop-blur-sm border border-[#ed796b]/20 rounded-full p-3 hover:border-[#ed796b]/40 transition-all duration-300 group-hover:scale-110">
                  <bubble.Icon
                    size={bubble.size}
                    className={`text-${
                      index % 2 === 0 ? "[#ed796b]" : "[#BB86FC]"
                    } transition-transform`}
                  />
                </div>
              </div>
            </motion.div>
          ))}

          {/* Enhanced network lines */}
          <svg className="absolute inset-0 w-full h-full z-0 opacity-20">
            {[...Array(5)].map((_, i) => (
              <motion.path
                key={i}
                d={`M${i * 200},${50 + i * 50} C${150 + i * 100},${
                  100 + i * 25
                } ${300 + i * 100},${50 + i * 75} ${500 + i * 100},${
                  150 + i * 25
                } C${700 + i * 50},${250 - i * 50} ${850 + i * 50},${
                  150 + i * 25
                } ${1000 + i * 100},${200 + i * 25}`}
                stroke="url(#gradient)"
                strokeWidth="1"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ed796b">
                  <animate
                    attributeName="stop-color"
                    values="#ed796b; #BB86FC; #ed796b"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#BB86FC">
                  <animate
                    attributeName="stop-color"
                    values="#BB86FC; #ed796b; #BB86FC"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#ed796b">
                  <animate
                    attributeName="stop-color"
                    values="#ed796b; #BB86FC; #ed796b"
                    dur="8s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content with enhanced animations */}
        <div className="container relative z-10 mx-auto px-4">
          <div className="ml-auto max-w-[600px] space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="text-5xl md:text-7xl font-bold tracking-tight text-[#E6EDF3] leading-tight"
            >
              Smart Liquidity,{" "}
              <motion.div
                className="text-[#ed796b]"
                animate={{
                  color: ["#ed796b", "#BB86FC", "#ed796b"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                Automated Yields
              </motion.div>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="text-xl text-[#A8B2D1] font-light"
            >
              We're global consultancy that helps the world's most ambitious
              change makers define the future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: "easeOut",
              }}
              className="flex gap-4"
            >
              <Button
                size="lg"
                onClick={() => router.push("/app/vaults")}
                className="text-base bg-white text-[#0a1229] hover:bg-white/90 transition-all duration-300 group px-6 py-4"
              >
                LAUNCH APP
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base border-[#A8B2D1] text-white hover:bg-white/10 transition-all duration-300 px-6 py-4"
              >
                LEARN MORE
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      <WalletModal isOpen={showWalletModal} onClose={handleModalClose} />
    </>
  );
}
