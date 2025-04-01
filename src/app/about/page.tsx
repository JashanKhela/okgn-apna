import AboutContent from "@/components/about/AboutContent";
import AboutCTA from "@/components/about/AboutCTA";
import AboutHero from "@/components/about/AboutHero";
import AboutVision from "@/components/about/AboutVision";
import BoardOfDirectors from "@/components/about/BoardOfDirectors";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
      <AboutVision />
      <BoardOfDirectors />
      <AboutCTA />
    </>
  );
}
