import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Early Years | KIA Lakeside Academy",
  description:
    "Explore our Early Years Foundation Stage (EYFS) program for children aged 1.5 to 5, featuring interactive, play-based learning.",
};

const eyfsAreas = [
  {
    title: "Communication & Language",
    description: "Fosters listening habits, conversation engagement, and expression. We encourage sharing stories, vocabulary games, and expressive speaking workshops.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Physical Development",
    description: "Develops gross and fine motor coordination, muscle strength, and spatial awareness through secured playground games, dance, and handcraft tracing.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
  },
  {
    title: "Personal, Social & Emotional Growth",
    description: "Cultivates self-confidence, empathy, and peer collaboration. Children learn to manage their emotions, share toys, and understand boundaries.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Literacy & Language Arts",
    description: "Introduces Jolly Phonics, letter-sound identification, and basic writing control. Focuses on storytelling and building a love for reading.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Mathematics & Reasoning",
    description: "Covers simple number sequencing, basic shapes, classifying objects, counting games, and identifying basic patterns using interactive toys.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Understanding the World",
    description: "Explores nature, animals, local neighborhoods, and technology basics. Children satisfy their curiosity about how things work.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
  {
    title: "Expressive Arts & Design",
    description: "Inspires creativity through sensory play, coloring, clay modeling, nursery rhymes, dance rhythms, and imaginary role-play.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
];

const dailySchedule = [
  {
    time: "08:00 AM - 08:30 AM",
    activity: "Arrival & Circle Time",
    description: "Welcoming children, morning prayers, greeting exercises, and simple calendar counting to start the day.",
  },
  {
    time: "08:30 AM - 10:00 AM",
    activity: "Phonics & Numeracy Workshops",
    description: "Focused activities covering Jolly Phonics sounds, writing shapes, and basic counting modules using blocks.",
  },
  {
    time: "10:00 AM - 11:00 AM",
    activity: "Snack & Secured Outdoor Play",
    description: "Healthy snack break followed by monitored playtime on our swings and slides to build motor coordination.",
  },
  {
    time: "11:00 AM - 12:30 PM",
    activity: "Sensory & Creative Arts",
    description: "Active coloring, water tables, clay molding, music rhymes, and interactive story reading sessions.",
  },
  {
    time: "12:30 PM - 01:30 PM",
    activity: "Lunch & Rest / Home-time Prep",
    description: "Warm school lunch, followed by quiet rest/nap time before packing up folders for family pick-up.",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Early Years Child (from local public folder) */}
        <Image
          src="/early_years_child.png"
          alt="KIA Lakeside Academy Early Years nursery playground"
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
            Early Years (Nursery)
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: EYFS AREAS OF LEARNING
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="EYFS learning areas">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Ages 1.5 - 5 Years
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Seven Areas of Learning
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We shape our curriculum under the British EYFS statutory guidelines, focusing on three prime areas and four specific areas of early child development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eyfsAreas.map((area) => (
              <div 
                key={area.title}
                className="bg-[#fcfbfe] border border-primary/5 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Icon Indicator */}
                  <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                    {area.icon}
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    {area.title}
                  </h3>
                  
                  <p className="text-sm text-primary/70 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                  EYFS Standard
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: DAILY SCHEDULE TIMELINE
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Daily nursery schedule">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              A Child's Day
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Typical Nursery Daily Schedule
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              Our structured day provides a healthy balance of academic instruction, creative workshops, active play, and rest.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-primary/15 -translate-x-1/2" />

            <div className="flex flex-col gap-10">
              {dailySchedule.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.activity}
                    className={`relative flex flex-col sm:flex-row items-start ${
                      isEven ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node circle */}
                    <div className="absolute left-4 sm:left-1/2 w-6 h-6 rounded-full border-2 border-primary bg-white -translate-x-1/2 z-10 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    </div>

                    {/* Timeline card */}
                    <div className="w-full sm:w-[calc(50%-2rem)] pl-10 sm:pl-0">
                      <div 
                        className={`bg-white border border-primary/10 rounded-2xl p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300 ${
                          isEven ? "sm:text-right" : "sm:text-left"
                        }`}
                      >
                        {/* Time span tag */}
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-[10px] font-bold text-white mb-3 shadow-sm"
                          style={{
                            background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                            fontFamily: "var(--font-outfit)",
                          }}
                        >
                          {item.time}
                        </span>

                        <h3 
                          className="text-base sm:text-lg font-bold text-primary mb-2"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {item.activity}
                        </h3>
                        
                        <p className="text-xs sm:text-sm text-primary/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: CALL TO ACTION
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-primary/5" aria-label="Visit early years section">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Would you like to tour our Early Years play area?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Schedule a friendly morning visit to see how we care for and nurture kids in a secured, happy environment.
              </p>
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
                Schedule Campus Tour &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
