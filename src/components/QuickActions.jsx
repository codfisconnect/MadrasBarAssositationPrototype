import {
  FileText,
  CreditCard,
  CalendarPlus,
  UserRound,
  BookOpen,
  Download,
  BriefcaseBusiness,
  Search,
  MessageCircle,
} from "lucide-react";

function QuickActions() {

  const actions = [
    {
      label: "Apply for Certificate",
      icon: FileText,
    },
    {
      label: "Pay Fees",
      icon: CreditCard,
    },
    {
      label: "Book Conference Hall",
      icon: CalendarPlus,
    },
    {
      label: "Update Profile",
      icon: UserRound,
    },
    {
      label: "Access E-Library",
      icon: BookOpen,
    },
    {
      label: "Download Forms",
      icon: Download,
    },
    {
      label: "My Cases",
      icon: BriefcaseBusiness,
    },
    {
      label: "Directory Search",
      icon: Search,
    },
    {
      label: "Track Application",
      icon: MessageCircle,
    },
  ];

  return (
    <section className="dashboard-card quick-actions">

      <div className="dashboard-card-heading">

        <h2>
          Quick Actions
        </h2>

      </div>

      <div className="quick-actions-grid">

        {actions.map((action) => {

          const Icon = action.icon;

          return (
            <button
              key={action.label}
              className="quick-action-btn"
            >

              <Icon size={21} />

              <span>
                {action.label}
              </span>

            </button>
          );

        })}

      </div>

    </section>
  );
}

export default QuickActions;