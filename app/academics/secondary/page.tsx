import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Secondary School | KIA Lakeside Academy",
  description:
    "Discover the Secondary program at KIA Lakeside Academy for Years 7 to 12, preparing students for BECE, WAEC, NECO, and Cambridge IGCSE exams.",
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
          src="/science_lab_students.png"
          alt="KIA Lakeside Academy secondary science lab atmosphere"
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
                <span className="text-[#FB8424] font-semibold">Secondary School</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            High School Stages
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Secondary School
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: 2-COLUMN MAIN CONTENT (UNIQUE DESIGN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Secondary School curriculum detail">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
              {/* Secondary School Specific Boy Image with hover frame */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border border-[#e2e0ee]">
                  <Image
                    src="/secondary.jpg"
                    alt="Secondary School student writing at KIA Lakeside Academy"
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
                  className="flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 font-semibold text-primary/80 hover:text-primary hover:bg-primary/5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <div className="flex items-center gap-3">
                    {/* Book Icon */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                    </svg>
                    <span>Primary School</span>
                  </div>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>

                <Link
                  href="/academics/secondary"
                  className="flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 font-bold bg-primary text-white shadow-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <div className="flex items-center gap-3">
                    {/* Graduation Cap Icon */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    <span>Secondary School</span>
                  </div>
                  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </nav>
            </aside>

            {/* RIGHT COLUMN: MAIN WRITEUP */}
            <div className="lg:col-span-8 space-y-12 text-primary">

              {/* Core Values List */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#f8f7ff] border border-primary/5 rounded-2xl p-5 shadow-sm space-y-2">
                  <div className="text-secondary font-bold text-2xl font-mono">01</div>
                  <p className="text-xs sm:text-sm text-primary/85 leading-relaxed font-semibold">
                    We maintain a connected relationship to the values, the skills and philosophies set in the primary school, endeavouring to rise to higher advanced levels of attainment.
                  </p>
                </div>
                <div className="bg-[#f8f7ff] border border-primary/5 rounded-2xl p-5 shadow-sm space-y-2">
                  <div className="text-secondary font-bold text-2xl font-mono">02</div>
                  <p className="text-xs sm:text-sm text-primary/85 leading-relaxed font-semibold">
                    The School offers comprehensive and qualitative education.
                  </p>
                </div>
                <div className="bg-[#f8f7ff] border border-primary/5 rounded-2xl p-5 shadow-sm space-y-2">
                  <div className="text-secondary font-bold text-2xl font-mono">03</div>
                  <p className="text-xs sm:text-sm text-primary/85 leading-relaxed font-semibold">
                    The academic curriculum is based on the Nigeria curriculum and education system which operates concurrently with the English National curriculum.
                  </p>
                </div>
              </div>

              {/* Subject Offerings */}
              <div className="space-y-6 border-t border-border pt-10">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    Subject Directory
                  </h2>
                  <p className="text-sm text-primary/70">
                    Presently the subjects we offer include: –
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Languages */}
                  <div className="bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Languages</span>
                      <p className="text-sm text-primary/95 leading-relaxed font-semibold">
                        English Language, Literature in English, French, Yoruba, Igbo, Hausa.
                      </p>
                    </div>
                  </div>

                  {/* Mathematics */}
                  <div className="bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Mathematics</span>
                      <p className="text-sm text-primary/95 leading-relaxed font-semibold">
                        Mathematics, Further / Additional Mathematics
                      </p>
                    </div>
                  </div>

                  {/* Science & Tech */}
                  <div className="bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Science & Technology</span>
                      <p className="text-sm text-primary/95 leading-relaxed font-semibold">
                        Physics, Chemistry, Biology, Agricultural Science, ICT,
                      </p>
                    </div>
                  </div>

                  {/* Vocational */}
                  <div className="bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Vocational</span>
                      <p className="text-sm text-primary/95 leading-relaxed font-semibold">
                        Marketing
                      </p>
                    </div>
                  </div>

                  {/* Social Studies */}
                  <div className="bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Social Studies & Humanities</span>
                      <p className="text-sm text-primary/95 leading-relaxed font-semibold">
                        Civics, History, Geography, Government, Christian Religious Knowledge, Islamic Religious Studies
                      </p>
                    </div>
                  </div>

                  {/* Commercial */}
                  <div className="bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Commercial</span>
                      <p className="text-sm text-primary/95 leading-relaxed font-semibold">
                        Economics, Business Studies
                      </p>
                    </div>
                  </div>

                  {/* Creative Arts */}
                  <div className="bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Creative and performing Arts</span>
                      <p className="text-sm text-primary/95 leading-relaxed font-semibold">
                        Fine Art, Music
                      </p>
                    </div>
                  </div>

                  {/* Basic Tech */}
                  <div className="bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1 block">Basic Technology</span>
                      <p className="text-sm text-primary/95 leading-relaxed font-semibold">
                        Physical Education, Technical Drawing, Home Economics.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Extramural activities */}
              <div className="flex gap-4 bg-secondary/5 border-l-4 border-secondary p-5 sm:p-6 rounded-r-2xl">
                <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-sm sm:text-base text-primary/90 leading-relaxed font-medium">
                  The KIA Lakeside Academy curriculum offers a wide range of extramural activities which include sport, intellectual and cultural activities. The aim of our extra mural program is to compliment student&apos;s academic performance- an extension of the classroom.
                </p>
              </div>

              {/* Broader curriculum */}
              <div className="space-y-6 border-t border-border pt-10">
                <div>
                  <h2 className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
                    Broader Curriculum
                  </h2>
                  <p className="text-sm text-primary/70">
                    The broader curriculum is aimed at:
                  </p>
                </div>

                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-primary/80">
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Developing the subject knowledge, skills and understanding needed to become aware of the world at large.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Developing an international mindset alongside awareness of own nationality.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Developing the ability to think and behave independently.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Emphasising learning and ensuring each student discovers their own learning style.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Developing the habits of an energetic, wholesome and productive life.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Developing the mastery of the skills of communication and learning.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Developing interests, skills and attitudes for the worthy use of leisure time.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Developing leadership qualities and skills.</span>
                  </li>
                  <li className="flex items-start gap-2.5 bg-[#f8f7ff] border border-primary/5 rounded-xl p-3.5 shadow-sm md:col-span-2">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Developing moral values and individual spiritual character.</span>
                  </li>
                </ul>
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
