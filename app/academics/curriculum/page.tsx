import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Curriculum Overview | KIA Lakeside Academy",
  description:
    "Discover our blended educational curriculum combining the Nigerian NERDC guidelines with the British National Curriculum.",
};

const pillars = [
  {
    title: "Hybrid Excellence",
    description: "We merge the comprehensive Nigerian National Curriculum (NERDC) with the rigorous standards of the British National Curriculum. This provides local cultural grounding while preparing students for global benchmarks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "STEM & Coding Core",
    description: "Technological education starts early. Students study algorithms, logic flows, and syntax beginning with Scratch in primary years and progressing to Python, Web Design, and database management in secondary school.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Critical & Creative Writing",
    description: "We emphasize comprehension, creative narratives, and logical argument construction. Our language structures develop fluent expression, research capabilities, and persuasive debate skills.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
];

const academicStages = [
  {
    stage: "Early Years (Nursery)",
    ages: "Ages 1.5 - 5 Years",
    description: "Centered on the Early Years Foundation Stage (EYFS) framework. Focuses on play-based learning, phonics, fine motor development, social collaboration, and language exploration.",
    href: "/academics/early-years",
    accent: "bg-purple-50 hover:border-purple-300",
  },
  {
    stage: "Elementary (Primary)",
    ages: "Ages 5 - 11 Years (Years 1 - 6)",
    description: "Establishes vital foundations in arithmetic logic, grammar, sciences, and programming. Prepares students for secondary transition through interactive lessons.",
    href: "/academics/elementary",
    accent: "bg-blue-50 hover:border-blue-300",
  },
  {
    stage: "Secondary School",
    ages: "Ages 11 - 17 Years (Years 7 - 12)",
    description: "Subject specialization leading to national BECE/WAEC/NECO certificates and international Cambridge IGCSE qualifications. Features Science, Commercial, and Arts academic streams.",
    href: "/academics/secondary",
    accent: "bg-indigo-50 hover:border-indigo-300",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Study hall */}
        <Image
          src="https://images.unsplash.com/photo-1548610762-7c6acd25c291?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy curriculum resources"
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
                <Link href="/academics" className="text-white/60 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Curriculum Overview</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Academic Strategy
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Curriculum Overview
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CORE PILLARS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Curriculum pillars">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              The Blended Core
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Pillars of Our Learning Model
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We design educational frameworks to guide student growth in key academic proficiencies, critical logic, and character development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {pillar.icon}
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Curricular Pillar
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: ACADEMIC STAGES
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Academic stages index">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Educational Journey
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Curricular Breakdown by Stage
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We divide the academic progression into three clear milestones. Explore each section for detailed subject listings and timetables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {academicStages.map((stage) => (
              <div 
                key={stage.stage}
                className="bg-white border border-primary/10 rounded-3xl p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
                    {stage.ages}
                  </span>
                  <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    {stage.stage}
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed mb-8">
                    {stage.description}
                  </p>
                </div>

                <Link
                  href={stage.href}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary group-hover:text-secondary/80 border-t border-gray-100/50 pt-4 mt-auto"
                >
                  View Details &rarr;
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
