import { useState } from "react";
import { Search, Lock, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import members from "./MembersData";
import "../Styles/Members.css";

function Members() {
  const [search, setSearch] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);
  const [otp, setOtp] = useState("");
  const [isDirectoryUnlocked, setIsDirectoryUnlocked] = useState(false);

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      member.practiceArea.toLowerCase().includes(search.toLowerCase()) ||
      member.enrollmentNo.toLowerCase().includes(search.toLowerCase())
  );

  const handleOtpVerify = () => {
    if (otp === "123456") {
      setIsDirectoryUnlocked(true);
      setSelectedMember(null);
      setOtp("");
    } else {
      alert("Invalid OTP. Use 123456 for demo.");
    }
  };

  return (
    <>
    <section id="members" className="members-section">
      <div className="members-container">
        <div className="members-header">
          <span>Members Directory</span>
          <h2>Madras Bar Association Members</h2>
          <p>
            Public users can view basic member profile details. Profile photos
            and contact details are visible only after one OTP verification.
          </p>
        </div>

        <div className="members-search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="Search by name, enrollment number, or practice area"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {isDirectoryUnlocked && (
          <div className="directory-unlocked-alert">
            <ShieldCheck size={20} />
            Member profile photos and contact details are now unlocked.
          </div>
        )}

        <div className="members-grid">
          {filteredMembers.map((member) => (
            <div className="memberCard" key={member.id}>
              <div className="member-image-lock">
                {isDirectoryUnlocked ? (
                  <img src={member.profileImage} alt={member.name} />
                ) : (
                  <div className="locked-profile">
                    <Lock size={42} />
                    <span>Profile Locked</span>
                  </div>
                )}
              </div>

              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="designation">{member.designation}</p>

                <div className="member-basic">
                  <p>
                    <strong>Enrollment:</strong> {member.enrollmentNo}
                  </p>
                  <p>
                    <strong>Practice:</strong> {member.practiceArea}
                  </p>
                  <p>
                    <strong>Experience:</strong> {member.experience}
                  </p>
                </div>

                {!isDirectoryUnlocked ? (
                  <button
                    className="view-contact-btn"
                    onClick={() => setSelectedMember(member)}
                  >
                    <Lock size={16} />
                    Unlock All Member Details
                  </button>
                ) : (
                  <div className="contact-details">
                    <p>
                      <Mail size={16} /> {member.email}
                    </p>
                    <p>
                      <Phone size={16} /> {member.phone}
                    </p>
                    <p>
                      <MapPin size={16} /> {member.office}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="otp-modal">
          <div className="otp-box">
            <button
              className="otp-close"
              onClick={() => {
                setSelectedMember(null);
                setOtp("");
              }}
            >
              ✕
            </button>

            <ShieldCheck size={52} className="otp-icon" />

            <h3>OTP Verification Required</h3>

            <p>
              To unlock all member profile photos and contact details, please
              verify using OTP.
            </p>

            <div className="demo-otp">
              Demo OTP: <strong>123456</strong>
            </div>

            <input
             type="text"
             placeholder="Enter Your Name"
             required
             className="name-input"
             />
             <input type="email"
              placeholder="Enter Your Email"
               required 
               className="email-input" />
               
               <input
               type="tel"
               placeholder="Enter Your Phone Number"
               required
               className="phone-input"
               />   
               <br />
               <a href="">Send OTP</a>
                <br />

            <input
              type="text"
              placeholder="Enter OTP"
              maxLength="6"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />

            <button className="verify-btn" onClick={handleOtpVerify}>
              Verify OTP
            </button>
          </div>
        </div>
      )}
    </section>
    </>
  );
}

export default Members;