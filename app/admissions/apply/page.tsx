import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Apply to KIA Lakeside Academy | Admissions",
  description:
    "Apply to KIA Lakeside Academy today. Discover required application documents, enrolment guidelines, and begin your child's journey towards a lifetime of excellence.",
};

const requiredDocuments = [
  "Completed Application Form",
  "Birth Certificate",
  "Passport Photograph",
  "Previous School Reports",
  "Medical or Immunisation Records (where applicable)",
  "Transfer Documents (if applicable)",
];

export default function ApplyPage() {
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
            <span className="text-white">Apply to KIA Lakeside</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Online Application Portal
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Apply to KIA Lakeside Academy
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                We are delighted that you are considering joining the KIA Lakeside Academy family.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Start Application
                </Button>
                <Button href="/admissions/process" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Admission Process
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/children-playing.jpg"
                    alt="KIA Lakeside Academy Students"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Inspiring Potential
                  </p>
                  <p className="text-xl font-bold font-display">
                    Welcome to Our Family
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. WELCOME & BEGIN YOUR JOURNEY TODAY
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              Every child deserves an education that inspires excellence, nurtures character, and unlocks limitless potential. At KIA Lakeside Academy, we partner with families to provide a learning experience that prepares children for success in school, in life, and in the future.
            </p>
          </div>

          <div className="space-y-6 pt-4">
            <SectionHeading
              eyebrow="Application Steps"
              title="Begin Your Journey Today"
            />

            <div className="space-y-4 text-[#1a1633] text-base md:text-lg leading-relaxed">
              <p className="font-semibold text-[#352679] text-xl">
                Applying is simple.
              </p>
              <p>
                Complete our online application form or visit our Admissions Office to begin the process.
              </p>
              <p>
                Our admissions team will guide you through every stage, from enquiry to enrolment, ensuring that your experience is smooth, informative, and welcoming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. BEFORE YOU APPLY (DOCUMENT CHECKLIST)
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <SectionHeading
            eyebrow="Document Checklist"
            title="Before You Apply"
            subtitle="Please have the following documents available:"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {requiredDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-2xl border border-purple-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#352679] group-hover:bg-[#FB8424] group-hover:text-white flex items-center justify-center font-bold text-sm transition-colors flex-shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="text-[#1a1633] text-base font-semibold leading-snug">
                  {doc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-6 p-8 bg-white rounded-3xl border border-[#e2e0ee] space-y-4 text-[#1a1633] text-base md:text-lg leading-relaxed text-center">
            <p>
              Once your application has been reviewed, we will contact you regarding the next stage of the admission process.
            </p>
            <p className="font-medium text-[#352679]">
              If you have questions at any point, our Admissions Team will be pleased to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. JOIN OUR COMMUNITY
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-6">
          <SectionHeading
            eyebrow="Our Commitment to Families"
            title="Join Our Community"
            center
          />

          <div className="space-y-6 text-[#1a1633] text-base md:text-lg leading-relaxed text-center">
            <p>
              Choosing KIA Lakeside Academy means choosing an education that develops confident learners, principled leaders, creative thinkers, and compassionate global citizens.
            </p>
            <p className="font-medium text-[#352679] text-lg md:text-xl">
              We look forward to welcoming your family and partnering with you in shaping an extraordinary future for your child.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING CALLOUT STATEMENT & CTA
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Start Today
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            Apply today and take the first step towards a lifetime of excellence.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Admissions Office
            </Button>
            <Button href="/admissions/fees" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Application Fees
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
