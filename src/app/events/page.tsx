import EventsCTA from "@/components/events/EventsCTA";
import EventsIntro from "@/components/events/EventsIntro";
import TournamentEvents from "@/components/events/TournamentEvents";
import UpcomingEvents from "@/components/home/UpcomingEvents";

export default function EventsPage() {
  return (
    <>
      <EventsIntro />
      <UpcomingEvents />
      <TournamentEvents />
      <EventsCTA />
    </>
  );
}
