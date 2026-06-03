import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admission Process | KIA Lakeside Academy",
  description:
    "Explore our step-by-step admission process: inquiry, form registration, entrance exam, family interview, and enrollment acceptance.",
};

const steps = [
  {
    step: "Step 01",
    title: "Inquiry & Campus Tour",
    description: "Submit an inquiry via our contact form, email, or telephone. We highly recommend visiting our campus in Wuye, Abuja, to schedule a tour of our modern classrooms, labs, and play areas.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    step: "Step 02",
    title: "Application Registration",
    description: "Purchase and fill out the official school registration form. Submit the completed application alongside necessary documents (birth certificate, academic reports, passport photos) and the non-refundable fee.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    step: "Step 03",
    title: "Entrance Examination",
    description: "Candidates sit for our entrance assessment (primary and secondary levels), which measures mathematical reasoning, English comprehension, writing, and quantitative/verbal reasoning capabilities.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: "Step 04",
    title: "Interactive Interview",
    description: "Shortlisted candidates and their parents are invited for a friendly personal interview with our academic team to evaluate student readiness, interests, and family alignment with our school values.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    step: "Step 05",
    title: "Acceptance & Enrollment",
    description: "Successful candidates receive an official Admission Offer Letter. To secure the placement, parents must pay the non-refundable acceptance/development fee and accept the terms of our school policies.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
        {/* Background Image: Active group */}
        <Image
          src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1600&auto=format&fit=crop"
          alt="Admissions and enrollment"
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
                <span className="text-[#FB8424] font-semibold">Admission Process</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Application Steps
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Admission Process
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: TIMELINE STEPS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Step-by-step admissions timeline">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Five Steps to Enrollment
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We make our entry registration process clear and transparent. Follow these five key milestones to register your child at KIA Lakeside Academy.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Center line for Desktop Timeline */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/15 -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {steps.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.step}
                    className={`relative flex flex-col md:flex-row items-start ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node Circle */}
                    <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                      <div className="w-5 h-5 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>

                    {/* Timeline Card */}
                    <div className="w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0">
                      <div 
                        className={`bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 hover:shadow-md hover:border-primary/20 transition-all duration-300 ${
                          isEven ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        {/* Step Year tag */}
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-4 shadow-sm"
                          style={{
                            background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                            fontFamily: "var(--font-outfit)",
                          }}
                        >
                          {item.step}
                        </span>

                        <h3 
                          className="text-lg sm:text-xl font-bold text-primary mb-3"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {item.title}
                        </h3>
                        
                        <p className="text-sm text-primary/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: READY TO APPLY CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Admissions help desk">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-white border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Ready to Begin Your Registration?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Contact our friendly Admissions Desk at <strong className="text-primary">academy.lakeside@yahoo.com</strong> or call <strong className="text-primary">08039681838</strong> to clarify entrance criteria or secure forms.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="mailto:academy.lakeside@yahoo.com"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-primary/20"
                style={{
                  background: "linear-gradient(135deg, #352679 0%, #261c5a 100%)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Contact Admissions ✉️
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
