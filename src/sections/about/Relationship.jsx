import { useState } from "react";
import { FaUniversity, FaGlobe, FaUserGraduate, FaPlay } from "react-icons/fa";
import VideoModal from "../../components/VideoModal";

const VSS_FILM_ID = "KetG-Pqafhw";

export default function Relationship() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <section className="w-full py-28 bg-white">

      <div className="max-w-[1100px] mx-auto px-6 text-center">

        {/* 🔹 HEADER */}
        <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-3">
          How It Works
        </p>

        <h2 className="heading-font text-3xl md:text-4xl text-[var(--color-primary)] mb-4">
          Our Relationship with VSS Pune
        </h2>

        <p className="text-gray-500 text-sm max-w-[600px] mx-auto mb-16">
          A connected ecosystem where local support, global outreach, and student 
          potential come together to create meaningful impact.
        </p>

        {/* 🔥 FLOW SYSTEM */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 relative">

          {/* 🔶 VSS */}
          <div className="bg-white rounded-xl shadow-md p-6 w-[260px] text-center hover:-translate-y-2 hover:shadow-lg transition">
            
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center">
              <FaUniversity className="text-[var(--color-secondary)] text-xl" />
            </div>

            <h3 className="font-semibold text-gray-800 mb-2">
              VSS Pune
            </h3>

            <p className="text-sm text-gray-600">
              Provides on-ground student support, accommodation and mentorship.
            </p>
          </div>

          {/* ➡️ LINE */}
          <div className="hidden md:block w-20 h-[2px] bg-gradient-to-r from-gray-300 to-gray-200"></div>

          {/* 🔵 VSSF */}
          <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl shadow-md p-6 w-[280px] text-center scale-105 hover:shadow-xl transition">
            
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
              <FaGlobe className="text-[var(--color-primary)] text-xl" />
            </div>

            <h3 className="font-semibold text-gray-800 mb-2">
              VSSF (Global)
            </h3>

            <p className="text-sm text-gray-600">
              Enables global funding, partnerships and awareness to support VSS.
            </p>
          </div>

          {/* ➡️ LINE */}
          <div className="hidden md:block w-20 h-[2px] bg-gradient-to-r from-gray-300 to-gray-200"></div>

          {/* 🟢 STUDENTS */}
          <div className="bg-white rounded-xl shadow-md p-6 w-[260px] text-center hover:-translate-y-2 hover:shadow-lg transition">
            
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center">
              <FaUserGraduate className="text-[var(--color-secondary)] text-xl" />
            </div>

            <h3 className="font-semibold text-gray-800 mb-2">
              Students
            </h3>

            <p className="text-sm text-gray-600">
              Gain education, skills and opportunities to build successful futures.
            </p>
          </div>

        </div>

        {/* 🔥 ACTION BUTTONS (CORRECT POSITION) */}
        <div className="mt-12 flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => setPlaying(true)}
            className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-lg text-sm font-medium hover:scale-105 transition shadow-md"
          >
            <FaPlay className="text-xs" />
            Watch VSS Film
          </button>

          <a
            href="https://samiti.org/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--color-primary)] text-[var(--color-primary)] px-6 py-3 rounded-lg text-sm font-medium hover:bg-[var(--color-primary)] hover:text-white transition"
          >
            Visit VSS Website
          </a>

        </div>



      </div>
    </section>

      <VideoModal videoId={VSS_FILM_ID} isOpen={playing} onClose={() => setPlaying(false)} />
    </>
  );
}