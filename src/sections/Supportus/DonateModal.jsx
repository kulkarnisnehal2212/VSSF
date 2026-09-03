import { useState, useEffect } from "react";
import { FaTimes, FaHeart, FaArrowRight, FaLock, FaCheckCircle, FaExclamationCircle, FaTimesCircle } from "react-icons/fa";
import { rules, validateForm, sanitizeName, sanitizeAmount } from "../../utils/validation";
import { sendDonationEmail } from "../../services/emailService";

const inputClass = "w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all duration-200";
const inputError = "w-full bg-gray-50 border border-rose-300 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200";

const FieldError = ({ msg }) => msg ? (
  <p className="flex items-center gap-1.5 text-xs text-rose-500 mt-1">
    <FaExclamationCircle size={11} /> {msg}
  </p>
) : null;

const initForm = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  street_address_1: "",
  street_address_2: "",
  city: "",
  zip_code: "",
  state: "",
  country: "",
  donation_type: "",
  amount: "",
  help_type: "",
  profession: "",
  message: "",
};

const validateAmount = (value) => {
  if (!value || value.trim() === "") return "Please enter a donation amount.";
  const normalized = value.replace(/,/g, "");
  if (!/^\d+(\.\d{1,2})?$/.test(normalized) || Number(normalized) <= 0) {
    return "Enter a valid numeric donation amount.";
  }
  return null;
};

const logDonationEmailError = (err) => {
  console.error("Donation EmailJS send failed");
  console.error("EmailJS status:", err?.status);
  console.error("EmailJS text:", err?.text || err?.message || err);
  console.error(err);
};

