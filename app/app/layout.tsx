"use client";

import { AppHeader } from "@/components/app/header";
import { Footer } from "@/components/ui/footer";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0a1229] flex flex-col">
      <AppHeader />
      <main className="flex-1 container py-8">{children}</main>
      <Footer
        links={[
          { href: "/about", label: "About" },
          { href: "/docs", label: "Docs" },
          { href: "/terms", label: "Terms" },
        ]}
        socials={{
          twitter: "https://twitter.com/slm",
          github: "https://github.com/slm",
        }}
      />
    </div>
  );
}
