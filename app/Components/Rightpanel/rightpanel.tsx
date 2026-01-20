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
        prev === eventImages.length - 1 ? 0 : prev + 1
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
                  currentIndex === 0 ? eventImages.length - 1 : currentIndex - 1
                )
              }
            >
              ‹
            </button>

            <button
              className="btn right"
              onClick={() =>
                setCurrentIndex(
                  currentIndex === eventImages.length - 1 ? 0 : currentIndex + 1
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

          <div className="mini">
            React Developer <span className="apply">Apply →</span>
          </div>

          <div className="mini">
            QA Engineer <span className="apply">Apply →</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .right-panel {
          width: 320px; /* match grid */
          max-width: 320px;
          justify-self: end; /* stick to right */
          overflow: hidden;
          box-sizing: border-box;
        }
        .section-heading {
          font-size: 18px;
          font-weight: 600;
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
          background: rgba(0, 0, 0, 0.45);
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
          background: rgba(255, 255, 255, 0.6);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .dot.active {
          width: 18px;
          border-radius: 6px;
          background: white;
        }

        .card {
          background: white;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .mini {
          background: #f9fafb;
          border-radius: 14px;
          padding: 12px;
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .events-card {
          background: #ffffff;
          border-radius: 14px;
          padding: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        }

        .events-title {
          font-size: 15px;
          font-weight: 600; /* 👈 makes it slightly bold */
          margin-bottom: 12px;
          color: #111827;
        }

        .mini {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          font-size: 14px;
        }

        .mini span {
          color: #6b7280;
          font-size: 13px;
        }
      `}</style>
    </aside>
  );
}
