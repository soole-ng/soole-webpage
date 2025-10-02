import DarkFeatureContainer from "@/components/landing-page-components/dark-feature-container";
import FeatureContainer from "@/components/landing-page-components/feature-container";
import Features from "@/components/landing-page-components/features";
import GetStartStarted from "@/components/landing-page-components/get-started";
import Hero from "@/components/landing-page-components/hero";
import SlantPhoneSection from "@/components/landing-page-components/slant-section";
import Footer from "@/components/shared/footer";
import FloatingWhatsApp from "@/components/shared/floating-whatsapp";

export default function Home() {
  return (
    <main>
<Hero />
<Features />

<FeatureContainer />
<DarkFeatureContainer />
<GetStartStarted />
<SlantPhoneSection />
<Footer />
<FloatingWhatsApp />
    </main>
  );
}
