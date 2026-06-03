import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Electives & Extramural Clubs | KIA Lakeside Academy",
  description:
    "Explore our extramural activities, debate clubs, coding workshops, visual arts, music school, and community projects.",
};

const electiveCategories = [
  {
    categoryName: "Creative & Performing Arts",
    description: "Supports creative expression, visual design, and musical pitch control through structured hands-on sessions.",
    clubs: ["Music School (Violin, Piano, Recorder)", "School Choir", "Fine Arts & Clay Modeling", "Drama & Performing Arts"],
  },
  {
    categoryName: "Academic & Logical Clubs",
    description: "Develops critical thinking, logical arguments, public speaking, and computer coding skills.",
    clubs: ["Spelling Bee Club", "Young Debaters Society", "STEM Coding (Scratch & Python)", "Young Scientists & Inventors"],
  },
  {
    categoryName: "Community & Eco Projects",
    description: "Focuses on environmental sustainability, organic gardening, and local charity outreaches.",
    clubs: ["Young Farmers Club", "Eco & Environment Monitors", "Charity Volunteer Corps"],
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Creative arts */}
        <Image
          src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy creative arts studio"
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
                <span className="text-[#FB8424] font-semibold">Electives / Extramural</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Student Clubs
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Electives & Extramural
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CLUB CATEGORIES
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Clubs list">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Club Catalog
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Explore Our Extramural Clubs
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We offer diverse clubs to match student interests in arts, debate, science, coding, and environmental care.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {electiveCategories.map((cat) => (
              <div 
                key={cat.categoryName} 
                className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-6 sm:p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    {cat.categoryName}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-primary/45">Clubs & Activities</h4>
                    <ul className="space-y-2">
                      {cat.clubs.map((club) => (
                        <li key={club} className="flex items-start gap-2 text-xs text-primary/75">
                          <span className="text-secondary font-bold font-mono mt-0.5">•</span>
                          <span>{club}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-primary/5 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Club Category
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: REGISTRATION DETAILS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Registration schedule">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-white border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm">
            <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Registration & Timing Details
            </h3>
            <p className="text-sm text-primary/70 leading-relaxed mb-6">
              Extramural clubs are scheduled on <strong>Tuesdays and Thursdays</strong> from <strong>2:30 PM to 3:30 PM</strong>. Every student is expected to enroll in at least one club per term. Clubs rotate at the beginning of each academic term, allowing students to explore various disciplines.
            </p>
            <div className="bg-[#fcfbfe] border border-primary/5 p-4 rounded-xl text-xs text-primary/60">
              📢 <strong>Parent Note:</strong> Material fees for specialized clubs (such as music school rentals or arts canvases) are billed separately. Please contact the admissions desk to confirm registration details.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
