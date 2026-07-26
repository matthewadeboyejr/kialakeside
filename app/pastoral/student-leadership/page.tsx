import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

export const metadata: Metadata = {
  title: "Student Leadership | KIA Lakeside Academy",
  description:
    "Explore Student Leadership at KIA Lakeside Academy: Prefects, House Captains, Class Representatives, Student Council, Peer Mentoring, Community Service, and Leadership Conferences.",
};

const leadershipTopics = [
  {
    title: "Prefects",
    description: "Senior student leaders selected to embody school values, assist staff, oversee assemblies, and maintain peer discipline.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "House Captains",
    description: "Student champions leading Red, Blue, Green, and Yellow Houses in sports, academic rallies, and inter-house cups.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
  },
  {
    title: "Class Representatives",
    description: "Elected classroom delegates communicating student suggestions, organizing study groups, and coordinating class activities.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Student Council",
    description: "Governing student assembly representing the student body in consultative meetings with school administration.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Peer Mentoring",
    description: "Experienced student mentors guiding younger peers through academic transition, study skills, and school adjustment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Community Service",
    description: "Student-led social impact projects, charity drives, environmental initiatives, and civic responsibility.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Leadership Conferences",
    description: "Annual leadership retreats, workshops, public speaking forums, and external youth leadership summits.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
];

export default function StudentLeadershipPage() {
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
            <Link href="/pastoral" className="hover:text-white transition-colors">
              Pastoral Care
            </Link>
            <span>/</span>
            <span className="text-white">Student Leadership</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Empowering Youth Leaders
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Student Leadership
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                At KIA Lakeside Academy, student leadership builds confidence, ethical responsibility, teamwork, and service to others.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/admissions/apply" variant="secondary" size="lg">
                  Apply to KIA Lakeside
                </Button>
                <Button href="/pastoral/student-life" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  Explore Student Life
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/conducive-learning-environment.jpg"
                    alt="KIA Lakeside Academy Student Leaders"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Service & Responsibility
                  </p>
                  <p className="text-xl font-bold font-display">
                    Developing Tomorrow&apos;s Leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. LEADERSHIP DISCUSSION TOPICS (VERBATIM 7 ITEMS)
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Leadership Framework"
            title="Student Leadership Initiatives"
            subtitle="Explore our key student leadership pillars and developmental channels:"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {leadershipTopics.map((topic, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                    {topic.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {topic.title}
                  </h3>

                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. CLOSING CALL-TO-ACTION BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Inspiring Leadership
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            Cultivating responsible, ethical, and service-driven student leaders at KIA Lakeside Academy.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply to KIA Lakeside
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Contact Pastoral Team
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
