import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-[900px] mx-auto px-6 text-center">

        <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-4">
          Join the Mission
        </p>

        <h2 className="heading-font text-3xl md:text-4xl font-semibold text-[var(--color-primary)] mb-6">
          Join Us in Making a Difference
        </h2>

        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10 max-w-[650px] mx-auto">
          Every contribution creates opportunity. Be a part of a journey that
          transforms lives through education and empowers students to build a
          better future.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/support">
            <button className="secondary-bg text-white px-7 py-3 rounded-lg text-sm font-medium hover:scale-105 transition shadow-md">
              Support a Student
            </button>
          </Link>
          <Link to="/contact">
            <button className="border border-[var(--color-primary)] text-[var(--color-primary)] px-7 py-3 rounded-lg text-sm font-medium hover:bg-[var(--color-primary)] hover:text-white transition">
              Contact Us
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}