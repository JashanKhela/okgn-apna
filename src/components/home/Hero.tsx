import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export default async function Hero() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-stretch justify-between gap-10">
        {/* Left: Text Content */}
        <div className="text-center md:text-left md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ee3042] mb-2">
            Bringing Communities Together Through Sports
          </h1>
          <h2 className="text-lg md:text-xl text-gray-800 font-medium mb-4">
            Uniting Okanagan’s Diverse Communities Through Sport & Cultures
          </h2>
          <p className="!text-gray-700 !text-base !leading-relaxed !mb-6">
            The OKGN Apna Sports and Cultural Society is a non-profit
            organization dedicated to promoting inclusivity, teamwork, and
            community engagement through the power of sport. We organize soccer
            tournaments, cultural events, and programs that foster meaningful
            connections and shared experiences across generations and
            backgrounds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
            <Link href="/events">
              <Button className="bg-[#ee3042] hover:bg-[#ee3042]/90 hover:scale-[1.03] transition-all duration-200 text-white text-lg sm:text-xl px-8 py-5 sm:px-10 sm:py-6 w-full sm:w-auto">
                View Events
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                className="text-[#ee3042] border-[#ee3042] hover:bg-[#ee3042]/10 hover:text-white hover:bg-[#ee3042] hover:border-[#ee3042] hover:scale-[1.03] transition-all duration-200 text-lg sm:text-xl px-8 py-5 sm:px-10 sm:py-6 w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative md:w-1/2 h-64 md:h-auto md:min-h-[500px]">
          <Image
            src="/HeroHomePage.jpg"
            alt="Soccer community"
            fill
            className="rounded-lg object-cover shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
