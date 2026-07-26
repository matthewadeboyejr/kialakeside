import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "School Calendar | KIA Lakeside Academy",
  description:
    "View and subscribe directly to the official KIA Lakeside Academy School Calendar via Google Calendar.",
};

const subscribeOptions = [
  {
    name: "Google Calendar",
    description: "Add to your personal Google account with real-time automatic synchronization.",
    href: "https://calendar.google.com",
    badge: "Direct Sync",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Apple iCal",
    description: "Subscribe directly on iPhone, iPad, or Mac calendar applications.",
    href: "https://calendar.google.com",
    badge: "Apple Devices",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Outlook Calendar",
    description: "Integrate school term dates and events into your Microsoft Outlook account.",
    href: "https://outlook.office.com/calendar",
    badge: "Microsoft",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function SchoolCalendarPage() {
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
            <Link href="/information" className="hover:text-white transition-colors">
              Information
            </Link>
            <span>/</span>
            <span className="text-white">School Calendar</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Live Academic Sync
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                School Calendar
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                Stay connected with KIA Lakeside Academy academic dates, examination timetables, sports meets, and term holidays. Parents can subscribe directly to sync updates to their mobile devices.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#subscribe-section"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white rounded-full bg-[#FB8424] hover:bg-[#e06e10] transition-colors shadow-lg"
                >
                  Subscribe Directly
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <Button href="/academics/key-dates" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  View Key Academic Dates
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/conducive-learning-environment.jpg"
                    alt="KIA Lakeside Academy Calendar Events"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Live Updates
                  </p>
                  <p className="text-xl font-bold font-display">
                    Interactive Google Calendar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. EMBEDDED GOOGLE CALENDAR SECTION
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Interactive Calendar"
            title="Embedded Google Calendar"
            subtitle="Explore scheduled school activities, holidays, exams, and special events below."
            center
          />

          <div className="mt-12 bg-[#f8f7ff] border border-[#e2e0ee] rounded-3xl p-4 md:p-8 shadow-xl overflow-hidden">
            <div className="relative w-full aspect-[16/10] min-h-[500px] rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=en.ng%23holiday%40group.v.calendar.google.com&ctz=Africa%2FLagos"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                title="KIA Lakeside Academy Google Calendar"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. PARENTS CAN SUBSCRIBE DIRECTLY SECTION
         ---------------------------------------------------- */}
      <section id="subscribe-section" className="section-pad bg-[#f8f7ff]">
        <div className="container-site max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Calendar Integration"
            title="Parents Can Subscribe Directly"
            subtitle="Never miss an important event. Add our official school calendar directly to your smartphone or desktop calendar app:"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {subscribeOptions.map((option, idx) => (
              <a
                key={idx}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-3xl bg-white border border-[#e2e0ee] hover:border-[#352679]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                      {option.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display">
                      {option.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {option.name}
                  </h3>

                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6 flex items-center gap-1.5 text-xs font-bold text-[#352679] group-hover:text-[#FB8424] transition-colors">
                  Subscribe Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. CLOSING CALL-TO-ACTION BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Transparent Academic Timelines
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            Keep track of term resumptions, exam dates, and family events effortlessly.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply to KIA Lakeside
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Contact School Office
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
