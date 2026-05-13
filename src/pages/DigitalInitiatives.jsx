import PageHero from "../components/PageHero";
import heroImg from "../assets/heroimges/Lajpat-Bhavan.jpg";
import webDev from "../assets/projects/websitedevlopment.png";
import logoA2MM from "../assets/aboutvsspune/website/A2MM.png";
import logoBmm from "../assets/aboutvsspune/website/bmm.png";
import logoBmm1 from "../assets/aboutvsspune/website/bmm1.png";
import logoKalasanman from "../assets/aboutvsspune/website/kalasanman.png";
import logoParagon from "../assets/aboutvsspune/website/paragon.png";
import {
  FaLaptopCode, FaUsers, FaHandshake, FaArrowRight,
  FaCheckCircle, FaGlobe, FaCode, FaPaintBrush,
  FaExternalLinkAlt, FaCircle,
  FaStar, FaQuoteLeft, FaLinkedin, FaEnvelope,
} from "react-icons/fa";

const ecosystem = [
  {
    icon: <FaUsers size={28} />,
    color: "from-orange-400 to-orange-600",
    title: "Alumni Network",
    desc: "Industry experts and VSS alumni guide students through real-world challenges, mentorship, and career connections.",
    stat: "50+ Mentors",
  },
  {
    icon: <FaCode size={28} />,
    color: "from-[var(--color-primary)] to-[#2b3c9a]",
    title: "Student Developers",
    desc: "400+ students actively building live projects — websites, apps, and digital tools for NGOs and businesses.",
    stat: "400+ Builders",
  },
  {
    icon: <FaHandshake size={28} />,
    color: "from-purple-400 to-purple-600",
    title: "Partner Organizations",
    desc: "NGOs, businesses, and institutions collaborate with VSS students to get professional digital solutions built.",
    stat: "15+ Organizations",
  },
];

const skills = [
  { icon: <FaCode size={14} />, label: "Web Development" },
  { icon: <FaPaintBrush size={14} />, label: "UI / UX Design" },
  { icon: <FaGlobe size={14} />, label: "Digital Marketing" },
  { icon: <FaLaptopCode size={14} />, label: "Project Management" },
];

const highlights = [
  "Students earn stipends while building real projects",
  "Live client work — not just classroom exercises",
  "Mentored by VSS alumni working in top companies",
  "Projects delivered to NGOs, businesses & institutions",
  "Builds confidence, portfolio, and industry readiness",
];

const pastProjects = [
  { name: "Paragon Arts",      url: "https://paragonarts.com",    logo: logoParagon,    domain: "paragonarts.com"    },
  { name: "BMM Online",        url: "https://bmmonline.org",      logo: logoBmm,        domain: "bmmonline.org"      },
  { name: "Kalasanman",        url: "https://kalasanman.org",     logo: logoKalasanman, domain: "kalasanman.org"     },
  { name: "VSS Samiti (US)",   url: "https://us.samiti.org",      logo: null,           domain: "us.samiti.org"      },
  { name: "SWA Pune",          url: "https://swapune.org",        logo: null,           domain: "swapune.org"        },
  { name: "PMM Annual Report", url: null,                         logo: null,           domain: "PMM Annual Report"  },
  { name: "A2MM",              url: "https://a2mm.org",           logo: logoA2MM,       domain: "a2mm.org"           },
  { name: "BMM Seattle 2025",  url: null,                         logo: logoBmm1,       domain: "bmmseattle.org"     },
];

const ongoingProjects = [
  { name: "Rung Munch",       url: "https://rungmunch.org",      logo: null, domain: "rungmunch.org"      },
  { name: "Dad on the Trail", url: "https://dadionthetrail.com", logo: null, domain: "dadionthetrail.com" },
  { name: "BMM Seattle 2026", url: "https://bmmseattle2026.org", logo: null, domain: "bmmseattle2026.org" },
];

const howItWorks = [
  { step: "01", label: "Student joins", desc: "Enrolls in the Digital Initiative via Earn & Learn" },
  { step: "02", label: "Gets mentored", desc: "Paired with VSS alumni and industry professionals" },
  { step: "03", label: "Delivers impact", desc: "Ships real projects for NGOs, businesses & institutions" },
];

