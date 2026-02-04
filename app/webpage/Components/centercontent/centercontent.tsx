"use client";
import Holidaycalender from "../centercontent/Holidaycalender";
type AppItem = {
  name: string;
  description: string;
  icon: string;
  bg: string;
  hoverDescription: string;
  url?: string;
};

type CenterContentProps = {
  activeView: "home" | "holiday";
};

const apps: AppItem[] = [
  {
    name: "AATMA",
    description: "Talent Management System ",
    icon: "/icons/aatma_icon.svg",
    hoverDescription: "Adroitent Advanced Talent Management System",
    bg: "linear-gradient(90deg, #60a5fa 0%, #a855f7 100%)",
    url: "http://202.153.39.93:8092/",
  },
  {
    name: "AHDAR",
    description: "Help Desk",
    hoverDescription: "Adroitent Helpdesk Application Request",
    icon: "/icons/help_desk_icon.svg",
    bg: "linear-gradient(90deg, #c084fc 0%, #ec4899 100%)",
    url: "http://202.153.39.93:8085/ticket/",
  },
  {
    name: "AARNA",
    description: "Invoicing System",
    hoverDescription: "Adroitent Advanced Revenue Navigation System",
    icon: "/icons/droit_icon.svg",
    bg: "linear-gradient(90deg, #fb923c 0%, #ef4444 100%)",
    url: "https://aarna.adroitent.ai/Home/Index",
  },
  {
    name: "DEVAILEY",
    description: "Agentic AI Software Engineering Platform",
    hoverDescription: "Agentic AI Software Engineering Platform",
    icon: "/icons/devalley_icon.svg",
    bg: "linear-gradient(90deg, #7fdddd 0%, #0c7486 100%)",
    url: "http://202.153.39.93:7067/",
  },
  {
    name: "AARAM",
    description: "Leave and Attendance Management Systemt",
    hoverDescription: "Adroitent Absence Request and Attendance Management",
    icon: "/icons/aaram_icon.svg",
    bg: "linear-gradient(135deg, #00c9ff, #92fe9d)",
    url: "http://192.168.1.114:5000/",
  },
  {
    name: "ACARSH",
    description: "Sales CRM",
    hoverDescription:
      "Adroitent Customer Acquisition and Relationship Management system",
    icon: "/icons/knowledge_portal_icon.svg",
    bg: "linear-gradient(135deg, #0ea5e9, #9cd9f3)",
    url: "http://acarsh.adroitent.ai/",
  },
  {
    name: "DROIT",
    description: "Agentic AI Engineering Platform",
    hoverDescription:
      "Deploying Robust AI for Optimization and Transformation in Enterprises",
    icon: "/icons/code_gen_icon.svg",
    bg: "linear-gradient(135deg, #9697f5, #2737c9)",
    url: "http://droit.adroitent.ai:7081/login",
  },

  {
    name: "AAPTA",
    description: "Talent referral portal ",
    hoverDescription: "Adroitent Associate Portal for Talent Referral",
    icon: "/icons/code_gen_icon.svg",
    bg: "linear-gradient(135deg, #9697f5, #2737c9)",
    url: "http://referrals.adroitent.ai:8092/referral/index",
  },
  {
    name: "TALENTALIGN",
    description: "Agentic AI Talent Sourcing Platform  ",
    hoverDescription: "Agentic AI Talent Sourcing Platform",
    icon: "/icons/code_gen_icon.svg",
    bg: "linear-gradient(135deg, #9697f5, #2737c9)",
    url: "http://talentalign.ai/",
  },
];

