// ── RULES ──────────────────────────────────────────────────────────────────

export const rules = {
  required: (v) => (v && v.trim() !== "" ? null : "This field is required."),

  name: (v) => {
    if (!v || v.trim() === "") return "This field is required.";
    if (v.trim().length < 2) return "Must be at least 2 characters.";
    if (!/^[a-zA-Z\s'-]+$/.test(v.trim())) return "Only letters, spaces, hyphens and apostrophes allowed.";
    return null;
  },

  email: (v) => {
    if (!v || v.trim() === "") return "Email address is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())) return "Enter a valid email address.";
    return null;
  },

  phone: (v) => {
    if (!v || v.trim() === "") return "Phone number is required.";
    if (/[a-zA-Z]/.test(v)) return "Please enter digits only — no letters allowed.";
    const digits = v.replace(/\D/g, "");
    if (digits.length < 7) return "Phone number must be at least 7 digits.";
    if (digits.length > 10) return "Phone number must not exceed 10 digits.";
    return null;
  },

  amount: (v) => {
    if (!v || v.trim() === "") return "Please select or enter a donation amount.";
    return null;
  },

  select: (v) => (!v || v === "" ? "Please select an option." : null),

  message: (v) => {
    if (!v || v.trim() === "") return "Please enter a message.";
    if (v.trim().length < 10) return "Message must be at least 10 characters.";
    return null;
  },
};

// ── VALIDATE ENTIRE FORM ───────────────────────────────────────────────────

export function validateForm(fields) {
  const errors = {};
  Object.entries(fields).forEach(([key, { value, rule }]) => {
    const error = rule(value);
    if (error) errors[key] = error;
  });
  return errors; // empty object = valid
}

// ── INPUT SANITISERS ───────────────────────────────────────────────────────

// Allow only letters, spaces, hyphens, apostrophes
export const sanitizeName = (v) => v.replace(/[^a-zA-Z\s'-]/g, "");

// Allow only digits, +, spaces, hyphens, parentheses, dots — max 10 digits
export const sanitizePhone = (v) => {
  // allow letters temporarily so validation can show the error
  // strip only after max 10 digits reached
  const digits = v.replace(/\D/g, "");
  if (digits.length > 10) {
    // trim to 10 digits, rebuild with non-digit chars
    let count = 0;
    return v.split("").filter((c) => {
      if (/\D/.test(c)) return true;
      count++;
      return count <= 10;
    }).join("");
  }
  return v;
};

// Allow only digits, dots, commas (for amounts like 1,700)
export const sanitizeAmount = (v) => v.replace(/[^0-9.,]/g, "");