export default function DonateModal({ isOpen, onClose }) {
  const [form, setForm] = useState(initForm);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const validateDonationForm = (values) => {
    const fields = {
      first_name: { value: values.first_name, rule: rules.name },
      last_name: { value: values.last_name, rule: rules.name },
      email: { value: values.email, rule: rules.email },
      phone: { value: values.phone, rule: rules.phone },
      street_address_1: { value: values.street_address_1, rule: rules.required },
      street_address_2: { value: values.street_address_2, rule: rules.required },
      city: { value: values.city, rule: rules.required },
      zip_code: { value: values.zip_code, rule: rules.required },
      state: { value: values.state, rule: rules.required },
      country: { value: values.country, rule: rules.required },
      donation_type: { value: values.donation_type, rule: rules.select },
    };

    if (values.donation_type === "Financial Donation") {
      fields.amount = { value: values.amount, rule: validateAmount };
    }

    if (values.donation_type === "Non-Financial Donation") {
      fields.help_type = { value: values.help_type, rule: rules.select };
      fields.profession = { value: values.profession, rule: rules.required };
    }

    return validateForm(fields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let nextValue = value;

    if (name === "first_name" || name === "last_name") nextValue = sanitizeName(value);
    if (name === "amount") nextValue = sanitizeAmount(value);

    const updated = { ...form, [name]: nextValue };

    if (name === "donation_type") {
      updated.amount = "";
      updated.help_type = "";
      updated.profession = "";
      updated.message = form.message;
    }

    setForm(updated);
    if (touched[name] || nextValue !== "" || name === "donation_type") {
      setTouched((prev) => {
        const nextTouched = { ...prev, [name]: true };
        if (name === "donation_type") {
          delete nextTouched.amount;
          delete nextTouched.help_type;
          delete nextTouched.profession;
        }
        return nextTouched;
      });
      setErrors(validateDonationForm(updated));
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    setErrors(validateDonationForm(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const activeTouched = {
      first_name: true,
      last_name: true,
      email: true,
      phone: true,
      street_address_1: true,
      street_address_2: true,
      city: true,
      zip_code: true,
      state: true,
      country: true,
      donation_type: true,
    };

    if (form.donation_type === "Financial Donation") activeTouched.amount = true;
    if (form.donation_type === "Non-Financial Donation") {
      activeTouched.help_type = true;
      activeTouched.profession = true;
    }

    setTouched(activeTouched);
    const validationErrors = validateDonationForm(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    const isFinancial = form.donation_type === "Financial Donation";
    const address = [
      form.street_address_1,
      form.street_address_2,
      form.city,
      form.state,
      form.zip_code,
      form.country,
    ].filter(Boolean).join(", ");

    setStatus("sending");
    try {
      await sendDonationEmail({
        first_name: form.first_name,
        last_name: form.last_name,
        email: form.email,
        phone: form.phone,
        street_address_1: form.street_address_1,
        street_address_2: form.street_address_2,
        city: form.city,
        zip_code: form.zip_code,
        state: form.state,
        country: form.country,
        donation_type: form.donation_type,
        amount: isFinancial ? form.amount : "",
        help_type: isFinancial ? "" : form.help_type,
        profession: isFinancial ? "" : form.profession,
        message: form.message || "",
        address,
        donation_amount: isFinancial ? form.amount : "",
        is_financial: isFinancial,
        is_non_financial: !isFinancial,
      });
      setStatus("success");
      setForm(initForm);
      setTouched({});
      setErrors({});
    } catch (err) {
      logDonationEmailError(err);
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="relative z-10 w-full max-w-[720px] max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl" onClick={(e) => e.stopPropagation()}>
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
              <p className="text-white/60 text-xs mt-1">Vidyarthi Sahayyak Samiti Foundation is classified as a 501(c)(3) non-profit organization by the standards of the Internal Revenue Service (IRS).  Therefore, the donation may be tax-deductible to the extent allowed by law.</p>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200 flex-shrink-0 mt-1">
              <FaTimes size={13} />
            </button>
          </div>
        </div>

        <div className="px-8 py-7">
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">First Name <span className="text-rose-400">*</span></label>
                <input name="first_name" type="text" placeholder="Rahul" value={form.first_name} onChange={handleChange} onBlur={handleBlur} className={touched.first_name && errors.first_name ? inputError : inputClass} />
                <FieldError msg={touched.first_name && errors.first_name} />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Last Name <span className="text-rose-400">*</span></label>
                <input name="last_name" type="text" placeholder="Sharma" value={form.last_name} onChange={handleChange} onBlur={handleBlur} className={touched.last_name && errors.last_name ? inputError : inputClass} />
                <FieldError msg={touched.last_name && errors.last_name} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address <span className="text-rose-400">*</span></label>
                <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} onBlur={handleBlur} className={touched.email && errors.email ? inputError : inputClass} />
                <FieldError msg={touched.email && errors.email} />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number <span className="text-rose-400">*</span></label>
                <input name="phone" type="tel" placeholder="+1 (000) 000-0000" value={form.phone} onChange={handleChange} onBlur={handleBlur} maxLength={15} className={touched.phone && errors.phone ? inputError : inputClass} />
                <FieldError msg={touched.phone && errors.phone} />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-medium mb-1.5 block">Street Address 1 <span className="text-rose-400">*</span></label>
              <input name="street_address_1" type="text" placeholder="Street address" value={form.street_address_1} onChange={handleChange} onBlur={handleBlur} className={touched.street_address_1 && errors.street_address_1 ? inputError : inputClass} />
              <FieldError msg={touched.street_address_1 && errors.street_address_1} />
            </div>

            <div>
              <label className="text-xs text-gray-500 font-medium mb-1.5 block">Street Address 2 <span className="text-rose-400">*</span></label>
              <input name="street_address_2" type="text" placeholder="Apartment, suite, unit, building" value={form.street_address_2} onChange={handleChange} onBlur={handleBlur} className={touched.street_address_2 && errors.street_address_2 ? inputError : inputClass} />
              <FieldError msg={touched.street_address_2 && errors.street_address_2} />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">City <span className="text-rose-400">*</span></label>
                <input name="city" type="text" placeholder="City" value={form.city} onChange={handleChange} onBlur={handleBlur} className={touched.city && errors.city ? inputError : inputClass} />
                <FieldError msg={touched.city && errors.city} />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">ZIP / Postal Code <span className="text-rose-400">*</span></label>
                <input name="zip_code" type="text" placeholder="ZIP / Postal Code" value={form.zip_code} onChange={handleChange} onBlur={handleBlur} className={touched.zip_code && errors.zip_code ? inputError : inputClass} />
                <FieldError msg={touched.zip_code && errors.zip_code} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">State <span className="text-rose-400">*</span></label>
                <input name="state" type="text" placeholder="State" value={form.state} onChange={handleChange} onBlur={handleBlur} className={touched.state && errors.state ? inputError : inputClass} />
                <FieldError msg={touched.state && errors.state} />
              </div>
              <div>
                <label className="text-xs text-gray-500 font-medium mb-1.5 block">Country <span className="text-rose-400">*</span></label>
                <input name="country" type="text" placeholder="Country" value={form.country} onChange={handleChange} onBlur={handleBlur} className={touched.country && errors.country ? inputError : inputClass} />
                <FieldError msg={touched.country && errors.country} />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 font-medium mb-1.5 block">Donation Type <span className="text-rose-400">*</span></label>
              <select name="donation_type" value={form.donation_type} onChange={handleChange} onBlur={handleBlur} className={touched.donation_type && errors.donation_type ? inputError : inputClass}>
                <option value="">Select a donation type</option>
                <option>Financial Donation</option>
                <option>Non-Financial Donation</option>
              </select>
              <FieldError msg={touched.donation_type && errors.donation_type} />
            </div>

            {form.donation_type === "Financial Donation" && (
              <>
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Donation Amount <span className="text-rose-400">*</span></label>
                  <input name="amount" type="number" min="1" step="0.01" placeholder="Enter amount in USD" value={form.amount} onChange={handleChange} onBlur={handleBlur} className={touched.amount && errors.amount ? inputError : inputClass} />
                  <FieldError msg={touched.amount && errors.amount} />
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message <span className="text-gray-300">(optional)</span></label>
                  <textarea name="message" rows={3} placeholder="Any specific project or note..." value={form.message} onChange={handleChange} className={inputClass + " resize-none"} />
                </div>
              </>
            )}

            {form.donation_type === "Non-Financial Donation" && (
              <>
                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">How would you like to help? <span className="text-rose-400">*</span></label>
                  <select name="help_type" value={form.help_type} onChange={handleChange} onBlur={handleBlur} className={touched.help_type && errors.help_type ? inputError : inputClass}>
                    <option value="">Select an option</option>
                    <option>Provide Mentorship (Palya Palaka Yojana)</option>
                    <option>Identify Earn & Learn Opportunities</option>
                    <option>Provide Internship / Placement References</option>
                    <option>Join as a Samiti Mitra</option>
                    <option>Other</option>
                  </select>
                  <FieldError msg={touched.help_type && errors.help_type} />
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Your Profession / Field <span className="text-rose-400">*</span></label>
                  <input name="profession" type="text" placeholder="e.g. Software Engineer, Doctor..." value={form.profession} onChange={handleChange} onBlur={handleBlur} className={touched.profession && errors.profession ? inputError : inputClass} />
                  <FieldError msg={touched.profession && errors.profession} />
                </div>

                <div>
                  <label className="text-xs text-gray-500 font-medium mb-1.5 block">Message <span className="text-gray-300">(optional)</span></label>
                  <textarea name="message" rows={3} placeholder="Tell us how you'd like to contribute..." value={form.message} onChange={handleChange} className={inputClass + " resize-none"} />
                </div>
              </>
            )}

            <div className="flex items-center gap-4 py-3 px-4 rounded-xl bg-gray-50 border border-gray-100">
              <FaLock size={12} className="text-gray-400 flex-shrink-0" />
              <p className="text-xs text-gray-500">Secure & encrypted - Donations to VSSF may be deductible to the extent allowed by law</p>
            </div>

            {status === "success" && (
              <div className="flex items-center gap-3 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                <FaCheckCircle size={15} className="flex-shrink-0" /> Thank you! Your donation inquiry has been received. We'll be in touch shortly.
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-3 text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3">
                <FaTimesCircle size={15} className="flex-shrink-0" /> Something went wrong. Please try again.
              </div>
            )}

            <button type="submit" disabled={!form.donation_type || status === "sending"}
              className="w-full flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed">
              <FaHeart size={13} /> {status === "sending" ? "Submitting..." : "Submit"} <FaArrowRight size={11} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
