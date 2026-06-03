import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Why Choose KIA Lakeside | KIA Lakeside Academy",
  description:
    "Discover the key advantages of a KIA Lakeside education: academic excellence, rich character building, secured campus utilities, and student outcomes.",
};

const advantages = [
  {
    title: "Academic Excellence",
    description: "Our integrated curriculum combines the rigorous Nigerian Curriculum with British IGCSE standards. Led by internationally certified educators, we focus on critical thinking, coding, and scientific research.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Holistic Development",
    description: "Education at KIA Lakeside goes beyond textbooks. We offer active sports track coaching, dedicated music and arts studios, extramural clubs, and a structured student leadership development framework.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v5m-3 0h6m-6-14h6a3 3 0 013 3v3a6 6 0 01-12 0V9a3 3 0 013-3z" />
      </svg>
    ),
  },
  {
    title: "Secured Campus & Utilities",
    description: "We provide 24-hour power and water supply, fully monitored and secured playgrounds, modern science and computer laboratories, and separate well-equipped libraries for primary and secondary sections.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
        {/* Background Image: Classroom setting */}
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
          alt="Educational learning context"
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
                <Link href="/admissions" className="text-white/60 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Why KIA Lakeside</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Our Strengths
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Why Choose KIA Lakeside
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CORE ADVANTAGES
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Core advantages">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              A World-Class Education Model
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We offer unique assets and standard structures to support your child's growth into a confident, moral, and highly accomplished leader.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <div 
                key={adv.title}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-8 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {adv.icon}
                  </div>

                  <h3 className="text-xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    {adv.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  KIA LAKESIDE ADVANTAGE
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: PROSPECTUS DOWNLOAD CALLOUT
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Prospectus download">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-white border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex gap-6 items-center flex-1">
              {/* Book illustration stub */}
              <div className="w-20 h-24 bg-primary/5 border-2 border-primary/10 rounded-lg flex flex-col items-center justify-center shadow-inner text-4xl select-none">
                📖
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                  Download Our Official Prospectus
                </h3>
                <p className="text-sm text-primary/60 leading-relaxed">
                  Gain comprehensive insights into our academic curriculums, school activities, pastoral programs, and administrative policies.
                </p>
              </div>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="/admissions/process"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-secondary/20"
                style={{
                  background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Download PDF 📥
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
