"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function EventsCTA() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10"
      >
        <div className="md:w-1/2">
          <Image
            src="/EventsCTA.png"
            alt="Join an event"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
            Want to Join an Event?
          </h2>
          <p className="!text-[#7c7c7c] !text-lg !leading-relaxed">
            If you’re interested in participating, volunteering, or learning more — we’d love to hear from you.
            Just send us an email or fill out our quick form to get started.
          </p>
          <Link href="/contact">
          <Button className="bg-[#ee3042] hover:bg-[#ee3042]/90 hover:scale-[1.03] transition-all duration-200 text-white text-lg sm:text-sm px-8 py-4 sm:px-5 sm:py-2 w-full sm:w-auto">
            Register for an Event
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
