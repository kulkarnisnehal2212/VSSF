import { useState } from "react";
import PageHero from "../components/PageHero";
import VideoModal from "../components/VideoModal";
import heroImg from "../assets/aboutvsspune/aboutvss.png";
import {
  FaFilePdf, FaLink, FaYoutube, FaDownload,
  FaExternalLinkAlt, FaPlay, FaNewspaper, FaGlobe,
} from "react-icons/fa";

const documents = [
  { icon: <FaFilePdf />, color: "bg-rose-50 text-rose-500 border-rose-100",    title: "VSSF Annual Report 2023–24",       desc: "Overview of activities, financials and impact.",          tag: "Annual Report" },
  { icon: <FaFilePdf />, color: "bg-blue-50 text-blue-500 border-blue-100",    title: "501(c)(3) Tax Exemption Letter",    desc: "Official IRS exemption certificate for VSSF.",            tag: "Legal"         },
  { icon: <FaFilePdf />, color: "bg-orange-50 text-orange-500 border-orange-100", title: "Donation Impact Brochure",       desc: "How your donation is used and its direct impact.",        tag: "Brochure"      },
  { icon: <FaFilePdf />, color: "bg-green-50 text-green-500 border-green-100", title: "VSS Hostel Sponsorship Package",    desc: "Details on sponsoring rooms in the new girls hostel.",    tag: "Sponsorship"   },
  { icon: <FaFilePdf />, color: "bg-purple-50 text-purple-500 border-purple-100", title: "Earn & Learn Program Overview", desc: "Full details of the student self-reliance initiative.",    tag: "Program"       },
  { icon: <FaFilePdf />, color: "bg-amber-50 text-amber-500 border-amber-100", title: "Student Support Guidelines",        desc: "How donors can sponsor and track student progress.",      tag: "Guidelines"    },
];

const links = [
  { icon: <FaGlobe />,   color: "bg-blue-50 text-blue-500",   title: "VSS Pune Official Website",    url: "https://samiti.org/en/",                          desc: "Main website of Vidyarthi Sahayyak Samiti, Pune." },
  { icon: <FaYoutube />, color: "bg-rose-50 text-rose-500",   title: "VSS Documentary Film",         url: null,       isFilm: true,  desc: "Watch the official VSS film on YouTube."          },
  { icon: <FaGlobe />,   color: "bg-orange-50 text-orange-500", title: "VSSF Foundation Website",   url: "#",                                               desc: "Official website of Vidyarthi Sahayyak Samiti Foundation." },
  { icon: <FaNewspaper />, color: "bg-green-50 text-green-500", title: "VSS in the News",           url: "#",                                               desc: "Media coverage and press mentions of VSS."        },
];

const videos = [
  { id: "XWYJYe7x3UQ", title: "Student Experience",   tag: "Testimonial"  },
  { id: "2K5ghfrbu6E", title: "Student Journey",       tag: "Story"        },
  { id: "OerOXtVU-qc", title: "Student Growth",        tag: "Testimonial"  },
  { id: "KgqsRRdiMg0", title: "Learning Experience",   tag: "Campus Life"  },
  { id: "mpKyzWNeeZY", title: "Campus Life",            tag: "Campus Life"  },
  { id: "KetG-Pqafhw", title: "VSS Documentary Film",  tag: "Documentary"  },
];

export default function Resources() {
  const [filmOpen, setFilmOpen] = useState(false);
  return (
    <>
      <VideoModal videoId="KetG-Pqafhw" isOpen={filmOpen} onClose={() => setFilmOpen(false)} />
      <PageHero
        label="Resources"
        title="Everything You"
        highlight="Need to Know"
        subtitle="Documents, links, videos and media to help you learn more about VSS and VSSF."
        image={heroImg}
        objectPosition="80% 15%"
      />

      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-20">

          {/* DOCUMENTS */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
              <div>
                <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Downloads</p>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">Documents & Reports</h2>
              </div>
              <p className="text-xs text-gray-400">All documents are free to download</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {documents.map((doc, i) => (
                <div key={i} className="group flex flex-col gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-[var(--color-primary)]/15 hover:-translate-y-0.5 transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className={`w-10 h-10 flex items-center justify-center rounded-xl border ${doc.color} text-lg flex-shrink-0`}>
                      {doc.icon}
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                      {doc.tag}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="heading-font text-sm font-semibold text-gray-800 mb-1">{doc.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{doc.desc}</p>
                  </div>
                  <button className="self-start flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors duration-200">
                    <FaDownload size={11} /> Download PDF
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <div className="mb-10">
              <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">External Links</p>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">Useful Links</h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {links.map((link, i) =>
                link.isFilm ? (
                  <button
                    key={i}
                    onClick={() => setFilmOpen(true)}
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-[var(--color-primary)]/15 hover:-translate-y-0.5 transition-all duration-300 text-left w-full"
                  >
                    <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl ${link.color} text-lg border border-current/10`}>
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[var(--color-primary)] transition-colors duration-200 truncate">{link.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">{link.desc}</p>
                    </div>
                    <FaPlay size={11} className="text-gray-300 group-hover:text-[var(--color-secondary)] flex-shrink-0 transition-colors duration-200" />
                  </button>
                ) : (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-[var(--color-primary)]/15 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl ${link.color} text-lg border border-current/10`}>
                      {link.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[var(--color-primary)] transition-colors duration-200 truncate">{link.title}</p>
                      <p className="text-xs text-gray-500 mt-0.5 truncate">{link.desc}</p>
                    </div>
                    <FaExternalLinkAlt size={11} className="text-gray-300 group-hover:text-[var(--color-secondary)] flex-shrink-0 transition-colors duration-200" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* VIDEO GALLERY */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
              <div>
                <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Media</p>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">Videos & Stories</h2>
              </div>
              <a
                href="https://www.youtube.com/@vssf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors duration-200"
              >
                <FaYoutube size={14} /> View YouTube Channel
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {videos.map((video, i) => {
                const isFilm = video.id === "KetG-Pqafhw";
                const Wrapper = ({ children }) => isFilm ? (
                  <button key={i} onClick={() => setFilmOpen(true)} className="group relative overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl hover:border-[var(--color-secondary)]/30 transition-all duration-300 text-left w-full">{children}</button>
                ) : (
                  <a key={i} href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-2xl border border-gray-100 hover:shadow-xl hover:border-[var(--color-secondary)]/30 transition-all duration-300">{children}</a>
                );
                return (
                  <Wrapper key={i}>
                    <div className="aspect-[9/16] overflow-hidden bg-gray-100">
                      <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover scale-[1.1] group-hover:scale-125 transition-transform duration-700" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:border-[var(--color-secondary)] transition-all duration-300">
                        <FaPlay className="text-white text-xs ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-[var(--color-secondary)]">{video.tag}</span>
                      <p className="text-white text-xs font-medium leading-tight line-clamp-2 mt-0.5">{video.title}</p>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* END CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Need More Info?</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Can't Find What <span className="text-[var(--color-secondary)]">You're Looking For?</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Reach out to us directly and we'll be happy to share any additional information, reports or media you need.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a href="/contact" className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200">
                  Contact Us
                </a>
                <a href="/donate" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200">
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
