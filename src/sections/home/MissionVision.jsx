import {
  FaBullseye,
  FaEye,
  FaUsers,
  FaBook,
  FaShieldAlt,
  FaLeaf,
} from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="w-full py-10 bg-gradient-to-b from-white to-gray-50 fade-up">

      <div className="max-w-[1250px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-6 fade-up-delay">
          <p className="secondary-text text-xs uppercase tracking-[0.2em] body-font mb-2">
            Who We Are
          </p>

          <h2 className="heading-font text-2xl md:text-[2rem] font-semibold text-[var(--color-primary)] mb-3">
            Our Mission & Vision
          </h2>

          {/* DOTS */}
          <div className="flex justify-center items-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[var(--color-secondary)] rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
            <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
          </div>

          <p className="text-sm text-gray-600 max-w-[700px] mx-auto leading-relaxed">
            Vidyarthi Sahayyak Samiti Foundation promotes activities to support
            educational opportunities for under-resourced students from rural India
            and other countries by providing a safe and healthy environment conducive
            to their holistic learning.
          </p>
        </div>

        {/* MAIN CARDS */}
        <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-8 mb-6">

          {/* MISSION */}
          <div className="bg-orange-50/80 backdrop-blur-sm rounded-xl shadow-md p-6 w-full md:w-[48%] border-l-4 border-[var(--color-secondary)] card-hover flex flex-col">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[var(--color-secondary)]/15 p-3 rounded-full">
                <FaBullseye className="text-[var(--color-secondary)] text-lg" />
              </div>
              <h3 className="heading-font text-base font-semibold text-gray-800 uppercase tracking-wide">
                Our Mission
              </h3>
            </div>
            <p className="text-[14px] text-gray-600 leading-relaxed flex-1">
              To promote educational opportunities for under-resourced students by
              providing a safe, healthy and supportive environment that encourages
              holistic learning and personal growth.
            </p>
          </div>

          {/* CENTER CONNECTOR */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center w-[60px] h-[60px] bg-white rounded-full shadow-lg border border-gray-100 z-10 pulse-soft">
            <FaUsers className="text-[var(--color-primary)] text-lg" />
          </div>

          {/* VISION */}
          <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl shadow-md p-6 w-full md:w-[48%] border-r-4 border-[var(--color-primary)] card-hover flex flex-col">
            <div className="flex items-center gap-4 mb-3">
              <div className="bg-[var(--color-primary)]/15 p-3 rounded-full">
                <FaEye className="text-[var(--color-primary)] text-lg" />
              </div>
              <h3 className="heading-font text-base font-semibold text-gray-800 uppercase tracking-wide">
                Our Vision
              </h3>
            </div>
            <p className="text-[14px] text-gray-600 leading-relaxed flex-1">
              Creating a sustainable ecosystem where students can thrive academically
              and professionally and become responsible contributors to society.
            </p>
          </div>
        </div>

        {/* VALUES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-gray-100 pt-5">

          <div className="flex items-start gap-3 justify-self-center relative">
            <FaShieldAlt className="text-[var(--color-secondary)] text-lg mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Safe Environment</p>
              <p className="text-xs text-gray-500">Ensuring safety & well-being</p>
            </div>
            <span className="hidden md:block absolute right-[-16px] top-1/2 -translate-y-1/2 w-[1px] h-8 bg-blue-100"></span>
          </div>

          <div className="flex items-start gap-3 justify-self-center relative">
            <FaBook className="text-[var(--color-secondary)] text-lg mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Holistic Learning</p>
              <p className="text-xs text-gray-500">Mind, body & values</p>
            </div>
            <span className="hidden md:block absolute right-[-16px] top-1/2 -translate-y-1/2 w-[1px] h-8 bg-blue-100"></span>
          </div>

          <div className="flex items-start gap-3 justify-self-center relative">
            <FaUsers className="text-[var(--color-secondary)] text-lg mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Equal Opportunity</p>
              <p className="text-xs text-gray-500">Empowering every student</p>
            </div>
            <span className="hidden md:block absolute right-[-16px] top-1/2 -translate-y-1/2 w-[1px] h-8 bg-blue-100"></span>
          </div>

          <div className="flex items-start gap-3 justify-self-center">
            <FaLeaf className="text-[var(--color-secondary)] text-lg mt-1 shrink-0" />
            <div>
              <p className="text-sm font-semibold text-gray-800">Sustainable Impact</p>
              <p className="text-xs text-gray-500">Building future together</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
