import DarkFeatureContainer from "@/components/landing-page-components/dark-feature-container";
import FeatureContainer from "@/components/landing-page-components/feature-container";
import Features from "@/components/landing-page-components/features";
import GetStartStarted from "@/components/landing-page-components/get-started";
import Hero from "@/components/landing-page-components/hero";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <main>
<Hero />
<Features />
<FeatureContainer />
<DarkFeatureContainer />
<GetStartStarted />
<Footer />
    </main>
  );
}
