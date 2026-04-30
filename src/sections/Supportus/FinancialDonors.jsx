import { FaCheckCircle, FaArrowRight, FaUniversity, FaExchangeAlt, FaMobileAlt, FaBuilding, FaHandHoldingHeart, FaRupeeSign } from "react-icons/fa";
import girlsHostel   from "../../assets/heroimges/latikagaitonde-hostel.jpg";
import donarimg      from "../../assets/supportus/donationcause.png";
import kalyanrao     from "../../assets/supportus/kalyanrao-hostel.png";
import cafImg        from "../../assets/supportus/caf and benevity.png";

const donationCauses = [
  { amount: "USD 420",    label: "Student subsidy for one year"                              },
  { amount: "USD 1,700",  label: "Student subsidy for all 4 years"                           },
  { amount: "USD 200",    label: "Sponsor lunch or dinner for 1,200 students (special day)"  },
  { amount: "USD 2,800",  label: "Sponsor lunch & dinner for 1,200 students for a full week" },
  { amount: "USD 12,500", label: "Hostel Room Sponsorship in New Girl's Hostel"              },
  { amount: "—",          label: "Kalyanrao Jadhav Boys Hostel, Ahilya Nagar Donation Package"},
];

const donationPackages = [
  { item: "One Floor",                        amount: "220,000" },
  { item: "Library",                          amount: "37,500"  },
  { item: "Conference Room",                  amount: "37,500"  },
  { item: "Furniture for Student Rooms",      amount: "37,500"  },
  { item: "Solar Power Generation System",    amount: "31,000"  },
  { item: "Medical Centre",                   amount: "25,000"  },
  { item: "Dining Hall Furniture, Pantry",    amount: "25,000"  },
  { item: "Student Room",                     amount: "12,500"  },
  { item: "Garden & Gym",                     amount: "6,200"   },
];

const waysToDonate = [
  {
    icon: <FaUniversity />,
    title: "By Check to VSSF",
    color: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
    border: "border-[var(--color-primary)]/20",
    lines: [
      "Make checks payable to: Vidyarthi Sahayyak Samiti Foundation",
      "Mail to: VSS Foundation, c/o Anjali Anturkar",
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

export default function FinancialDonors({ openModal }) {
  return (
    <div className="space-y-20">

      {/* SECTION 1 — Provide Financial Support */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border-2 border-[var(--color-secondary)]/20 pointer-events-none" />
          <img src={girlsHostel} alt="Girls Hostel" className="relative w-full h-[320px] object-cover rounded-2xl shadow-lg" />
        </div>
        <div>
          <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Financial Support</p>
          <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
            Provide Financial <span className="text-[var(--color-secondary)]">Support</span>
          </h2>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
            <span className="w-4 h-[2px] bg-gray-200" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            Vidyarthi Sahayyak Samiti Foundation is a non-profit charitable organization. Your financial contribution directly supports students from rural India in their educational journey.
          </p>
          <button onClick={openModal} className="inline-flex items-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200">
            Donate Now <FaArrowRight size={11} />
          </button>
        </div>
      </div>

      {/* SECTION 2 — Donation Causes */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[var(--color-primary)]/15 pointer-events-none" />
          <img src={donarimg} alt="Donation Causes" className="relative w-full h-[320px] object-cover rounded-2xl shadow-lg" />
        </div>
        <div>
          <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Ways to Give</p>
          <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
            Donation <span className="text-[var(--color-secondary)]">Causes</span>
          </h2>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
            <span className="w-4 h-[2px] bg-gray-200" />
          </div>
          <ul className="space-y-3">
            {donationCauses.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" size={13} />
                <span className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[var(--color-primary)]">{item.amount}</span> — {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SECTION 3 — Kalyanrao Hostel */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Infrastructure</p>
          <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3 leading-snug">
            Kalyanrao Jadhav Boys Hostel,{" "}
            <span className="text-[var(--color-secondary)]">Ahilya Nagar</span>
          </h2>
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
            <span className="w-4 h-[2px] bg-gray-200" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-6">
            The hostel is nearing completion. Donors have the opportunity to name facilities of their choice, contributing meaningfully to the infrastructure and future of the students.
          </p>

          {/* DONATION TABLE */}
          <div className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="bg-[var(--color-primary)] px-5 py-3">
              <p className="text-white text-sm font-semibold">Donation Packages</p>
            </div>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="px-5 py-2.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-5 py-2.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">USD Amount</th>
                </tr>
              </thead>
              <tbody>
                {donationPackages.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-5 py-3 text-gray-700">{row.item}</td>
                    <td className="px-5 py-3 text-right font-semibold text-[var(--color-primary)]">{row.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[var(--color-secondary)]/20 pointer-events-none" />
          <img src={kalyanrao} alt="Kalyanrao Hostel" className="relative w-full h-auto rounded-2xl shadow-lg object-cover" />
        </div>
      </div>

      {/* SECTION 4 — Ways to Donate */}
      <div>
        <div className="text-center mb-10">
          <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Payment Methods</p>
          <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
            Ways to <span className="text-[var(--color-secondary)]">Donate</span>
          </h2>
          <div className="flex justify-center items-center gap-2">
            <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
            <span className="w-4 h-[2px] bg-gray-200" />
            <span className="w-2 h-[2px] bg-gray-100" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mb-8">
          {waysToDonate.map((way, i) => (
            <div key={i} className={`group rounded-2xl border ${way.border} bg-white p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300`}>
              <div className="flex items-start gap-4">
                <div className={`w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl ${way.color} text-lg`}>
                  {way.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    <span className="text-[var(--color-primary)] font-bold mr-1">{i + 1}.</span>
                    {way.title}
                  </p>
                  {way.lines.map((line, j) => (
                    <p key={j} className="text-xs text-gray-600 leading-relaxed">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* POINT 5 — CAF / Benevity with image */}
        <div className="grid md:grid-cols-2 gap-8 items-center rounded-2xl border border-[var(--color-primary)]/15 bg-[var(--color-primary)]/3 p-6 md:p-8">
          <div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-lg">
                <FaHandHoldingHeart />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  <span className="text-[var(--color-primary)] font-bold mr-1">5.</span>
                  Workplace Giving via CAF America or Benevity
                </p>
                <p className="text-xs text-gray-600 leading-relaxed mb-3">
                  Employer match will be automatically added to your donation.
                </p>
                <p className="text-xs text-gray-500 italic">
                  VSSF is exempt under US IRS Code Section 501(C)(3) — EIN: 33-1919808
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img src={cafImg} alt="CAF America and Benevity" className="max-h-[120px] w-auto object-contain" />
          </div>
        </div>

        {/* POINT 6 — NRO/NRE */}
        <div className="flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-secondary)]/20 bg-[var(--color-secondary)]/5">
          <div className="w-11 h-11 flex-shrink-0 flex items-center justify-center rounded-xl bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-lg">
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

      {/* FINAL CTA */}
      <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-[520px]">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
              <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Make a Difference</span>
            </div>
            <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
              Please Fill Out the <span className="text-[var(--color-secondary)]">Donation Form</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed">
              Your contribution is fully tax deductible. Every dollar goes directly toward supporting a student's education and future.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
            <button onClick={openModal} className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200">
              Donate Now <FaArrowRight size={11} />
            </button>
            <a href="/contact" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
