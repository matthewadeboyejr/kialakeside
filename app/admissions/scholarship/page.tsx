import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Scholarships | KIA Lakeside Academy",
  description:
    "Explore our merit-based scholarship pathways at KIA Lakeside Academy, including academic, athletic, and creative arts awards.",
};

const scholarshipCategories = [
  {
    title: "Academic Excellence",
    description: "Awarded to candidates who demonstrate exceptional intellectual capacity. Evaluated based on stellar performance in the KIA Lakeside Entrance Examination, previous school transcript reports, and a cognitive interview.",
    benefit: "Up to 50% Tuition Waiver",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: "Sports & Athletics",
    description: "Dedicated to student athletes with outstanding records of performance in competitive sports such as soccer, swimming, basketball, or track and field. Applicants must undergo trials and present regional/club honors.",
    benefit: "Up to 30% Tuition Waiver",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Creative & Performing Arts",
    description: "Honors candidates with exceptional talent in fine arts, music, theatre performance, or creative writing. Requires submission of a portfolio (for visual arts) or a live audition (for music, voice, or drama).",
    benefit: "Up to 30% Tuition Waiver",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
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
        {/* Background Image: Graduation / Celebration setting */}
        <Image
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside academic scholarship students graduation context"
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
                <span className="text-[#FB8424] font-semibold">Scholarships</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Recognizing Excellence
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Scholarship Programs
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: SCHOLARSHIP OPPORTUNITIES
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Scholarship pathways">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Tuition Support
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Nurturing Diverse Talents
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We offer selective merit-based scholarships annually to recognize outstanding academic, athletic, and creative accomplishments. Scholarships apply strictly to tuition fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarshipCategories.map((sc) => (
              <div 
                key={sc.title}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    {/* Icon Indicator */}
                    <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                      {sc.icon}
                    </div>

                    {/* Benefit Tag */}
                    <span 
                      className="px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                      style={{
                        background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      {sc.benefit}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    {sc.title}
                  </h3>
                  
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {sc.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Merit Award Program
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: ELIGIBILITY & TERMS (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Scholarship criteria and rules">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Application Steps & Requirements */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  How to Apply
                </h2>
                <p className="text-sm text-primary/75 leading-relaxed mb-6">
                  Applying for a scholarship at KIA Lakeside Academy is integrated into the admissions timeline. Candidates must complete standard application processes prior to review:
                </p>
                
                <ol className="space-y-6 relative pl-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-primary/10">
                  <li className="relative">
                    <span className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[8px] text-white font-bold" />
                    <h4 className="text-base font-bold text-primary mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
                      1. Complete Registration
                    </h4>
                    <p className="text-sm text-primary/70">
                      Submit the standard school admission application form. Only registered prospective students are eligible to apply for scholarship evaluations.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[8px] text-white font-bold" />
                    <h4 className="text-base font-bold text-primary mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
                      2. Submit Supporting Portfolio
                    </h4>
                    <p className="text-sm text-primary/70">
                      Submit letters of recommendation, academic reports, sports achievements, or media portfolios of creative work directly to the Admissions Desk.
                    </p>
                  </li>
                  <li className="relative">
                    <span className="absolute -left-6 top-0.5 w-4 h-4 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-[8px] text-white font-bold" />
                    <h4 className="text-base font-bold text-primary mb-1" style={{ fontFamily: "var(--font-outfit)" }}>
                      3. Assessment & Audition
                    </h4>
                    <p className="text-sm text-primary/70">
                      Undergo targeted reviews, including advanced academic assessments, sports trials, or performance auditions scheduled by the academic committee.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Column 2: Terms and Maintenance Policy */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Terms & Retention
                </h2>
                <p className="text-sm text-primary/75 leading-relaxed">
                  Scholarships are privileges representing excellence. Awardees are held to high academic, behavioral, and leadership standards to maintain funding:
                </p>
              </div>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h4 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    📈 Maintenance Standards
                  </h4>
                  <ul className="space-y-3 text-sm text-primary/70">
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      </svg>
                      <span><strong>Academic standard</strong>: Maintain a minimum cumulative average of 80% or equivalent term-over-term GPA.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      </svg>
                      <span><strong>Behavior & Conduct</strong>: Demonstrate exemplary school citizenship. Incidents of suspension or serious disciplinary actions will revoke funding.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4.5 h-4.5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                      </svg>
                      <span><strong>Participation</strong>: Actively represent the school in debates, sports meets, or creative festivals, depending on the award category.</span>
                    </li>
                  </ul>
                </div>

                <hr className="border-primary/5" />

                <div>
                  <h4 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    ⚠️ Policy Guidelines
                  </h4>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                    Scholarships cover a specified percentage of tuition fees only. Development levies, registration, textbooks, examinations, and uniforms are not included and must be settled by parents/guardians. Awards are subject to annual review by the Board of Governors.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: CONTACT & FORMS CALLOUT
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-primary/5" aria-label="Scholarship office helpline">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Need more information on scholarship deadlines?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Send an email query to <strong className="text-primary">academy.lakeside@yahoo.com</strong> specifying your child's age group and special achievements.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="mailto:academy.lakeside@yahoo.com?subject=KIA%20Lakeside%20Scholarship%20Inquiry"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-primary/20"
                style={{
                  background: "linear-gradient(135deg, #352679 0%, #261c5a 100%)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Inquire via Email ✉️
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
