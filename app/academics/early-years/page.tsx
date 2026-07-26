import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Early Years | KIA Lakeside Academy",
  description:
    "Discover Early Years at KIA Lakeside Academy: a joyful beginning to lifelong learning through purposeful play, individual attention, and holistic child development.",
};

const earlyYearsUnits = [
  {
    title: "Crèche",
    description: "Nurturing infant care focusing on safety, sensory exploration, and emotional warmth.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Preschool (Foundation Stage 2)",
    description: "Guided play-based activities encouraging curiosity, early speech, and social interaction.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Nursery One & Two (Reception)",
    description: "Structured literacy, numeracy, phonics, and creative exploration preparing children for primary school.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

const developmentSkills = [
  "Communication & Language",
  "Literacy & Phonics",
  "Numeracy & Logic",
  "Social & Emotional Growth",
  "Independence & Resilience",
  "Kindness & Relationships",
];

export default function EarlyYearsPage() {
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
            <Link href="/academics" className="hover:text-white transition-colors">
              Academics
            </Link>
            <span>/</span>
            <span className="text-white">Early Years</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Nursery & Early Foundation Stage
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Early Years
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                The Early Years at KIA Lakeside Academy provide children with a joyful beginning to lifelong learning.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/admissions/apply" variant="secondary" size="lg">
                  Apply for Admission
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Book Campus Visit
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/early-years.jpg"
                    alt="Early Years Child playing at KIA Lakeside Academy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Nurturing Curiosity
                  </p>
                  <p className="text-xl font-bold font-display">
                    Joyful Lifelong Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. NURTURING ENVIRONMENT & INDIVIDUAL ATTENTION
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              Our nurturing environment encourages curiosity, imagination, creativity, and confidence through purposeful play and carefully planned learning experiences. Children develop essential communication, language, literacy, numeracy, social, and emotional skills while discovering the excitement of learning through exploration.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#e2e0ee] shadow-sm space-y-6 text-[#1a1633] text-base md:text-lg leading-relaxed">
            <p>
              Highly qualified teachers understand that every child develops differently. We provide individual attention within a safe, stimulating, and caring environment where children feel valued and confident to express themselves.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. EARLY YEARS UNITS (CRÈCHE, PRESCHOOL, NURSERY 1 & 2)
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Early Stages"
            title="Our Early Years Units"
            subtitle="Providing age-appropriate environments tailored to early development."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {earlyYearsUnits.map((unit, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#e2e0ee] hover:border-[#352679]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                    {unit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {unit.title}
                  </h3>
                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {unit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. ESSENTIAL SKILLS & FOUNDATIONAL GROWTH
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto">
          <SectionHeading
            eyebrow="Holistic Development"
            title="Core Skills & Foundations"
            subtitle="Through exploration and guided play, our students build:"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {developmentSkills.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#f8f7ff] rounded-2xl border border-purple-100 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow group"
              >
                <div className="w-9 h-9 rounded-xl bg-purple-50 text-[#352679] group-hover:bg-[#FB8424] group-hover:text-white flex items-center justify-center font-bold text-sm transition-colors flex-shrink-0">
                  0{idx + 1}
                </div>
                <p className="text-[#1a1633] text-base font-semibold leading-snug">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING FOUNDATION STATEMENT & CTA
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Strong Academic Foundation
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;Our programme lays a strong foundation for future academic success while developing independence, resilience, kindness, and positive relationships.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply for Early Years
            </Button>
            <Button href="/academics/elementary" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Primary School
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
