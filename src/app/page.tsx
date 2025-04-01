import About from "@/components/home/About";
import ContactCTA from "@/components/home/ContactCTA";
import Hero from "@/components/home/Hero";
import UpcomingEvents from "@/components/home/UpcomingEvents";
import WhoItsFor from "@/components/home/WhosItFor";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <WhoItsFor />
      <UpcomingEvents />
      <ContactCTA />
    </div>
  );
}
