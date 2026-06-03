import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Directors' Messages | KIA Lakeside Academy",
  description:
    "Read personal messages and warm welcomes from our Founder & Proprietress, Executive Board Director, and School Principal.",
};

const messages = [
  {
    role: "Proprietress' Address",
    name: "Mrs. Tolulope Awobiyi",
    title: "Founder & Proprietress",
    text: "When we founded Lakeside Academy in 2008, our goal was simple yet profound: to create a nurturing space where children could discover their potential and achieve excellence. Today, renamed as KIA Lakeside Academy in honour of Kunle Irene Awobiyi, we continue to uphold these foundational values. We are committed to shaping future leaders who are not only academically competent but also characterized by strong moral standing and integrity. Thank you for partnering with us on this journey of shaping outstanding characters.",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Mrs. Tolulope Awobiyi - Proprietress",
  },
  {
    role: "Director's Message",
    name: "Mr. O. Awobiyi",
    title: "Executive Board Director",
    text: "At KIA Lakeside Academy, we combine cutting-edge teaching strategies with dynamic subject matter to provide a robust educational foundation. Our focus is to prepare our students to excel both nationally and internationally. We continuously invest in our campus infrastructure, state-of-the-art facilities, and modern curriculum to ensure that Lakeside remains a premier choice for families seeking excellence in education.",
    imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    imageAlt: "Mr. O. Awobiyi - Executive Board Director",
    reverse: true,
  },
  {
    role: "Principal's Welcome",
    name: "Mr. J. Smith",
    title: "Principal / Head of School",
    text: "A very warm welcome to KIA Lakeside Academy. As Principal, I am immensely proud of our close-knit, supportive community and the quaint size of our classrooms. This enables us to give personalized attention to every student, fostering deep intellectual curiosity and character development. Our teachers are dedicated to inspiring critical thinking and academic curiosity, ensuring that every child thrives. We invite you to explore our programmes and campus.",
    imageUrl: "/principal_portrait.png",
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
          src="https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=1600&auto=format&fit=crop"
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
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-white/60">About Us</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Directors' Messages</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Welcome
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Directors' Messages
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: MESSAGES
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Welcome addresses">
        <div className="container-site">
          <div className="flex flex-col gap-24">
            {messages.map((msg, index) => {
              const isReverse = msg.reverse;
              return (
                <div
                  key={msg.role}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                    index !== 0 ? "border-t border-[#352679]/10 pt-20" : ""
                  }`}
                >
                  {/* Portrait Column */}
                  <div
                    className={`lg:col-span-4 ${
                      isReverse ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5] border border-gray-100 group">
                      <Image
                        src={msg.imageUrl}
                        alt={msg.imageAlt}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                        sizes="(max-w-7xl) 33vw, 100vw"
                      />
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
