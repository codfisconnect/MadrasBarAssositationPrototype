import { useState } from "react";
import { Lock, User, ShieldCheck, Eye, EyeOff } from "lucide-react";

import MemberDashboard from "./MembersDashboard";
import "../Styles/MembersLogin.css";
import members from "./MembersData";

function MembersLogin({ setActivePage }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInMember, setLoggedInMember] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userId.trim() || !password.trim()) {
      alert("Please enter your User ID and Password.");
      return;
    }

    const member = members.find(
      (m) =>
        m.userId.trim().toLowerCase() === userId.trim().toLowerCase() &&
        m.password === password,
    );

    if (member) {
      setLoggedInMember(member);
    } else {
      alert("Invalid User ID or Password.");
    }
  };

  if (loggedInMember) {
    return (
      <MemberDashboard
        member={loggedInMember}
        onLogout={() => {
          setLoggedInMember(null);
          setUserId("");
          setPassword("");
        }}
      />
    );
  }

  return (
    <section className="member-login-page">
      <div className="member-login-card">
        <div className="login-icon">
          <ShieldCheck size={40} />
        </div>

        <h2>Member Portal</h2>

        <p className="login-description">
          Secure login for Madras Bar Association Members.
        </p>

        <form onSubmit={handleLogin}>
          <label>User ID</label>

          <div className="login-input">
            <User size={18} />

            <input
              type="text"
              placeholder="Enter Member ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
          </div>

          <label>Password</label>

          <div className="login-input">
            <Lock size={18} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input
                type="checkbox"
                checked={remember}
                onChange={() => setRemember(!remember)}
              /> 
              Remember Me
            </label>

            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActivePage("forgot-password");
              }}
            >
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="register-link">
          <span>New Member?</span>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setActivePage("create-account");
            }}
          >
            Register Here
          </a>
        </div>

        <div className="security-note">
          <ShieldCheck size={16} />

          <span>
            Your credentials are securely protected. Unauthorized access is
            prohibited.
          </span>
        </div>
      </div>
    </section>
  );
}

export default MembersLogin;
