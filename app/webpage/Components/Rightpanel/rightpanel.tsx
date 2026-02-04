import React from "react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RightPanel() {
  const [selectedPerson, setSelectedPerson] = useState<birthdays | null>(null);
  type birthdays = {
    name: string;
    date: string;
    email: string;
  };

  const birthdays = [
    {
      name: "Karthik Sairam Vasali",
      date: "Feb 12",
      email: "karthik.vasali@adroitent.ai",
    },
    {
      name: "Tharun Aadi R",
      date: "Feb 14",
      email: "tharun.ramakrishna@adroitent.ai",
    },
    {
      name: "Sai Mounika Kapuganti",
      date: "Feb 17",
      email: "mounika.kapuganti@adroitent.ai",
    },
  ];

  const eventImages = [
    "/Eventimages/1.png",
    "/Eventimages/2.png",
    "/Eventimages/3.png",
    "/Eventimages/4.png",
    "/Eventimages/5.jpg",
    "/Eventimages/6.jpeg",
    "/Eventimages/7.jpeg",
    "/Eventimages/8.jpeg",
    "/Eventimages/9.jpeg",
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
          <h3 className="events-title">Upcoming Birthdays</h3>

          {birthdays.map((person, index) => (
            <div
              key={index}
              className="mini clickable"
              onClick={() => setSelectedPerson(person)}
            >
              <span>{person.name}</span>
              <span>{person.date}</span>
            </div>
          ))}
        </div>
      </div>
      {selectedPerson && (
        <div className="modal-overlay">
          <div className="modal">
            <h4>Send Birthday Email?</h4>

            <p>
              Do you want to send a birthday email to
              <strong> {selectedPerson.name}</strong>?
            </p>

            <div className="modal-actions">
              <button
                className="btn-cancel"
                onClick={() => setSelectedPerson(null)}
              >
                Cancel
              </button>

              <button
                className="btn-send"
                onClick={() => {
                  window.location.href = `mailto:${selectedPerson.email}?subject=Happy Birthday 🎉`;
                  setSelectedPerson(null);
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .right-panel {
          width: 330px; /* match grid */
          max-width: 330px;
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
        .clickable {
          cursor: pointer;
        }

        .clickable:hover {
          background: #f3f4f6;
        }

        /* Past & Upcoming event text */
        .mini {
          color: #000000; /* force black */
        }

        /* Event title text inside mini cards */
        .mini span:not(.apply) {
          color: #000000; /* override global gray */
          font-size: 13px;
        }

        /* Job titles (React Developer, QA Engineer) */
        .link-row span:first-child {
          color: #000000;
          font-weight: 500;
        }
        .link-row:hover span:first-child {
          color: #111111;
        }
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .modal {
          background: white;
          padding: 20px;
          border-radius: 16px;
          width: 300px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .modal h4 {
          margin-bottom: 8px;
          color: #3a77e3;
        }

        .modal p {
          font-size: 14px;
          margin-bottom: 16px;
        }

        .modal-actions {
          display: flex;
          gap: 12px;
        }

        .btn-cancel {
          flex: 1;
          background: #e5e7eb;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
        }

        .btn-send {
          flex: 1;
          background: #f56c00;
          color: white;
          border: none;
          padding: 8px;
          border-radius: 8px;
          cursor: pointer;
        }

        .btn-send:hover {
          background: #e65f00;
        }
      `}</style>
    </aside>
  );
}
