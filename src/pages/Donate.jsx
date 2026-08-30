import { useState } from "react";
import PageHero from "../components/PageHero";
import heroImg from "../assets/aboutvsspune/aboutvss.png";
import {
  FaHeart, FaHome, FaUtensils, FaUserGraduate,
  FaCheckCircle, FaArrowRight, FaLock, FaGlobe, FaHandshake,
} from "react-icons/fa";
import { sendDonationEmail } from "../services/emailService";

const tiers = [
  {
    icon: <FaHeart />,
    color: "from-orange-400 to-orange-600",
    amount: "USD 420",
    label: "Half-Year Support",
    desc: "Cover 50% of a student's annual cost for one semester.",
    perks: ["Student profile shared with donor", "Progress updates twice a year", "Donations may be deductible to the extent allowed by law"],
  },
  {
    icon: <FaUserGraduate />,
    color: "from-[var(--color-primary)] to-[#2b3c9a]",
    amount: "USD 1,700",
    label: "Full Journey Sponsor",
    desc: "Support a student's complete 3–4 year academic journey.",
    perks: ["Named sponsorship certificate", "Annual student progress report", "Direct student connection", "Donations may be deductible to the extent allowed by law"],
    featured: true,
  },
  {
    icon: <FaUtensils />,
    color: "from-emerald-400 to-emerald-600",
    amount: "USD 2,800",
    label: "Sponsor a Week of Meals",
    desc: "Provide two meals/day for 1,200 students for one full week.",
    perks: ["Meal sponsorship certificate", "Photo update from campus", "Donations may be deductible to the extent allowed by law"],
  },
  {
    icon: <FaHome />,
    color: "from-purple-400 to-purple-600",
    amount: "USD 12,500",
    label: "Sponsor a Hostel Room",
    desc: "Name a room in the new girls hostel on Lajpat campus.",
    perks: ["Name plaque on sponsored room", "Inauguration invitation", "Lifetime recognition", "Donations may be deductible to the extent allowed by law"],
  },
];

const impactItems = [
  { value: "USD 840",   label: "Annual cost per student"      },
  { value: "50%",       label: "Borne by the student"         },
  { value: "1,200+",    label: "Students currently supported" },
  { value: "501(c)(3)", label: "US registered non-profit"     },
];

const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all duration-200";

const initFinancialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  message: "",
};

const initNonFinancialForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  help_type: "",
  profession: "",
  message: "",
};

const normalizeDonationAmount = (value) => {
  const trimmed = String(value || "").trim();
  if (!trimmed) return "";
  return /^usd\b/i.test(trimmed) ? trimmed.replace(/^usd\b/i, "USD") : `USD ${trimmed}`;
};

const withEmailJsTemplateCompatibility = (params) => ({
  ...params,
  "donation\\_type": params.donation_type,
  "first\\_name": params.first_name,
  "last\\_name": params.last_name,
  "donation\\_amount": params.donation_amount,
  "help\\_type": params.help_type,
  "is\\_financial": params.is_financial,
  "is\\_non\\_financial": params.is_non_financial,
});

