import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProofBanner from "@/components/sections/SocialProofBanner";
import PainSection from "@/components/sections/PainSection";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import ROICalculator from "@/components/sections/ROICalculator";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProofBanner />
      <PainSection />
      <Features />
      <HowItWorks />
      <Testimonials />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
