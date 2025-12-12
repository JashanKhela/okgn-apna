"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { motion } from "framer-motion";

export default function WinterYouthCampPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitted(false);

    const formData = new FormData(e.currentTarget);

    const data = {
      child_name: formData.get("child_name"),
      child_age: formData.get("child_age"),
      parent_name: formData.get("parent_name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      skill_level: formData.get("skill_level"),
      event: "Winter Youth Soccer Camp - Dec 11",
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

        {/* Page Header */}
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-center space-y-4"
>
  <h1 className="text-4xl md:text-5xl font-extrabold text-[#ee3042]">
    Winter Youth Soccer Camp
  </h1>
  <p className="text-lg text-gray-700 max-w-3xl mx-auto">
    This December, join us for a joyful indoor soccer experience filled with laughter, teamwork, and holiday cheer!
  </p>
  <p className="text-md text-gray-600 max-w-2xl mx-auto">
    Whether your child is new to the game or already loves to play, this camp is all about movement, building confidence,
    and having a blast. It&apos;s more than just soccer — it&apos;s a celebration of community, fun, and togetherness during the most magical time of year.
  </p>
  <p className="text-md text-gray-600 max-w-2xl mx-auto">
    Parents and families are welcome to watch, connect, and enjoy the festive vibes. Hot chocolate, music, and great energy all around. Let’s make memories together!
  </p>
</motion.div>


        {/* Flyer Section – clean, no oversized card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-[420px] h-[620px]">
            <Image
              src="/Event2.jpg"
              alt="Winter Youth Soccer Camp flyer"
              fill
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* About the Camp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#111]">
            What This Camp Is About
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This winter camp is designed to give young players a positive, low‑pressure
            environment to stay active, learn new skills, and enjoy playing together indoors.
            Sessions will include guided drills, small‑sided games, and plenty of time on the ball.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether your child is stepping onto the field for the first time or already playing
            regularly, our focus is on participation, teamwork, and building confidence through play.
          </p>
        </motion.div>

        {/* Event Details */}
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
            <li><strong>Date:</strong> Saturday, December 11</li>
            <li><strong>Time:</strong> 2:00 PM to 3:15 PM</li>
            <li><strong>Location:</strong> Rutland Sports Dome, 705 Rutland Rd South</li>
            <li><strong>Cost:</strong> Free</li>
          </ul>
        </motion.div>

        {/* Map */}
        <div className="w-full h-[400px] rounded-md overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.2287900543363!2d-119.38400618428386!3d49.89839697939627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dbe1815f8fb15%3A0x6f4862f5e2be93e2!2sRutland%20Sports%20Dome!5e0!3m2!1sen!2sca!4v1668696346711!5m2!1sen!2sca"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Registration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-6 md:p-10 rounded-lg shadow-lg space-y-6 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-[#ee3042] text-center">
            Register Your Child
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto">
            Complete the form below to reserve a spot. We will follow up closer to the event
            with any additional details parents should know.
          </p>

          {submitted && (
            <div className="text-green-600 text-center font-medium">
              Registration received. We look forward to seeing you there.
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Child’s Name</Label>
                <Input name="child_name" required />
              </div>
              <div>
                <Label>Child’s Age</Label>
                <Input name="child_age" type="number" required />
              </div>
              <div>
                <Label>Parent or Guardian Name</Label>
                <Input name="parent_name" required />
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
                <Label>Skill Level</Label>
                <Select name="skill_level" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center">
              <Button
                className="bg-[#ee3042] text-white hover:bg-[#d42a3a] w-full md:w-auto mt-4"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit Registration"}
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
