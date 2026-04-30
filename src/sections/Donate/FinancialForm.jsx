const FinancialForm = () => {
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

      {/* Cause */}
      <div>
        <p className="font-medium mb-2">
          I would like to contribute towards:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          <label><input type="checkbox" /> Student Support</label>
          <label><input type="checkbox" /> Meal Support</label>
          <label><input type="checkbox" /> Nagar Hostel</label>
          <label><input type="checkbox" /> Girls Hostel Pune</label>
          <label><input type="checkbox" /> Open</label>
        </div>
      </div>

      {/* Donation Method */}
      <div>
        <p className="font-medium mb-2">Donation Method:</p>
        <div className="space-y-2 text-sm">
          <label><input type="radio" name="method" /> Check</label>
          <label><input type="radio" name="method" /> Bank Transfer</label>
          <label><input type="radio" name="method" /> Benevity / CAF</label>
          <label><input type="radio" name="method" /> NRO/NRE</label>
        </div>
      </div>

      {/* Amount */}
      <input placeholder="Amount Donated *" className="input" />

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

export default FinancialForm;