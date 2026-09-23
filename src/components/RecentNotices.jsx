import {
  FileText,
} from "lucide-react";

function RecentNotices() {

  const notices = [
    {
      title:
        "Notice regarding Annual General Body Meeting",
      date: "25 July 2026",
      new: true,
    },
    {
      title:
        "Library will remain closed on 30 July 2026",
      date: "24 July 2026",
    },
    {
      title:
        "Submission of Annual Membership Fees",
      date: "22 July 2026",
    },
  ];

  return (
    <section className="dashboard-card recent-notices">

      <div className="dashboard-card-heading">

        <h2>
          Recent Notices
        </h2>

        <button>
          View All
        </button>

      </div>

      <div className="notice-list">

        {notices.map((notice) => (

          <div
            className="notice-item"
            key={notice.title}
          >

            <div className="notice-icon">
              <FileText size={22} />
            </div>

            <div className="notice-content">

              <h3>
                {notice.title}
              </h3>

              <span>
                {notice.date}
              </span>

            </div>

            {notice.new && (
              <strong className="new-notice">
                New
              </strong>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default RecentNotices;