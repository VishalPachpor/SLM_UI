"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  TrendingUp,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Activity,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const portfolioStats = {
  totalValue: "$12,450",
  totalYield: "+$1,245",
  yieldPercentage: "+11.2%",
  positions: "4",
  performance: {
    daily: "+2.1%",
    weekly: "+5.8%",
    monthly: "+11.2%",
  },
};

const recentActivity = [
  {
    type: "Deposit",
    vault: "Ever Yield USDC",
    amount: "+5,000 USDC",
    time: "2 hours ago",
    status: "success",
  },
  {
    type: "Withdraw",
    vault: "Ever Yield ETH",
    amount: "-1.5 ETH",
    time: "1 day ago",
    status: "success",
  },
  {
    type: "Deposit",
    vault: "Ever Yield STRK",
    amount: "+1,000 STRK",
    time: "3 days ago",
    status: "success",
  },
];

const positions = [
  {
    vault: "Ever Yield USDC",
    value: "$5,000",
    yield: "+$425",
    apy: "13.66%",
    allocation: 40,
  },
  {
    vault: "Ever Yield ETH",
    value: "$3,750",
    yield: "+$320",
    apy: "6.11%",
    allocation: 30,
  },
  {
    vault: "Ever Yield STRK",
    value: "$2,500",
    yield: "+$350",
    apy: "8.6%",
    allocation: 20,
  },
  {
    vault: "Ever Yield USDT",
    value: "$1,200",
    yield: "+$150",
    apy: "24.61%",
    allocation: 10,
  },
];

export function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 rounded-lg bg-[#0a1229] border border-[#A8B2D1]/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="h-5 w-5 text-[#ed796b]" />
            <div className="text-[#A8B2D1]">Portfolio Value</div>
          </div>
          <div className="text-2xl font-bold text-[#E6EDF3]">
            {portfolioStats.totalValue}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-lg bg-[#0a1229] border border-[#A8B2D1]/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-[#ed796b]" />
            <div className="text-[#A8B2D1]">Total Yield</div>
          </div>
          <div className="text-2xl font-bold text-[#4CAF50]">
            {portfolioStats.totalYield}
            <span className="ml-2 text-lg">
              {portfolioStats.yieldPercentage}
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-lg bg-[#0a1229] border border-[#A8B2D1]/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <BarChart className="h-5 w-5 text-[#ed796b]" />
            <div className="text-[#A8B2D1]">Performance</div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between">
              <span className="text-[#A8B2D1] text-sm">24h</span>
              <span className="text-[#4CAF50]">
                {portfolioStats.performance.daily}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A8B2D1] text-sm">7d</span>
              <span className="text-[#4CAF50]">
                {portfolioStats.performance.weekly}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A8B2D1] text-sm">30d</span>
              <span className="text-[#4CAF50]">
                {portfolioStats.performance.monthly}
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="p-6 rounded-lg bg-[#0a1229] border border-[#A8B2D1]/10"
        >
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-5 w-5 text-[#ed796b]" />
            <div className="text-[#A8B2D1]">Active Positions</div>
          </div>
          <div className="text-2xl font-bold text-[#E6EDF3]">
            {portfolioStats.positions}
          </div>
        </motion.div>
      </div>

      {/* Positions and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Positions */}
        <Card className="col-span-2 bg-[#0a1229] border-[#A8B2D1]/10">
          <CardHeader>
            <CardTitle className="text-[#E6EDF3]">Your Positions</CardTitle>
            <CardDescription className="text-[#A8B2D1]">
              Overview of your vault positions and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {positions.map((position, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-[#A8B2D1]/10 hover:border-[#ed796b]/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-medium text-[#E6EDF3]">
                        {position.vault}
                      </h4>
                      <div className="text-sm text-[#A8B2D1] mt-1">
                        Value: {position.value}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#4CAF50]">{position.yield}</div>
                      <div className="text-sm text-[#ed796b]">
                        APY: {position.apy}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#A8B2D1]">Allocation</span>
                      <span className="text-[#E6EDF3]">
                        {position.allocation}%
                      </span>
                    </div>
                    <Progress
                      value={position.allocation}
                      className="h-2 bg-[#A8B2D1]/10 [&>div]:bg-[#ed796b]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-[#0a1229] border-[#A8B2D1]/10">
          <CardHeader>
            <CardTitle className="text-[#E6EDF3]">Recent Activity</CardTitle>
            <CardDescription className="text-[#A8B2D1]">
              Your recent transactions and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-[#A8B2D1]/10 last:border-0 last:pb-0"
                >
                  <div
                    className={`p-2 rounded-full ${
                      activity.type === "Deposit"
                        ? "bg-[#4CAF50]/10 text-[#4CAF50]"
                        : "bg-[#ed796b]/10 text-[#ed796b]"
                    }`}
                  >
                    {activity.type === "Deposit" ? (
                      <ArrowUpRight className="h-4 w-4" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-medium text-[#E6EDF3]">
                        {activity.type}
                      </h4>
                      <span
                        className={
                          activity.type === "Deposit"
                            ? "text-[#4CAF50]"
                            : "text-[#ed796b]"
                        }
                      >
                        {activity.amount}
                      </span>
                    </div>
                    <div className="text-sm text-[#A8B2D1]">
                      {activity.vault}
                    </div>
                    <div className="flex items-center gap-2 mt-1 text-sm text-[#A8B2D1]">
                      <Clock className="h-3 w-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
