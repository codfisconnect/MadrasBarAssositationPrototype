import { FileSignature, Stamp, Landmark, ScrollText } from "lucide-react";
import "../Styles/MembersDash.css";

const SERVICES_DEMO = [
  { title: "Apply for Bonafide Certificate", icon: FileSignature, desc: "Request an official bonafide membership letter" },
  { title: "Enrollment Verification", icon: Stamp, desc: "Get your enrollment status verified digitally" },
  { title: "Court Fee Calculator", icon: Landmark, desc: "Estimate court fees for filings" },
  { title: "Affidavit Format Downloads", icon: ScrollText, desc: "Standard affidavit templates for court use" },
];

function EServices() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>E-Services</h2>
        <p>Online services and requests available to members</p>
      </div>

      <div className="ds-grid-2">
        {SERVICES_DEMO.map((s, i) => {
          const Icon = s.icon;
          return (
            <button className="ds-service-card" key={i}>
              <div className="ds-card-icon">
                <Icon size={20} />
              </div>
              <span className="ds-value" style={{ fontSize: "15px" }}>{s.title}</span>
              <span className="ds-label" style={{ textTransform: "none", letterSpacing: 0, fontWeight: 400 }}>
                {s.desc}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default EServices;