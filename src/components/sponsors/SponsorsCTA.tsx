"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function SponsorsCTA() {
  return (
    <section className="w-full bg-[#fef6f6] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
          Want to Become a Sponsor?
        </h2>
        <p className="!text-[#7c7c7c] !text-lg !leading-relaxed">
          Help us grow the game and create opportunities for youth, newcomers, and the local community. We’d love to chat about how we can team up for future events.
        </p>
        <Link href="/contact">
        <Button className="bg-[#ee3042] hover:bg-[#ee3042]/90 hover:scale-[1.03] transition-all duration-200 text-white text-lg sm:text-sm px-8 py-4 sm:px-5 sm:py-2 w-full sm:w-auto">
            Contact Us About Sponsorship
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
