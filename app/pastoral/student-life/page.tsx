import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Student Life | KIA Lakeside Academy",
  description:
    "Explore the House System (Red, Blue, Green, Yellow), daily morning assemblies, and extramural clubs that structure student life at KIA Lakeside Academy.",
};

const houses = [
  {
    name: "Red House (Valor)",
    value: "Valor & Courage",
    description: "Symbolizes physical endurance, tenacity, and strength of character. Red House athletes and thinkers consistently strive to overcome challenges.",
    colorTag: "border-red-200 bg-red-50 text-red-700",
    icon: (
      <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    name: "Blue House (Wisdom)",
    value: "Wisdom & Integrity",
    description: "Focuses on deep intellectual pursuits, integrity, and focused organization. Represents students who maintain excellent academic portfolios and term counts.",
    colorTag: "border-blue-200 bg-blue-50 text-blue-700",
    icon: (
      <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    name: "Green House (Growth)",
    value: "Growth & Resilience",
    description: "Champions environmental awareness, interpersonal collaboration, and steady growth. Encourages restorative actions and community coordination.",
    colorTag: "border-green-200 bg-green-50 text-green-700",
    icon: (
      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Yellow House (Brightness)",
    value: "Optimism & Innovation",
    description: "Inspires bright creative writing, music concerts, and technical innovations. Celebrates cheerful optimism, debate tracks, and peer encouragement.",
    colorTag: "border-yellow-200 bg-yellow-50 text-yellow-700",
    icon: (
      <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
        {/* Background Image: Active group */}
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy student life and activities"
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
                <Link href="/pastoral" className="text-white/60 hover:text-white transition-colors">
                  Pastoral
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Student Life</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            School Community
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Student Life
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: HOUSE SYSTEM
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="The house system">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Identity & Camaraderie
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              The Four School Houses
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              Every student is assigned to one of our four houses to encourage cross-grade camaraderie, group loyalty, and termly sports/academic competitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {houses.map((house) => (
              <div 
                key={house.name}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    {/* Icon Indicator */}
                    <div className="w-14 h-14 rounded-2xl bg-white border border-primary/5 flex items-center justify-center shadow-sm">
                      {house.icon}
                    </div>

                    {/* Value Badge */}
                    <span className="text-[10px] font-bold text-primary/45 uppercase tracking-wider">
                      House Core
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    {house.name}
                  </h3>
                  
                  <span className="text-xs font-semibold text-secondary mb-4 block">
                    {house.value}
                  </span>

                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                    {house.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  KIA LAKESIDE HOUSE
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: DAILY ROUTINES & CLUBS (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Routines and clubs">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Daily Assemblies */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Morning Assemblies & Values
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Assemblies are held weekly to frame school culture. They focus on character traits, spiritual guidance, spelling bees, and national values:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    ⏰ Weekly Assembly Routine
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Every Monday morning, students and faculty gather at the central assembly hall. Routine covers singing the National Anthem, reciting the School Pledge, and student-led presentations.
                  </p>
                </div>
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    🧠 Theme-based Character Guidance
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Each week focuses on a specialized core value or character trait (such as honesty, environmental accountability, time management) supported by class dramas and stories.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Club Landscapes */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Active School Clubs
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Our enrichment framework supports development outside the core academic hours. Students can choose from a variety of active clubs:
              </p>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <ul className="space-y-3.5 text-sm text-primary/75">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Debate & Public Speaking Track</strong>: Weekly panels to practice speech pacing, logical arguments, and spelling bee training.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Coding & IT Club</strong>: Animation projects in Scratch, basic scripting logic, and computer game design challenges.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Choir & Instrumental Lessons</strong>: Learning violin scale control, recorder breathing, and music notation reading.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
