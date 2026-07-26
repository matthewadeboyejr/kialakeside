import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Curriculum Overview | KIA Lakeside Academy",
  description:
    "Discover the curriculum overview at KIA Lakeside Academy: purposeful, future-focused learning meeting Nigerian National Curriculum standards and international best practices.",
};

const activeLearningPillars = [
  {
    title: "Technology & Research",
    description: "Integrated digital tools, data research, and artificial intelligence awareness embedded into everyday study.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Project-Based Learning",
    description: "Hands-on projects where students investigate, question, analyse, and apply knowledge to real-world situations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L5.594 15.12a2 2 0 00-1.583.332A2 2 0 003 17.034V20a1 1 0 001 1h16a1 1 0 001-1v-2.966a2 2 0 00-.572-1.606z" />
      </svg>
    ),
  },
  {
    title: "Entrepreneurship & Leadership",
    description: "Developing initiative, leadership capabilities, financial literacy, and problem-solving mindsets.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Community Engagement",
    description: "Encouraging social responsibility, ethical citizenship, and active involvement in local and global initiatives.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

const academicStages = [
  {
    title: "Early Years",
    description: "Play-based and age-appropriate learning focusing on communication, social interaction, literacy, and numeracy.",
    href: "/academics/early-years",
  },
  {
    title: "Elementary",
    description: "Strong academic foundations in core subjects, critical thinking, science exploration, and digital literacy.",
    href: "/academics/elementary",
  },
  {
    title: "Secondary",
    description: "Subject specialization, IGCSE and national exam preparation, AI awareness, and career pathway exploration.",
    href: "/academics/secondary",
  },
];

export default function CurriculumPage() {
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
            <span className="text-white">Curriculum Overview</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Future-Focused Academic Strategy
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Curriculum Overview
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                At KIA Lakeside Academy, learning is purposeful, engaging, and future-focused. Our curriculum is carefully designed to provide every learner with a strong academic foundation while developing creativity, critical thinking, collaboration, communication, and character.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/academics/options-booklet" variant="secondary" size="lg">
                  Explore Options Booklet
                </Button>
                <Button href="/admissions/apply" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Apply to KIA Lakeside
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/computer-room.jpg"
                    alt="KIA Lakeside Academy Digital & Science Lab"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Innovative Teaching
                  </p>
                  <p className="text-xl font-bold font-display">
                    Technology & Real-World Application
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. BROAD & BALANCED NATIONAL / INTERNATIONAL STANDARDS
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              We deliver a broad and balanced curriculum that meets the requirements of the Nigerian National Curriculum while incorporating international best practices that prepare students to thrive in a rapidly changing global society.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#e2e0ee] shadow-sm space-y-6 text-[#1a1633] text-base md:text-lg leading-relaxed">
            <p>
              Our approach moves beyond memorisation. Students are encouraged to investigate, question, analyse, innovate, and apply their knowledge to real-world situations. Technology, research, project-based learning, entrepreneurship, leadership development, and community engagement are integrated into everyday learning experiences.
            </p>
            <p>
              As students progress through the school, increasing opportunities are provided for independent learning, innovation, digital literacy, artificial intelligence awareness, and career exploration, ensuring they graduate equipped for higher education and future careers.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. INTEGRATED LEARNING EXPERIENCE PILLARS
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Core Educational Framework"
            title="Integrated Everyday Learning Experiences"
            subtitle="We seamlessly integrate real-world applications into classroom study."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {activeLearningPillars.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#e2e0ee] hover:border-[#352679]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {item.title}
                  </h3>
                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. CURRICULAR PROGRESSION BY STAGES
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Academic Milestones"
            title="Progression Across School Stages"
            subtitle="Explore how our curriculum evolves as students grow."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {academicStages.map((stage, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <span className="text-2xl font-extrabold text-[#352679]/20 group-hover:text-[#FB8424]/40 font-display transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {stage.title}
                  </h3>
                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100 mt-6">
                  <Link
                    href={stage.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#352679] group-hover:text-[#FB8424] transition-colors"
                  >
                    View Stage Curriculum &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING LEARNER PROFILE STATEMENT & CTA
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Educational Outcome
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;At every stage, our curriculum seeks to develop learners who are academically accomplished, morally grounded, emotionally resilient, and globally minded.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply for Admission
            </Button>
            <Button href="/academics/key-dates" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Key Academic Dates
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
