"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeftIcon,
  InfoIcon,
  TrendingUpIcon,
  BarChart3Icon,
  WalletIcon,
} from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Progress } from "@/components/ui/progress";

// Import the vaults data from the vaults list component
const vaults = [
  {
    id: "strk",
    name: "Ever Yield STRK",
    description: "Maximizes yield by chasing supply apy across money markets",
    tvl: "$800K",
    apy: "8.6%",
    depositToken: "STRK",
    receiveToken: "slmSTRK",
    userBalance: 500,
    vaultBalance: 50,
    fees: "2% (Spring Reward) and 10bps (Yield)",
    performance: {
      avgApy7d: "9%",
      apy24h: "8.2%",
      weeklyYield: "+1.8%",
      monthlyYield: "+7.2%",
      totalYield: "+18.4%",
      history: [8, 8.2, 8.6, 9.1, 8.8, 8.4, 8.6],
    },
    activities: {
      nostra: "$500K",
      vesu: "$300K",
      lastRebalance: "1 hour ago",
      nextRebalance: "~3 hours",
      recentTransactions: [
        { type: "Deposit", amount: "30,000 STRK", time: "1 hour ago" },
        { type: "Rebalance", amount: "100,000 STRK", time: "3 hours ago" },
        { type: "Withdraw", amount: "15,000 STRK", time: "5 hours ago" },
      ],
    },
    recommendations: {
      conservative: 50,
      moderate: 125,
      aggressive: 250,
    },
  },
  {
    id: "eth",
    name: "Ever Yield ETH",
    description: "Maximizes yield by chasing supply apy across money markets",
    tvl: "$2.5M",
    apy: "6.11%",
    depositToken: "ETH",
    receiveToken: "slmETH",
    userBalance: 2,
    vaultBalance: 0.5,
    fees: "2% (Spring Reward) and 10bps (Yield)",
    performance: {
      avgApy7d: "6.5%",
      apy24h: "6.11%",
      weeklyYield: "+1.2%",
      monthlyYield: "+5.1%",
      totalYield: "+15.3%",
      history: [6.2, 6.4, 6.1, 6.3, 6.5, 6.2, 6.11],
    },
    activities: {
      nostra: "$1.5M",
      vesu: "$1M",
      lastRebalance: "30 mins ago",
      nextRebalance: "~4 hours",
      recentTransactions: [
        { type: "Deposit", amount: "10 ETH", time: "30 mins ago" },
        { type: "Rebalance", amount: "50 ETH", time: "2 hours ago" },
        { type: "Withdraw", amount: "5 ETH", time: "4 hours ago" },
      ],
    },
    recommendations: {
      conservative: 0.2,
      moderate: 0.5,
      aggressive: 1,
    },
  },
  {
    id: "usdc",
    name: "Ever Yield USDC",
    description:
      "This vault optimizes your deposited funds by directing them to the money market offering the highest supply APY among Vesu and Nostra. It automatically reallocates funds to maintain the best yield. Since yields are generated solely by moving funds between markets, the risk is minimal, providing stable returns regardless of market conditions.",
    tvl: "$1.2M",
    apy: "13.66%",
    depositToken: "USDC",
    receiveToken: "slmUSDC",
    userBalance: 1000,
    vaultBalance: 100,
    fees: "2% (Spring Reward) and 10bps (Yield)",
    performance: {
      avgApy7d: "14%",
      apy24h: "0.54%",
      weeklyYield: "+2.1%",
      monthlyYield: "+8.4%",
      totalYield: "+24.6%",
      history: [10, 12, 15, 13, 14, 16, 13.66],
    },
    activities: {
      nostra: "$800K",
      vesu: "$400K",
      lastRebalance: "2 hours ago",
      nextRebalance: "~4 hours",
      recentTransactions: [
        { type: "Deposit", amount: "50,000 USDC", time: "2 hours ago" },
        { type: "Rebalance", amount: "200,000 USDC", time: "4 hours ago" },
        { type: "Withdraw", amount: "25,000 USDC", time: "6 hours ago" },
      ],
    },
    recommendations: {
      conservative: 100,
      moderate: 250,
      aggressive: 500,
    },
  },
  {
    id: "usdt",
    name: "Ever Yield USDT",
    description: "Maximizes yield by chasing supply apy across money markets",
    tvl: "$900K",
    apy: "24.61%",
    depositToken: "USDT",
    receiveToken: "slmUSDT",
    userBalance: 800,
    vaultBalance: 200,
    fees: "2% (Spring Reward) and 10bps (Yield)",
    performance: {
      avgApy7d: "25%",
      apy24h: "24.61%",
      weeklyYield: "+3.2%",
      monthlyYield: "+12.8%",
      totalYield: "+38.4%",
      history: [23, 24, 25, 24.5, 24.2, 24.8, 24.61],
    },
    activities: {
      nostra: "$600K",
      vesu: "$300K",
      lastRebalance: "1 hour ago",
      nextRebalance: "~3 hours",
      recentTransactions: [
        { type: "Deposit", amount: "40,000 USDT", time: "1 hour ago" },
        { type: "Rebalance", amount: "150,000 USDT", time: "3 hours ago" },
        { type: "Withdraw", amount: "20,000 USDT", time: "5 hours ago" },
      ],
    },
    recommendations: {
      conservative: 80,
      moderate: 200,
      aggressive: 400,
    },
  },
];

