"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { navbarQuery } from "@/sanity/lib/queries";
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

interface NavbarData {
  logo: {
    asset: {
      url: string;
    };
  };
  navItems: {
    href: string;
    label: string;
  }[];
}

export default function Footer() {
  const [data, setData] = useState<NavbarData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await client.fetch(navbarQuery);
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <footer className="bg-[#ee3042] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start md:space-y-1 space-y-4">
          {data?.logo?.asset?.url && (
            <Image
              src={data.logo.asset.url}
              alt="OKGN Apna Logo"
              width={120}
              height={120}
            />
          )}

        </div>

        <div className="flex flex-col items-center space-y-4">
          <h4 className="font-semibold text-white text-lg">Site Links</h4>
          <nav className="flex flex-wrap gap-4 justify-center">
            {data?.navItems?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm hover:underline hover:text-white/90 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h4 className="font-semibold text-white text-lg">Follow Us</h4>
          <div className="flex gap-4 text-white text-lg">
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="hover:text-white/80 transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="hover:text-white/80 transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <FaYoutube className="hover:text-white/80 transition" />
            </Link>
            <Link href="https://tiktok.com" target="_blank">
              <FaTiktok className="hover:text-white/80 transition" />
            </Link>
          </div>
        </div>

        <div className="text-center text-sm text-white/90">
          <p className="flex items-center justify-center gap-2">
            Developed by{" "}
            <Link
              href="https://khelatech.com"
              target="_blank"
              className="underline hover:text-white transition"
            >
              Khela Tech
            </Link>
          </p>
          <p className="mt-1">Kelowna, BC 🇨🇦</p>
        </div>
      </div>
    </footer>
  );
}
