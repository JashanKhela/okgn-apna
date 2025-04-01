"use client";

import { motion } from "framer-motion";

export default function AboutContent() {
  return (
    <section className="w-full bg-[#fef6f6] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#ee3042]"
        >
          Who We Are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="!text-[#7c7c7c] !text-lg !leading-relaxed"
        >
  OKGN Apna is a grassroots soccer club dedicated to building community through sport — proudly rooted in the South Asian community here in the Okanagan. We support competitive men’s teams in Division 1, 3A, and Over 35, host an annual community tournament, and organize open-invite games throughout the year. Now, we&apos;re expanding into youth development by guiding kids aged 5 and up through camps, coaching, and skill-based pathways in partnership with Okanagan United FC. Whether you&apos;re a player, a parent, or a volunteer — there’s a place for you here.
  for you here.
        </motion.p>
      </div>
    </section>
  );
}
