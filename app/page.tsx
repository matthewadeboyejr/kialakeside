import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "./_components/ui/SectionHeading";
import Button from "./_components/ui/Button";
import FacilitiesSlider from "./_components/FacilitiesSlider";

export const metadata: Metadata = {
  title: "KIA Lakeside — Shaping Future Leaders",
  description:
    "KIA Lakeside is a premier school offering world-class education from Early Years through Secondary. Discover our admissions, academics, enrichment, and pastoral programmes.",
};

// ─── Data ────────────────────────────────────────────────
const stats = [
  { value: "2010", label: "Year Founded" },
  { value: "1,200+", label: "Students Enrolled" },
  { value: "120+", label: "Expert Staff" },
  { value: "15+", label: "Programmes Offered" },
];


const enrichmentItems = [
  {
    id: "sports",
    title: "Sports",
    description: "From athletics to team sports, our facilities and coaching inspire competitive excellence.",
    href: "/enrichment/sports",
    emoji: "🏆",
  },
  {
    id: "electives",
    title: "Electives & Extramural",
    description: "Music, drama, arts, coding — a diverse range of activities to ignite every passion.",
    href: "/enrichment/electives",
    emoji: "🎭",
  },
  {
    id: "football-academy",
    title: "Football Academy",
    description: "Professional coaching, structured training, and pathways for students with football ambitions.",
    href: "/enrichment/football-academy",
    emoji: "⚽",
  },
];

const newsItems = [
  {
    id: "news-1",
    category: "Admissions",
    date: "May 2026",
    title: "2026/2027 Admissions Now Open",
    excerpt: "Applications for the new academic year are now being accepted. Secure your child's place today.",
    href: "/admissions/process",
  },
  {
    id: "news-2",
    category: "Academics",
    date: "April 2026",
    title: "KIA Lakeside Students Excel in National Competition",
    excerpt: "Our Secondary students placed in the top 5 nationally across Mathematics and Science disciplines.",
    href: "/information/gallery",
  },
  {
    id: "news-3",
    category: "Enrichment",
    date: "March 2026",
    title: "Football Academy Wins Regional Championship",
    excerpt: "Our Football Academy team claimed the regional title, demonstrating grit and teamwork.",
    href: "/enrichment/football-academy",
  },
];



