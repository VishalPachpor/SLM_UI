import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { StarknetProvider } from "@/lib/starknet-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "SLM Smart Liquidity Commander",
  description: "Smart yield optimization platform on StarkNet that leverages automated, market-adaptive vaults",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <StarknetProvider>
          {children}
        </StarknetProvider>
      </body>
    </html>
  )
}



import './globals.css'