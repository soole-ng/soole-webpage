import DarkFeatureContainer from "@/components/landing-page-components/dark-feature-container";
import FeatureContainer from "@/components/landing-page-components/feature-container";
import Features from "@/components/landing-page-components/features";
import GetStartStarted from "@/components/landing-page-components/get-started";
import SlantPhoneSection from "@/components/landing-page-components/slant-section";
import Footer from "@/components/shared/footer";
import SecondHero from "@/components/shared/second-hero";

export default function Home() {
  return (
    <main>
      <SecondHero />
<Features />
<DarkFeatureContainer />
<GetStartStarted  page="rider"/>
<SlantPhoneSection  backgroundColor="#C9EC7C" textColor="#0C1316" />
<Footer />
    </main>
  );
}
