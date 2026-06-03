import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Mission & Vision | KIA Lakeside Academy",
  description:
    "Explore the core mission, vision, and KIALA disposition philosophy that guide our holistic approach to education at KIA Lakeside Academy.",
};

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[45vh] min-h-[350px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Energetic active sports theme matching the 1st image */}
        <Image
          src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1600&auto=format&fit=crop"
          alt="Students running on sports track"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Transparent gradient overlay (so the bright field is visible, not heavily darkened) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent z-10" />

        <div className="container-site relative z-20 text-white w-full">
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Who We Are
          </span>
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Our Vision &amp; Mission
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: VISION & MISSION STATEMENTS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Core statement details">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Simple Owl Line-Art Icon (directly on white bg, no background box) */}
            <div className="lg:col-span-2 flex justify-start pt-1">
              <svg className="w-16 h-16 text-[#352679]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                {/* Left eye */}
                <circle cx="8" cy="11" r="3.5" />
                <circle cx="8" cy="11" r="1.2" fill="currentColor" />
                {/* Right eye */}
                <circle cx="16" cy="11" r="3.5" />
                <circle cx="16" cy="11" r="1.2" fill="currentColor" />
                {/* Beak */}
                <path d="M12 12.5l-1 2h2z" fill="currentColor" />
                {/* Head contour */}
                <path d="M12 4.5c-4 0-7.5 3-7.5 8s2.5 8 7.5 8 7.5-3 7.5-8-3.5-8-7.5-8z" strokeLinecap="round" />
                {/* Ears */}
                <path d="M5.5 6.5L3.5 4m15 2.5L20.5 4" strokeLinecap="round" />
                {/* Eyebrows */}
                <path d="M4.5 8.5c1.5-1 3.5-1 5 0m5 0c1.5-1 3.5-1 5 0" strokeLinecap="round" />
              </svg>
            </div>

            {/* Middle: Vision and Mission text blocks */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Vision Card */}
              <div>
                <h2
                  className="text-2xl font-bold text-[#352679] mb-4 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-outfit)", color: "#FB8424" }}
                >
                  Vision
                </h2>
                <p className="text-base sm:text-lg text-[#64607a] leading-relaxed">
                  To build excellent minds today, for tomorrow.
                </p>
              </div>

              {/* Mission Card */}
              <div>
                <h2
                  className="text-2xl font-bold text-[#352679] mb-4 uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-outfit)", color: "#FB8424" }}
                >
                  Mission
                </h2>
                <p className="text-sm sm:text-base text-[#64607a] leading-relaxed">
                  To combine cutting-edge teaching strategies with dynamic subject matter to provide an educational foundation that endows learners with the skills and knowledge necessary to excel at both national and international level.
                </p>
              </div>

            </div>

            {/* Right: Circular PDF icon (thin red border, simple PDF text inside) */}
            <div className="lg:col-span-1 flex justify-start lg:justify-end pt-1">
              <a
                href="/admissions/why-kia"
                className="w-12 h-12 rounded-full border border-red-200 bg-red-50/50 flex flex-col items-center justify-center text-red-500 hover:bg-red-50 hover:border-red-300 transition-all duration-200"
                title="Download Prospectus"
              >
                <svg className="w-5 h-5 mb-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3" />
                </svg>
                <span className="text-[8px] font-bold tracking-wider text-red-500 uppercase">PDF</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: GUIDING PRINCIPLES (KIALA Disposition)
      ═══════════════════════════════════════════ */}
      <section className="py-20 text-white" style={{ background: "#352679" }} aria-label="Disposition philosophy">
        <div className="container-site">
          
          {/* Guiding Principles Header (Simple white text) */}
          <div className="mb-16">
            <h2
              className="text-3xl sm:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Guiding Principles, KIA Lakeside is committed to:
            </h2>
            <p className="text-base text-white/70 max-w-3xl leading-relaxed">
              The KIALA Disposition consists of 3 components which serve as a guideline for all we do in the school to keep us focused.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Column 1: Core Values */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#FB8424]" style={{ fontFamily: "var(--font-outfit)" }}>
                Core Values We Uphold (KIALA)
              </h3>
              <ul className="flex flex-col gap-5 text-sm text-white/80 list-none pl-0">
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold text-base flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">K - Kindness</strong>: To be kind and respectful to all.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold text-base flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">I - Integrity</strong>: To tell the truth ALWAYS.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold text-base flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">A - Ambition</strong>: Dare to DO and BE our best.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold text-base flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">L - Learning</strong>: A love for lifelong learning.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold text-base flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">A - Accountability</strong>: Take responsibility for our actions.
                  </div>
                </li>
              </ul>
            </div>

            {/* Column 2: Conduct Code */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#FB8424]" style={{ fontFamily: "var(--font-outfit)" }}>
                Conduct Code (Behaviour)
              </h3>
              
              <p className="text-xs text-white/70 mb-5 leading-relaxed">
                At KIA Lakeside Academy we build a child to equip them for an excellent future. This is why we have gone the extra mile to provide a friendly environment with world class facilities and internationally trained staff.
              </p>

              <ul className="flex flex-col gap-4 text-xs text-white/80 list-none pl-0">
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Punctuality</strong>: To report to school, classes and submit homework on time.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Preparation</strong>: To report for class and activities with required materials.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Performance</strong>: To do all homework, class work and tasks as required.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Positive Participation</strong>: To participate in school activities proactively.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Personal Conduct</strong>: To dress, behave and conduct ourselves in the best manner possible.
                  </div>
                </li>
              </ul>
              
              <p className="text-[11px] text-[#FB8424] italic font-semibold mt-6 leading-relaxed">
                &ldquo;Getting it right will result in PRAISE, continuously failing to get it right will result in PENALTIES.&rdquo;
              </p>
            </div>

            {/* Column 3: Teaching & Learning Code */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-[#FB8424]" style={{ fontFamily: "var(--font-outfit)" }}>
                Teaching &amp; Learning Code
              </h3>

              <p className="text-xs text-white/70 mb-5 leading-relaxed">
                We seek to develop the following skills for teaching and learning which will justify our processes and achieve a life-long learning culture:
              </p>

              <ul className="flex flex-col gap-4 text-xs text-white/80 list-none pl-0">
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Reading</strong>: Reading, research and comprehension.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Writing</strong>: Handwriting, structure and written expression.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Numeracy</strong>: A wide range of numerical and mathematical skills.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Oral</strong>: Good verbal expression which is clear and audible.
                  </div>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#FB8424] font-bold flex-shrink-0">•</span>
                  <div>
                    <strong className="text-white">Recall</strong>: Memory skills, helping students cope without rote learning.
                  </div>
                </li>
              </ul>

              <p className="text-[11px] text-white/60 mt-6 leading-relaxed">
                It is our aim to gradually and appropriately embed our skills for successful teaching and learning into <strong className="text-white">technology skills and learning skills</strong>.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: SPECIAL TOUR (Alternating Block)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Visit us">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text Content */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {/* Campus Building Line-Art Icon (no colored box) */}
              <div className="text-[#352679] mb-6">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>

              <h2
                className="text-3xl font-bold text-[#352679] mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Special Tour
              </h2>

              <p className="text-sm sm:text-base text-[#64607a] leading-relaxed mb-6">
                You are most welcome to visit KIA Lakeside Academy to meet our students and staff and to see our world class facilities. Please contact our admissions department to find out more about the admissions process and how to schedule a visit.
              </p>

              <div>
                <Link
                  href="/admissions/process"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FB8424] hover:text-[#e06e10] transition-colors"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Schedule a Visit &rarr;
                </Link>
              </div>
            </div>

            {/* Right Column: Campus Image (Clean rounded corners, no extra shadow box) */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] shadow-lg border border-gray-100 group">
                <Image
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop"
                  alt="KIA Lakeside Academy Campus buildings and lawns"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-w-7xl) 50vw, 100vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 5: GRADUATION & SUCCESS (Alternating Block)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb]" aria-label="Alumni success">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Graduation Image (Clean rounded corners, no extra shadow box) */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg border border-gray-100 group">
                <Image
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop"
                  alt="Graduating students celebrating academic success"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-103"
                  sizes="(max-w-7xl) 40vw, 100vw"
                />
              </div>
            </div>

            {/* Right Column: Text Content */}
            <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
              {/* Graduation Cap Line-Art Icon (no colored box) */}
              <div className="text-[#352679] mb-6">
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>

              <h2
                className="text-3xl font-bold text-[#352679] mb-6 tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Graduation
              </h2>

              <p className="text-sm sm:text-base text-[#64607a] leading-relaxed mb-6">
                As the years go by an increasing number of students graduate from KIA Lakeside Academy with excellent qualifications enabling them to continue their education in schools and universities in the UK, USA, Canada, and Nigeria. Our graduates proceed to prestigious institutions globally, carrying our core values of excellence, integrity, and achievement.
              </p>

              <div>
                <Link
                  href="/admissions/why-kia"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FB8424] hover:text-[#e06e10] transition-colors"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Explore Admissions &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
