import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Elementary School | KIA Lakeside Academy",
  description:
    "Explore our Elementary (Primary) program for Years 1 to 6, emphasizing core arithmetic logic, languages, experimental science, and basic coding.",
};

const elementarySubjects = [
  {
    subject: "English Language Arts",
    description: "Builds foundations in spelling, spelling bee lists, grammar rules, reading comprehension, public speaking, and creative story writing.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    subject: "Mathematics & Logic",
    description: "Focuses on addition, multiplication, fractions, decimals, simple geometric measurements, and quantitative logic operations.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    subject: "Basic Science & Tech",
    description: "Introduces environmental study, plant biology, forms of energy, forces, simple machines, and hands-on laboratory observations.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    subject: "ICT & Coding (Scratch)",
    description: "Introduces basic algorithms, conditional loops, keyboard shortcuts, and simple interactive animation programming using MIT Scratch.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    subject: "French & Modern Languages",
    description: "Builds auditory comprehension and basic spoken vocabulary through rhymes, interactive dialogues, and cultural exploration.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5c-.347 2.187-1.512 4.417-3.251 6.5" />
      </svg>
    ),
  },
  {
    subject: "Creative Arts & Music",
    description: "Introduces basic musical scale notation, drawing patterns, clay crafts, paper folding, and collective choral singing classes.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
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
        {/* Background Image: Primary school girl (from local public folder) */}
        <Image
          src="/primary_school_girl.png"
          alt="KIA Lakeside Academy elementary classroom environment"
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
                <span className="text-[#FB8424] font-semibold">Elementary Year</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Primary Education
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Elementary School
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: SUBJECT MODULES
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Elementary core subjects">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Years 1 - 6
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Core Curricular Subject Modules
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We offer active classroom coaching that balances logical science, mathematics, language arts, and digital coding standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elementarySubjects.map((sub) => (
              <div 
                key={sub.subject}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {sub.icon}
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    {sub.subject}
                  </h3>
                  
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Primary Level
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: LEADERSHIP & CLUBS (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Leadership and clubs">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Primary Leadership */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Primary Student Leadership
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Character building begins with active participation. At KIA Lakeside Academy, we encourage elementary school students to take up early responsibilities to shape their confidence:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    👑 Primary Prefect Structure
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Selected Year 6 students serve as Head Boy, Head Girl, Sports Prefects, and Assembly Leaders, working closely with faculty members to guide morning assemblies and maintain order.
                  </p>
                </div>
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    🌱 Class Captains & Monitors
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Every class elects monthly captains and environment monitors, helping to build turn-taking skills and task accountability in all pupils.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Extramural Activities */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Extramural Activities & Clubs
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Our enrichment framework supports development outside the core academic hours. Elementary students can choose from a variety of active clubs:
              </p>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <ul className="space-y-3.5 text-sm text-primary/75">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Spelling Bee & Debate Track</strong>: Termly spelling contests to boost vocabulary retention and public speaking confidence.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Chess & Logical Games</strong>: Strategic board game training to develop forward-planning and mathematical reasoning.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span><strong>Active Sports Coaching</strong>: Weekly swimming track drills, track activities, and soccer team matches.</span>
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
