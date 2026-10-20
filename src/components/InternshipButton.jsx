import "../Styles/Internship.css";

function InternshipButton({ onClick }) {
  return (
    <button className="internship-floating-btn" onClick={onClick}>
      Apply for Internship 
    </button>
  );
}

export default InternshipButton;