import { Calendar, ShieldCheck, RefreshCw, Award } from "lucide-react";
import "../Styles/MembersDash.css";

const MEMBERSHIP_DEMO = {
  type: "Life Member",
  memberSince: "12 Jun 2014",
  validTill: "Lifetime",
  status: "Active",
  registrationNo: "MBA/LM/2014/0342",
  lastRenewed: "N/A — Lifetime Membership",
};

function MembershipDetails() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Membership Details</h2>
        <p>Your current membership status and history with the Association</p>
      </div>

      <div className="ds-grid-2">
        <div className="ds-card">
          <div className="ds-card-icon"><Award size={20} /></div>
          <span className="ds-label">Membership Type</span>
          <span className="ds-value">{MEMBERSHIP_DEMO.type}</span>
        </div>

        <div className="ds-card">
          <div className="ds-card-icon"><ShieldCheck size={20} /></div>
          <span className="ds-label">Status</span>
          <span className="ds-value ds-status-active">{MEMBERSHIP_DEMO.status}</span>
        </div>

        <div className="ds-card">
          <div className="ds-card-icon"><Calendar size={20} /></div>
          <span className="ds-label">Member Since</span>
          <span className="ds-value">{MEMBERSHIP_DEMO.memberSince}</span>
        </div>

        <div className="ds-card">
          <div className="ds-card-icon"><RefreshCw size={20} /></div>
          <span className="ds-label">Valid Till</span>
          <span className="ds-value">{MEMBERSHIP_DEMO.validTill}</span>
        </div>
      </div>

      <div className="ds-panel">
        <h3>Registration Information</h3>
        <div className="ds-row">
          <span>Registration Number</span>
          <strong>{MEMBERSHIP_DEMO.registrationNo}</strong>
        </div>
        <div className="ds-row">
          <span>Last Renewed</span>
          <strong>{MEMBERSHIP_DEMO.lastRenewed}</strong>
        </div>
      </div>
    </div>
  );
}

export default MembershipDetails;