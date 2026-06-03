import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "School Policies | KIA Lakeside Academy",
  description:
    "Review school policies: student code of conduct, academic honesty, digital usage regulations, and health & safety standards.",
};

const policyBlocks = [
  {
    title: "Code of Student Conduct",
    description: "Our rules ensure that classrooms remain supportive, respectful, and safe. Zero-tolerance for bullying, peer harassment, or classroom disruption. Attendance is compulsory, and mobile phone usage on campus is strictly restricted.",
  },
  {
    title: "Academic Honesty Code",
    description: "Students are held to high standards of integrity. Exam malpractice, plagiarism on assignments, or copying laboratory notebooks will trigger administrative warnings and restorative guidance.",
  },
  {
    title: "Health & Aquatics Safety Guidelines",
    description: "All students using the swimming pool must undergo professional coaching drills and obtain clearance from the certified school lifeguard. Emergency protocols and clinic referral steps are reviewed termly.",
  },
  {
    title: "Digital & ICT Usage Agreement",
    description: "Specifies ethical guidelines for student usage of school computers, python lab tools, and software resources. Restricts downloading unauthorized contents or breaching cyber-security regulations.",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Documents handbook */}
        <Image
          src="https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=1600&auto=format&fit=crop"
          alt="KIA Lakeside Academy handbook policies document"
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
                <Link href="/information" className="text-white/60 hover:text-white transition-colors">
                  Information
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">School Policies</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            School Ethics
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            School Policies
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: POLICIES GRID
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Policies summary lists">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Regulatory Rules
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Ethical Standards & Regulations
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We compile code-of-conduct models to maintain classroom safety, respect, academic honesty, and healthy environment standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {policyBlocks.map((block) => (
              <div 
                key={block.title}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                    {block.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                    {block.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  School Policy Section
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: DOWNLOAD CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Handbook download details">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-white border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Download Complete School Handbooks
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Receive comprehensive PDFs of our Student Code of Conduct handbook, Aquatics Safety brochure, and IT policies document.
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-wrap gap-4">
              <Link
                href="/admissions/process"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-secondary/20"
                style={{
                  background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Student Handbook PDF 📥
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
