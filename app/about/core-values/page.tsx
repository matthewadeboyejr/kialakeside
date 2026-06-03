import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Core Values | KIA Lakeside Academy",
  description:
    "Explore the KIALA Core Values (Kindness, Integrity, Ambition, Learning, Accountability) that form the moral foundation of KIA Lakeside Academy.",
};

const coreValues = [
  {
    letter: "K",
    name: "Kindness",
    tagline: "To be kind and respectful to others!",
    description: "We cultivate a warm, inclusive community where empathy, courtesy, and respect guide our daily interactions, ensuring everyone feels supported.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    letter: "I",
    name: "Integrity",
    tagline: "To tell the truth, ALWAYS!",
    description: "Honesty and strong moral principles are at the heart of our community. We encourage students to be truthful, authentic, and upright.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    letter: "A",
    name: "Ambition",
    tagline: "Strive to DO and BE our best!",
    description: "We inspire our students to set high academic and personal aspirations, to dream big, embrace challenges, and continually maximize their potentials.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v5m-3 0h6m-6-14h6a3 3 0 013 3v3a6 6 0 01-12 0V9a3 3 0 013-3z" />
      </svg>
    ),
  },
  {
    letter: "L",
    name: "Learning",
    tagline: "A love for unending learning!",
    description: "We nurture a deep intellectual curiosity and critical thinking, encouraging a lifelong passion for knowledge, discovery, and self-improvement.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    letter: "A",
    name: "Accountability",
    tagline: "We take responsibility for our actions",
    description: "We empower learners to take complete ownership of their decisions, actions, and academic commitments, respecting others and our community rules.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Collaboration and learning */}
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy students collaborating"
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
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-white/60">About Us</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Core Values</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Our Values
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Core Values
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: KIALA VALUES GRID
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Core values details">
        <div className="container-site">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              The KIALA Acronym
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              KIA Lakeside Academy Core Values
            </h2>
            <p className="text-sm sm:text-base text-primary leading-relaxed">
              Our educational approach is built upon a firm moral and academic foundation. We expect all members of our community to live by and uphold these five core values:
            </p>
          </div>

          {/* 5-Column Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.name}
                className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 relative overflow-hidden flex flex-col justify-between group"
              >
                {/* Background Large Letter Watermark */}
                <div
                  className="absolute -bottom-8 -right-4 text-8xl font-black text-primary/70 select-none pointer-events-none group-hover:text-secondary/20 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {val.letter}
                </div>

                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {val.icon}
                  </div>

                  <h3
                    className="text-lg font-bold text-primary mb-2"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {val.name}
                  </h3>

                  <p className="text-xs text-[#FB8424] font-bold mt-0.5 mb-4 uppercase tracking-wide">
                    {val.tagline}
                  </p>
                  {/* 
                  <p className="text-xs sm:text-sm text-[#64607a] leading-relaxed mb-6">
                    {val.description}
                  </p> */}
                </div>

                <div className="relative z-10 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  KIA LAKESIDE
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
