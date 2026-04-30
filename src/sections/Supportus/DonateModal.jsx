import { useState, useEffect } from "react";
import { FaTimes, FaHeart, FaHandshake, FaArrowRight, FaLock, FaCheckCircle } from "react-icons/fa";

const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all duration-200";

const donationAmounts = ["USD 200", "USD 420", "USD 1,700", "USD 2,800", "USD 12,500"];

export default function DonateModal({ isOpen, onClose, defaultTab = "financial" }) {
  const [tab, setTab] = useState(defaultTab);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");

  // sync tab when defaultTab changes
  useEffect(() => { setTab(defaultTab); }, [defaultTab]);

  // lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6"
      onClick={onClose}
    >
      {/* BACKDROP */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* MODAL */}
      <div
        className="relative z-10 w-full max-w-[720px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="relative bg-[var(--color-primary)] rounded-t-3xl px-8 py-7 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-medium">VSS Foundation</span>
              </div>
              <h2 className="heading-font text-xl font-semibold text-white">Support a Student's Future</h2>
              <p className="text-white/60 text-xs mt-1">501(c)(3) registered · EIN: 33-1919808 · Tax deductible</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 flex-shrink-0 mt-1"
            >
              <FaTimes size={13} />
            </button>
          </div>

          {/* TABS */}
          <div className="relative z-10 flex gap-2 mt-5">
            {[
              { key: "financial",    label: "Financial Donor",     icon: <FaHeart size={11} />     },
              { key: "nonfinancial", label: "Non-Financial Donor", icon: <FaHandshake size={11} /> },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  tab === t.key
                    ? "bg-white text-[var(--color-primary)] shadow-md"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* BODY */}
        <div className="px-8 py-7">

          {/* ── FINANCIAL FORM ── */}
          {tab === "financial" && (
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">First Name</label>
                  <input type="text" placeholder="Rahul" className={inputClass} />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Last Name</label>
                  <input type="text" placeholder="Sharma" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address</label>
                <input type="email" placeholder="you@example.com" className={inputClass} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number</label>
                <input type="tel" placeholder="+1 (000) 000-0000" className={inputClass} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Address <span className="text-gray-300">(optional)</span></label>
                <input type="text" placeholder="City, State, Country" className={inputClass} />
              </div>

              {/* AMOUNT PILLS */}
              <div>
                <label className="text-xs text-gray-500 font-medium mb-2 block">Select Donation Amount</label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {donationAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => { setSelectedAmount(amt); setCustomAmount(""); }}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                        selectedAmount === amt
                          ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md"
                          : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[var(--color-primary)]/30"
                      }`}
                    >
                      {amt}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Or enter custom amount (USD)"
                  value={customAmount}
                  onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(""); }}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message <span className="text-gray-300">(optional)</span></label>
                <textarea rows={3} placeholder="Any specific project or note..." className={inputClass + " resize-none"} />
              </div>

              {/* TRUST */}
              <div className="flex items-center gap-4 py-3 px-4 rounded-xl bg-gray-50 border border-gray-100">
                <FaLock size={12} className="text-gray-400 flex-shrink-0" />
                <p className="text-xs text-gray-500">Secure & encrypted · 100% tax deductible under 501(c)(3)</p>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaHeart size={13} /> Donate Now <FaArrowRight size={11} />
              </button>
            </form>
          )}

          {/* ── NON-FINANCIAL FORM ── */}
          {tab === "nonfinancial" && (
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">First Name</label>
                  <input type="text" placeholder="Rahul" className={inputClass} />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Last Name</label>
                  <input type="text" placeholder="Sharma" className={inputClass} />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address</label>
                <input type="email" placeholder="you@example.com" className={inputClass} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number</label>
                <input type="tel" placeholder="+1 (000) 000-0000" className={inputClass} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">How would you like to help?</label>
                <select className={inputClass}>
                  <option value="">Select an option</option>
                  <option>Provide Mentorship (Palya Palaka Yojana)</option>
                  <option>Identify Earn & Learn Opportunities</option>
                  <option>Provide Internship / Placement References</option>
                  <option>Join as a Samiti Mitra</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Your Profession / Field</label>
                <input type="text" placeholder="e.g. Software Engineer, Doctor..." className={inputClass} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message / Details</label>
                <textarea rows={3} placeholder="Tell us how you'd like to contribute..." className={inputClass + " resize-none"} />
              </div>

              {/* HIGHLIGHTS */}
              <div className="space-y-2 py-3 px-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                {["Flexible time commitment", "Make a real impact on students' lives", "Connect with a global community"].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                    <FaCheckCircle size={11} className="text-[var(--color-secondary)] flex-shrink-0" />
                    {pt}
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[#1a2568] text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(35,48,125,0.2)] hover:-translate-y-0.5 transition-all duration-200"
              >
                <FaHandshake size={13} /> Submit My Interest <FaArrowRight size={11} />
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
