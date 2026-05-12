import { useState } from "react";
import emailjs from "@emailjs/browser";

const FinancialForm = () => {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    address: "",
    phone: "",
    email: "",
    amount: "",
    message: "",
  });

  const [causes, setCauses] = useState([]);
  const [method, setMethod] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (value) => {
    setCauses((prev) =>
      prev.includes(value)
        ? prev.filter((c) => c !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const financialSection = `
      <h3 style="color:#2c3e91;">💰 Financial Contribution</h3>
      <p><strong>Amount:</strong> ${form.amount}</p>
      <p><strong>Causes:</strong> ${causes.join(", ")}</p>
      <p><strong>Method:</strong> ${method}</p>
    `;

    const templateParams = {
      ...form,
      financial_section: financialSection,
      non_financial_section: "",
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

      {/* Causes */}
      <div>
        <p className="font-medium mb-2">I would like to contribute towards:</p>
        {["Student Support","Meal Support","Nagar Hostel","Girls Hostel Pune","Open"].map((item) => (
          <label key={item} className="block">
            <input type="checkbox" onChange={() => handleCheckbox(item)} /> {item}
          </label>
        ))}
      </div>

      {/* Method */}
      <div>
        <p className="font-medium mb-2">Donation Method:</p>
        {["Check","Bank Transfer","Benevity / CAF","NRO/NRE"].map((item) => (
          <label key={item} className="block">
            <input type="radio" name="method" onChange={() => setMethod(item)} /> {item}
          </label>
        ))}
      </div>

      <input name="amount" placeholder="Amount Donated *" className="input" onChange={handleChange} />

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

export default FinancialForm;