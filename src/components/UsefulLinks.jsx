import { ExternalLink, BookOpen, ShieldCheck, Landmark, Search } from "lucide-react";
import SectionTitle from "./SectionTitle";
import "../Styles/UsefullLinks.css";

function UsefulLinks() {
  const usefulCards = [
    {
      title: "Central Acts",
      text: "Download important Central Acts in PDF format.",
      button: "Download",
      icon: BookOpen,
    },
    {
      title: "Legal Dictionary",
      text: "Search legal terms, meanings, and definitions online.",
      button: "Search",
      icon: Search,
    },
    {
      title: "NALSA Handbook",
      text: "Access handbook formats by National Legal Services Authority.",
      button: "Download",
      icon: ShieldCheck,
    },
    {
      title: "Tamil Acts",
      text: "View Central Acts translated in Tamil PDF format.",
      button: "View Acts",
      icon: Landmark,
    },
  ];

  return (
    <section id="useful-links" className="useful-links-section">
      <div className="useful-links-container">
        <SectionTitle
          eyebrow="Resources"
          title="Useful legal links and downloads"
          text="A clean resource hub for legal acts, dictionaries, formats, translations, and important legal reference materials."
        />
        <div className="useful-links-grid">
          {usefulCards.map((card) => (
            <div key={card.title} className="useful-links-card">
              <div className="useful-links-icon">
                <card.icon size={28} />
              </div>
              <h3 className="useful-links-title">{card.title}</h3>
              <p className="useful-links-text">{card.text}</p>
              <button className="useful-links-btn">
                {card.button} <ExternalLink size={15} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UsefulLinks;