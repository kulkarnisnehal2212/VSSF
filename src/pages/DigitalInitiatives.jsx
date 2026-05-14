import PageHero from "../components/PageHero";
import heroImg from "../assets/heroimges/Lajpat-Bhavan.jpg";
import webDev from "../assets/aboutvsspune/website/digitalteam.png";
import logoA2MM from "../assets/aboutvsspune/website/A2MM.png";
import logoBmm from "../assets/aboutvsspune/website/bmm.png";
import logoBmm1 from "../assets/aboutvsspune/website/bmm1.png";
import logoBmm2 from "../assets/aboutvsspune/website/bmm_report.png";
import logoKalasanman from "../assets/aboutvsspune/website/kalasanman.png";
import logoParagon from "../assets/aboutvsspune/website/paragon.png";
import samitius from "../assets/aboutvsspune/website/us_samiti.png";
import swa from "../assets/aboutvsspune/website/swa.png";

import {
  FaLaptopCode, FaUsers, FaHandshake, FaArrowRight,
  FaCheckCircle, FaGlobe, FaCode, FaPaintBrush,
  FaExternalLinkAlt, FaLinkedin, FaEnvelope, FaStar,
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

const allProjects = [
  { name: "Paragon Arts",      url: "https://paragonart.com",       logo: logoParagon,    domain: "paragonarts.com"    },
  { name: "BMM Online",        url: "https://bmmonline.org",         logo: logoBmm,        domain: "bmmonline.org"      },
  { name: "Kalasanman",        url: "https://kalasanman.org",        logo: logoKalasanman, domain: "kalasanman.org"     },
  { name: "VSS Samiti (US)",   url: "https://us.samiti.org",         logo: samitius,       domain: "us.samiti.org"      },
  { name: "SWA Pune",          url: "https://www.swapune.org",       logo: swa,            domain: "swapune.org"        },
  { name: "BMM Annual Report", url: "https://bmmonline.org",         logo: logoBmm2,       domain: "BMM Annual Report"  },
  { name: "A2MM",              url: "https://www.a2mm.org",          logo: logoA2MM,       domain: "a2mm.org"           },
  { name: "BMM Seattle 2025",  url: "https://bmmseattle2026.org",    logo: logoBmm1,       domain: "bmmseattle.org"     },
  { name: "BMM Seattle 2026",  url: "https://bmmseattle2026.org",    logo: logoBmm1,       domain: "bmmseattle2026.org" },
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

          {/* ── HOW WE WORK / SERVICES ── */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">What We Do</p>
              </div>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
                Services We <span className="text-[var(--color-secondary)]">Provide</span>
              </h2>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <p className="text-sm text-gray-500 max-w-[540px] mx-auto leading-relaxed">
                From concept to launch — the VSS Digital Team delivers end-to-end digital solutions,
                mentored by alumni and powered by student talent.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <FaCode size={22} />,
                  color: "from-[var(--color-primary)] to-[#2b3c9a]",
                  title: "Web Development",
                  desc: "Custom websites and web apps built with modern frameworks — responsive, fast, and production-ready.",
                  tags: ["React", "HTML/CSS", "Vite"],
                },
                {
                  icon: <FaPaintBrush size={22} />,
                  color: "from-orange-400 to-orange-600",
                  title: "UI / UX Design",
                  desc: "Clean, user-friendly interfaces designed with purpose — from wireframes to polished final designs.",
                  tags: ["Figma", "Tailwind", "Design Systems"],
                },
                {
                  icon: <FaGlobe size={22} />,
                  color: "from-emerald-400 to-emerald-600",
                  title: "Digital Presence",
                  desc: "Help organizations establish and strengthen their online presence — websites, branding, and content.",
                  tags: ["SEO", "Branding", "Content"],
                },
                {
                  icon: <FaLaptopCode size={22} />,
                  color: "from-purple-400 to-purple-600",
                  title: "Reports & Publications",
                  desc: "Annual reports, digital brochures, and event microsites — designed and delivered professionally.",
                  tags: ["Annual Reports", "Microsites", "Print-ready"],
                },
              ].map((svc, i) => (
                <div key={i} className="group bg-white rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/20 hover:shadow-xl transition-all duration-300 p-6 flex flex-col relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${svc.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    {svc.icon}
                  </div>
                  <h3 className="font-bold text-[var(--color-primary)] mb-2">{svc.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 mb-4">{svc.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {svc.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* How it works strip */}
            <div className="mt-8 bg-[#f8f9fc] rounded-2xl border border-gray-100 px-6 py-6">
              <p className="text-center text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-400 mb-5">How It Works</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0">
                {[
                  { step: "01", label: "You reach out", desc: "Email us at digitalteam@samiti.org" },
                  { step: "02", label: "We scope it", desc: "Understand your needs & timeline" },
                  { step: "03", label: "Students build", desc: "Mentored delivery, real quality" },
                  { step: "04", label: "You launch", desc: "Handover, support & maintenance" },
                ].map((s, i, arr) => (
                  <div key={i} className="flex flex-col sm:flex-row items-center flex-1">
                    <div className="flex flex-col items-center text-center px-3 py-2 flex-1">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[#2b3c9a] flex items-center justify-center text-white text-[11px] font-bold mb-2 shadow-md">
                        {s.step}
                      </div>
                      <p className="font-bold text-[var(--color-primary)] text-xs mb-0.5">{s.label}</p>
                      <p className="text-[10px] text-gray-400 leading-snug max-w-[110px]">{s.desc}</p>
                    </div>
                    {i < arr.length - 1 && (
                      <FaArrowRight size={12} className="text-[var(--color-secondary)] rotate-90 sm:rotate-0 flex-shrink-0 my-1 sm:my-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── PROJECTS ── */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Our Work</p>
              </div>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
                Projects We've <span className="text-[var(--color-secondary)]">Delivered</span>
              </h2>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <p className="text-sm text-gray-500 max-w-[560px] mx-auto leading-relaxed">
                From NGO websites to cultural event platforms — the VSS Digital Team has collaborated
                with organizations across domains, delivering real digital solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {allProjects.map((p, i) => (
                <a
                  key={i}
                  href={p.url || undefined}
                  target={p.url ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group relative bg-white rounded-2xl border border-gray-100 hover:border-[var(--color-primary)]/25 hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center justify-center gap-3 text-center min-h-[110px] ${p.url ? "cursor-pointer hover:-translate-y-1" : "cursor-default"}`}
                >
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="h-9 w-auto max-w-[90px] object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[#2b3c9a] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <FaGlobe size={15} className="text-white" />
                    </div>
                  )}
                  <div>
                    <p className="text-xs font-bold text-gray-800 leading-tight">{p.name}</p>
                    <p className="text-[10px] text-gray-400 mt-0.5">{p.domain}</p>
                  </div>
                  {p.url && (
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <FaExternalLinkAlt size={8} className="text-[var(--color-secondary)]" />
                    </div>
                  )}
                </a>
              ))}
            </div>

            <p className="text-center text-sm text-gray-400 italic mt-8 max-w-[560px] mx-auto leading-relaxed">
              Each project is a learning journey — transforming student knowledge into real-world impact.
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

          {/* ── PERSONAL SPOTLIGHT — commented out, uncomment when ready
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5">
                <FaStar size={10} className="text-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Meet the Team</p>
              </div>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            ... personal card content ...
          </div>
          ── */}

          {/* ── BOTTOM CTA — START A PROJECT ── */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[540px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Start a Project</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Have a Project in Mind?{" "}
                  <span className="text-[var(--color-secondary)]">Let's Build It.</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  Whether you're an NGO, a cultural organization, or a business — the VSS Digital Team
                  is ready to collaborate. Reach out and let's create something meaningful together.
                </p>
                <div className="flex items-center gap-3 bg-white/10 border border-white/15 rounded-xl px-4 py-3 w-fit">
                  <FaEnvelope size={14} className="text-[var(--color-secondary)] flex-shrink-0" />
                  <a
                    href="mailto:digitalteam@samiti.org"
                    className="text-white font-semibold text-sm hover:text-[var(--color-secondary)] transition-colors duration-200"
                  >
                    digitalteam@samiti.org
                  </a>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a
                  href="mailto:digitalteam@samiti.org"
                  className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Email the Team <FaArrowRight size={11} />
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  Contact VSS
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
