"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="w-full py-24 px-6 bg-[#fef6f6]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
            More Than Just Soccer
          </h2>
          <p className="!text-[#7c7c7c] !text-lg !leading-relaxed">
            OKGN Apna is more than just a sports organization — we’re a community-powered movement rooted in connection, belonging, and pride. Through soccer, cultural events, and inclusive outreach, we’re creating spaces where people of all ages and backgrounds feel welcome, seen, and inspired.
          </p>
          <Link href="/about">
            <Button className="bg-[#ee3042] hover:bg-[#ee3042]/90 hover:scale-[1.03] transition-all duration-200 text-white text-lg sm:text-sm px-8 py-4 sm:px-5 sm:py-2 w-full sm:w-auto">
              Learn More
            </Button>
          </Link>
        </motion.div>

        {/* Illustration or Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <Image
            src="/home-about.png"
            alt="Soccer community illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
