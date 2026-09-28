import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admissions | KIA Lakeside Academy",
  description:
    "Explore the admissions process, tuition structure, entrance exam requirements, and scholarships at KIA Lakeside Academy.",
};

const admissionsSections = [
  {
    title: "Why Choose KIA Lakeside",
    description: "Discover our unique learning experience, academic standard models, and how we nurture future leaders.",
    href: "/admissions/why-kia",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Apply to KIA Lakeside",
    description: "Begin your child's enrollment journey today with our online application guidelines and document checklists.",
    href: "/admissions/apply",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
  },
  {
    title: "Admission Process",
    description: "A step-by-step roadmap to guide you from your initial inquiry through registration to the final admission offer.",
    href: "/admissions/process",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    ),
  },
  {
    title: "Entrance Exam",
    description: "Details regarding examination dates, subject requirements (English & Math), and student assessment prep advice.",
    href: "/admissions/entrance-exam",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Scholarships",
    description: "Explore scholarship pathways available for students excelling in academics, athletic games, or creative arts.",
    href: "/admissions/scholarship",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v5m-3 0h6m-6-14h6a3 3 0 013 3v3a6 6 0 01-12 0V9a3 3 0 013-3z" />
      </svg>
    ),
  },
  {
    title: "Tuition & Fees",
    description: "View our tuition structure, application fees, payment schedules, and bank transfer credentials.",
    href: "/admissions/fees",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
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
        {/* Background Image: Campus lawn */}
        <Image
          src="/hero1.jpg"
          alt="KIA Lakeside Academy campus lawn"
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
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-white/60">Admissions</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Join Us
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Admissions
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: WELCOME OVERVIEW
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Overview details">
        <div className="container-site">
          <div className="max-w-4xl mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Welcome to KIA Lakeside
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
              Shaping Future Leaders
            </h2>
            <div className="text-sm sm:text-base text-primary/80 leading-relaxed space-y-4">
              <p>
                Thank you for considering KIA Lakeside Academy as the foundation for your child’s educational journey. We recognise that choosing a school is an important decision, and we are committed to providing an exceptional educational experience in an environment where every child is encouraged to discover their strengths, pursue excellence, and develop with confidence.
              </p>
              <p>
                At KIA Lakeside Academy, we combine academic rigour with a strong focus on character, creativity, leadership, and personal development. Our nurturing and stimulating environment enable students to flourish intellectually, socially, emotionally, and physically, while developing the knowledge, skills, values, and global perspective required to succeed in a rapidly changing world.
              </p>
              <p>
                We invite you to explore our admissions information to learn more about our application process, fee structure, entrance assessment requirements, and scholarship opportunities. Our Admissions Team is available to provide personalised guidance, answer your questions, and support your family throughout every stage of the admissions journey.
              </p>
              <p className="font-semibold text-primary">
                We look forward to welcoming your family to KIA Lakeside Academy.
              </p>
            </div>
          </div>

          {/* 6-Card Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {admissionsSections.map((sec) => (
              <Link
                key={sec.title}
                href={sec.href}
                className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {sec.icon}
                  </div>

                  <h3
                    className="text-base sm:text-lg font-bold text-primary mb-3"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {sec.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-primary/60 leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-secondary group-hover:text-secondary/80">
                  Explore &rarr;
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
