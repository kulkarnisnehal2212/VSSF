import { useState } from "react";
import PageHero from "../components/PageHero";
import heroImg from "../assets/aboutvsspune/aboutvss.png";
import { sendContactEmail } from "../services/emailService";
import { rules, validateForm, sanitizeName, sanitizePhone } from "../utils/validation";
import {
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,
  FaFacebookF, FaInstagram, FaYoutube, FaArrowRight,
  FaCheckCircle, FaTimesCircle, FaExclamationCircle,
} from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaMapMarkerAlt size={16} />,
    label: "Our Address",
    value: "Vidyarthi Sahayyak Samiti Foundation\nC/o 47061 Hidden River N\nCanton, Michigan, 48188, USA",
    link: null,
    color: "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
  },
  {
    icon: <FaPhoneAlt size={14} />,
    label: "Call Us",
    value: "(248) 202-6613",
    link: "tel:2482026613",
    color: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
  },
  {
    icon: <FaEnvelope size={14} />,
    label: "Email Us",
    value: "president.vssf@samiti.org",
    link: "mailto:president.vssf@samiti.org",
    color: "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
  },
];

const inputClass = "w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[var(--color-primary)]/50 focus:ring-2 focus:ring-[var(--color-primary)]/10 transition-all duration-200";
const inputError = "w-full bg-white border border-rose-300 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-rose-400 focus:ring-2 focus:ring-rose-100 transition-all duration-200";
const FieldError = ({ msg }) => msg ? (
  <p className="flex items-center gap-1.5 text-xs text-rose-500 mt-1">
    <FaExclamationCircle size={11} /> {msg}
  </p>
) : null;

