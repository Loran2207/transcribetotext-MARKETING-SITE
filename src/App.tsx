import { MotionConfig } from "framer-motion";
import { Nav } from "./components/sections/Nav";
import { Hero } from "./components/sections/Hero";
import { Stats } from "./components/sections/Stats";
import { AudioToText } from "./components/sections/AudioToText";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Features } from "./components/sections/Features";
import { SocialProof } from "./components/sections/SocialProof";
import { Languages } from "./components/sections/Languages";
import { Pricing } from "./components/sections/Pricing";
import { Industries } from "./components/sections/Industries";
import { Testimonials } from "./components/sections/Testimonials";
import { Faq } from "./components/sections/Faq";
import { FinalCta } from "./components/sections/FinalCta";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Stats />
        <AudioToText />
        <HowItWorks />
        <Features />
        <SocialProof />
        <Languages />
        <Pricing />
        <Industries />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </MotionConfig>
  );
}
