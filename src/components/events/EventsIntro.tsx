"use client";

import { motion } from "framer-motion";

export default function EventsIntro() {
  return (
    <section className="w-full bg-[#ee3042] py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[white]">
          Our Events
        </h1>
        <p className="!text-[#white] !text-lg !leading-relaxed">
          We host soccer events for all ages and levels — from drop-in sessions and youth camps to full-scale tournaments and league matches. Whether you&apos;re learning, competing, or just having fun, there’s a place for you here.
        </p>
      </motion.div>
    </section>
  );
}
