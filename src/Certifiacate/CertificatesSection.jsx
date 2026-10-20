import { useRef, useState } from "react";

import {
  Upload,
  Eye,
  Replace,
  FileText,
  ShieldCheck,
} from "lucide-react";

const certificateTypes = [
  {
    id: "tenth",
    title: "10TH Certificate",
    description: "10th Standard Certificate",
  },
  {
    id: "twelfth",
    title: "12TH Certificate",
    description: "12th Standard Certificate",
  },
  {
    id: "degree",
    title: "Degree (Law)",
    description: "Law Degree Certificate",
  },
  {
    id: "enrollment",
    title: "Enrollment",
    description: "Bar Council Enrollment",
  },
  {
    id: "aadhar",
    title: "Aadhaar Card",
    description: "Aadhaar Card Document",
  },
];

function CertificatesSection() {

  const [certificates, setCertificates] = useState({});

  const fileInputRefs = useRef({});

  const handleUploadClick = (id) => {

    fileInputRefs.current[id]?.click();

  };

  const handleFileChange = (event, certificate) => {

    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    const allowedTypes = [
      "application/pdf",
      "image/jpeg",
      "image/png",
      "image/jpg",
    ];

    if (!allowedTypes.includes(file.type)) {

      alert(
        "Please upload only PDF, JPG or PNG files."
      );

      return;
    }

    if (file.size > 5 * 1024 * 1024) {

      alert(
        "File size must be less than 5 MB."
      );

      return;
    }

    const fileUrl = URL.createObjectURL(file);

    setCertificates((previous) => ({
      ...previous,

      [certificate.id]: {
        file,
        fileUrl,
      },
    }));

  };

  const handleView = (certificate) => {

    const uploaded =
      certificates[certificate.id];

    if (!uploaded) {

      alert(
        `Please upload your ${certificate.title} first.`
      );

      return;
    }

    window.open(
      uploaded.fileUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="dashboard-card certificates-section">

      <div className="dashboard-card-heading">

        <div>
          <h2>
            Certificates
          </h2>

          <p>
            Upload and manage your certificates
          </p>
        </div>

        <button>
          View All Certificates
        </button>

      </div>

      <div className="certificate-grid">

        {certificateTypes.map((certificate) => {

          const uploaded =
            certificates[certificate.id];

          return (
            <div
              className="certificate-card"
              key={certificate.id}
            >

              <h3>
                {certificate.title}
              </h3>

              <div className="certificate-file-icon">
                <FileText size={35} />
              </div>

              <p>
                {certificate.description}
              </p>

              {uploaded ? (
                <>
                  <span className="certificate-uploaded">
                    <ShieldCheck size={14} />
                    Uploaded
                  </span>

                  <span className="certificate-filename">
                    {uploaded.file.name}
                  </span>

                  <div className="certificate-actions">

                    <button
                      onClick={() =>
                        handleView(certificate)
                      }
                    >
                      <Eye size={14} />
                      View
                    </button>

                    <button
                      onClick={() =>
                        handleUploadClick(
                          certificate.id
                        )
                      }
                    >
                      <Replace size={14} />
                      Replace
                    </button>

                  </div>
                </>
              ) : (
                <button
                  className="certificate-upload-btn"
                  onClick={() =>
                    handleUploadClick(
                      certificate.id
                    )
                  }
                >
                  <Upload size={16} />
                  Upload
                </button>
              )}

              <input
                ref={(element) => {
                  fileInputRefs.current[
                    certificate.id
                  ] = element;
                }}
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                hidden
                onChange={(event) =>
                  handleFileChange(
                    event,
                    certificate
                  )
                }
              />

            </div>
          );
        })}

      </div>

      <div className="certificate-upload-area">

        <Upload size={32} />

        <div>
          <strong>
            Upload New Certificate
          </strong>

          <span>
            PDF, JPG or PNG | Maximum 5 MB
          </span>
        </div>

      </div>

      <div className="certificate-security">

        <ShieldCheck size={18} />

        <span>
          Your uploaded documents are private and
          will only be accessible through your
          authenticated member account.
        </span>

      </div>

    </section>
  );
}

export default CertificatesSection;