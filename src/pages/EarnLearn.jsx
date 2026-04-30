import { useState } from "react";
import PageHero from "../components/PageHero";
import aboutvssintro from "../assets/aboutvsspune/aboutvss.png";
import earnImg from "../assets/services/earn.png";
import {
  FaHandshake, FaLaptopCode, FaClock, FaChartLine,
  FaUserTie, FaBriefcase, FaChevronDown,
  FaArrowRight, FaStar, FaHeart, FaGlobe,
  FaBook, FaClipboard, FaChalkboardTeacher, FaDatabase,
  FaCalendarAlt, FaUserFriends, FaCode, FaTools,
} from "react-icons/fa";

import site1 from "../assets/aboutvsspune/website/paragon.png";
import site2 from "../assets/aboutvsspune/website/kalasanman.png";
import site3 from "../assets/aboutvsspune/website/bmm.png";
import site4 from "../assets/aboutvsspune/website/bmm1.png";
import site5 from "../assets/aboutvsspune/website/A2MM.png";

const benefits = [
  { icon: <FaHandshake />,  title: "Financial Independence", desc: "Students earn to support their own education and daily expenses, reducing family burden.",   color: "from-orange-400 to-orange-600"   },
  { icon: <FaLaptopCode />, title: "Real-world Experience",  desc: "Hands-on work in real projects builds practical skills that classrooms can't teach.",         color: "from-blue-400 to-blue-600"       },
  { icon: <FaChartLine />,  title: "Skill Development",      desc: "Technical, communication and leadership skills developed through meaningful work.",            color: "from-emerald-400 to-emerald-600" },
  { icon: <FaClock />,      title: "Time Management",        desc: "Balancing work and study builds discipline, efficiency and lifelong habits.",                  color: "from-purple-400 to-purple-600"   },
  { icon: <FaUserTie />,    title: "Confidence Building",    desc: "Taking responsibility at work builds self-reliance, confidence and a growth mindset.",         color: "from-rose-400 to-rose-600"       },
  { icon: <FaBriefcase />,  title: "Career Readiness",       desc: "Industry exposure and real projects prepare students for professional life ahead.",            color: "from-amber-400 to-amber-600"     },
];

const workTypes = [
  { label: "Library Assistance",        icon: <FaBook />              },
  { label: "Administrative Support",    icon: <FaClipboard />         },
  { label: "Teaching & Mentoring",      icon: <FaChalkboardTeacher /> },
  { label: "Data Entry & Digital",      icon: <FaDatabase />          },
  { label: "Event Management",          icon: <FaCalendarAlt />       },
  { label: "Companionship for Elderly", icon: <FaUserFriends />       },
  { label: "Website Development",       icon: <FaCode />              },
  { label: "On-campus Maintenance",     icon: <FaTools />             },
];

const websiteData = [
  { img: site1, name: "Paragon",    bg: "bg-blue-50",   border: "border-blue-100"   },
  { img: site2, name: "Kalasanman", bg: "bg-orange-50", border: "border-orange-100" },
  { img: site3, name: "BMM",        bg: "bg-green-50",  border: "border-green-100"  },
  { img: site4, name: "BMM Plus",   bg: "bg-purple-50", border: "border-purple-100" },
  { img: site5, name: "A2MM",       bg: "bg-rose-50",   border: "border-rose-100"   },
];

const faqs = [
  { q: "What is the Samiti Earn & Learn program?",     a: "All Samiti students are expected to participate in the VSS Earn & Learn program. It provides part-time work opportunities within the Samiti or through external collaborations, allowing students to support themselves while continuing their education." },
  { q: "Who is eligible for the Earn & Learn program?",a: "All students residing at VSS hostels are expected to participate in the Earn & Learn program." },
  { q: "What kind of work is offered?",                a: ["Library assistance", "Administrative support", "Teaching or mentoring younger students", "Data entry and digital tasks", "On-campus maintenance and event management", "Companionship for elderly"] },
  { q: "How many hours can a student work?",           a: "Students typically work 2 to 4 hours per week, ensuring academic performance is not affected. Hours may vary based on individual schedules and job requirements." },
  { q: "How does this program benefit students?",      a: ["Financial support for education and daily expenses", "Real-world work experience", "Time management and responsibility", "Networking opportunities for future career growth"] },
];

