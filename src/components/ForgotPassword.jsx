import { useState } from "react";
import {
  ShieldCheck,
  User,
  Hash,
  Mail,
  Phone,
  ArrowLeft,
} from "lucide-react";

import "../Styles/ForgotPassword.css";

function ForgotPassword({ setActivePage }) {
  const [memberId, setMemberId] = useState("");
  const [enrollmentNo, setEnrollmentNo] = useState("");
  const [contact, setContact] = useState("");
  const [method, setMethod] = useState("mobile");

  const handleSendOTP = (e) => {
    e.preventDefault();

    if (
      !memberId.trim() ||
      !enrollmentNo.trim() ||
      !contact.trim()
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    alert(
      `Demo OTP has been sent to your registered ${method === "mobile" ? "Mobile Number" : "Email Address"}.`
    );

    // Navigate to Reset Password Page
    setActivePage("reset-password");
  };

  return (
    <section className="forgot-password-page">

      <div className="forgot-password-card">

        <div className="forgot-icon">
          <ShieldCheck size={40} />
        </div>

        <h2>Forgot Password</h2>

        <p className="forgot-description">
          Verify your identity to receive a One-Time Password (OTP) for resetting your account password.
        </p>

        <form onSubmit={handleSendOTP}>

          {/* Registration Number */}

          <label>Madras Bar Association Registration Number</label>

          <div className="forgot-input">

            <User size={18} />

            <input
              type="text"
              placeholder="MBA Registration Number"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />

          </div>

          {/* Enrollment Number */}

          <label>Enrollment Number</label>

          <div className="forgot-input">

            <Hash size={18} />

            <input
              type="text"
              placeholder="Enrollment Number"
              value={enrollmentNo}
              onChange={(e) => setEnrollmentNo(e.target.value)}
            />

          </div>

          {/* OTP Method */}

          <label>Receive OTP Via</label>

          <div className="otp-method">

            <button
              type="button"
              className={method === "mobile" ? "active" : ""}
              onClick={() => setMethod("mobile")}
            >
              <Phone size={16} />
              Mobile
            </button>

            <button
              type="button"
              className={method === "email" ? "active" : ""}
              onClick={() => setMethod("email")}
            >
              <Mail size={16} />
              Email
            </button>

          </div>

          {/* Contact */}

          <label>
            {method === "mobile"
              ? "Registered Mobile Number"
              : "Registered Email Address"}
          </label>

          <div className="forgot-input">

            {method === "mobile" ? (
              <Phone size={18} />
            ) : (
              <Mail size={18} />
            )}

            <input
              type={method === "mobile" ? "tel" : "email"}
              placeholder={
                method === "mobile"
                  ? "Enter Registered Mobile Number"
                  : "Enter Registered Email Address"
              }
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />

          </div>

          <button type="submit" className="send-otp-btn">
            Send OTP
          </button>

        </form>

        <div className="back-login">

          <button
            onClick={() => setActivePage("member-login")}
            className="back-btn"
          >
            <ArrowLeft size={18} />
            Back to Login
          </button>

        </div>

      </div>

    </section>
  );
}

export default ForgotPassword;