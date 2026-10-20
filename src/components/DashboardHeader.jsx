import {
  Search,
  Bell,
  ChevronDown,
} from "lucide-react";

function DashboardHeader({ member }) {

  return (
    <header className="dashboard-header">

      <div className="dashboard-brand">

        <div className="dashboard-logo">
          MBA
        </div>

        <div className="dashboard-brand-text">
          <h2>Madras Bar Association</h2>
          <span>Established 1865</span>
        </div>

      </div>

      <div className="dashboard-welcome">

        <span>Welcome back,</span>

        <strong>
          {member?.name || "Member"}
        </strong>

        <BadgeIcon />

      </div>

      <div className="dashboard-header-actions">

        <div className="dashboard-search">

          <input
            type="text"
            placeholder="Search..."
          />

          <Search size={20} />

        </div>

        <button className="header-icon-btn">

          <Bell size={22} />

          <span className="notification-dot">
            3
          </span>

        </button>

        <div className="header-profile">

          <div className="header-avatar">
            {member?.name
              ? member.name.charAt(0).toUpperCase()
              : "M"}
          </div>

          <ChevronDown size={18} />

        </div>

      </div>

    </header>
  );
}

function BadgeIcon() {
  return (
    <span className="welcome-badge">
      ✓
    </span>
  );
}

export default DashboardHeader;