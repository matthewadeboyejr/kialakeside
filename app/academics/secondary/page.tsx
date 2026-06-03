import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Secondary School | KIA Lakeside Academy",
  description:
    "Discover the Secondary program at KIA Lakeside Academy for Years 7 to 12, preparing students for BECE, WAEC, NECO, and Cambridge IGCSE exams.",
};

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Secondary school boy (from local public folder) */}
        <Image
          src="/secondary_school_boy.png"
          alt="KIA Lakeside Academy secondary study atmosphere"
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
                <span className="text-[#FB8424] font-semibold">Secondary</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            High School Stages
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Secondary School
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: JUNIOR VS SENIOR STRUCTURE
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Secondary levels breakdown">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Years 7 - 12
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Academic Stages & Qualifications
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We guide students through standard domestic examinations and international GCSE boards, dividing studies into two core developmental phases.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch max-w-6xl mx-auto">
            {/* Box 1: Junior Secondary */}
            <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-3 block" style={{ fontFamily: "var(--font-outfit)" }}>
                  Key Stage 3
                </span>
                <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Junior Secondary (JS 1 - 3 / Years 7 - 9)
                </h3>
                <p className="text-sm text-primary/75 leading-relaxed mb-6">
                  Focuses on building critical analytical skills across broad subjects, transitioning students from primary coaching into rigorous secondary disciplines.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-primary/45">Core Subjects Covered</h4>
                  <ul className="grid grid-cols-2 gap-3 text-xs text-primary/75">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary block" />
                      English Language & Lit
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary block" />
                      Mathematics
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary block" />
                      Integrated Science
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary block" />
                      ICT & Computer Studies
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary block" />
                      History & Geography
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary block" />
                      French Language
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/5 text-xs text-primary/60">
                🎓 <strong>Qualifications:</strong> National BECE & Cambridge Key Stage 3 Checkpoint.
              </div>
            </div>

            {/* Box 2: Senior Secondary */}
            <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:shadow-md transition-all duration-300">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-3 block" style={{ fontFamily: "var(--font-outfit)" }}>
                  Key Stages 4 & 5
                </span>
                <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Senior Secondary (SS 1 - 3 / Years 10 - 12)
                </h3>
                <p className="text-sm text-primary/75 leading-relaxed mb-6">
                  Provides academic specialization. Students select specific tracks to match their higher education and career outcomes.
                </p>

                <div className="space-y-4">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-primary/45">Academic Streams</h4>
                  <div className="space-y-3.5 text-xs text-primary/75">
                    <div className="flex items-start gap-2">
                      <span className="text-secondary font-bold font-mono mt-0.5">•</span>
                      <div>
                        <strong>Science Stream:</strong> Physics, Chemistry, Biology, Further Mathematics, and Agricultural Science.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-secondary font-bold font-mono mt-0.5">•</span>
                      <div>
                        <strong>Commercial Stream:</strong> Financial Accounting, Commerce, Economics, and Marketing.
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-secondary font-bold font-mono mt-0.5">•</span>
                      <div>
                        <strong>Arts & Humanities:</strong> Literature in English, Government, Visual Arts, and History.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/5 text-xs text-primary/60">
                🎓 <strong>Qualifications:</strong> WAEC WASSCE, NECO, & Cambridge IGCSE.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: CAREER & CODING (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Support and guidance">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Career & University Prep */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Career & University Guidance
                </h2>
                <p className="text-sm text-primary/75 leading-relaxed">
                  Admissions to top universities globally require early planning. We integrate guidance services into senior secondary routines:
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    💼 University Selection & Audits
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Our dedicated counselors host regular meetings with students to review transcripts, write essays, and compile application files for local, British, American, and Canadian institutions.
                  </p>
                </div>
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    📝 Standardized Tests Prep (SAT / IELTS)
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    We host optional extramural testing workshops after school to coach candidates on verbal and logical sections of SAT and language comprehension models in IELTS.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Advanced Science Labs & Programming */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Science Labs & Python Coding
                </h2>
                <p className="text-sm text-primary/75 leading-relaxed">
                  We prepare students for high-technology environments through active laboratories and structured digital skills:
                </p>
              </div>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <ul className="space-y-4 text-sm text-primary/75">
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <span><strong>Python & Web Programming</strong>: Secondary pupils study scripting logic, syntax, data storage, database queries, and HTML/CSS web design.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span><strong>State-of-the-Art Sciences</strong>: Individual workstations in our physics, chemistry, and biology laboratories support active learning experiments.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: OPTIONS BOOKLET CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-primary/5" aria-label="Options booklet guide">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Entering Year 10 (SS 1)?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Review subject selection rules, option matrices, and curriculum details inside our Senior Secondary Options Booklet.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/academics/options-booklet"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-secondary/20"
                style={{
                  background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                View Options Booklet &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
