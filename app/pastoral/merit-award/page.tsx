import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Merit & Award System | KIA Lakeside Academy",
  description:
    "Explore our student merit reward policy, House aggregates, milestone certificates (Bronze, Silver, Gold), and restorative conduct guidelines.",
};

const meritSteps = [
  {
    step: "01",
    title: "Earning Digital Merits",
    description: "Tutors reward individual merits for excellent class participation, showing Kindness (KIALA), academic effort, clean uniforms, and helpful peer support.",
  },
  {
    step: "02",
    title: "House Aggregates Tally",
    description: "Every individual merit adds to the student's House count. Scores are displayed weekly, and the leading house wins the Termly House Cup.",
  },
  {
    step: "03",
    title: "Milestone Certificates",
    description: "Triggered by individual merit scores. Bronze (50 merits), Silver (100), Gold (150), and the Director's Special Roll of Honor (200+).",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Award success context */}
        <Image
          src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy award ceremony and success records"
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
                <span className="text-[#FB8424] font-semibold">Merit & Award System</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Reinforcing Character
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Merits & Awards
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: BEHAVIOR REWARDS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Merit rewards structure">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Recognizing Excellence
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              The Merit Cycle
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We reward students for constructive contributions, academic efforts, and moral integrity to build a positive peer culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {meritSteps.map((step) => (
              <div 
                key={step.step}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-6 shadow-sm"
                    style={{
                      background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    Phase {step.step}
                  </span>

                  <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    {step.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Behavior Reinforcement
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: CONDUCT POLICY (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Restorative conduct policy">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Conduct guidelines */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Restorative Conduct Policy
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Discipline is framed around reflection and correction. Tutors guide students to understand the consequences of negative actions through a structured system:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    ⚠️ Standard Demerit Warnings
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Negative behaviors (tardiness, incomplete assignments, disruptive speech) trigger warning counts. Multiple warnings result in formal demerit entries.
                  </p>
                </div>
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    🤝 Reflection & Restoration
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Instead of pure exclusion, students sit with tutors during break hours to write reflection letters, focusing on solutions, apologies, or corrective actions.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Behavior guidance */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Guidance Interventions
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                For persistent behavioral challenges, we initiate specialized support nets to help the child adjust:
              </p>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <ul className="space-y-4 text-sm text-primary/75">
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Tutor Mentorship Contracts:</strong> The student and tutor compile daily target cards tracking conduct points.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Counselor Support Review:</strong> Direct counseling sessions to analyze external stressors causing anxiety or peer conflict.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Parent Alliance Audits:</strong> Open progress reviews with parents to maintain behavioral consistency between home and classroom environments.</span>
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
