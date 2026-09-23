import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  User,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import "../Styles/ContactForm.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    purpose: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Callback Request:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      purpose: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 3500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <span>Contact Us</span>
          <h2>Request a Callback</h2>
          <p>
            Public users can submit their details and our association office will
            contact them regarding their request.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-card">
            <div className="contact-logo-box">
              <Phone size={34} />
            </div>

            <h3>Madras Bar Association</h3>

            <p>
              Submit a callback request for association-related enquiries,
              membership guidance, event information, or general support.
            </p>

            <div className="contact-info-list">
              <div>
                <MapPin size={20} />
                <span>
                  1st Floor, High Court, Main Building, Chennai - 600104
                </span>
              </div>

              <div>
                <Phone size={20} />
                <span>(+91) 44 25342160 / 7200019503</span>
              </div>

              <div>
                <Mail size={20} />
                <span>chennbar@gmail.com</span>
              </div>

              <div>
                <Clock size={20} />
                <span>Monday - Saturday, 10:00 AM - 5:30 PM</span>
              </div>
            </div>
          </div>

          <form className="callback-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                <CheckCircle size={20} />
                Callback request submitted successfully!
              </div>
            )}

            <div className="form-row">
              <div className="contact-form-group">
                <label>Full Name</label>
                <div className="input-icon-box">
                  <User size={18} />
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label>Phone Number</label>
                <div className="input-icon-box">
                  <Phone size={18} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="contact-form-group">
                <label>Email Address</label>
                <div className="input-icon-box">
                  <Mail size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="example@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label>Purpose</label>
                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  required
                >
                  <option value="">-Select purpose-</option>
                  <option value="Membership Enquiry">Civil Case Enquiry</option>
                  <option value="Event Enquiry">Criminal Case Enquiry</option>
                  <option value="Internship Enquiry">Legal Opinion</option>
                  <option value="Legal Resource Enquiry"> Legal Resource Enquiry</option>
                  <option value="General Callback">Family Law Enquiry</option>
                </select>
              </div>
            </div>

            <div className="contact-form-group">
              <label>Message</label>
              <div className="textarea-icon-box">
                <MessageSquare size={18} />
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            <button type="submit" className="callback-submit-btn">
              Register Callback Request
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;