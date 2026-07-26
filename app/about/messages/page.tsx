import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Messages | KIA Lakeside Academy",
  description:
    "Read messages from Mrs. Tolulope Awobiyi (Proprietress), Mr. O. Awobiyi (Executive Director), and Mr. J. Smith (Principal) at KIA Lakeside Academy.",
};

const messages = [
  {
    role: "Proprietress' Address",
    name: "Mrs. Tolulope Awobiyi",
    title: "Founder & Proprietress",
    text: "When we founded Lakeside Academy in 2008, our goal was simple yet profound: to create a nurturing space where children could discover their potential and achieve excellence. Today, renamed as KIA Lakeside Academy in honour of Kunle Irene Awobiyi, we continue to uphold these foundational values. We are committed to shaping future leaders who are not only academically competent but also characterized by strong moral standing and integrity. Thank you for partnering with us on this journey of shaping outstanding characters.",
    initials: "TA",
    gradient: "from-[#352679] to-[#FB8424]",
    imageAlt: "Mrs. Tolulope Awobiyi - Proprietress",
  },
  {
    role: "Director's Message",
    name: "Mr. O. Awobiyi",
    title: "Executive Board Director",
    text: "At KIA Lakeside Academy, we combine cutting-edge teaching strategies with dynamic subject matter to provide a robust educational foundation. Our focus is to prepare our students to excel both nationally and internationally. We continuously invest in our campus infrastructure, state-of-the-art facilities, and modern curriculum to ensure that Lakeside remains a premier choice for families seeking excellence in education.",
    initials: "OA",
    gradient: "from-[#2e1f66] to-[#d66f1c]",
    imageAlt: "Mr. O. Awobiyi - Executive Board Director",
    reverse: true,
  },
  {
    role: "Principal's Welcome",
    name: "Mr. J. Smith",
    title: "Principal / Head of School",
    text: "A very warm welcome to KIA Lakeside Academy. As Principal, I am immensely proud of our close-knit, supportive community and the quaint size of our classrooms. This enables us to give personalized attention to every student, fostering deep intellectual curiosity and character development. Our teachers are dedicated to inspiring critical thinking and academic curiosity, ensuring that every child thrives. We invite you to explore our programmes and campus.",
    imageUrl: "/new-principal-portrait.jpg",
    initials: "JS",
    gradient: "from-[#352679] to-[#25D366]",
    imageAlt: "Mr. J. Smith - Principal",
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
          src="/new-well-equipped-auditorium.jpg"
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
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  {/* Photo Column */}
                  <div
                    className={`lg:col-span-4 ${
                      isReverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] border border-gray-100 group">
                      {msg.imageUrl ? (
                        <Image
                          src={msg.imageUrl}
                          alt={msg.imageAlt}
                          fill
                          className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                          sizes="(max-w-7xl) 33vw, 100vw"
                        />
                      ) : (
                        <div className={`w-full h-full bg-gradient-to-br ${msg.gradient} flex items-center justify-center text-white text-5xl font-extrabold font-display`}>
                          {msg.initials}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Text Address Column */}
                  <div
                    className={`lg:col-span-8 flex flex-col justify-center ${
                      isReverse ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <span
                      className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-3 block"
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

                    <div className="text-sm sm:text-base text-[#64607a] leading-relaxed space-y-4">
                      <p className="italic font-medium text-[#352679] text-base mb-4">
                        &ldquo;{msg.text.split(".")[0]}.&rdquo;
                      </p>
                      <p>{msg.text.substring(msg.text.indexOf(".") + 1)}</p>
                    </div>

                    <div className="mt-8">
                      <h4
                        className="text-[#352679] text-base font-bold"
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        {msg.name}
                      </h4>
                      <p className="text-xs text-[#FB8424] font-semibold mt-0.5">
                        {msg.title}, KIA Lakeside Academy
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
