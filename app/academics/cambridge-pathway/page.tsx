import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Cambridge Pathway | KIA Lakeside Academy",
  description:
    "Explore the Cambridge Pathway and IGCSE curriculum at KIA Lakeside Academy, offering internationally benchmarked academic standards alongside Nigerian values.",
};

const cambridgeBullets = [
  "Develop deeper understanding across a broad range of subjects.",
  "Strengthen critical thinking and independent learning skills.",
  "Build effective communication and research skills.",
  "Apply knowledge to real-life situations.",
  "Prepare for admission into leading universities around the world.",
  "Become confident, responsible, reflective, innovative, and engaged learners.",
];

export default function CambridgePathwayPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ----------------------------------------------------
          1. HERO HEADER BANNER
         ---------------------------------------------------- */}
      <section className="relative bg-[#352679] text-white pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FB8424] rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#352679] rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="container-site relative z-10">
          <nav className="flex items-center space-x-2 text-xs md:text-sm text-amber-200/80 mb-6 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/academics" className="hover:text-white transition-colors">
              Academics
            </Link>
            <span>/</span>
            <span className="text-white">Cambridge Pathway</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                International Academic Excellence
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Cambridge Pathway
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                At KIA Lakeside Academy, we are committed to preparing our students for success in an increasingly interconnected and competitive world. As part of our vision to provide a world-class education, we are progressively implementing the Cambridge Pathway to complement our strong national curriculum and broaden the opportunities available to our learners.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/admissions/apply" variant="secondary" size="lg">
                  Apply to KIA Lakeside
                </Button>
                <Button href="/academics/digital-learning" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Explore AI & Digital Learning
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/science-lab.jpg"
                    alt="Cambridge Pathway Science Lab at KIA Lakeside Academy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Global Standards
                  </p>
                  <p className="text-xl font-bold font-display">
                    Rigorous Cambridge Curriculum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. CAMBRIDGE STANDARDS & CAREFUL IMPLEMENTATION
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              The Cambridge Pathway is internationally recognised for its rigorous academic standards, learner-centred approach, and emphasis on critical thinking, creativity, communication, and problem-solving. It equips students with the knowledge, skills, and confidence required to excel at university and in their future careers.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-white border border-[#e2e0ee] shadow-sm space-y-6 text-[#1a1633] text-base md:text-lg leading-relaxed">
            <p>
              Our implementation of the Cambridge curriculum is carefully planned to ensure a smooth transition for students while maintaining the high academic standards for which KIA Lakeside Academy is known.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. OUR CAMBRIDGE JOURNEY & OPPORTUNITIES
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Structured Pathway"
            title="Our Cambridge Journey"
            subtitle="KIA Lakeside Academy is developing a structured pathway that will prepare students for the Cambridge International General Certificate of Secondary Education (Cambridge IGCSE)."
            center
          />

          <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-3xl border border-[#e2e0ee] shadow-sm space-y-6">
            <p className="text-base md:text-lg text-[#1a1633] leading-relaxed">
              Through carefully designed teaching programmes, continuous assessment, and internationally benchmarked learning experiences, students will gain the confidence to compete successfully on the global stage.
            </p>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#352679] font-display mb-4">
                The Cambridge programme will provide learners with opportunities to:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cambridgeBullets.map((bullet, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#f8f7ff] border border-purple-100 flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FB8424] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      ✓
                    </div>
                    <p className="text-[#1a1633] text-sm md:text-base font-medium leading-snug">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. A BALANCED EDUCATIONAL EXPERIENCE
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <SectionHeading
            eyebrow="National & Global Harmony"
            title="A Balanced Educational Experience"
            subtitle="Combining international best practices with Nigerian heritage and moral values."
            center
          />

          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] shadow-sm space-y-6 text-[#1a1633] text-base md:text-lg leading-relaxed">
            <p>
              While embracing international best practices, we remain committed to preserving our national identity and values. Students will benefit from a balanced education that combines academic excellence with character development, leadership, creativity, innovation, and community service.
            </p>
            <p className="font-semibold text-[#352679]">
              Our goal is to nurture graduates who are intellectually curious, ethically responsible, and equipped to thrive in an increasingly global society.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING MILESTONE STATEMENT & CTA
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Educational Milestone
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            &ldquo;The Cambridge Pathway represents another important milestone in our commitment to delivering exceptional education and expanding opportunities for every learner at KIA Lakeside Academy.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply for Cambridge IGCSE
            </Button>
            <Button href="/academics/digital-learning" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View AI & Digital Learning
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
