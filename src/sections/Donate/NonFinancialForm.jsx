import { useState } from "react";
import emailjs from "@emailjs/browser";

const NonFinancialForm = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
    email: "",
    message: "",
  });

  const [supportType, setSupportType] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nonFinancialSection = `
      <h3 style="color:#2c3e91;">🤝 Non-Financial Contribution</h3>
      <p><strong>Support Type:</strong> ${supportType}</p>
    `;

    const templateParams = {
      ...form,
      financial_section: "",
      non_financial_section: nonFinancialSection,
    };

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      );

      alert("Submitted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error submitting form");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>

      <div className="grid md:grid-cols-2 gap-4">
        <input name="first_name" placeholder="First Name *" className="input" onChange={handleChange} />
        <input name="last_name" placeholder="Last Name *" className="input" onChange={handleChange} />
      </div>

      <input name="address" placeholder="Address *" className="input" onChange={handleChange} />
      <input name="phone" placeholder="Mobile Number *" className="input" onChange={handleChange} />
      <input name="email" placeholder="Email *" className="input" onChange={handleChange} />

      <div>
        <p className="font-medium mb-2">I would like to support in:</p>
        {["Student Mentor","Earn & Learn Opportunities","Internship","Samiti Mitra","Open"].map((item) => (
          <label key={item} className="block">
            <input type="radio" name="support" onChange={() => setSupportType(item)} /> {item}
          </label>
        ))}
      </div>

      <textarea
        name="message"
        placeholder="Additional Information"
        className="input h-24"
        onChange={handleChange}
      />

      <button className="btn-primary">Submit</button>
    </form>
  );
};

export default NonFinancialForm;