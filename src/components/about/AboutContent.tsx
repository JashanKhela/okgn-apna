"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

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
OKGN Apna is a grassroots sports and cultural society committed to building stronger communities through inclusive programs, cultural connection, and meaningful engagement. Proudly rooted in the South Asian community here in the Okanagan, we host a range of events and initiatives throughout the year — from recreational activities and wellness programs to cultural celebrations and community outreach. We&apos;re now expanding our impact with youth-focused development, helping kids build confidence, learn new skills, and connect with mentors through accessible camps and workshops. Whether you&apos;re a parent, a volunteer, or someone looking to get involved — there&apos;s a place for you here.


        </motion.p>
        <Link href="/events">
        <Button className="bg-[#ee3042] hover:bg-[#ee3042]/90 hover:scale-[1.03] transition-all duration-200 text-white text-lg sm:text-sm px-8 py-4 sm:px-5 sm:py-2 w-full sm:w-auto">
           View Our Events Schedule
          </Button>
        </Link>
      </div>
      
    </section>
  );
}
