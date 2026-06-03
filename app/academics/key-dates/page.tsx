import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Academic Calendar | KIA Lakeside Academy",
  description:
    "Review school term resumption timelines, mid-term holiday breaks, exam schedules, and holiday dates for the academic year.",
};

const terms = [
  {
    termName: "Christmas Term (1st Term)",
    dates: [
      { event: "Staff Resumption & Planning", date: "Monday, 1st September" },
      { event: "Student Resumption Date", date: "Monday, 8th September" },
      { event: "Mid-Term Holiday Break", date: "Monday, 20th October – Friday, 24th October" },
      { event: "End of Term Examinations", date: "Monday, 1st December – Friday, 5th December" },
      { event: "Vacation / Closing Date", date: "Friday, 12th December" },
    ],
  },
  {
    termName: "Easter Term (2nd Term)",
    dates: [
      { event: "Student Resumption Date", date: "Monday, 5th January" },
      { event: "Mid-Term Holiday Break", date: "Monday, 15th February – Friday, 19th February" },
      { event: "Entrance Exam (Primary)", date: "Saturday, 6th March" },
      { event: "End of Term Examinations", date: "Monday, 15th March – Friday, 19th March" },
      { event: "Vacation / Closing Date", date: "Friday, 26th March" },
    ],
  },
  {
    termName: "Summer Term (3rd Term)",
    dates: [
      { event: "Student Resumption Date", date: "Monday, 12th April" },
      { event: "Mid-Term Holiday Break", date: "Monday, 24th May – Friday, 28th May" },
      { event: "Inter-House Sports Meet", date: "Saturday, 12th June" },
      { event: "End of Year Examinations", date: "Monday, 28th June – Friday, 2nd July" },
      { event: "Graduation & Closing Date", date: "Friday, 16th July" },
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Planner / Calendar context */}
        <Image
          src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1600&auto=format&fit=crop"
          alt="Academic calendar key dates timeline"
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
                <span className="text-[#FB8424] font-semibold">Key Dates</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            School Schedules
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Academic Calendar
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: TERM DATES BREAKDOWN
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Term schedules">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Key Milestones
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Three Term Resumption & Closing Dates
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We structure our calendar to facilitate academic balance, allowing adequate time for coursework, revision, and holiday rest.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {terms.map((term) => (
              <div 
                key={term.termName} 
                className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary block" />
                    {term.termName}
                  </h3>

                  <div className="space-y-4">
                    {term.dates.map((dt) => (
                      <div key={dt.event} className="pb-3 border-b border-primary/5">
                        <span className="text-[10px] uppercase font-bold tracking-wider text-primary/45 block mb-1">
                          {dt.event}
                        </span>
                        <span className="text-sm font-semibold text-primary">{dt.date}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-primary/5 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Academic Schedule
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: EVENT HIGHLIGHTS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Major school events calendar">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Academic Forums */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Academic Events & Forums
              </h2>
              <p className="text-sm text-primary/75 leading-relaxed">
                We believe in keeping parents and stakeholders aligned through regular open forums, teacher conferences, and prize-giving ceremonies:
              </p>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="pb-3 border-b border-primary/5">
                  <span className="text-xs font-bold text-secondary">PTA General Meetings</span>
                  <p className="text-xs text-primary/70 mt-1">Held termly to align parents with the school's developmental objectives and review curriculum enhancements.</p>
                </div>
                <div className="pb-3 border-b border-primary/5">
                  <span className="text-xs font-bold text-secondary">Open Days & Progress Conferences</span>
                  <p className="text-xs text-primary/70 mt-1">Mid-term conferences giving parents direct opportunities to audit child progress files with instructors.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-secondary">Speech & Prize Giving Day</span>
                  <p className="text-xs text-primary/70 mt-1">End-of-year ceremony celebrating top scorers and honor lists in academic and leadership traits.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Cultural & Sports Activities */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Cultural & Sports Activities
              </h2>
              <p className="text-sm text-primary/75 leading-relaxed">
                Nurturing balanced character demands active sports programs, cultural displays, and performance opportunities:
              </p>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm space-y-4">
                <div className="pb-3 border-b border-primary/5">
                  <span className="text-xs font-bold text-secondary">Cultural Heritage Festival</span>
                  <p className="text-xs text-primary/70 mt-1">An annual celebration highlighting Nigerian languages, traditional food models, and historical drama performances.</p>
                </div>
                <div className="pb-3 border-b border-primary/5">
                  <span className="text-xs font-bold text-secondary">Inter-House Athletic Meets</span>
                  <p className="text-xs text-primary/70 mt-1">Bi-annual sporting tournament pitting blue, yellow, green, and red student houses in track and relay finals.</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-secondary">School Music Concerts</span>
                  <p className="text-xs text-primary/70 mt-1">Termly music and instrument assemblies showing progress in violin, recorder, and piano lessons.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: DOWNLOAD CALENDAR CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-primary/5" aria-label="Prospectus download">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Download the Full Academic Calendar
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Access the detailed 3-term academic calendar complete with exam dates, field trips, and school assemblies in PDF format.
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
                Download Calendar PDF 📥
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
