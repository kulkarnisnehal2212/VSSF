import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_fv55klu";
const TEMPLATE_ID = "template_7n61l55";
const PUBLIC_KEY = "f7JATMFJVYNtj3Fjs";

export const sendContactEmail = (data) => {
  return emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    data,
    PUBLIC_KEY
  );
};