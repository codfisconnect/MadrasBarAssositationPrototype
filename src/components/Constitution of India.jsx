// import React from "react";
import {  ExternalLink, Download } from "lucide-react";
import "../Styles/constitutionOfIndia.css";

const ConstitutionOfIndia = () => {
  const pdfUrl = "https://s3waas.gov.in";

  // Google Docs View Proxy Link Generator
  const googleViewerUrl = `https://cdnbbsr.s3waas.gov.in/s380537a945c7aaa788ccfcdf1b99b5d8f/uploads/2024/07/20240716890312078.pdf`;

  return (
    <div className="pdf-viewer-container">
      {/* Premium Action & Title Header Bar */}
      <header className="pdf-viewer-header">
        <div className="header-left">
          {/* Elegant Slate Back Control Action */}

          <div className="title-block">
            <h2>The Constitution of India</h2>
            <p>
              Official Diglot Edition (Updated up to the 106th Amendment Act,
              2023)
            </p>
          </div>
        </div>

        {/* Header Utilities Area */}
        <button className="header-actions">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="action-link-btn line-btn"
          >
            <ExternalLink size={16} />
            <span>Open Original Source</span>
          </a>
        </button>
      </header>

      {/* Sleek Viewport Box Canvas */}
      <div className="pdf-frame-wrapper">
        <iframe
          src={googleViewerUrl}
          title="Constitution of India Viewer"
          className="pdf-object"
          frameBorder="0"
          allowFullScreen
        >
          {/* Fallback Error Display Card View */}
          <div className="pdf-fallback-message">
            <div className="fallback-card">
              <div className="fallback-icon">📄</div>
              <h3>Viewer Failed to Initialize</h3>
              <p>
                Your browser or current network connection prevents the document
                viewer preview from loading safely.
              </p>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-download-btn"
              >
                <Download size={18} />
                <span>Download Document</span>
              </a>
            </div>
          </div>
        </iframe>
      </div>
    </div>
  );
};

export default ConstitutionOfIndia;
