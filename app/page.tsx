import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { TrustSignals } from "@/components/trust-signals";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { RoadmapSection } from "@/components/roadmap-section";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <TrustSignals />
        <RoadmapSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
