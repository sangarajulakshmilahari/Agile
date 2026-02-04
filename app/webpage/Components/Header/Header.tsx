"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
export default function Header() {
  const [username, setUsername] = useState<string | null>(null);
  useEffect(() => {
    const match = document.cookie.match(/(^| )username=([^;]+)/);
    if (match) {
      setUsername(decodeURIComponent(match[2]));
    }
  }, []);

  function handleLogout() {
    window.location.href = "/api/auth/logout";
  }

  return (
    <>
      <header className="header">
        {/* LEFT */}
        <div className="header-left">
          <Image
            src="/logo.png"
            alt="Adroitent logo"
            height={54}
            width={84}
            priority
          />
        </div>

        {/* RIGHT */}

        <div className="header-right">
          <FontAwesomeIcon icon={faBell} style={{ color: "#000" }} />
          <FontAwesomeIcon icon={faCircleUser} style={{ color: "#000" }} />
          <span className="user-name">{username ?? "User"}</span>
          <button
            className="logout-btn"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </button>
        </div>
      </header>

      <style jsx>{`
        .header {
          min-height: 72px; /* ✅ prevents clipping */
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
          position: relative;
          z-index: 50; /* ✅ stays on top */
        }

        .header-left {
          display: flex;
          align-items: center;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .user-name {
          font-size: 14px;
          font-weight: 500;
        }

        .logout-btn {
          background: #f56c00;
          border: none;
          padding: 6px 14px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
          cursor: pointer;
          color: #ffffff;
        }

        .logout-btn:hover {
          background: #d85e00;
        }
      `}</style>
    </>
  );
}
