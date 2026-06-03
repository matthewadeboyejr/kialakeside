import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Pastoral Care | KIA Lakeside Academy",
  description:
    "Explore the pastoral structure, student life, counselling support, student leadership councils, and merit behavior reward system at KIA Lakeside Academy.",
};

const pastoralSections = [
  {
    title: "Student Life",
    description: "Learn about school routines, assemblies, House Systems (Red, Blue, Green, Yellow), and our rich extracurricular club landscape.",
    href: "/pastoral/student-life",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "School Counselling",
    description: "We provide empathetic academic guidance, social-emotional guidance, and career planning within a confidential safe space.",
    href: "/pastoral/counselling",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Student Leadership",
    description: "Explore opportunities for student service and responsibility through Prefect Councils, SRC, and Class Captain roles.",
    href: "/pastoral/student-leadership",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
  },
  {
    title: "Merit & Award System",
    description: "Encouraging positive behavior, community support, and core values through digital merits, termly cups, and honor rolls.",
    href: "/pastoral/merit-award",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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
        {/* Background Image: Mentorship context */}
        <Image
          src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy student pastoral counseling environment"
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
                <span className="text-white/60 font-semibold">Pastoral</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Student Wellbeing
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Pastoral Care
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: PHILOSOPHY
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Pastoral Philosophy">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Holistic Support
            </span>
            <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
              Nurturing Mind, Character, and Community
            </h2>
            <div className="text-sm sm:text-base text-primary/80 leading-relaxed space-y-4">
              <p>
                At KIA Lakeside Academy, education is more than academic performance. We are dedicated to providing a safe, positive, and structured environment where students grow into self-disciplined, moral, and emotionally mature leaders. Our pastoral system centers on individual care, mental wellbeing, academic mentorship, and active social-emotional guidance.
              </p>
              <p>
                Explore our pastoral areas below to learn about the structured support networks, counseling services, student councils, and behavior-motivation models that enrich student life on our Abuja campus daily.
              </p>
            </div>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
            {pastoralSections.map((sec) => (
              <Link 
                key={sec.title}
                href={sec.href}
                className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-primary/20 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {sec.icon}
                  </div>

                  <h3 
                    className="text-lg font-bold text-primary mb-3"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {sec.title}
                  </h3>

                  <p className="text-sm text-primary/60 leading-relaxed">
                    {sec.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-1 text-xs font-bold text-secondary group-hover:text-secondary/80">
                  Explore Section &rarr;
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
