import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Messages | KIA Lakeside Academy",
  description:
    "Read messages from Mrs. Titilayo Adebiyi (Proprietress), Mr. O. Awobiyi (Executive Director), and Mr. Babatunde Lawal (Principal) at KIA Lakeside Academy.",
};

const messages = [
  {
    role: "Proprietress' Address",
    name: "Mrs. Titilayo Adebiyi",
    title: "Founder & Proprietress",
    paragraphs: [
      "When we founded Lakeside Academy in 2008, our goal was simple yet profound: to create a nurturing space where children could discover their potential and achieve excellence.",
      "Today, renamed as KIA Lakeside Academy in honour of Kunbi Irene Adebiyi (KIA), we continue to uphold these foundational values. We are committed to shaping future leaders who are not only academically competent but also characterized by strong moral standing and integrity. Thank you for partnering with us on this journey of shaping outstanding characters.",
    ],
    initials: "TA",
    gradient: "from-[#352679] to-[#FB8424]",
    imageAlt: "Mrs. Titilayo Adebiyi - Proprietress",
  },
  {
    role: "Director's Message",
    name: "Mr. O. Awobiyi",
    title: "Executive Board Director",
    paragraphs: [
      "At KIA Lakeside Academy, we combine cutting-edge teaching strategies with dynamic subject matter to provide a robust educational foundation. Our focus is to prepare our students to excel both nationally and internationally.",
      "We continuously invest in our campus infrastructure, state-of-the-art facilities, and modern curriculum to ensure that Lakeside remains a premier choice for families seeking excellence in education.",
    ],
    initials: "OA",
    gradient: "from-[#2e1f66] to-[#d66f1c]",
    imageAlt: "Mr. O. Awobiyi - Executive Board Director",
    reverse: true,
  },
  {
    role: "Principal’s Welcome Address",
    name: "Babatunde Lawal",
    title: "Principal",
    paragraphs: [
      "Welcome to KIA Lakeside Academy, a school committed to nurturing confident, compassionate, innovative and future-ready learners who are prepared to rise to the highest levels of excellence.",
      "At KIA Lakeside Academy, we believe that education must go beyond the acquisition of knowledge. It must inspire curiosity, develop character, build confidence and equip young people with the knowledge, skills and values required to thrive in an ever-changing world. Guided by our Vision and Mission Statements and Core Values, we are committed to providing a safe, stimulating and inclusive learning environment in which every child is encouraged to discover and develop their unique potential.",
      "Our school provides a seamless educational journey through four key sections: Pre-School, offering a strong foundation through our Early Years Programme; Elementary School, covering Key Stages 1 and 2; Secondary School, covering Key Stages 3 and 4; and our Football Academy, which provides talented young athletes with opportunities to develop their sporting potential alongside their academic education.",
      "We deliver a carefully designed blend of Nigerian and international curricula, preparing our students for both local and global opportunities. Our academic programmes provide pathways to WAEC, NECO and Cambridge IGCSE, ensuring that our learners receive a broad, rigorous and relevant education. Beyond excellent examination outcomes, however, we seek to develop critical thinkers, effective communicators, problem-solvers and responsible global citizens.",
      "At the heart of our work is a strong commitment to academic excellence and pastoral care. We recognise that every child is unique and that students achieve their best when they feel known, valued, supported and challenged. Our teachers therefore work closely with students to promote not only academic achievement but also emotional well-being, positive relationships, self-discipline, resilience and strong moral character.",
      "We are also deliberate about preparing our students for the future. Through innovative teaching, technology and digital learning, leadership opportunities, creativity, sports and practical experiences, we equip them with the competencies needed to succeed in a rapidly evolving world. Our Football Academy further reflects our belief that excellence can be pursued in different fields and that education should provide opportunities for students to discover and develop their individual talents.",
      "Our aspiration is to ensure that every child who passes through KIA Lakeside Academy leaves as a well-rounded young person—academically capable, morally grounded, emotionally intelligent, confident, resilient and ready to make a positive contribution to society.",
      "As we continue our journey of growth and transformation, we remain committed to working in partnership with our parents, dedicated staff, Board and the wider school community. Together, we will continue to build a school where standards are high, learning is meaningful, character is valued and every student is inspired to reach for excellence.",
      "I warmly invite you to explore KIA Lakeside Academy and become part of a vibrant learning community where every child is given the opportunity to learn, grow, lead and thrive.",
      "Welcome to KIA Lakeside Academy—where we prepare learners for today and leaders for tomorrow.",
    ],
    imageUrl: "/new-principal-portrait.jpg",
    initials: "BL",
    gradient: "from-[#352679] to-[#25D366]",
    imageAlt: "Babatunde Lawal - Principal",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Assembly/gathering theme */}
        <Image
          src="/director-message-hero.jpg"
          alt="KIA Lakeside Academy community"
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
                <Link href="/about" className="text-white/60 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Messages</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Welcome Addresses
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            School Messages
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: MESSAGES list
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Welcome letters">
        <div className="container-site">
          <div className="space-y-28 max-w-5xl mx-auto">
            {messages.map((msg) => {
              const isReverse = msg.reverse;
              return (
                <div
                  key={msg.role}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
                >
                  {/* Photo Column (Sticky on large screens) */}
                  <div
                    className={`lg:col-span-4 lg:sticky lg:top-28 ${isReverse ? "lg:order-2" : "lg:order-1"
                      }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] border border-gray-100 group">
                      {msg.imageUrl ? (
                        <Image
                          src={msg.imageUrl}
                          alt={msg.imageAlt}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${msg.gradient} flex items-center justify-center text-white text-5xl font-extrabold font-display`}>
                          {msg.initials}
                        </div>
                      )}
                    </div>
                    {/* Small caption badge under photo */}
                    <div className="mt-4 p-4 rounded-xl bg-[#F8F9FA] border border-gray-100 text-center">
                      <div className="text-sm font-bold text-[#352679]" style={{ fontFamily: "var(--font-outfit)" }}>
                        {msg.name}
                      </div>
                      <div className="text-xs text-[#FB8424] font-semibold mt-0.5">
                        {msg.title}
                      </div>
                      <div className="text-[11px] text-gray-500 mt-0.5">
                        KIA Lakeside Academy
                      </div>
                    </div>
                  </div>

                  {/* Text Address Column */}
                  <div
                    className={`lg:col-span-8 flex flex-col ${isReverse ? "lg:order-1" : "lg:order-2"
                      }`}
                  >
                    <span
                      className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {msg.title}
                    </span>

                    <h2
                      className="text-3xl font-bold text-[#352679] mb-6 tracking-tight"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {msg.role}
                    </h2>

                    <div className="text-sm sm:text-base text-[#4a475d] leading-relaxed space-y-4">
                      {msg.paragraphs.map((p, idx) => (
                        <p
                          key={idx}
                          className={
                            idx === 0
                              ? "text-base sm:text-lg font-medium text-[#352679] leading-relaxed border-l-4 border-[#FB8424] pl-4 py-0.5 bg-[#FFF9F5] rounded-r-lg"
                              : ""
                          }
                        >
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h4
                        className="text-[#352679] text-base font-bold"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {msg.name}
                      </h4>
                      <p className="text-xs text-[#FB8424] font-semibold mt-0.5">
                        {msg.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        KIA Lakeside Academy
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
