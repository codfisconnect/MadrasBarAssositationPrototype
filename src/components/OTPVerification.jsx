import { useState, useRef, useEffect } from "react";
import {
  ShieldCheck,
  Smartphone,
  Mail,
  ArrowLeft,
  RotateCcw,
} from "lucide-react";

import "../Styles/OTPVerification.css";

function OTPVerification({ otpMethod = "mobile", setActivePage }) {
  const OTP_LENGTH = 6;

  const DEMO_OTP = "654321";

  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(""));
  const [seconds, setSeconds] = useState(60);
  const [loading, setLoading] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (seconds <= 0) return;

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    if (value && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const verifyOtp = () => {
    const enteredOtp = otp.join("");

    if (enteredOtp.length < OTP_LENGTH) {
      alert("Please enter complete OTP.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (enteredOtp === DEMO_OTP) {
        alert("OTP Verified Successfully.");

        setActivePage("profile-completion");
      } else {
        alert("Invalid OTP.");
      }
    }, 1500);
  };

  const resendOtp = () => {
    setSeconds(60);
    setOtp(Array(OTP_LENGTH).fill(""));
    inputRefs.current[0]?.focus();

    alert("OTP Sent Successfully.\nDemo OTP : 654321");
  };

  return (
    <section className="otpVerify-page">
      <div className="otpVerify-card">
        <button className="otp-back-btn" onClick={setActivePage}>
          <ArrowLeft size={18} />
          Back
        </button>

        <div className="otp-icon">
          <ShieldCheck size={42} />
        </div>
        <h2>OTP Verification</h2>
        <p>
          We have sent a One-Time Password to your registered{" "}
          {otpMethod === "mobile" ? "mobile number" : "email"}.
        </p>
        <div className="otp-delivery">
          {otpMethod === "mobile" ? (
            <>
              <Smartphone size={18} />
              <span>+91 ••••••4521</span>
            </>
          ) : (
            <>
              <Mail size={18} />
              <span>a******@gmail.com</span>
            </>
          )}
        </div>
        <div className="otp-inputs">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              value={digit}
              maxLength={1}
              type="text"
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <button
          className="verify-otp-btn"
          onClick={verifyOtp}
          disabled={loading}
        >
          {loading ? "Verifying..." : "Verify OTP"}
        </button>
        {seconds > 0 ? (
          <p className="timer">
            Resend OTP in <strong>{seconds}s</strong>
          </p>
        ) : (
          <button className="resend-btn" onClick={resendOtp}>
            <RotateCcw size={17} />
            Resend OTP
          </button>
        )}
        {import.meta.env.DEV && (
          <div className="demo-note">
            Demo OTP : <strong>654321</strong>
          </div>
        )}
      </div>
    </section>
  );
}

export default OTPVerification;
