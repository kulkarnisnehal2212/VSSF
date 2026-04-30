import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  const links = {
    "Quick Links": ["Home", "About Us", "Programs", "Projects", "Contact"],
    "Get Involved": ["Donate", "Volunteer", "Partner With Us", "Sponsor a Student"],
  };

  return (
    <footer className="w-full bg-[#151d4e] text-white/70">

      {/* TOP ACCENT LINE */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent opacity-60" />

      <div className="max-w-[1200px] mx-auto px-6 pt-14 pb-8">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* BRAND COLUMN */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/logo.png" alt="VSSF Logo" className="h-10 w-auto" />
            </div>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Empowering students from rural and under-resourced backgrounds by providing a
              supportive environment for education and holistic growth.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {[
                { icon: <FaFacebookF size={13} />, label: "Facebook" },
                { icon: <FaInstagram size={13} />, label: "Instagram" },
                { icon: <FaYoutube size={13} />,   label: "YouTube"   },
              ].map((s) => (
                <button
                  key={s.label}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-[var(--color-secondary)] text-white transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* LINKS COLUMNS */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-[0.18em] mb-5">
                {heading}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/55 hover:text-[var(--color-secondary)] transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <FaArrowRight size={9} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-[var(--color-secondary)]" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* CONTACT COLUMN */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.18em] mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <FaMapMarkerAlt size={11} className="text-[var(--color-secondary)]" />
                </span>
                <span className="text-white/55 leading-relaxed">Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <FaPhone size={11} className="text-[var(--color-secondary)]" />
                </span>
                <a href="tel:+910000000000" className="text-white/55 hover:text-[var(--color-secondary)] transition-colors duration-200">
                  +91 00000 00000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-7 h-7 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/10">
                  <FaEnvelope size={11} className="text-[var(--color-secondary)]" />
                </span>
                <a href="mailto:info@vss.org" className="text-white/55 hover:text-[var(--color-secondary)] transition-colors duration-200">
                  info@vss.org
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--color-secondary)] rounded-full" />
            <p className="text-xs text-white/35">
              © {new Date().getFullYear()} Vidyarthi Sahayyak Samiti Foundation. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a key={item} href="#" className="text-xs text-white/30 hover:text-[var(--color-secondary)] transition-colors duration-200">
                {item}
              </a>
            ))}
            <span className="w-px h-3 bg-white/10" />
            <p className="text-xs text-white/55 font-medium">
              Developed and maintained with pride by students of Vidyarthi Sahayyak Samiti, Pune.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
