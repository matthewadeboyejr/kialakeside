import Link from "next/link";
import Button from "./ui/Button";

interface PageStubProps {
  title: string;
  breadcrumb: { label: string; href: string }[];
  description?: string;
}

export default function PageStub({ title, breadcrumb, description }: PageStubProps) {
  return (
    <>
      {/* Page hero */}
      <section
        className="pt-40 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #352679 0%, #4a38a0 100%)",
        }}
      >
        {/* Decorative orb */}
        <div
          className="absolute -right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FB8424, transparent)" }}
          aria-hidden="true"
        />

        <div className="container-site relative z-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 flex-wrap">
              <li>
                <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                  {i === breadcrumb.length - 1 ? (
                    <span className="text-sm text-[#FB8424] font-semibold">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="text-sm text-white/60 hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <h1
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            {title}
          </h1>
          {description && (
            <p className="text-lg text-white/70 max-w-xl">{description}</p>
          )}
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
          <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 50h1440V25C1200 0 960 50 720 25S240 0 0 25V50z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Coming Soon body */}
      <section className="section-pad">
        <div className="container-site max-w-2xl text-center mx-auto">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8"
            style={{ background: "linear-gradient(135deg, #f0eeff, #fff3e5)" }}
          >
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="#352679" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2
            className="text-2xl font-bold text-[#1a1633] mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Page Coming Soon
          </h2>
          <p className="text-[#64607a] mb-8 leading-relaxed">
            We&apos;re currently preparing this page with detailed content. Check back soon,
            or get in touch with us directly for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary" size="md" id="stub-back-home">
              Back to Home
            </Button>
            <Button href="/admissions/process" variant="secondary" size="md" id="stub-apply-now">
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
