"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="w-full bg-[#fef6f6] py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#ee3042]">
          Contact Us
        </h1>
        <p className="!text-[#7c7c7c] !text-lg !leading-relaxed">
          Have a question, want to get involved, or just say hi? We’d love to hear from you.
        </p>
      </motion.div>
    </section>
  );
}
