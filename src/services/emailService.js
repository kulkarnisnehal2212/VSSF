import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_fv55klu";
const PUBLIC_KEY = "f7JATMFJVYNtj3Fjs";

//  CONTACT TEMPLATE
const CONTACT_TEMPLATE_ID = "template_7n61l55";

//  DONATION TEMPLATE 
const DONATION_TEMPLATE_ID = "template_geh22ku";

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
    SERVICE_ID,
    DONATION_TEMPLATE_ID,
    data,
    PUBLIC_KEY
  );
}