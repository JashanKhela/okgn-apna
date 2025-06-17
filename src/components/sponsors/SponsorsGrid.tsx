"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  {
    name: "Grewal Group",
    description: "Leading real estate and business group proudly supporting grassroots community sports in the Okanagan.",
    logo: "/grewal group logo.jpg",
  },
  {
    name: "Learner's Driving School",
    description: "Teaching the next generation of safe drivers — and backing future community champions.",
    logo: "/DrivingSchool.jpg",
  },
  {
    name: "Loudoun Development + Construction",
    description: "Building Kelowna’s future — on the field and off — through support for inclusive sports programs.",
    logo: "/construction.jpg",
  },
  {
    name: "DPS Drywall Ltd.",
    description: "Committed to quality and proud to back youth and community-based sports in the valley.",
    logo: "/Drywall.jpg",
  },
  {
    name: "Khela Tech",
    description: "Powering local movements with digital innovation, automation, and tech for impact.",
    logo: "/KhelaTech.png",
  },
];

export default function SponsorsGrid() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
          Our Current Sponsors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#fef6f6] rounded-xl shadow-sm px-4 pt-4 pb-3 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 mb-4 bg-white rounded-md border border-gray-200">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-1">
                {sponsor.name}
              </h3>
              <p className="!text-sm !text-[#7c7c7c] px-2">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
