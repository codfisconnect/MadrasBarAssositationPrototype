import { CalendarDays, MapPin, Clock } from "lucide-react";
import "../Styles/MembersDash.css";

const EVENTS_DEMO = [
  { title: "Annual General Meeting 2026", date: "30 Aug 2026", time: "10:00 AM", venue: "MBA Auditorium, Chennai" },
  { title: "Seminar on Arbitration Law", date: "10 Sep 2026", time: "3:00 PM", venue: "High Court Bar Hall" },
  { title: "Diwali Get-Together", date: "28 Oct 2026", time: "6:30 PM", venue: "MBA Premises" },
];

function EventsMeetings() {
  return (
    <div className="ds-section">
      <div className="ds-section-header">
        <h2>Events & Meetings</h2>
        <p>Upcoming Association events and gatherings</p>
      </div>

      <div className="ds-events-list">
        {EVENTS_DEMO.map((e, i) => (
          <div className="ds-event-item" key={i}>
            <div className="ds-event-date-block">
              <span className="ds-event-day">{e.date.split(" ")[0]}</span>
              <span className="ds-event-month">{e.date.split(" ")[1]}</span>
            </div>

            <div className="ds-event-info">
              <h4>{e.title}</h4>
              <div className="ds-event-meta">
                <span><Clock size={13} /> {e.time}</span>
                <span><MapPin size={13} /> {e.venue}</span>
              </div>
            </div>

            <CalendarDays size={18} className="ds-event-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsMeetings;