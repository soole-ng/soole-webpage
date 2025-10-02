import DarkFeatureContainer from "@/components/landing-page-components/dark-feature-container";
import FeatureContainer from "@/components/landing-page-components/feature-container";
import Features from "@/components/landing-page-components/features";
import GetStartStarted from "@/components/landing-page-components/get-started";
import Hero from "@/components/landing-page-components/hero";
import SlantPhoneSection from "@/components/landing-page-components/slant-section";
import Footer from "@/components/shared/footer";
import AboutHero from "./components/about-hero";
import AboutFeatures from "./components/about-features";
import FloatingWhatsApp from "@/components/shared/floating-whatsapp";

export default function AboutUs() {
  return (
    <main>
      <AboutHero />
      <Features />
      <AboutFeatures />
      
      <SlantPhoneSection backgroundColor="#C9EC7C" textColor="#0C1316" />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}