export default function DigitalInitiatives() {
  return (
    <>
      <PageHero
        label="Digital Initiatives"
        title="Building Skills Through"
        highlight="Real Opportunities"
        subtitle="Empowering VSS students with real-world digital projects — bridging the gap between education and industry."
        image={heroImg}
        objectPosition="center 40%"
      />

      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-20">

          {/* ── ABOUT SECTION ── */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">About the Initiative</p>
              </div>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
                Where Learning Meets <span className="text-[var(--color-secondary)]">Real Work</span>
              </h2>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                The VSS Digital Initiative bridges the gap between academic learning and real-world experience.
                Students work on live client projects — building websites, digital tools, and online platforms —
                while earning stipends through the Earn & Learn program.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Every project is mentored by VSS alumni and industry professionals, ensuring students gain
                not just technical skills but also professional confidence and portfolio-worthy work.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {skills.map((s, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/10 text-xs font-semibold text-[var(--color-primary)]">
                    {s.icon} {s.label}
                  </div>
                ))}
              </div>
              {/* Impact numbers */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { val: "400+", lbl: "Students" },
                  { val: "11+", lbl: "Projects Delivered" },
                  { val: "3+", lbl: "Ongoing" },
                ].map((stat) => (
                  <div key={stat.lbl} className="p-4 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/8 text-center">
                    <p className="heading-font text-xl font-bold text-[var(--color-primary)]">{stat.val}</p>
                    <p className="text-[10px] text-gray-500 mt-0.5 font-medium">{stat.lbl}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={webDev} alt="Digital Initiatives" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-5 py-3">
                  <p className="text-white text-sm font-bold">VSS Digital Team</p>
                  <p className="text-white/70 text-xs">Building real solutions. Creating real impact.</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── ENHANCED ECOSYSTEM SECTION ── */}
          <div className="rounded-3xl bg-[#f8f9fc] overflow-hidden">
            {/* Header */}
            <div className="text-center pt-12 pb-8 px-6">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Our Ecosystem</p>
              </div>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
                A Community Built on <span className="text-[var(--color-secondary)]">Collaboration</span>
              </h2>
              <div className="flex justify-center items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-300" />
              </div>
              <p className="text-sm text-gray-500 max-w-[520px] mx-auto leading-relaxed">
                Three pillars that power every project — alumni expertise, student energy, and partner trust.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-5 px-6 pb-8">
              {ecosystem.map((item, i) => (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/20 hover:shadow-xl transition-all duration-300 p-7 flex flex-col overflow-hidden"
                >
                  {/* Bottom border accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl`} />

                  {/* Large gradient icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                    {item.icon}
                  </div>

                  <h3 className="font-bold text-[var(--color-primary)] text-base mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{item.desc}</p>

                  {/* Stat number */}
                  <div className="mt-5 pt-4 border-t border-gray-100">
                    <span className={`inline-block text-sm font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.stat}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* How It Works Flow */}
            <div className="px-6 pb-12">
              <div className="bg-white rounded-2xl border border-gray-100 px-6 py-7 shadow-sm">
                <p className="text-center text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-6">How It Works</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
                  {howItWorks.map((step, i) => (
                    <div key={i} className="flex flex-col sm:flex-row items-center gap-0 flex-1">
                      {/* Step card */}
                      <div className="flex flex-col items-center text-center px-4 py-2 flex-1">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[#2b3c9a] flex items-center justify-center text-white text-xs font-bold mb-3 shadow-md">
                          {step.step}
                        </div>
                        <p className="font-bold text-[var(--color-primary)] text-sm mb-1">{step.label}</p>
                        <p className="text-xs text-gray-400 leading-snug max-w-[140px]">{step.desc}</p>
                      </div>
                      {/* Arrow connector */}
                      {i < howItWorks.length - 1 && (
                        <div className="flex items-center justify-center my-2 sm:my-0">
                          <FaArrowRight size={14} className="text-[var(--color-secondary)] rotate-90 sm:rotate-0 flex-shrink-0" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── OUR WORK — CREDIBILITY SECTION ── */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Our Work</p>
              </div>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
                Delivering Impact <span className="text-[var(--color-secondary)]">Across Domains</span>
              </h2>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <p className="text-sm text-gray-500 max-w-[600px] mx-auto leading-relaxed">
                Over time, the VSS Digital Team has collaborated with organizations across domains, delivering
                impactful digital solutions.
              </p>
            </div>

            {/* PAST PROJECTS */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-sm">
                  <FaCheckCircle size={11} /> Completed Projects
                </div>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {pastProjects.map((p, i) => (
                  <a
                    key={i}
                    href={p.url || undefined}
                    target={p.url ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`group relative bg-white rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/25 hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center justify-center gap-3 text-center min-h-[120px] ${p.url ? "cursor-pointer" : "cursor-default"}`}
                  >
                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="h-10 w-auto max-w-[100px] object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#2b3c9a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <FaGlobe size={16} className="text-white" />
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-bold text-gray-800 leading-tight">{p.name}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{p.domain}</p>
                    </div>
                    {p.url && (
                      <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <FaExternalLinkAlt size={9} className="text-[var(--color-secondary)]" />
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* ONGOING PROJECTS */}
            <div className="mt-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 bg-orange-500 text-white rounded-xl text-xs font-bold shadow-sm">
                  <FaCircle size={8} className="animate-pulse" /> Ongoing Projects
                </div>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {ongoingProjects.map((p, i) => (
                  <a
                    key={i}
                    href={p.url || undefined}
                    target={p.url ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group relative bg-white rounded-2xl border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center justify-center gap-3 text-center min-h-[120px]"
                  >
                    <div className="absolute top-2.5 left-2.5 flex items-center gap-1 bg-orange-50 border border-orange-200 rounded-full px-2 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                      <span className="text-[9px] font-bold text-orange-500 uppercase tracking-wide">Live</span>
                    </div>

                    {p.logo ? (
                      <img
                        src={p.logo}
                        alt={p.name}
                        className="h-10 w-auto max-w-[100px] object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <FaGlobe size={16} className="text-white" />
                      </div>
                    )}
                    <div>
                      <p className="text-xs font-bold text-gray-800 leading-tight">{p.name}</p>
                      <p className="text-[10px] text-gray-400 mt-0.5">{p.domain}</p>
                    </div>
                    {p.url && (
                      <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <FaExternalLinkAlt size={9} className="text-orange-400" />
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Caption */}
            <p className="text-center text-sm text-gray-400 italic mt-8 max-w-[600px] mx-auto leading-relaxed">
              Each project represents not just a delivery, but a learning journey for students — transforming
              theoretical knowledge into real-world impact.
            </p>
          </div>

          {/* ── HIGHLIGHTS ── */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[var(--color-primary)] to-[#2b3c9a] p-8 text-white shadow-2xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Why It Works</span>
                </div>
                <h3 className="heading-font text-xl font-semibold mb-6 leading-snug">
                  Building with <span className="text-[var(--color-secondary)]">Purpose</span>
                </h3>
                <ul className="space-y-3">
                  {highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                      <FaCheckCircle size={13} className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Get Involved</p>
              </div>
              <h3 className="heading-font text-2xl font-semibold text-[var(--color-primary)] leading-snug">
                Have a Project? <span className="text-[var(--color-secondary)]">Let's Build It.</span>
              </h3>
              <div className="flex items-center gap-2">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Partner with the VSS Digital Team to get your website, app, or digital tool built by
                skilled, mentored students — professionally delivered at no cost to NGOs and community organizations.
              </p>

              {/* Value props */}
              <div className="space-y-2.5">
                {[
                  "Professional quality, student-powered delivery",
                  "NGOs & non-profits — zero cost collaboration",
                  "Ongoing support & maintenance available",
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full bg-[var(--color-secondary)]/15 flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle size={10} className="text-[var(--color-secondary)]" />
                    </div>
                    {pt}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-6 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Start a Project <FaArrowRight size={11} />
                </a>
                <a
                  href="/vss-pune/earn-learn"
                  className="inline-flex items-center gap-2 bg-[var(--color-primary)]/8 hover:bg-[var(--color-primary)]/15 border border-[var(--color-primary)]/15 text-[var(--color-primary)] px-6 py-3 rounded-xl text-sm font-semibold hover:-translate-y-0.5 transition-all duration-200"
                >
                  Earn & Learn Program
                </a>
              </div>
            </div>
          </div>

          {/* ── PERSONAL SPOTLIGHT ── */}
          <div>
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5">
                <FaStar size={10} className="text-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Meet the Team</p>
              </div>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Compact horizontal card */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-100 shadow-lg bg-white flex flex-col md:flex-row">
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[var(--color-secondary)]/5 rounded-full blur-3xl pointer-events-none" />

              {/* LEFT — identity strip */}
              <div className="md:w-64 flex-shrink-0 bg-gradient-to-b from-[var(--color-primary)] to-[#1a2560] p-7 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[var(--color-secondary)]/10 rounded-full blur-2xl pointer-events-none" />

                {/* Photo — swap null with your photo import */}
                <div className="relative mb-4 z-10">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-[3px] border-white/25 shadow-xl bg-white/10 flex items-center justify-center">
                    {/* TODO: import yourPhoto from "../assets/your-photo.jpg" and replace null */}
                    {null ? (
                      <img src={null} alt="Your Name" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-3xl font-bold text-white/60 heading-font">YN</span>
                    )}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[var(--color-secondary)] border-2 border-white flex items-center justify-center shadow-md">
                    <FaCode size={10} className="text-white" />
                  </div>
                </div>

                <h3 className="heading-font text-base font-bold text-white mb-0.5 z-10">Your Name</h3>
                <p className="text-[var(--color-secondary)] text-[10px] font-semibold uppercase tracking-widest mb-3 z-10">
                  Web Designer & Developer
                </p>

                {/* Socials */}
                <div className="flex items-center gap-2 mb-4 z-10">
                  {[
                    { href: "#", icon: <FaLinkedin size={12} />, label: "LinkedIn" },
                    { href: "#", icon: <FaGlobe size={11} />, label: "Portfolio" },
                    { href: "mailto:#", icon: <FaEnvelope size={11} />, label: "Email" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} aria-label={s.label}
                      className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200">
                      {s.icon}
                    </a>
                  ))}
                </div>

                {/* Mini stats */}
                <div className="flex items-center gap-3 z-10 border-t border-white/10 pt-4 w-full justify-center">
                  {[["10+", "Projects"], ["1", "Website"], ["2yr", "Experience"]].map(([val, lbl]) => (
                    <div key={lbl} className="text-center">
                      <p className="text-white font-bold text-xs">{val}</p>
                      <p className="text-white/40 text-[9px] leading-tight">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — story */}
              <div className="flex-1 p-7 md:p-8 flex flex-col justify-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-3 py-1 mb-4 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                  <p className="secondary-text text-[10px] uppercase tracking-[0.2em] font-medium">Building with Purpose</p>
                </div>

                <h2 className="heading-font text-lg md:text-xl font-semibold text-[var(--color-primary)] mb-2 leading-snug">
                  More Than a Project — <span className="text-[var(--color-secondary)]">A Journey</span>
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-6 h-[2px] bg-[var(--color-secondary)]" />
                  <span className="w-3 h-[2px] bg-gray-200" />
                </div>

                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  The VSS Digital Initiative is not just about delivering projects — it is about creating
                  opportunities, building confidence, and shaping journeys. Students take ownership of real
                  problems and contribute meaningfully to the organization's growth.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  One such contribution has been the development of the VSS website — designed and built to
                  strengthen its digital presence and outreach. Being part of this journey has been an
                  opportunity to learn, take responsibility, and contribute to something larger than oneself.
                </p>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-5">
                  Learning by doing. Growing by contributing. Creating impact through technology.
                </p>

                {/* Stack + CTA row */}
                <div className="flex flex-wrap items-center gap-2">
                  {["React", "Tailwind CSS", "Vite", "Figma", "UI/UX"].map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-full bg-[var(--color-primary)]/8 border border-[var(--color-primary)]/10 text-[11px] font-semibold text-[var(--color-primary)]">
                      {tag}
                    </span>
                  ))}
                  <a href="/contact"
                    className="ml-auto inline-flex items-center gap-1.5 bg-[var(--color-primary)] hover:bg-[#1a2560] text-white px-5 py-2 rounded-xl text-xs font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-200">
                    Connect <FaArrowRight size={10} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── BOTTOM CTA ── */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Join the Movement</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Let's Build the <span className="text-[var(--color-secondary)]">Future Together</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Support the initiative, collaborate on a project, or help mentor the next generation of digital professionals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Get in Touch <FaArrowRight size={11} />
                </a>
                <a
                  href="/support"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  Support Us
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
