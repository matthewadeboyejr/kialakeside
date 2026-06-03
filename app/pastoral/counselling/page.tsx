import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "School Counselling | KIA Lakeside Academy",
  description:
    "Learn about our school counselling services, social-emotional guidance, academic support, and career counseling programs.",
};

const pillars = [
  {
    title: "Academic Guidance",
    description: "Supports students in managing study schedules, identifying individual learning styles, addressing classroom learning bottlenecks, and setting realistic academic goals.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Social-Emotional Support",
    description: "Helps students navigate peer interactions, build self-esteem, manage stress and school anxiety, resolve conflicts, and acquire healthy emotional control habits.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Career & DWC Pathways",
    description: "Assists senior students in evaluating options booklets, coordinating university interests, writing essays, and preparing for admission tests.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
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
        {/* Background Image: Counseling environment */}
        <Image
          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1600&auto=format&fit=crop"
          alt="School counseling and support desk"
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
                <Link href="/pastoral" className="text-white/60 hover:text-white transition-colors">
                  Pastoral
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">School Counselling</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Empathetic Guidance
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Counseling Services
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: GUIDANCE PILLARS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Counseling pillars">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Mental Wellbeing
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Supporting Every Student
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              Our counseling department provides professional, confidential support to assist children with emotional challenges, social relationships, and academic transitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div 
                key={pillar.title}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {pillar.icon}
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    {pillar.title}
                  </h3>
                  
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  Counseling Focus
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: SAFE SPACE & BOOKING (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Safe space policies">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Safe Space & Privacy */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                A Confidential Safe Space
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Trust is critical to emotional development. We maintain strict professional standards to ensure students feel secure when sharing concerns:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    🔒 Confidentiality Guidelines
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Counseling discussions are strictly confidential. No reports are shared with peers or teachers without direct student consent, except where there is an immediate risk of harm.
                  </p>
                </div>
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    🤝 Parent-Counselor Alliances
                  </h4>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    We host family counseling sessions and update parents on general wellness strategies without breaching private student-counselor trust lines.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Booking Details */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                How to Book a Session
              </h2>
              <p className="text-sm sm:text-base text-primary/75 leading-relaxed">
                Accessing guidance support at KIA Lakeside Academy is straightforward and multi-channel:
              </p>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <ul className="space-y-4 text-sm text-primary/75">
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Drop-in Center:</strong> Students can walk into the counseling room during recess, lunch breaks, or designated free study hours.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Email Booking:</strong> Send a confidential session request directly to <strong>academy.lakeside@yahoo.com</strong> with the subject line <em>Counseling Request</em>.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-secondary font-bold font-mono">•</span>
                    <span><strong>Parent & Staff Referrals:</strong> Class tutors or parents can submit a request if they observe indicators of stress, withdrawal, or academic dips.</span>
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
