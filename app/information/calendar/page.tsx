import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "School Calendar | KIA Lakeside Academy",
  description:
    "View the Month-by-month academic calendar, orientation dates, term resumptions, exam blocks, and speech days at KIA Lakeside Academy.",
};

const calendarMonths = [
  {
    month: "September",
    events: [
      { title: "Orientation & Staff Planning", desc: "Staff training workshops begin early September." },
      { title: "Student Resumption Date", desc: "First day of classes for Christmas Term." },
    ],
  },
  {
    month: "October",
    events: [
      { title: "Mid-Term Break", desc: "A one-week break for students and staff mid-term." },
      { title: "Parent-Teacher Forum", desc: "PTA assembly to discuss curriculum implementations." },
    ],
  },
  {
    month: "December",
    events: [
      { title: "End of Term Exams", desc: "Christmas term examinations across all sections." },
      { title: "Christmas Concert & Closing", desc: "Annual carols assembly followed by Christmas holiday closure." },
    ],
  },
  {
    month: "January",
    events: [
      { title: "Easter Term Resumption", desc: "Students return to classrooms for the second term." },
    ],
  },
  {
    month: "March",
    events: [
      { title: "Easter Term Closing", desc: "Examinations completed; closure for Easter holiday." },
    ],
  },
  {
    month: "April",
    events: [
      { title: "Summer Term Resumption", desc: "Third and final term of the academic session begins." },
    ],
  },
  {
    month: "July",
    events: [
      { title: "Speech & Prize Giving Day", desc: "Annual awards ceremony celebrating academic excellence." },
      { title: "Graduation Ceremony", desc: "Year 6 and Year 12 graduation and closing of the session." },
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
        {/* Background Image: Calendar planner */}
        <Image
          src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy calendar planner schedule"
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
                <Link href="/information" className="text-white/60 hover:text-white transition-colors">
                  Information
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">School Calendar</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Academic Session
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            School Calendar
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: TIMELINE LIST
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Monthly calendar events">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Year At A Glimpse
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Month-by-Month Highlights
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              Plan ahead by checking the monthly milestones representing resumptions, exams, mid-term breaks, and graduation matches.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative pl-8 before:absolute before:left-2 before:top-4 before:bottom-4 before:w-0.5 before:bg-primary/10 space-y-12">
            {calendarMonths.map((m) => (
              <div key={m.month} className="relative">
                {/* Timeline node */}
                <span className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-secondary border-2 border-white flex items-center justify-center" />

                <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  {m.month}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {m.events.map((ev) => (
                    <div key={ev.title} className="bg-[#fcfbfe] border border-primary/5 rounded-2xl p-6 shadow-sm">
                      <h4 className="text-sm font-bold text-secondary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                        {ev.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                        {ev.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: PDF DOWNLOAD CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Printable calendar download">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-white border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Need to print the calendar planner?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Download the full, official 12-month printable calendar PDF detailing all academic events, holiday closures, and sports meets.
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