export default function EarnLearn() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <PageHero
        label="VSS Pune"
        title="Earn &"
        highlight="Learn"
        subtitle="Empowering students to support themselves financially while continuing their education journey."
        image={aboutvssintro}
        objectPosition="80% 15%"
      />

      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-24">

          {/* INTRO — PROMOTIONAL */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Self Reliance Initiative</p>
              </div>
              <h2 className="heading-font text-3xl md:text-4xl font-semibold text-[var(--color-primary)] leading-tight mb-4">
                Study. Work. <span className="text-[var(--color-secondary)]">Grow.</span>
              </h2>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-8">
                <p>
                  VSS promotes self-reliance through its{" "}
                  <span className="text-[var(--color-secondary)] font-semibold">Earn & Learn initiative</span> —
                  enabling financially challenged students to support their education while gaining real-world experience.
                </p>
                <p>
                  Students work just <span className="font-semibold text-gray-800">2–4 hours per week</span> in meaningful roles
                  within the Samiti ecosystem — earning money, building skills and growing as individuals.
                </p>
              </div>

              {/* MINI STATS */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "1200+", label: "Students"    },
                  { value: "8+",    label: "Work Roles"  },
                  { value: "60+",   label: "Years"       },
                ].map((s, i) => (
                  <div key={i} className="text-center p-3 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                    <p className="heading-font text-xl font-bold text-[var(--color-primary)]">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[var(--color-secondary)]/20 pointer-events-none" />
              <img src={earnImg} alt="Earn and Learn" className="relative w-full h-[360px] object-cover rounded-2xl shadow-xl" />
              {/* FLOATING BADGE */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl px-5 py-3 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center">
                    <FaStar className="text-[var(--color-secondary)]" size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Earn While You Learn</p>
                    <p className="text-[10px] text-gray-400">VSS Signature Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OPPORTUNITY BANNER */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[var(--color-secondary)] to-[#e0731a] p-8 md:p-12 text-white shadow-xl">
            <div className="absolute -top-10 -right-10 w-52 h-52 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FaHeart className="text-white/70" size={14} />
                  <p className="text-white/80 text-xs uppercase tracking-widest font-medium">Open Opportunity</p>
                </div>
                <h3 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-2">
                  Give a Student an Opportunity to Earn
                </h3>
                <p className="text-white/75 text-sm max-w-[480px] leading-relaxed">
                  Partner with VSS to offer part-time work to our students. Your organisation gets dedicated support
                  while students gain experience, confidence and financial independence.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[var(--color-secondary)] px-7 py-3.5 rounded-xl text-sm font-bold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                >
                  Partner With Us <FaArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* BENEFITS */}
          <div>
            <div className="text-center mb-12">
              <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Why It Matters</p>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">Benefits of the Program</h2>
              <div className="flex justify-center items-center gap-2">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
                <span className="w-2 h-[2px] bg-gray-100" />
              </div>
            </div>

            {/* ALTERNATING ROWS */}
            <div className="space-y-6">
              {benefits.map((item, i) => (
                <div key={i} className={`flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl border border-gray-100 hover:shadow-lg hover:border-[var(--color-primary)]/15 transition-all duration-300 group ${i % 2 !== 0 ? "sm:flex-row-reverse" : ""}`}>

                  {/* ICON BLOCK */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  {/* DIVIDER LINE */}
                  <div className={`hidden sm:block w-px h-12 bg-gray-200 flex-shrink-0`} />

                  {/* TEXT */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">0{i + 1}</span>
                      <h3 className="heading-font text-base font-semibold text-gray-800">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-[520px]">{item.desc}</p>
                  </div>

                  {/* ARROW */}
                  <FaArrowRight className={`hidden sm:block flex-shrink-0 text-gray-200 group-hover:text-[var(--color-secondary)] transition-colors duration-300 ${i % 2 !== 0 ? "rotate-180" : ""}`} size={16} />

                </div>
              ))}
            </div>
          </div>

          {/* WORK TYPES */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Opportunities Available</p>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-2">Types of Work Offered</h2>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Students work <span className="font-semibold text-gray-700">2–4 hours per week</span> in roles that match their skills and interests,
                ensuring academics always remain the top priority.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {workTypes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[var(--color-secondary)]/30 hover:bg-[var(--color-secondary)]/5 transition-all duration-200">
                    <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-sm">{item.icon}</span>
                    <span className="text-xs font-medium text-gray-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-[var(--color-primary)] p-8 text-white shadow-2xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <FaGlobe className="text-[var(--color-secondary)]" size={14} />
                  <p className="text-[var(--color-secondary)] text-xs uppercase tracking-widest font-medium">Program Impact</p>
                </div>
                <h3 className="heading-font text-2xl font-semibold mb-6 leading-snug">
                  Building <span className="text-[var(--color-secondary)]">Self-Reliant</span> Students
                </h3>
                {[
                  { value: "2–4 hrs", label: "Work per week"      },
                  { value: "1200+",   label: "Students benefited" },
                  { value: "8+",      label: "Work categories"    },
                  { value: "₹0",      label: "Cost to students"   },
                ].map((s, i, arr) => (
                  <div key={i} className={`flex items-center justify-between py-3 ${i !== arr.length - 1 ? "border-b border-white/10" : ""}`}>
                    <p className="text-white/60 text-sm">{s.label}</p>
                    <p className="heading-font text-xl font-bold text-[var(--color-secondary)]">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WEBSITE DEV */}
          <div>
            <div className="text-center mb-10">
              <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Digital Initiative</p>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">Website Development Program</h2>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <p className="text-sm text-gray-500 max-w-[600px] mx-auto leading-relaxed">
                Students collaborate to design, develop and maintain websites for NGOs, businesses and institutions —
                gaining industry exposure while earning financial support under the Earn & Learn scheme.
              </p>
            </div>

            {/* WEBSITE CARDS */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
              {websiteData.map((site, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                    <img
                      src={site.img}
                      alt={site.name}
                      className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest">{site.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 italic">*Students receive stipends under the Earn & Learn scheme for website development projects.</p>
          </div>

          {/* FAQ */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[var(--color-secondary)]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="text-center mb-10">
                <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Common Questions</p>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">Questions & Answers</h2>
                <div className="flex justify-center items-center gap-2">
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                  <span className="w-4 h-[2px] bg-gray-200" />
                  <span className="w-2 h-[2px] bg-gray-100" />
                </div>
              </div>

              {/* TAB LAYOUT */}
              <div className="flex flex-col md:flex-row gap-3">

                {/* QUESTION TABS */}
                <div className="md:w-[42%] flex flex-col gap-2">
                  {faqs.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`flex items-center gap-4 px-5 py-4 rounded-2xl text-left transition-all duration-200 ${
                        activeIndex === i
                          ? "bg-[var(--color-primary)] shadow-lg"
                          : "bg-gray-50 border border-gray-100 hover:border-[var(--color-primary)]/20 hover:bg-white"
                      }`}
                    >
                      <span className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-colors duration-200 ${
                        activeIndex === i ? "bg-white/20 text-white" : "bg-white text-gray-400 shadow-sm"
                      }`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`text-sm font-medium leading-snug transition-colors duration-200 ${
                        activeIndex === i ? "text-white" : "text-gray-700"
                      }`}>
                        {item.q}
                      </span>
                    </button>
                  ))}
                </div>

                {/* ANSWER PANEL */}
                <div className="md:flex-1 rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/3 p-8 min-h-[200px] flex flex-col justify-center">
                  {activeIndex !== null ? (
                    <>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-8 h-8 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                          {String(activeIndex + 1).padStart(2, "0")}
                        </span>
                        <h3 className="heading-font text-base font-semibold text-[var(--color-primary)]">{faqs[activeIndex].q}</h3>
                      </div>
                      <div className="pl-11">
                        {Array.isArray(faqs[activeIndex].a) ? (
                          <ul className="space-y-2.5">
                            {faqs[activeIndex].a.map((pt, j) => (
                              <li key={j} className="flex items-start gap-3 text-sm text-gray-600">
                                <span className="mt-1.5 w-4 h-4 flex-shrink-0 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                                </span>
                                {pt}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-600 leading-relaxed">{faqs[activeIndex].a}</p>
                        )}
                      </div>
                    </>
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mx-auto mb-3">
                        <FaChevronDown className="text-[var(--color-primary)]/40" size={18} />
                      </div>
                      <p className="text-sm text-gray-400">Select a question to see the answer</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>

          {/* END CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Make a Difference</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Help a Student <span className="text-[var(--color-secondary)]">Earn Their Future</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Whether you donate, volunteer or offer work opportunities — every action helps a student build
                  financial independence and a brighter future.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a href="/support" className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200">
                  Support Us
                </a>
                <a href="/contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200">
                  Offer Opportunities
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
