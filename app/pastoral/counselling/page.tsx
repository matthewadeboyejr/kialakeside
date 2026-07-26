import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Counselling & Student Well-being | KIA Lakeside Academy",
  description:
    "Discover Counselling and Student Well-being at KIA Lakeside Academy: supporting students academically, socially, emotionally, and personally in a safe, confidential environment.",
};

const wellBeingPillars = [
  {
    title: "Resilience & Confidence",
    description: "Building inner strength, self-belief, and problem-solving skills to overcome academic and personal challenges.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Healthy Relationships",
    description: "Fostering mutual respect, conflict resolution, positive peer dynamics, and empathy across all age levels.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Effective Study Habits",
    description: "Guiding students with personalized time management, revision techniques, exam strategies, and goal setting.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Emotional Intelligence & Decisions",
    description: "Developing self-awareness, emotional management, ethical decision-making, and personal accountability.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

export default function CounsellingPage() {
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
            <Link href="/pastoral" className="hover:text-white transition-colors">
              Pastoral Care
            </Link>
            <span>/</span>
            <span className="text-white">Counselling & Well-being</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Empathetic Pastoral Support
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Counselling and Student Well-being
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                The emotional well-being of every child is central to our educational philosophy.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Book Counselling Session
                </Button>
                <Button href="/pastoral/student-life" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Explore Student Life
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/counselling-heroimg.jpg"
                    alt="KIA Lakeside Academy Counselling Room"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Safe & Confidential Space
                  </p>
                  <p className="text-xl font-bold font-display">
                    Holistic Student Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. PROGRAMME OVERVIEW & TRIANGULAR COLLABORATION
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              Our counselling programme supports students academically, socially, emotionally, and personally as they navigate each stage of development.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#e2e0ee] shadow-sm space-y-6 text-[#1a1633] text-base md:text-lg leading-relaxed">
            <p>
              Working closely with teachers and parents, our counsellors help students build resilience, confidence, healthy relationships, effective study habits, emotional intelligence, and responsible decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. WELL-BEING PILLARS GRID
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Pastoral Pillars"
            title="Core Counselling Support Domains"
            subtitle="Guiding learners through every phase of personal and academic growth."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {wellBeingPillars.map((pillar, idx) => (
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
          4. CLOSING SAFE & CONFIDENTIAL STATEMENT & CTA
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Confidential Guidance
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;Students are encouraged to seek support whenever they need guidance, knowing they are cared for within a safe and confidential environment.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/contact" variant="secondary" size="lg">
              Contact School Counsellor
            </Button>
            <Button href="/pastoral/merit-award" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Merit & Award System
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
