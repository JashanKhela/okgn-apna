"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WinterAdultTournamentPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitted(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      experience: formData.get("experience"),
      event: "8v8 Adult Soccer Tournament Fundraiser - Dec 28",
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_SHEETDB_URL_WINTER!,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data }),
        }
      );

      if (response.ok) {
        formRef.current?.reset();
        setSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#ee3042]">
            8 vs 8 Adult Soccer Tournament
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A community‑driven indoor fundraiser supporting local youth soccer
            camps.
          </p>

          <p className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
            This holiday season, join us for an evening of indoor soccer,
            friendly competition, and community connection. This 8 vs 8 adult
            tournament is open to players of all skill levels and is designed to
            be fun, inclusive, and competitive in the best way.
          </p>

          <p className="text-md text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Every player registration fee goes directly toward funding future
            youth soccer camps, helping provide free and accessible programming
            for kids in our community. Come play, give back, and celebrate the
            season together.
          </p>
        </motion.div>

        {/* Flyer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[420px]">
            <Image
              src="/WinterAdult.jpg"
              alt="Adult Soccer Tournament Fundraiser Flyer"
              width={420}
              height={720}
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
            What This Tournament Is About
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This is a relaxed but competitive 8 vs 8 indoor tournament designed
            to bring the community together while raising funds for youth soccer
            camps.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Players will be mixed into balanced teams on the day. No team
            registration required. Just sign up, show up, and play.
          </p>
        </motion.div>

        {/* Details */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold mb-4 text-[#ee3042]">
            Event Details
          </h3>
          <ul className="space-y-2 text-gray-800">
            <li>
              <strong>Date:</strong> Sunday, December 28
            </li>
            <li>
              <strong>Time:</strong> 4:00 PM – 8:00 PM
            </li>
            <li>
              <strong>Location:</strong> Rutland Dome, 705 Rutland Rd North
            </li>
            <li>
              <strong>Cost:</strong> $20 per player (paid at the field)
            </li>
            <li>
              <strong>Capacity:</strong> Maximum 45 players
            </li>
          </ul>
        </motion.div>

        {/* Registration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-10 rounded-lg shadow-lg space-y-6 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-[#ee3042] text-center">
            Sign Up to Play
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Complete the form below to reserve your spot. Payment will be
            collected at the field.
          </p>

          {submitted && (
            <div className="text-green-600 text-center font-medium">
              Registration received. See you on the field.
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Full Name</Label>
                <Input name="name" required />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input name="email" type="email" required />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input name="phone" type="tel" required />
              </div>
              <div>
                <Label>Playing Experience (optional)</Label>
                <Input
                  name="experience"
                  placeholder="Beginner, Rec, Competitive, etc."
                />
              </div>
            </div>

            <div className="text-center">
              <Button
                className="bg-[#ee3042] text-white hover:bg-[#d42a3a] w-full md:w-auto mt-4"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Reserve My Spot"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
