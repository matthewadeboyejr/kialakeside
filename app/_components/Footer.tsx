import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    heading: "About",
    links: [
      { label: "Mission & Vision", href: "/about/mission-and-vision" },
      { label: "Core Values", href: "/about/core-values" },
      { label: "History", href: "/about/history" },
      { label: "Leadership Team", href: "/about/leadership" },
      { label: "Governance", href: "/about/governance" },
    ],
  },
  {
    heading: "Admissions",
    links: [
      { label: "Why KIA Lakeside", href: "/admissions/why-kia" },
      { label: "Admission Process", href: "/admissions/process" },
      { label: "Entrance Exam", href: "/admissions/entrance-exam" },
      { label: "Scholarship", href: "/admissions/scholarship" },
      { label: "Application Fee", href: "/admissions/fees" },
    ],
  },
  {
    heading: "Academics",
    links: [
      { label: "Curriculum Overview", href: "/academics/curriculum" },
      { label: "Early Years", href: "/academics/early-years" },
      { label: "Elementary", href: "/academics/elementary" },
      { label: "Secondary", href: "/academics/secondary" },
      { label: "Key Dates", href: "/academics/key-dates" },
    ],
  },
  {
    heading: "More",
    links: [
      { label: "Student Life", href: "/pastoral/student-life" },
      { label: "Sports", href: "/enrichment/sports" },
      { label: "Football Academy", href: "/enrichment/football-academy" },
      { label: "Gallery", href: "/information/gallery" },
      { label: "Careers", href: "/information/careers" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://x.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      {/* ─── TIER 1: Newsletter & Socials ──────────────────────── */}
      <div 
        style={{ background: "#120933" }} 
        className="py-12 border-b border-white/5"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Newsletter form */}
            <div className="lg:col-span-8">
              <h3 
                className="text-white text-base font-bold mb-1"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Stay informed
              </h3>
              <p className="text-white/60 text-xs sm:text-sm mb-4">
                Sign up to our newsletter to stay informed about all new developments
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/10 text-white placeholder-white/40 text-sm rounded-lg px-4 py-3 focus:outline-none focus:border-[#FB8424] focus:ring-1 focus:ring-[#FB8424] flex-1"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 text-sm font-bold text-white rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer shadow-lg shadow-[#FB8424]/20"
                  style={{
                    background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  Sign Up
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-4 lg:text-right">
              <h3 
                className="text-white text-base font-bold mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Connect with us
              </h3>
              <div className="flex lg:justify-end items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 flex items-center justify-center rounded-full text-white bg-white/5 border border-white/10 hover:bg-[#FB8424]/10 hover:border-[#FB8424]/30 hover:text-[#FB8424] transition-all duration-200 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ─── TIER 2: Main Info ────────────────────────────────── */}
      <div 
        style={{ background: "#352679" }} 
        className="pt-16 pb-12 text-white/80"
      >
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            
            {/* Column 1: Contact info */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.png"
                  alt="KIA Lakeside Logo"
                  width={52}
                  height={52}
                  className="h-13 w-auto object-contain"
                />
                <div>
                  <h4 
                    className="text-white text-sm font-bold leading-tight"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    KIA LAKESIDE ACADEMY
                  </h4>
                  <p className="text-[10px] text-[#ffa050] tracking-widest uppercase font-semibold">
                    Excellence · Integrity · Achievement
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 w-full" />

              <div className="flex flex-col gap-4 text-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#FB8424] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="leading-relaxed">
                    Plot 1176, Babafemi Ogundipe Boulevard, Cadastral Zone B03, Wuye, Abuja.
                  </p>
                </div>

                <a 
                  href="mailto:academy.lakeside@yahoo.com"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-[#FB8424] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  academy.lakeside@yahoo.com
                </a>

                <a 
                  href="tel:08039681838"
                  className="flex items-center gap-3 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 text-[#FB8424] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  08039681838
                </a>
              </div>
            </div>

            {/* Column 2: Prospectus download */}
            <div className="lg:col-span-4 lg:pl-8 flex flex-col gap-4">
              <h3 
                className="text-white text-sm font-bold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                KIA Lakeside Prospectus
              </h3>
              
              <div className="border-t border-white/10 w-full mb-2" />

              <div className="flex gap-4 items-center bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                {/* Book cover stub */}
                <div className="w-16 h-20 bg-white/20 rounded border border-white/10 flex-shrink-0 flex items-center justify-center text-2xl shadow-inner">
                  📖
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs text-white/70 leading-normal">
                    Download our official school prospectus to explore our courses and values.
                  </p>
                  <a
                    href="/admissions/why-kia"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FB8424] hover:text-[#ff9c4a] transition-colors"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    Download Prospectus 📥
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Quick Navigation */}
            <div className="lg:col-span-2 lg:pl-6 flex flex-col gap-4">
              <h3 
                className="text-white text-sm font-bold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Academics
              </h3>
              
              <div className="border-t border-white/10 w-full mb-2" />
              
              <ul className="flex flex-col gap-2.5 text-sm">
                <li>
                  <Link href="/academics/curriculum" className="text-white/70 hover:text-white transition-colors">
                    Curriculum Overview
                  </Link>
                </li>
                <li>
                  <Link href="/academics/early-years" className="text-white/70 hover:text-white transition-colors">
                    Early Years
                  </Link>
                </li>
                <li>
                  <Link href="/academics/elementary" className="text-white/70 hover:text-white transition-colors">
                    Elementary Year
                  </Link>
                </li>
                <li>
                  <Link href="/academics/secondary" className="text-white/70 hover:text-white transition-colors">
                    Secondary School
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: Policies / Other */}
            <div className="lg:col-span-2 lg:pl-4 flex flex-col gap-4">
              <h3 
                className="text-white text-sm font-bold uppercase tracking-wider"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Other Links
              </h3>
              
              <div className="border-t border-white/10 w-full mb-2" />
              
              <ul className="flex flex-col gap-2.5 text-sm">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="text-white/70 hover:text-white transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/information/gallery" className="text-white/70 hover:text-white transition-colors">
                    School Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/information/policies" className="text-white/70 hover:text-white transition-colors">
                    School Policies
                  </Link>
                </li>
                <li>
                  <Link href="/information/newsletter" className="text-white/70 hover:text-white transition-colors">
                    School Newsletter
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ─── TIER 3: Copyright Bar ────────────────────────────── */}
      <div 
        style={{ background: "#0c0624" }} 
        className="py-6 text-white/40 text-xs border-t border-white/5"
      >
        <div className="container-site flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Copyright 2023 © KIA Lakeside Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white/60 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
