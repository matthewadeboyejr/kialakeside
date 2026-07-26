import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Admission Process | KIA Lakeside Academy",
  description:
    "Discover our 7-step admission process at KIA Lakeside Academy: Make an Enquiry, Visit Our Campus, Complete Application Form, Entrance Assessment, Interview, Offer, and Enrolment.",
};

const processSteps = [
  {
    step: "Step 1",
    num: "01",
    title: "Make an Enquiry",
    description:
      "Begin by contacting our Admissions Office through our website, telephone, email, or by visiting the school. Our admissions team will gladly answer your questions and provide detailed information about our programmes, facilities, and admission requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: "Step 2",
    num: "02",
    title: "Visit Our Campus",
    description:
      "We encourage prospective parents to tour our campus. During your visit, you will experience our learning environment, meet members of our staff, and discover what makes KIA Lakeside Academy a unique place for children to learn and grow.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h6m-6 0V11m0 0L9 9m3 2l3-2" />
      </svg>
    ),
  },
  {
    step: "Step 3",
    num: "03",
    title: "Complete the Application Form",
    description:
      "Submit the completed application form together with the required supporting documents.",
    documents: [
      "Birth Certificate",
      "Recent Passport Photograph",
      "Previous School Reports or Academic Records",
      "Immunisation Record (where applicable)",
      "Transfer Letter (if applicable)",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: "Step 4",
    num: "04",
    title: "Entrance Assessment",
    description:
      "Applicants may be invited to participate in an age-appropriate entrance assessment to determine academic readiness and identify areas where additional support may be beneficial.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: "Step 5",
    num: "05",
    title: "Admission Interview",
    description:
      "Parents and applicants may be invited for a meeting with the Admissions Team or School Leadership. This provides an opportunity for both the school and the family to discuss expectations and ensure a successful partnership.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    step: "Step 6",
    num: "06",
    title: "Admission Offer",
    description:
      "Successful applicants will receive an official Letter of Admission together with information regarding acceptance, school fees, uniforms, orientation, and resumption.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    step: "Step 7",
    num: "07",
    title: "Enrolment",
    description:
      "Admission is confirmed upon acceptance of the offer and payment of the applicable fees.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export default function AdmissionProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ----------------------------------------------------
          1. HERO HEADER BANNER
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
            <span className="text-white">Admission Process</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Enrolment Roadmap
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Admission Process
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                We are delighted that you are considering KIA Lakeside Academy for your child&apos;s education. Our admission process is designed to be straightforward, transparent, and supportive, ensuring that every family enjoys a smooth enrolment experience.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Make an Enquiry
                </Button>
                <Button href="/admissions/fees" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  View Tuition & Fees
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/learning-environment.jpg"
                    alt="KIA Lakeside Academy Campus Life"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Welcoming Community
                  </p>
                  <p className="text-xl font-bold font-display">
                    Start Your Child&apos;s Journey
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. STEP-BY-STEP ENROLMENT TIMELINE (7 STEPS)
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Step-by-Step Guide"
            title="Seven Steps to Enrolment"
            subtitle="Follow our clear seven-step admissions roadmap from initial enquiry to final enrolment."
            center
          />

          <div className="max-w-4xl mx-auto mt-16 space-y-8">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className="relative p-6 md:p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 md:gap-8 items-start group"
              >
                {/* Left Step Badge & Icon */}
                <div className="flex-shrink-0 flex md:flex-col items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#FB8424] font-display">
                    {item.step}
                  </span>
                </div>

                {/* Right Step Details */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1633] font-display">
                      {item.title}
                    </h3>
                    <span className="text-2xl font-extrabold text-[#352679]/20 group-hover:text-[#FB8424]/40 font-display transition-colors">
                      {item.num}
                    </span>
                  </div>

                  <p className="text-[#64607a] text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>

                  {/* Supporting Documents List if present in Step 3 */}
                  {item.documents && (
                    <div className="mt-4 p-5 rounded-2xl bg-white border border-purple-100 shadow-sm space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#352679]">
                        These typically include:
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#1a1633] font-medium">
                        {item.documents.map((doc, docIdx) => (
                          <li key={docIdx} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-[#FB8424]" />
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. CLOSING SUPPORT & COMMUNITY WELCOME BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Admissions Support Desk
          </div>

          <p className="text-lg md:text-xl text-purple-100 leading-relaxed font-light">
            Our Admissions Team remains available throughout the process to provide guidance and support.
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white pt-2">
            We look forward to welcoming your family to the KIA Lakeside Academy community.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Admissions Office
            </Button>
            <Button href="/admissions/why-kia" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Why Choose KIA Lakeside
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
