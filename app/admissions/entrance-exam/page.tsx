import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Entrance Exam | KIA Lakeside Academy",
  description:
    "Learn about the entrance examination structure, syllabus guidelines, and student requirements at KIA Lakeside Academy.",
};

const examSubjects = [
  {
    subject: "English Language",
    description: "Evaluates candidates' grammar, vocabulary, reading comprehension, spelling, and creative writing abilities. We look for clarity of expression, proper sentence structure, and vocabulary depth.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    subject: "Mathematics & Quantitative Reasoning",
    description: "Covers number operations, fractions, decimals, simple equations, word problems, shapes, and logical quantitative grids. It measures computational accuracy and mathematical reasoning skills.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    subject: "Verbal Reasoning & General Paper",
    description: "Tests logical thinking, analogy identification, word association, and general knowledge (social studies, science, and current affairs). This helps evaluate the candidate's general awareness and aptitude.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

const syllabusDetails = [
  {
    level: "Primary Level (Years 1 - 6)",
    topics: [
      "Basic arithmetic (Addition, Subtraction, Multiplication, Division)",
      "Simple word problems, fractions, and decimals",
      "Reading comprehension and simple grammar exercises",
      "Creative writing: paragraph development and story writing",
      "Basic shape recognition and classification"
    ],
  },
  {
    level: "Secondary Level (JS 1 - SS 2)",
    topics: [
      "Algebraic expressions, linear equations, and ratios",
      "Geometry (angles, area, perimeter, and volume calculation)",
      "Advanced comprehension: identifying themes, vocabulary in context",
      "Formal & Informal essay writing, letters, and narratives",
      "Quantitative patterns and logical deduction matrices"
    ],
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Exam preparation / study layout */}
        <Image
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1600&auto=format&fit=crop"
          alt="Students studying for entrance examination"
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
                <Link href="/admissions" className="text-white/60 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Entrance Exam</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Academic Readiness
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Entrance Examination
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: EXAM STRUCTURE
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Exam subjects and structure">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Assessment Formats
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              What We Evaluate
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              Our standard assessments evaluate the cognitive capabilities, logic structures, and subject proficiency of prospective students to place them in the correct academic year.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examSubjects.map((sub) => (
              <div 
                key={sub.subject}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {sub.icon}
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    {sub.subject}
                  </h3>
                  
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Assessment Focus
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SYLLABUS & REQUIREMENTS (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Syllabus and requirements guidelines">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Syllabus Guidelines */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Syllabus Guidelines
                </h2>
                <p className="text-sm text-primary/75 leading-relaxed">
                  The examination covers standard national curriculum objectives appropriate for each grade level, alongside general aptitude. Below is an outline of core areas of focus:
                </p>
              </div>

              <div className="space-y-6">
                {syllabusDetails.map((detail) => (
                  <div key={detail.level} className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-outfit)" }}>
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary block" />
                      {detail.level}
                    </h3>
                    <ul className="space-y-3">
                      {detail.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-primary/75">
                          <svg className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Guidelines & What to Bring */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Exam Day Requirements
                </h2>
                <p className="text-sm text-primary/75 leading-relaxed">
                  To ensure a smooth, fair, and organized testing environment, candidates are expected to adhere to the following rules and prepare necessary items beforehand.
                </p>
              </div>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h4 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    🎒 Materials to Bring
                  </h4>
                  <ul className="space-y-2.5 text-sm text-primary/70">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold font-mono">•</span>
                      <span>Printed Application Slip / Exam Admit Clearance.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold font-mono">•</span>
                      <span>Writing Materials: HB Pencils, Blue or Black Ballpoint Pens, Eraser, and Pencil Sharpener.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary font-bold font-mono">•</span>
                      <span>Mathematical Set (compulsory for Secondary level candidates).</span>
                    </li>
                  </ul>
                </div>

                <hr className="border-primary/5" />

                <div>
                  <h4 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    🚫 Prohibited Items
                  </h4>
                  <ul className="space-y-2.5 text-sm text-primary/70">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold font-mono">•</span>
                      <span>Calculators, digital watches, or any programmable electronic aids.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold font-mono">•</span>
                      <span>Mobile phones, tablets, or headphone devices.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 font-bold font-mono">•</span>
                      <span>Textbooks, notebook scraps, or pre-written sheets.</span>
                    </li>
                  </ul>
                </div>

                <hr className="border-primary/5" />

                <div>
                  <h4 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    ⏰ Arrival & Dress Code
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Candidates should arrive at the school testing center at least 30 minutes before their scheduled session. Candidates must wear neat, comfortable semi-formal clothing or their current school uniform. Parents are requested to drop off candidates at the reception lounge.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: SCHEDULE CALLOUT
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-primary/5" aria-label="Book or schedule exam dates">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Want to book or confirm the next exam date?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Contact our Admissions Desk to receive the exam date schedules, register your child, or request access to sample past assessment layouts.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/admissions/process"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-secondary/20"
                style={{
                  background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                View Process &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
