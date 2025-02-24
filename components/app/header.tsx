"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { WalletIcon, LayoutDashboard, Database } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import logo from "@/public/logo.png";
import { usePathname } from "next/navigation";

export function AppHeader() {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const pathname = usePathname();

  const connectWallet = async () => {
    try {
      setIsConnecting(true);
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setAddress("0x03b4...7ddb94");
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setAddress(null);
  };

  const isActive = (path: string) => {
    if (path === "/app" && pathname === "/app") return true;
    if (path === "/app/vaults" && pathname.startsWith("/app/vaults"))
      return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/10 bg-[#0a1229]/95 backdrop-blur supports-[backdrop-filter]:bg-[#0a1229]/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="font-bold text-xl">
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <Image src={logo} alt="" width={100} height={100} />
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/app"
              className={`flex items-center gap-2 text-lg font-medium transition-colors ${
                isActive("/app")
                  ? "text-[#ed796b]"
                  : "text-[#A8B2D1] hover:text-[#ed796b]"
              }`}
            >
              <LayoutDashboard className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/app/vaults"
              className={`flex items-center gap-2 text-lg font-medium transition-colors ${
                isActive("/app/vaults")
                  ? "text-[#ed796b]"
                  : "text-[#A8B2D1] hover:text-[#ed796b]"
              }`}
            >
              <Database className="h-5 w-5" />
              Vaults
            </Link>
          </nav>
        </div>
        {address ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="gap-2 bg-[#0a1229] border-[#A8B2D1]/20 text-[#E6EDF3]"
              >
                <WalletIcon className="h-4 w-4" />
                {address}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#0a1229] border-[#A8B2D1]/20"
            >
              <DropdownMenuItem
                onClick={disconnectWallet}
                className="text-[#E6EDF3] hover:text-[#ed796b]"
              >
                Disconnect
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            variant="default"
            onClick={connectWallet}
            disabled={isConnecting}
            className="gap-2 bg-[#ed796b] text-white hover:bg-[#ed796b]/90"
          >
            <WalletIcon className="h-4 w-4" />
            {isConnecting ? "Connecting..." : "Connect Wallet"}
          </Button>
        )}
      </div>
    </header>
  );
}
