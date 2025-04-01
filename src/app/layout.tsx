// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "OKGN Apna Sports & Cultural Society",
    template: "%s | OKGN Apna",
  },
  description:
    "Connecting the Okanagan's South Asian community through soccer, culture, and community events.",
  openGraph: {
    title: "OKGN Apna Sports & Cultural Society",
    description:
      "Connecting the Okanagan's South Asian community through soccer, culture, and community events.",
    url: "https://okgnapna.com",
    siteName: "OKGN Apna",
    images: [
      {
        url: "/OKGN-APNA-LOGO.png", // Replace with real path to OG image
        width: 1200,
        height: 630,
        alt: "OKGN Apna - Community Soccer and Culture",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OKGN Apna Sports & Cultural Society",
    description:
      "Connecting the Okanagan's South Asian community through soccer, culture, and community events.",
    images: ["/OKGN-APNA-LOGO.png"],
  },
  metadataBase: new URL("https://okgnapna.com"),
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-black antialiased">
        <header>
          <Navbar />
        </header>
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
