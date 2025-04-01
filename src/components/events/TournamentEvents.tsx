"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const tournamentEvents = [
  {
    title: "City Park Mini Tournament",
    description:
      "A local 3-team tournament bringing together Men’s League players, Apna drop-in players, and students like Doaba FC. Fun, competitive, and community driven.",
    date: "May 24, 2025",
    location: "City Park, Kelowna",
    maxTeams: 3,
    image: "/AboutHero.jpg",
  },
  {
    title: "Summer Community Cup",
    description:
      "Our biggest tournament of the year! 8 teams battle it out over two days — open to all teams across the region.",
    date: "August 23–24, 2025",
    location: "Mission Sports Fields, Kelowna",
    maxTeams: 8,
    image: "/AboutHero.jpg",
  },
];

export default function TournamentEvents() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
          Tournament Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {tournamentEvents.map((event, i) => (
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
                  <CardTitle className="text-lg text-white">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-left">
                  <p className="!text-md !text-[#000000] font-bold">
                    {event.description}
                  </p>
                  <p className="!text-sm !text-[#000000] font-bold">
                    {event.date}
                  </p>
                  <p className="!text-sm !text-[#000000] italic">
                    {event.location}
                  </p>
                  <p className="!text-sm !text-[#000000] italic">
                    👥 Max Teams: {event.maxTeams}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
