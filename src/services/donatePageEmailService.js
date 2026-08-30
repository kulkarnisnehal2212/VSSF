import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_0jz75ur";
const DONATION_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_DONATION_TEMPLATE_ID || "template_c40xsr7";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "8Xwguh_QqCvwQQXH4";

export const sendDonatePageEmail = (data) => {
  return emailjs.send(
    SERVICE_ID,
    DONATION_TEMPLATE_ID,
    data,
    PUBLIC_KEY
  );
};
