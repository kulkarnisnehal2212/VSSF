import { useEffect } from "react";
import { FaTimes, FaUniversity, FaExchangeAlt, FaMobileAlt, FaBuilding, FaHandHoldingHeart, FaRupeeSign, FaArrowRight } from "react-icons/fa";
import cafImg from "../../assets/supportus/caf and benevity.png";

const donationMethods = [
  {
    icon: <FaUniversity />,
    title: "By Check to VSSF",
    color: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    border: "border-[var(--color-primary)]/20",
    lines: [
      "Make checks payable to:",
      "Vidyarthi Sahayyak Samiti Foundation",
      "Mail to:",
      "VSS Foundation, c/o Anjali Anturkar",
      "47061 Hidden River Circle N, Canton, MI 48188",
    ],
  },
  {
    icon: <FaExchangeAlt />,
    title: "By Wire Transfer",
    color: "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
    border: "border-[var(--color-secondary)]/20",
    lines: [
      "JP Morgan Chase Bank N.A.",
      "A/c number: 738369605",
      "Routing number: 021000021",
    ],
  },
  {
    icon: <FaBuilding />,
    title: "By ACH / Direct Deposit",
    color: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    border: "border-[var(--color-primary)]/20",
    lines: [
      "JP Morgan Chase Bank N.A.",
      "A/c number: 738369605",
      "Routing number: 072000326",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "By Zelle",
    color: "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
    border: "border-[var(--color-secondary)]/20",
    lines: [
      "Vidyarthi Sahayyak Samiti Foundation",
      "Email: treasurer.vssf@samiti.org",
    ],
  },
];

export default function WaysToDonateModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-[880px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="relative bg-[var(--color-primary)] rounded-t-3xl px-6 sm:px-8 py-6 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-medium">VSS Foundation</span>
              </div>
              <h2 className="heading-font text-xl font-semibold text-white">Ways to Donate</h2>
              <p className="text-white/60 text-xs mt-1">501(c)(3) registered - EIN: 33-1919808</p>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 flex-shrink-0 mt-1">
              <FaTimes size={13} />
            </button>
          </div>
        </div>

        <div className="px-5 sm:px-8 py-6">
          <div className="grid md:grid-cols-2 gap-4">
            {donationMethods.map((method, index) => (
              <div key={method.title} className={`rounded-2xl border ${method.border} bg-white p-4`}>
                <div className="flex items-start gap-3">
                  <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${method.color} text-base`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-2">
                      <span className="text-[var(--color-primary)] font-bold mr-1">{index + 1}.</span>
                      {method.title}
                    </p>
                    <div className="space-y-0.5">
                      {method.lines.map((line, lineIndex) => (
                        <p key={lineIndex} className={`text-xs leading-relaxed ${line.endsWith(":") ? "font-semibold text-gray-700 pt-1" : "text-gray-600"}`}>
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 grid md:grid-cols-[1fr_auto] gap-4 items-center rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/[0.03] p-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-base">
                <FaHandHoldingHeart />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  <span className="text-[var(--color-primary)] font-bold mr-1">5.</span>
                  Workplace Giving via CAF America or Benevity
                </p>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Employer match will be automatically added to your donation.
                </p>
                <p className="text-xs text-gray-500 italic mt-1">
                  VSSF is exempt under US IRS Code Section 501(C)(3) - EIN: 33-1919808
                </p>
              </div>
            </div>
            <img src={cafImg} alt="CAF America and Benevity" className="max-h-[74px] w-auto object-contain justify-self-center" />
          </div>

          <div className="mt-4 flex items-start gap-3 p-4 rounded-2xl border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/5">
            <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-base">
              <FaRupeeSign />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-1">
                <span className="text-[var(--color-primary)] font-bold mr-1">6.</span>
                From your funds in NRO/NRE account in India
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Please contact us for donation protocol for donating through NRO/NRE accounts.
              </p>
              <a href="/contact" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-secondary)] hover:underline mt-2">
                Contact us for details <FaArrowRight size={9} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
