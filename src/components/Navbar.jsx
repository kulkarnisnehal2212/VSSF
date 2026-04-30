import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef();
  const navRef = useRef();
  const location = useLocation();

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // close mobile menu when cursor leaves the entire nav
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const handleLeave = () => setOpen(false);
    nav.addEventListener("mouseleave", handleLeave);
    return () => nav.removeEventListener("mouseleave", handleLeave);
  }, []);

  // close both on route change
  useEffect(() => {
    setDropdown(false);
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* TOP HEADER */}
      <div className="bg-[#151d4e] text-white text-xs py-2 px-4 sm:px-6 border-b border-white/10">
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">

          {/* LEFT — CONTACT */}
          <div className="flex items-center gap-5">
            <a href="mailto:contact@samiti.org" className="flex items-center gap-1.5 text-white/70 hover:text-[var(--color-secondary)] transition-colors duration-200">
              <FaEnvelope size={11} />
              <span>contact@samiti.org</span>
            </a>
            <span className="hidden sm:block w-px h-3 bg-white/20" />
            <a href="tel:+912024475044" className="hidden sm:flex items-center gap-1.5 text-white/70 hover:text-[var(--color-secondary)] transition-colors duration-200">
              <FaPhoneAlt size={10} />
              <span>+91 20 2447 5044</span>
            </a>
          </div>

          {/* RIGHT — TAGLINE */}
          <div className="hidden md:flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
            <span className="text-white/60 tracking-wide">Empowering Youth Through Education</span>
          </div>

        </div>
      </div>

      {/* 🔷 MAIN NAVBAR */}
      <nav className="w-full bg-[var(--color-bg-white)] shadow-sm sticky top-0 z-50" ref={navRef}>
        
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          
          {/* 🔵 LOGO (IMPROVED VISIBILITY) */}
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.png"
              alt="logo"
              className="h-14 sm:h-16 w-auto object-contain"
            />

            <div className="leading-tight">
              <h1 className="heading-font text-sm sm:text-base font-semibold primary-text">
                Vidyarthi Sahayyak
              </h1>
              <p className="text-[10px] sm:text-xs text-[var(--color-text-secondary)]">
                Samiti Foundation
              </p>
            </div>
          </div>

          {/* 🧭 DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-8">
            
            <div className="flex items-center gap-6 text-sm body-font text-[var(--color-text-primary)]">
              
              <Link to="/" className="hover:secondary-text transition">
                Home
              </Link>

              <Link to="/about" className="hover:secondary-text transition">
                About VSSF
              </Link>

              {/* DROPDOWN */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-1 cursor-pointer hover:secondary-text transition"
                >
                  About VSS Pune
                  <FaChevronDown size={12} className={`transition-transform duration-200 ${dropdown ? "rotate-180" : ""}`} />
                </button>

                {dropdown && (
                  <div className="absolute top-9 left-0 w-56 bg-white shadow-xl rounded-xl border border-gray-100 z-50 overflow-hidden">
                    <Link
                      to="/vss-pune/about"
                      onClick={() => setDropdown(false)}
                      className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-150"
                    >
                      About VSS
                    </Link>
                    <div className="h-px bg-gray-100" />
                    <Link
                      to="/vss-pune/facilities"
                      onClick={() => setDropdown(false)}
                      className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-150"
                    >
                      Facilities & Activities
                    </Link>
                    <div className="h-px bg-gray-100" />
                    <Link
                      to="/vss-pune/earn-learn"
                      onClick={() => setDropdown(false)}
                      className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:bg-[var(--color-primary)] hover:text-white transition-colors duration-150"
                    >
                      Earn & Learn
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/resources" className="hover:secondary-text transition">
                Resources
              </Link>

              <Link to="/projects" className="hover:secondary-text transition">
                Projects
              </Link>

              <Link to="/contact" className="hover:secondary-text transition">
                Contact
              </Link>
            </div>

            {/* CTA */}
            <Link to="/support">
              <button className="secondary-bg text-white px-5 py-2 rounded-lg text-sm font-medium body-font hover:opacity-90 transition">
                Support Us
              </button>
            </Link>
          </div>

          {/* 📱 MOBILE MENU BUTTON */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden px-4 sm:px-6 pb-5 pt-2 space-y-1 text-sm body-font bg-white border-t border-gray-100 shadow-lg">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition">Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition">About VSSF</Link>

            <div className="px-3 pt-2 pb-1">
              <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold">About VSS Pune</p>
            </div>
            <Link to="/vss-pune/about" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 pl-6 rounded-xl hover:bg-[var(--color-primary)] hover:text-white text-gray-600 transition">About VSS</Link>
            <Link to="/vss-pune/facilities" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 pl-6 rounded-xl hover:bg-[var(--color-primary)] hover:text-white text-gray-600 transition">Facilities & Activities</Link>
            <Link to="/vss-pune/earn-learn" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 pl-6 rounded-xl hover:bg-[var(--color-primary)] hover:text-white text-gray-600 transition">Earn & Learn</Link>

            <Link to="/resources" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition">Resources</Link>
            <Link to="/projects" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition">Projects</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition">Contact</Link>

            <div className="pt-2">
              <Link to="/support" onClick={() => setOpen(false)}>
                <button className="w-full secondary-bg text-white py-3 rounded-xl font-semibold text-sm">
                  Support Us
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}