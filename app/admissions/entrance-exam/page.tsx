import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Entrance Examination | KIA Lakeside Academy",
  description:
    "Learn about the entrance assessment at KIA Lakeside Academy: academic readiness, assessment components, Early Years approach, and what we look for in applicants.",
};

const assessmentComponents = [
  {
    title: "English Language",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Mathematics",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Verbal and Non-Verbal Reasoning",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Basic Science (where applicable)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.594 15.12a2 2 0 00-1.583.332A2 2 0 003 17.034V20a1 1 0 001 1h16a1 1 0 001-1v-2.966a2 2 0 00-.572-1.606z" />
      </svg>
    ),
  },
  {
    title: "Writing Task",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Oral Interaction for younger learners",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
];

const whatWeLookFor = [
  "Curiosity and enthusiasm for learning",
  "Communication skills",
  "Problem-solving ability",
  "Confidence",
  "Positive attitude",
  "Readiness for the next stage of education",
];

export default function EntranceExamPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ----------------------------------------------------
          1. HERO BANNER
         ---------------------------------------------------- */}
      <section className="relative bg-[#352679] text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FB8424] rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#352679] rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-site relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-amber-200/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/admissions" className="hover:text-white transition-colors">
              Admissions
            </Link>
            <span>/</span>
            <span className="text-white">Entrance Examination</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Supportive Assessment Environment
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Entrance Examination
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                The entrance assessment at KIA Lakeside Academy enables us to understand each child&apos;s academic strengths, learning needs, and developmental readiness. It is not designed to intimidate children but to ensure that every learner is placed in an environment where they can succeed.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/admissions/process" variant="secondary" size="lg">
                  View Admission Process
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Book Assessment Date
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/science_lab_students.png"
                    alt="KIA Lakeside Students Learning"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Developmental Readiness
                  </p>
                  <p className="text-xl font-bold font-display">
                    Supportive & Encouraging Atmosphere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. ASSESSMENT APPROACH & INCLUSIONS
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <p className="text-base md:text-lg text-[#352679] font-medium leading-relaxed">
              The assessment is conducted in a friendly and supportive atmosphere by experienced educators.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1633] font-display">
              Depending on the entry level, the assessment may include:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assessmentComponents.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-[#1a1633] font-display">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Early Years Note */}
          <div className="mt-12 p-6 md:p-8 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#FB8424] max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-[#1a1633] leading-relaxed font-medium">
              For Early Years applicants, assessments are play-based and age-appropriate, focusing on communication, social interaction, early literacy, numeracy, and developmental milestones.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. WHAT WE LOOK FOR
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Holistic Assessment"
            title="What We Look For"
            subtitle="Our assessment considers much more than academic ability. We also value:"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
            {whatWeLookFor.map((trait, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-purple-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#352679] group-hover:bg-[#FB8424] group-hover:text-white flex items-center justify-center font-bold text-sm transition-colors flex-shrink-0">
                  0{idx + 1}
                </div>
                <p className="text-[#1a1633] text-base font-semibold leading-snug">
                  {trait}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. FEEDBACK, CONFIDENTIALITY & GOAL BANNER
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto text-center space-y-6">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] space-y-4">
            <p className="text-base md:text-lg text-[#1a1633] leading-relaxed">
              Assessment results remain confidential and are used solely to support admission decisions and appropriate placement.
            </p>
            <p className="text-base md:text-lg text-[#1a1633] leading-relaxed font-medium">
              Parents will receive feedback where necessary, and successful applicants will proceed to the next stage of admission.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING CONFIDENCE STATEMENT
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;Our goal is to ensure every child begins their educational journey with confidence and the support they need to thrive.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/admissions/process" variant="secondary" size="lg">
              Explore Enrolment Process
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Schedule Assessment Session
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
