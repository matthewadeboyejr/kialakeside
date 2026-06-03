import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/app/_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | KIA Lakeside Academy",
  description:
    "Get in touch with KIA Lakeside Academy in Wuye, Abuja. Find our phone number, school email, address, and interactive Google Map location details.",
};

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Communications office */}
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=1600&auto=format&fit=crop"
          alt="Contact KIA Lakeside Academy Abuja"
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
                <span className="text-[#FB8424] font-semibold">Contact Us</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Get In Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: CONTACT DETAILS CARDS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Contact options">
        <div className="container-site">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {/* Address card */}
            <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                  Street Address
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  KIA Lakeside Academy,<br />
                  Plot 1176, Babafemi Ogundipe Boulevard,<br />
                  Cadastral Zone B03, Wuye, Abuja.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                School Campus
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                  Phone Numbers
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed">
                  Administration Desk:<br />
                  <strong className="text-primary">08039681838</strong>
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                Direct Call
              </div>
            </div>

            {/* Email card */}
            <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-secondary/10 group-hover:border-secondary/20 group-hover:text-secondary transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                  Email Addresses
                </h3>
                <p className="text-sm text-primary/70 leading-relaxed overflow-hidden text-ellipsis">
                  Admissions & Enquiries:<br />
                  <strong className="text-primary text-xs sm:text-sm">academy.lakeside@yahoo.com</strong>
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                Online Query
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto border-t border-primary/5 pt-16">
            {/* Google Map Section */}
            <div className="lg:col-span-6 bg-[#fcfbfe] border border-primary/10 rounded-3xl overflow-hidden min-h-[380px] relative shadow-sm flex flex-col justify-between">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1659998188554!2d7.447547175903912!3d9.002834089063259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bcf5df2bd53%3A0xe54bb3f7d14d3f57!2sKIA%20Lakeside%20Academy!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="KIA Lakeside Academy Google Maps Location"
              />
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-6 bg-white border border-primary/10 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                  Submit an Inquiry
                </h3>
                <p className="text-xs text-primary/60 mb-6 leading-relaxed">
                  Fill out the form below, and our administration staff will get in touch with you shortly.
                </p>

                <ContactForm />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
