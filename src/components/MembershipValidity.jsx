import {
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

function MembershipValidity() {

  return (
    <section className="dashboard-card membership-validity">

      <div className="dashboard-card-heading">

        <h2>
          Membership Validity
        </h2>

      </div>

      <div className="membership-card">

        <div className="membership-card-header">

          <div>
            <strong>
              MADRAS BAR ASSOCIATION
            </strong>

            <span>
              ESTABLISHED 1865
            </span>
          </div>

          <ShieldCheck size={42} />

        </div>

        <div className="membership-validity-info">

          <span>
            Membership Validity Till
          </span>

          <strong>
            31 Dec 2026
          </strong>

        </div>

        <div className="membership-card-seal">
          MBA
        </div>

      </div>

      <button className="renew-membership-btn">
        Renew Membership
        <ArrowRight size={17} />
      </button>

    </section>
  );
}

export default MembershipValidity;