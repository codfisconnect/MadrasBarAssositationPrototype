import React from "react";
import { Gavel, Users, Landmark, Scale } from "lucide-react";
import SectionTitle from "../SectionTitle";
import "./About.css"; 

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <SectionTitle
          eyebrow="Welcome"
          title="Welcome to Madras Bar Association"
          text="A refined website experience of structure, redesigned with modern spacing, typography, cards, and responsive layout. Created by Machine Vogue Technology for Client Demo"
        />

        <div className="about-grid-layout">
          
          {/* Left Column: Legacy Gradient Display Card */}
          <div className="legacy-showcase-card">
            <div className="card-ambient-orb" />
            <div className="card-glass-inner">
              <div className="card-top-details">
                <Scale size={52} className="scale-icon-accent" />
                <h3 className="legacy-card-title">
                  Legacy of the Legal Fraternity
                </h3>
                <p className="legacy-card-body">
                  Representing tradition, professional excellence, and
                  continuous legal learning from the High Court campus, Chennai.
                </p>
              </div>
              <div className="legacy-stats-grid">
                <div className="stat-pill">
                  <p className="stat-number">1865</p>
                  <p className="stat-label">Founded</p>
                </div>
                <div className="stat-pill">
                  <p className="stat-number">1898</p>
                  <p className="stat-label">Named MBA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Historical Narrative Text Content */}
          <div className="narrative-content-pane">
            <h3 className="narrative-section-heading">Who We Are</h3>
            <p className="narrative-paragraph">
              The Madras High Court was established in 1862 by a Royal Charter.
              Barristers practicing in the High Court formed an Association in
              1865. The first meeting of the Association was held on 14th March,
              1865.
            </p>
            <p className="narrative-paragraph">
              Initially, only British Barristers were enrolled as members.
              Later, Indian Barristers were permitted to become members. When
              the High Court shifted to the present building in 1892, a hall was
              given to the Association.
            </p>
            <p className="narrative-paragraph">
              In a meeting held on 30th April, 1898, it was resolved to name the
              Association as the Madras Bar Association.
            </p>

            {/* Quick Navigation Utility Grid */}
            <div className="utility-navigation-grid">
              {[
                { icon: Landmark, title: "Milestones" },
                { icon: Users, title: "Presidents" },
                { icon: Gavel, title: "Secretaries" },
              ].map((item) => (
                <div key={item.title} className="utility-nav-card">
                  <item.icon className="utility-card-icon" />
                  <p className="utility-card-title">{item.title}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
