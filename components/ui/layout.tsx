"use client";

import { ReactNode } from "react";
import { NavBar } from "./nav-bar";
import { Footer } from "./footer";

interface LayoutProps {
  children: ReactNode;
  navLinks: Array<{ href: string; label: string }>;
  footerLinks: Array<{ href: string; label: string }>;
  socials: {
    twitter?: string;
    github?: string;
  };
  address: string | null;
  isConnecting: boolean;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function Layout({
  children,
  navLinks,
  footerLinks,
  socials,
  address,
  isConnecting,
  onConnect,
  onDisconnect,
}: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#0a1229] flex flex-col">
      <NavBar
        links={navLinks}
        address={address}
        isConnecting={isConnecting}
        onConnect={onConnect}
        onDisconnect={onDisconnect}
      />
      <main className="flex-grow pt-16">{children}</main>
      <Footer links={footerLinks} socials={socials} />
    </div>
  );
}
