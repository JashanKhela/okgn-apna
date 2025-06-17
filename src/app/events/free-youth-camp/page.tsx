"use client";

import Image from "next/image";

export default function FreeYouthCampPage() {
  return (
    <section className="w-full bg-white pb-20">
      {/* Hero */}
      <div className="relative w-full h-[400px]">
        <Image
          src="/event1.jpg"
          alt="Free Youth Soccer Camp"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl leading-tight">
            Free Youth Soccer Camp – June 28 at Rutland Dome
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 mt-16 space-y-12">
        {/* Overview */}
        <div className="text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#ee3042]">
            Kick off summer with a day of fun and learning!
          </h2>
          <p className="!text-gray-700 !text-lg !leading-relaxed">
            OKGN Apna is excited to host a **Free Youth Soccer Camp** on{" "}
            <strong>Friday, June 28th</strong> at the Rutland Dome. This one-day
            camp is designed for kids aged **5 to 15** and welcomes all skill
            levels — whether your child is brand new to the game or already a
            seasoned player.
          </p>
          <p className="!text-gray-700 !text-lg !leading-relaxed">
            Led by experienced coaches, this camp will feature age-appropriate
            training stations, technique development, fun mini games, and
            team-building activities. Our goal is to foster confidence,
            teamwork, and a love for the game — all in a positive and supportive
            environment.
          </p>
        </div>

        {/* Event Details */}
        <div className="grid md:grid-cols-2 gap-8 bg-[#fef6f6] p-6 rounded-lg shadow-sm text-gray-800 text-md">
          <div>
            <strong>Date:</strong> Friday, June 28, 2025
          </div>
          <div>
            <strong>Time:</strong> 9:30 AM start
          </div>
          <div>
            <strong>Location:</strong> Rutland Dome, Kelowna BC
          </div>
          <div>
            <strong>Cost:</strong> Completely Free
          </div>
        </div>

        {/* Callout */}
        <div className="!text-center !text-gray-700 space-y-4">
          <p className="!text-lg leading-relaxed !text-black">
            This event is a great way to try out soccer in a fun and
            pressure-free environment. Bring a water bottle, athletic shoes, and
            plenty of energy. Parents are welcome to stay and cheer!
          </p>
          <p className="text-lg font-semibold">
            Space is limited — sign up early to reserve your spot.
          </p>

          <a
            href="mailto:okgnapna@gmail.com?subject=Free Youth Soccer Camp Registration&body=Please enter participants name, age, and any relevant medical information."
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-[#ee3042] hover:bg-[#ee3042]/90 text-white px-8 py-4 text-lg font-semibold rounded shadow hover:scale-105 transition"
          >
            Sign Up via Email
          </a>
        </div>

        {/* Map */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-[#ee3042] mb-4">
            Event Location: Rutland Dome
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2570.024107143746!2d-119.38247148781134!3d49.898350726843326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537d8d48c5c0303d%3A0xa54a3df5c21dd3fd!2sRutland%20Recreation%20Park!5e0!3m2!1sen!2sca!4v1750187773995!5m2!1sen!2sca"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded shadow"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
