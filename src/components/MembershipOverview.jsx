import {
  User,
  BadgeCheck,
} from "lucide-react";

function MembershipOverview({ member }) {

  return (
    <section className="dashboard-card membership-overview">

      <div className="dashboard-card-heading">

        <h2>
          Membership Overview
        </h2>

      </div>

      <div className="membership-profile">

        <div className="membership-avatar">

          {member?.photo ? (
            <img
              src={member.photo}
              alt="Member"
            />
          ) : (
            <User size={55} />
          )}

        </div>

        <div className="membership-info">

          <h3>
            {member?.name || "Advocate Member"}
          </h3>

          <p>
            MBA Reg. No:{" "}
            <strong>
              {member?.mbaNumber || "MBA202600145"}
            </strong>
          </p>

          <p>
            Enrollment No:{" "}
            <strong>
              {member?.enrollmentNumber ||
                "MS/1456/2020"}
            </strong>
          </p>

          <p>
            Member Since:{" "}
            <strong>
              15 Aug 2020
            </strong>
          </p>

          <span className="active-member-badge">
            <BadgeCheck size={14} />
            Active Member
          </span>

        </div>

      </div>

      <button className="outline-dashboard-btn">
        <User size={17} />
        View Full Profile
      </button>

    </section>
  );
}

export default MembershipOverview;