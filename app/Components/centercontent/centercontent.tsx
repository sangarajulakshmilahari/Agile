"use client";
import Holidaycalender from "../centercontent/Holidaycalender";
type AppItem = {
  name: string;
  description: string;
  icon: string;
  bg: string;
  url?: string;
};

type CenterContentProps = {
  activeView: "home" | "holiday";
};

const apps: AppItem[] = [
  {
    name: "AATMa",
    description: "Test automation platform",
    icon: "/icons/aatma_icon.svg",
    bg: "linear-gradient(90deg, #60a5fa 0%, #a855f7 100%)",
    url: "https://192.168.1.81:8099",
  },
  {
    name: "Help Desk",
    description: "Support & ticket management",
    icon: "/icons/help_desk_icon.svg",
    bg: "linear-gradient(90deg, #c084fc 0%, #ec4899 100%)",
    url: "http://202.153.39.93:8085/ticket/",
  },
  {
    name: "AARNA",
    description: "Employee information system",
    icon: "/icons/droit_icon.svg",
    bg: "linear-gradient(90deg, #fb923c 0%, #ef4444 100%)",
    url: "https://192.168.1.81:7207",
  },
  {
    name: "DevAilley",
    description: "Developer tools & resources",
    icon: "/icons/devalley_icon.svg",
    bg: "linear-gradient(90deg, #7fdddd 0%, #0c7486 100%)",
    url: "http://202.153.39.93:7067/",
  },
  {
    name: "AARAM",
    description: "Access and roles management",
    icon: "/icons/aaram_icon.svg",
    bg: "linear-gradient(135deg, #00c9ff, #92fe9d)",
    url: "http://aaram.adroitent.ai:8000/",
  },
  {
    name: "ACarsh",
    description: "Asset management tool",
    icon: "/icons/knowledge_portal_icon.svg",
    bg: "linear-gradient(135deg, #0ea5e9, #9cd9f3)",
    url: "https://192.168.1.81:8090/",
  },
  {
    name: "DROIT",
    description: "Document review automation",
    icon: "/icons/code_gen_icon.svg",
    bg: "linear-gradient(135deg, #9697f5, #2737c9)",
    url: "http://droit.adroitent.ai:7081/login",
  },
  {
    name: "Test Case Generator",
    description: "AI-powered test case creation",
    icon: "/icons/test_case_icon.svg",
    bg: "linear-gradient(135deg, #eb3c93, #fb7185)",
    url: "https://adroitent.ai/",
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
        </div>
      </div>

      {/* ================= Applications CARD ================= */}
      <div className="main-card">
        <p className="section-title">Applications</p>

        <div className="applications-grid">
          {apps.map((app) => (
            <div className="application-card" key={app.name}>
              <div className="app-icon" style={{ background: app.bg }}>
                <img src={app.icon} alt={app.name} />
              </div>

              <div className="app-content">
                <h4>{app.name}</h4>
                <p>{app.description}</p>
                <span
                  className="open-link"
                  onClick={() => {
                    if (app.url) {
                      window.open(app.url, "_blank"); // opens in new tab
                    }
                  }}
                >
                  Open →
                </span>
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
          gap: 24px;
        }

        .mv-card {
          flex: 1;
          background: #f9fafb;
          border-radius: 16px;
          padding: 22px;
        }

        .mv-card h2 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
          color: #0b3c5d;
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

        .app-icon img {
          width: 22px;
          height: 22px;
          object-fit: contain;
          filter: brightness(0) invert(1);
        }

        .app-content h4 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
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
