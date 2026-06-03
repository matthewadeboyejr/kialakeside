import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import NewsletterForm from "@/app/_components/NewsletterForm";

export const metadata: Metadata = {
  title: "School Newsletter | KIA Lakeside Academy",
  description:
    "Read the monthly and termly newsletter editions at KIA Lakeside Academy to catch up on school events and achievements.",
};

const editions = [
  {
    title: "Christmas Term Finale (Dec 2025)",
    description: "Academic updates, Christmas carols concert highlights, spelling bee winners list, and speech day summaries.",
    date: "December 15, 2025",
  },
  {
    title: "Mid-Term Digest (Oct 2025)",
    description: "Orientation highlights, basketball team matches, and midterm project summaries across sections.",
    date: "October 30, 2025",
  },
  {
    title: "Welcome Back Digest (Sept 2025)",
    description: "A welcoming letter from the Principal, secondary options streams updates, and term dates calendars.",
    date: "September 15, 2025",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Newsletter reading */}
        <Image
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy newsletter magazine"
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
                <span className="text-[#FB8424] font-semibold">School Newsletter</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            School News
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            School Newsletter
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: RECENT EDITIONS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Recent newsletters list">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Recent Editions
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Catch Up On Campus Events
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              Read our school newsletter digests to explore class project summaries, student achievements, and academic timelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {editions.map((ed) => (
              <div 
                key={ed.title} 
                className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold text-secondary uppercase tracking-wider block mb-3">
                    {ed.date}
                  </span>
                  <h3 className="text-lg font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    {ed.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed mb-6">
                    {ed.description}
                  </p>
                </div>

                <Link
                  href="/admissions/process"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary/80 pt-4 border-t border-primary/5 mt-auto"
                >
                  Read PDF &rarr;
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SUBSCRIPTION FORM
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Subscribe to newsletter">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-white border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
              Subscribe to Our Mailing List
            </h3>
            <p className="text-sm text-primary/60 leading-relaxed mb-8 max-w-lg mx-auto">
              Receive official school newsletters, term announcements, and holiday reminders directly inside your email inbox.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
