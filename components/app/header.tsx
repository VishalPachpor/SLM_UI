"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
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
import { useWallet } from "@/hooks/use-wallet";
import { WalletModal } from "@/components/ui/wallet-modal";

export function AppHeader() {
  const pathname = usePathname();
  const {
    connectWallet,
    disconnectWallet,
    isConnected,
    formattedAddress,
    isConnecting,
    showWalletModal,
    handleModalClose,
  } = useWallet();

  const isActive = (path: string) => {
    if (path === "/app/dashboard" && pathname.startsWith("/app/dashboard"))
      return true;
    if (path === "/app/vaults" && pathname.startsWith("/app/vaults"))
      return true;
    return false;
  };

  return (
    <>
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
              <Link
                href="/app/dashboard"
                className={`flex items-center gap-2 text-lg font-medium transition-colors ${
                  isActive("/app/dashboard")
                    ? "text-[#ed796b]"
                    : "text-[#A8B2D1] hover:text-[#ed796b]"
                }`}
              >
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
            </nav>
          </div>
          {isConnected ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="gap-2 bg-[#0a1229] border-[#A8B2D1]/20 text-[#E6EDF3]"
                >
                  <WalletIcon className="h-4 w-4" />
                  {formattedAddress}
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
      <WalletModal isOpen={showWalletModal} onClose={handleModalClose} />
    </>
  );
}
