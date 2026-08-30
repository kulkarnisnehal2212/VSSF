import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_fv55klu";
const PUBLIC_KEY = "f7JATMFJVYNtj3Fjs";

const cleanEmailJsKey = (value, fallback) => {
  const raw = String(value || fallback)
    .trim()
    .replace(/^['"]|['"]$/g, "");
  const valueOnly = raw.includes("=") ? raw.split("=").pop().trim() : raw;
  const cleaned = valueOnly.replace(/\\_/g, "_").trim();

  return cleaned || fallback;
};

const DONATION_SERVICE_ID = cleanEmailJsKey(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  "service_0jz75ur"
);
const DONATION_PUBLIC_KEY = cleanEmailJsKey(
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  "8Xwguh_QqCvwQQXH4"
);

//  CONTACT TEMPLATE
const CONTACT_TEMPLATE_ID = "template_7n61l55";

//  DONATION TEMPLATE 
const DONATION_TEMPLATE_ID = cleanEmailJsKey(
  import.meta.env.VITE_EMAILJS_DONATION_TEMPLATE_ID,
  "template_c40xsr7"
);

//  Contact Form
export const sendContactEmail = (data) => {
  return emailjs.send(
    SERVICE_ID,
    CONTACT_TEMPLATE_ID,
    data,
    PUBLIC_KEY
  );
};

//   Donation Form (Financial + Non-Financial)
export const sendDonationEmail = (data) => {
  return emailjs.send(
    DONATION_SERVICE_ID,
    DONATION_TEMPLATE_ID,
    data,
    DONATION_PUBLIC_KEY
  );
}
