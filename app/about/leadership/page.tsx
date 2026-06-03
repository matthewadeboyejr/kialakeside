import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership Team | KIA Lakeside Academy",
  description:
    "Meet the experienced educational leaders, trustees, and management team driving academic and character excellence at KIA Lakeside Academy.",
};

const boardMembers = [
  {
    name: "Mrs. Tolulope Awobiyi",
    role: "Founder & Proprietress",
    bio: "Visionary founder overseeing the long-term legacy, core values, and strategic development of the academy.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Mr. O. Awobiyi",
    role: "Executive Board Director",
    bio: "Guides institutional compliance, campus expansions, and curriculum alignments with global standards.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
  },
];

const managementTeam = [
  {
    name: "Mr. J. Smith",
    role: "Principal / Head of School",
    bio: "Directs day-to-day administration, academic standards, and the overall student development experience.",
    imageUrl: "/principal_portrait.png",
  },
  {
    name: "Mrs. Chioma Anyanwu",
    role: "Academic Coordinator & Registrar",
    bio: "Manages admissions registration, curricular timetables, and academic compliance metrics.",
    imageUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Mr. Benjamin Dafosi",
    role: "Bursar & Head of Finance",
    bio: "Oversees financial audits, operational budgets, and physical infrastructure expansions.",
    imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300&auto=format&fit=crop",
  },
  {
    name: "Mrs. Olamide Adedeji",
    role: "Head of Pastoral Care & HR",
    bio: "Directs student boarding houses, personal counseling, and human resource management.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Classroom context */}
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt="Educational leadership and teaching"
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
                <span className="text-[#FB8424] font-semibold">Leadership Team</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Our Directors
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Leadership Team
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: EXECUTIVE BOARD DIRECTORS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Board of directors">
        <div className="container-site">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Governance
            </span>
            <h2 className="text-3xl font-bold text-[#352679]" style={{ fontFamily: "var(--font-outfit)" }}>
              Executive Board Directors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {boardMembers.map((member) => (
              <div 
                key={member.name}
                className="bg-[#fcfbfe] border border-[#352679]/5 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  <Image
                    src={member.imageUrl}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="120px"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#352679]" style={{ fontFamily: "var(--font-outfit)" }}>
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#FB8424] font-semibold tracking-wide uppercase mt-0.5 mb-3">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-[#64607a] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SCHOOL MANAGEMENT TEAM
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-[#352679]/5" aria-label="School management team">
        <div className="container-site">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Administration
            </span>
            <h2 className="text-3xl font-bold text-[#352679]" style={{ fontFamily: "var(--font-outfit)" }}>
              School Management Team (SMT)
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {managementTeam.map((member) => (
              <div 
                key={member.name}
                className="bg-white border border-[#352679]/5 rounded-3xl p-5 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-5 shadow-sm group">
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-w-7xl) 25vw, 50vw"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#352679]" style={{ fontFamily: "var(--font-outfit)" }}>
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#FB8424] font-semibold tracking-wide uppercase mt-0.5 mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-xs sm:text-sm text-[#64607a] leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                  <span className="text-[#64607a]">KIA Lakeside Academy</span>
                  <a 
                    href="mailto:academy.lakeside@yahoo.com" 
                    className="text-[#FB8424] hover:text-[#e06e10] font-semibold"
                  >
                    Contact &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
