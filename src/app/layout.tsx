import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { SiteBackground } from "@/components/layout/SiteBackground";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Atelier — Design & Creative Technology",
    template: "%s · Atelier",
  },
  description:
    "Design and creative technology for contemporary artists, museums, and cultural institutions.",
  openGraph: {
    title: "Atelier — Design & Creative Technology",
    description:
      "Installations, digital platforms, and applications for contemporary culture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="relative min-h-full flex flex-col font-sans antialiased">
        <SiteBackground />
        <main className="relative z-[1] flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
