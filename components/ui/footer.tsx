"use client";

import { Github, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

interface FooterLink {
  href: string;
  label: string;
}

interface FooterProps {
  links: FooterLink[];
  socials: {
    twitter?: string;
    github?: string;
  };
}

export function Footer({ links, socials }: FooterProps) {
  return (
    <footer className="bg-[#0a1229] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Image src={logo} alt="" width={120} height={120} />
            <p className="mt-4 text-[#A8B2D1] max-w-md">
              SLM Smart Liquidity Commander is a cutting-edge DeFi platform that
              optimizes yield generation through intelligent liquidity
              management and automated strategies.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              {socials.twitter && (
                <Link
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                </Link>
              )}
              {socials.github && (
                <Link
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A8B2D1] hover:text-[#ed796b] transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#1a1b23]">
          <p className="text-[#A8B2D1] text-center">
            © {new Date().getFullYear()} SLM Smart Liquidity Commander. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
