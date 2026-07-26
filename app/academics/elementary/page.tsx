import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Elementary School | KIA Lakeside Academy",
  description:
    "Discover Elementary School at KIA Lakeside Academy: building confident, inquisitive, and independent learners with strong literacy, numeracy, science, and digital competence.",
};

const elementaryPillars = [
  {
    title: "Literacy & Numeracy",
    description: "Developing computational accuracy, mathematical reasoning, reading comprehension, and persuasive creative writing.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Scientific Inquiry & Digital Competence",
    description: "Hands-on laboratory experimentation, ICT skills, basic coding concepts, and digital literacy.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Creativity & Problem-Solving",
    description: "Nurturing creative expression, artistic exploration, music, and logical problem-solving frameworks.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Moral Values & Leadership",
    description: "Building integrity, discipline, empathy, teamwork, and responsible school citizenship.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
];

const beyondClassroomList = [
  "Educational Visits & Field Excursions",
  "Practical Investigations & Experiments",
  "Inter-School Academic Competitions",
  "Extramural Clubs & Societies",
  "Music & Drama Studios",
  "Sports & Athletic Training",
  "Collaborative Team Projects",
  "Talent Development Showcases",
];

export default function ElementaryPage() {
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
            <span className="text-white">Elementary School</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Primary Education (Years 1 - 6)
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Elementary School
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                The Elementary School builds upon the strong foundations established during the Early Years by nurturing confident, inquisitive, and independent learners.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/admissions/apply" variant="secondary" size="lg">
                  Apply for Elementary
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
                    src="/primary.jpg"
                    alt="Primary School Student at KIA Lakeside Academy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Academic Excellence
                  </p>
                  <p className="text-xl font-bold font-display">
                    Nurturing Inquisitive Minds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. BROAD CURRICULUM & CORE PILLARS
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              Our broad curriculum develops literacy, numeracy, scientific inquiry, digital competence, creativity, and problem-solving alongside strong moral values and leadership qualities.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. ELEMENTARY CURRICULAR PILLARS GRID
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Primary Curriculum"
            title="Core Academic Foundations"
            subtitle="Equipping primary students with essential competencies for global success."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {elementaryPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#e2e0ee] hover:border-[#352679]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {pillar.title}
                  </h3>
                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. LEARNING BEYOND THE CLASSROOM
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <div className="max-w-4xl mx-auto space-y-8">
            <SectionHeading
              eyebrow="Co-Curricular Enrichment"
              title="Learning Extends Beyond the Classroom"
              subtitle="Learning extends beyond the classroom through educational visits, practical investigations, competitions, clubs, music, sports, and collaborative projects that allow every child to discover and develop their unique talents."
              center
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {beyondClassroomList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-[#f8f7ff] rounded-2xl border border-purple-100 shadow-sm flex items-start gap-3.5 hover:shadow-md transition-shadow"
                >
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-[#1a1633] text-sm md:text-base font-semibold leading-snug">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING OWNERSHIP & COMMUNITY STATEMENT
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Student Ownership & Impact
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;We encourage students to take ownership of their learning while developing the confidence to contribute positively to their communities.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply for Primary School
            </Button>
            <Button href="/academics/secondary" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Secondary School
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
