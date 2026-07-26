import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Merit & Award System | KIA Lakeside Academy",
  description:
    "Discover the Merit & Award System at KIA Lakeside Academy: Star of the Week, Academic Excellence, Most Improved, Leadership, Attendance, Sports, Creativity, Principal's Honour Roll, Character Awards, and House Points.",
};

const meritAwardsList = [
  {
    title: "Star of the Week",
    description: "Weekly recognition awarded to students demonstrating outstanding effort, kindness, and positive classroom behavior.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Academic Excellence",
    description: "Celebrating top academic scorers and subject distinction across tests, examinations, and term assessments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Most Improved Student",
    description: "Honoring learners who exhibit exceptional determination, growth, and academic progress throughout the term.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Leadership Award",
    description: "Recognizing student leaders, prefects, and class representatives who serve with initiative, integrity, and responsibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Attendance Award",
    description: "Awarded to students with perfect or exemplary punctuality and daily attendance throughout the academic term.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sports Award",
    description: "Celebrating outstanding athletic achievements, sportsmanship, and teamwork in inter-house sports and inter-school tournaments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Creativity Award",
    description: "Encouraging artistic expression, musical talent, creative writing, drama, and innovative project designs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Principal's Honour Roll",
    description: "The highest academic and character distinction reserved for top honor students maintaining exceptional grade averages.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: "Character Award",
    description: "Honoring students who consistently exhibit kindness, empathy, honesty, respect, and exemplary moral standing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "House Points",
    description: "Continuous merit point system contributing to the termly House Championship across Red, Blue, Green, and Yellow Houses.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
];

export default function MeritAwardPage() {
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
            <span className="text-white">Merit & Award System</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Recognizing & Celebrating Excellence
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Merit & Award System
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                At KIA Lakeside Academy, we systematically celebrate academic diligence, moral character, creativity, leadership, and athletic achievement.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/admissions/apply" variant="secondary" size="lg">
                  Apply to KIA Lakeside
                </Button>
                <Button href="/pastoral/student-leadership" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Explore Student Leadership
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/robotic-room.jpg"
                    alt="KIA Lakeside Academy Merit & Award Ceremony"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Positive Reinforcement
                  </p>
                  <p className="text-xl font-bold font-display">
                    Inspiring High Standards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. MERIT AWARDS GRID (VERBATIM 10 ITEMS)
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Recognition Categories"
            title="Merit & Award Categories"
            subtitle="Explore our comprehensive award structure celebrating every dimension of student growth:"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {meritAwardsList.map((award, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                    {award.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {award.title}
                  </h3>

                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {award.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. CLOSING CALL-TO-ACTION BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Raising The Benchmark
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;Continuously challenging students to rise to a higher level of performance in every area of their school and personal life.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply to KIA Lakeside
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Contact Pastoral Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