export default function CenterContent({ activeView }: CenterContentProps) {
  if (activeView === "holiday") {
    return <Holidaycalender />;
  }
  return (
    <div className="center-wrapper">
      {/* ================= Vision + Mission CARD ================= */}
      <div className="main-card">
        <div className="mission-vision-wrapper">
          <div className="mv-card">
            <h2 style={{ color: "#3a77e3" }}>Our Mission</h2>
            <p>
              To become the{" "}
              <strong style={{ color: "#f56c00" }}>most sought-after</strong>{" "}
              Technology Partner for Enterprise AI Solutions in the market.
            </p>
          </div>

          <div className="mv-card">
            <h2 style={{ color: "#3a77e3" }}>Our Vision</h2>
            <p>
              We aspire to be the{" "}
              <strong style={{ color: "#f56c00" }}>indispensable</strong>{" "}
              Partner that enterprises turn to for AI-driven
              transformation—delivering not just technology, but enduring value,
              growth, and a future where businesses and people flourish
              together.
            </p>
          </div>
          <div className="core-values mv-card">
            <h2 style={{ color: "#3a77e3" }}>Our Core Values</h2>
            <ul style={{ listStyleType:"disc", paddingLeft: "20px", color: "#000000" }}>
              <li>Treat others the way you want to be treated</li>
              <li>Be Productive and Be Useful</li>
              <li>Make a Difference</li>
              <li>Be Resourceful and Enterprising</li>
              <li>Think Outside the Box</li>
              <li>Deliver Value, Always</li>
              <li>Ever Forward</li>
              <li>Profit is a Strategic Necessity</li>
              <li>Customer Partnerships First</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ================= Applications CARD ================= */}
      <div className="main-card">
        <p className="section-title">Applications</p>

        <div className="applications-grid">
          {apps.map((app) => (
            <div
              className="application-card"
              key={app.name}
              onClick={() => {
                if (app.url) {
                  window.open(app.url, "_blank");
                }
              }}
            >
            

              <div className="app-icon" style={{ background: app.bg }}>
                <img src={app.icon} alt={app.name} />
              </div>

              <div className="app-content">
                <h4>{app.name}</h4>
                <p>{app.description}</p>

                <div className="hover-box">{app.hoverDescription}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= Styles ================= */}
      <style jsx>{`
        .center-wrapper {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .main-card {
          background: #ffffff;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
        }

        /* Mission & Vision */
        .mission-vision-wrapper {
          display: flex;
          gap: 14px;
          
        }
        .core-values {
          background: #f9fafb;
          overflow-y: auto;
        }
        .mv-card {
          flex: 1;
          background: #f9fafb;
          border-radius: 16px;
          padding: 22px;
          overflow-y: auto;
          max-height: 300px;
        }

        .mv-card h2 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .mv-card p {
          font-size: 15px;
          line-height: 1.6;
          color: #444;
        }

        /* Applications */
        .section-title {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 16px;
          color: #ffffff;
        }

        .applications-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 20px;
        }

        .application-card {
          background: #f9fafb;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
          display: flex;
          gap: 14px;
          cursor: pointer;
          position: relative;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .application-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.12);
        }

        .app-icon {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .app-content {
          position: relative;
        }

        .hover-box {
          position: absolute;
          left: 0;
          top: 25%;

          width: 125%;
          padding: 8px 4px;

          background: #ffffff;
          border: 1px solid #dbdfe6;
          border-radius: 0px;

          font-size: 12px;
          line-height: 1.4;
          color: #334155;

          // box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);

          opacity: 0;
          visibility: hidden;
          transform: translateY(-4px);

          transition:
            opacity 0.2s ease,
            transform 0.2s ease;
        }

        .application-card:hover .tooltip {
          opacity: 1;
          transform: translateX(-50%) translateY(-4px);
        }

        .application-card:hover .hover-box {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        // .application-card:hover .app-content > *:not(.hover-box) {
        //   opacity: 0.2;
        // }

        .app-icon img {
          width: 22px;
          height: 22px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .application-card .app-content h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #000000; /* force black */
        }

        .app-content p {
          margin: 4px 0 6px;
          font-size: 13px;
          color: #6b7280;
        }

        .open-link {
          font-size: 13px;
          font-weight: 500;
          color: #3a77e3;
        }
      `}</style>
    </div>
  );
}