export function VaultDetails({ vaultId }: { vaultId: string }) {
  const vault = vaults.find((v) => v.id === vaultId);
  const [amount, setAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("deposit");

  if (!vault) return null;

  const setPercentage = (percentage: number) => {
    const maxAmount =
      activeTab === "deposit" ? vault.userBalance : vault.vaultBalance;
    setAmount((maxAmount * percentage).toString());
    setError("");
  };

  const setRecommendedAmount = (
    type: "conservative" | "moderate" | "aggressive"
  ) => {
    setAmount(vault.recommendations[type].toString());
    setError("");
  };

  const handleTransaction = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      setError("Please enter a valid amount");
      return;
    }

    const maxAmount =
      activeTab === "deposit" ? vault.userBalance : vault.vaultBalance;
    if (parseFloat(amount) > maxAmount) {
      setError(
        `Insufficient ${activeTab === "deposit" ? "wallet" : "vault"} balance`
      );
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      // Simulate transaction
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setAmount("");
      setIsLoading(false);
    } catch (err) {
      setError(`Failed to ${activeTab}. Please try again.`);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4 mb-6">
          <Link
            href="/app"
            className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </Link>
          <h1 className="text-2xl font-bold text-[#E6EDF3]">{vault.name}</h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content - Left and Middle Columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Vault Overview */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <div className="grid gap-4 md:grid-cols-3 mb-4">
                <div>
                  <div className="text-sm text-[#A8B2D1]">
                    Total Value Locked
                  </div>
                  <div className="text-2xl font-bold text-[#E6EDF3]">
                    {vault.tvl}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#A8B2D1]">Current APY</div>
                  <div className="text-2xl font-bold text-[#ed796b]">
                    {vault.apy}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#A8B2D1]">Weekly Yield</div>
                  <div className="text-2xl font-bold text-[#ed796b]">
                    {vault.performance.weeklyYield}
                  </div>
                </div>
              </div>
              <p className="text-[#A8B2D1]">{vault.description}</p>
            </div>

            {/* Deposit/Withdraw Section */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <Tabs
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-2 mb-6 bg-[#0a1229]/50">
                  <TabsTrigger
                    value="deposit"
                    className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-[#0A192F] text-[#A8B2D1]"
                  >
                    Deposit
                  </TabsTrigger>
                  <TabsTrigger
                    value="withdraw"
                    className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-[#0A192F] text-[#A8B2D1]"
                  >
                    Withdraw
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="deposit" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#E6EDF3]">
                          {vault.depositToken}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <InfoIcon className="h-4 w-4 text-[#A8B2D1]" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#0A192F] border-[#A8B2D1]/10">
                              <p className="text-[#E6EDF3]">
                                Enter the amount of {vault.depositToken} you
                                want to deposit
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="text-sm text-[#A8B2D1]">
                        Wallet Balance: {vault.userBalance} {vault.depositToken}
                      </div>
                    </div>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setError("");
                      }}
                      className="text-lg bg-[#0a1229] border-[#A8B2D1]/20 text-[#E6EDF3] focus:border-[#ed796b] focus:ring-[#ed796b]"
                    />
                    {error && <p className="text-sm text-red-400">{error}</p>}

                    {/* Quick Percentages */}
                    <div className="space-y-2">
                      <div className="text-sm text-[#A8B2D1]">Quick Select</div>
                      <div className="flex gap-2">
                        {[0.1, 0.25, 0.5, 1].map((percent) => (
                          <Button
                            key={percent}
                            variant="outline"
                            size="sm"
                            onClick={() => setPercentage(percent)}
                            className="border-[#A8B2D1]/20 text-[#E6EDF3] hover:bg-[#ed796b] hover:text-[#0A192F]"
                          >
                            {percent * 100}%
                          </Button>
                        ))}
                      </div>
                    </div>

                    {/* Recommended Amounts */}
                    <div className="space-y-2">
                      <div className="text-sm text-[#A8B2D1]">
                        Recommended Amounts
                      </div>
                      <div className="flex gap-2">
                        {["conservative", "moderate", "aggressive"].map(
                          (type) => (
                            <Button
                              key={type}
                              variant="secondary"
                              size="sm"
                              onClick={() => setRecommendedAmount(type as any)}
                              className="bg-[#0a1229] text-[#E6EDF3] border border-[#A8B2D1]/20 hover:bg-[#ed796b] hover:text-white"
                            >
                              {type.charAt(0).toUpperCase() + type.slice(1)}:{" "}
                              {
                                vault.recommendations[
                                  type as keyof typeof vault.recommendations
                                ]
                              }{" "}
                              {vault.depositToken}
                            </Button>
                          )
                        )}
                      </div>
                    </div>

                    <Button
                      className="w-full bg-[#ed796b] text-[#0A192F] hover:bg-[#BB86FC]"
                      onClick={handleTransaction}
                      disabled={isLoading || !amount}
                    >
                      {isLoading ? "Processing..." : "Deposit"}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="withdraw" className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[#E6EDF3]">
                          {vault.depositToken}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              <InfoIcon className="h-4 w-4 text-[#A8B2D1]" />
                            </TooltipTrigger>
                            <TooltipContent className="bg-[#0A192F] border-[#A8B2D1]/10">
                              <p className="text-[#E6EDF3]">
                                Enter the amount of {vault.depositToken} you
                                want to withdraw
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="text-sm text-[#A8B2D1]">
                        Vault Balance: {vault.vaultBalance} {vault.depositToken}
                      </div>
                    </div>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => {
                        setAmount(e.target.value);
                        setError("");
                      }}
                      className="text-lg bg-[#0a1229] border-[#A8B2D1]/20 text-[#E6EDF3] focus:border-[#ed796b] focus:ring-[#ed796b]"
                    />
                    {error && <p className="text-sm text-red-400">{error}</p>}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPercentage(0.25)}
                        className="border-[#A8B2D1]/20 text-[#E6EDF3] hover:bg-[#ed796b] hover:text-[#0A192F]"
                      >
                        25%
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPercentage(0.5)}
                        className="border-[#A8B2D1]/20 text-[#E6EDF3] hover:bg-[#ed796b] hover:text-[#0A192F]"
                      >
                        50%
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPercentage(0.75)}
                        className="border-[#A8B2D1]/20 text-[#E6EDF3] hover:bg-[#ed796b] hover:text-[#0A192F]"
                      >
                        75%
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPercentage(1)}
                        className="border-[#A8B2D1]/20 text-[#E6EDF3] hover:bg-[#ed796b] hover:text-[#0A192F]"
                      >
                        100%
                      </Button>
                    </div>
                    <Button
                      className="w-full bg-[#ed796b] text-[#0A192F] hover:bg-[#BB86FC]"
                      onClick={handleTransaction}
                      disabled={isLoading || !amount}
                    >
                      {isLoading ? "Processing..." : "Withdraw"}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Right Sidebar - Stats and Activities */}
          <div className="space-y-6">
            {/* Vault Stats */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#E6EDF3]">
                <BarChart3Icon className="h-5 w-5 text-[#ed796b]" />
                Vault Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-[#A8B2D1]">Total TVL</div>
                  <div className="font-medium text-[#E6EDF3]">{vault.tvl}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[#A8B2D1]">Current APY</div>
                  <div className="font-medium text-[#ed796b]">{vault.apy}</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[#A8B2D1]">Fees</div>
                  <div className="font-medium text-[#E6EDF3]">{vault.fees}</div>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#E6EDF3]">
                <TrendingUpIcon className="h-5 w-5 text-[#ed796b]" />
                Performance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <div className="text-[#A8B2D1]">7-day Avg APY</div>
                  <div className="text-[#ed796b]">
                    {vault.performance.avgApy7d}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[#A8B2D1]">24h APY</div>
                  <div className="text-[#E6EDF3]">
                    {vault.performance.apy24h}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[#A8B2D1]">Monthly Yield</div>
                  <div className="text-[#ed796b]">
                    {vault.performance.monthlyYield}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="text-[#A8B2D1]">Total Yield</div>
                  <div className="text-[#ed796b]">
                    {vault.performance.totalYield}
                  </div>
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className="rounded-lg border border-[#A8B2D1]/10 bg-[#0a1229] p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#E6EDF3]">
                <WalletIcon className="h-5 w-5 text-[#ed796b]" />
                Activities
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-[#A8B2D1] mb-2">
                    Fund Distribution
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#E6EDF3]">Nostra</span>
                      <span className="text-[#E6EDF3]">
                        {vault.activities.nostra}
                      </span>
                    </div>
                    <Progress
                      value={67}
                      className="h-2 bg-[#A8B2D1]/10 [&>div]:bg-[#ed796b]"
                    />
                    <div className="flex justify-between text-sm">
                      <span className="text-[#E6EDF3]">Vesu</span>
                      <span className="text-[#E6EDF3]">
                        {vault.activities.vesu}
                      </span>
                    </div>
                    <Progress
                      value={33}
                      className="h-2 bg-[#A8B2D1]/10 [&>div]:bg-[#BB86FC]"
                    />
                  </div>
                </div>
                <div className="border-t border-[#A8B2D1]/10 pt-4">
                  <div className="text-sm text-[#A8B2D1] mb-2">
                    Recent Activity
                  </div>
                  <div className="space-y-3">
                    {vault.activities.recentTransactions.map((tx, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <div>
                          <span className="font-medium text-[#E6EDF3]">
                            {tx.type}
                          </span>
                          <span className="text-[#A8B2D1]"> • {tx.time}</span>
                        </div>
                        <span className="text-[#E6EDF3]">{tx.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
