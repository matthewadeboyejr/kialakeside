import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Enrichment Programs | KIA Lakeside Academy",
  description:
    "Explore our school enrichment programs: sports development, extramural clubs, creative arts, and our elite Football Academy.",
};

const enrichmentSections = [
  {
    title: "Sports & Athletics",
    description: "Nurturing fitness and teamwork through swim meets, track sprints, basketball leagues, and table tennis drills.",
    href: "/enrichment/sports",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Electives / Extramural",
    description: "Explore choir concerts, spelling bees, debate training, clay arts, Python/Scratch coding, and community service tracks.",
    href: "/enrichment/electives",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Football Academy",
    description: "Elite coached soccer program with age-group divisions (Ages 5-17), tactical position drills, and tournament matches.",
    href: "/enrichment/football-academy",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
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
        {/* Background Image: Sports/Children playing */}
        <Image
          src="/new-sporting-facilities.jpg"
          alt="KIA Lakeside Academy student sports running fields"
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
                <span className="text-white/60 font-semibold">Enrichment</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Life Beyond the Classroom
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Enrichment Programs
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: ENRICHMENT PHILOSOPHY
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Enrichment Philosophy">
        <div className="container-site">
          <div className="max-w-3xl mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Balanced Growth
            </span>
            <h2 className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
              Exploring Potentials Beyond the Classroom
            </h2>
            <div className="text-sm sm:text-base text-primary/80 leading-relaxed space-y-4">
              <p>
                At KIA Lakeside Academy, learning doesn't end with textbook topics. Our Enrichment Programs inspire students to cultivate personal interests, physical health, teamwork, and creative expression through standard athletics tracks, music coaching, visual crafts, and our professional Football Academy.
              </p>
              <p>
                Explore our enrichment areas below to learn about sports activities, extramural clubs, and specialized football programs that help build character and physical coordination.
              </p>
            </div>
          </div>

          {/* 3-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {enrichmentSections.map((sec) => (
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
