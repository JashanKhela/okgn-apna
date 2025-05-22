"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[300px] md:h-[450px]">
        <Image
          src="/AboutHero3.jpg"
          alt="OKGN Apna community"
          fill
          className="object-cover brightness-[0.75]"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-4xl md:text-5xl font-bold"
          >
            We&apos;re More Than a Sports Club
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white !text-lg mt-2 max-w-2xl"
          >
OKGN Apna is a community-first sports and cultural society rooted in connection, culture, and collective growth. While soccer is a big part of what we do, our mission goes far beyond the game. From youth mentorship and coaching programs to cultural events, volunteer opportunities, and open-invite recreation, we’re here to create meaningful spaces for people to come together — on and off the field. 
          </motion.p>
        </div>
      </div>
    </section>
  );
}
