import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Secondary School | KIA Lakeside Academy",
  description:
    "Explore Secondary School at KIA Lakeside Academy: preparing students for academic success, responsible leadership, AI literacy, and university entrance.",
};

const secondaryPillars = [
  {
    title: "Analytical Thinking & Research",
    description: "Encouraging critical analysis, independent research, scientific investigation, and evidence-based problem solving.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Innovation & Technology",
    description: "Digital literacy, artificial intelligence awareness, advanced ICT, and modern technical skills.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Career & Leadership Exploration",
    description: "Mentorship in university career pathways, leadership roles, entrepreneurship, and community service.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Global Awareness & Character",
    description: "Developing confidence, integrity, resilience, ethical responsibility, and an international mindset.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1a2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.4" />
      </svg>
    ),
  },
];

const seniorOpportunities = [
  "Career Pathways & University Mentorship",
  "Student Executive Leadership Roles",
  "Entrepreneurship & Business Innovation",
  "Community Service & Civic Impact",
  "Advanced Technology & AI Awareness",
  "National & International Exam Readiness (WAEC/NECO/IGCSE)",
];

export default function SecondaryPage() {
  return (
    <main className="min-h-screen bg-white">
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
            <Link href="/academics" className="hover:text-white transition-colors">
              Academics
            </Link>
            <span>/</span>
            <span className="text-white">Secondary School</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Junior & Senior High School (Years 7 - 12)
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Secondary School
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                Our Secondary School prepares students for academic success, responsible leadership, and lifelong achievement.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/admissions/apply" variant="secondary" size="lg">
                  Apply for Secondary School
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Book Campus Visit
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/science_lab_students.png"
                    alt="Secondary School Students in Science Lab"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Leadership & Innovation
                  </p>
                  <p className="text-xl font-bold font-display">
                    Preparing for University & Global Impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. RIGOROUS CURRICULUM & ENGAGING METHODS
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              Students experience a rigorous curriculum delivered through engaging teaching methods that encourage analytical thinking, innovation, research, and independent learning. They are challenged to excel academically while developing confidence, integrity, resilience, and global awareness.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#e2e0ee] shadow-sm space-y-6 text-[#1a1633] text-base md:text-lg leading-relaxed">
            <p>
              As students prepare for senior secondary education and university, they receive increasing opportunities to explore career pathways, leadership roles, entrepreneurship, community service, technology, and artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. SECONDARY CURRICULAR PILLARS
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site">
          <SectionHeading
            eyebrow="High School Framework"
            title="Core Secondary Pillars"
            subtitle="Fostering academic excellence, technological fluency, and ethical leadership."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {secondaryPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#e2e0ee] hover:border-[#352679]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. SENIOR OPPORTUNITIES & CAREER PATHWAYS
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Preparation for Higher Education"
            title="Senior Secondary Opportunities"
            subtitle="As students progress towards graduation, they gain access to targeted growth pathways:"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {seniorOpportunities.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#f8f7ff] rounded-2xl border border-purple-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#352679] group-hover:bg-[#FB8424] group-hover:text-white flex items-center justify-center font-bold text-sm transition-colors flex-shrink-0">
                  0{idx + 1}
                </div>
                <p className="text-[#1a1633] text-base font-semibold leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING GRADUATE PROFILE STATEMENT & CTA
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Graduate Goal
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;Our goal is to graduate young people who are academically accomplished, emotionally intelligent, ethically responsible, and equipped to lead in an increasingly interconnected world.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply for Secondary School
            </Button>
            <Button href="/academics/curriculum" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Curriculum Overview
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
