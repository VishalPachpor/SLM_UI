"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { TrendingUp, Search, Filter } from "lucide-react";

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
    inflows: "+$50K",
    deposits: "10",
    category: "Liquid Staking",
    chain: "StarkNet",
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
    inflows: "+$150K",
    deposits: "25",
    category: "Liquid Staking",
    chain: "StarkNet",
  },
  {
    id: "usdc",
    name: "Ever Yield USDC",
    description: "Maximizes yield by chasing supply apy across money markets",
    tvl: "$1.2M",
    apy: "13.66%",
    depositToken: "USDC",
    receiveToken: "slmUSDC",
    userBalance: 1000,
    vaultBalance: 100,
    inflows: "+$200K",
    deposits: "45",
    category: "Stablecoin",
    chain: "StarkNet",
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
    inflows: "+$100K",
    deposits: "30",
    category: "Stablecoin",
    chain: "StarkNet",
  },
];

const timeframes = ["4H", "24H", "Week", "Month", "Total"];
const categories = ["All", "Liquid Staking", "Stablecoin"];
const chains = ["All", "StarkNet"];
const sortOptions = ["APY", "TVL", "Inflows"];

export function VaultsList() {
  const [selectedTimeframe, setSelectedTimeframe] = useState("24H");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedChain, setSelectedChain] = useState("All");
  const [sortBy, setSortBy] = useState("APY");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredVaults = vaults.filter((vault) => {
    if (selectedCategory !== "All" && vault.category !== selectedCategory)
      return false;
    if (selectedChain !== "All" && vault.chain !== selectedChain) return false;
    if (
      searchQuery &&
      !vault.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
      return false;
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg bg-[#0a1229] border border-[#A8B2D1]/10"
        >
          <div className="text-[#A8B2D1]">Total Value Locked</div>
          <div className="text-2xl font-bold text-[#E6EDF3]">$5.4M</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-lg bg-[#0a1229] border border-[#A8B2D1]/10"
        >
          <div className="text-[#A8B2D1]">Total Deposits</div>
          <div className="text-2xl font-bold text-[#E6EDF3]">110</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-lg bg-[#0a1229] border border-[#A8B2D1]/10"
        >
          <div className="text-[#A8B2D1]">Average APY</div>
          <div className="text-2xl font-bold text-[#ed796b]">13.2%</div>
        </motion.div>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A8B2D1] h-4 w-4" />
            <Input
              placeholder="Search vaults..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#0a1229] border-[#A8B2D1]/20"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-[140px] bg-[#0a1229] border-[#A8B2D1]/20">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={selectedChain} onValueChange={setSelectedChain}>
            <SelectTrigger className="w-[140px] bg-[#0a1229] border-[#A8B2D1]/20">
              <SelectValue placeholder="Chain" />
            </SelectTrigger>
            <SelectContent>
              {chains.map((chain) => (
                <SelectItem key={chain} value={chain}>
                  {chain}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[140px] bg-[#0a1229] border-[#A8B2D1]/20">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option} value={option}>
                Sort by {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="hot" className="w-full">
        <TabsList className="bg-[#0a1229]/50 mb-6">
          <TabsTrigger
            value="hot"
            className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-white"
          >
            Hot Vaults
          </TabsTrigger>
          <TabsTrigger
            value="all"
            className="data-[state=active]:bg-[#ed796b] data-[state=active]:text-white"
          >
            All Vaults
          </TabsTrigger>
        </TabsList>

        {/* Time Frame Selector */}
        <div className="flex gap-2 mb-6">
          {timeframes.map((timeframe) => (
            <Button
              key={timeframe}
              variant={selectedTimeframe === timeframe ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTimeframe(timeframe)}
              className={
                selectedTimeframe === timeframe
                  ? "bg-[#ed796b] text-white"
                  : "border-[#A8B2D1]/20"
              }
            >
              {timeframe}
            </Button>
          ))}
        </div>

        <TabsContent value="hot" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredVaults.map((vault, index) => (
              <motion.div
                key={vault.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg bg-[#0a1229] p-6 border border-[#A8B2D1]/10 hover:border-[#ed796b]/50 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#E6EDF3] group-hover:text-[#ed796b] transition-colors">
                      {vault.name}
                    </h3>
                    <p className="text-sm text-[#A8B2D1] mt-1">
                      {vault.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="text-sm text-[#A8B2D1]">TVL</div>
                        <div className="font-medium text-[#E6EDF3]">
                          {vault.tvl}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-[#A8B2D1]">APY</div>
                        <div className="font-medium text-[#ed796b]">
                          {vault.apy}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="text-sm text-[#A8B2D1]">24h Inflows</div>
                      <div className="font-medium text-[#4CAF50]">
                        {vault.inflows}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="grid gap-1">
                    <div className="text-sm text-[#A8B2D1]">Deposit</div>
                    <div className="font-medium text-[#E6EDF3]">
                      {vault.depositToken}
                    </div>
                    <div className="text-sm text-[#A8B2D1] mt-2">Get</div>
                    <div className="font-medium text-[#E6EDF3]">
                      {vault.receiveToken}
                    </div>
                  </div>
                  <Link href={`/app/vaults/${vault.id}`}>
                    <Button className="bg-[#ed796b] text-white hover:bg-[#ed796b]/90 transition-colors">
                      Deposit
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {filteredVaults.map((vault, index) => (
              <motion.div
                key={vault.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg bg-[#0a1229] p-6 border border-[#A8B2D1]/10 hover:border-[#ed796b]/50 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#E6EDF3] group-hover:text-[#ed796b] transition-colors">
                      {vault.name}
                    </h3>
                    <p className="text-sm text-[#A8B2D1] mt-1">
                      {vault.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-4">
                      <div>
                        <div className="text-sm text-[#A8B2D1]">TVL</div>
                        <div className="font-medium text-[#E6EDF3]">
                          {vault.tvl}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-[#A8B2D1]">APY</div>
                        <div className="font-medium text-[#ed796b]">
                          {vault.apy}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="text-sm text-[#A8B2D1]">24h Inflows</div>
                      <div className="font-medium text-[#4CAF50]">
                        {vault.inflows}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="grid gap-1">
                    <div className="text-sm text-[#A8B2D1]">Deposit</div>
                    <div className="font-medium text-[#E6EDF3]">
                      {vault.depositToken}
                    </div>
                    <div className="text-sm text-[#A8B2D1] mt-2">Get</div>
                    <div className="font-medium text-[#E6EDF3]">
                      {vault.receiveToken}
                    </div>
                  </div>
                  <Link href={`/app/vaults/${vault.id}`}>
                    <Button className="bg-[#ed796b] text-white hover:bg-[#ed796b]/90 transition-colors">
                      Deposit
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
