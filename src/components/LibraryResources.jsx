import { BookOpen, Download, FileText, Search } from "lucide-react";
import "../Styles/MembersDash.css";

const LIBRARY_DEMO = [
  { title: "Code of Civil Procedure, 1908 — Bare Act", type: "PDF", size: "2.4 MB" },
  { title: "Madras High Court Practice Rules", type: "PDF", size: "1.1 MB" },
  { title: "Arbitration & Conciliation Act, 1996", type: "PDF", size: "980 KB" },
  { title: "MBA Journal — July 2026 Edition", type: "PDF", size: "3.2 MB" },
];

function LibraryResources() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Library & Resources</h2>
        <p>Bare acts, journals, and reference materials for members</p>
      </div>

      <div className="ds-search-bar">
        <Search size={16} />
        <input type="text" placeholder="Search library resources..." />
      </div>

      <div className="ds-notice-list">
        {LIBRARY_DEMO.map((doc, i) => (
          <div className="ds-notice-item" key={i}>
            <div className="ds-notice-icon">
              <FileText size={16} />
            </div>
            <div className="ds-notice-info">
              <h4>{doc.title}</h4>
              <span>{doc.type} • {doc.size}</span>
            </div>
            <button className="ds-icon-btn">
              <Download size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LibraryResources;