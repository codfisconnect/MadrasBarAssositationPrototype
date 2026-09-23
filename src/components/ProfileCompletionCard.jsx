import { useMemo } from "react";
import { FileText, ShieldCheck, AlertCircle, ChevronRight } from "lucide-react";

import "../Styles/ProfileCompletion.css";

// Demo data — will be replaced by real member document/profile status once backend is connected
const REQUIRED_DOCUMENTS = [
  { key: "tenth", label: "10th Certificate", uploaded: true },
  { key: "twelfth", label: "12th Certificate", uploaded: true },
  { key: "degree", label: "Degree (Law)", uploaded: true },
  { key: "enrollment", label: "Bar Council Enrollment", uploaded: false },
  { key: "aadhaar", label: "Aadhaar Card", uploaded: false },
];

function ProfileCompletionCard({ member, setActiveSection }) {
  const { percent, missingDocs, missingProfileFields, totalItems, completedItems } =
    useMemo(() => {
      const coreFields = [
        { key: "name", label: "Full Name", value: member?.name },
        { key: "phone", label: "Mobile Number", value: member?.phone },
        { key: "email", label: "Email Address", value: member?.email },
        { key: "enrollmentNo", label: "Enrollment Number", value: member?.enrollmentNo },
        { key: "designation", label: "Designation", value: member?.designation },
        { key: "profileImage", label: "Profile Photo", value: member?.profileImage },
      ];

      const missingFields = coreFields.filter((f) => !f.value);
      const missingDocsList = REQUIRED_DOCUMENTS.filter((d) => !d.uploaded);

      const total = coreFields.length + REQUIRED_DOCUMENTS.length;
      const completed = total - missingFields.length - missingDocsList.length;

      return {
        percent: Math.round((completed / total) * 100),
        missingDocs: missingDocsList,
        missingProfileFields: missingFields,
        totalItems: total,
        completedItems: completed,
      };
    }, [member]);

  const isComplete = percent === 100;

  return (
    <div className={`dpc-card ${isComplete ? "is-complete" : ""}`}>
      <div className="dpc-header">
        <div className="dpc-header-left">
          <div className="dpc-icon">
            {isComplete ? <ShieldCheck size={20} /> : <AlertCircle size={20} />}
          </div>
          <div>
            <h3>{isComplete ? "Profile Complete" : "Complete Your Profile"}</h3>
            <p>
              {isComplete
                ? "All documents and details are verified."
                : `${completedItems} of ${totalItems} steps completed`}
            </p>
          </div>
        </div>

        <div className="dpc-ring-wrap">
          <svg viewBox="0 0 36 36" className="dpc-ring">
            <path
              className="dpc-ring-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="dpc-ring-fill"
              strokeDasharray={`${percent}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
          </svg>
          <span>{percent}%</span>
        </div>
      </div>

      <div className="dpc-track">
        <div className="dpc-fill" style={{ width: `${percent}%` }} />
      </div>

      {!isComplete && (
        <div className="dpc-missing-list">
          {missingProfileFields.map((f) => (
            <div className="dpc-missing-item" key={f.key}>
              <FileText size={14} />
              <span>{f.label} pending</span>
            </div>
          ))}
          {missingDocs.map((doc) => (
            <div className="dpc-missing-item" key={doc.key}>
              <FileText size={14} />
              <span>{doc.label} pending</span>
            </div>
          ))}
        </div>
      )}

      {!isComplete && (
        <button
          className="dpc-cta-btn"
          onClick={() => setActiveSection("profile")}
        >
          Complete Now
          <ChevronRight size={16} />
        </button>
      )}
    </div>
  );
}

export default ProfileCompletionCard;