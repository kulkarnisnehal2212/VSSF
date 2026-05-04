import { useState, useEffect } from "react";
import { FaTimes, FaHeart, FaHandshake, FaArrowRight, FaLock, FaCheckCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa";
import { rules, validateForm, sanitizeName, sanitizePhone, sanitizeAmount } from "../../utils/validation";

const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all duration-200";
const inputError = "w-full bg-gray-50 border border-rose-300 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200";

const FieldError = ({ msg }) => msg ? (
  <p className="flex items-center gap-1.5 text-xs text-rose-500 mt-1">
    <FaExclamationCircle size={11} /> {msg}
  </p>
) : null;

const donationAmounts = ["USD 200", "USD 420", "USD 1,700", "USD 2,800", "USD 12,500"];

const initFinancial = { first_name: "", last_name: "", email: "", phone: "", address: "", custom_amount: "", message: "" };
const initNonFinancial = { first_name: "", last_name: "", email: "", phone: "", help_type: "", profession: "", details: "" };

export default function DonateModal({ isOpen, onClose, defaultTab = "financial" }) {
  const [tab, setTab] = useState(defaultTab);
  const [selectedAmount, setSelectedAmount] = useState("");

  // Financial form state
  const [fin, setFin] = useState(initFinancial);
  const [finErrors, setFinErrors] = useState({});
  const [finTouched, setFinTouched] = useState({});
  const [finStatus, setFinStatus] = useState("");

  // Non-financial form state
  const [non, setNon] = useState(initNonFinancial);
  const [nonErrors, setNonErrors] = useState({});
  const [nonTouched, setNonTouched] = useState({});
  const [nonStatus, setNonStatus] = useState("");

  useEffect(() => { setTab(defaultTab); }, [defaultTab]);
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // ── FINANCIAL VALIDATION ──
  const validateFin = (f, amt) => validateForm({
    first_name:    { value: f.first_name,  rule: rules.name     },
    last_name:     { value: f.last_name,   rule: rules.name     },
    email:         { value: f.email,       rule: rules.email    },
    phone:         { value: f.phone,       rule: rules.phone    },
    amount:        { value: amt || f.custom_amount, rule: rules.amount },
  });

  const handleFinChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "first_name" || name === "last_name") v = sanitizeName(value);
    // phone: don't sanitize — let validation show the error
    if (name === "custom_amount") { v = sanitizeAmount(value); setSelectedAmount(""); }
    const updated = { ...fin, [name]: v };
    setFin(updated);
    if (finTouched[name] || v !== "") {
      setFinTouched((p) => ({ ...p, [name]: true }));
      setFinErrors(validateFin(updated, selectedAmount));
    }
  };

  const handleFinBlur = (e) => {
    setFinTouched((p) => ({ ...p, [e.target.name]: true }));
    setFinErrors(validateFin(fin, selectedAmount));
  };

  const handleFinSubmit = (e) => {
    e.preventDefault();
    const allTouched = { first_name: true, last_name: true, email: true, phone: true, amount: true };
    setFinTouched(allTouched);
    const errs = validateFin(fin, selectedAmount);
    setFinErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setFinStatus("success");
    // TODO: wire emailjs here
  };

  // ── NON-FINANCIAL VALIDATION ──
  const validateNon = (f) => validateForm({
    first_name: { value: f.first_name, rule: rules.name     },
    last_name:  { value: f.last_name,  rule: rules.name     },
    email:      { value: f.email,      rule: rules.email    },
    phone:      { value: f.phone,      rule: rules.phone    },
    help_type:  { value: f.help_type,  rule: rules.select   },
    profession: { value: f.profession, rule: rules.required },
    details:    { value: f.details,    rule: rules.message  },
  });

  const handleNonChange = (e) => {
    const { name, value } = e.target;
    let v = value;
    if (name === "first_name" || name === "last_name") v = sanitizeName(value);
    // phone: don't sanitize — let validation show the error
    const updated = { ...non, [name]: v };
    setNon(updated);
    if (nonTouched[name] || v !== "") {
      setNonTouched((p) => ({ ...p, [name]: true }));
      setNonErrors(validateNon(updated));
    }
  };

  const handleNonBlur = (e) => {
    setNonTouched((p) => ({ ...p, [e.target.name]: true }));
    setNonErrors(validateNon(non));
  };

  const handleNonSubmit = (e) => {
    e.preventDefault();
    const allTouched = { first_name: true, last_name: true, email: true, phone: true, help_type: true, profession: true, details: true };
    setNonTouched(allTouched);
    const errs = validateNon(non);
    setNonErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setNonStatus("success");
    // TODO: wire emailjs here
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-[720px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>

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
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 flex-shrink-0 mt-1">
              <FaTimes size={13} />
            </button>
          </div>
          <div className="relative z-10 flex gap-2 mt-5">
            {[
              { key: "financial",    label: "Financial Donor",     icon: <FaHeart size={11} />     },
              { key: "nonfinancial", label: "Non-Financial Donor", icon: <FaHandshake size={11} /> },
            ].map((t) => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${tab === t.key ? "bg-white text-[var(--color-primary)] shadow-md" : "bg-white/10 text-white/70 hover:bg-white/20"}`}>
                {t.icon} {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* BODY */}
        <div className="px-8 py-7">

          {/* ── FINANCIAL FORM ── */}
          {tab === "financial" && (
            <form className="space-y-5" onSubmit={handleFinSubmit} noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">First Name <span className="text-rose-400">*</span></label>
                  <input name="first_name" type="text" placeholder="Rahul" value={fin.first_name} onChange={handleFinChange} onBlur={handleFinBlur} className={finTouched.first_name && finErrors.first_name ? inputError : inputClass} />
                  <FieldError msg={finTouched.first_name && finErrors.first_name} />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Last Name <span className="text-rose-400">*</span></label>
                  <input name="last_name" type="text" placeholder="Sharma" value={fin.last_name} onChange={handleFinChange} onBlur={handleFinBlur} className={finTouched.last_name && finErrors.last_name ? inputError : inputClass} />
                  <FieldError msg={finTouched.last_name && finErrors.last_name} />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address <span className="text-rose-400">*</span></label>
                <input name="email" type="email" placeholder="you@example.com" value={fin.email} onChange={handleFinChange} onBlur={handleFinBlur} className={finTouched.email && finErrors.email ? inputError : inputClass} />
                <FieldError msg={finTouched.email && finErrors.email} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number <span className="text-rose-400">*</span></label>
                <input name="phone" type="tel" placeholder="+1 (000) 000-0000" value={fin.phone} onChange={handleFinChange} onBlur={handleFinBlur} maxLength={15} className={finTouched.phone && finErrors.phone ? inputError : inputClass} />
                <FieldError msg={finTouched.phone && finErrors.phone} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Address <span className="text-gray-300">(optional)</span></label>
                <input name="address" type="text" placeholder="City, State, Country" value={fin.address} onChange={handleFinChange} className={inputClass} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-2 block">Donation Amount <span className="text-rose-400">*</span></label>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {donationAmounts.map((amt) => (
                    <button key={amt} type="button"
                      onClick={() => { setSelectedAmount(amt); setFin((p) => ({ ...p, custom_amount: "" })); setFinErrors((p) => ({ ...p, amount: null })); }}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${selectedAmount === amt ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)] shadow-md" : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[var(--color-primary)]/30"}`}>
                      {amt}
                    </button>
                  ))}
                </div>
                <input name="custom_amount" type="text" placeholder="Or enter custom amount (USD)" value={fin.custom_amount} onChange={handleFinChange} onBlur={handleFinBlur} className={finTouched.amount && finErrors.amount ? inputError : inputClass} />
                <FieldError msg={finTouched.amount && finErrors.amount} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message <span className="text-gray-300">(optional)</span></label>
                <textarea name="message" rows={3} placeholder="Any specific project or note..." value={fin.message} onChange={handleFinChange} className={inputClass + " resize-none"} />
              </div>

              <div className="flex items-center gap-4 py-3 px-4 rounded-xl bg-gray-50 border border-gray-100">
                <FaLock size={12} className="text-gray-400 flex-shrink-0" />
                <p className="text-xs text-gray-500">Secure & encrypted · 100% tax deductible under 501(c)(3)</p>
              </div>

              {finStatus === "success" && (
                <div className="flex items-center gap-3 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                  <FaCheckCircle size={15} className="flex-shrink-0" /> Thank you! Your donation inquiry has been received. We'll be in touch shortly.
                </div>
              )}
              {finStatus === "error" && (
                <div className="flex items-center gap-3 text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3">
                  <FaTimesCircle size={15} className="flex-shrink-0" /> Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" disabled={finStatus === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                <FaHeart size={13} /> {finStatus === "sending" ? "Submitting..." : "Donate Now"} <FaArrowRight size={11} />
              </button>
            </form>
          )}

          {/* ── NON-FINANCIAL FORM ── */}
          {tab === "nonfinancial" && (
            <form className="space-y-5" onSubmit={handleNonSubmit} noValidate>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">First Name <span className="text-rose-400">*</span></label>
                  <input name="first_name" type="text" placeholder="Rahul" value={non.first_name} onChange={handleNonChange} onBlur={handleNonBlur} className={nonTouched.first_name && nonErrors.first_name ? inputError : inputClass} />
                  <FieldError msg={nonTouched.first_name && nonErrors.first_name} />
                </div>
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Last Name <span className="text-rose-400">*</span></label>
                  <input name="last_name" type="text" placeholder="Sharma" value={non.last_name} onChange={handleNonChange} onBlur={handleNonBlur} className={nonTouched.last_name && nonErrors.last_name ? inputError : inputClass} />
                  <FieldError msg={nonTouched.last_name && nonErrors.last_name} />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address <span className="text-rose-400">*</span></label>
                <input name="email" type="email" placeholder="you@example.com" value={non.email} onChange={handleNonChange} onBlur={handleNonBlur} className={nonTouched.email && nonErrors.email ? inputError : inputClass} />
                <FieldError msg={nonTouched.email && nonErrors.email} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number <span className="text-rose-400">*</span></label>
                <input name="phone" type="tel" placeholder="+1 (000) 000-0000" value={non.phone} onChange={handleNonChange} onBlur={handleNonBlur} maxLength={15} className={nonTouched.phone && nonErrors.phone ? inputError : inputClass} />
                <FieldError msg={nonTouched.phone && nonErrors.phone} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">How would you like to help? <span className="text-rose-400">*</span></label>
                <select name="help_type" value={non.help_type} onChange={handleNonChange} onBlur={handleNonBlur} className={nonTouched.help_type && nonErrors.help_type ? inputError : inputClass}>
                  <option value="">Select an option</option>
                  <option>Provide Mentorship (Palya Palaka Yojana)</option>
                  <option>Identify Earn & Learn Opportunities</option>
                  <option>Provide Internship / Placement References</option>
                  <option>Join as a Samiti Mitra</option>
                  <option>Other</option>
                </select>
                <FieldError msg={nonTouched.help_type && nonErrors.help_type} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Your Profession / Field <span className="text-rose-400">*</span></label>
                <input name="profession" type="text" placeholder="e.g. Software Engineer, Doctor..." value={non.profession} onChange={handleNonChange} onBlur={handleNonBlur} className={nonTouched.profession && nonErrors.profession ? inputError : inputClass} />
                <FieldError msg={nonTouched.profession && nonErrors.profession} />
              </div>

              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message / Details <span className="text-rose-400">*</span></label>
                <textarea name="details" rows={3} placeholder="Tell us how you'd like to contribute..." value={non.details} onChange={handleNonChange} onBlur={handleNonBlur} className={(nonTouched.details && nonErrors.details ? inputError : inputClass) + " resize-none"} />
                <FieldError msg={nonTouched.details && nonErrors.details} />
              </div>

              <div className="space-y-2 py-3 px-4 rounded-xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                {["Flexible time commitment", "Make a real impact on students' lives", "Connect with a global community"].map((pt, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                    <FaCheckCircle size={11} className="text-[var(--color-secondary)] flex-shrink-0" /> {pt}
                  </div>
                ))}
              </div>

              {nonStatus === "success" && (
                <div className="flex items-center gap-3 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                  <FaCheckCircle size={15} className="flex-shrink-0" /> Thank you! Your interest has been submitted. We'll reach out to you soon.
                </div>
              )}
              {nonStatus === "error" && (
                <div className="flex items-center gap-3 text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3">
                  <FaTimesCircle size={15} className="flex-shrink-0" /> Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" disabled={nonStatus === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[#1a2568] text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(35,48,125,0.2)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
                <FaHandshake size={13} /> {nonStatus === "sending" ? "Submitting..." : "Submit My Interest"} <FaArrowRight size={11} />
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
