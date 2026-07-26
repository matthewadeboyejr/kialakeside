import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../_components/ui/SectionHeading";
import Button from "../_components/ui/Button";
import ContactForm from "../_components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | KIA Lakeside Academy",
  description:
    "Get in touch with KIA Lakeside Academy in Wuye, Abuja. Find our street address, phone numbers, WhatsApp chat, admissions email, general enquiries email, office hours, social media links, embedded Google Map, and contact form.",
};

const socialLinks = [
  {
    name: "Facebook",
    href: "https://web.facebook.com/KialakesideAcademy/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/kialakesideacademy1/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
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
            <span className="text-white">Contact Us</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                We&apos;re Here to Help
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Contact Us
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                Have questions about admissions, school tours, or academic programmes? Reach out to our administration desk via phone, email, WhatsApp, or visit our campus in Wuye, Abuja.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/2348039681838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white rounded-full bg-[#25D366] hover:bg-[#1ebd59] transition-colors shadow-lg font-display"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <Button href="/admissions/apply" variant="secondary" size="lg">
                  Apply to KIA Lakeside
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/conducive-learning-environment.jpg"
                    alt="KIA Lakeside Academy Campus Wuye Abuja"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Welcome to Campus
                  </p>
                  <p className="text-xl font-bold font-display">
                    Wuye, Abuja, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. CONTACT DETAILS & DIRECT CONTACT CHANNELS
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Contact Information"
            title="Reach Out to Our Team"
            subtitle="Explore our direct communication channels, campus address, and office operating hours:"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {/* 1. Full Street Address */}
            <div className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display inline-block">
                  Campus Address
                </span>
                <h3 className="text-xl font-bold text-[#1a1633] font-display">
                  Full Street Address
                </h3>
                <p className="text-[#64607a] text-sm leading-relaxed">
                  KIA Lakeside Academy,<br />
                  Plot 1176, Babafemi Ogundipe Boulevard,<br />
                  Cadastral Zone B03, Wuye, Abuja, Nigeria.
                </p>
              </div>
            </div>

            {/* 2. Telephone Numbers */}
            <div className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display inline-block">
                  Phone Support
                </span>
                <h3 className="text-xl font-bold text-[#1a1633] font-display">
                  Telephone Numbers
                </h3>
                <div className="space-y-1 text-sm text-[#64607a]">
                  <p>Main Helpline: <a href="tel:+2348039681838" className="font-bold text-[#352679] hover:text-[#FB8424]">+234 803 968 1838</a></p>
                  <p>Admissions Desk: <a href="tel:+2348039681838" className="font-bold text-[#352679] hover:text-[#FB8424]">+234 803 968 1838</a></p>
                </div>
              </div>
            </div>

            {/* 3. WhatsApp Button */}
            <div className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 uppercase tracking-wider font-display inline-block">
                  Instant Messaging
                </span>
                <h3 className="text-xl font-bold text-[#1a1633] font-display">
                  WhatsApp Support
                </h3>
                <p className="text-[#64607a] text-sm leading-relaxed">
                  Chat directly with our admissions officer for quick answers, tour bookings, and document guidance.
                </p>
              </div>

              <div className="pt-4">
                <a
                  href="https://wa.me/2348039681838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#1ebd59] transition-colors font-display"
                >
                  Open WhatsApp Chat &rarr;
                </a>
              </div>
            </div>

            {/* 4. Admissions Email */}
            <div className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display inline-block">
                  Admissions
                </span>
                <h3 className="text-xl font-bold text-[#1a1633] font-display">
                  Admissions Email
                </h3>
                <p className="text-[#64607a] text-sm leading-relaxed overflow-hidden text-ellipsis">
                  For application forms, entrance exams, and fee inquiries:<br />
                  <a href="mailto:academy.lakeside@yahoo.com" className="font-bold text-[#352679] hover:text-[#FB8424] text-xs sm:text-sm">
                    academy.lakeside@yahoo.com
                  </a>
                </p>
              </div>
            </div>

            {/* 5. General Enquiries Email */}
            <div className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display inline-block">
                  General Info
                </span>
                <h3 className="text-xl font-bold text-[#1a1633] font-display">
                  General Enquiries Email
                </h3>
                <p className="text-[#64607a] text-sm leading-relaxed overflow-hidden text-ellipsis">
                  For general administrative questions & school affairs:<br />
                  <a href="mailto:academy.lakeside@yahoo.com" className="font-bold text-[#352679] hover:text-[#FB8424] text-xs sm:text-sm">
                    academy.lakeside@yahoo.com
                  </a>
                </p>
              </div>
            </div>

            {/* 6. Office Hours */}
            <div className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display inline-block">
                  Operating Hours
                </span>
                <h3 className="text-xl font-bold text-[#1a1633] font-display">
                  Office Hours
                </h3>
                <div className="space-y-1 text-sm text-[#64607a]">
                  <p><strong>Monday – Friday:</strong> 7:30 AM – 4:30 PM</p>
                  <p><strong>Saturday:</strong> 9:00 AM – 1:00 PM</p>
                  <p><strong>Sunday & Holidays:</strong> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. SOCIAL MEDIA LINKS BAR
         ---------------------------------------------------- */}
      <section className="py-12 bg-[#f8f7ff] border-y border-[#e2e0ee]">
        <div className="container-site text-center max-w-4xl mx-auto space-y-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display inline-block">
            Connect Online
          </span>

          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1633] font-display">
            Social Media Links
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white border border-[#e2e0ee] text-[#352679] hover:bg-[#352679] hover:text-white transition-all duration-300 shadow-sm font-display text-sm font-bold"
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          4. EMBEDDED GOOGLE MAP & CONTACT FORM (2-COLUMN)
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Visit & Message"
            title="Location & Direct Contact Form"
            subtitle="Locate our campus using the interactive Google Map below or send an inquiry directly:"
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
            {/* Embedded Google Map */}
            <div className="lg:col-span-6 bg-[#f8f7ff] border border-[#e2e0ee] rounded-3xl overflow-hidden min-h-[450px] relative shadow-xl flex flex-col justify-between group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1659998188554!2d7.447547175903912!3d9.002834089063259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bcf5df2bd53%3A0xe54bb3f7d14d3f57!2sKIA%20Lakeside%20Academy!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
                title="Embedded Google Map Location of KIA Lakeside Academy"
              />
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-6 bg-[#f8f7ff] border border-[#e2e0ee] rounded-3xl p-8 md:p-10 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#1a1633] mb-2 font-display">
                  Contact Form
                </h3>
                <p className="text-xs md:text-sm text-[#64607a] mb-6 leading-relaxed">
                  Send your question, feedback, or school tour request directly to our front desk:
                </p>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          5. CLOSING CALL-TO-ACTION BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Open Door Policy
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            We look forward to welcoming you and your family to KIA Lakeside Academy.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply to KIA Lakeside
            </Button>
            <a
              href="https://wa.me/2348039681838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-bold text-white rounded-full bg-[#25D366] hover:bg-[#1ebd59] transition-colors shadow-lg font-display"
            >
              Contact via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
