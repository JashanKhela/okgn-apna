"use client";

import { motion } from "framer-motion";
import {
  UsersRound,
  Baby,
  Megaphone,
  Globe2,
} from "lucide-react";

const audiences = [
  {
    icon: UsersRound,
    title: "Families & Friends",
    desc: "Whether you're cheering from the sidelines or playing on the pitch, there's something here for everyone — from kids to grandparents.",
  },
  {
    icon: Baby,
    title: "Youth & Rising Talent",
    desc: "We nurture young athletes by giving them space to grow, connect, and have fun in a safe and inclusive environment.",
  },
  {
    icon: Megaphone,
    title: "Volunteers & Community Builders",
    desc: "If you love leading or lending a hand, you’ll find endless opportunities to give back and make an impact.",
  },
  {
    icon: Globe2,
    title: "Newcomers & Culture Seekers",
    desc: "Join a community that celebrates cultural pride and connection through the universal language of sport.",
  },
];

export default function WhoItsFor() {
  return (
<section className="w-full bg-[#ee3042] py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
      Who It&apos;s For
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {audiences.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all group"
        >
          <item.icon
            size={36}
            className="text-[#ee3042] mb-4 group-hover:scale-110 transition-transform duration-300"
          />
          <h3 className="text-lg font-semibold text-black mb-2">{item.title}</h3>
          <p className="!text-[#7c7c7c] !text-md">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>
  );
}
