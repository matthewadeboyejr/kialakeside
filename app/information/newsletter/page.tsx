import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";
import NewsletterForm from "../../_components/NewsletterForm";

export const metadata: Metadata = {
  title: "School Newsletter | KIA Lakeside Academy",
  description:
    "Explore the monthly downloadable School Newsletter at KIA Lakeside Academy featuring Principal's Message, Academic Highlights, Student Achievements, Upcoming Events, Sports, Community News, Alumni, and Parent Corner.",
};

const newsletterSections = [
  {
    title: "Principal's Message",
    description: "Welcome addresses, strategic school vision, academic reflections, and leadership guidance from the Head of School.",
    badge: "Leadership & Vision",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    title: "Academic Highlights",
    description: "Curriculum progress, STEM innovations, digital learning milestones, Cambridge pathway updates, and classroom projects.",
    badge: "Classroom & STEM",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Student Achievements",
    description: "Celebrating Star of the Week winners, Merit awards, competition trophies, spelling bee champions, and honor roll students.",
    badge: "Awards & Honors",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    title: "Upcoming Events",
    description: "Important calendar dates, examination timetables, mid-term breaks, open day invitations, and parent-teacher forum schedules.",
    badge: "Key Dates",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sports",
    description: "Inter-house tournament results, football academy fixtures, athletics meet recaps, and sportsmanship recognitions.",
    badge: "Athletics & Games",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Community News",
    description: "Charity drives, eco-friendly green initiatives, civic responsibility projects, and local community outreach updates.",
    badge: "Social Impact",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Alumni",
    description: "Spotlighting KIA Lakeside graduates, university admissions triumphs, career milestones, and alumni homecoming news.",
    badge: "Graduate Network",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    title: "Parent Corner",
    description: "Parenting tips, home study guidance, healthy nutrition advice, PTA meeting summaries, and family wellness resources.",
    badge: "Family Support",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

const downloadableEditions = [
  {
    title: "July 2026 Edition — Term Finale & Graduation Special",
    date: "July 2026",
    size: "2.4 MB PDF",
  },
  {
    title: "May 2026 Edition — STEM & Digital Learning Digest",
    date: "May 2026",
    size: "1.9 MB PDF",
  },
  {
    title: "March 2026 Edition — Inter-House Sports & Cultural Showcase",
    date: "March 2026",
    size: "2.1 MB PDF",
  },
  {
    title: "January 2026 Edition — New Year & Academic Term Outlook",
    date: "January 2026",
    size: "1.8 MB PDF",
  },
];

export default function SchoolNewsletterPage() {
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
            <span className="text-white">School Newsletter</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Monthly Downloadable Digest
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                School Newsletter
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                Our monthly downloadable newsletter keeps parents, students, and alumni informed on academic breakthroughs, school events, sports triumphs, and community achievements.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="#download-section"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white rounded-full bg-[#FB8424] hover:bg-[#e06e10] transition-colors shadow-lg"
                >
                  Download Latest Issue PDF
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </a>
                <Button href="#subscribe-section" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Subscribe to Email Digest
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/conducive-learning-environment.jpg"
                    alt="KIA Lakeside Academy Monthly Newsletter"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Monthly Publication
                  </p>
                  <p className="text-xl font-bold font-display">
                    Rich Stories & Campus Highlights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. NEWSLETTER FEATURES GRID (VERBATIM 8 ITEMS)
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Newsletter Contents"
            title="Monthly Downloadable Newsletter Featuring:"
            subtitle="Each edition brings together eight core sections celebrating our vibrant school community:"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {newsletterSections.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                      {item.icon}
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {item.title}
                  </h3>

                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. DOWNLOADABLE EDITIONS ARCHIVE
         ---------------------------------------------------- */}
      <section id="download-section" className="section-pad bg-[#f8f7ff]">
        <div className="container-site max-w-5xl mx-auto">
          <SectionHeading
            eyebrow="Download Archive"
            title="Download Monthly Newsletter PDF Editions"
            subtitle="Click below to download printable PDF editions of our official school newsletter:"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {downloadableEditions.map((edition, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#e2e0ee] hover:border-[#352679]/40 hover:shadow-xl transition-all duration-300 flex items-center justify-between group"
              >
                <div className="space-y-2 flex-1 pr-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#FB8424] uppercase tracking-wider">
                    <span>{edition.date}</span>
                    <span>&bull;</span>
                    <span className="text-gray-400">{edition.size}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1633] font-display group-hover:text-[#352679] transition-colors">
                    {edition.title}
                  </h3>
                </div>

                <a
                  href="/admissions/process"
                  className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors shadow-md"
                  aria-label="Download PDF edition"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. EMAIL SUBSCRIPTION FORM SECTION
         ---------------------------------------------------- */}
      <section id="subscribe-section" className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-[#f8f7ff] border border-[#e2e0ee] rounded-3xl p-8 md:p-12 shadow-sm text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FB8424]/10 border border-[#FB8424]/20 text-xs font-bold text-[#FB8424] uppercase tracking-wider font-display">
              Inbox Delivery
            </div>

            <h3 className="text-3xl font-extrabold text-[#1a1633] font-display">
              Subscribe to the Monthly Email Digest
            </h3>

            <p className="text-sm md:text-base text-[#64607a] leading-relaxed max-w-lg mx-auto">
              Get the latest monthly newsletter PDF and important campus announcements delivered straight to your email inbox.
            </p>

            <div className="max-w-md mx-auto pt-2">
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING CALL-TO-ACTION BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Connected School Community
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            Stay inspired and informed with every monthly edition of the KIA Lakeside Newsletter.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply to KIA Lakeside
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Contact Editorial Desk
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
