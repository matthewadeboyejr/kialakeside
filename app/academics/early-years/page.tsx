import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Early Years | KIA Lakeside Academy",
  description:
    "Explore our Early Years Foundation Stage (EYFS) program for children aged 1.5 to 5, featuring interactive, play-based learning.",
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
          alt="KIA Lakeside Academy early years atmosphere"
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
                <span className="text-[#FB8424] font-semibold">Early Years</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Nursery Development
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Early Years
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: 2-COLUMN MAIN CONTENT (UNIQUE DESIGN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Early Years curriculum detail">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* LEFT COLUMN: SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
              {/* Early Years Specific Child Image with decorative corner border */}
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 blur-sm" />
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md border border-[#e2e0ee]">
                  <Image
                    src="/early-years.jpg"
                    alt="Early Years Child playing with Legos at KIA Lakeside Academy"
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
                  className="flex items-center justify-between p-3.5 rounded-xl transition-all duration-300 font-bold bg-primary text-white shadow-sm"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <div className="flex items-center gap-3">
                    {/* Baby Smile Icon */}
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Early Years</span>
                  </div>
                  <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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

              {/* Units & Placement Test */}
              <div className="space-y-6">
                <div className="bg-[#f8f7ff] border border-primary/10 rounded-3xl p-6 sm:p-8 space-y-5">
                  <h3 className="text-xl font-bold text-primary flex items-center gap-2" style={{ fontFamily: "var(--font-display)" }}>
                    <span className="w-1.5 h-6 rounded-full bg-secondary block" />
                    Our early years comprises of four units:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-bold text-sm text-primary">Crèche</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
                        </svg>
                      </div>
                      <span className="font-bold text-sm text-primary">Preschool, Foundation Stage 2 Class</span>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-primary/5 shadow-sm flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-lg bg-primary/5 text-primary flex items-center justify-center mb-3">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <span className="font-bold text-sm text-primary text-balance">Nursery One & Two (Reception)</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 bg-secondary/5 border-l-4 border-secondary p-5 rounded-r-2xl">
                  <svg className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-primary/85 leading-relaxed font-medium">
                    In addition to the required age for admission, children are admitted into classes appropriately based upon a placement test.
                  </p>
                </div>
              </div>

              {/* Curriculum Blend */}
              <div className="space-y-5 text-primary/80 leading-relaxed text-sm sm:text-base border-t border-border pt-10">
                <p>
                  At KIALA, we deploy a blend of the Nigerian Curriculum and various international curriculums. The blend guides the learning and student initiated play and engagement. Children play spontaneously environment in our classes. Our EYFS curriculum makes provisions for an &ldquo;enabling environment, active learning and learning through experiences&rdquo;.
                </p>
                <p>
                  We use a variety of constructive play based and structured activities to achieve a balance between teacher- led and student initiated play and engagement. Children play spontaneously and it is through play they develop emotionally, physically, creatively, socially and intellectually. &ldquo;Play is the work of a child&rdquo;.
                </p>
              </div>

              {/* 3 Prime Areas */}
              <div className="space-y-6 border-t border-border pt-10">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    Three Prime Areas
                  </h2>
                  <p className="text-sm text-primary/70">
                    There are 3 prime areas in the EYFS curriculum which are crucial for arousing the children&apos;s curiosity and enthusiasm for learning. They are comprised of...
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {/* Card 1 */}
                  <div className="relative group bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                        {/* Conversation Bubble */}
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-primary mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                          Communication and Language Development
                        </h3>
                        <p className="text-sm text-primary/75 leading-relaxed">
                          This involves giving the children the opportunities to experience a rich language environment to help develop their confidence, skills in expressing themselves, to speak and listen in a range of situations.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="relative group bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                        {/* Coordination/Activity Icon */}
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-primary mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                          Physical Development
                        </h3>
                        <p className="text-sm text-primary/75 leading-relaxed">
                          It involves creating opportunities for young children to be active and interactive, develop their coordination, control and movement. Children must also be helped to understand the importance of physical activities and make healthy food choices.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="relative group bg-white border border-[#e2e0ee] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                        {/* Smile/Community Icon */}
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-primary mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
                          Personal, Social and Emotional Development
                        </h3>
                        <p className="text-sm text-primary/75 leading-relaxed">
                          This involves helping the children develop a positive sense of themselves and others, to form positive relationships, develop respect for others, develop social skills, learn how to manage feelings and understand appropriate behaviour in groups.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specific Areas */}
              <div className="space-y-6 border-t border-border pt-10">
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    Four Specific Areas
                  </h2>
                  <p className="text-sm text-primary/70">
                    There are four specific (subject) areas through which the three prime domains are boosted and consolidated and applied. They include...
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Literacy */}
                  <div className="bg-[#f8f7ff] border border-primary/5 rounded-2xl p-6 transition-all duration-300 hover:shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1.5 block">Literacy</span>
                    <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      Literacy
                    </h3>
                    <p className="text-sm text-primary/75 leading-relaxed">
                      Developing children&apos;s skills to link sounds and letters and to begin to read and write. They are given access to a wide range of reading and writing materials to boost their interest. Emphases is placed on inculcating comprehension skills.
                    </p>
                  </div>

                  {/* Numeracy */}
                  <div className="bg-[#f8f7ff] border border-primary/5 rounded-2xl p-6 transition-all duration-300 hover:shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1.5 block">Numeracy</span>
                    <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      Numeracy
                    </h3>
                    <p className="text-sm text-primary/75 leading-relaxed">
                      Providing children with opportunities to develop and improve their skills in counting,understanding and using numbers, calculating simple addition and subtraction problems, describe shapes, spaces and measurements.
                    </p>
                  </div>

                  {/* Understanding the World */}
                  <div className="bg-[#f8f7ff] border border-primary/5 rounded-2xl p-6 transition-all duration-300 hover:shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1.5 block">Exploration</span>
                    <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      Understanding the World
                    </h3>
                    <p className="text-sm text-primary/75 leading-relaxed">
                      Guiding children to make sense of their physical world and community through opportunities to explore,observe and find out about people, places, technology and the environment.
                    </p>
                  </div>

                  {/* Expressive Arts */}
                  <div className="bg-[#f8f7ff] border border-primary/5 rounded-2xl p-6 transition-all duration-300 hover:shadow-sm">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondary mb-1.5 block">Creativity</span>
                    <h3 className="text-lg font-bold text-primary mb-2" style={{ fontFamily: "var(--font-display)" }}>
                      Expressive Arts and Design
                    </h3>
                    <p className="text-sm text-primary/75 leading-relaxed">
                      Involves exposing the children to explore and play with a wide range of educational resources and media. Children are given opportunities to share their thoughts, ideas and feelings through a variety of activities; art,music, dance, roleplay, design and technology.
                    </p>
                  </div>
                </div>
              </div>

              {/* Continuous Assessment */}
              <div className="relative overflow-hidden bg-gradient-to-br from-primary to-[#4a38a0] text-white rounded-3xl p-6 sm:p-8 shadow-md">
                <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
                <div className="relative z-10 space-y-3">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424] text-white">
                    Quality Assurance
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold" style={{ fontFamily: "var(--font-display)" }}>
                    Continous Assessment
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Continous Assessment through observation as well as formal testing is an integral part of the learning and development process at KIALA. We make it our priority to understand each child&apos;s level of achievement, interest and learning style and to shape the learning performance of each child.
                  </p>
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
