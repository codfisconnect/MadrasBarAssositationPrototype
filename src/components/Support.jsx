import { HelpCircle, Phone, Mail, MessageSquare } from "lucide-react";
import "../Styles/MembersDash.css";

function Support() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Support</h2>
        <p>Reach out to the Association's support team for assistance</p>
      </div>

      <div className="ds-grid-2">
        <div className="ds-card">
          <div className="ds-card-icon"><Phone size={20} /></div>
          <span className="ds-label">Call Us</span>
          <span className="ds-value" style={{ fontSize: "15px" }}>(+91) 44 25342160/  7200019503 </span>
        </div>

        <div className="ds-card">
          <div className="ds-card-icon"><Mail size={20} /></div>
          <span className="ds-label">Email Us</span>
          <span className="ds-value" style={{ fontSize: "15px" }}>support@madrasbarassociation.org</span>
        </div>

        <div className="ds-card">
          <div className="ds-card-icon"><MessageSquare size={20} /></div>
          <span className="ds-label">Live Chat</span>
          <span className="ds-value" style={{ fontSize: "15px" }}>Mon–Fri, 10 AM – 5 PM</span>
        </div>

        <div className="ds-card">
          <div className="ds-card-icon"><HelpCircle size={20} /></div>
          <span className="ds-label">FAQs</span>
          <span className="ds-value" style={{ fontSize: "15px" }}>Browse common questions</span>
        </div>
      </div>

      <div className="ds-panel">
        <h3>Submit a Request</h3>
        <textarea
          rows="5"
          placeholder="Describe your issue..."
          className="ds-textarea"
        />
        <button className="dpc-cta-btn" style={{ marginTop: "16px" }}>
          Submit Request
        </button>
      </div>
    </div>
  );
}

export default Support;