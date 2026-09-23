import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import "../Styles/Footer.css"; // Importing standard plain CSS file

function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-container">
        <div>
          <Logo />
          <p className="footer-tagline">
            1st Floor, High Court, Main Building, Chennai - 600104. A modern web
            prototype for association communication, resources, and member
            services.
          </p>
        </div>

        <div className="footer-contacts">
          <p className="contact-item">
            <Phone size={18} className="contact-icon" /> (+91) 44 25342160 /
            7200019503
          </p>
          <p className="contact-item">
            <Mail size={18} className="contact-icon" /> "chennbar@gmail.com"
          </p>
          <p className="contact-item">
            <MapPin size={18} className="contact-icon" /> High Court, Chennai
          </p>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">
            Terms And Conditions
          </a>
          <a href="#" className="footer-link">
            Disclaimer
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        © Madras Bar Association. Designed and Created By Machine Vogue
        Technology.
      </div>
    </footer>
  );
}

export default Footer;
