"use client";

import { motion } from "framer-motion";

export default function SponsorsHero() {
  return (
    <section className="w-full bg-[#ee3042] text-white py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold">Thank You to Our Sponsors</h1>
        <p className="!text-lg !md:text-xl !text-white/90">
          Your support makes everything we do possible — from leagues and tournaments to youth camps and open-invite events.
          We truly couldn’t do it without you.
        </p>
        <p className="!text-white/80 !text-md !pt-4">
          We’re always looking to grow our community and welcome new sponsors to join us on this journey.
        </p>
      </motion.div>
    </section>
  );
}
