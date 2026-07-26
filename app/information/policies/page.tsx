"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SectionHeading from "../../_components/ui/SectionHeading";
import Button from "../../_components/ui/Button";

interface PolicyItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullContent: string[];
  keyPoints: string[];
}

const schoolPolicies: PolicyItem[] = [
  {
    id: "admissions",
    title: "Admissions Policy",
    category: "Admissions & Entry",
    shortDescription: "Guidelines and criteria for prospective student enrolment, placement testing, age requirements, and equal opportunity standards.",
    fullContent: [
      "KIA Lakeside Academy maintains a non-discriminatory admissions policy welcoming students of all backgrounds who demonstrate academic readiness and alignment with our school values.",
      "Applicants undergo age-appropriate screening assessments (Early Years observational play, Primary literacy/numeracy test, and Secondary subject placement exams in Mathematics and English).",
      "Official entry requirements include submitted birth certificates, previous academic transcripts, medical immunisation records, and parent/guardian interviews."
    ],
    keyPoints: [
      "Open to all qualified applicants regardless of gender or nationality",
      "Standardised entrance assessment & placement evaluation",
      "Compulsory submission of previous school records & medical fitness forms"
    ],
  },
  {
    id: "child-protection",
    title: "Child Protection Policy",
    category: "Safeguarding",
    shortDescription: "Comprehensive measures ensuring the safety, emotional well-being, and physical protection of every child on campus.",
    fullContent: [
      "Child welfare is our paramount priority. KIA Lakeside Academy enforces a robust child protection mandate aligned with international safeguarding frameworks.",
      "All staff members undergo mandatory annual child protection training and are legally bound to report any indicators of neglect, physical harm, or psychological distress immediately to the Designated Safeguarding Lead (DSL).",
      "We maintain confidential reporting channels and strict physical safety guidelines across all classrooms, athletic fields, and school transport buses."
    ],
    keyPoints: [
      "Designated Safeguarding Lead (DSL) overseeing campus welfare",
      "Mandatory staff background checks & annual safeguarding certification",
      "Zero-tolerance protocol for child endangerment or neglect"
    ],
  },
  {
    id: "safeguarding",
    title: "Safeguarding Policy",
    category: "Safeguarding",
    shortDescription: "Strict staff vetting, visitor verification protocols, campus security monitoring, and emergency response procedures.",
    fullContent: [
      "Our Safeguarding Policy covers campus physical security, electronic access control, visitor verification, and emergency management.",
      "All campus visitors must present valid government photo identification, wear designated visitor badges, and remain escorted by authorized personnel at all times.",
      "CCTV surveillance monitors common areas 24/7, and regular fire drills and evacuation rehearsals are conducted termly."
    ],
    keyPoints: [
      "24/7 CCTV campus monitoring & security check-in procedures",
      "Strict visitor badge verification & escort requirement",
      "Regular emergency evacuation & lockdown rehearsals"
    ],
  },
  {
    id: "behaviour",
    title: "Behaviour Policy",
    category: "Conduct & Character",
    shortDescription: "Expectations for respectful student conduct, restorative discipline frameworks, merit rewards, and character development.",
    fullContent: [
      "We cultivate a culture of respect, self-discipline, and personal responsibility guided by our core values (KIALA).",
      "Positive behaviors are celebrated through our digital Merit System, Star of the Week recognitions, and House Points.",
      "Disciplinary concerns follow a restorative approach involving reflection letters, tutor counseling sessions, and parent-teacher collaboration."
    ],
    keyPoints: [
      "Positive reinforcement via digital merits & termly awards",
      "Restorative discipline focusing on reflection and personal growth",
      "Collaborative parent-teacher behavior support plans"
    ],
  },
  {
    id: "anti-bullying",
    title: "Anti-Bullying Policy",
    category: "Student Welfare",
    shortDescription: "Zero-tolerance approach to physical, verbal, social, or cyberbullying, fostering an inclusive, supportive environment.",
    fullContent: [
      "KIA Lakeside Academy is an active anti-bullying zone. We maintain a zero-tolerance stance against any form of bullying, harassment, intimidation, or exclusion.",
      "Students are educated on empathy, peer support, and safe reporting channels. Peer Mentors and School Counselors provide immediate support.",
      "Reported incidents trigger prompt investigation, counseling interventions, parental notification, and strict disciplinary measures where warranted."
    ],
    keyPoints: [
      "Zero-tolerance stance across all age groups and campus areas",
      "Dedicated confidential peer & counselor reporting channels",
      "Comprehensive anti-bullying awareness during assembly workshops"
    ],
  },
  {
    id: "attendance",
    title: "Attendance Policy",
    category: "School Regulations",
    shortDescription: "Punctuality expectations, mandatory attendance tracking, absence notification protocols, and leave requests.",
    fullContent: [
      "Regular attendance is critical to academic success. Morning registration takes place promptly at 7:45 AM daily.",
      "Parents must notify the school office by 8:15 AM in cases of student illness or emergency absence.",
      "Unapproved absences or chronic lateness trigger attendance reviews with class tutors and section heads."
    ],
    keyPoints: [
      "Daily registration at 7:45 AM; prompt absence notification by 8:15 AM",
      "Minimum 95% attendance requirement per academic term",
      "Formal leave request procedure for planned emergency absences"
    ],
  },
  {
    id: "ict-use",
    title: "ICT Acceptable Use Policy",
    category: "Digital Technology",
    shortDescription: "Ethical guidelines for computer lab usage, internet access, software compliance, and digital security on school devices.",
    fullContent: [
      "Our ICT infrastructure provides students with powerful learning tools. Users must adhere to ethical digital citizenship standards.",
      "Students are assigned filtered internet access accounts. Accessing inappropriate material, unauthorized software installation, or tampering with hardware is strictly prohibited.",
      "Cybersecurity protocols require secure password management and respectful online communication on all school LMS platforms."
    ],
    keyPoints: [
      "Filtered high-speed internet access on all educational devices",
      "Strict prohibition of unauthorized downloads or system modification",
      "Digital citizenship & password security compliance"
    ],
  },
  {
    id: "ai-policy",
    title: "AI Responsible Use Policy",
    category: "Digital Technology",
    shortDescription: "Directives for ethical artificial intelligence interaction, academic integrity, transparent research, and responsible tech habits.",
    fullContent: [
      "AI tools are integrated as learning aids to foster critical thinking, problem-solving, and digital literacy.",
      "Students must maintain academic honesty; AI outputs may not be submitted as original student work without explicit attribution.",
      "Teachers guide learners on evaluating AI-generated data, identifying bias, and using AI ethically for research assistance."
    ],
    keyPoints: [
      "AI tools used for research assistance and idea brainstorming",
      "Mandatory attribution & prohibition of direct AI content plagiarism",
      "Educating students on AI ethics, critical evaluation, and data privacy"
    ],
  },
  {
    id: "assessment",
    title: "Assessment Policy",
    category: "Academic Governance",
    shortDescription: "Standards for continuous assessment, term examinations, grading scales, reporting, and academic progress monitoring.",
    fullContent: [
      "Academic evaluation combines Continuous Assessment (CA - 40%) comprising quizzes, classwork, and practical projects with End-of-Term Examinations (60%).",
      "Comprehensive report cards are issued at mid-term and term-end, providing detailed subject rubrics and tutor commentary.",
      "Students requiring academic reinforcement receive structured intervention plans and study support."
    ],
    keyPoints: [
      "40% Continuous Assessment (CA) + 60% End-of-Term Examinations",
      "Detailed digital report cards issued twice per term",
      "Structured academic support & targeted intervention tutorials"
    ],
  },
  {
    id: "uniform",
    title: "Uniform Policy",
    category: "School Regulations",
    shortDescription: "Official school uniform guidelines, dress codes for formal assemblies, sportswear requirements, and personal grooming standards.",
    fullContent: [
      "Our school uniform promotes pride, equality, and belonging. All students must wear the complete prescribed KIA Lakeside uniform daily.",
      "Formal assembly attire includes the school blazer, tie, white shirt, and polished black leather shoes.",
      "Physical Education (PE) kit and House sports t-shirts are mandatory during sports periods and inter-house competitions."
    ],
    keyPoints: [
      "Strict compliance with daily prescribed uniform & footwear",
      "Formal blazer & tie required for Monday assemblies & school events",
      "Official PE kit required for sports & physical education sessions"
    ],
  },
  {
    id: "health-safety",
    title: "Health & Safety Policy",
    category: "Health & Safety",
    shortDescription: "Campus hygiene, first-aid clinic management, aquatics safety protocols, sanitation practices, and emergency evacuations.",
    fullContent: [
      "KIA Lakeside Academy operates a fully equipped campus clinic staffed by registered medical nurses.",
      "Aquatic activities in the school swimming pool are strictly supervised by certified lifeguards and swimming coaches.",
      "Regular health screenings, sanitation audits, and first-aid kits are maintained across all laboratory and sports facilities."
    ],
    keyPoints: [
      "On-site medical clinic staffed by certified registered nurses",
      "Certified lifeguard supervision for all aquatic & swimming sessions",
      "Comprehensive sanitation protocols & laboratory safety measures"
    ],
  },
  {
    id: "complaints",
    title: "Complaints Procedure",
    category: "Governance & Comms",
    shortDescription: "Clear, structured feedback and grievance resolution steps for parents, guardians, students, and staff members.",
    fullContent: [
      "We value transparent communication. Concerns or complaints are handled promptly, confidentially, and constructively.",
      "Stage 1 involves informal discussion with the Class Tutor or Subject Teacher. Stage 2 escalates to the Section Head or Vice Principal.",
      "Stage 3 involves a formal written review by the Principal and Board of Governors if unresolved at earlier stages."
    ],
    keyPoints: [
      "3-stage resolution framework: Tutor -> Section Head -> Principal/Board",
      "Prompt acknowledgment within 24-48 business hours",
      "Confidential logging and resolution tracking"
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    category: "Data & Privacy",
    shortDescription: "Protection of personal data, student records, portal credentials, image permissions, and information privacy compliance.",
    fullContent: [
      "We strictly safeguard personal data belonging to students, parents, and staff in accordance with data protection regulations.",
      "Student academic records and medical histories are stored securely on encrypted databases accessible only by authorized personnel.",
      "Media consent forms are required from parents prior to publishing student photos or videos in school publications or media."
    ],
    keyPoints: [
      "Encrypted digital storage of student records & academic data",
      "Explicit parental media consent required for photos & video features",
      "Strict non-disclosure of personal contact information to third parties"
    ],
  },
];

export default function SchoolPoliciesPage() {
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyItem | null>(null);

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
            <Link href="/information" className="hover:text-white transition-colors">
              Information
            </Link>
            <span>/</span>
            <span className="text-white">School Policies</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs md:text-sm text-amber-300 font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#FB8424] animate-ping" />
                Ethical Governance & Safety
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                School Policies
              </h1>

              <p className="text-lg md:text-xl text-purple-100/90 leading-relaxed max-w-2xl font-light">
                Explore the official regulations, child protection standards, academic integrity guidelines, and administrative procedures governing KIA Lakeside Academy.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/contact" variant="secondary" size="lg">
                  Contact Governance Office
                </Button>
                <Button href="/about/governance" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
                  View Board Governance
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/school-images/conducive-learning-environment.jpg"
                    alt="KIA Lakeside Academy Governance Handbook"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#352679]/80 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-6 text-white">
                  <p className="text-sm font-medium text-amber-300 uppercase tracking-widest mb-1">
                    Transparent Governance
                  </p>
                  <p className="text-xl font-bold font-display">
                    Safe & Structured Learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          2. SCHOOL POLICIES GRID (INTERACTIVE MODAL TRIGGER)
         ---------------------------------------------------- */}
      <section className="section-pad bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Policy Framework"
            title="Official School Policies"
            subtitle="Click 'View Full Policy' on any category below to read detailed guidelines and policy standards:"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {schoolPolicies.map((policy) => (
              <div
                key={policy.id}
                onClick={() => setSelectedPolicy(policy)}
                className="p-8 rounded-3xl bg-[#f8f7ff] border border-[#e2e0ee] hover:border-[#352679]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#352679] text-white flex items-center justify-center group-hover:bg-[#FB8424] transition-colors duration-300 shadow-md">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424]/10 text-[#FB8424] border border-[#FB8424]/20 uppercase tracking-wider font-display">
                      {policy.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1a1633] font-display">
                    {policy.title}
                  </h3>

                  <p className="text-[#64607a] text-sm leading-relaxed">
                    {policy.shortDescription}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPolicy(policy);
                  }}
                  className="pt-6 border-t border-gray-100 mt-6 flex items-center gap-1.5 text-xs font-bold text-[#352679] group-hover:text-[#FB8424] transition-colors w-full text-left font-display"
                >
                  View Full Policy &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------
          3. FULL POLICY MODAL POPUP
         ---------------------------------------------------- */}
      {selectedPolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#352679] text-white p-6 md:p-8 flex items-start justify-between relative">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FB8424] text-white uppercase tracking-wider font-display inline-block mb-3">
                  {selectedPolicy.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold font-display leading-tight">
                  {selectedPolicy.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedPolicy(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors flex-shrink-0 ml-4"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-[#4a4660]">
              <div className="space-y-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#352679] font-display">
                  Policy Summary & Overview
                </h4>
                {selectedPolicy.fullContent.map((paragraph, i) => (
                  <p key={i} className="text-sm md:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="bg-[#f8f7ff] p-6 rounded-2xl border border-[#e2e0ee] space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#FB8424] font-display">
                  Key Compliance Highlights
                </h4>
                <ul className="space-y-2">
                  {selectedPolicy.keyPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs md:text-sm">
                      <span className="w-2 h-2 rounded-full bg-[#FB8424] mt-1.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-gray-500 font-medium">
                Official Document &bull; KIA Lakeside Governance Code
              </div>
              <div className="flex gap-3">
                <Button
                  href="/contact"
                  variant="secondary"
                  size="sm"
                  onClick={() => setSelectedPolicy(null)}
                >
                  Request Official PDF Handbook
                </Button>
                <button
                  type="button"
                  onClick={() => setSelectedPolicy(null)}
                  className="px-4 py-2 text-xs font-bold text-gray-600 hover:text-gray-900 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ----------------------------------------------------
          4. CLOSING CALL-TO-ACTION BANNER
         ---------------------------------------------------- */}
      <section className="relative section-pad bg-gradient-to-br from-[#352679] via-[#261c5a] to-[#1a1633] text-white text-center overflow-hidden">
        <div className="container-site relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold uppercase tracking-widest text-amber-300">
            Commitment to Safety & Integrity
          </div>

          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold font-display leading-tight text-white">
            Upholding safety, ethical conduct, and excellence across every aspect of academy life.
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button href="/admissions/apply" variant="secondary" size="lg">
              Apply to KIA Lakeside
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="!border-white !text-white hover:!bg-white/10">
              Request Policy Handbooks
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
