import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Football Academy | KIA Lakeside Academy",
  description:
    "Discover the KIA Lakeside Football Academy: professional soccer training, certified coaches, and age-group brackets (Ages 5-17).",
};

const brackets = [
  {
    name: "Early Kickers (Ages 5 - 8)",
    description: "Introduces basic ball control, foot coordination, short passing grids, and simple small-sided matches to build basic balance.",
    focus: "Coordination & Basic Control",
  },
  {
    name: "Junior Strikers (Ages 9 - 12)",
    description: "Focuses on pitch position awareness, team passing drills, defense positioning, speed sprints, and goalkeeper coaching.",
    focus: "Positional Awareness & Team Play",
  },
  {
    name: "Senior Academy (Ages 13 - 17)",
    description: "Advanced tactical formations, stamina drills, counter-attack strategies, defensive coordination, and competitive league preparation.",
    focus: "Tactical Formations & Stamina",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Soccer pitch */}
        <Image
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy soccer football pitch"
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
                <Link href="/enrichment" className="text-white/60 hover:text-white transition-colors">
                  Enrichment
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Football Academy</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Soccer Training
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Football Academy
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: PROGRAM CORE
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Football Program Core">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Elite Coaching
            </span>
            <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
              Elite Soccer Training & Mentorship
            </h2>
            <div className="text-sm sm:text-base text-primary/80 leading-relaxed space-y-4">
              <p>
                The KIA Lakeside Football Academy is a specialized program designed to identify, nurture, and elevate young soccer talents. Led by certified coaches, we combine rigorous physical workouts with tactical position drills, teamwork exercises, and competitive matches.
              </p>
              <p>
                We divide training sessions by age-groups, ensuring that activities are developmentally appropriate. Our pupils enjoy high-quality coaching resources, including standard soccer pitches, goals, agility hurdles, cones, and modern training gear.
              </p>
            </div>
          </div>

          {/* Age brackets list */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {brackets.map((bracket) => (
              <div 
                key={bracket.name} 
                className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    {bracket.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed mb-6">
                    {bracket.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-primary/5 space-y-1">
                  <h4 className="text-[10px] uppercase font-bold tracking-wider text-secondary">Training Focus</h4>
                  <p className="text-xs text-primary/70 leading-relaxed font-semibold">
                    {bracket.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: CONTACT CALLOUT
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Academy helpline">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-white border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Want to register for the Football Academy?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Contact our Admissions Desk at <strong className="text-primary">academy.lakeside@yahoo.com</strong> to secure registrations, uniform/kit prices, and training calendars.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/admissions/process"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-secondary/20"
                style={{
                  background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Enroll Now &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
