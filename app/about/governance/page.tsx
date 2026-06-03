import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Governance | KIA Lakeside Academy",
  description:
    "Learn about our Board of Governors, their duties, and the governance framework that guides KIA Lakeside Academy towards long-term strategic success.",
};

const boardMembers = [
  {
    role: "Board Chairperson",
    title: "Chair of the Board",
    responsibility: "Proprietress Mrs. Tolulope Awobiyi. Leads board councils, manages strategic school planning, and oversees executive governance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    role: "Legal Trustee",
    title: "Compliance Board Member",
    responsibility: "Coordinates school legal trusts, policy compliance metrics, regulatory filings, and government agency alignments.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.571V9m.002-.006a3.001 3.001 0 110-3.003 3.003 3.003 0 010 3.003zM12 11c1.744 2.772 2.753 6.054 2.753 9.571m3.44-2.04l-.054-.09A13.916 13.916 0 0015 11.571V9m-.002-.006a3.001 3.001 0 110-3.003 3.003 3.003 0 010 3.003z" />
      </svg>
    ),
  },
  {
    role: "Academic Trustee",
    title: "Educational Consultant",
    responsibility: "Monitors national/international curriculum integrations, educational standard reviews, and university outcomes.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    role: "Parent Representative",
    title: "PTA Representative",
    responsibility: "Liaises between parent assemblies and the Board regarding student welfare initiatives, sports events, and facilities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    role: "Teacher Representative",
    title: "Faculty Representative",
    responsibility: "Conveys recommendations from academic staff regarding classroom resource planning, teacher welfare, and research labs.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    role: "Board Secretary",
    title: "Director of Administration",
    responsibility: "Records minutes, publishes agendas, schedules assemblies, coordinates registries, and maintains board corporate documentation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy Governance and Campus"
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
                <span className="text-[#FB8424] font-semibold">Governance</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Trustees
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Governance
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: FRAMEWORK
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Governance framework">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
                Structure
              </span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#352679] mb-6 tracking-tight animate-fade-in"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Governance Framework
              </h2>
              
              <div className="text-sm sm:text-base text-[#64607a] leading-relaxed space-y-4">
                <p>
                  The Board of Governors of KIA Lakeside Academy serves as the key governing body responsible for setting the strategic direction, ensuring financial compliance, and maintaining academic excellence.
                </p>
                <p>
                  The Board is comprised of experienced educational experts, trustees, parent, and teacher representatives, working collaboratively to guide the school toward long-term growth and success. Our structure ensures that policy implementation remains aligned with our core values of excellence, integrity, and achievement.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-gradient-to-br from-[#352679]/5 to-transparent border border-[#352679]/10 rounded-3xl p-8 shadow-sm">
              <h3 className="text-lg font-bold text-[#352679] mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Core Board Duties
              </h3>
              <ul className="flex flex-col gap-4 text-xs sm:text-sm text-[#64607a] list-none pl-0">
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold">•</span>
                  Setting long-term school expansion strategies.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold">•</span>
                  Auditing operational budgets &amp; capital investments.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold">•</span>
                  Ensuring compliance with local &amp; international education acts.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold">•</span>
                  Fostering parent-teacher association collaborations.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: BOARD LIST
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-[#352679]/5" aria-label="Board members">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-[#352679] mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              The Board of Governors
            </h2>
            <p className="text-sm text-[#64607a] leading-relaxed">
              Our governors bring a wide array of professional expertise in law, finance, education, and administration to KIA Lakeside Academy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <div 
                key={member.role}
                className="bg-white border border-[#352679]/5 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon indicator */}
                  <div className="w-10 h-10 rounded-xl bg-[#352679]/5 border border-[#352679]/10 text-[#352679] flex items-center justify-center mb-6">
                    {member.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#352679]" style={{ fontFamily: "var(--font-outfit)" }}>
                    {member.role}
                  </h3>
                  <p className="text-xs text-[#FB8424] font-semibold tracking-wide uppercase mt-0.5 mb-4">
                    {member.title}
                  </p>
                  <p className="text-xs sm:text-sm text-[#64607a] leading-relaxed">
                    {member.responsibility}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 text-xs text-[#64607a]">
                  KIA Lakeside Governing Body
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
