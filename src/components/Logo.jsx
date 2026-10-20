import logo from "../assets/madrasbarassociationlogo.jpg";
import "../Styles/Logo.css";

function Logo() {
  return (
    <div className="logo">
      <img
        src={logo}
        alt="Madras Bar Association Logo"
        className="logo__image"
      />
      <div>
        <h1 className="logo__title">Madras Bar Association</h1>
        <p className="logo__subtitle">Established 1865</p>
      </div>
    </div>
  );
}

export default Logo;