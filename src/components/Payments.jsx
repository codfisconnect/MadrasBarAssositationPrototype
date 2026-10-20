import { IndianRupee, CheckCircle2, AlertTriangle } from "lucide-react";
import "../Styles/MembersDash.css";

const PAYMENTS_DEMO = [
  { desc: "Annual Subscription 2026-27", amount: "₹2,500", status: "Pending", date: "Due 31 Aug 2026" },
  { desc: "Annual Subscription 2025-26", amount: "₹2,000", status: "Paid", date: "18 Jul 2025" },
  { desc: "Library Development Fund", amount: "₹500", status: "Paid", date: "02 Jan 2025" },
];

function Payments() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Payments</h2>
        <p>Your payment history and pending dues</p>
      </div>

      <div className="ds-payment-list">
        {PAYMENTS_DEMO.map((p, i) => (
          <div className="ds-payment-item" key={i}>
            <div className={`ds-payment-icon ${p.status === "Paid" ? "ds-paid" : "ds-pending"}`}>
              {p.status === "Paid" ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
            </div>

            <div className="ds-payment-info">
              <h4>{p.desc}</h4>
              <span>{p.date}</span>
            </div>

            <div className="ds-payment-right">
              <span className="ds-payment-amount"><IndianRupee size={13} />{p.amount.replace("₹", "")}</span>
              <span className={`ds-badge ${p.status === "Paid" ? "ds-badge-muted" : "ds-badge-gold"}`}>
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Payments;