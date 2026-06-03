import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Student Leadership | KIA Lakeside Academy",
  description:
    "Discover the student leadership framework at KIA Lakeside Academy, including Prefect Councils, the SRC, Class Captain roles, and leadership retreats.",
};

const leadershipRoles = [
  {
    title: "Head Boy & Head Girl",
    description: "The senior representatives of the student body. They coordinate the Prefect Council, represent the school at public assemblies, and liaise with the academic management team.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Section Prefects",
    description: "Specialized roles including Sports, Library, ICT, Environment, Assembly, and Academic Prefects. They coordinate specific activities and help tutors maintain daily schedules.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Student Representative Council (SRC)",
    description: "An elected student assembly featuring classroom representatives who gather bi-weekly to discuss school enhancements, student events, and project proposals.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Class Captains & Monitors",
    description: "Monthly elected representatives responsible for classroom order, resource distribution, and organizing study groups during teacher rotations.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
];

const currentLeaders = [
  {
    name: "Master Emmanuel Adebayo",
    role: "Head Boy (Year 12)",
    quote: "Leadership means leading by example and serving our school community with integrity.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Miss Chidiogo Nwachukwu",
    role: "Head Girl (Year 12)",
    quote: "Encouraging every student to discover their potential and achieve academic success.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Master Samuel Yusuf",
    role: "Sports Prefect (Year 11)",
    quote: "Promoting physical fitness, team spirit, and healthy competition across all houses.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Miss Amina Bello",
    role: "Library Prefect (Year 11)",
    quote: "Fostering a love for reading, research, and collaborative academic learning.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Student leaders */}
        <Image
          src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy student leadership framework"
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
                <Link href="/pastoral" className="text-white/60 hover:text-white transition-colors">
                  Pastoral
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Student Leadership</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Service & Representation
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Student Leadership
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: LEADERSHIP ROLES
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Leadership roles">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Opportunities for Service
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Structured Student Roles
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We provide practical leadership channels for students of all age groups, building communication, coordination, and team-building traits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {leadershipRoles.map((role) => (
              <div 
                key={role.title}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {role.icon}
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    {role.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Leadership Role
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2.5: CURRENT STUDENT LEADERS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Current student leaders">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Student Voice
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Meet Our Student Prefects
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              Current student leaders (2025/2026 Academic Session) elected to serve, represent, and guide the student body.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {currentLeaders.map((leader) => (
              <div 
                key={leader.name}
                className="bg-white border border-primary/10 rounded-3xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Photo container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-primary/5">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-w-768px) 100vw, 25vw"
                  />
                  {/* Subtle gradient overlay at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-primary mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
                      {leader.name}
                    </h3>
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider block mb-4">
                      {leader.role}
                    </span>
                    <p className="text-xs sm:text-sm text-primary/70 italic leading-relaxed">
                      &ldquo;{leader.quote}&rdquo;
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100/50 text-[9px] text-gray-400 uppercase tracking-widest font-semibold">
                    Prefect Council
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: TRAINING RETREATS (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-primary/5" aria-label="Leadership training programs">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Annual Retreat */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Annual Leadership Retreats
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Appointing leaders is only the first step. Every September, we host dedicated training retreats to equip newly elected prefects:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    🎓 Conflict Resolution Seminars
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Prefects learn active listening, empathy, and mediation techniques to resolve simple disagreements between peers on the playground or classrooms.
                  </p>
                </div>
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    ⏱️ Time Management Workshops
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Balancing academic coursework, exams, and leadership responsibilities requires planning. We coach leaders on structuring diaries and prioritization.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Outdoor Challenge */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Team Building Challenges
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Practical team challenges test collaboration, communication clarity, and trust:
              </p>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <ul className="space-y-4 text-sm text-primary/75">
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Outdoor Obstacle Courses:</strong> Managed physical events built to encourage team delegation, trust building, and collective problem-solving.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Interactive Case Studies:</strong> Group analysis panels reviewing historical examples of integrity-driven leadership.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Public Presentation Projects:</strong> Speech coaching sessions where leaders practice presenting term goals to administrative panels.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
