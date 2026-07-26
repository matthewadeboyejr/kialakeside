import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Scholarships | KIA Lakeside Academy",
  description:
    "Explore scholarship opportunities at KIA Lakeside Academy: recognizing academic excellence, leadership potential, sports, arts, innovation, and community service.",
};

const requirements = [
  "Scholarship Application Form",
  "Entrance Assessment",
  "Academic Review",
  "Interview",
  "Supporting Portfolio or Evidence of Achievement (where applicable)",
];

export default function ScholarshipPage() {
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
            <span className="text-white">Scholarships</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Recognizing & Encouraging Talent
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Scholarships
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                At KIA Lakeside Academy, we believe that exceptional talent, hard work, and outstanding character deserve recognition and encouragement.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Inquire About Scholarships
                </Button>
                <Button href="/admissions/process" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  View Admission Process
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/well-equipped-auditorium.jpg"
                    alt="KIA Lakeside Academy Auditorium"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Investing in Tomorrow&apos;s Leaders
                  </p>
                  <p className="text-xl font-bold font-display">
                    Empowering Future Changemakers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. SCHOLARSHIP PROGRAMME PURPOSE & CRITERIA
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              Our scholarship programme is designed to reward students who demonstrate academic excellence, exceptional leadership potential, outstanding talent, or significant achievement in sports, the arts, innovation, or community service.
            </p>
            <p className="text-base md:text-lg text-[#64607a] leading-relaxed">
              Scholarships may be awarded based on available opportunities and are subject to the school&apos;s scholarship policy.
            </p>
          </div>

          <div className="pt-6">
            <SectionHeading
              eyebrow="Application Steps"
              title="Applicants may be required to complete:"
              center
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {requirements.map((req, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#f8f7ff] rounded-2xl border border-purple-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow group"
                >
                  <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#352679] group-hover:bg-[#FB8424] group-hover:text-white flex items-center justify-center font-bold text-sm transition-colors flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <p className="text-[#1a1633] text-base font-semibold leading-snug">
                    {req}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. EXPECTATIONS & ELIGIBILITY DETAILS
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <SectionHeading
            eyebrow="Guidelines & Maintenance"
            title="Expectations & Eligibility"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 bg-white rounded-3xl border border-[#e2e0ee] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#352679] flex items-center justify-center mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1633] font-display">
                Recipient Standards
              </h3>
              <p className="text-[#64607a] text-base leading-relaxed">
                Scholarship recipients are expected to maintain high academic standards, exemplary conduct, and active participation in school life throughout the duration of the award.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-[#e2e0ee] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#352679] flex items-center justify-center mb-2">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#1a1633] font-display">
                Annual Variation & Inquiries
              </h3>
              <p className="text-[#64607a] text-base leading-relaxed">
                The availability, value, and eligibility criteria for scholarships may vary from year to year. Families interested in scholarship opportunities are encouraged to contact the Admissions Office for current information regarding eligibility and application deadlines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. CLOSING COMMITMENT BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;At KIA Lakeside Academy, we are committed to investing in tomorrow&apos;s leaders by creating opportunities for exceptional young people to flourish.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/contact" variant="secondary" size="lg">
              Contact Admissions Office
            </Button>
            <Button href="/admissions/process" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Admission Process
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
