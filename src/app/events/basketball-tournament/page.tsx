"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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

export default function BasketballTournamentPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [isCampLoading, setIsCampLoading] = useState(false);
  const [campSubmitted, setCampSubmitted] = useState(false);
  const campFormRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitted(false);
    const formData = new FormData(e.currentTarget);
    const data = {
      team_name: formData.get("team_name"),
      team_captain: formData.get("team_captain"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      division: formData.get("division"),
      event: "3 on 3 Basketball Tournament - May 2",
      timestamp: new Date().toISOString(),
    };
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEETDB_URL_BASKETBALL!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
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

  const handleCampSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCampLoading(true);
    setCampSubmitted(false);
    const formData = new FormData(e.currentTarget);
    const data = {
      parent_name: formData.get("parent_name"),
      child_name: formData.get("child_name"),
      child_age: formData.get("child_age"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      event: "Youth Skills Camp - May 2",
      timestamp: new Date().toISOString(),
    };
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEETDB_URL_BASKETBALL_CAMP!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
      });
      if (response.ok) {
        campFormRef.current?.reset();
        setCampSubmitted(true);
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      console.error("Camp submission error:", error);
    } finally {
      setIsCampLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#f7f7f7]">

      {/* ── HERO ── */}
      <div className="w-full bg-[#111111] text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-6"
          >
            <p className="text-sm md:text-base uppercase tracking-[0.2em] text-[#ee3042] font-semibold">
              OKGN Apna Sports and Cultural Society
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              3 on 3 Basketball Tournament
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
              A full day of basketball, community, and competition in Kelowna.
              Youth skills camp in the morning. 3 on 3 tournament in the afternoon.
              Cash prizes on the line — and spots are filling up fast.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="bg-[#ee3042] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Saturday, May 2
              </div>
              <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold">
                705 Kitch Road, Kelowna
              </div>
              <div className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Cash Prizes
              </div>
            </div>
            {/* Hero CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#register-team">
                <Button className="bg-[#ee3042] hover:bg-[#d42a3a] text-white text-base px-6 py-3 h-auto font-semibold">
                  Register a Team →
                </Button>
              </a>
              <a href="#skills-camp">
                <Button variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-[#111111] text-base px-6 py-3 h-auto font-semibold">
                  Sign Up for Skills Camp →
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 space-y-20">

        {/* ── EVENT OVERVIEW + POSTER ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-4">
                What&apos;s Happening
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-5">
                This event brings together youth development, competitive play,
                and community support all in one day. The morning begins with a
                youth skills camp, followed by a 3 on 3 basketball tournament
                featuring both high school and adult divisions.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Whether you are signing up a team, supporting local athletes,
                or helping grow community sports, this is a great chance to be
                part of something energetic and meaningful.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="bg-[#111111] text-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#ee3042]">Youth Skills Camp</h3>
                <p className="text-gray-200 leading-relaxed">9:30 AM to 11:30 AM</p>
              </div>
              <div className="bg-[#111111] text-white rounded-2xl p-6 shadow-md">
                <h3 className="text-xl font-bold mb-3 text-[#ee3042]">Tournament Play</h3>
                <p className="text-gray-200 leading-relaxed">12:00 PM to 6:00 PM</p>
              </div>
            </div>

            {/* Tournament details with inline CTA */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#111111] mb-4">Tournament Details</h2>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li><strong>Format:</strong> 3 vs 3</li>
                <li><strong>Roster Size:</strong> 4 players per team</li>
                <li>
                  <strong>Adult Division:</strong> 8 teams max •{" "}
                  <span className="text-[#ee3042] font-semibold">$120 per team</span>
                </li>
                <li>
                  <strong>High School Division:</strong> 8 teams max •{" "}
                  <span className="text-[#ee3042] font-semibold">$80 per team</span>
                </li>
                <li><strong>Prizes:</strong> Cash prizes for top finishers</li>
              </ul>
              <p className="text-sm text-gray-500 mb-4">
                Spots are limited to 8 teams per division. Once they&apos;re gone, they&apos;re gone.
              </p>
              <a href="#register-team">
                <Button className="bg-[#ee3042] hover:bg-[#d42a3a] text-white w-full font-semibold">
                  Register Your Team Now →
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-[520px] h-[760px] md:h-[900px]">
              <Image
                src="/BasketballTournamentPoster.jpeg"
                alt="3 on 3 Basketball Tournament poster"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* ── YOUTH SKILLS CAMP SIGN-UP ── */}
        <motion.div
          id="skills-camp"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="scroll-mt-8"
        >
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[#ee3042] font-semibold mb-2">
              Morning Session · 9:30 AM – 11:30 AM · Saturday, May 2
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111]">
              Youth Skills Camp
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
              Give your child the chance to learn from experienced coaches in a fun,
              supportive environment before the tournament tips off. Open to youth athletes
              of all skill levels. Spots are limited — register early.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 text-center">
              <div className="text-3xl mb-2">🏀</div>
              <h3 className="font-bold text-[#111111] text-lg mb-1">Skill Development</h3>
              <p className="text-gray-600 text-sm">Dribbling, shooting, and fundamentals led by experienced coaches.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 text-center">
              <div className="text-3xl mb-2">👟</div>
              <h3 className="font-bold text-[#111111] text-lg mb-1">All Skill Levels</h3>
              <p className="text-gray-600 text-sm">Whether it&apos;s their first time or they&apos;re seasoned players, everyone is welcome.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-100 text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-bold text-[#111111] text-lg mb-1">Community First</h3>
              <p className="text-gray-600 text-sm">A safe, energetic space built around teamwork, respect, and having fun.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
            {campSubmitted && (
              <div className="text-green-600 text-center font-medium mb-6 bg-green-50 rounded-xl p-4">
                ✅ Registration received — we&apos;ll be in touch soon!
              </div>
            )}
            <h3 className="text-xl font-bold text-[#111111] mb-6 text-center">Register Your Child</h3>
            <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleCampSubmit} ref={campFormRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label className="mb-2 block text-[#111111]">Parent / Guardian Name</Label>
                  <Input name="parent_name" required className="border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <Label className="mb-2 block text-[#111111]">Child&apos;s Name</Label>
                  <Input name="child_name" required className="border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <Label className="mb-2 block text-[#111111]">Child&apos;s Age</Label>
                  <Input name="child_age" type="number" min={5} max={17} required className="border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <Label className="mb-2 block text-[#111111]">Email Address</Label>
                  <Input name="email" type="email" required className="border border-gray-300 rounded-md p-2" />
                </div>
                <div className="md:col-span-2">
                  <Label className="mb-2 block text-[#111111]">Phone Number</Label>
                  <Input name="phone" type="tel" required className="border border-gray-300 rounded-md p-2" />
                </div>
              </div>
              <div className="text-center">
                <Button
                  className="bg-[#ee3042] text-white hover:bg-[#d42a3a] w-full md:w-auto px-10 py-3 h-auto text-base font-semibold mt-2"
                  type="submit"
                  disabled={isCampLoading}
                >
                  {isCampLoading ? "Submitting..." : "Sign Up for Skills Camp →"}
                </Button>
              </div>
            </form>
          </div>
        </motion.div>

        {/* ── TEAM REGISTRATION ── */}
        <motion.div
          id="register-team"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="scroll-mt-8"
        >
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.2em] text-[#ee3042] font-semibold mb-2">
              Afternoon Tournament · 12:00 PM – 6:00 PM · Saturday, May 2
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#111111]">
              Register Your Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-3">
              Two divisions. Eight spots each. Cash prizes for the winners.
              Fill out the form below to lock in your team&apos;s spot before it&apos;s taken.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow p-6 border-2 border-[#ee3042] text-center">
              <p className="text-xs uppercase tracking-widest text-[#ee3042] font-semibold mb-2">Adult Division</p>
              <p className="text-4xl font-extrabold text-[#111111] mb-1">$120</p>
              <p className="text-gray-500 text-sm mb-3">per team of 4</p>
              <p className="text-gray-600 text-sm">Limited to 8 teams. Open to players 18+.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6 border border-gray-200 text-center">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">High School Division</p>
              <p className="text-4xl font-extrabold text-[#111111] mb-1">$80</p>
              <p className="text-gray-500 text-sm mb-3">per team of 4</p>
              <p className="text-gray-600 text-sm">Limited to 8 teams. Open to high school athletes.</p>
            </div>
          </div>

          <div className="bg-[#111111] rounded-2xl shadow-xl p-6 md:p-10">
            {submitted && (
              <div className="text-green-400 text-center font-medium mb-6 bg-white/10 rounded-xl p-4">
                ✅ Registration received — we&apos;ll be in touch soon.
              </div>
            )}
            <form className="space-y-6 max-w-3xl mx-auto" onSubmit={handleSubmit} ref={formRef}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label className="text-white mb-2 block">Team Name</Label>
                  <Input name="team_name" required className="text-white bg-[#111111] border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Team Captain</Label>
                  <Input name="team_captain" required className="text-white bg-[#111111] border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Email Address</Label>
                  <Input name="email" type="email" required className="text-white bg-[#111111] border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <Label className="text-white mb-2 block">Phone Number</Label>
                  <Input name="phone" type="tel" required className="text-white bg-[#111111] border border-gray-300 rounded-md p-2" />
                </div>
                <div className="md:col-span-2">
                  <Label className="text-white mb-2 block">Division</Label>
                  <Select name="division" required>
                    <SelectTrigger className="text-white bg-[#111111] border border-gray-300 rounded-md p-2">
                      <SelectValue placeholder="Select division" />
                    </SelectTrigger>
                    <SelectContent className="text-white bg-[#111111] border border-gray-300 rounded-md p-2">
                      <SelectItem value="adult">Adult Division — $120 per team</SelectItem>
                      <SelectItem value="highschool">High School Division — $80 per team</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="text-center">
                <Button
                  className="bg-[#ee3042] text-white hover:bg-[#d42a3a] w-full md:w-auto px-10 py-3 h-auto text-base font-semibold mt-2"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Register Team →"}
                </Button>
                <p className="text-gray-400 text-sm mt-3">
                  We&apos;ll follow up with payment details and final event info after you register.
                </p>
              </div>
            </form>
          </div>
        </motion.div>

        {/* ── VENUE ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111] mb-6">Venue</h2>
          <p className="text-gray-700 text-lg mb-6">
            The event will take place at 705 Kitch Road in Kelowna. Plan to
            arrive early to check in, warm up, and get settled before the day begins.
          </p>
          <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps?q=705%20Kitch%20Road,%20Kelowna&z=15&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* ── SPONSORS ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#111111]">
            Thank You to Our Sponsors
          </h2>
          <p className="text-gray-700 text-lg max-w-3xl mx-auto">
            We appreciate the local businesses and supporters helping make this event possible.
          </p>
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="bg-white rounded-xl shadow-md px-6 py-4 text-lg font-semibold text-[#111111]">
              Dhillon Notary Public
            </div>
            <div className="bg-white rounded-xl shadow-md px-6 py-4 text-lg font-semibold text-[#111111]">
              Ramada by Wyndham
            </div>
            <div className="bg-white rounded-xl shadow-md px-6 py-4 text-lg font-semibold text-[#111111]">
              TGP Kids Childcare Programs
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}