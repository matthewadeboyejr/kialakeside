import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sports & Athletics | KIA Lakeside Academy",
  description:
    "Explore sports and physical activities at KIA Lakeside Academy, including track & field, swimming, basketball, and table tennis.",
};

const sportsList = [
  {
    title: "Track & Field",
    description: "Coaches guide sprint events, relays, long jump, and high jump term-over-term, building speed and stamina.",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Swimming & Aquatics",
    description: "Weekly coached lessons in our customized swimming pool. Focuses on swimming strokes, water survival, and safety.",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9" />
      </svg>
    ),
  },
  {
    title: "Team Sports & Courts",
    description: "Regular physical education covers basketball positioning, volleyball passing, and soccer team matches.",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Indoor Strategy Games",
    description: "Chess, table tennis, and logical board games played weekly to strengthen logical foresight and reflex control.",
    image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?q=80&w=800&auto=format&fit=crop",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
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
        {/* Background Image: Sports track */}
        <Image
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy sports track field"
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
              <li>
                <Link href="/enrichment" className="text-white/60 hover:text-white transition-colors">
                  Enrichment
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Sports & Athletics</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Physical Fitness
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Sports & Athletics
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: SPORTS DISCIPLINES
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Sports list">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Disciplines
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Our Athletic Programs
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We design structured physical routines to improve student health, muscle coordination, team strategy, and personal speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sportsList.map((sport) => (
              <div 
                key={sport.title}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative w-full h-52 overflow-hidden">
                    <Image
                      src={sport.image}
                      alt={sport.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 z-10" />
                    
                    {/* Icon Indicator floating on the image */}
                    <div className="absolute bottom-4 right-4 z-20 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm text-primary flex items-center justify-center shadow-md border border-white/20">
                      {sport.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                      {sport.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                      {sport.description}
                    </p>
                  </div>
                </div>

                <div className="px-8 pb-6 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Athletic Activity
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SPORTSMANSHIP & FACILITIES (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Facilities and values">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Sportsmanship */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Core Sportsmanship Morals
              </h2>
              
              <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-sm border border-primary/5">
                <Image
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop"
                  alt="Sportsmanship and teamwork"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Winning is secondary; character is primary. Through sports, we teach vital values that support student relationships and growth:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    🤝 Respecting the Opponent
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Students learn to shake hands before and after matches, respect referee decisions, and speak encouragingly to competitors.
                  </p>
                </div>
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    🛡️ Resilience & Discipline
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Overcoming setbacks, practicing drills term-over-term, and arriving on time build self-discipline and perseverance.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Physical Facilities */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                Our Sports Facilities
              </h2>

              <div className="relative w-full h-48 rounded-2xl overflow-hidden shadow-sm border border-primary/5">
                <Image
                  src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=800&auto=format&fit=crop"
                  alt="KIA Lakeside Swimming Pool"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                We support athletic growth with specialized, secured infrastructure on campus:
              </p>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <ul className="space-y-4 text-sm text-primary/75">
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Swimming Pool:</strong> A clean, secured pool staffed by certified lifeguards for swimming coach sessions.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Basketball Court:</strong> Standard hard-court layout supporting team basketball practice and shootouts.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Monitored Playgrounds:</strong> Safe, grassy open areas for sprints, track relays, and junior soccer drills.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
