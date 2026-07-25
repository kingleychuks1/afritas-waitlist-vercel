import Nav from "../components/Nav.jsx";
import Hero from "../components/Hero.jsx";
import Steps from "../components/Steps.jsx";
import CategoryMarquee from "../components/CategoryMarquee.jsx";
import Intro from "../components/Intro.jsx";
import TravellerSection from "../components/TravellerSection.jsx";
import VendorSection from "../components/VendorSection.jsx";
import Security from "../components/Security.jsx";
import WaitlistSection from "../components/WaitlistSection.jsx";
import Faq from "../components/Faq.jsx";
import FinalCta from "../components/FinalCta.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Steps />
      <CategoryMarquee />
      <Intro />
      <TravellerSection />
      <VendorSection />
      <Security />
      <WaitlistSection />
      <Faq />
      <FinalCta />
      <Footer />
    </>
  );
}
