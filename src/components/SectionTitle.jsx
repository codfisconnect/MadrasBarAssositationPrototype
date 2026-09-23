import "../Styles/SectionTitle.css"; // Importing standard plain CSS file

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title-wrapper">
      <p className="section-eyebrow">
        {eyebrow}
      </p>
      <h2 className="section-heading">
        {title}
      </h2>
      {text && (
        <p className="section-text">
          {text}
        </p>
      )}
    </div>
  );
}

export default SectionTitle;
