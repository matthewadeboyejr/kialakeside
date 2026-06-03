import Link from "next/link";
import type { Metadata } from "next";
import Button from "./_components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found — KIA Lakeside",
};

export default function NotFound() {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e1249 0%, #352679 50%, #4a38a0 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-10 animate-float"
        style={{ background: "radial-gradient(circle, #FB8424, transparent)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-20 w-48 h-48 rounded-full opacity-10 animate-float"
        style={{ background: "radial-gradient(circle, #fff, transparent)", animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="container-site text-center relative z-10 py-20">
        <p
          className="text-8xl sm:text-9xl font-black text-white/10 mb-4 select-none"
          style={{ fontFamily: "var(--font-outfit)" }}
          aria-hidden="true"
        >
          404
        </p>
        <h1
          className="text-3xl sm:text-4xl font-bold text-white mb-4 -mt-8"
          style={{ fontFamily: "var(--font-outfit)" }}
        >
          Page Not Found
        </h1>
        <p className="text-white/65 mb-10 max-w-md mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Let&apos;s get you back on track.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button href="/" variant="secondary" size="md" id="notfound-home">
            Back to Home
          </Button>
          <Link
            href="/admissions/process"
            id="notfound-admissions"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white rounded-full border border-white/25 hover:bg-white/10 transition-all duration-200"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Admissions
          </Link>
        </div>
      </div>
    </section>
  );
}
