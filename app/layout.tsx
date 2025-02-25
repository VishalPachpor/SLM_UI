import type React from "react";
import "@/styles/globals.css";
import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";
import { StarknetProvider } from "@/lib/starknet-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "SLM Smart Liquidity Commander",
  description:
    "Smart yield optimization platform on StarkNet that leverages automated, market-adaptive vaults",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("dark", spaceGrotesk.variable)}>
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <StarknetProvider>{children}</StarknetProvider>
      </body>
    </html>
  );
}
