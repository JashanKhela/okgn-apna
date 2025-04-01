// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { navbarQuery } from "@/sanity/lib/queries";

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


export function Navbar() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<NavbarData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const result = await client.fetch(navbarQuery);
      setData(result);
    }
    fetchData();
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6 flex justify-between items-center h-32">
        <Link href="/" className="flex items-center space-x-2">
        {data?.logo?.asset?.url && (
  <Image src={data.logo.asset.url} alt="OKGN-Apna-Logo" width={120} height={120} />
)}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {data?.navItems?.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md text-leading text-gray-700 hover:text-white hover:bg-[#ee3042] transition-all px-3 py-1.5 rounded-md font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className="text-gray-700 p-2 rounded-md hover:bg-gray-100">
              <Menu size={56} />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white px-6 py-6 w-[260px]">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/OKGN-APNA-LOGO.png"
                  alt="OKGN Apna Logo"
                  width={120}
                    height={120}
                />
              </div>
              <nav className="flex flex-col space-y-4">
                {data?.navItems?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-base font-semibold text-gray-800 hover:bg-[#ee3042] hover:text-white px-4 py-2 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
