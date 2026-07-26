"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../../_components/ui/Button";

const categories = ["all", "campus", "academics", "sports", "arts"];

const images = [
  {
    src: "/hero.jpg",
    alt: "KIA Lakeside Academy main entrance and beautiful campus view",
    category: "campus",
    span: "md:col-span-2",
  },
  {
    src: "/new-conducive-learning-environment.jpg",
    alt: "Bright, modern classrooms designed to stimulate intellectual curiosity",
    category: "campus",
    span: "md:col-span-1",
  },
  {
    src: "/new-science-lab.jpg",
    alt: "State-of-the-art physics, chemistry, and biology laboratory",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/new-liberies.jpg",
    alt: "Fully stocked libraries fostering research and reading habits",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/new-computer-room.jpg",
    alt: "Advanced computing facilities for ICT, digital literacy, and coding",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/new-music-art.jpg",
    alt: "Music and art studio spaces encouraging creative expression",
    category: "arts",
    span: "md:col-span-2",
  },
  {
    src: "/new-home-economics.jpg",
    alt: "Modern home economics kitchen and culinary training lab",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/new-play-areas.jpg",
    alt: "Safe, monitored playgrounds for primary and early years children",
    category: "campus",
    span: "md:col-span-1",
  },
  {
    src: "/new-sporting-facilities.jpg",
    alt: "Professional sports tracks and courts supporting physical fitness",
    category: "sports",
    span: "md:col-span-2",
  },
  {
    src: "/new-conference-room.jpg",
    alt: "Professional conference space for presentations and meetings",
    category: "campus",
    span: "md:col-span-1",
  },
  {
    src: "/new-well-equipped-auditorium.jpg",
    alt: "Spacious assembly hall for student events, drama, and graduation",
    category: "arts",
    span: "md:col-span-2",
  },
  {
    src: "/new-dancing.jpg",
    alt: "Student performing arts and cultural dance presentations",
    category: "arts",
    span: "md:col-span-1",
  },
  {
    src: "/robotic-room.jpg",
    alt: "STEM robotics room for hands-on engineering projects",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/student-life-heroimg.jpg",
    alt: "Energetic student team matches and cooperative sports play",
    category: "sports",
    span: "md:col-span-1",
  },
  {
    src: "/counselling-heroimg.jpg",
    alt: "Comfortable and safe student counselling and well-being space",
    category: "campus",
    span: "md:col-span-1",
  },
  {
    src: "/new-early-child.jpeg",
    alt: "Engaged Early Years student participating in activities",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/new-primary-school-girl.jpeg",
    alt: "Primary school student showcasing classroom learning materials",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/new-secondary-school-boy.jpg",
    alt: "Focused Secondary school student in the computer laboratory",
    category: "academics",
    span: "md:col-span-1",
  },
];

export default function Page() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredImages = images.filter(
    (img) => activeFilter === "all" || img.category === activeFilter
  );

  return (
    <>
      {/* ----------------------------------------------------
          1. HERO HEADER BANNER
         ---------------------------------------------------- */}
      <section className="relative bg-[#352679] text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FB8424] rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#352679] rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-site relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-amber-200/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/information" className="hover:text-white transition-colors">
              Information
            </Link>
            <span>/</span>
            <span className="text-white">School Gallery</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Media & Highlights
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                School Gallery
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                Take a visual journey through our campus, classrooms, laboratory, play areas, and sporting events showcasing academic excellence and student life.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/academics" variant="secondary" size="lg">
                  Explore Programs
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Get in Touch
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/new-conducive-learning-environment.jpg"
                    alt="KIA Lakeside Academy Campus Gallery Showcase"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Inspiring Environment
                  </p>
                  <p className="text-xl font-bold font-display">
                    KIA Lakeside Academy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: GALLERY WITH TABS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Interactive school gallery">
        <div className="container-site">

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full border transition-all duration-200 capitalize ${activeFilter === cat
                  ? "bg-secondary border-secondary text-white shadow-md shadow-secondary/15"
                  : "bg-[#fcfbfe] border-primary/10 text-primary hover:border-primary/25"
                  }`}
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredImages.map((img, i) => (
              <div
                key={i}
                className={`relative aspect-[4/3] rounded-3xl overflow-hidden border border-primary/5 hover:shadow-lg transition-all duration-300 group ${img.span}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 100vw, 33vw"
                />

                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FB8424] mb-1.5" style={{ fontFamily: "var(--font-outfit)" }}>
                    {img.category}
                  </span>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {img.alt}
                  </h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
