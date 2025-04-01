"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsors = [
  {
    name: "Community Credit Union",
    description: "Proudly supporting grassroots sports in the Okanagan region.",
    logo: "/OKGN-APNA-LOGO.png",
  },
  {
    name: "Okanagan Eats",
    description: "Fueling players and fans with local flavor.",
    logo: "/OKGN-APNA-LOGO.png",
  },
  {
    name: "Soccer Pro Gear",
    description: "Providing premium gear for every level of play.",
    logo: "/OKGN-APNA-LOGO.png",
  },
  {
    name: "Dhillon Law",
    description: "Advocating for fairness on and off the field.",
    logo: "/OKGN-APNA-LOGO.png",
  },
];

export default function SponsorsGrid() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#ee3042]">
          Our Current Sponsors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#fef6f6] rounded-xl shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition"
            >
              <div className="relative w-32 h-32 mb-4">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {sponsor.name}
              </h3>
              <p className="!text-sm !text-[#7c7c7c]">{sponsor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
