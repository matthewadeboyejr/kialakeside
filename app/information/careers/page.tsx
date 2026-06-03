import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Careers | KIA Lakeside Academy",
  description:
    "Join the teaching or administrative team at KIA Lakeside Academy. Explore current openings and application guidelines.",
};

const vacancies = [
  {
    title: "Primary Class Teacher (Key Stage 2)",
    requirements: [
      "B.Ed or PGDE in Education (compulsory).",
      "Minimum 3 years of classroom experience teaching primary children.",
      "Strong familiarity with the British National Curriculum and active phonics.",
      "Excellent auditory comprehension and verbal classroom coordination."
    ],
    type: "Full-Time",
  },
  {
    title: "Secondary Chemistry Instructor",
    requirements: [
      "B.Sc in Chemistry with an Education certificate (B.Ed/PGDE).",
      "Demonstrated success preparing students for WAEC (WASSCE) and Cambridge IGCSE boards.",
      "Strong laboratory management skills and emergency first-aid protocols.",
      "Familiarity with digital study tools and presentation software."
    ],
    type: "Full-Time",
  },
  {
    title: "Registered School Nurse",
    requirements: [
      "Licensed Registered Nurse (RN) credentials with valid local board certification.",
      "Prior experience in pediatrics, emergency care, or school health clinics.",
      "Empathetic bedside manner and capacity to coordinate health records.",
      "Competency managing student medical forms and dispensing basic drugs."
    ],
    type: "Full-Time",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Teacher discussion */}
        <Image
          src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy teacher career vacancies context"
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
                <Link href="/information" className="text-white/60 hover:text-white transition-colors">
                  Information
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Careers</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Job Openings
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Careers
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: VACANCIES LIST
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Vacancies listing">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Join Our Team
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Current Open Positions
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We look for certified, passionate educators and administrative professionals to support our pupils' holistic development.
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {vacancies.map((job) => (
              <div 
                key={job.title}
                className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-6 sm:p-8 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-primary" style={{ fontFamily: "var(--font-outfit)" }}>
                      {job.title}
                    </h3>
                    <span 
                      className="px-3.5 py-1 rounded-full text-xs font-bold text-white shadow-sm flex-shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      {job.type}
                    </span>
                  </div>

                  <div className="space-y-2 mt-4">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-primary/45">Job Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-primary/75">
                          <span className="text-secondary font-bold font-mono mt-0.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: HOW TO APPLY
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Job application steps">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-white border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              How to Apply
            </h3>
            <p className="text-sm text-primary/70 leading-relaxed mb-4">
              Interested and qualified candidates should email their comprehensive CV and a brief Cover Letter detailing their teaching philosophy to <strong className="text-primary">academy.lakeside@yahoo.com</strong>.
            </p>
            <p className="text-sm text-primary/70 leading-relaxed mb-6">
              Please state the specific position title in the subject line of your email (e.g. <em>Application for Secondary Chemistry Instructor - [Your Name]</em>). Only shortlisted candidates will be contacted for interviews and vetting clearance audits.
            </p>
            <div className="bg-[#fcfbfe] border border-primary/5 p-4 rounded-xl text-xs text-primary/60">
              📢 <strong>Vetting Note:</strong> All final job offers at KIA Lakeside Academy are subject to strict academic credentials verification, background reviews, and reference checks.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
