"use client";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          className="w-full px-4 py-2.5 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary text-primary"
        />
        <input 
          type="email" 
          placeholder="Your Email" 
          required 
          className="w-full px-4 py-2.5 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary text-primary"
        />
      </div>
      <input 
        type="text" 
        placeholder="Subject" 
        required 
        className="w-full px-4 py-2.5 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary text-primary"
      />
      <textarea 
        placeholder="Your Message" 
        rows={4} 
        required 
        className="w-full px-4 py-2.5 border border-primary/15 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-secondary text-primary resize-none"
      />
      <button 
        type="submit"
        className="w-full py-3 text-xs sm:text-sm font-bold text-white rounded-xl hover:scale-102 active:scale-98 transition-all duration-200 shadow-md shadow-primary/20"
        style={{
          background: "linear-gradient(135deg, #352679 0%, #261c5a 100%)",
          fontFamily: "var(--font-outfit)",
        }}
      >
        Send Message ✉️
      </button>
    </form>
  );
}
