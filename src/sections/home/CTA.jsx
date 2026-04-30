import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="w-full py-28 bg-[var(--color-light)]">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* 🔥 FLOATING CARD */}
        <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.12)]">

          {/* GRADIENT BACKGROUND */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] via-[#2b3c8a] to-[var(--color-primary)]"></div>

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.04]"></div>

          {/* CONTENT */}
          <div className="relative z-10 px-8 py-14 md:px-16 md:py-16 text-center text-white">

            {/* SMALL LABEL */}
            <p className="text-xs uppercase tracking-[0.25em] opacity-80 mb-4">
              Make an Impact
            </p>

            {/* HEADING */}
            <h2 className="heading-font text-3xl md:text-4xl font-semibold mb-5 leading-snug">
              Be the Reason Someone Succeeds
            </h2>

            {/* TEXT */}
            <p className="text-sm md:text-base opacity-90 max-w-[600px] mx-auto mb-10 leading-relaxed">
              Your support can transform a student’s life — from uncertainty to opportunity.
            </p>

            {/* BUTTONS */}
            <div className="flex justify-center gap-4 flex-wrap">

              <Link to="/support">
                <button className="bg-[var(--color-secondary)] px-7 py-3 rounded-lg font-semibold shadow-md hover:scale-105 hover:shadow-lg transition">
                  Support a Student
                </button>
              </Link>

              <Link to="/about">
                <button className="border border-white/70 px-7 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--color-primary)] transition">
                  Learn More
                </button>
              </Link>

            </div>

            {/* TRUST TEXT */}
            <p className="text-xs mt-8 opacity-70">
              Trusted by 8000+ students across India
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}