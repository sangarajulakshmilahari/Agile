import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RightPanel() {
  const eventImages = [
    "/Eventimages/1.png",
    "/Eventimages/2.png",
    "/Eventimages/3.png",
    "/Eventimages/4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  /* ---------------- AUTO SLIDE ---------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === eventImages.length - 1 ? 0 : prev + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="right-panel">
      <div className="card">
        <div className="section">
          <h2 className="section-heading">Past Events</h2>

          <div className="carousel-container">
            <Image
              src={eventImages[currentIndex]}
              alt="event"
              fill
              priority
              style={{ objectFit: "cover" }}
            />

            {/* Arrows */}
            <button
              className="btn left"
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0
                    ? eventImages.length - 1
                    : currentIndex - 1,
                )
              }
            >
              ‹
            </button>

            <button
              className="btn right"
              onClick={() =>
                setCurrentIndex(
                  currentIndex === eventImages.length - 1
                    ? 0
                    : currentIndex + 1,
                )
              }
            >
              ›
            </button>

            {/* Dots */}
            <div className="carousel-dots">
              {eventImages.map((_, i) => (
                <span
                  key={i}
                  className={`dot ${i === currentIndex ? "active" : ""}`}
                  onClick={() => setCurrentIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="events-card">
          <h3 className="events-title">Upcoming Events</h3>

          <div className="mini">
            🎉 Sankranthi <span>Jan 14</span>
          </div>
          <div className="mini">
            🏢 Townhall <span>Feb 2</span>
          </div>
          <div className="mini">
            🌸 Spring Kick-off <span>Mar 1</span>
          </div>
        </div>

        <div className="events-card">
          <h3 className="events-title">Current Openings</h3>

          <a
            href="http://referrals.adroitent.ai:8092/referral/index"
            target="_blank"
            // rel="noopener noreferrer"
            className="mini link-row"
          >
            <span>React Developer</span>
            <span className="apply">Apply →</span>
          </a>

          <a
            href="http://referrals.adroitent.ai:8092/referral/index"
            target="_blank"
            // rel="noopener noreferrer"
            className="mini link-row"
          >
            <span>QA Engineer</span>
            <span className="apply">Apply →</span>
          </a>
        </div>
      </div>

      <style jsx>{`
        .right-panel {
          width: 360px; /* match grid */
          max-width: 360px;
          justify-self: end; /* stick to right */
          overflow: hidden;
          box-sizing: border-box;
        }
        .section-heading {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #3a77e3;
        }

        .carousel-container {
          position: relative; /* REQUIRED */
          height: 180px;
          border-radius: 16px;
          overflow: hidden;
        }
        .carousel-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(207, 118, 58, 0.86);
          color: white;
          border: none;
          font-size: 14px;
          padding: 5px 5px;
          cursor: pointer;
          border-radius: 6px;
          z-index: 2;
        }

        .left {
          left: 1px;
        }

        .right {
          right: 1px;
        }

        .carousel-dots {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 10px 0;
          display: flex;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.45), transparent);
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #f56c00; /* orange */
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 18px;
          border-radius: 6px;
          background: #f56c00; /* solid orange */
        }

        .card {
          background: white;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mini {
          background: #f9fafb;
          border-radius: 14px;
          padding: 10px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .events-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 14px;
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);
        }

        .events-title {
          font-size: 15px;
          font-weight: 600;
          margin-bottom: 8px;
          color: #3a77e3;
        }

        .mini span:not(.apply) {
          color: #6b7280;
          font-size: 13px;
        }

        .apply {
          background: #f56c00;
          color: white;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: background 0.2s ease;
          min-width: 68px;
          text-align: center;
        }

        .apply:hover {
          background: #e65f00;
        }
        .link-row {
          text-decoration: none;
          color: inherit;
          cursor: pointer;
        }

        .link-row:hover {
          background: #f3f4f6;
        }
      `}</style>
    </aside>
  );
}
