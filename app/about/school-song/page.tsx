import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "School Song & Prayer | KIA Lakeside Academy",
  description:
    "Discover the School Song and School Prayer of KIA Lakeside Academy, representing our unity, community spirit, and shared values.",
};

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Assembly/learning context */}
        <Image
          src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1600&auto=format&fit=crop"
          alt="School students in an assembly hall"
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
                <span className="text-white/60">About Us</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Song &amp; Prayer</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Our Heritage
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            School Song &amp; Prayer
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: LYRICS & PRAYER CARDS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Song and prayer lyrics">
        <div className="container-site max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Column 1: School Song Card */}
            <div className="bg-gradient-to-br from-[#FB8424]/5 to-transparent border border-[#FB8424]/10 rounded-3xl p-8 sm:p-12 hover:shadow-lg transition-all duration-300">
              {/* Music Note Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#FB8424]/10 flex items-center justify-center text-[#FB8424] mb-8">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 10l12-3M9 21a3 3 0 11-6 0 3 3 0 016 0zm12-3a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-bold text-[#352679] mb-8"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                School Song
              </h2>

              <div
                className="text-[#64607a] text-base sm:text-lg leading-relaxed flex flex-col gap-6 italic tracking-wide font-medium"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <p className="not-italic text-[#352679] font-bold text-sm tracking-widest uppercase">We Hail</p>

                <p>
                  We Hail, hail, hail,<br />
                  We hail KIA Lakeside as the best.<br />
                  KIA Lakeside is the star,<br />
                  The Brightest of them all.
                </p>

                <p>
                  The school began in 2010,<br />
                  Everyone is working hard to make everything great.<br />
                  Parents, Teachers and Children are working very hard.
                </p>

                <p>
                  We hail, we hail, hail, hail.
                </p>
              </div>
            </div>

            {/* Column 2: School Prayer Card */}
            <div className="bg-gradient-to-br from-[#352679]/5 to-transparent border border-[#352679]/10 rounded-3xl p-8 sm:p-12 hover:shadow-lg transition-all duration-300">
              {/* Hands/Prayer Icon */}
              <div className="w-12 h-12 rounded-2xl bg-[#352679]/10 flex items-center justify-center text-[#352679] mb-8">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {/* Hands folded / prayer silhouette path */}
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>

              <h2
                className="text-2xl sm:text-3xl font-bold text-[#352679] mb-8"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                School Prayer
              </h2>

              <div
                className="text-[#64607a] text-base sm:text-lg leading-relaxed flex flex-col gap-6 italic tracking-wide font-medium"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                <p className="not-italic text-[#352679] font-bold text-sm tracking-widest uppercase">Oh God of Creation</p>

                <p>
                  At the start of this new day,<br />
                  be my guide and my helper,<br />
                  In my work and my play.
                </p>

                <p>
                  Bless and strengthen my parents,<br />
                  teachers and school mates.
                </p>

                <p className="not-italic text-[#FB8424] font-bold">
                  Amen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
