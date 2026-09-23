import { Scale, Clock, CheckCircle2 } from "lucide-react";
import "../Styles/MembersDash.css";

const CASES_DEMO = [
  { id: "CS-2026-0113", title: "Ramesh v. State of Tamil Nadu", court: "Madras High Court", status: "Ongoing", nextHearing: "22 Aug 2026" },
  { id: "CS-2026-0087", title: "Kumar Textiles v. ROC Chennai", court: "NCLT Chennai", status: "Ongoing", nextHearing: "05 Sep 2026" },
  { id: "CS-2025-0956", title: "Selvi v. Selvi (Family Matter)", court: "Family Court, Chennai", status: "Closed", nextHearing: "—" },
];

function MyCases() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Legal Notes</h2>
        <p>Track your ongoing and closed case records</p>
      </div>

      <div className="ds-case-list">
        {CASES_DEMO.map((c) => (
          <div className="ds-case-item" key={c.id}>
            <div className="ds-case-icon">
              {c.status === "Ongoing" ? <Clock size={18} /> : <CheckCircle2 size={18} />}
            </div>

            <div className="ds-case-info">
              <h4>{c.title}</h4>
              <p>{c.court} • {c.id}</p>
            </div>

            <div className="ds-case-meta">
              <span className={`ds-badge ${c.status === "Ongoing" ? "ds-badge-gold" : "ds-badge-muted"}`}>
                {c.status}
              </span>
              <span className="ds-case-hearing">
                <Scale size={13} /> Next: {c.nextHearing}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyCases;