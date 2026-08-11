import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Leadership Team | KIA Lakeside Academy",
  description:
    "Meet the Board of Directors and School Management Team at KIA Lakeside Academy, guiding academic success and character development.",
};

interface LeaderProfile {
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  initials: string;
  gradient: string;
}

const boardMembers: LeaderProfile[] = [
  {
    name: "Mrs. Titilayo Adebiyi",
    role: "Founder & Proprietress",
    bio: "Visionary founder overseeing the long-term legacy, core values, and strategic development of the academy.",
    initials: "TA",
    gradient: "from-[#352679] to-[#FB8424]",
  },
  {
    name: "Professor Benjamin Adebiyi",
    role: "Executive Board Director",
    bio: "Guides institutional compliance, campus expansions, and curriculum alignments with global standards.",
    initials: "OA",
    gradient: "from-[#2e1f66] to-[#d66f1c]",
  },
  {
    name: "Professor Oladapo Afolabi (OON, CFR)",
    role: "Chairman, Board of Directors",
    bio: "Distinguished academician and administrator steering the board's strategic governance policies.",
    initials: "OA",
    gradient: "from-[#1e1b4b] to-[#4338ca]",
  },
  {
    name: "Mrs. Efretei Arit",
    role: "Member, Board of Directors",
    bio: "Contributes governance expertise and policy review for school growth and operational progress.",
    initials: "EA",
    gradient: "from-[#0f172a] to-[#3b82f6]",
  },
  {
    name: "Mr. Ibrahim Dikko",
    role: "Member, Board of Directors",
    bio: "Advises on corporate governance, organizational compliance, and strategic development.",
    initials: "ID",
    gradient: "from-[#022c22] to-[#10b981]",
  },
  {
    name: "Mrs. Aisha Dikko",
    role: "Member, Board of Directors",
    bio: "Brings extensive legal and administrative expertise to board governance and compliance.",
    initials: "AD",
    gradient: "from-[#581c87] to-[#a855f7]",
  },
  {
    name: "Mr. Tope Fashedemi",
    role: "Member, Board of Directors",
    bio: "Provides strategic insights into technology integration, infrastructure, and modern learning systems.",
    initials: "TF",
    gradient: "from-[#701a75] to-[#d946ef]",
  },
  {
    name: "Dr. (Mrs.) Rosemary Umana",
    role: "Member, Board of Directors",
    bio: "Enriches the board with deep educational pedagogy, school quality assurance, and training insights.",
    initials: "RU",
    gradient: "from-[#831843] to-[#ec4899]",
  },
  {
    name: "Mr. Anselem Anyanwu",
    role: "Member, Board of Directors",
    bio: "Supports institutional advancement, resource planning, and local community engagement initiatives.",
    initials: "AA",
    gradient: "from-[#14532d] to-[#22c55e]",
  },
  {
    name: "Mr. Ibtitunde Balogun",
    role: "Member, Board of Directors",
    bio: "Guides fiscal planning, capital investments, and physical campus facility maintenance standards.",
    initials: "IB",
    gradient: "from-[#7c2d12] to-[#f97316]",
  },
  {
    name: "Mrs. Adetutu Balogun",
    role: "Member, Board of Directors",
    bio: "Advises on student-centric care, community outreach programs, and student welfare governance.",
    initials: "AB",
    gradient: "from-[#0c4a6e] to-[#0ea5e9]",
  },
  {
    name: "Mr. Babatunde Lawal",
    role: "Member, Board of Directors",
    bio: "Represents school administration and educational leadership on the board.",
    initials: "BL",
    gradient: "from-[#352679] to-[#25D366]",
  },
  {
    name: "Mrs. Patience Omini",
    role: "Member, Board of Directors",
    bio: "Provides academic management input and school administration guidance to the board.",
    initials: "PO",
    gradient: "from-[#352679] to-[#0ea5e9]",
  },
];

const managementTeam: LeaderProfile[] = [
  {
    name: "Mr. Babatunde Lawal",
    role: "Principal / Head of School",
    bio: "Directs day-to-day administration, academic standards, and the overall student development experience.",
    imageUrl: "/new-principal-portrait.jpg",
    initials: "JS",
    gradient: "from-[#352679] to-[#25D366]",
  },
  {
    name: "Mrs. Patience Omini",
    role: "Vice Principal",
    bio: "Assists in coordinating school operations, overseeing curriculum implementation, and student academic success.",
    initials: "PO",
    gradient: "from-[#352679] to-[#0ea5e9]",
  },
  {
    name: "Mrs. Chioma Anyanwu",
    role: "Academic Coordinator & Registrar",
    bio: "Manages admissions registration, curricular timetables, and academic compliance metrics.",
    initials: "CA",
    gradient: "from-[#352679] to-[#a855f7]",
  },
  {
    name: "Mr. Benjamin Dafosi",
    role: "Bursar & Head of Finance",
    bio: "Oversees financial audits, operational budgets, and physical infrastructure expansions.",
    initials: "BD",
    gradient: "from-[#1e293b] to-[#475569]",
  },
  {
    name: "Mrs. Olabiyi Orekan",
    role: "School's Accountant",
    bio: "Manages student billing, tuition records, school accounts, and daily financial operations.",
    initials: "OO",
    gradient: "from-[#0f766e] to-[#14b8a6]",
  },
  {
    name: "Mrs. Olamide Adedeji",
    role: "Head of Pastoral Care & HR",
    bio: "Directs student boarding houses, personal counseling, and human resource management.",
    initials: "OA",
    gradient: "from-[#db2777] to-[#fb7185]",
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
          src="/new-conducive-learning-environment.jpg"
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
            {boardMembers.map((member) => (
              <div
                key={member.name}
                className="bg-[#fcfbfe] border border-[#352679]/5 rounded-3xl p-6 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center"
              >
                <div className="relative w-28 h-28 rounded-2xl overflow-hidden flex-shrink-0 shadow-md">
                  {member.imageUrl ? (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="120px"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-extrabold font-display`}>
                      {member.initials}
                    </div>
                  )}
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
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-w-7xl) 25vw, 50vw"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-4xl font-extrabold font-display`}>
                        {member.initials}
                      </div>
                    )}
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
