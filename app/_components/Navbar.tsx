"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Mission & Vision", href: "/about/mission-and-vision" },
      { label: "Core Values", href: "/about/core-values" },
      { label: "History", href: "/about/history" },
      { label: "Leadership Team", href: "/about/leadership" },
      { label: "Directors' Messages", href: "/about/messages" },
      { label: "Governance", href: "/about/governance" },
      { label: "School Song & Prayer", href: "/about/school-song" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "Why Choose KIA Lakeside", href: "/admissions/why-kia" },
      { label: "Admission Process", href: "/admissions/process" },
      { label: "Entrance Exam", href: "/admissions/entrance-exam" },
      { label: "Scholarship", href: "/admissions/scholarship" },
      { label: "Application Fee", href: "/admissions/fees" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Key Dates", href: "/academics/key-dates" },
      { label: "Curriculum Overview", href: "/academics/curriculum" },
      { label: "Early Years", href: "/academics/early-years" },
      { label: "Elementary Year", href: "/academics/elementary" },
      { label: "Secondary", href: "/academics/secondary" },
      { label: "E-Learning", href: "https://elearning.kialakeside.edu", external: true },
      { label: "Options Booklet", href: "/academics/options-booklet" },
    ],
  },
  {
    label: "Pastoral",
    href: "/pastoral",
    children: [
      { label: "Student Life", href: "/pastoral/student-life" },
      { label: "Counselling", href: "/pastoral/counselling" },
      { label: "Student Leadership", href: "/pastoral/student-leadership" },
      { label: "Merit & Award System", href: "/pastoral/merit-award" },
    ],
  },
  {
    label: "Enrichment",
    href: "/enrichment",
    children: [
      { label: "Sports", href: "/enrichment/sports" },
      { label: "Electives / Extramural", href: "/enrichment/electives" },
      { label: "Football Academy", href: "/enrichment/football-academy" },
    ],
  },
  {
    label: "Information",
    href: "/information",
    children: [
      { label: "School Calendar", href: "/information/calendar" },
      { label: "School Policies", href: "/information/policies" },
      { label: "School Newsletter", href: "/information/newsletter" },
      { label: "Careers", href: "/information/careers" },
      { label: "Gallery", href: "/information/gallery" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const closeDrawer = () => {
    setDrawerOpen(false);
    setOpenMobileMenu(null);
  };

  return (
    <>
      {/* Desktop + tablet navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white shadow-lg shadow-[#35267915]"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0" id="nav-logo">
              <Image
                src="/logo.png"
                alt="KIA Lakeside"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
              <div className="hidden sm:block">
                <p
                  className="text-sm font-bold leading-tight"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: scrolled ? "#352679" : "#ffffff",
                  }}
                >
                  KIA LAKESIDE
                </p>
                <p
                  className="text-[10px] tracking-widest uppercase"
                  style={{ color: scrolled ? "#FB8424" : "#ffa050" }}
                >
                  Excellence · Integrity · Achievement
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5" aria-label="Main navigation">
              {navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                return (
                  <div key={item.label} className="nav-item relative group">
                    <Link
                      href={item.href}
                      id={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`flex items-center gap-1 px-2.5 xl:px-4 py-2 text-xs xl:text-sm font-semibold rounded-md transition-colors duration-200 whitespace-nowrap ${scrolled
                          ? "text-[#352679] hover:bg-[#f0eeff] hover:text-[#352679]"
                          : "text-white hover:text-[#FB8424]"
                        }`}
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {item.label}
                      {hasChildren && (
                        <svg
                          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>

                    {/* Mega-menu dropdown */}
                    {hasChildren && (
                      <div className="mega-menu absolute top-full left-1/2 -translate-x-1/2 mt-1 w-56 bg-white rounded-xl shadow-2xl shadow-[#35267920] border border-[#e2e0ee] overflow-hidden">
                        <div className="p-2">
                          {item.children!.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              {...("external" in child && child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                              className="flex items-center gap-2.5 px-3 py-2 text-sm text-[#1a1633] hover:bg-[#f0eeff] hover:text-[#352679] rounded-lg transition-colors duration-150 group/item"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full bg-[#FB8424] flex-shrink-0 transition-transform duration-150 group-hover/item:scale-125"
                              />
                              {child.label}
                              {"external" in child && child.external && (
                                <svg className="w-3 h-3 ml-auto text-[#64607a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/admissions/process"
                id="nav-apply-cta"
                className="hidden lg:inline-flex items-center gap-1.5 px-3.5 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
                style={{
                  background: scrolled
                    ? "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)"
                    : "#ffffff",
                  color: scrolled ? "#ffffff" : "#352679",
                  boxShadow: scrolled
                    ? "0 4px 15px rgba(251, 132, 36, 0.4)"
                    : "0 4px 15px rgba(0, 0, 0, 0.15)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Apply Now
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Mobile hamburger */}
              <button
                id="nav-hamburger"
                aria-label="Open navigation menu"
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen(true)}
                className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-colors duration-200 ${scrolled ? "hover:bg-[#f0eeff]" : "hover:bg-white/10"
                  }`}
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-0.5 rounded-full transition-all duration-200 ${i === 1 ? "w-5 my-1" : "w-7"
                      } ${scrolled ? "bg-[#352679]" : "bg-white"}`}
                  />
                ))}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`nav-overlay lg:hidden ${drawerOpen ? "active" : ""}`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        ref={drawerRef}
        className={`mobile-drawer lg:hidden ${drawerOpen ? "open" : ""}`}
        aria-label="Mobile navigation"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between px-5 py-4 border-b border-[#e2e0ee]"
          style={{ background: "#352679" }}
        >
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="KIA Lakeside" width={36} height={36} className="h-9 w-auto" />
            <span
              className="text-sm font-bold text-white"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              KIA LAKESIDE
            </span>
          </div>
          <button
            aria-label="Close navigation menu"
            onClick={closeDrawer}
            className="w-9 h-9 flex items-center justify-center rounded-lg text-white hover:bg-white/10 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer body */}
        <div className="p-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const hasChildren = item.children && item.children.length > 0;
            return (
              <div key={item.label}>
                {hasChildren ? (
                  <button
                    id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                    onClick={() =>
                      setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)
                    }
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#352679] rounded-xl hover:bg-[#f0eeff] transition-colors"
                    style={{ fontFamily: "var(--font-outfit)" }}
                    aria-expanded={openMobileMenu === item.label}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 text-[#FB8424] transition-transform duration-200 ${openMobileMenu === item.label ? "rotate-180" : ""
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeDrawer}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#352679] rounded-xl hover:bg-[#f0eeff] transition-colors"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {item.label}
                  </Link>
                )}

                {hasChildren && openMobileMenu === item.label && (
                  <div className="ml-4 mt-1 flex flex-col gap-0.5">
                    {item.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeDrawer}
                        className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-[#1a1633] rounded-lg hover:bg-[#f0eeff] hover:text-[#352679] transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FB8424] flex-shrink-0" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Apply Now CTA */}
          <div className="mt-4 pt-4 border-t border-[#e2e0ee]">
            <Link
              href="/admissions/process"
              id="mobile-nav-apply-cta"
              onClick={closeDrawer}
              className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-bold text-white rounded-full transition-all duration-200 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
                boxShadow: "0 4px 15px rgba(251, 132, 36, 0.4)",
                fontFamily: "var(--font-outfit)",
              }}
            >
              Apply Now
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
