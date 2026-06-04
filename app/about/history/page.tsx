import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "School History | KIA Lakeside Academy",
  description:
    "Learn about the history of KIA Lakeside Academy, from our founding in 2008 to our relocation to Wuye, Abuja, and our plans for the future.",
};

const timelineEvents = [
  {
    year: "2008",
    title: "Commencement & Founding",
    description:
      "Lakeside Academy Nursery and Primary was founded on the 28th of August, 2008 by Mrs. Tolulope Awobiyi. The school commenced operations on 15th September, 2008 with 16 pupils, comprising of 6 boys and 10 girls, housed at Ashaik Jarma street, Jabi, Abuja.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    year: "2016",
    title: "Secondary School Expansion",
    description:
      "A secondary section was added on 19th September, 2016 with four (4) students in Year 7 (JS1) and eight (8) teachers, expanding the academy's mission into secondary education.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    year: "2017",
    title: "Relocation & Dedication",
    description:
      "In August 2017, the school moved to its permanent site at Plot 1176, Babafemi Ogundipe Boulevard, Cadastral Zone B03, Wuye, Abuja. The school was dedicated and renamed KIA Lakeside Academy on Friday 1st December, 2017 in honour of Kunle Irene Awobiyi.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    year: "Future",
    title: "21st Century Campus",
    description:
      "In the near future the secondary section will relocate to its own 21st century campus with boarding and day facilities, bringing world-class educational infrastructures to support advanced learning.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
        {/* Background Image: Wide view campus photo */}
        <Image
          src="/school-images/school-building.jpg"
          alt="KIA Lakeside Academy campus lawn"
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
                <span className="text-[#FB8424] font-semibold">History</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Our Journey
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            School History
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: TIMELINE
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Chronological history timeline">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#352679] mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              The Story of KIA Lakeside Academy
            </h2>
            <p className="text-sm sm:text-base text-[#64607a] leading-relaxed">
              Explore the history and key milestones of our institution, from our humble beginnings in 2008 to where we stand today, and our vision for the future.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center Line for Desktop Timeline */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#352679]/15 -translate-x-1/2" />

            <div className="flex flex-col gap-12 md:gap-16">
              {timelineEvents.map((event, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={event.year}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Timeline Node Icon */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-2 border-[#352679] bg-white text-[#352679] flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                      <div className="w-5 h-5 flex items-center justify-center">
                        {event.icon}
                      </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0">
                      <div 
                        className={`bg-white border border-[#352679]/10 rounded-2xl p-6 sm:p-8 hover:shadow-md hover:border-[#352679]/20 transition-all duration-300 ${
                          isEven ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {/* Year tag */}
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 shadow-sm"
                          style={{
                            background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                            fontFamily: "var(--font-outfit)",
                          }}
                        >
                          {event.year}
                        </span>

                        <h3 
                          className="text-lg sm:text-xl font-bold text-[#352679] mb-3"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {event.title}
                        </h3>
                        
                        <p className="text-sm text-[#64607a] leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
