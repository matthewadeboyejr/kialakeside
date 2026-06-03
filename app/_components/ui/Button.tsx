import { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  id?: string;
  onClick?: () => void;
  external?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "text-white font-bold hover:scale-105 active:scale-95",
  secondary:
    "text-white font-bold hover:scale-105 active:scale-95",
  outline:
    "border-2 font-bold hover:scale-105 active:scale-95",
  ghost:
    "font-semibold hover:scale-105 active:scale-95",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-full gap-1.5",
  md: "px-6 py-3 text-sm rounded-full gap-2",
  lg: "px-8 py-4 text-base rounded-full gap-2.5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  id,
  onClick,
  external = false,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none";

  // Inline styles per variant (using brand colors directly)
  const inlineStyle: Record<Variant, React.CSSProperties> = {
    primary: {
      background: "linear-gradient(135deg, #352679 0%, #4a38a0 100%)",
      boxShadow: "0 4px 20px rgba(53, 38, 121, 0.35)",
      fontFamily: "var(--font-outfit)",
    },
    secondary: {
      background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
      boxShadow: "0 4px 20px rgba(251, 132, 36, 0.4)",
      fontFamily: "var(--font-outfit)",
    },
    outline: {
      borderColor: "#352679",
      color: "#352679",
      fontFamily: "var(--font-outfit)",
    },
    ghost: {
      color: "#352679",
      fontFamily: "var(--font-outfit)",
    },
  };

  const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        id={id}
        className={classes}
        style={inlineStyle[variant]}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      id={id}
      className={classes}
      style={inlineStyle[variant]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
