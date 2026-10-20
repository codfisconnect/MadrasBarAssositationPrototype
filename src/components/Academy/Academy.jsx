import { ArrowRight, PlayCircle } from "lucide-react";
import "./Academy.css";

function Academy() {
  return (
    <section className="academy-section">
      <div className="academy-grid">
        <div className="academy-content">
          <p className="academy-eyebrow">MBA Law Academy</p>

          <h2 className="academy-heading">
            Educate yourself, enrich your experience, and excel in your
            profession.
          </h2>

          <p className="academy-text">
            The MBA Academy is an academic wing of the Madras Bar Association
            for continuous learning and benefit of the legal fraternity.
          </p>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="academy-cta"
          >
            View The Channel <ArrowRight size={18} />
          </a>
        </div>

        <div className="academy-frame-outer">
          <div className="academy-frame-inner">
            <div className="academy-frame-nested">
              <a
                href="https://www.youtube.com/watch?v=wIRAONZ-YW4"
                target="_blank"
                rel="noreferrer"
                className="academy-video-link"
              >
                <div>
                  <PlayCircle className="academy-play-icon" size={72} />
                  <h3 className="academy-video-title">
                    MBA Law Academy Video Series
                  </h3>
                  <p className="academy-video-text">
                    Click here to watch the video on YouTube
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Academy;