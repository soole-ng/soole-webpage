import DarkFeatureContainer from "@/components/landing-page-components/dark-feature-container";
import FeatureContainer from "@/components/landing-page-components/feature-container";
import Features from "@/components/landing-page-components/features";
import GetStartStarted from "@/components/landing-page-components/get-started";
import SlantPhoneSection from "@/components/landing-page-components/slant-section";
import Footer from "@/components/shared/footer";
import SecondHero from "@/components/shared/second-hero";
import FloatingWhatsApp from "@/components/shared/floating-whatsapp";

export default function Home() {
  return (
    <main>
      <SecondHero 
      mainText="Travel Smart: Share Rides, Share Costs"
      subText="Heading out of town? Soole lets you offer empty seats to verified riders going your way. Whether you're traveling for work, family, or leisure, earn extra income and help others move safely without changing your routine."
        backgroundImage="/images/third-hero.png"
      />
<Features />
<FeatureContainer />
<GetStartStarted page="driver" />
<SlantPhoneSection backgroundColor="#C9EC7C" textColor="#0C1316" />
<Footer />
<FloatingWhatsApp />
    </main>
  );
}
