import { Megaphone, Pin } from "lucide-react";
import "../Styles/MembersDash.css";

const NOTICES_DEMO = [
  { title: "Revised Court Timings for Monsoon Session", date: "14 Aug 2026", pinned: true },
  { title: "Annual Subscription Fee Due Reminder", date: "10 Aug 2026", pinned: true },
  { title: "New E-Filing Guidelines Circular", date: "02 Aug 2026", pinned: false },
  { title: "Library Renovation Notice", date: "28 Jul 2026", pinned: false },
];

function NoticesCirculars() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Notices & Circulars</h2>
        <p>Official communications from the Association</p>
      </div>

      <div className="ds-notice-list">
        {NOTICES_DEMO.map((n, i) => (
          <div className="ds-notice-item" key={i}>
            <div className="ds-notice-icon">
              {n.pinned ? <Pin size={16} /> : <Megaphone size={16} />}
            </div>
            <div className="ds-notice-info">
              <h4>{n.title}</h4>
              <span>{n.date}</span>
            </div>
            {n.pinned && <span className="ds-badge ds-badge-gold">Pinned</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NoticesCirculars;