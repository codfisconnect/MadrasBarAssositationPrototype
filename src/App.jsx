import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About/About.jsx";
import Academy from "./components/Academy/Academy.jsx";
import InternshipButton from "./components/InternshipButton";
import InternshipForm from "./components/InternshipForm";
import UsefulLinks from "./components/UsefulLinks";
import OfficeBearers from "./components/OfficeBearers";
import Associations from "./components/Association/AssociationLinks.jsx";
import MembersLogin from "./components/MembersLogin";
import Footer from "./components/Footer";
import Members from "./components/Members";
import Gallery from "./components/Gallery";
import Contact from "./components/Contactform";
import ConstitutionOfIndia from "./components/Constitution of India";
import CreateAccount from "./components/CreateAccount";
import OTPVerification from "./components/OTPVerification";
import ProfileCompletion from "./components/ProfileCompletion";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  const [showInternshipForm, setShowInternshipForm] = useState(false);
  const [activePage, setActivePage] = useState("home");

  if (activePage === "members") {
    return (
      <>
        <Header setActivePage={setActivePage} />
        <Members />
        <InternshipButton onClick={() => setShowInternshipForm(true)} />
        {showInternshipForm && (
          <InternshipForm onClose={() => setShowInternshipForm(false)} />
        )}
        <Footer />
      </>
    );
  }
  if (activePage === "member-login") {
    return (
      <>
        <Header setActivePage={setActivePage} />

        <MembersLogin setActivePage={setActivePage} />

        <Footer />
      </>
    );
  }
  if (activePage === "create-account") {
    return (
      <>
        <Header setActivePage={setActivePage} />

        <CreateAccount setActivePage={setActivePage} />

        <Footer />
      </>
    );
  }
  if (activePage === "otp-verification") {
    return (
      <>
        <Header setActivePage={setActivePage} />

        <OTPVerification setActivePage={setActivePage} />

        <Footer />
      </>
    );
  }
  if (activePage === "profile-completion") {
    return (
      <>
        <Header setActivePage={setActivePage} />

        <ProfileCompletion setActivePage={setActivePage} />

        <Footer />
      </>
    );
  }
  if (activePage === "forgot-password") {
    return (
      <>
        <Header setActivePage={setActivePage} />

        <ForgotPassword setActivePage={setActivePage} />

        <Footer />
      </>
    );
  }
  if (activePage === "reset-password") {
    return (
      <>
        <Header setActivePage={setActivePage} />

        <ResetPassword setActivePage={setActivePage} />

        <Footer />
      </>
    );
  }
  if (activePage === "Gallery") {
    return (
      <>
        <Header setActivePage={setActivePage} />
        <Gallery />
        <InternshipButton onClick={() => setShowInternshipForm(true)} />
        {showInternshipForm && (
          <InternshipForm onClose={() => setShowInternshipForm(false)} />
        )}
        <Footer />
      </>
    );
  }
  if (activePage === "contact") {
    return (
      <>
        <Header setActivePage={setActivePage} />
        <Contact />
        <InternshipButton onClick={() => setShowInternshipForm(true)} />
        {showInternshipForm && (
          <InternshipForm onClose={() => setShowInternshipForm(false)} />
        )}
        <Footer />
      </>
    );
  }
  if (activePage === "office-bearers") {
    return (
      <>
        <Header setActivePage={setActivePage} />
        <OfficeBearers />
        <InternshipButton onClick={() => setShowInternshipForm(true)} />
        {showInternshipForm && (
          <InternshipForm onClose={() => setShowInternshipForm(false)} />
        )}
        <Footer />
      </>
    );
  }
  if (activePage === "constitution") {
    return (
      <>
        <Header setActivePage={setActivePage} />
        <ConstitutionOfIndia />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header setActivePage={setActivePage} />
      <Hero setActivePage={setActivePage} />
      <Stats />
      <About />
      <Academy />
      <UsefulLinks />
      <Associations />
      <Footer />
      <InternshipButton onClick={() => setShowInternshipForm(true)} />
      {showInternshipForm && (
        <InternshipForm onClose={() => setShowInternshipForm(false)} />
      )}
    </>
  );
}

export default App;
