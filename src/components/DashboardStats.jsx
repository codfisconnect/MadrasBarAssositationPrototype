import {
  UserRound,
  CalendarDays,
  FileText,
  CreditCard,
} from "lucide-react";

function DashboardStats() {

  const stats = [
    {
      value: "12",
      label: "Active Cases",
      link: "View all cases",
      icon: UserRound,
    },
    {
      value: "3",
      label: "Upcoming Events",
      link: "View calendar",
      icon: CalendarDays,
    },
    {
      value: "5",
      label: "Unread Notices",
      link: "View all notices",
      icon: FileText,
    },
    {
      value: "₹2,450",
      label: "Pending Payments",
      link: "View payments",
      icon: CreditCard,
    },
  ];

  return (
    <div className="dashboard-stats">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (
          <div
            className="dashboard-stat-card"
            key={stat.label}
          >

            <div className="stat-icon">
              <Icon size={25} />
            </div>

            <div className="stat-content">

              <strong>
                {stat.value}
              </strong>

              <span>
                {stat.label}
              </span>

              <button>
                {stat.link} →
              </button>

            </div>

          </div>
        );
      })}

    </div>
  );
}

export default DashboardStats;