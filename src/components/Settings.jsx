import { useState } from "react";
import { Bell, Lock, Globe, Moon } from "lucide-react";
import "../Styles/MembersDash.css";

function Settings() {
  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);

  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Settings</h2>
        <p>Manage your account preferences and security</p>
      </div>

      <div className="ds-panel" style={{ marginBottom: "20px" }}>
        <h3>
          <Bell
            size={16}
            style={{ marginRight: "8px", verticalAlign: "-3px" }}
          />
          Notifications
        </h3>

        <div className="ds-row">
          <span>Email Notifications</span>
          <button
            className={`ds-toggle ${emailNotif ? "on" : ""}`}
            onClick={() => setEmailNotif(!emailNotif)}
          >
            <span className="ds-toggle-dot" />
          </button>
        </div>

        <div className="ds-row">
          <span>SMS Notifications</span>
          <button
            className={`ds-toggle ${smsNotif ? "on" : ""}`}
            onClick={() => setSmsNotif(!smsNotif)}
          >
            <span className="ds-toggle-dot" />
          </button>
        </div>
      </div>

      <div className="ds-panel" style={{ marginBottom: "20px" }}>
        <h3>
          <Lock
            size={16}
            style={{ marginRight: "8px", verticalAlign: "-3px" }}
          />
          Security
        </h3>
        <div className="ds-row">
          <span>Change Password</span>
          <button className="ds-icon-btn">Update</button>
        </div>
        <div className="ds-row">
          <span>Two-Factor Authentication</span>
          <button className="ds-icon-btn">Enable</button>
        </div>
      </div>

      <div className="ds-panel">
        <h3>
          <Globe
            size={16}
            style={{ marginRight: "8px", verticalAlign: "-3px" }}
          />
          Preferences
        </h3>
        <div className="ds-row">
          <span>Language</span>
          <strong>English</strong>
        </div>
        <div className="ds-row">
          <span>
            <Moon
              size={14}
              style={{ marginRight: "6px", verticalAlign: "-2px" }}
            />
            Theme
          </span>
          <strong>Black Titanium & Royal Gold</strong>
        </div>
      </div>
    </div>
  );
}

export default Settings;
