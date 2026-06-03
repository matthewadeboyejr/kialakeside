"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
    >
      <input
        type="email"
        placeholder="Your email address"
        required
        className="flex-1 px-5 py-3 border border-primary/15 rounded-xl text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-primary"
      />
      <button
        type="submit"
        className="px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-secondary/20 flex-shrink-0"
        style={{
          background: "linear-gradient(135deg, #FB8424 0%, #e06e10 100%)",
          fontFamily: "var(--font-outfit)",
        }}
      >
        Subscribe Now ✉️
      </button>
    </form>
  );
}
