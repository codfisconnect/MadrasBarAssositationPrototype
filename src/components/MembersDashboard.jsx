import { useState } from "react";

import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";
import DashboardStats from "./DashboardStats";
import MembershipOverview from "./MembershipOverview";
import UpcomingEvents from "./UpcomingEvents";
import RecentNotices from "./RecentNotices";
import CertificatesSection from "../Certifiacate/CertificatesSection";
import QuickActions from "./QuickActions";
import MembershipValidity from "./MembershipValidity";
import ProfileCompletionCard from "./ProfileCompletionCard";

import ProfileCompletion from "./ProfileCompletion";
import MembershipDetails from "./MembershipDetails";
import MyCases from "./MyCases";
import EventsMeetings from "./EventsMeetings";
import NoticesCirculars from "./NoticesCirculars";
import Payments from "./Payments";
import LibraryResources from "./LibraryResources";
import EServices from "./EServices";
import MemberDirectory from "./MemberDirectory";
import InternshipApplications from "./InternshipApplications";
import Support from "./Support";
import Settings from "./Settings";

import "../Styles/MembersDash.css";

function MembersDashboard({ member, onLogout }) {
  const [activeSection, setActiveSection] = useState("dashboard");

  return (
    <div className="member-dashboard-layout">
      {/* Sidebar */}
      <DashboardSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        onLogout={onLogout}
      />

      {/* Main Area */}
      <div className="dashboard-main">
        <DashboardHeader member={member} onLogout={onLogout} />

        <main className="dashboard-content">
          {activeSection === "dashboard" && (
            <>
              <div className="dashboard-page-heading">
                <div>
                  <h1>Dashboard</h1>
                  <p>Overview of your membership and activities</p>
                </div>

                <div className="dashboard-date">
                  Today's Date:{" "}
                  {new Date().toLocaleDateString("en-IN", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              </div>

              {/* Profile Completion Notification */}
              <ProfileCompletionCard
                member={member}
                setActiveSection={setActiveSection}
              />

              {/* Statistics */}
              <DashboardStats />

              {/* Main Grid */}
              <div className="dashboard-main-grid">
                <MembershipOverview member={member} />

                <UpcomingEvents />

                <RecentNotices />
              </div>

              {/* Bottom Grid */}
              <div className="dashboard-bottom-grid">
                {/* <CertificatesSection /> */}

                <QuickActions />

                <MembershipValidity />
              </div>
            </>
          )}

          {activeSection === "profile" && (
            <ProfileCompletion member={member} />
          )}

          {activeSection === "membership" && <MembershipDetails />}

          {activeSection === "cases" && <MyCases />}

          {activeSection === "events" && <EventsMeetings />}

          {activeSection === "library" && <LibraryResources />}

          {activeSection === "certificates" && (
            <div className="dashboard-full-section">
              <CertificatesSection />
            </div>
          )}

          {activeSection === "notices" && <NoticesCirculars />}

          {activeSection === "services" && <EServices />}

          {activeSection === "directory" && <MemberDirectory />}

          {activeSection === "payments" && <Payments />}

          {activeSection === "internship" && <InternshipApplications />}

          {activeSection === "support" && <Support />}

          {activeSection === "settings" && <Settings />}
        </main>

        <footer className="dashboard-footer">
          <span>© 2026 Madras Bar Association. All Rights Reserved.</span>

          <div>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
            <a href="#help">Help</a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default MembersDashboard;