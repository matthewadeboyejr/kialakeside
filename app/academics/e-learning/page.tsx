import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "E-Learning Portal | KIA Lakeside Academy",
  description:
    "Access the official KIA Lakeside Academy E-Learning Portal connecting students and parents to Educare, Google Classroom, Microsoft Teams, and Moodle LMS.",
};

const lmsPlatforms = [
  {
    name: "Educare LMS",
    description: "Official school management system for report cards, attendance, term grades, and fee records.",
    href: "https://educare.school",
    badge: "Official Portal",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    name: "Google Classroom",
    description: "Assignment submission, digital class notes, group discussions, and teacher feedback.",
    href: "https://classroom.google.com",
    badge: "Classroom",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Microsoft Teams",
    description: "Live virtual classrooms, interactive webinars, department meetings, and video lectures.",
    href: "https://teams.microsoft.com",
    badge: "Virtual Classes",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: "Moodle Learning System",
    description: "Subject repositories, online quizzes, past examination papers, and digital study resources.",
    href: "https://moodle.org",
    badge: "E-Resources",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
];

export default function ELearningPage() {
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
            <Link href="/academics" className="hover:text-white transition-colors">
              Academics
            </Link>
            <span>/</span>
            <span className="text-white">E-Learning</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Digital Learning Environment
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                E-Learning
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                Access KIA Lakeside Academy&apos;s digital learning ecosystem for course materials, live classrooms, assignments, and term progress reports.
              </p>

              {/* Main Simple Button */}
              <div className="pt-4">
                <a
                  href="https://educare.school"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#FB8424]/30"
                  style={{
                    background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  Access KIA E-Learning Portal
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                {/* Subtext Note */}
                <p className="mt-3 text-xs md:text-sm text-amber-200/90 italic">
                  (Links to Educare, Moodle, Google Classroom, Microsoft Teams or your LMS.)
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/computer-room.jpg"
                    alt="KIA Lakeside Academy Digital Learning Computer Room"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    24/7 Academic Access
                  </p>
                  <p className="text-xl font-bold font-display">
                    Interactive Online Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. INTEGRATED LMS PLATFORMS GRID
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Integrated Learning Systems"
            title="Supported E-Learning Platforms"
            subtitle="Access learning resources across our supported digital learning management systems."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {lmsPlatforms.map((platform, idx) => (
              <a
                key={idx}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                      {platform.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#352679]/10 text-[#352679] group-hover:bg-[#FB8424]/10 group-hover:text-[#FB8424] transition-colors uppercase tracking-wider font-display">
                      {platform.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {platform.name}
                  </h3>

                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {platform.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200/60 mt-6 flex items-center gap-1.5 text-xs font-bold text-[#352679] group-hover:text-[#FB8424] transition-colors">
                  Open Portal
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
          3. IT HELP & LOGIN SUPPORT BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Technical Support Desk
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            Need help accessing your student or parent login credentials?
          </h2>

          <p className="text-lg text-purple-100/90 leading-relaxed max-w-2xl mx-auto font-light">
            Our ICT Help Desk is available to assist families with portal activation, password resets, and platform navigation.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="https://educare.school"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white rounded-full bg-[#FB8424] hover:bg-[#e06e10] transition-colors shadow-lg"
            >
              Access KIA E-Learning Portal
            </a>
            <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Contact ICT Support
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
