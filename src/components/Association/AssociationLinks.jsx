import { ExternalLink } from "lucide-react";
import SectionTitle from "../SectionTitle";
import "./Association.css";

function Associations() {
  const associationLinks = [
    {
      title: "Bar Council Of India",
      url: "https://www.barcouncilofindia.org/",
    },
    {
      title: "Bar Council of Tamilnadu & Puducherry",
      url: "https://www.bctnpy.org/py.org/",
    },
    {
      title: "Madras High Court",
      url: "https://www.mhc.tn.gov.in/",
    },
    {
      title: "Legislative Department",
      url: "https://legislative.gov.in/",
    },
    {
      title: "Department of Legal Affairs",
      url: "https://legalaffairs.gov.in/",
    },
    {
      title: "Department of Justice",
      url: "https://doj.gov.in/",
    },
    {
      title: "Supreme Court of India",
      url: "https://www.sci.gov.in/",
    },
    {
      title: "Rajya Sabha",
      url: "https://sansad.in/rs/",
    },
    {
      title: "Lok Sabha",
      url: "https://sansad.in/ls",
    },
    {
      title: "Constitution of India",
      url: "https://www.india.gov.in/my-government/constitution-india",
    },
  ];

  return (
    <section id="associations" className="associations-section">
      <div className="associations-container">
        <SectionTitle
          eyebrow="Associations"
          title="Important institutions and links"
        />
        <div className="associations-grid">
          {associationLinks.map((link) => (
            <a
              key={link.title}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="associations-link"
            >
              {link.title}
              <ExternalLink size={14} className="associations-link-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Associations;