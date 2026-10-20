import {
  Clock3,
  MapPin,
} from "lucide-react";

function UpcomingEvents() {

  const events = [
    {
      date: "02",
      month: "AUG",
      title: "Monthly General Meeting",
      time: "10:30 AM - 12:30 PM",
      location: "MBA Main Hall",
    },
    {
      date: "10",
      month: "AUG",
      title: "Legal Aid Camp",
      time: "09:00 AM - 04:00 PM",
      location: "Chennai District Court Campus",
    },
    {
      date: "18",
      month: "AUG",
      title: "Seminar on Constitutional Law",
      time: "02:00 PM - 05:00 PM",
      location: "MBA Auditorium",
    },
  ];

  return (
    <section className="dashboard-card upcoming-events">

      <div className="dashboard-card-heading">

        <h2>
          Upcoming Events
        </h2>

        <button>
          View Calendar
        </button>

      </div>

      <div className="events-list">

        {events.map((event) => (

          <div
            className="event-item"
            key={event.title}
          >

            <div className="event-date">

              <strong>
                {event.date}
              </strong>

              <span>
                {event.month}
              </span>

            </div>

            <div className="event-details">

              <h3>
                {event.title}
              </h3>

              <p>
                <Clock3 size={14} />
                {event.time}
              </p>

              <p>
                <MapPin size={14} />
                {event.location}
              </p>

            </div>

          </div>

        ))}

      </div>

      <button className="view-more-btn">
        View All Events →
      </button>

    </section>
  );
}

export default UpcomingEvents;