"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Image from "next/image";
import { useRef } from "react";


export default function FallYouthCampPage() {
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
      event: "Fall Youth Soccer Camp - Nov 11",
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SHEETDB_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      });

      if (response.ok) {
       formRef.current?.reset();
        setSubmitted(true); // then trigger UI change
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Check the console.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full py-16 px-4 bg-[#f5f5f5]">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Hero Image */}
        <div className="relative w-full h-72 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/event1.jpg"
            alt="Fall Youth Soccer Camp"
            fill
            className="object-cover"
          />
        </div>

        {/* Event Info */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[#ee3042]">Fall Youth Soccer Camp</h1>
          <p className="text-md md:text-lg text-[#444] max-w-2xl mx-auto">
            Join us for an exciting indoor soccer camp this fall! Perfect for kids aged 5–15 of all skill levels. Hosted at the Rutland Sports Dome — this session will focus on skills, fun, and fitness.
          </p>
          <ul className="text-[#333] space-y-1">
            <li><strong>Date:</strong> Tuesday, November 11th</li>
            <li><strong>Time:</strong> 1:00 PM – 2:30 PM</li>
            <li><strong>Location:</strong> Rutland Sports Dome — 705 Rutland Rd South</li>
            <li><strong>Cost:</strong> Free</li>
          </ul>
        </div>

        {/* Map */}
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.2287900543363!2d-119.38400618428386!3d49.89839697939627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537dbe1815f8fb15%3A0x6f4862f5e2be93e2!2sRutland%20Sports%20Dome!5e0!3m2!1sen!2sca!4v1668696346711!5m2!1sen!2sca"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md shadow-md"
          />
        </div>

        {/* Form */}
        <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg space-y-6">
          <h2 className="text-2xl font-bold text-[#ee3042] text-center">Sign Up for the Fall Youth Soccer Camp</h2>
          <p className="text-center text-gray-600 max-w-xl mx-auto">
            Ready to kick off an amazing afternoon of soccer, skill-building, and fun? Fill out the quick form below to reserve your spot at our free indoor camp at the Rutland Dome.
          </p>

          {submitted && (
            <div className="text-green-600 text-center font-medium">
              Registration submitted! See you at the camp!
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit} ref={formRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Child’s Name</Label>
                <Input name="child_name" required placeholder="Enter your child’s full name" />
              </div>
              <div>
                <Label>Child’s Age</Label>
                <Input name="child_age" required type="number" placeholder="e.g. 10" />
              </div>
              <div>
                <Label>Parent/Guardian Name</Label>
                <Input name="parent_name" required placeholder="Enter your full name" />
              </div>
              <div>
                <Label>Email Address</Label>
                <Input name="email" required type="email" placeholder="you@example.com" />
              </div>
              <div>
                <Label>Phone Number</Label>
                <Input name="phone" required type="tel" placeholder="(123) 456-7890" />
              </div>
              <div>
                <Label>Skill Level</Label>
                <Select name="skill_level" required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select skill level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner – Just getting started</SelectItem>
                    <SelectItem value="intermediate">Intermediate – Knows the basics</SelectItem>
                    <SelectItem value="advanced">Advanced – Plays regularly</SelectItem>
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
        </div>
      </div>
    </section>
  );
}
