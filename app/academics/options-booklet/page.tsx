import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Options Booklet | KIA Lakeside Academy",
  description:
    "Review Senior Secondary streams (Sciences, Commercial, Arts), elective specifications, and subject selection processes.",
};

const electiveStreams = [
  {
    title: "Sciences & Technology",
    description: "Focuses on scientific method, mathematical logic, and technological operations. Designed for students seeking analytical or technology careers.",
    specializations: ["Physics", "Chemistry", "Biology", "Further Mathematics", "Technical Drawing", "Geography"],
    careers: ["Medicine", "Engineering", "Architecture", "Computer Science", "Aviation"],
  },
  {
    title: "Commercial & Business",
    description: "Focuses on market operations, financial transactions, bookkeeping, and consumer marketing principles.",
    specializations: ["Financial Accounting", "Commerce", "Economics", "Government", "Marketing"],
    careers: ["Accounting", "Finance & Banking", "Business Administration", "Marketing", "Economics"],
  },
  {
    title: "Arts & Humanities",
    description: "Focuses on narrative analysis, governmental systems, historical context, literature, and creative crafts.",
    specializations: ["Literature in English", "Government", "History", "Visual Arts", "French Language"],
    careers: ["Law", "International Relations", "Journalism", "Performing Arts", "Graphic Design"],
  },
];

const selectionSteps = [
  {
    step: "Step 01",
    title: "Review Booklet Options",
    description: "Parents and JS 3 students review core streams, requirements, and subject briefs during the third term of junior secondary.",
  },
  {
    step: "Step 02",
    title: "Guidance Counseling Meeting",
    description: "Students undergo a counseling session with academic advisers to review capabilities, examination logs, and higher education goals.",
  },
  {
    step: "Step 03",
    title: "Submit Selection Form",
    description: "Submit the completed options form, signed by parents/guardians, specifying first and second choices to the Secondary Office by July 15th.",
  },
  {
    step: "Step 04",
    title: "Stream Placement Approval",
    description: "Placement approval letters are compiled by the academic board based on BECE grades, checkpoint results, and counseling reviews.",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Classroom library / study books */}
        <Image
          src="/new-liberies.jpg"
          alt="Secondary school options booklet resources"
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
                <span className="text-[#FB8424] font-semibold">Options Booklet</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Year 10 Electives
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Options Booklet
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CORE ELECTIVE STREAMS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Elective streams">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Academic Streams
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Senior Secondary Subject Streams
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We divide Year 10 (SS1) placements into three specialized academic streams to prepare students for targeted career outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {electiveStreams.map((stream) => (
              <div 
                key={stream.title} 
                className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    {stream.title}
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed mb-6">
                    {stream.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-primary/45">Elective Subjects</h4>
                    <div className="flex flex-wrap gap-2">
                      {stream.specializations.map((spec) => (
                        <span key={spec} className="px-2.5 py-1 bg-white border border-primary/5 rounded-lg text-xs font-semibold text-primary">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-primary/5 space-y-2">
                  <h4 className="text-[10px] uppercase font-bold tracking-wider text-secondary">Target Careers</h4>
                  <p className="text-xs text-primary/70 leading-relaxed font-semibold">
                    {stream.careers.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SELECTION TIMELINE
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Selection process timeline">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Placement Steps
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Subject Selection Process Timeline
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We guide students through a structured timeline to identify their streams, compile performance evaluations, and finalize placements.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Center line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/15 -translate-x-1/2" />

            <div className="flex flex-col gap-10">
              {selectionSteps.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.step}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node circle */}
                    <div className="absolute left-4 sm:left-1/2 w-6 h-6 rounded-full border-2 border-primary bg-white -translate-x-1/2 z-10 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </div>

                    {/* Card container */}
                    <div className="w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0">
                      <div 
                        className={`bg-white border border-primary/10 rounded-2xl p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300 ${
                          isEven ? "sm:text-right" : "sm:text-left"
                        }`}
                      >
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white mb-3 shadow-sm"
                          style={{
                            background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                            fontFamily: "var(--font-outfit)",
                          }}
                        >
                          {item.step}
                        </span>

                        <h3 
                          className="text-base sm:text-lg font-bold text-primary mb-2"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {item.title}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                          {item.description}
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

      {/* ═══════════════════════════════════════════
          SECTION 4: DOWNLOAD BOOKLET CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-primary/5" aria-label="Booklet download card">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Need the complete options syllabus booklet?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Download the official Options Booklet PDF detailing course descriptions, assessment weightings, and university requirements.
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
                Download Booklet 📥
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
