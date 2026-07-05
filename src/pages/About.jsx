import SEO from "../components/SEO";
import AboutIntro from "../sections/about/AboutIntro";
import Relationship from "../sections/about/Relationship";
import OurJourney from "../sections/about/OurJourney";
import Team from "../sections/about/Team";
import AboutCTA from "../sections/about/AboutCTA";

export default function About() {
  return (
    <>
      <SEO
        title="About VSSF"
        description="Learn about VSS Foundation — a 501(c)(3) US non-profit supporting students from rural India through housing, education and the Earn & Learn program since 1955."
      />
      <AboutIntro />
      <Relationship />
      <OurJourney />
      <Team />
      <AboutCTA />
    </>
  );
}
