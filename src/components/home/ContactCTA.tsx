"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactCTA() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
      >
        <div className="md:w-1/2">
          <Image
            src="/home-page-cta.png"
            alt="Soccer illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
            Got a Question? Let’s Talk!
          </h2>
          <p className="!text-[#7c7c7c] !text-base !md:text-lg !leading-relaxed">
            Whether you&apos;re interested in signing up, volunteering, sponsoring, or just curious — we&apos;re always happy to hear from our community. Reach out and let’s get connected.
          </p>
          <Link href="/contact">
            <Button className="bg-[#ee3042] hover:bg-[#d42a3a] hover:scale-[1.03] transition-all duration-200 text-white text-sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
