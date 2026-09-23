import { useRef, useState } from "react";
import {
  Upload,
  FileText,
  Eye,
  Trash2,
  RefreshCw,
  CheckCircle,
  Clock,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

import "./Certificate.css";

const certificateTypes = [
  {
    id: "tenth",
    title: "10th Certificate",
    description: "Upload your Secondary School / 10th Standard certificate.",
    shortName: "10th",
  },
  {
    id: "twelfth",
    title: "12th Certificate",
    description: "Upload your Higher Secondary / 12th Standard certificate.",
    shortName: "12th",
  },
  {
    id: "degree",
    title: "Degree Certificate",
    description: "Upload your law degree or relevant academic degree certificate.",
    shortName: "Degree",
  },
  {
    id: "enrollment",
    title: "Enrollment Certificate",
    description: "Upload your Bar Council / advocate enrollment certificate.",
    shortName: "Enrollment",
  },
  {
    id: "aadhar",
    title: "Aadhaar Card",
    description: "Upload your Aadhaar document for identity verification.",
    shortName: "Aadhaar",
  },
];

function Certificates() {
  const [documents, setDocuments] = useState({});
  const [uploading, setUploading] = useState(null);
  const [viewingFile, setViewingFile] = useState(null);

  const fileRefs = useRef({});

  const allowedTypes = [
    "application/pdf",
    "image/jpeg",
    "image/jpg",
    "image/png",
  ];

  const handleUpload = (certificateId, file) => {
    if (!file) return;

    if (!allowedTypes.includes(file.type)) {
      alert("Please upload only PDF, JPG, JPEG or PNG files.");
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("File size must be less than 5 MB.");
      return;
    }

    setUploading(certificateId);

    setTimeout(() => {
      const fileUrl = URL.createObjectURL(file);

      setDocuments((prev) => ({
        ...prev,
        [certificateId]: {
          file,
          fileUrl,
          fileName: file.name,
          fileSize: formatFileSize(file.size),
          uploadedAt: new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }),
          status: "Uploaded",
        },
      }));

      setUploading(null);
    }, 1200);
  };

  const handleFileChange = (certificateId, event) => {
    const file = event.target.files?.[0];

    if (file) {
      handleUpload(certificateId, file);
    }

    event.target.value = "";
  };

  const handleDelete = (certificateId) => {
    const document = documents[certificateId];

    if (!document) return;

    const confirmed = window.confirm(
      "Are you sure you want to remove this certificate?"
    );

    if (!confirmed) return;

    URL.revokeObjectURL(document.fileUrl);

    setDocuments((prev) => {
      const updated = { ...prev };
      delete updated[certificateId];
      return updated;
    });
  };

  const handleReplace = (certificateId) => {
    fileRefs.current[certificateId]?.click();
  };

  const handleView = (document) => {
    setViewingFile(document);
  };

  const closeViewer = () => {
    setViewingFile(null);
  };

  return (
    <section className="certificates-page">
      <div className="certificates-container">

        {/* PAGE HEADER */}
        <div className="certificates-header">

          <div>
            <span className="certificates-eyebrow">
              Member Documents
            </span>

            <h1>Certificates</h1>

            <p>
              Upload and manage the documents required for your
              Madras Bar Association membership profile.
            </p>
          </div>

          <div className="certificate-security-badge">
            <ShieldCheck size={20} />

            <div>
              <strong>Secure Documents</strong>
              <span>Member access only</span>
            </div>
          </div>

        </div>

        {/* INFORMATION BANNER */}
        <div className="certificate-info-banner">

          <div className="certificate-info-icon">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h3>Document Upload Guidelines</h3>

            <p>
              Please upload clear and readable copies of your
              certificates. Accepted formats are PDF, JPG, JPEG
              and PNG. Maximum file size is 5 MB per document.
            </p>
          </div>

        </div>

        {/* CERTIFICATE GRID */}
        <div className="certificates-grid">

          {certificateTypes.map((certificate) => {
            const document = documents[certificate.id];
            const isUploading = uploading === certificate.id;

            return (
              <div
                className={`certificate-card ${
                  document ? "certificate-uploaded" : ""
                }`}
                key={certificate.id}
              >

                {/* CARD TOP */}
                <div className="certificate-card-top">

                  <div className="certificate-icon">
                    <FileText size={28} />
                  </div>

                  {document ? (
                    <div className="certificate-status verified">
                      <CheckCircle size={14} />
                      Uploaded
                    </div>
                  ) : (
                    <div className="certificate-status pending">
                      <Clock size={14} />
                      Pending
                    </div>
                  )}

                </div>

                {/* CARD CONTENT */}
                <div className="certificate-content">

                  <h3>{certificate.title}</h3>

                  <p>{certificate.description}</p>

                  {!document ? (
                    <>
                      <div className="empty-document-area">

                        {isUploading ? (
                          <>
                            <RefreshCw
                              size={28}
                              className="upload-spinner"
                            />

                            <span>
                              Uploading document...
                            </span>
                          </>
                        ) : (
                          <>
                            <Upload size={28} />

                            <span>
                              No document uploaded
                            </span>
                          </>
                        )}

                      </div>

                      <input
                        ref={(element) => {
                          fileRefs.current[certificate.id] = element;
                        }}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        hidden
                        onChange={(event) =>
                          handleFileChange(
                            certificate.id,
                            event
                          )
                        }
                      />

                      <button
                        className="upload-certificate-btn"
                        onClick={() =>
                          fileRefs.current[
                            certificate.id
                          ]?.click()
                        }
                        disabled={isUploading}
                      >
                        <Upload size={17} />

                        {isUploading
                          ? "Uploading..."
                          : "Upload Certificate"}
                      </button>
                    </>
                  ) : (
                    <>
                      {/* UPLOADED FILE */}
                      <div className="uploaded-file">

                        <div className="uploaded-file-icon">
                          <FileText size={23} />
                        </div>

                        <div className="uploaded-file-info">

                          <strong>
                            {document.fileName}
                          </strong>

                          <span>
                            {document.fileSize}
                          </span>

                        </div>

                      </div>

                      <div className="upload-details">

                        <div>
                          <span>Uploaded</span>
                          <strong>
                            {document.uploadedAt}
                          </strong>
                        </div>

                        <div>
                          <span>Status</span>
                          <strong className="status-text">
                            Uploaded
                          </strong>
                        </div>

                      </div>

                      {/* ACTIONS */}
                      <div className="certificate-actions">

                        <button
                          className="view-document-btn"
                          onClick={() =>
                            handleView(document)
                          }
                        >
                          <Eye size={16} />
                          View
                        </button>

                        <button
                          className="replace-document-btn"
                          onClick={() =>
                            handleReplace(certificate.id)
                          }
                        >
                          <RefreshCw size={16} />
                          Replace
                        </button>

                        <button
                          className="delete-document-btn"
                          onClick={() =>
                            handleDelete(certificate.id)
                          }
                          aria-label={`Delete ${certificate.title}`}
                        >
                          <Trash2 size={16} />
                        </button>

                      </div>

                      <input
                        ref={(element) => {
                          fileRefs.current[certificate.id] = element;
                        }}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        hidden
                        onChange={(event) =>
                          handleFileChange(
                            certificate.id,
                            event
                          )
                        }
                      />
                    </>
                  )}

                </div>

              </div>
            );
          })}

        </div>

        {/* COMPLETION SUMMARY */}
        <div className="certificate-summary">

          <div className="summary-left">

            <div className="summary-icon">
              <CheckCircle size={24} />
            </div>

            <div>
              <h3>Certificate Profile</h3>

              <p>
                {Object.keys(documents).length} of{" "}
                {certificateTypes.length} documents uploaded
              </p>
            </div>

          </div>

          <div className="certificate-progress">

            <div className="progress-track">

              <div
                className="progress-fill"
                style={{
                  width: `${
                    (Object.keys(documents).length /
                      certificateTypes.length) *
                    100
                  }%`,
                }}
              />

            </div>

            <strong>
              {Math.round(
                (Object.keys(documents).length /
                  certificateTypes.length) *
                  100
              )}
              %
            </strong>

          </div>

        </div>

        {/* SECURITY NOTE */}
        <div className="certificate-security-note">

          <AlertCircle size={18} />

          <p>
            Your uploaded documents are private and intended
            only for your Madras Bar Association membership
            records. In the production system, access will be
            restricted to authorized members and association
            administrators.
          </p>

        </div>

      </div>

      {/* DOCUMENT VIEWER */}
      {viewingFile && (
        <div
          className="certificate-viewer-overlay"
          onClick={closeViewer}
        >

          <div
            className="certificate-viewer"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="viewer-close"
              onClick={closeViewer}
            >
              ×
            </button>

            <div className="viewer-header">

              <FileText size={22} />

              <div>
                <h3>{viewingFile.fileName}</h3>

                <span>
                  {viewingFile.fileSize}
                </span>
              </div>

            </div>

            {viewingFile.file.type === "application/pdf" ? (
              <iframe
                src={viewingFile.fileUrl}
                title={viewingFile.fileName}
                className="document-preview"
              />
            ) : (
              <img
                src={viewingFile.fileUrl}
                alt={viewingFile.fileName}
                className="document-image-preview"
              />
            )}

          </div>

        </div>
      )}

    </section>
  );
}

function formatFileSize(bytes) {
  if (bytes === 0) return "0 Bytes";

  const units = [
    "Bytes",
    "KB",
    "MB",
    "GB",
  ];

  const index = Math.floor(
    Math.log(bytes) / Math.log(1024)
  );

  return `${(
    bytes / Math.pow(1024, index)
  ).toFixed(2)} ${units[index]}`;
}

export default Certificates;