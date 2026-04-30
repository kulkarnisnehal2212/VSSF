import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import h1 from "../../assets/heroimges/Aapte-hostel.jpg";
import h2 from "../../assets/heroimges/Lajpat-Bhavan.jpg";
import h3 from "../../assets/heroimges/PD-Karkhanis-slider.jpg";
import h4 from "../../assets/heroimges/Sumitra-photo.jpg";
import h5 from "../../assets/heroimges/latikagaitonde-hostel.jpg";
import h6 from "../../assets/heroimges/madhubhau_chaudhari-hostel.jpg";

export default function Hero() {
  const images = [h1, h2, h3, h4, h5, h6];
  const [current, setCurrent] = useState(0);

  // 🔁 Smooth background change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-[95vh] md:min-h-[90vh] relative overflow-hidden">
      
      {/* 🔁 BACKGROUND IMAGES */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={img}
            alt="hero"
            className="w-full h-full object-cover animate-zoom"
          />
        </div>
      ))}

      {/*  GRADIENT OVERLAY (REFINED) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/90 via-[var(--color-primary)]/65 via-[40%] to-transparent"></div>

      {/*  CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1200px] mx-auto px-6 md:pl-10 w-full mt-30">
          
          <div className="max-w-[560px] text-white">
            
            {/* LABEL */}
            <p className="secondary-text text-[11px] uppercase tracking-[0.2em] body-font mb-4 font-medium">
              Empowering Students
            </p>

            {/* HEADING */}
            <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] font-semibold leading-[1.15] mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              Building Futures <br /> Beyond Education
            </h1>

            {/* DESCRIPTION */}
            <p className="text-sm sm:text-base text-gray-200 body-font leading-relaxed mb-8 max-w-[520px]">
              Providing a safe, supportive and holistic environment for students 
              from rural India to grow, learn and achieve their dreams.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 flex-wrap">
              
              <Link to="/donate">
                <button className="secondary-bg text-white px-7 py-3 rounded-lg text-sm font-semibold hover:shadow-lg transition">
                  Support a Student
                </button>
              </Link>

              <Link to="/projects">
                <button className="border border-white/80 text-white px-7 py-3 rounded-lg text-sm hover:bg-white hover:text-[var(--color-primary)] transition">
                  Explore Programs
                </button>
              </Link>

            </div>

            {/* OPTIONAL TRUST LINE */}
            <p className="text-xs text-gray-300 mt-4">
              Trusted by 8000+ students across India
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}