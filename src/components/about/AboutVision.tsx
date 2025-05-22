"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutVision() {
  return (
    <section className="w-full bg-[#f5f5f5] py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <Image
            src="/AboutVision.png"
            alt="Vision illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
            Our Vision
          </h2>
          <p className="!text-[#7c7c7c] !text-lg !leading-relaxed">
          Our vision is to build a long-lasting, community-driven movement rooted in cultural pride, inclusion, and opportunity. We aim to empower future generations — especially youth — with the tools, mentorship, and experiences they need to thrive. Through sports, cultural programming, and community initiatives, we’re creating spaces where people can connect, grow, and give back. As we continue to expand, we remain committed to strengthening community ties, supporting new leaders and volunteers, and ensuring everyone has a place to participate, lead, and belong.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
