"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    name: "Spring Kickoff Tournament",
    date: "April 27, 2024",
    desc: "Join us for a full day of soccer, food, and community fun. Open to all ages and skill levels!",
    image: "/event1.jpg",
  },
  {
    name: "Youth Soccer Day",
    date: "May 12, 2024",
    desc: "A fun and inclusive event for youth players to showcase their skills and meet new friends.",
    image: "/event2.jpg",
  },
  {
    name: "Community Culture Cup",
    date: "June 9, 2024",
    desc: "Celebrate cultural diversity through sport. Teams are encouraged to represent their roots!",
    image: "/event3.jpg",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">Upcoming Events</h2>
        <p className="!text-[#7c7c7c] !max-w-2xl !mx-auto !text-base !md:text-lg !leading-relaxed">
          We’re always holding exciting events and everyone is welcome to sign up — whether you’re a seasoned player or just getting started. Have questions? <span className="text-[#ee3042] font-medium">Reach out anytime!</span>
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
                  alt={event.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-[#040404] text-xl font-bold">{event.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between flex-grow space-y-4">
                <div className="text-[#7c7c7c] text-sm">{event.date}</div>
                <p className="!text-md !text-[#040404]">{event.desc}</p>
                <Button className="mt-auto bg-[#ee3042] hover:bg-[#d42a3a] text-white text-sm w-fit self-start">
                  Sign Up
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
