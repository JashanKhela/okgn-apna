"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full py-20 px-6 bg-white"
    >
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
          More Than Just Soccer
        </h2>
        <p className="!text-[#7c7c7c] !text-lg !leading-relaxed">
        OKGN Apna Sports and Cultural Society is more than just a sports organization — we’re a movement that brings people together. Through cultural events and community-driven sports, we foster belonging, celebrate diversity, and build lasting connections across generations.
        </p>
        <Link href="/vision">
          <Button className="bg-[#ee3042] hover:bg-[#ee3042] hover:scale-[1.03] transition-all duration-200 text-white text-sm">
            Learn More
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}
