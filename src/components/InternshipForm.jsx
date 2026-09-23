import "../Styles/Internship.css";

function InternshipForm({ onClose }) {
  return (
    <div className="internship-modal">
      <div className="internship-form-container">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <form>
          <h2>Apply for Internship</h2>

          <p>
            Complete the application form below and proceed with the
            <strong> ₹100 application fee</strong> to submit your internship
            request.
          </p>

          <div className="application-fee-card">
            <span className="fee-label">Application Fee</span>
            <h3>₹100</h3>
            <p>One-time internship application fee</p>
          </div>

          <div className="form-group">
            <label htmlFor="candidateName">Candidate Name</label>
            <input
              type="text"
              id="candidateName"
              name="candidateName"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>

            <div className="radio-group">
              <label>
                <input type="radio" name="gender" value="male" required />
                Male
              </label>

              <label>
                <input type="radio" name="gender" value="female" />
                Female
              </label>

              <label>
                <input type="radio" name="gender" value="other" />
                Other
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="education">Educational Qualifications</label>
            <textarea
              id="education"
              name="education"
              placeholder="Example: B.A. LL.B, 3rd Year"
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="experience">Previous Internship Experience</label>
            <textarea
              id="experience"
              name="experience"
              placeholder="Mention previous internship details if any"
            ></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="skills">Skills and Areas of Interest</label>
            <textarea
              id="skills"
              name="skills"
              placeholder="Example: Legal research, drafting, litigation, corporate law"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Proceed to Payment ₹100
          </button>
        </form>
      </div>
    </div>
  );
}

export default InternshipForm;