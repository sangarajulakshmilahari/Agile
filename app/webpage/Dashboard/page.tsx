"use client";

import { useState, useEffect } from "react";

import Sidebar from "../Components/sidebar/sidebar";
import Centercontent from "../Components/centercontent/centercontent";
import RightPanel from "../Components/Rightpanel/rightpanel";
import Header from "../Components/Header/Header";

function DashboardLoader() {
  return (
    <div className="loader">
      <div className="spinner" />
      <p>Loading dashboard…</p>

      <style jsx>{`
        .loader {
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #0f172a;
          color: #e5e7eb;
        }

        .spinner {
          width: 42px;
          height: 42px;
          border: 4px solid rgba(255, 255, 255, 0.2);
          border-top-color: #38bdf8;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 14px;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [activeView, setActiveView] =
    useState<"home" | "holiday">("home");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 🔥 BLOCK dashboard until mount
  if (!mounted) {
    return <DashboardLoader />;
  }

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
          background: #ffffff;
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
          grid-template-columns: 200px minmax(0, 1fr) 330px;
        }

        .dashboard-layout.sidebar-closed {
          grid-template-columns: 50px minmax(0, 1fr) 330px;
        }

        .main-card {
          background: #ffffff;
          border-radius: 10px;
          padding: 14px;
          box-shadow: 0 12px 3px rgba(0, 0, 0, 0.06);
        }

        .center-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
        }
      `}</style>
    </>
  );
}
