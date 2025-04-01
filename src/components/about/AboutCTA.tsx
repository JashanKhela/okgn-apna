"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function AboutCTA() {
  return (
    <section className="w-full bg-[white] text-[#ee3042] py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold">Got Ideas or Want to Get Involved?</h2>
        <p className="!text-lg !leading-relaxed !text-[#ee3042]">
          If you like what we’re doing or have ideas to help us grow, we’d love to hear from you.
          Whether it’s a new initiative, a partnership, or just a quick hello — reach out and connect.
        </p>
        <Link href="/contact">
        <Button className="bg-[#ee3042] hover:bg-[#ee3042]/90 hover:scale-[1.03] transition-all duration-200 text-white text-lg sm:text-sm px-8 py-4 sm:px-5 sm:py-2 w-full sm:w-auto">
            Contact Us
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
