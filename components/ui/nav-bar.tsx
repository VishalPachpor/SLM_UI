"use client";

import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavLink {
  href: string;
  label: string;
}

interface NavBarProps {
  links: NavLink[];
  address: string | null;
  isConnecting: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function NavBar({
  links,
  address,
  isConnecting,
  onConnect,
  onDisconnect,
}: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a1229]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-white flex items-center gap-2">
            <Image src={logo} alt="" width={120} height={120} />
          </div>
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            {address ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <WalletIcon className="h-4 w-4" />
                    {address}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={onDisconnect}>
                    Disconnect
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                variant="default"
                onClick={onConnect}
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
  );
}
