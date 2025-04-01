import EventsCTA from "@/components/events/EventsCTA";
import EventsIntro from "@/components/events/EventsIntro";
import OngoingEvents from "@/components/events/OngoingEvents";
import TournamentEvents from "@/components/events/TournamentEvents";

export default function EventsPage() {
  return (
    <>
      <EventsIntro />
      <OngoingEvents />
      <TournamentEvents />
      <EventsCTA />
    </>
  );
}