// ─── Page ────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden select-none"
      >
        {/* Full-bleed Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="KIA Lakeside Campus and Students"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Top dark gradient overlay for navbar readability */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0) 25%)",
            }}
          />
        </div>

        {/* Visually Hidden H1 for SEO/Accessibility */}
        <h1 className="sr-only">KIA Lakeside — Shaping Future Leaders Every Day</h1>

        {/* Pulsing Down Arrow Scroll Indicator (Centred Vertically & Horizontally like the sample) */}
        <div className="relative z-10 flex flex-col items-center justify-center mt-20">
          <a
            href="#about"
            className="w-14 h-14 rounded-full border border-white/60 flex items-center justify-center text-white bg-black/10 backdrop-blur-sm hover:bg-white hover:text-[#352679] hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer pointer-events-auto animate-bounce"
            aria-label="Scroll down to About section"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          PRINCIPAL'S WELCOME SECTION
      ═══════════════════════════════════════════ */}
      <section
        id="principal-welcome"
        className="py-20 lg:py-28 relative overflow-hidden bg-[#fdf5f0]"
        aria-label="Welcome from the Principal"
      >
        <div className="container-site max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
          {/* Overlapping offset card behind */}
          <div
            className="absolute inset-0 bg-[#fae3d2] rounded-[2.5rem] translate-x-4 translate-y-4 -z-10 opacity-70"
            style={{ pointerEvents: 'none' }}
          />

          {/* Main front white card */}
          <div className="bg-white rounded-[2.5rem] border border-[#e8e4e0] shadow-xl p-8 md:p-12 lg:p-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

              {/* Left Column: Logo, Welcome message & details */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <Image
                      src="/logo.png"
                      alt="KIA Lakeside Logo"
                      width={64}
                      height={64}
                      className="h-14 w-auto object-contain"
                    />
                    <div>
                      <h2
                        className="text-[#352679] text-xl font-bold leading-tight"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        KIA LAKESIDE ACADEMY
                      </h2>
                      <p className="text-xs text-[#FB8424] font-semibold uppercase tracking-wider">
                        Excellence · Integrity · Achievement
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#e2e0ee] my-6" />

                  <h3
                    className="text-2xl sm:text-3xl font-bold leading-snug mb-6 text-[#1a1633]"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Welcome to <span className="text-[#352679]">KIA Lakeside Academy</span>, an exclusive <span className="text-[#FB8424]">reputable school for aged 2–16</span> situated in the quiet and serene suburb of Wuye in Abuja.
                  </h3>

                  <div className="space-y-4 text-sm sm:text-base text-[#64607a] leading-relaxed">
                    <p>
                      The school campus is a purpose built educational facility creating a comfortable, colourful and conducive environment for teaching and learning.
                    </p>
                    <p>
                      We aim to provide a place that our pupils can thrive outside of school. Our unique learning experience and close knit community provides opportunities for growth and development where children can go out into the world to create value and make a difference.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link
                    href="/about/leadership"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-md shadow-[#35267930]"
                    style={{
                      background: "linear-gradient(135deg, #352679 0%, #261c5a 100%)",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    Read Principal's Welcome
                  </Link>
                  <Link
                    href="/admissions/why-kia"
                    className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 border border-[#FB8424] hover:bg-[#FB8424]/5"
                    style={{
                      color: "#FB8424",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    Explore Admissions
                  </Link>
                </div>
              </div>

              {/* Right Column: Principal Portrait & Overlapping Card */}
              <div className="lg:col-span-5 relative pr-6 pb-6 sm:pr-8 sm:pb-8 lg:pr-10 lg:pb-10">
                {/* Principal image */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] w-full">
                  <Image
                    src="/new-principal-portrait.jpg"
                    alt="School Principal"
                    fill
                    className="object-cover object-top transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Overlapping white quote card */}
                <div className="absolute bottom-0 right-0 max-w-[280px] sm:max-w-xs md:max-w-[340px] lg:max-w-[280px] bg-white border border-[#e2e0ee] rounded-2xl shadow-2xl p-5 sm:p-6 z-20">
                  <h4
                    className="text-[#352679] text-base font-bold mb-1"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Principal's Welcome
                  </h4>
                  <p className="text-xs text-[#FB8424] font-medium mb-3 uppercase tracking-wide">
                    KIA Lakeside Academy
                  </p>

                  <div className="border-t border-[#e2e0ee] my-2" />

                  <p
                    className="text-[11px] sm:text-xs text-[#64607a] leading-relaxed italic mb-4 mt-2"
                  >
                    "A strong quality you will find at KIA Lakeside Academy is the quaint size of our classrooms. With great emphasis on quality and giving proper attention to each child, we hold a standard in having a limited number of students enrolled each year."
                  </p>

                  <Link
                    href="/about/leadership"
                    className="inline-flex items-center justify-center w-full py-2.5 text-xs font-bold text-white rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                      boxShadow: "0 4px 15px rgba(251, 132, 36, 0.3)",
                      fontFamily: "var(--font-outfit)",
                    }}
                  >
                    More on our leadership team
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* ═══════════════════════════════════════════
          ABOUT TEASER
      ═══════════════════════════════════════════ */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 lg:py-0"
        style={{
          background: "#120933", // Deep Indigo/Dark Blue background
        }}
        aria-label="About KIA Lakeside"
      >
        {/* Sawtooth / Geometric top border pattern matching the sample's aesthetic */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 opacity-20 bg-repeat-x"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='8' viewBox='0 0 16 8'%3E%3Cpath d='M0 0l8 8 8-8H0z' fill='%23ffffff'/%3E%3C/svg%3E")`,
            backgroundSize: '16px 8px',
            borderTop: '2px solid #FB8424' // Orange top edge line
          }}
        />

        <div className="container-site relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">

            {/* Left Column: Creative Navigation Menu */}
            <div className="lg:col-span-5 flex flex-col justify-between border-t border-b border-white/10 py-10">
              <div>
                <h2
                  className="text-[#FB8424] text-xs font-bold tracking-widest uppercase mb-8"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  Explore
                </h2>
                <nav className="flex flex-col gap-3.5" aria-label="About exploration links">
                  {[
                    { number: "01", label: "Mission & Vision", href: "/about/mission-and-vision" },
                    { number: "02", label: "Our Leadership Team", href: "/about/leadership" },
                    { number: "03", label: "School History", href: "/about/history" },
                    { number: "04", label: "Curriculum Overview", href: "/academics/curriculum" },
                    { number: "05", label: "Student Life & Pastoral", href: "/pastoral/student-life" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group/item flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-4">
                        <span
                          className="text-xs font-bold text-white/40 group-hover/item:text-[#FB8424] transition-colors"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {item.number}
                        </span>
                        <span className="text-white/80 group-hover/item:text-white transition-colors text-sm font-medium">
                          {item.label}
                        </span>
                      </div>
                      <svg
                        className="w-4 h-4 text-white/40 group-hover/item:text-[#FB8424] group-hover/item:translate-x-1 transition-all duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  ))}
                </nav>
              </div>
            </div>

            {/* Right Column: Welcome Description Content */}
            <div className="lg:col-span-7 flex flex-col justify-between border-t border-b border-white/10 py-10">
              <div
                className="flex flex-col gap-8 text-white/90 leading-relaxed text-lg sm:text-2xl font-light"
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                <p className="text-xl sm:text-2xl font-normal leading-relaxed text-white">
                  Choosing the right school is one of the most important decisions a family can make. At <span className="font-bold text-[#FB8424]">KIA Lakeside Academy</span>, we believe that every child deserves an education that nurtures academic excellence, strong character, creativity, and confidence. Our commitment is to help every learner discover their potential and develop the knowledge, skills, and values needed to thrive in an ever-changing world.
                </p>
                <p className="leading-relaxed">
                  KIA Lakeside Academy is a vibrant co-educational school dedicated to providing a safe, caring, and inspiring learning environment where every child is known, valued, and challenged to succeed. We combine a rich academic curriculum with innovative teaching, technology-driven learning, and character education to prepare students for success both locally and globally.
                </p>
                <p className="leading-relaxed">
                  Our educational philosophy goes beyond excellent examination results. We intentionally develop the whole child—intellectually, socially, emotionally, physically, and morally. We believe that true education empowers children to think critically, communicate effectively, collaborate confidently, and lead with integrity.
                </p>
                <p className="text-lg sm:text-xl font-normal mt-4 leading-relaxed">
                  Admissions are now open —{" "}
                  <Link
                    href="/admissions/process"
                    className="text-[#FB8424] hover:text-[#ffa050] font-semibold underline underline-offset-4 transition-colors inline-flex items-center gap-1.5 group/link"
                  >
                    begin your child's journey today
                    <svg className="w-5 h-5 transition-transform duration-200 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ACADEMICS
      ═══════════════════════════════════════════ */}
      <section
        id="academics"
        className="section-pad"
        style={{ background: "#f8f7ff" }}
        aria-label="Academic programmes"
      >
        <div className="container-site">
          <SectionHeading
            eyebrow="Academics"
            title="A World-Class Curriculum for Every Stage"
            subtitle="From the wonder of Early Years to the rigour of Secondary, our programmes are designed to unlock each student's unique potential."
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 rounded-2xl overflow-hidden border border-[#e2e0ee] shadow-xl bg-white">
            {/* Column 1: Early Years */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#e2e0ee]">
              {/* Header Band */}
              <div
                className="p-5 flex items-center gap-4 text-white"
                style={{ background: "linear-gradient(135deg, #4a38a0 0%, #3a2b80 100%)" }}
              >
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>Early Years</h3>
                  <p className="text-xs text-white/80 font-medium">Creche & Preschool</p>
                </div>
              </div>
              {/* Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/new-early-child.jpeg"
                  alt="Early Years Child"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-[#64607a] text-sm leading-relaxed mb-4">
                    Our early years comprises of four units:
                  </p>
                  <ul className="text-[#64607a] text-sm leading-relaxed space-y-2 mb-6 list-disc pl-5">
                    <li>Crèche</li>
                    <li>Preschool, Foundation Stage 2 Class</li>
                    <li>Nursery One and Nursery Two (Reception Class).</li>
                  </ul>
                </div>
                <Link
                  href="/academics/early-years"
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 hover:gap-2.5"
                  style={{ color: "#FB8424", fontFamily: "var(--font-outfit)" }}
                >
                  VIEW ▸
                </Link>
              </div>
            </div>

            {/* Column 2: Primary School */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-[#e2e0ee]">
              {/* Header Band */}
              <div
                className="p-5 flex items-center gap-4 text-white"
                style={{ background: "linear-gradient(135deg, #352679 0%, #291d60 100%)" }}
              >
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>Primary School</h3>
                  <p className="text-xs text-white/80 font-medium">Blended Curriculum</p>
                </div>
              </div>
              {/* Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/new-primary-school-girl.jpeg"
                  alt="Primary School Girl"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-[#64607a] text-sm leading-relaxed mb-6">
                  We operate a blended curriculum made up of the Nigerian curriculum incorporating aspects of the British National Curriculum in the primary section of the school.
                </p>
                <Link
                  href="/academics/elementary"
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 hover:gap-2.5"
                  style={{ color: "#FB8424", fontFamily: "var(--font-outfit)" }}
                >
                  VIEW ▸
                </Link>
              </div>
            </div>

            {/* Column 3: Secondary School */}
            <div className="flex flex-col">
              {/* Header Band */}
              <div
                className="p-5 flex items-center gap-4 text-white"
                style={{ background: "linear-gradient(135deg, #261c5a 0%, #1a1340 100%)" }}
              >
                <div className="flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>Secondary School</h3>
                  <p className="text-xs text-white/80 font-medium">Advanced Attainment</p>
                </div>
              </div>
              {/* Image */}
              <div className="relative aspect-[3/2] w-full overflow-hidden">
                <Image
                  src="/new-secondary-school-boy.jpg"
                  alt="Secondary School Boy"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              {/* Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <p className="text-[#64607a] text-sm leading-relaxed mb-6">
                  We maintain a connected relationship to the values, the skills and philosophies set in the primary school, endeavouring to rise to higher advanced levels of attainment.
                </p>
                <Link
                  href="/academics/secondary"
                  className="inline-flex items-center gap-1.5 text-sm font-bold transition-all duration-200 hover:gap-2.5"
                  style={{ color: "#FB8424", fontFamily: "var(--font-outfit)" }}
                >
                  VIEW ▸
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button href="/academics" variant="outline" size="md" id="academics-view-all">
              View All Academic Programmes
            </Button>
          </div>
        </div>
      </section>



      {/* ═══════════════════════════════════════════
          OUR FACILITIES
      ═══════════════════════════════════════════ */}
      <section
        id="facilities"
        className="section-pad relative overflow-hidden"
        style={{
          background: "#120933", // Deep Indigo matching About Teaser
        }}
        aria-label="Our facilities"
      >
        {/* Subtle geometric dot grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] bg-repeat pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='2' cy='2' r='1' fill='%23ffffff'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Ambient background glows */}
        <div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #FB8424, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #4a38a0, transparent 70%)" }}
        />

        <div className="container-site relative z-10">
          <SectionHeading
            eyebrow="Our Campus"
            title="State-of-the-Art Facilities"
            subtitle="Explore our modern spaces designed to support academic excellence, athletic development, and creative expression in a safe environment."
            center
            light
          />

          <FacilitiesSlider />
        </div>
      </section>





      {/* ═══════════════════════════════════════════
          GALLERY STRIP
      ═══════════════════════════════════════════ */}
      <section id="gallery-strip" className="section-pad" aria-label="Photo gallery preview">
        <div className="container-site">
          <SectionHeading
            eyebrow="Gallery"
            title="Life at KIA Lakeside"
            subtitle="A glimpse into the vibrant, joyful learning community our students call home."
            center
          />

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 h-auto lg:h-[520px] select-none">

            {/* Card 1: STEM & Science Lab (col-span-2, row-span-1) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group col-span-1 sm:col-span-2 row-span-1 h-64 sm:h-auto">
              <Image
                src="/science_lab_students.png"
                alt="Science Lab Experiment"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FB8424]/20 border border-[#FB8424]/30 text-[#FB8424] text-[10px] font-bold tracking-wide uppercase">
                    Discovery
                  </span>
                  <h4 className="text-lg font-bold mt-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    Science &amp; Labs
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 group-hover:bg-[#FB8424] group-hover:border-transparent transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 2: Athletics & Sports (col-span-1, row-span-2) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group col-span-1 row-span-1 sm:row-span-2 h-64 sm:h-auto">
              <Image
                src="/school-images/sporting-facilities.jpg"
                alt="Athletics & Sports"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-7xl) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FB8424]/20 border border-[#FB8424]/30 text-[#FB8424] text-[10px] font-bold tracking-wide uppercase">
                    Active Life
                  </span>
                  <h4 className="text-lg font-bold mt-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    Sports &amp; Athletics
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 group-hover:bg-[#FB8424] group-hover:border-transparent transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 3: Arts & Creativity (col-span-1, row-span-1) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group col-span-1 row-span-1 h-64 sm:h-auto">
              <Image
                src="/school-images/music-art.jpg"
                alt="Arts & Creativity"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-7xl) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FB8424]/20 border border-[#FB8424]/30 text-[#FB8424] text-[10px] font-bold tracking-wide uppercase">
                    Creativity
                  </span>
                  <h4 className="text-lg font-bold mt-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    Arts &amp; Music
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 group-hover:bg-[#FB8424] group-hover:border-transparent transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 4: Campus Life (col-span-2, row-span-1) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group col-span-1 sm:col-span-2 row-span-1 h-64 sm:h-auto">
              <Image
                src="/students_hallway.png"
                alt="Students in Hallway"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-7xl) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FB8424]/20 border border-[#FB8424]/30 text-[#FB8424] text-[10px] font-bold tracking-wide uppercase">
                    Community
                  </span>
                  <h4 className="text-lg font-bold mt-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    Campus Life
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 group-hover:bg-[#FB8424] group-hover:border-transparent transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Card 5: Graduation (col-span-1, row-span-1) */}
            <div className="relative rounded-3xl overflow-hidden shadow-lg group col-span-1 row-span-1 h-64 sm:h-auto">
              <Image
                src="/school-images/awards-with-kids.jpg"
                alt="Graduation Caps"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-w-7xl) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#FB8424]/20 border border-[#FB8424]/30 text-[#FB8424] text-[10px] font-bold tracking-wide uppercase">
                    Success
                  </span>
                  <h4 className="text-lg font-bold mt-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    Graduation
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 group-hover:bg-[#FB8424] group-hover:border-transparent transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-10 text-center">
            <Button href="/information/gallery" variant="primary" size="md" id="gallery-view-all">
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
