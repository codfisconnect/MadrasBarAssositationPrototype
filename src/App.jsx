```jsx
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

  const showInternshipButton = [
    "home",
    "members",
    "Gallery",
    "contact",
    "office-bearers",
  ].includes(activePage);

  const renderPage = () => {
    switch (activePage) {
      case "members":
        return <Members />;

      case "member-login":
        return <MembersLogin setActivePage={setActivePage} />;

      case "create-account":
        return <CreateAccount setActivePage={setActivePage} />;

      case "otp-verification":
        return <OTPVerification setActivePage={setActivePage} />;

      case "profile-completion":
        return <ProfileCompletion setActivePage={setActivePage} />;

      case "forgot-password":
        return <ForgotPassword setActivePage={setActivePage} />;

      case "reset-password":
        return <ResetPassword setActivePage={setActivePage} />;

      case "Gallery":
        return <Gallery />;

      case "contact":
        return <Contact />;

      case "office-bearers":
        return <OfficeBearers />;

      case "constitution":
        return <ConstitutionOfIndia />;

      default:
        return (
          <>
            <Hero setActivePage={setActivePage} />
            <Stats />
            <About />
            <Academy />
            <UsefulLinks />
            <Associations />
          </>
        );
    }
  };

  return (
    <>
      <Header setActivePage={setActivePage} />

      {renderPage()}

      {showInternshipButton && (
        <InternshipButton
          onClick={() => setShowInternshipForm(true)}
        />
      )}

      {showInternshipForm && (
        <InternshipForm
          onClose={() => setShowInternshipForm(false)}
        />
      )}

      <Footer />
    </>
  );
}

export default App;
```