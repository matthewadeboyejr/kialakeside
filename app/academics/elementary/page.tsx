import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Primary School | KIA Lakeside Academy",
  description:
    "Explore our Elementary (Primary) program for Years 1 to 6, emphasizing core arithmetic logic, languages, experimental science, and basic coding.",
};

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER (CONSISTENT WITH OTHER PAGES)
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/students_hallway.png"
          alt="KIA Lakeside Academy elementary school atmosphere"
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
                <Link href="/academics" className="text-white/60 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Primary School</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Primary Education
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Primary School
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: 2-COLUMN MAIN CONTENT (UNIQUE DESIGN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Primary School curriculum detail">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
              {/* Primary School Specific Girl Image with hover gradient frame */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border border-[#e2e0ee]">
                  <Image
                    src="/primary.jpg"
                    alt="Primary School girl writing at KIA Lakeside Academy"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
              </div>

              {/* Navigation Widget */}
              <nav className="bg-[#f8f7ff] border border-[#e2e0ee] rounded-2xl p-4 space-y-2 shadow-sm" aria-label="Academics sidebar navigation">
                <Link
                  href="/academics/early-years"
                  className="flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 font-semibold text-primary/80 hover:text-primary hover:bg-primary/5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <div className="flex items-center gap-3">
                    {/* Baby Smile Icon */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Early Years</span>
                  </div>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/academics/elementary"
                  className="flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 font-bold bg-primary text-white shadow-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <div className="flex items-center gap-3">
                    {/* Book Icon */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                    </svg>
                    <span>Primary School</span>
                  </div>
                  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/academics/secondary"
                  className="flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 font-semibold text-primary/80 hover:text-primary hover:bg-primary/5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <div className="flex items-center gap-3">
                    {/* Graduation Cap Icon */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <span>Secondary School</span>
                  </div>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </nav>
            </aside>

            {/* RIGHT COLUMN: MAIN WRITEUP */}
            <div className="lg:col-span-8 space-y-12 text-primary">

              {/* Preamble Callout Block */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary to-[#4a38a0] text-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-white/5 rounded-tl-full pointer-events-none" />
                <div className="space-y-4 relative z-10">
                  <p className="text-base sm:text-lg font-bold leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                    We operate a blended curriculum made up of the of the Nigerian curriculum incorporating aspects of the British National Curriculum in the primary section of the school
                  </p>
                  <p className="text-sm text-white/80 leading-relaxed">
                    In the primary school the academic curriculum includes Literacy, Numeracy, Science, ICT, French, National Values ( Social studies/ History/Geography), Art, Music and Religious Studies. Guidance and Counselling.
                  </p>
                  <div className="flex items-center gap-2 text-xs font-bold text-secondary tracking-wider uppercase bg-white/10 px-3.5 py-1.5 rounded-full w-max">
                    🚀 Our curriculum is aimed at:
                  </div>
                </div>
              </div>

              {/* Unique 2x2 Grid of Developmental areas */}
              <div className="space-y-8 border-t border-border pt-10">
                <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-outfit)" }}>
                  Academic Developmental Pillars
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Intellectual Development */}
                  <div className="bg-[#f8f7ff] border border-l-4 border-l-[#FB8424] border-primary/5 rounded-r-2xl rounded-l-md p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                        INTELLECTUAL DEVELOPMENT
                      </h3>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-primary/75">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Speaking clearly and choosing words carefully</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Conversing audibly and confidently.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Reading and comprehension skills</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Developing innovative thinking skills.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Developing learners who are confident, accountable and committed.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Engaging learners creatively in their learning experience.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Developing critical and analytical</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Sharpening techniques and skills in solving mathematical problems.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Social and Emotional Development */}
                  <div className="bg-[#f8f7ff] border border-l-4 border-l-primary border-primary/5 rounded-r-2xl rounded-l-md p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                        SOCIAL & EMOTIONAL
                      </h3>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-primary/75">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Showing empathy and tolerance for others and their differences.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Displaying a positive attitude at all times.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Teaching respect and integrity.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Exercising self-control and discipline.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Expressing emotions appropriately.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Physical Development */}
                  <div className="bg-[#f8f7ff] border border-l-4 border-l-primary border-primary/5 rounded-r-2xl rounded-l-md p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                        PHYSICAL DEVELOPMENT
                      </h3>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-primary/75">
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Acquire and develop new skills, in a wide range of physical activities while honing inherent skills;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Set targets for themselves and compete against others, individually and as team;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Develop the perseverance to succeed, while acknowledging the success of others;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>Respond to a variety of challenges in a wide range of physical activities and settings</span>
                      </li>
                    </ul>
                  </div>

                  {/* Spiritual Development */}
                  <div className="bg-[#f8f7ff] border border-l-4 border-l-[#FB8424] border-primary/5 rounded-r-2xl rounded-l-md p-6 space-y-4 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <h3 className="text-base font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                        SPIRITUAL DEVELOPMENT
                      </h3>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-primary/75">
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Uphold universal moral values</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Giving sound moral instruction .</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Providing an appropriate environment to enable every child develop spiritually.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-secondary font-bold mt-0.5">•</span>
                        <span>Develop empathy and compassion and love for others.</span>
                      </li>
                    </ul>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: PHILOSOPHY QUOTE
      ═══════════════════════════════════════════ */}
      <section className="py-16 bg-[#F4F3F8] border-t border-primary/5">
        <div className="container-site max-w-4xl text-center">
          <p
            className="text-lg sm:text-xl md:text-2xl italic font-medium text-primary leading-relaxed"
            style={{ fontFamily: "var(--font-display)" }}
          >
            &ldquo;It is our conclusive philosophy to keep challenging students to rise to a higher level of performance in every area of their school and personal life by continuously raising the benchmark for achievement.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
