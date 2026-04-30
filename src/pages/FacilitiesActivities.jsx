import PageHero from "../components/PageHero";
import aboutvssintro from "../assets/aboutvsspune/aboutvss.png";
import { FaHome, FaUtensils, FaBook, FaHeartbeat, FaDumbbell, FaLaptop, FaCheckCircle, FaImages } from "react-icons/fa";
import { useState } from "react";

import h1 from "../assets/heroimges/Aapte-hostel.jpg";
import h2 from "../assets/heroimges/Lajpat-Bhavan.jpg";
import h3 from "../assets/heroimges/latikagaitonde-hostel.jpg";
import h4 from "../assets/heroimges/madhubhau_chaudhari-hostel.jpg";
import h5 from "../assets/heroimges/PD-Karkhanis-slider.jpg";
import h6 from "../assets/heroimges/Sumitra-photo.jpg";

// Activities Gallery — replace captions/images here as needed
import gCooking         from "../assets/aboutvsspune/Activities-gallery/cooking.png";
import gCultural        from "../assets/aboutvsspune/Activities-gallery/culturalprogram.png";
import gTours           from "../assets/aboutvsspune/Activities-gallery/educationaltours.png";
import gEnglishClass    from "../assets/aboutvsspune/Activities-gallery/english -language-class.png";
import gEnglishPresent  from "../assets/aboutvsspune/Activities-gallery/english-presentation.png";
import gFarming         from "../assets/aboutvsspune/Activities-gallery/organic farming.png";
import gStorytelling    from "../assets/aboutvsspune/Activities-gallery/storytelling.png";
import gYoga            from "../assets/aboutvsspune/Activities-gallery/yoga.png";

const facilities = [
  { icon: <FaHome />,      title: "Hostels",        desc: "Well-ventilated rooms with essential amenities ensuring a comfortable and safe stay."         },
  { icon: <FaUtensils />,  title: "Mess & Meals",   desc: "Nutritious and hygienic meals served daily in a clean dining environment."                    },
  { icon: <FaBook />,      title: "Library",        desc: "A quiet, resource-rich space to support academic excellence and self-study."                   },
  { icon: <FaLaptop />,    title: "Computer Lab",   desc: "Modern computing facilities for digital learning and skill development."                       },
  { icon: <FaHeartbeat />, title: "Health Center",  desc: "Regular health checkups and on-campus medical support for all students."                       },
  { icon: <FaDumbbell />,  title: "Open Gym",       desc: "Outdoor fitness facilities to promote physical well-being and healthy habits."                  },
];

const hostels = [
  { img: h1, name: "Dr. Achyutrao Apte Hostel",     location: "FC Road, Pune"   },
  { img: h2, name: "Lajpat Bhavan",                  location: "Pune"            },
  { img: h3, name: "Latika Gaitonde Hostel",         location: "Pune"            },
  { img: h4, name: "Madhubhau Chaudhari Hostel",     location: "Pune"            },
  { img: h5, name: "P.D. Karkhanis Hostel",          location: "Pune"            },
  { img: h6, name: "Sumitra Hostel",                 location: "Pune"            },
];

const activities = [
  "Personality Development Programs",
  "Leadership & Communication Workshops",
  "Cultural & Festive Celebrations",
  "Sports & Fitness Events",
  "Career Guidance Sessions",
  "Community Service Initiatives",
  "Study Circles & Academic Support",
  "Earn & Learn Opportunities",
];

// Gallery — add/replace images & captions here
const galleryItems = [
  { img: gCooking,        caption: "Cooking Activity"              },
  { img: gCultural,       caption: "Cultural Program"              },
  { img: gTours,          caption: "Educational Tours"             },
  { img: gEnglishClass,   caption: "English Language Class"        },
  { img: gEnglishPresent, caption: "English Presentation Session"  },
  { img: gFarming,        caption: "Organic Farming Initiative"    },
  { img: gStorytelling,   caption: "Storytelling Workshop"         },
  { img: gYoga,           caption: "Yoga & Wellness Session"       },
  // repeated for preview — replace with real images later
  { img: gCooking,        caption: "Cooking Activity"              },
  { img: gCultural,       caption: "Cultural Program"              },
  { img: gTours,          caption: "Educational Tours"             },
  { img: gEnglishClass,   caption: "English Language Class"        },
  { img: gEnglishPresent, caption: "English Presentation Session"  },
  { img: gFarming,        caption: "Organic Farming Initiative"    },
  { img: gStorytelling,   caption: "Storytelling Workshop"         },
  { img: gYoga,           caption: "Yoga & Wellness Session"       },
];

