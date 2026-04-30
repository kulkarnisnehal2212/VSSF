import { useState } from "react";
import PageHero from "../components/PageHero";
import VideoModal from "../components/VideoModal";
import aboutvssmeeting from "../assets/aboutvsspune/vss-meeting.png";
import aboutvssintro from "../assets/aboutvsspune/aboutvss.png";
import chaireman from "../assets/aboutvsspune/chairmen_pratapraopawar.png";
import permenanttrustee from "../assets/aboutvsspune/permenent_truestee_tukaramgaikwad.png";
import permenanttrustee1 from "../assets/aboutvsspune/perment_trustee_bhausahebjadhav.png";
import managingtrustee from "../assets/aboutvsspune/managing_trustee_tusharrajankar.png";
import treasurer from "../assets/aboutvsspune/trasurer_sanjayamrute.png";

export default function AboutVSS() {
  const [filmOpen, setFilmOpen] = useState(false);
  return (
    <>
      <VideoModal videoId="KetG-Pqafhw" isOpen={filmOpen} onClose={() => setFilmOpen(false)} />
      <PageHero
        label="About VSS Pune"
        title="Vidyarthi Sahayyak"
        highlight="Samiti, Pune"
        subtitle="A 60+ year legacy of empowering rural students through education, shelter and community."
        image={aboutvssintro}
        objectPosition="80% 15%"
      />
        <section className="w-full py-20 bg-white">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
            <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">About VSS Pune</p>
          </div>
          <h1 className="heading-font text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-4">
            Vidyarthi Sahayyak Samiti, Pune
          </h1>
          <div className="flex justify-center items-center gap-2">
            <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
            <span className="w-4 h-[2px] bg-gray-200" />
            <span className="w-2 h-[2px] bg-gray-100" />
          </div>
        </div>

        {/* INTRO */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          {/* LEFT TEXT — spans 2 cols */}
          <div className="md:col-span-2 space-y-4 text-gray-600 text-sm leading-relaxed">
            <p>
              <span className="text-[var(--color-secondary)] font-semibold">Vidyarthi Sahayyak Samiti (VSS)</span>{" "}
              is more than an organisation — it is a movement that has transformed the lives of thousands of students from rural India by making education accessible, affordable, and meaningful.
            </p>
            <p>
              Established in <span className="font-semibold text-gray-800">1955</span>, VSS was founded by visionaries including{" "}
              <span className="font-semibold text-[var(--color-primary)] border-b-2 border-[var(--color-secondary)]">Dr. Achyutrao Apte</span>, <span className="font-medium text-gray-800">Haribhau Phatak</span>, and{" "}
              <span className="font-medium text-gray-800">Smt. Sumitratai Kerkar</span>, with a mission to support deserving students from economically weaker backgrounds.
            </p>
            <p>
              What began with meals for just <span className="font-semibold text-gray-800">five students</span> has grown into a structured ecosystem — today VSS operates{" "}
              <span className="font-semibold text-gray-800">nine hostels</span> across Pune and Ahilyanagar, supporting over{" "}
              <span className="font-semibold text-gray-800">1200 students</span> with lodging, meals, mentorship and personality development.
            </p>
            <p>
              Built on the core values of <span className="font-medium text-gray-800">cleanliness</span>, <span className="font-medium text-gray-800">equality</span>, and <span className="font-medium text-gray-800">dignity of work</span> — VSS creates an inclusive environment where merit and determination matter more than background.
            </p>
          </div>

          {/* RIGHT — STAT CARDS */}
          <div className="flex flex-col gap-3">
            {[
              { value: "1955", label: "Year Established",  color: "primary"   },
              { value: "1200+",label: "Students Supported",color: "secondary"  },
              { value: "9",    label: "Hostels in Pune",   color: "primary"   },
              { value: "60+",  label: "Years of Legacy",   color: "secondary"  },
            ].map((s, i) => (
              <div key={i} className={`flex items-center gap-4 px-4 py-3 rounded-xl border ${
                s.color === "primary"
                  ? "border-[var(--color-primary)]/15 bg-[var(--color-primary)]/5"
                  : "border-[var(--color-secondary)]/15 bg-[var(--color-secondary)]/5"
              }`}>
                <p className={`heading-font text-xl font-bold ${
                  s.color === "primary" ? "text-[var(--color-primary)]" : "text-[var(--color-secondary)]"
                }`}>{s.value}</p>
                <p className="text-xs text-gray-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* IMAGE + VISION */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16 bg-[var(--color-primary)]/3 rounded-3xl p-8 border border-[var(--color-primary)]/10">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[var(--color-secondary)]/20 pointer-events-none" />
            <img
              src={aboutvssmeeting}
              alt="VSS Meeting"
              className="relative w-full h-[320px] object-cover object-center rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md">
              <p className="text-xs text-gray-500">VSS Annual Meeting — Pune</p>
            </div>
          </div>

          {/* VISION */}
          <div>
            <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Our Purpose</p>
            <h2 className="heading-font text-2xl font-semibold text-[var(--color-primary)] mb-2">Vision & Mission</h2>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
              <span className="w-4 h-[2px] bg-gray-200" />
            </div>

            <ul className="space-y-3">
              {[
                { title: "Affordable Accommodation",   desc: "Safe hostel facilities for rural students in Pune" },
                { title: "Academic Support",            desc: "Dedicated study spaces and mentorship programs"   },
                { title: "Equality & Dignity",          desc: "Inclusive environment regardless of background"   },
                { title: "Skill Development",           desc: "Leadership training and personality programs"     },
                { title: "Career Guidance",             desc: "Connecting students with mentors and opportunities"},
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-[var(--color-secondary)]/15 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>


        {/* CTA */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => setFilmOpen(true)}
              className="secondary-bg text-white px-6 py-3 rounded-lg text-sm font-medium hover:scale-105 transition"
            >
              VSS Film
            </button>
            <a
              href="https://samiti.org"
              target="_blank"
              className="border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[var(--color-primary)] hover:text-white transition"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* BOARD MEMBERS */}
        <div className="mb-4">

          {/* TITLE */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Leadership</p>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">Board Members</h2>
            </div>
            <p className="text-xs text-gray-400 hidden sm:block">Leadership guiding the vision and impact of VSS</p>
          </div>

          {/* SCROLL ROW — horizontal on mobile, full row on desktop */}
          <div className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2 lg:overflow-visible lg:grid lg:grid-cols-5">
            {[
              { name: "Mr. Pratap Pawar",    role: "Chairman",          img: chaireman        },
              { name: "Mr. Tushar Rajankar", role: "Managing Trustee",  img: managingtrustee  },
              { name: "Tukaram Gaikwad",     role: "Permanent Trustee", img: permenanttrustee },
              { name: "Bhausaheb Jadhav",    role: "Permanent Trustee", img: permenanttrustee1},
              { name: "Sanjay Amrute",       role: "Treasurer",         img: treasurer        },
            ].map((member, index) => (
              <div
                key={index}
                className="group flex-shrink-0 snap-start w-[200px] lg:w-auto bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-[220px] overflow-hidden bg-gray-50">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* ROLE BADGE */}
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-[var(--color-secondary)] text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* INFO */}
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-4 h-[2px] bg-[var(--color-secondary)]" />
                    <h3 className="font-semibold text-gray-900 text-sm leading-tight">{member.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* END CTA */}
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] mt-16 p-10 md:p-14 text-white shadow-2xl">

          {/* GLOW */}
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

            {/* LEFT */}
            <div className="max-w-[520px]">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Get Involved</span>
              </div>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                Be Part of VSS's <span className="text-[var(--color-secondary)]">Legacy</span>
              </h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Whether you want to support a student, visit our campus or simply learn more — we welcome you to be part of this 60+ year journey of transformation.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <button
                onClick={() => setFilmOpen(true)}
                className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200"
              >
                Watch VSS Film
              </button>
              <a
                href="https://samiti.org/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200"
              >
                Visit VSS Website
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
    </>
  );
}
