import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const journey = [
  { year: "1960", title: "Foundation",         tag: "The Beginning", desc: "Vidyarthi Sahayyak Samiti was established in Pune with a vision to support rural students pursuing higher education in the city." },
  { year: "1975", title: "First Hostel",        tag: "Infrastructure", desc: "The first dedicated student hostel was inaugurated, providing safe and affordable accommodation to students from rural Maharashtra." },
  { year: "1985", title: "Expansion",           tag: "Growth",        desc: "Hostels and facilities expanded significantly to accommodate a growing number of students from across India." },
  { year: "2005", title: "Holistic Development",tag: "Programs",      desc: "New programs introduced for personality development, leadership training and value-based education beyond academics." },
  { year: "2015", title: "Global Outreach",     tag: "Global",        desc: "Vidyarthi Sahayyak Samiti Foundation (VSSF) formed to connect global supporters, donors and funding networks." },
  { year: "2020", title: "Digital Growth",      tag: "Technology",    desc: "Technology integrated into learning, management and communication systems to modernise student support." },
  { year: "2024", title: "New Girls Hostel",    tag: "Milestone",     desc: "Construction of a new girls hostel completed with support from global donors, expanding capacity and safety for female students." },
  { year: "Today",title: "8,000+ Lives Impacted",tag: "Impact",      desc: "Thousands of students empowered, building successful careers and giving back to their communities across India and beyond." },
];

function TimelineCard({ item }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 hover:shadow-md transition-all duration-300 w-full">
      <span className="inline-block text-[10px] font-semibold uppercase tracking-widest text-[var(--color-secondary)] bg-[var(--color-secondary)]/10 px-2.5 py-1 rounded-full mb-2">
        {item.tag}
      </span>
      <h3 className="heading-font text-sm font-semibold text-[var(--color-primary)] mb-1">
        {item.title}
      </h3>
      <p className="text-[11px] text-gray-500 leading-relaxed line-clamp-3">{item.desc}</p>
    </div>
  );
}

export default function OurJourney() {
  const scrollRef = useRef();

  const scroll = (dir) => {
    scrollRef.current.scrollBy({ left: dir === "left" ? -320 : 320, behavior: "smooth" });
  };

  return (
    <section className="w-full py-8 section-bg overflow-hidden">
      <div className="max-w-[1300px] mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-6">
          <div>
            <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Our Story</p>
            <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)]">
              Our Journey Through Time
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Over 60 years of transforming lives, one student at a time.
            </p>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] text-gray-500 transition-all duration-200 shadow-sm"
            >
              <FaChevronLeft size={12} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 bg-white hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] text-gray-500 transition-all duration-200 shadow-sm"
            >
              <FaChevronRight size={12} />
            </button>
          </div>
        </div>

        {/* TIMELINE */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {journey.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 snap-start px-2"
              style={{ width: "clamp(220px, 25vw, 280px)" }}
            >
              <div className="flex flex-col">

                {/* TOP SLOT — fixed height so spine stays level */}
                <div className="h-[160px] flex items-end pb-2 w-full">
                  {index % 2 === 0 && <TimelineCard item={item} />}
                </div>

                {/* SPINE ROW */}
                <div className="flex items-center">
                  {/* LEFT LINE */}
                  <div className={`flex-1 h-[2px] ${index === 0 ? "bg-transparent" : "bg-[var(--color-primary)]/30"}`} />

                  {/* DOT + YEAR */}
                  <div className="flex flex-col items-center flex-shrink-0 z-10">
                    <div className="w-4 h-4 rounded-full bg-[var(--color-secondary)] border-[3px] border-white shadow-md" />
                    <div className="mt-1.5 bg-[var(--color-primary)] text-white text-[10px] font-bold px-2.5 py-0.5 rounded-md shadow-sm whitespace-nowrap">
                      {item.year}
                    </div>
                  </div>

                  {/* RIGHT LINE */}
                  <div className={`flex-1 h-[2px] ${index === journey.length - 1 ? "bg-transparent" : "bg-[var(--color-primary)]/30"}`} />
                </div>

                {/* BOTTOM SLOT — fixed height so spine stays level */}
                <div className="h-[160px] flex items-start pt-2 w-full">
                  {index % 2 !== 0 && <TimelineCard item={item} />}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
