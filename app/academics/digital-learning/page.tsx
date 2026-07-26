import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "AI & Digital Learning | KIA Lakeside Academy",
  description:
    "Discover AI & Digital Learning at KIA Lakeside Academy: preparing students for the digital age with computational thinking, coding, AI literacy, and ethical technology integration.",
};

const digitalFocusPoints = [
  "Digital literacy and responsible online citizenship.",
  "Critical thinking and computational thinking.",
  "Coding and introductory programming.",
  "Research and information literacy.",
  "Creativity through multimedia and digital content creation.",
  "Collaboration using digital learning platforms.",
  "Problem-solving through technology and innovation.",
];

export default function DigitalLearningPage() {
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
            <span className="text-white">AI & Digital Learning</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Future-Ready Technology Integration
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                AI & Digital Learning
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                The future belongs to learners who can think critically, solve complex problems, use technology responsibly, and adapt confidently to change. At KIA Lakeside Academy, we are committed to preparing our students for that future through innovative teaching and purposeful digital learning.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/academics/e-learning" variant="secondary" size="lg">
                  Access E-Learning Portal
                </Button>
                <Button href="/academics/cambridge-pathway" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  View Cambridge Pathway
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/computer-room.jpg"
                    alt="Digital Innovation Lab at KIA Lakeside Academy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Digital Transformation
                  </p>
                  <p className="text-xl font-bold font-display">
                    Transforming Learning, Creation & Collaboration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. TRANSFORMING THE CLASSROOM
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border-l-4 border-[#352679] shadow-sm space-y-4">
            <p className="text-lg md:text-xl text-[#352679] font-medium leading-relaxed">
              Technology at KIA Lakeside Academy is not simply about using computers in the classroom—it is about transforming the way students learn, create, collaborate, and discover. Digital tools are thoughtfully integrated into teaching to enrich learning experiences, encourage creativity, and develop the skills required for success in the twenty-first century.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. PREPARING LEARNERS FOR THE DIGITAL AGE
         ---------------------------------------------------- */}
      <section className="section-pad bg-[#f8f7ff]">
        <div className="container-site">
          <SectionHeading
            eyebrow="21st Century Competencies"
            title="Preparing Learners for the Digital Age"
            subtitle="Our students are introduced to age-appropriate digital technologies that strengthen creativity, research, collaboration, communication, and independent learning."
            center
          />

          <div className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-3xl border border-[#e2e0ee] shadow-sm space-y-6">
            <p className="text-base md:text-lg text-[#1a1633] leading-relaxed">
              As they progress through the school, they develop increasing confidence in using technology responsibly, ethically, and effectively.
            </p>

            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-bold text-[#352679] font-display mb-4">
                Our digital learning programme focuses on developing:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {digitalFocusPoints.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#f8f7ff] border border-purple-100 flex items-start gap-3"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#FB8424] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-[#1a1633] text-sm md:text-base font-medium leading-snug">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. ARTIFICIAL INTELLIGENCE IN EDUCATION
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site max-w-4xl mx-auto space-y-8">
          <SectionHeading
            eyebrow="Ethical AI Integration"
            title="Artificial Intelligence in Education"
            subtitle="Preparing students to understand, use, and interact with AI responsibly."
            center
          />

          <div className="p-8 md:p-10 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] shadow-sm space-y-6 text-[#1a1633] text-base md:text-lg leading-relaxed">
            <p>
              Artificial Intelligence (AI) is rapidly transforming the way we live, work, and learn. At KIA Lakeside Academy, we are preparing students to understand, use, and interact with AI responsibly.
            </p>
            <p>
              Rather than replacing teachers, AI serves as a powerful tool that supports personalised learning, provides timely feedback, encourages creativity, and enables students to learn at their own pace. Guided by our educators, students learn how to use emerging technologies ethically while developing the human skills that remain essential—curiosity, empathy, communication, leadership, and sound judgement.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. FUTURE-READY EDUCATION & CLOSING STATEMENT
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Future-Ready Education
          </div>

          <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed font-light max-w-3xl mx-auto">
            Our vision is to cultivate graduates who are confident users of technology, thoughtful innovators, responsible digital citizens, and lifelong learners. By combining academic excellence, character education, and digital innovation, we prepare students not only for examinations but also for the opportunities and challenges of an increasingly technology-driven world.
          </p>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white pt-4">
            &ldquo;At KIA Lakeside Academy, we are educating today&apos;s learners to become tomorrow&apos;s innovators, leaders, and changemakers.&rdquo;
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply to KIA Lakeside
            </Button>
            <Button href="/academics/curriculum" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              View Curriculum Overview
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
