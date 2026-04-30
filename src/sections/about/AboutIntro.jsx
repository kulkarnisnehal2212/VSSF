import PageHero from "../../components/PageHero";
import aboutintro from "../../assets/aboutimg/aboutintro.png";
import { FaCheckCircle } from "react-icons/fa";

const stats = [
  { value: "8,000+",    label: "Students Supported" },
  { value: "60+",       label: "Years of Legacy"    },
  { value: "501(c)(3)", label: "US Registered NGO"  },
];

const highlights = [
  "Safe & healthy hostel environment for rural students",
  "Fundraising & global donor network via VSSF",
  "Earn & Learn opportunities for self-reliance",
  "Registered in Michigan, USA since Feb 2025",
];

export default function AboutIntro() {
  return (
    <>
      {/* HERO */}
      <PageHero
        label="About Us"
        title="Vidyarthi Sahayyak"
        highlight="Samiti Foundation"
        subtitle="Empowering under-resourced students from rural India through education, mentorship and a supportive community."
        image={aboutintro}
        objectPosition="70% 40%"
      />

      {/* CONTENT SECTION */}
      <section className="w-full py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">

          {/* STATS ROW */}
          <div className="grid grid-cols-3 gap-4 mb-14 p-6 rounded-2xl bg-[var(--color-primary)] shadow-lg">
            {stats.map((s, i) => (
              <div key={i} className={`text-center ${i !== stats.length - 1 ? "border-r border-white/15" : ""}`}>
                <p className="heading-font text-2xl md:text-3xl font-bold text-[var(--color-secondary)]">{s.value}</p>
                <p className="text-white/60 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* TWO COLUMN — text left, image right */}
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXT */}
            <div>
              <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-3 font-medium">Who We Are</p>

              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] leading-snug mb-4">
                Building Futures,{" "}
                <span className="text-[var(--color-secondary)]">One Student</span> at a Time
              </h2>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Vidyarthi Sahayyak Samiti Foundation promotes activities to support educational
                opportunities for under-resourced students from rural India and other countries
                by providing a safe and healthy environment conducive to their holistic learning.
              </p>

              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                VSSF works closely with{" "}
                <span className="text-[var(--color-secondary)] font-medium">Vidyarthi Sahayyak Samiti, Pune</span>
                {" "}— supporting VSS through fundraising, Earn & Learn opportunities and connecting students with global mentors.
              </p>

              <ul className="space-y-2.5">
                {highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <FaCheckCircle className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" size={13} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* IMAGE — right */}
            <div className="relative">
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[var(--color-secondary)]/20 pointer-events-none" />
              <img
                src={aboutintro}
                alt="VSS Donor Visit"
                className="relative w-full h-[420px] object-contain rounded-2xl shadow-lg bg-gray-50"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md">
                <p className="text-xs text-[var(--color-primary)] leading-snug">
                  Visit of our Donors, Sadhana & Sunil Shenoy, Portland, USA to New Girls Hostel during it's Construction (January 2024) —{" "}
                  <span className="font-medium text-[var(--color-primary)]">Jan 2024</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
