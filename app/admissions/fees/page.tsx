import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tuition & Fees | KIA Lakeside Academy",
  description:
    "Review our tuition structure, non-refundable application fee requirements, payment policies, and bank transfer credentials.",
};

const bankAccounts = [
  {
    bankName: "Guaranty Trust Bank (GTBank)",
    accountName: "KIA Lakeside Academy Limited",
    accountNoNaira: "0123456789",
    accountNoUsd: "0123456790",
    sortCode: "058152052",
  },
  {
    bankName: "Zenith Bank PLC",
    accountName: "KIA Lakeside Academy Limited",
    accountNoNaira: "1012345678",
    accountNoUsd: "1012345679",
    sortCode: "057150012",
  },
];

export default function Page() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1: HERO BANNER
      ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[40vh] min-h-[320px] flex items-end pb-12 overflow-hidden">
        {/* Background Image: Finance planning / Campus context */}
        <Image
          src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop"
          alt="Tuition and school fee financial details"
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
              <li>
                <Link href="/admissions" className="text-white/60 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-3 h-3 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#FB8424] font-semibold">Tuition & Fees</span>
              </li>
            </ol>
          </nav>

          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
            Financial Information
          </span>
          <h1
            className="text-4xl sm:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Tuition & Fees
          </h1>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2: APPLICATION FEES & BANKS
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white" aria-label="Application fees and accounts">
        <div className="container-site">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#FB8424] mb-2 block" style={{ fontFamily: "var(--font-outfit)" }}>
              Registration Costs
            </span>
            <h2 className="text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
              Application & Bank Details
            </h2>
            <p className="text-sm sm:text-base text-primary/70 leading-relaxed">
              We charge a non-refundable registration and application fee for processing candidate folders. All payments must be made to official school bank accounts.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Box: Fee details */}
            <div className="lg:col-span-5 bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-secondary mb-4 block" style={{ fontFamily: "var(--font-outfit)" }}>
                  Processing Fee
                </span>
                <h3 className="text-2xl font-bold text-primary mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
                  Application Forms
                </h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                    <span className="text-sm text-primary/70 font-semibold">Primary Section Application</span>
                    <span className="text-lg font-bold text-primary">₦15,000</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-primary/5">
                    <span className="text-sm text-primary/70 font-semibold">Secondary Section Application</span>
                    <span className="text-lg font-bold text-primary">₦20,000</span>
                  </div>
                </div>

                <div className="mt-8 bg-white border border-primary/5 p-4 rounded-xl text-xs text-primary/60 leading-relaxed">
                  📢 <strong>Note:</strong> Registration fee includes access to basic assessment brochures and does not guarantee placement. Placement is subject to entrance exam results.
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100/50 text-[10px] text-gray-400 uppercase tracking-widest font-semibold">
                KIA Lakeside Academy Admissions
              </div>
            </div>

            {/* Right Box: Bank Details */}
            <div className="lg:col-span-7 space-y-6">
              {bankAccounts.map((account) => (
                <div 
                  key={account.bankName} 
                  className="bg-white border border-primary/15 rounded-3xl p-6 sm:p-8 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                >
                  {/* Subtle decorative watermark */}
                  <div className="absolute -right-6 -bottom-6 text-7xl select-none opacity-[0.02] text-primary group-hover:scale-110 transition-transform duration-500">
                    🏦
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-primary mb-4 flex items-center gap-2" style={{ fontFamily: "var(--font-outfit)" }}>
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary block" />
                    {account.bankName}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-primary/75">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-primary/45 block mb-1">
                        Account Name
                      </span>
                      <span className="font-semibold text-primary">{account.accountName}</span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-primary/45 block mb-1">
                        Sort Code
                      </span>
                      <span className="font-mono text-primary">{account.sortCode}</span>
                    </div>

                    <div className="sm:col-span-2 pt-2 border-t border-primary/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-primary/45 block mb-1">
                          Naira Account Number
                        </span>
                        <span className="font-mono font-bold text-primary tracking-wider">{account.accountNoNaira}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-primary/45 block mb-1">
                          USD Account Number (Domiciliary)
                        </span>
                        <span className="font-mono font-bold text-primary tracking-wider">{account.accountNoUsd}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3: PAYMENT POLICY (2-COLUMN)
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f9fb] border-t border-primary/5" aria-label="Fee inclusion and exclusion rules">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Column 1: Payment Schedule & Installment Policy */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Payment Policy
                </h2>
                <p className="text-sm text-primary/75 leading-relaxed">
                  Parents are expected to complete all financial obligations to support school operations and ensure academic continuity:
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white border border-primary/10 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    ⏰ Term Resumption Due Dates
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed mb-4">
                    All tuition and administrative fees must be paid in full on or before the first day of academic resumption. Access to classroom materials and attendance requires financial clearance.
                  </p>
                  <hr className="border-primary/5 my-3" />
                  <h3 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    🗓️ Installment Structure Requests
                  </h3>
                  <p className="text-sm text-primary/70 leading-relaxed">
                    Under specialized terms, parents may request a split payment plan. Such requests must be written to the School Director of Finance and approved in writing at least 14 days before school resumption.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 2: Inclusions and Exclusions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-outfit)" }}>
                  Fee Inclusions
                </h2>
                <p className="text-sm text-primary/75 leading-relaxed">
                  Understanding what is covered by standard term billing helps families plan accordingly:
                </p>
              </div>

              <div className="bg-white border border-primary/10 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h4 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    ✅ Included in Term Tuition
                  </h4>
                  <ul className="space-y-2.5 text-sm text-primary/70">
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Standard Classroom Instruction and Curriculum material access.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Computer/ICT and Science laboratory session utilities.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Access to section libraries (Primary and Secondary).</span>
                    </li>
                  </ul>
                </div>

                <hr className="border-primary/5" />

                <div>
                  <h4 className="text-base font-bold text-primary mb-3" style={{ fontFamily: "var(--font-outfit)" }}>
                    ❌ Excluded Costs (Billed Separately)
                  </h4>
                  <ul className="space-y-2.5 text-sm text-primary/70">
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold font-mono flex-shrink-0 mt-0.5">•</span>
                      <span>Personal uniform items and physical education tracksuits.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold font-mono flex-shrink-0 mt-0.5">•</span>
                      <span>Prescribed personal student textbooks and stationary.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold font-mono flex-shrink-0 mt-0.5">•</span>
                      <span>School bus transit services and school cafeteria lunch subscriptions.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 font-bold font-mono flex-shrink-0 mt-0.5">•</span>
                      <span>External examination fees (WAEC, NECO, IGCSE clearance).</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 4: FINANCE HELP CTA
      ═══════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-primary/5" aria-label="Finance desk support">
        <div className="container-site max-w-4xl mx-auto">
          <div className="bg-[#fcfbfe] border border-primary/10 rounded-3xl p-8 sm:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-outfit)" }}>
                Need to submit payment proof or clarify invoices?
              </h3>
              <p className="text-sm text-primary/60 leading-relaxed">
                Contact the accounts desk at <strong className="text-primary">academy.lakeside@yahoo.com</strong> or call <strong className="text-primary">08039681838</strong>. Please always send a digital copy of payment slips for auditing.
              </p>
            </div>

            <div className="flex-shrink-0">
              <Link
                href="mailto:academy.lakeside@yahoo.com?subject=KIA%20Lakeside%20Payment%20Proof"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-bold text-white rounded-xl hover:scale-105 active:scale-95 transition-all duration-200 shadow-md shadow-primary/20"
                style={{
                  background: "linear-gradient(135deg, #352679 0%, #261c5a 100%)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                Submit Payment Slip 🧾
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
