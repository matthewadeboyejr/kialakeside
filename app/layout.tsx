import type { Metadata } from "next";
import { Inter, Outfit, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KIA Lakeside — Shaping Future Leaders",
    template: "%s | KIA Lakeside",
  },
  description:
    "KIA Lakeside is a premier international school offering world-class education from Early Years through Secondary, with a strong focus on academic excellence, pastoral care, and enrichment.",
  keywords: [
    "KIA Lakeside",
    "international school",
    "private school",
    "early years",
    "elementary",
    "secondary",
    "admissions",
  ],
  openGraph: {
    title: "KIA Lakeside — Shaping Future Leaders",
    description:
      "A premier international school committed to academic excellence and holistic development.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} ${poppins.variable}`}
    >
      <body className="flex flex-col min-h-screen antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
