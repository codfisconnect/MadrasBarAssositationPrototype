import {
  Home,
  User,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  BookOpen,
  FileCheck,
  Bell,
  CreditCard,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  GraduationCap,
} from "lucide-react";

function DashboardSidebar({
  activeSection,
  setActiveSection,
  onLogout,
}) {
  const menuItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: Home,
    },
    {
      id: "profile",
      label: "My Profile",
      icon: User,
    },
    {
      id: "membership",
      label: "Membership Details",
      icon: BadgeCheck,
    },
    {
      id: "cases",
      label: "Legal Notes",
      icon: BriefcaseBusiness,
    },
    {
      id: "events",
      label: "Events & Meetings",
      icon: CalendarDays,
    },
    {
      id: "library",
      label: "Library & Resources",
      icon: BookOpen,
    },
    {
      id: "certificates",
      label: "Certificates",
      icon: FileCheck,
    },
    {
      id: "notices",
      label: "Notices & Circulars",
      icon: Bell,
      count: 5,
    },
    {
      id: "services",
      label: "E-Services",
      icon: CreditCard,
    },
    {
      id: "directory",
      label: "Directory",
      icon: Users,
    },
    {
      id: "payments",
      label: "Payments",
      icon: CreditCard,
    },
    {
      id: "internship",
      label: "Internship Applications",
      icon: GraduationCap,
    },
    {
      id: "support",
      label: "Support",
      icon: HelpCircle,
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
    },
  ];

  return (
    <aside className="dashboard-sidebar">

      <div className="sidebar-menu">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`sidebar-menu-item ${
                activeSection === item.id
                  ? "active"
                  : ""
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon size={20} />

              <span>{item.label}</span>

              {item.count && (
                <strong className="sidebar-notification">
                  {item.count}
                </strong>
              )}
            </button>
          );
        })}

      </div>

      <div className="sidebar-help">

        <h3>Need Help?</h3>

        <p>
          Our support team is here to assist you.
        </p>

        <button
          onClick={() => setActiveSection("support")}
        >
          <HelpCircle size={17} />
          Contact Support
        </button>

      </div>

      <button
        className="sidebar-logout"
        onClick={onLogout}
      >
        <LogOut size={18} />
        Logout
      </button>

    </aside>
  );
}

export default DashboardSidebar;