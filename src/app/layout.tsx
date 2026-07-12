import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { SiteBackground } from "@/components/layout/SiteBackground";
import { SiteFooter } from "@/components/layout/SiteFooter";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Gracielly Abreu — Design & Creative Technology",
    template: "%s · Gracielly Abreu",
  },
  description:
    "Design and creative technology for contemporary artists, museums, and cultural institutions.",
  openGraph: {
    title: "Gracielly Abreu — Design & Creative Technology",
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
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full`}>
      <body className="relative min-h-full flex flex-col font-sans antialiased">
        <SiteBackground />
        <main className="relative z-[1] flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