export default function FacilitiesActivities() {
  const INITIAL_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  return (
    <>
      <PageHero
        label="VSS Pune"
        title="Facilities &"
        highlight="Activities"
        subtitle="Explore the facilities and enriching activities that shape student life at VSS Pune."
        image={aboutvssintro}
        objectPosition="80% 15%"
      />

      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-20">

          {/* FACILITIES */}
          <div>
            {/* HEADER */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)]" />
                <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">What We Offer</p>
              </div>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
                Facilities We Provide
              </h2>
              <div className="flex justify-center items-center gap-2 mb-4">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
                <span className="w-2 h-[2px] bg-gray-100" />
              </div>
              <p className="text-gray-500 text-sm max-w-[500px] mx-auto">
                A well-rounded environment designed to support academic growth, physical well-being and personal development.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {facilities.map((item, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 hover:shadow-xl hover:border-[var(--color-primary)]/20 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* BG GLOW ON HOVER */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

                  {/* NUMBER */}
                  <span className="absolute top-4 right-4 text-[11px] font-bold text-gray-200 group-hover:text-[var(--color-secondary)]/40 transition-colors duration-300">
                    0{i + 1}
                  </span>

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-[var(--color-primary)]/8 text-[var(--color-primary)] text-lg group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-5">
                    {item.icon}
                  </div>

                  {/* CONTENT */}
                  <h3 className="heading-font text-base font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>

                  {/* BOTTOM ACCENT LINE */}
                  <div className="mt-5 w-0 group-hover:w-10 h-[2px] bg-[var(--color-secondary)] transition-all duration-500 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* HOSTELS */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
              <div>
                <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Our Infrastructure</p>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">Our Hostels</h2>
              </div>
              <p className="text-xs text-gray-400 sm:text-right">8 hostels across Pune & Ahilyanagar</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {hostels.map((item, i) => (
                <div key={i} className="group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="h-[200px] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-semibold leading-tight">{item.name}</p>
                    <p className="text-white/60 text-xs mt-0.5">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVITIES */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Beyond Academics</p>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-2">
                Activities Conducted
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-6">
                Beyond academics, VSS nurtures confidence, leadership and social responsibility through a wide range of programs and events.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activities.map((act, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FaCheckCircle className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" size={13} />
                    {act}
                  </li>
                ))}
              </ul>
            </div>

            {/* ACTIVITY VISUAL CARD */}
            <div className="relative rounded-3xl overflow-hidden bg-[var(--color-primary)] p-8 text-white shadow-xl">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-[var(--color-secondary)]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <p className="text-[var(--color-secondary)] text-xs uppercase tracking-widest mb-3 font-medium">Our Impact</p>
                <h3 className="heading-font text-2xl font-semibold mb-6 leading-snug">
                  Shaping Students Into <span className="text-[var(--color-secondary)]">Leaders</span>
                </h3>
                {[
                  { value: "1200+", label: "Active Students"       },
                  { value: "50+",   label: "Annual Events"         },
                  { value: "60+",   label: "Years of Excellence"   },
                ].map((s, i) => (
                  <div key={i} className={`flex items-center justify-between py-3 ${i !== 2 ? "border-b border-white/10" : ""}`}>
                    <p className="text-white/60 text-sm">{s.label}</p>
                    <p className="heading-font text-xl font-bold text-[var(--color-secondary)]">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ACTIVITIES GALLERY */}
          <div className="relative">
            {/* BACKGROUND ACCENT */}
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[var(--color-secondary)]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* HEADER */}
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 rounded-full px-4 py-1.5 mb-4">
                  <FaImages className="text-[var(--color-secondary)]" size={12} />
                  <p className="secondary-text text-[11px] uppercase tracking-[0.2em] font-medium">Activities Conducted in Samiti</p>
                </div>
                <h2 className="heading-font text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-3">
                  Activities Gallery
                </h2>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <span className="w-10 h-[2px] bg-[var(--color-secondary)]" />
                  <span className="w-5 h-[2px] bg-gray-200" />
                  <span className="w-2 h-[2px] bg-gray-100" />
                </div>
                <p className="text-sm text-gray-500 max-w-[500px] mx-auto">
                  Moments that capture the spirit of learning, growth and community at VSS Pune.
                </p>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {galleryItems.slice(0, visibleCount).map((item, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:border-[var(--color-secondary)]/30 transition-all duration-500 cursor-pointer"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <img
                        src={item.img}
                        alt={item.caption}
                        className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                      />
                    </div>

                    {/* GRADIENT OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* CAPTION */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[var(--color-secondary)] mt-1.5 flex-shrink-0" />
                        <p className="text-white text-xs font-medium leading-snug">{item.caption}</p>
                      </div>
                    </div>

                    {/* TOP CORNER BADGE */}
                    <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-[10px] font-bold">{i + 1}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* LOAD MORE */}
              {visibleCount < galleryItems.length && (
                <div className="text-center mt-10">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 4)}
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-[var(--color-primary)] to-[#2b3c9a] text-white px-8 py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(35,48,125,0.25)] hover:shadow-[0_12px_32px_rgba(35,48,125,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <FaImages size={14} />
                    Load More Photos
                    <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      +{Math.min(4, galleryItems.length - visibleCount)}
                    </span>
                  </button>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="flex gap-1">
                      {Array.from({ length: Math.ceil(galleryItems.length / 4) }).map((_, i) => (
                        <span
                          key={i}
                          className={`h-1 rounded-full transition-all duration-300 ${
                            i < Math.ceil(visibleCount / 4)
                              ? "w-6 bg-[var(--color-secondary)]"
                              : "w-1 bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 ml-2">
                      {Math.min(visibleCount, galleryItems.length)} / {galleryItems.length}
                    </p>
                  </div>
                </div>
              )}

              {/* ALL LOADED */}
              {visibleCount >= galleryItems.length && (
                <div className="text-center mt-10 p-6 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                  <p className="text-sm text-gray-600 font-medium">✨ All photos loaded</p>
                  <p className="text-xs text-gray-400 mt-1">Showing all {galleryItems.length} activities</p>
                </div>
              )}
            </div>
          </div>

          {/* END CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl">

            {/* GLOW */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

              {/* LEFT */}
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Be Part of the Change</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Help Us Build More <span className="text-[var(--color-secondary)]">Facilities</span> for Students
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Every contribution helps us expand our hostels, improve facilities and create better opportunities for rural students across India.
                </p>
              </div>

              {/* RIGHT — BUTTONS */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a
                  href="/support"
                  className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  Support Us
                </a>
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
      </div>
    </>
  );
}
