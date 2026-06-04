"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = ["all", "campus", "academics", "sports", "arts"];

const images = [
  {
    src: "/school-images/school-building.jpg",
    alt: "KIA Lakeside Academy main building and campus lawn",
    category: "campus",
    span: "md:col-span-2",
  },
  {
    src: "/school-images/science-lab.jpg",
    alt: "Secondary students conducting experiments in the Science Lab",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/school-images/children-in-class.jpg",
    alt: "Primary students participating in classroom activities",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/school-images/play-areas.jpg",
    alt: "Early years children enjoying the secured playground",
    category: "campus",
    span: "md:col-span-1",
  },
  {
    src: "/school-images/sporting-facilities.jpg",
    alt: "Excellent sports field and athletic track facilities",
    category: "sports",
    span: "md:col-span-2",
  },
  {
    src: "/school-images/computer-room.jpg",
    alt: "Students learning programming and ICT in the computer room",
    category: "academics",
    span: "md:col-span-1",
  },
  {
    src: "/school-images/music-art.jpg",
    alt: "Art studio projects and creative painting classes",
    category: "arts",
    span: "md:col-span-1",
  },
  {
    src: "/school-images/well-equipped-auditorium.jpg",
    alt: "Modern auditorium for school assemblies, drama, and events",
    category: "arts",
    span: "md:col-span-2",
  },
  {
    src: "/school-images/awards-with-kids.jpg",
    alt: "Celebrating academic success and school achievements",
    category: "campus",
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
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Gallery backdrop */}
        <Image
          src="/school-images/learning-environment.jpg"
          alt="KIA Lakeside Academy learning environment gallery backdrop"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Dark indigo gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent z-10" />

        <div className="container-site relative z-20 text-white w-full">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 flex-wrap text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/information" className="text-white/60 hover:text-white transition-colors">
                  Information
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">School Gallery</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Media & Highlights
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            School Gallery
          </h1>
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
                className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-full border transition-all duration-200 capitalize ${
                  activeFilter === cat
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
