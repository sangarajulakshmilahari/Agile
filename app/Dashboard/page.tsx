"use client";

import { useState, useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";

import Sidebar from "../Components/sidebar/sidebar";
import Centercontent from "../Components/centercontent/centercontent";
import RightPanel from "../Components/Rightpanel/rightpanel";
import Header from "../Components/Header/Header";

export default function Dashboard() {
  const { keycloak, initialized } = useKeycloak();

  const [activeView, setActiveView] = useState<"home" | "holiday">("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    if (initialized && !keycloak.authenticated) {
      keycloak.login();
    }
  }, [initialized, keycloak]);

  // if (!initialized) {
  //   return <div>Loading...</div>;
  // }

  // if (!keycloak.authenticated) {
  //   return <div>Redirecting to login...</div>;
  // }

  return (
    <>
      <div className="dashboard-page">
        <Header />

        <div
          className={`dashboard-layout ${
            sidebarOpen ? "sidebar-open" : "sidebar-closed"
          }`}
        >
          <Sidebar
            activeView={activeView}
            onChange={setActiveView}
            open={sidebarOpen}
            setOpen={setSidebarOpen}
          />

          <div className="center-column">
            <div className="main-card">
              <Centercontent activeView={activeView} />
            </div>
          </div>

          <RightPanel />
        </div>
      </div>

      <style jsx global>{`
        .dashboard-page {
          background: #f5f6fa;
          min-height: 100vh;
          overflow-x: hidden;
        }

        .dashboard-layout {
          display: grid;
          width: 100%;
          gap: 18px;
          padding: 16px;
          align-items: start;
          transition: grid-template-columns 0.25s ease;
        }

        .dashboard-layout.sidebar-open {
          grid-template-columns: 200px minmax(0, 1fr) 320px;
        }

        .dashboard-layout.sidebar-closed {
          grid-template-columns: 48px minmax(0, 1fr) 320px;
        }

        .main-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 14px;
          box-shadow: 0 12px 3px rgba(0, 0, 0, 0.06);
          flex-direction: column;
          gap: 2px;
        }

        .center-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
      `}</style>
    </>
  );
}
