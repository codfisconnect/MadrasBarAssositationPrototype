import { useState } from "react";
import {
  Lock,
  ShieldCheck,
  Eye,
  EyeOff,
  KeyRound,
} from "lucide-react";

import "../Styles/ResetPassword.css";

function ResetPassword({ setActivePage }) {
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!otp || !newPassword || !confirmPassword) {
      alert("Please fill all fields.");
      return;
    }

    if (otp !== "123456") {
      alert("Invalid OTP.\n\nDemo OTP : 123456");
      return;
    }

    if (newPassword.length < 8) {
      alert("Password should contain at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    alert("Password reset successful!");

    setActivePage("member-login");
  };

  return (
    <section className="reset-password-page">

      <div className="reset-password-card">

        <div className="reset-icon">
          <ShieldCheck size={40} />
        </div>

        <h2>Reset Password</h2>

        <p className="reset-description">
          Enter the OTP sent to your registered Mobile Number or Email
          and create a new secure password.
        </p>

        <form onSubmit={handleResetPassword}>

          <label>One-Time Password</label>

          <div className="reset-input">

            <KeyRound size={18} />

            <input
              type="text"
              placeholder="Enter OTP"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

          </div>

          <label>New Password</label>

          <div className="reset-input">

            <Lock size={18} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowPassword(!showPassword)
              }
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

          <label>Confirm Password</label>

          <div className="reset-input">

            <Lock size={18} />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
            >
              {showConfirmPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>

          </div>

          <div className="password-info">
            Demo OTP :
            <strong> 123456</strong>
          </div>

          <button
            type="submit"
            className="reset-btn"
          >
            Reset Password
          </button>

        </form>

        <button
          className="back-login-btn"
          onClick={() =>
            setActivePage("member-login")
          }
        >
          Back to Login
        </button>

      </div>

    </section>
  );
}

export default ResetPassword;