export default function Contact() {
  const [form, setForm] = useState({ first_name: "", last_name: "", address: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("");

  const validate = (f) => validateForm({
    first_name: { value: f.first_name, rule: rules.name    },
    last_name:  { value: f.last_name,  rule: rules.name    },
    email:      { value: f.email,      rule: rules.email   },
    phone:      { value: f.phone,      rule: rules.phone   },
    message:    { value: f.message,    rule: rules.message },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let sanitized = value;
    if (name === "first_name" || name === "last_name") sanitized = sanitizeName(value);
    // phone: don't sanitize letters — let validation show the error
    const updated = { ...form, [name]: sanitized };
    setForm(updated);
    // validate live on every keystroke once field has been touched
    if (touched[name] || sanitized !== "") {
      setTouched((prev) => ({ ...prev, [name]: true }));
      setErrors(validate(updated));
    }
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { first_name: true, last_name: true, email: true, phone: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setStatus("sending");
    try {
      await sendContactEmail(form);
      setStatus("success");
      setForm({ first_name: "", last_name: "", address: "", phone: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        label="Contact Us"
        title="Let's Start a"
        highlight="Conversation"
        subtitle="Whether you want to donate, volunteer, partner or simply learn more — we'd love to hear from you."
        image={heroImg}
        objectPosition="80% 15%"
      />

      <div className="w-full bg-white">
        <div className="max-w-[1100px] mx-auto px-6 py-16">

          {/* MAIN GRID */}
          <div className="grid md:grid-cols-5 gap-10 items-start">

            {/* LEFT — INFO */}
            <div className="md:col-span-2 space-y-6">

              <div>
                <p className="secondary-text text-xs uppercase tracking-[0.2em] mb-2 font-medium">Reach Out</p>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-3">
                  Get in Touch
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-[2px] bg-[var(--color-secondary)]" />
                  <span className="w-4 h-[2px] bg-gray-200" />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  We would love to hear from you. Reach out for any queries, collaborations, donations or support opportunities.
                </p>
              </div>

              {/* CONTACT CARDS */}
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-2xl border border-gray-100 bg-white hover:shadow-md hover:border-[var(--color-primary)]/15 transition-all duration-300 group">
                    <div className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl ${item.color}`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">{item.label}</p>
                      {item.link ? (
                        <a href={item.link} className="text-sm font-semibold text-gray-800 hover:text-[var(--color-secondary)] transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* SOCIAL */}
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">Follow Us</p>
                <div className="flex gap-3">
                  {[
                    { icon: <FaFacebookF size={13} />, label: "Facebook"  },
                    { icon: <FaInstagram size={13} />, label: "Instagram" },
                    { icon: <FaYoutube size={13} />,   label: "YouTube"   },
                  ].map((s) => (
                    <button
                      key={s.label}
                      aria-label={s.label}
                      className="w-9 h-9 flex items-center justify-center rounded-xl bg-gray-50 border border-gray-100 text-gray-500 hover:bg-[var(--color-primary)] hover:text-white hover:border-[var(--color-primary)] transition-all duration-200"
                    >
                      {s.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* VSS PUNE CONTACT */}
              <div className="p-5 rounded-2xl bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/10">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3 font-medium">VSS Pune Office</p>
                <div className="space-y-2">
                  <p className="text-sm text-gray-700 flex items-center gap-2">
                    <FaPhoneAlt size={11} className="text-[var(--color-secondary)]" />
                    +91 20 2447 5044
                  </p>
                  <p className="text-sm text-gray-700 flex items-center gap-2">
                    <FaEnvelope size={11} className="text-[var(--color-secondary)]" />
                    contact@samiti.org
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT — FORM */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 md:p-10">

                <div className="mb-8">
                  <h3 className="heading-font text-xl font-semibold text-[var(--color-primary)] mb-1">Send Us a Message</h3>
                  <p className="text-sm text-gray-400">We'll get back to you within 24–48 hours.</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>

                  {/* NAME ROW */}
                  <div className="grid grid-cols-2 gap-4">
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

                  {/* EMAIL */}
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Email Address <span className="text-rose-400">*</span></label>
                    <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} onBlur={handleBlur} className={touched.email && errors.email ? inputError : inputClass} />
                    <FieldError msg={touched.email && errors.email} />
                  </div>

                  {/* PHONE */}
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Phone Number <span className="text-rose-400">*</span></label>
                    <input name="phone" type="tel" placeholder="+1 (000) 000-0000" value={form.phone} onChange={handleChange} onBlur={handleBlur} maxLength={15} className={touched.phone && errors.phone ? inputError : inputClass} />
                    <FieldError msg={touched.phone && errors.phone} />
                  </div>

                  {/* ADDRESS */}
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Address <span className="text-gray-300">(optional)</span></label>
                    <input name="address" type="text" placeholder="City, State, Country" value={form.address} onChange={handleChange} className={inputClass} />
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="text-xs text-gray-500 font-medium mb-1.5 block">Your Message <span className="text-rose-400">*</span></label>
                    <textarea name="message" rows={4} placeholder="How can we help you?" value={form.message} onChange={handleChange} onBlur={handleBlur} className={(touched.message && errors.message ? inputError : inputClass) + " resize-none"} />
                    <FieldError msg={touched.message && errors.message} />
                  </div>

                  {/* STATUS MESSAGE */}
                  {status === "success" && (
                    <div className="flex items-center gap-3 text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                      <FaCheckCircle size={15} className="flex-shrink-0" />
                      We appreciate your interest in supporting our mission and will get back to you shortly.
                    </div>
                  )}
                  {status === "error" && (
                    <div className="flex items-center gap-3 text-sm text-rose-600 bg-rose-50 border border-rose-100 rounded-xl px-4 py-3">
                      <FaTimesCircle size={15} className="flex-shrink-0" />
                      Your request could not be processed at this time.
                    </div>
                  )}

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[#1a2568] text-white py-3.5 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(35,48,125,0.2)] hover:shadow-[0_12px_32px_rgba(35,48,125,0.3)] hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? "Sending..." : <>Send Message <FaArrowRight size={12} /></>}
                  </button>

                </form>
              </div>
            </div>

          </div>

          {/* END CTA */}
          <div className="relative overflow-hidden rounded-3xl bg-[var(--color-primary)] p-10 md:p-14 text-white shadow-2xl mt-16">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-[var(--color-secondary)]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div className="max-w-[520px]">
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] animate-pulse" />
                  <span className="text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium">Let's Work Together</span>
                </div>
                <h2 className="heading-font text-2xl md:text-3xl font-semibold leading-snug mb-3">
                  Join Us in Making a <span className="text-[var(--color-secondary)]">Meaningful Impact</span>
                </h2>
                <p className="text-white/60 text-sm leading-relaxed">
                  Every connection matters — whether you donate, volunteer or simply spread the word about VSS.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
                <a href="/support" className="flex items-center justify-center gap-2 bg-[var(--color-secondary)] hover:bg-[#e0731a] text-white px-7 py-3 rounded-xl text-sm font-semibold shadow-[0_8px_24px_rgba(245,130,32,0.3)] hover:-translate-y-0.5 transition-all duration-200">
                  Support Us
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
