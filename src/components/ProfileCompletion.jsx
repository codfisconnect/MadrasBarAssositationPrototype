import { useState } from "react";
import {
  User,
  Upload,
  Camera,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Building2,
  Globe,
  Save,
  ArrowRight,
} from "lucide-react";

import "../Styles/ProfileCompletion.css";

function ProfileCompletion({ member }) {
  const [profileImage, setProfileImage] = useState(
    member?.profileImage || ""
  );

  const [progress] = useState(25);

  const [formData, setFormData] = useState({
    name: member?.name || "",
    fatherName: "",
    dateOfBirth: "",
    gender: "",
    enrollmentNo: member?.enrollmentNo || "",
    registrationNo: "",
    designation: member?.designation || "",
    experience: "",
    practiceArea: "",
    officeName: "",
    officeAddress: "",
    city: "",
    state: "",
    pincode: "",
    phone: member?.phone || "",
    alternatePhone: "",
    email: member?.email || "",
    website: "",
    linkedin: "",
    facebook: "",
    twitter: "",
    biography: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setProfileImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    alert("Profile Saved Successfully!");
  };

  return (
    <section className="profile-completion-page">

      <div className="profile-completion-container">

        {/* Header */}

        <div className="completion-header">

          <div>

            <span>Madras Bar Association</span>

            <h1>Complete Your Member Profile</h1>

            <p>
              Complete your professional profile to unlock all
              member features and appear in the Association Directory.
            </p>

          </div>

          <button
            className="save-profile-btn"
            onClick={handleSave}
          >
            <Save size={18} />
            Save Profile
          </button>

        </div>

        {/* Progress */}

        <div className="profile-progress-card">

          <div className="progress-header">

            <h3>Profile Completion</h3>

            <span>{progress}% Completed</span>

          </div>

          <div className="progress-bar">

            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>

          </div>

        </div>

        {/* Main Layout */}

        <div className="profile-grid">

          {/* LEFT CARD */}

          <div className="profile-left-card">

            <div className="photo-wrapper">

              {profileImage ? (
                <img
                  src={profileImage}
                  alt="Profile"
                  className="profile-preview"
                />
              ) : (
                <div className="empty-photo">

                  <User size={60} />

                </div>
              )}

              <label className="upload-photo-btn">

                <Camera size={16} />

                Change Photo

                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleImageUpload}
                />

              </label>

            </div>

            <div className="member-basic-info">

              <h2>{formData.name || "Member Name"}</h2>

              <p>{formData.designation}</p>

              <span>{formData.enrollmentNo}</span>

            </div>

            <div className="completion-tips">

              <h4>Profile Tips</h4>

              <ul>

                <li>✔ Upload a professional photo</li>

                <li>✔ Add your office address</li>

                <li>✔ Complete contact details</li>

                <li>✔ Add practice areas</li>

                <li>✔ Add your biography</li>

              </ul>

            </div>

          </div>

          {/* RIGHT FORM */}

          <div className="profile-form-card">

            <h2>Personal Information</h2>

            <div className="form-grid">

              <div className="input-group">

                <label>Full Name</label>

                <div className="input-box">

                  <User size={18} />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Full Name"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>Father's Name</label>

                <div className="input-box">

                  <User size={18} />

                  <input
                    type="text"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="Enter Father's Name"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>Date of Birth</label>

                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                />

              </div>

              <div className="input-group">

                <label>Gender</label>

                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

              </div>
                            {/* Enrollment Information */}

              <div className="section-divider">
                <h2>Enrollment Information</h2>
              </div>

              <div className="input-group">

                <label>Enrollment Number</label>

                <div className="input-box">

                  <Briefcase size={18} />

                  <input
                    type="text"
                    name="enrollmentNo"
                    value={formData.enrollmentNo}
                    onChange={handleChange}
                    placeholder="Enrollment Number"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>MBA Registration Number</label>

                <div className="input-box">

                  <Building2 size={18} />

                  <input
                    type="text"
                    name="registrationNo"
                    value={formData.registrationNo}
                    onChange={handleChange}
                    placeholder="MBA Registration Number"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>Designation</label>

                <input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleChange}
                  placeholder="Senior Advocate"
                />

              </div>

              <div className="input-group">

                <label>Years of Experience</label>

                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="15"
                />

              </div>

              <div className="section-divider">
                <h2>Contact Information</h2>
              </div>

              <div className="input-group">

                <label>Email Address</label>

                <div className="input-box">

                  <Mail size={18} />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>Mobile Number</label>

                <div className="input-box">

                  <Phone size={18} />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="9876543210"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>Alternate Number</label>

                <div className="input-box">

                  <Phone size={18} />

                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    placeholder="Alternate Number"
                  />

                </div>

              </div>

              <div className="section-divider">
                <h2>Office Information</h2>
              </div>

              <div className="input-group">

                <label>Office Name</label>

                <input
                  type="text"
                  name="officeName"
                  value={formData.officeName}
                  onChange={handleChange}
                  placeholder="ABC Associates"
                />

              </div>

              <div className="input-group full-width">

                <label>Office Address</label>

                <textarea
                  rows="3"
                  name="officeAddress"
                  value={formData.officeAddress}
                  onChange={handleChange}
                  placeholder="Complete Office Address"
                />

              </div>

              <div className="input-group">

                <label>City</label>

                <div className="input-box">

                  <MapPin size={18} />

                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Chennai"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>State</label>

                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="Tamil Nadu"
                />

              </div>

              <div className="input-group">

                <label>Pincode</label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="600001"
                />

              </div>

              <div className="input-group">

                <label>Practice Area</label>

                <select
                  name="practiceArea"
                  value={formData.practiceArea}
                  onChange={handleChange}
                >
                  <option value="">Select Practice Area</option>
                  <option>Civil Law</option>
                  <option>Criminal Law</option>
                  <option>Corporate Law</option>
                  <option>Constitutional Law</option>
                  <option>Family Law</option>
                  <option>Taxation Law</option>
                  <option>Labour Law</option>
                  <option>Intellectual Property</option>
                  <option>Arbitration</option>
                  <option>Banking Law</option>
                </select>

              </div>
                            {/* Biography */}

              <div className="section-divider">
                <h2>Professional Information</h2>
              </div>

              <div className="input-group full-width">

                <label>Professional Biography</label>

                <textarea
                  rows="6"
                  name="biography"
                  value={formData.biography}
                  onChange={handleChange}
                  placeholder="Tell members about your legal career, specialization, achievements, publications, memberships and professional experience..."
                />

              </div>

              <div className="input-group">

                <label>Languages Known</label>

                <input
                  type="text"
                  name="languages"
                  placeholder="English, Tamil, Hindi"
                  onChange={handleChange}
                />

              </div>

              <div className="input-group">

                <label>Courts Practicing</label>

                <select
                  name="court"
                  onChange={handleChange}
                >
                  <option value="">Select Court</option>
                  <option>Madras High Court</option>
                  <option>Supreme Court of India</option>
                  <option>District Court</option>
                  <option>Family Court</option>
                  <option>Consumer Court</option>
                  <option>Tribunals</option>
                  <option>All Courts</option>
                </select>

              </div>

              <div className="input-group">

                <label>Bar Council Number</label>

                <input
                  type="text"
                  name="barCouncilNo"
                  placeholder="Enter Bar Council Number"
                  onChange={handleChange}
                />

              </div>

              <div className="input-group">

                <label>Year of Enrollment</label>

                <input
                  type="number"
                  name="enrollmentYear"
                  placeholder="2014"
                  onChange={handleChange}
                />

              </div>

              {/* Social Links */}

              <div className="section-divider">
                <h2>Professional Links</h2>
              </div>

              <div className="input-group">

                <label>Website</label>

                <div className="input-box">

                  <Globe size={18} />

                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://yourwebsite.com"
                  />

                </div>

              </div>

              <div className="input-group">

                <label>LinkedIn</label>

                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="LinkedIn Profile"
                />

              </div>

              <div className="input-group">

                <label>Facebook</label>

                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="Facebook Profile"
                />

              </div>

              <div className="input-group">

                <label>Twitter / X</label>

                <input
                  type="url"
                  name="twitter"
                  value={formData.twitter}
                  onChange={handleChange}
                  placeholder="Twitter / X Profile"
                />

              </div>

            </div>

            {/* Bottom Action Buttons */}

            <div className="profile-actions">

              <button
                type="button"
                className="secondary-btn"
              >
                Skip For Now
              </button>

              <button
                type="button"
                className="primary-btn"
                onClick={handleSave}
              >
                <Save size={18} />

                Complete Profile

                <ArrowRight size={18} />

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ProfileCompletion;