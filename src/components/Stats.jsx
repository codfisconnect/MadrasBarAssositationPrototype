import "../Styles/Stats.css"

function Stats() {
  const stats = [
    { value: "1865", label: "Established" },
    { value: "160+", label: "Years of Legacy" },
    { value: " Madras High Court", label: " Campus" },
    { value: "MBA", label: "Law Academy" },
  ];
  return (
    <section className="stats-section">
  {stats.map((stat) => (
    <div key={stat.label} className="stats-card">
      <p className="stats-value">{stat.value}</p>
      <p className="stats-label">{stat.label}</p>
    </div>
  ))}
</section>
  );
}
export default Stats;
