const NonFinancialForm = () => {
  return (
    <form className="space-y-6">

      {/* Name */}
      <div className="grid md:grid-cols-2 gap-4">
        <input placeholder="First Name *" className="input" />
        <input placeholder="Last Name *" className="input" />
      </div>

      {/* Address */}
      <input placeholder="Address *" className="input" />

      {/* Phone */}
      <input placeholder="Mobile Number *" className="input" />

      {/* Email */}
      <input placeholder="Email *" className="input" />

      {/* Birthdate */}
      <input type="date" className="input" />

      {/* Support Type */}
      <div>
        <p className="font-medium mb-2">
          I would like to support in:
        </p>
        <div className="space-y-2 text-sm">
          <label><input type="radio" name="support" /> Student Mentor</label>
          <label><input type="radio" name="support" /> Earn & Learn Opportunities</label>
          <label><input type="radio" name="support" /> Internship References</label>
          <label><input type="radio" name="support" /> Samiti Mitra</label>
          <label><input type="radio" name="support" /> Open</label>
        </div>
      </div>

      {/* Additional Info */}
      <textarea
        placeholder="Additional Information"
        className="input h-24"
      />

      {/* Submit */}
      <button className="btn-primary">Submit</button>
    </form>
  );
};

export default NonFinancialForm;