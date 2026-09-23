import SectionTitle from "./SectionTitle";
import president from "../assets/comitee members/president.jpeg";
import sec from "../assets/comitee members/secratary.jpeg";
import lib from "../assets/comitee members/laibriy.jpeg";
import tre from "../assets/comitee members/treasurer.jpeg";
import muizz from "../assets/comitee members/muizz.jpeg";
import Arulselvi from "../assets/comitee members/Arulselvi.jpeg";
import ilayaraja from "../assets/comitee members/eliyarja.jpeg";
import kavi from "../assets/comitee members/Kavitha.jpeg";
import vasanth from "../assets/comitee members/vasanth.jpeg";
import partha from "../assets/comitee members/paratha.png";

import "../Styles/OfficeBearers.css"; // Importing standard CSS file

function OfficeBearers() {
  const officeBearers = [
    { 
      role: "President", 
        profileImage: president,
        name: "V.R.Kamalanathan", 
      term: "2026 - 2028" 
    },
    { 
      role: "Secretary", 
        profileImage: sec,
        name: "J.Pothiraj", 
      term: "2026 - 2028" 
    },
    { 
      role: "Treasurer", 
      profileImage: tre,  
      name: "V.T.Balaji", 
      term: "2026 - 2028" 
    },
    { 
      role: "Librarian", 
      profileImage: lib,  
      name: "D.Raja", 
      term: "2026 - 2028" 
    },
  ];

  const committeeMembers = [
    {
        name: "Muizz Ali",
        role: "Commttiee Member",
        term: "2026 - 2028",
        profileImage: muizz,
    },
    {
        name: "Kavitha Y",
        role: "Commttiee Member",
        term: "2026 - 2028",
        profileImage: kavi,
    },
    {
        name: "Arul Selvi G",
        role: "Commttiee Member",
        term: "2026 - 2028",
        profileImage: Arulselvi,
    },
    {
        name: "Elliyarajkumar",
        role: "Commttiee Member",
        term: "2026 - 2028",
        profileImage: ilayaraja,
    },
    {
        name: "Vasantha Kumar",
        role: "Commttiee Member",
        term: "2026 - 2028",
        profileImage: vasanth,
    },
    {
        name: "Arvind Srevatsa B",
        role: "Co-op Member",
        term: "2026 - 2028",
        profileImage: partha,
    },
  ];

  return (
    <section className="office-bearers-section">
      <div className="office-bearers-container">
        <SectionTitle
          eyebrow="Leadership"
          title="Office Bearers"
          text="Showcase the current executive committee and maintain year-wise archive pages for previous terms."
        />
        
        <div className="bearers-grid">
          {officeBearers.map((member) => (
            <div key={member.role} className="member-card">
              <div className="image-frame">
                <img
                  src={member.profileImage}
                  alt={member.name}
                  className="member-avatar"
                />  
              </div>
              <p className="member-role">{member.name}</p>
              <h3 className="member-name">{member.role}</h3>
              <p className="member-term">Term {member.term}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="committeeMembers-container">
        <SectionTitle
          eyebrow="Committee Members" style={{ textdecoration: "underline" }}
         
        />
        <div className="committeeMembers-grid">
          {committeeMembers.map((member) => (
            <div key={member.role} className="CommiteeMember-card">
              <div className="committeeMember-image-frame">
                <img
                  src={member.profileImage}
                  alt={member.name}
                  className="committeeMember-avatar"
                />  
              </div>
              <p className="committeeMember-name">{member.name}</p>
              <h3 className="committeeMember-role">{member.role}</h3>
              <p className="committeeMember-term">Term {member.term}</p>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default OfficeBearers;
