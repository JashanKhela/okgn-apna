"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ongoingEvents = [
  {
    title: "Fall Soccer Camps & Coaching",
    description:
      "Weekly skill-building sessions for ages 5–12. Open to all levels. Includes special invite-only coaching clinics.",
    date: "March 29th, April 5th, April 12th — Saturdays 2–4pm",
    location: "Local Field TBD",
    image: "/upcoming-event-1.jpg",
  },
  {
    title: "Drop-In Soccer (Year Round)",
    description:
      "Open-invite recreational soccer for players of all levels. Come as you are and enjoy the game with others from the community.",
    date: "Weekly — Ongoing",
    location: "Various Locations",
    image: "/upcoming-event-2.jpg",
  },
  {
    title: "Men’s League Teams",
    description:
      "Competitive play in Div 1, 3A, and Over 35 divisions. Managed and organized by our club members for structured league competition.",
    date: "Spring/Summer League Season",
    location: "Kelowna & Surrounding Fields",
    image: "/upcoming-event-3.jpg",
  },
];

export default function OngoingEvents() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
          Ongoing Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {ongoingEvents.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-[#ee3042] h-full hover:shadow-md transition">
                <div className="relative w-full h-52">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-white">{event.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-left">
                  <p className="!text-md !text-[#00000] font-bold">{event.description}</p>
                  <p className="!text-sm !text-[#00000] font-bold">{event.date}</p>
                  <p className="!text-sm !text-[#00000] italic">{event.location}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
