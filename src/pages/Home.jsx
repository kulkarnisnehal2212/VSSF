import SEO from "../components/SEO";
import Hero from "../sections/home/Hero";
import Impact from "../sections/home/Impact";
import Services from "../sections/home/Services";
import MissionVision from "../sections/home/MissionVision"; 
import Testimonials from "../sections/home/Testimonials";
import CTA from "../sections/home/CTA"; 
export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="VSS Foundation supports 1,200+ students from rural India with safe housing, meals, education and the Earn & Learn program. 501(c)(3) registered, EIN: 33-1919808."
      />
      <Hero />
      <Impact />
      <Services />
      <MissionVision />   
      <Testimonials />
      <CTA />
    </>
  );
}