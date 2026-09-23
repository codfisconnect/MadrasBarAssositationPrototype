import { Search, Phone, Mail } from "lucide-react";
import "../Styles/MembersDash.css";

const DIRECTORY_DEMO = [
  { name: "Adv. R. Venkatesan", designation: "Senior Advocate", practiceArea: "Constitutional Law", phone: "98400 12345" },
  { name: "Adv. S. Priya", designation: "Advocate", practiceArea: "Family Law", phone: "98410 54321" },
  { name: "Adv. K. Mohanraj", designation: "Advocate", practiceArea: "Corporate Law", phone: "98420 98765" },
  { name: "Adv. A. Lakshmi", designation: "Senior Advocate", practiceArea: "Taxation Law", phone: "98430 11223" },
];

function MemberDirectory() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Member Directory</h2>
        <p>Search and connect with fellow Association members</p>
      </div>

      <div className="ds-search-bar">
        <Search size={16} />
        <input type="text" placeholder="Search by name or practice area..." />
      </div>

      <div className="ds-grid-2">
        {DIRECTORY_DEMO.map((m, i) => (
          <div className="ds-card" key={i}>
            <span className="ds-value" style={{ fontSize: "16px" }}>{m.name}</span>
            <span className="ds-label" style={{ textTransform: "none", letterSpacing: 0, fontWeight: 600, color: "var(--gold,#D4AF37)" }}>
              {m.designation}
            </span>
            <span className="ds-label" style={{ textTransform: "none", letterSpacing: 0, fontWeight: 400, color: "#b7b7b7" }}>
              {m.practiceArea}
            </span>
            <div className="ds-row" style={{ border: "none", paddingTop: "10px" }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Phone size={13} /> {m.phone}
              </span>
              <button className="ds-icon-btn">
                <Mail size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberDirectory;