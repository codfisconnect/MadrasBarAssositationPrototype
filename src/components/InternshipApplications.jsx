import { GraduationCap, Clock, CheckCircle2, XCircle } from "lucide-react";
import "../Styles/MembersDash.css";

const INTERNSHIP_DEMO = [
  { name: "Aravind S.", college: "Government Law College, Chennai", status: "Pending", appliedOn: "10 Aug 2026" },
  { name: "Divya R.", college: "Tamil Nadu National Law University", status: "Approved", appliedOn: "02 Aug 2026" },
  { name: "Karthik M.", college: "School of Excellence in Law", status: "Rejected", appliedOn: "28 Jul 2026" },
];

const statusMeta = {
  Pending: { icon: Clock, badge: "ds-badge-gold" },
  Approved: { icon: CheckCircle2, badge: "ds-badge-muted" },
  Rejected: { icon: XCircle, badge: "ds-badge-muted" },
};

function InternshipApplications() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Internship Applications</h2>
        <p>Manage and review internship requests under your mentorship</p>
      </div>

      <div className="ds-case-list">
        {INTERNSHIP_DEMO.map((app, i) => {
          const meta = statusMeta[app.status];
          const Icon = meta.icon;
          return (
            <div className="ds-case-item" key={i}>
              <div className="ds-case-icon">
                <GraduationCap size={18} />
              </div>
              <div className="ds-case-info">
                <h4>{app.name}</h4>
                <p>{app.college}</p>
              </div>
              <div className="ds-case-meta">
                <span className={`ds-badge ${meta.badge}`}>
                  <Icon size={12} style={{ marginRight: "4px", verticalAlign: "-2px" }} />
                  {app.status}
                </span>
                <span className="ds-case-hearing">Applied: {app.appliedOn}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InternshipApplications;