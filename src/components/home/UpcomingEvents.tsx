"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const events = [
{
  title: "Fall Youth Soccer Camp – November 11th!",
  description:
    "Join us indoors at Rutland Sports Dome for a fun and engaging soccer camp for kids aged 5–15. Perfect for all levels, with skill-building, games, and teamwork sessions.",
  date: "Tuesday, November 11 — 1:00 PM to 2:30 PM",
  location: "Rutland Sports Dome — 705 Rutland Rd South",
  image: "/event1.jpg", 
  slug: "/fall-youth-camp" 
}
];


export default function UpcomingEvents() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
          Upcoming Events
        </h2>
        <p className="!text-[#7c7c7c] !max-w-2xl !mx-auto !text-base !md:text-lg !leading-relaxed">
          We’re always holding exciting events and everyone is welcome to sign
          up — whether you’re a seasoned player or just getting started. Have
          questions?{" "}
          <span className="text-[#ee3042] font-medium">Reach out anytime!</span>
        </p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white h-full flex flex-col">
              <div className="relative w-full h-48">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#040404] text-xl font-bold">
                  {event.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow space-y-4">
                <div className="text-[#7c7c7c] text-sm">{event.date}</div>
                <p className="!text-md !text-[#040404]">{event.description}</p>
                <Link href={`/events/${event.slug}`}>
                  <Button className="mt-auto bg-[#ee3042] hover:bg-[#d42a3a] text-white text-sm w-fit self-start">
                    View Event
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
