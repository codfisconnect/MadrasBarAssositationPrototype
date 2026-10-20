import { useState } from "react";
import { Lock, Image, ShieldCheck, X } from "lucide-react";
import galleryImages from "./GalleryData";
import "../Styles/Gallery.css";

function Gallery() {
  const [isMemberAccess, setIsMemberAccess] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const visibleImages = galleryImages.filter(
    (item) => item.access === "public" || isMemberAccess
  );

  return (
    <>
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-header">
          <span>Photo Gallery</span>
          <h2>Madras Bar Association Gallery</h2>
          <p>
            Public users can view selected pictures. Members can unlock and view
            the complete gallery including confidential association pictures.
          </p>
        </div>

        <div className="gallery-action-card">
          <div>
            <h3>
              {isMemberAccess
                ? "Full Gallery Access Enabled"
                : "Members-only images are locked"}
            </h3>
            <p>
              {isMemberAccess
                ? "You can now view public and confidential gallery images."
                : "Login as a member to access confidential gallery images."}
            </p>
          </div>

          {!isMemberAccess ? (
            <button onClick={() => setIsMemberAccess(true)}>
              <ShieldCheck size={18} />
              Demo Member Unlock
            </button>
          ) : (
            <button className="lock-again-btn" onClick={() => setIsMemberAccess(false)}>
              <Lock size={18} />
              Lock Gallery
            </button>
          )}
        </div>

        <div className="gallery-grid">
          {visibleImages.map((item) => (
            <div className="gallery-card" key={item.id}>
              <div className="gallery-image-box">
                <img src={item.image} alt={item.title} />

                {item.access === "private" && (
                  <div className="private-badge">
                    <Lock size={14} />
                    Members Only
                  </div>
                )}
              </div>

              <div className="gallery-info">
                <p>{item.category}</p>
                <h3>{item.title}</h3>

                <button onClick={() => setSelectedImage(item)}>
                  <Image size={17} />
                  View Image
                </button>
              </div>
            </div>
          ))}

          {!isMemberAccess &&
            galleryImages
              .filter((item) => item.access === "private")
              .map((item) => (
                <div className="gallery-card locked-gallery-card" key={item.id}>
                  <div className="locked-gallery-preview">
                    <Lock size={44} />
                    <h3>Confidential Image</h3>
                    <p>Members only</p>
                  </div>

                  <div className="gallery-info">
                    <p>Members Only</p>
                    <h3>{item.title}</h3>
                    <button onClick={() => setIsMemberAccess(true)}>
                      <Lock size={17} />
                      Unlock Gallery
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-modal">
          <div className="gallery-modal-box">
            <button className="gallery-close-btn" onClick={() => setSelectedImage(null)}>
              <X size={22} />
            </button>

            <img src={selectedImage.image} alt={selectedImage.title} />
            <h3>{selectedImage.title}</h3>
            <p>{selectedImage.category}</p>
          </div>
        </div>
      )}
    </section>
    </>
  );
}

export default Gallery;