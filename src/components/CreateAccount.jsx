import { useState } from "react";
import {
  ShieldCheck,
  UserCheck,
  BadgeCheck,
  Calendar,
  Mail,
  Smartphone,
  ArrowLeft,
} from "lucide-react";

import "../Styles/CreateAccount.css";

function CreateAccount({ setActivePage }) {
  const [form, setForm] = useState({
    mbaNumber: "",
    enrollmentNumber: "",
    dob: "",
    otpMethod: "mobile",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleVerify = () => {
    if (!form.mbaNumber || !form.enrollmentNumber || !form.dob) {
      alert("Please complete all required fields.");
      return;
    }

    setLoading(true);

    // Demo Verification

    setTimeout(() => {
      setLoading(false);

      alert("Membership Verified Successfully.\nOTP has been sent.");

      setActivePage("otp-verification");
    }, 1800);
  };

  return (
    <section className="create-account-page">
      <div className="create-account-card">
        <button
          className="back-btn"
          onClick={() => setActivePage("member-login")}
        >
          <ArrowLeft size={18} />
          Back to Login
        </button>

        <div className="create-account-icon">
          <ShieldCheck size={42} />
        </div>

        <h2>Create Member Account</h2>

        <p>
          Verify your Madras Bar Association membership before creating your
          online account.
        </p>

        <div className="form-group">
          <label>MBA Registration Number</label>

          <div className="input-box">
            <BadgeCheck size={18} />
            <input
              type="text"
              name="mbaNumber"
              placeholder="MBA202600145"
              value={form.mbaNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Enrollment Number</label>

          <div className="input-box">
            <UserCheck size={18} />
            <input
              type="text"
              name="enrollmentNumber"
              placeholder="MS/1456/2020"
              value={form.enrollmentNumber}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Date of Birth</label>

          <div className="input-box">
            <Calendar size={18} />
            <input
              type="date"
              name="dob"
              value={form.dob}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="otp-method">
          <label>Receive OTP Via</label>

          <div className="otp-options">
            <label className="otp-card">
              <input
                type="radio"
                name="otpMethod"
                value="mobile"
                checked={form.otpMethod === "mobile"}
                onChange={handleChange}
              />
              <Smartphone size={18} />
              Mobile Number
            </label>

            <label className="otp-card">
              <input
                type="radio"
                name="otpMethod"
                value="email"
                checked={form.otpMethod === "email"}
                onChange={handleChange}
              />
              <Mail size={18} />
              Email Address
            </label>
          </div>
        </div>

        <button
          className="verify-btn"
          onClick={handleVerify}
          disabled={loading}
        >
          {loading ? "Verifying Membership..." : "Verify Membership"}
        </button>

        <div className="security-note">
          <ShieldCheck size={18} />

          <span>
            Your details will be verified with the Madras Bar Association
            records before your account is created.
          </span>
        </div>
      </div>
    </section>
  );
}

export default CreateAccount;