export default function Donate() {
  const [selectedTier, setSelectedTier] = useState(1);
  const [selectedAmount, setSelectedAmount] = useState(tiers[1].amount);
  const [custom, setCustom] = useState("");
  const [formTab, setFormTab] = useState("financial");
  const [financialForm, setFinancialForm] = useState(initFinancialForm);
  const [nonFinancialForm, setNonFinancialForm] = useState(initNonFinancialForm);
  const [financialStatus, setFinancialStatus] = useState("");
  const [nonFinancialStatus, setNonFinancialStatus] = useState("");

  const handleFinancialChange = (e) => {
    const { name, value } = e.target;
    setFinancialForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleNonFinancialChange = (e) => {
    const { name, value } = e.target;
    setNonFinancialForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFinancialSubmit = async (e) => {
    e.preventDefault();
    setFinancialStatus("sending");

    try {
      await sendDonationEmail(withEmailJsTemplateCompatibility({
        donation_type: "Financial Donor",
        first_name: financialForm.first_name,
        last_name: financialForm.last_name,
        email: financialForm.email,
        phone: financialForm.phone,
        address: "",
        donation_amount: normalizeDonationAmount(custom || selectedAmount),
        help_type: "",
        profession: "",
        message: financialForm.message || "",
        is_financial: true,
        is_non_financial: false,
      }));

      setFinancialStatus("success");
      setFinancialForm(initFinancialForm);
      setCustom("");
      setSelectedAmount(tiers[selectedTier].amount);
    } catch (err) {
      console.error(err);
      setFinancialStatus("error");
    }
  };

  const handleNonFinancialSubmit = async (e) => {
    e.preventDefault();
    setNonFinancialStatus("sending");

    try {
      await sendDonationEmail(withEmailJsTemplateCompatibility({
        donation_type: "Non-Financial Donor",
        first_name: nonFinancialForm.first_name,
        last_name: nonFinancialForm.last_name,
        email: nonFinancialForm.email,
        phone: nonFinancialForm.phone,
        address: "",
        donation_amount: "",
        help_type: nonFinancialForm.help_type,
        profession: nonFinancialForm.profession,
        message: nonFinancialForm.message,
        is_financial: false,
        is_non_financial: true,
      }));

      setNonFinancialStatus("success");
      setNonFinancialForm(initNonFinancialForm);
    } catch (err) {
      console.error(err);
      setNonFinancialStatus("error");
    }
  };

  return (
    <>
      <PageHero
        label="Support Us"
        title="Make a"
        highlight="Difference Today"
        subtitle="Your generosity directly transforms a student's life — from uncertainty to opportunity."
        image={heroImg}
        objectPosition="80% 15%"
      />

      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-16 space-y-20">

          {/* IMPACT STRIP */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactItems.map((item, i) => (
              <div key={i} className={`p-5 rounded-2xl text-center border ${i % 2 === 0 ? "bg-[var(--color-primary)] border-[var(--color-primary)]" : "bg-[var(--color-secondary)] border-[var(--color-secondary)]"}`}>
                <p className="heading-font text-xl md:text-2xl font-bold text-white">{item.value}</p>
                <p className="text-white/70 text-xs mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          {/* DONATION TIERS */}
          <div>
            <div className="text-center mb-12">
              <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Choose Your Impact</p>
              <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">Ways to Give</h2>
              <div className="flex justify-center items-center gap-2">
                <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                <span className="w-4 h-[2px] bg-gray-200" />
                <span className="w-2 h-[2px] bg-gray-100" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
              {tiers.map((tier, i) => (
                <div
                  key={i}
                  onClick={() => {
                    setSelectedTier(i);
                    setSelectedAmount(tier.amount);
                    setCustom("");
                  }}
                  className={`relative cursor-pointer rounded-2xl border p-6 transition-all duration-300 flex flex-col ${
                    selectedTier === i
                      ? "border-[var(--color-primary)] shadow-xl -translate-y-1"
                      : "border-gray-100 hover:shadow-md hover:border-[var(--color-primary)]/20"
                  } ${tier.featured ? "ring-2 ring-[var(--color-primary)]/30" : ""}`}
                >
                  {tier.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--color-secondary)] text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                      Most Popular
                    </div>
                  )}

                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center text-white mb-4 shadow-md`}>
                    {tier.icon}
                  </div>

                  <p className="heading-font text-xl font-bold text-[var(--color-primary)] mb-1">{tier.amount}</p>
                  <p className="text-sm font-semibold text-gray-800 mb-2">{tier.label}</p>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-1">{tier.desc}</p>

                  <ul className="space-y-1.5">
                    {tier.perks.map((perk, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                        <FaCheckCircle className="text-[var(--color-secondary)] mt-0.5 flex-shrink-0" size={11} />
                        {perk}
                      </li>
                    ))}
                  </ul>

                  {selectedTier === i && (
                    <div className="mt-4 w-full h-1 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* DONATION FORM — inline modal UI */}
          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* LEFT INFO */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Your Contribution</p>
                <h2 className="heading-font text-2xl font-semibold text-[var(--color-primary)] mb-3">
                  Complete Your Donation
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                  <span className="w-4 h-[2px] bg-gray-200" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  All donations are processed securely. VSSF is a 501(c)(3) registered non-profit — donations to VSSF may be deductible to the extent allowed by the law.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  { icon: <FaLock size={13} />,        text: "Secure & encrypted payment"    },
                  { icon: <FaCheckCircle size={13} />, text: "501(c)(3) — deductible to the extent allowed by law" },
                  { icon: <FaGlobe size={13} />,       text: "EIN: 33-1919808, Michigan USA"  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-[var(--color-primary)]/8 text-[var(--color-primary)]">
                      {item.icon}
                    </span>
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Selected</p>
                <p className="heading-font text-xl font-bold text-[var(--color-primary)]">{selectedAmount || custom || tiers[selectedTier].amount}</p>
                <p className="text-sm text-gray-600 mt-1">{tiers[selectedTier].label}</p>
              </div>
            </div>

            {/* RIGHT — INLINE FORM UI (same as modal, no popup) */}
            <div className="md:col-span-3">
              <div className="bg-[var(--color-primary)] rounded-t-3xl px-8 py-7 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-52 h-52 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1 mb-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                    <span className="text-white/70 text-[10px] uppercase tracking-[0.2em] font-medium">VSS Foundation</span>
                  </div>
                  <h3 className="heading-font text-lg font-semibold text-white">Donor Information</h3>
                  <p className="text-white/60 text-xs mt-1">501(c)(3) registered · EIN: 33-1919808 · Donations may be deductible to the extent allowed by law</p>

                  {/* TABS */}
                  <div className="flex gap-2 mt-4">
                    {[
                      { key: "financial",    label: "Financial Donor",     icon: <FaHeart size={11} />     },
                      { key: "nonfinancial", label: "Non-Financial Donor", icon: <FaHandshake size={11} /> },
                    ].map((t) => (
                      <button
                        key={t.key}
                        onClick={() => setFormTab(t.key)}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                          formTab === t.key
                            ? "bg-white text-[var(--color-primary)] shadow-md"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                      >
                        {t.icon} {t.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-b-3xl border border-gray-100 shadow-xl px-8 py-7">
                {formTab === "financial" ? (
                  <form className="space-y-4" onSubmit={handleFinancialSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1.5 block">First Name</label>
                        <input name="first_name" type="text" placeholder="Rahul" value={financialForm.first_name} onChange={handleFinancialChange} required className={inputClass} />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1.5 block">Last Name</label>
                        <input name="last_name" type="text" placeholder="Sharma" value={financialForm.last_name} onChange={handleFinancialChange} required className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address</label>
                      <input name="email" type="email" placeholder="you@example.com" value={financialForm.email} onChange={handleFinancialChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number</label>
                      <input name="phone" type="tel" placeholder="+1 (000) 000-0000" value={financialForm.phone} onChange={handleFinancialChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Donation Amount</label>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {["USD 200","USD 420","USD 1,700","USD 2,800","USD 12,500"].map((amt) => (
                          <button key={amt} type="button"
                            onClick={() => { setSelectedAmount(amt); setCustom(""); }}
                            className={`px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                              selectedAmount === amt
                                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                                : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[var(--color-primary)]/30"
                            }`}>{amt}</button>
                        ))}
                      </div>
                      <input type="text" placeholder="Or enter custom amount (USD)" value={custom} onChange={(e) => { setCustom(e.target.value); setSelectedAmount(""); }} className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message <span className="text-gray-300">(optional)</span></label>
                      <textarea name="message" rows={3} placeholder="Any specific project or note..." value={financialForm.message} onChange={handleFinancialChange} className={inputClass + " resize-none"} />
                    </div>
                    <div className="flex items-center gap-3 py-3 px-4 rounded-xl bg-gray-50 border border-gray-100">
                      <FaLock size={12} className="text-gray-400 flex-shrink-0" />
                      <p className="text-xs text-gray-500">Secure & encrypted · Donations to VSSF may be deductible to the extent allowed by the law</p>
                    </div>
                    {financialStatus === "success" && (
                      <div className="flex items-center gap-3 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                        <FaCheckCircle size={15} className="flex-shrink-0" /> Thank you! Your donation inquiry has been received.
                      </div>
                    )}
                    {financialStatus === "error" && (
                      <div className="text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3">
                        Something went wrong. Please try again.
                      </div>
                    )}
                    <button type="submit" disabled={financialStatus === "sending"} className="w-full flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                      <FaHeart size={13} /> {financialStatus === "sending" ? "Submitting..." : "Donate Now"} <FaArrowRight size={11} />
                    </button>
                    <p className="text-center text-xs text-gray-400">By donating you agree to our terms. Donations to VSSF may be deductible to the extent allowed by the law.</p>
                  </form>
                ) : (
                  <form className="space-y-4" onSubmit={handleNonFinancialSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1.5 block">First Name</label>
                        <input name="first_name" type="text" placeholder="Rahul" value={nonFinancialForm.first_name} onChange={handleNonFinancialChange} required className={inputClass} />
                      </div>
                      <div>
                        <label className="text-xs text-gray-500 font-medium mb-1.5 block">Last Name</label>
                        <input name="last_name" type="text" placeholder="Sharma" value={nonFinancialForm.last_name} onChange={handleNonFinancialChange} required className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address</label>
                      <input name="email" type="email" placeholder="you@example.com" value={nonFinancialForm.email} onChange={handleNonFinancialChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number</label>
                      <input name="phone" type="tel" placeholder="+1 (000) 000-0000" value={nonFinancialForm.phone} onChange={handleNonFinancialChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">How would you like to help?</label>
                      <select name="help_type" value={nonFinancialForm.help_type} onChange={handleNonFinancialChange} required className={inputClass}>
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
                      <input name="profession" type="text" placeholder="e.g. Software Engineer, Doctor..." value={nonFinancialForm.profession} onChange={handleNonFinancialChange} required className={inputClass} />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message / Details</label>
                      <textarea name="message" rows={3} placeholder="Tell us how you'd like to contribute..." value={nonFinancialForm.message} onChange={handleNonFinancialChange} required className={inputClass + " resize-none"} />
                    </div>
                    <div className="space-y-2 py-3 px-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                      {["Flexible time commitment","Make a real impact on students' lives","Connect with a global community"].map((pt, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                          <FaCheckCircle size={11} className="text-[var(--color-secondary)] flex-shrink-0" />{pt}
                        </div>
                      ))}
                    </div>
                    {nonFinancialStatus === "success" && (
                      <div className="flex items-center gap-3 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                        <FaCheckCircle size={15} className="flex-shrink-0" /> Thank you! Your interest has been submitted.
                      </div>
                    )}
                    {nonFinancialStatus === "error" && (
                      <div className="text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3">
                        Something went wrong. Please try again.
                      </div>
                    )}
                    <button type="submit" disabled={nonFinancialStatus === "sending"} className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[#1a2568] text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(35,48,125,0.2)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                      <FaHandshake size={13} /> {nonFinancialStatus === "sending" ? "Submitting..." : "Submit My Interest"} <FaArrowRight size={11} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* END CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Other Ways to Help</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Can't Donate? <span className="text-[var(--color-secondary)]">Still Help.</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Volunteer your time, offer work opportunities to students, or simply spread the word about VSS. Every action counts.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a href="/contact" className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200">
                  Get Involved
                </a>
                <a href="https://samiti.org/en/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-7 py-3 rounded-xl text-sm font-semibold backdrop-blur-sm hover:-translate-y-0.5 transition-all duration-200">
                  Visit VSS Website
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
