"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const tournamentEvents: any[] = [
  // Empty this array to test the fallback:
  // {
  //   title: "City Park Mini Tournament",
  //   description:
  //     "A local 3-team tournament bringing together Men’s League players, Apna drop-in players, and students like Doaba FC. Fun, competitive, and community driven.",
  //   date: "May 24, 2025",
  //   location: "City Park, Kelowna",
  //   maxTeams: 3,
  //   image: "/AboutHero.jpg",
  // },
];

export default function TournamentEvents() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
          Tournament Events
        </h2>

        {tournamentEvents.length === 0 ? (
          <div className="bg-white border border-dashed border-gray-300 rounded-xl p-10 max-w-xl mx-auto text-center shadow-sm">
            <p className="!text-xl !text-gray-600 !font-medium mb-2">
              No tournaments scheduled at the moment.
            </p>
            <p className="!text-gray-500">
              Check back soon for exciting upcoming events!
            </p>
          </div>
        ) : (
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
                    <p className="!text-md !text-[#000000] font-bold">
                      {event.date}
                    </p>
                    <p className="!text-md !text-[#000000]">
                      {event.location}
                    </p>
                    <p className="!text-md !text-[#000000] italic">
                      Max Teams: {event.maxTeams}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
