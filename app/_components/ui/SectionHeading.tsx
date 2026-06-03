interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className="text-xs font-bold tracking-widest uppercase mb-3"
          style={{
            color: "#FB8424",
            fontFamily: "var(--font-outfit)",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
          center ? "heading-underline heading-underline-center" : "heading-underline"
        }`}
        style={{
          color: light ? "#ffffff" : "#1a1633",
          fontFamily: "var(--font-outfit)",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg leading-relaxed max-w-2xl mt-6 ${
            center ? "mx-auto" : ""
          }`}
          style={{ color: light ? "rgba(255,255,255,0.75)" : "#64607a" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
