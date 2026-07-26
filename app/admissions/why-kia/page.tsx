import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Why Choose KIA Lakeside | KIA Lakeside Academy",
  description:
    "Discover why families choose KIA Lakeside Academy: academic excellence, exceptional teachers, character & leadership development, technology integration, and holistic student outcomes.",
};

const pillars = [
  {
    num: "01",
    title: "Academic Excellence",
    text: "We deliver a broad and challenging curriculum designed to develop confident learners, critical thinkers, and independent problem-solvers. Our students are equipped with the knowledge and study skills required to excel in national and international examinations.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Exceptional Teachers",
    text: "Our dedicated teachers are passionate educators who inspire, motivate, and support every learner. Through continuous professional development, they employ innovative teaching strategies that make learning engaging, meaningful, and enjoyable.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Character and Leadership Development",
    text: "Academic achievement alone is not enough. We intentionally develop integrity, discipline, responsibility, resilience, empathy, and leadership, ensuring our students become positive contributors to their communities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Innovation and Technology",
    text: "Technology is integrated into teaching and learning to prepare students for the future. Digital literacy, creative thinking, artificial intelligence awareness, and responsible technology use form part of our educational approach.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Individual Attention",
    text: "Every child is unique. Our manageable class sizes allow teachers to understand each learner's strengths, identify areas for improvement, and provide personalised support that enables every student to flourish.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "A Safe and Caring Community",
    text: "Children learn best when they feel secure, respected, and valued. We provide a nurturing environment where every learner feels a strong sense of belonging and is encouraged to reach their full potential.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    num: "07",
    title: "Beyond the Classroom",
    text: "Education extends far beyond textbooks. Through sports, music, drama, clubs, debates, entrepreneurship, community service, leadership programmes, and educational excursions, students discover their talents and build confidence.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2v1a2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11.4" />
      </svg>
    ),
  },
  {
    num: "08",
    title: "Partnership with Parents",
    text: "We believe education is most successful when schools and families work together. Open communication, mutual trust, and active parental involvement create the strong partnerships that support every child's success.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

const familyReasons = [
  "Learn in a safe, caring, and values-driven environment.",
  "Receive high-quality education delivered by experienced and passionate educators.",
  "Develop strong academic foundations through engaging and innovative teaching methods.",
  "Build confidence, resilience, leadership, and excellent character.",
  "Benefit from technology-enhanced learning that prepares them for the future.",
  "Participate in sports, music, arts, clubs, and extracurricular activities that develop their talents.",
  "Cultivate critical thinking, creativity, collaboration, and communication skills.",
  "Experience personalised attention that allows every child to reach their full potential.",
  "Be prepared for success in national and international examinations.",
  "Grow into a responsible global citizen with integrity, compassion, and a commitment to excellence.",
];

const childWillList = [
  "Learn from passionate and experienced educators.",
  "Build confidence through personalised learning.",
  "Develop strong moral values and leadership qualities.",
  "Experience innovative, technology-enhanced learning.",
  "Discover and nurture individual talents.",
  "Become a creative thinker and effective communicator.",
  "Prepare for success in higher education and beyond.",
  "Grow into a responsible, compassionate, and globally minded citizen.",
];

export default function WhyKIA() {
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
            <span className="text-white">Why Choose KIA Lakeside</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Strategic Educational Investment
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Why Choose KIA Lakeside Academy?
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                Choosing a school is one of the most significant investments you will make in your child&apos;s future. At KIA Lakeside Academy, we understand that parents are looking for more than excellent examination results—they are seeking a school that will nurture confidence, character, leadership, creativity, and lifelong success.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/admissions/process" variant="secondary" size="lg">
                  Apply for Admission
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Book Campus Tour
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/conducive-learning-environment.jpg"
                    alt="KIA Lakeside Learning Environment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Value & Distinction
                  </p>
                  <p className="text-xl font-bold font-display">
                    Nurturing Excellence for Life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. OUR MISSION CARD
         ---------------------------------------------------- */}
      <section className="py-16 bg-[#f8f7ff]">
        <div className="container-site max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#352679] to-[#261c5a] text-white shadow-2xl border-2 border-[#FB8424]/30 text-center relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-[#FB8424] text-white flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-2 font-display">
              Our Mission
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-display leading-relaxed italic text-white">
              &ldquo;Our mission is to provide an outstanding educational experience that inspires every child to achieve academic excellence while developing the values and skills required to thrive in an increasingly interconnected world.&rdquo;
            </h2>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. WHAT MAKES KIA LAKESIDE ACADEMY DIFFERENT? (8 PILLARS)
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Key Differentiators"
            title="What Makes KIA Lakeside Academy Different?"
            subtitle="We deliver a standard of holistic education grounded in eight foundational pillars."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                      {pillar.icon}
                    </div>
                    <span className="text-2xl font-extrabold text-[#352679]/20 group-hover:text-[#FB8424]/40 font-display transition-colors">
                      {pillar.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1633] font-display leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {pillar.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. WHY FAMILIES CHOOSE KIA LAKESIDE ACADEMY (10 OUTCOMES)
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff] relative overflow-hidden">
        <div className="container-site">
          <SectionHeading
            eyebrow="Parent & Family Value"
            title="Why Families Choose KIA Lakeside Academy"
            subtitle="At KIA Lakeside Academy, your child will:"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
            {familyReasons.map((outcome, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-[#e2e0ee] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-purple-50 text-[#352679] group-hover:bg-[#FB8424] group-hover:text-white flex items-center justify-center font-bold text-sm transition-colors duration-300">
                  {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-[#1a1633] text-base md:text-lg font-medium leading-snug">
                    {outcome}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-amber-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. AT KIA LAKESIDE ACADEMY, YOUR CHILD WILL:
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Student Outcomes"
            title="At KIA Lakeside Academy, Your Child Will:"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {childWillList.map((item, idx) => (
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
      </section>

      {/* ----------------------------------------------------
          6. CLOSING STATEMENT & ADMISSIONS CTA
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white mb-8">
            &ldquo;At KIA Lakeside Academy, we do not simply prepare students for examinations—we prepare them for life.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button href="/admissions/process" variant="secondary" size="lg">
              Start Application Process
            </Button>
            <Button href="/admissions/fees" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Tuition & Fees
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
